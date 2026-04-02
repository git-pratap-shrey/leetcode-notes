---
title: Home
---

# LeetCode Notes

Welcome.

<div id="lc-submit">
  <input id="lc-user" type="text" placeholder="LeetCode username" />
  <button id="lc-btn" onclick="submitUser()">Track</button>
  <p id="lc-status"></p>
</div>

<script>
async function submitUser() {
  const username = document.getElementById('lc-user').value.trim();
  if (!username) return;

  const btn = document.getElementById('lc-btn');
  const status = document.getElementById('lc-status');

  btn.disabled = true;
  status.textContent = 'Registering...';

  try {
    const res = await fetch('/https://suite-avon-sheriff-slideshow.trycloudflare.com/register-user', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ username })
    });

    const data = await res.json();

    if (!res.ok) {
      status.textContent = '❌ ' + (data.error || 'Something went wrong.');
      btn.disabled = false;
      return;
    }

    // Swap form out entirely
    document.getElementById('lc-submit').innerHTML = `
      <div style="padding: 1rem; border-left: 3px solid var(--secondary);">
        <strong>✅ You're registered, ${username}!</strong>
        <p style="margin-top: 0.5rem; opacity: 0.8;">
          Notes get generated on the next sync (runs daily at 5:30 AM).<br/>
          Your page will be at <a href="/content/${username}">/content/${username}</a> after the first run.
        </p>
      </div>
    `;
  } catch (e) {
    status.textContent = '❌ Could not reach the server. Is the tunnel running?';
    btn.disabled = false;
  }
}
</script>