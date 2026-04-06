(function () {
    const PENDING_KEY = 'lc_pending_users';

    // ── localStorage helpers ───────────────────────────────────

    function getPendingUsers() {
        try {
            return JSON.parse(localStorage.getItem(PENDING_KEY)) || [];
        } catch {
            return [];
        }
    }

    function savePendingUsers(users) {
        localStorage.setItem(PENDING_KEY, JSON.stringify(users));
    }

    function addPendingUser(username) {
        const pending = getPendingUsers();
        if (!pending.includes(username)) {
            pending.push(username);
            savePendingUsers(pending);
        }
    }

    function removePendingUser(username) {
        const pending = getPendingUsers().filter(u => u !== username);
        savePendingUsers(pending);
    }

    function clearPendingUsers() {
        localStorage.removeItem(PENDING_KEY);
    }

    // ── Tunnel URL ─────────────────────────────────────────────

    async function getTunnelUrl() {
        let url = 'https://sustainability-collaboration-execute-kai.trycloudflare.com';
        try {
            const res = await fetch('./tunnel.txt');
            if (res.ok) {
                const text = (await res.text()).trim();
                if (text.startsWith('http')) url = text;
            }
        } catch {
            // use default
        }
        return url;
    }

    // ── Webhook submit (stands alone, no UI mutation) ──────────

    async function submitToWebhook(username, tunnelUrl) {
        // Always probe for existing page first
        let userExists = false;
        try {
            const probe = await fetch(`/leetcode-notes/${username}/index.html`, { method: 'GET' });
            userExists = probe.ok;
        } catch { }

        const res = await fetch(`${tunnelUrl}/webhook/register-user`, {
            method: 'POST',
            mode: 'cors',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({ username })
        });

        if (userExists) {
            // Already have content — we consider it a win regardless
            return { ok: true, status: 'existing' };
        }

        const rawText = await res.text();
        let data;
        try {
            data = JSON.parse(rawText.replace(/^=+/, ''));
        } catch {
            return { ok: res.ok, status: 'parse_error', raw: rawText };
        }

        if (!res.ok) {
            return { ok: false, error: data.error || 'Unknown error' };
        }

        return { ok: true, status: data.status || 'ok', data };
    }

    // ── Badge helper ─────────────────────────────────────────────

    function updateBadge() {
        const pending = getPendingUsers();
        let badge = document.getElementById('lc-badge');
        if (pending.length === 0) {
            if (badge) badge.remove();
            return;
        }
        if (!badge) {
            badge = document.createElement('span');
            badge.id = 'lc-badge';
            badge.style.cssText =
                'margin-left:8px;background:#e67e22;color:#fff;padding:2px 8px;border-radius:10px;font-size:13px;';
            const container = document.getElementById('lc-container')
                || document.querySelector('h1')
                || document.body;
            container.appendChild(badge);
        }
        badge.textContent = pending.length + ' pending';
    }

    // ── Retry pending users on page load ────────────────────────

    async function retryPendingUsers() {
        const pending = getPendingUsers();
        if (pending.length === 0) return;

        console.log(`[LC] Retrying ${pending.length} pending user(s)…`);

        const results = await Promise.allSettled(
            pending.map(async (username) => {
                try {
                    const tunnelUrl = await getTunnelUrl();
                    const result = await submitToWebhook(username, tunnelUrl);
                    return { username, result };
                } catch (e) {
                    return { username, result: { ok: false, error: e.message } };
                }
            })
        );

        let succeeded = 0;
        for (const entry of results) {
            if (entry.status === 'fulfilled' && entry.value.result.ok) {
                removePendingUser(entry.value.username);
                succeeded++;
            }
        }

        if (succeeded > 0) {
            console.log(`[LC] ${succeeded} pending user(s) submitted successfully.`);
        }

        updateBadge();
    }

    // ── Form submit ─────────────────────────────────────────────

    async function submitUser() {
        const username = document.getElementById('lc-user').value.trim();
        const btn = document.getElementById('lc-btn');
        const status = document.getElementById('lc-status');

        if (btn.disabled) return;
        if (!username) {
            status.textContent = '⚠️ Please enter a username.';
            return;
        }

        btn.disabled = true;
        status.textContent = 'Checking...';

        const tunnelUrl = await getTunnelUrl();

        // Check if user already exists on the static site
        let userExists = false;
        try {
            const probe = await fetch(`/leetcode-notes/${username}/index.html`, { method: 'GET' });
            userExists = probe.ok;
        } catch { }

        // Always fire the webhook
        let res, rawText, data;
        try {
            status.textContent = 'Registering...';
            res = await fetch(`${tunnelUrl}/webhook/register-user`, {
                method: 'POST',
                mode: 'cors',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify({ username })
            });
            rawText = await res.text();
            console.log('[LC] Raw response:', rawText);
        } catch (e) {
            // ── Server offline — cache to localStorage ───
            console.error('[LC] Fetch error, caching offline:', e);
            addPendingUser(username);
            const pending = getPendingUsers();
            status.textContent =
                '⚠️ Server offline — saved "' + username + '". ' +
                pending.length + ' username(s) pending — will auto-retry on next visit.';
            btn.disabled = false;
            updateBadge();
            return;
        }

        try {
            data = JSON.parse(rawText.replace(/^=+/, ''));
            console.log('[LC] Parsed data:', data);
        } catch (e) {
            console.error('[LC] JSON parse error:', e);
            status.textContent = '❌ Unexpected response: ' + rawText.slice(0, 100);
            btn.disabled = false;
            return;
        }

        if (!res.ok) {
            status.textContent = '❌ ' + (data.error || 'Something went wrong.');
            btn.disabled = false;
            return;
        }

        if (data.status === 'new') {
            let timeLeft = 120;
            status.innerHTML =
                '✅ Registered! Generating profile... redirecting in <span id="timer">120</span>s';
            const timerInterval = setInterval(() => {
                timeLeft--;
                const timerEl = document.getElementById('timer');
                if (timerEl) timerEl.textContent = timeLeft;
                if (timeLeft <= 0) {
                    clearInterval(timerInterval);
                    window.location.href = '/leetcode-notes/' + username + '/';
                }
            }, 1000);
        } else {
            status.textContent = '✅ Welcome back! Redirecting...';
            window.location.href = '/leetcode-notes/' + username + '/';
        }
    }

    // ── Init ────────────────────────────────────────────────────

    function init() {
        const btn = document.getElementById('lc-btn');
        const input = document.getElementById('lc-user');
        if (!btn || btn.dataset.bound) return;
        btn.dataset.bound = 'true';

        btn.addEventListener('click', submitUser);
        if (input) {
            input.addEventListener('keydown', (e) => {
                if (e.key === 'Enter') {
                    submitUser();
                }
            });
        }
        console.log('[LC] UI elements bound successfully');
        updateBadge();
    }

    // Boot: retry pending first, then init UI
    retryPendingUsers();
    init();
    document.addEventListener('nav', init);
})();
