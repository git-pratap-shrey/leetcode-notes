(function () {
    function init() {
        const btn = document.getElementById('lc-btn');
        if (!btn || btn.dataset.bound) return;
        btn.dataset.bound = 'true';
        btn.addEventListener('click', submitUser);
        console.log('[LC] Button bound successfully');
    }

    async function submitUser() {
        const username = document.getElementById('lc-user').value.trim();
        const btn = document.getElementById('lc-btn');
        const status = document.getElementById('lc-status');

        console.log('[LC] Track clicked, username:', username);

        if (!username) {
            status.textContent = '⚠️ Please enter a username.';
            return;
        }

        btn.disabled = true;
        status.textContent = 'Registering...';

        let tunnelUrl = 'https://sustainability-collaboration-execute-kai.trycloudflare.com';

        try {
            const tunnelRes = await fetch('./tunnel.txt');
            if (tunnelRes.ok) {
                const text = (await tunnelRes.text()).trim();
                if (text.startsWith('http')) {
                    tunnelUrl = text;
                }
            }
            console.log('[LC] Tunnel URL:', tunnelUrl);
        } catch (e) {
            console.log('[LC] tunnel.txt fetch failed, using default:', tunnelUrl);
        }

        let res, rawText, data;

        try {
            console.log('[LC] Sending POST to', tunnelUrl + '/webhook/register-user');
            res = await fetch(`${tunnelUrl}/webhook/register-user`, {
                method: 'POST',
                mode: 'cors',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify({ username })
            });
            rawText = await res.text();
            console.log('[LC] Raw response:', rawText);
            status.textContent = '📡 Got response: ' + rawText.slice(0, 200);
        } catch (e) {
            console.error('[LC] Fetch error:', e);
            status.textContent = '❌ Could not reach the server. Is the tunnel running?';
            btn.disabled = false;
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
            status.innerHTML = `✅ Registered! Generating profile... redirecting in <span id="timer">120</span>s`;
            const timerInterval = setInterval(() => {
                timeLeft--;
                const timerElement = document.getElementById('timer');
                if (timerElement) timerElement.textContent = timeLeft;
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

    init();
    document.addEventListener('nav', init);
})();
