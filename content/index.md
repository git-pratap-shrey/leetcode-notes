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

---
About this project
---

This is a personal knowledge base that automatically converts LeetCode submissions into structured revision notes, also giving you, personalized code reviews.

It is not available for mass public use yet, but you can try things out.

---

## How it works

When a username is registered on the homepage, the system tracks that user's recent accepted submissions. A scheduled pipeline runs daily, fetches new problems, generates structured notes using an LLM, and publishes them here as markdown pages under that user's section.

Notes are only generated once per problem per user. Already-processed submissions are skipped on subsequent runs [for now].

---

## The Mission

LeetCode tracks that a problem was solved. It does not help retain how it was solved over time. This system bridges that gap by converting each accepted submission into a structured note covering the pattern used, complexity, and the core insight that unlocks the solution.

---

## Technical Stack

- Workflow engine: n8n (WSL2)
- Language: JavaScript + Bash
- LLM: Gemini Flash
- API: LeetCode GraphQL
- State: meta.json
- Output: Markdown, published via Quartz on GitHub Pages

---

## TL;DR

Register username → automatic daily fetch → deduplicate via meta.json → LLM generates notes → pushed to this page.

<script>
async function submitUser() {
  const username = document.getElementById('lc-user').value.trim();
  if (!username) return;

  const btn = document.getElementById('lc-btn');
  const status = document.getElementById('lc-status');

  btn.disabled = true;
  status.textContent = 'Registering...';

  try {
    const res = await fetch('https://suite-avon-sheriff-slideshow.trycloudflare.com/webhook/register-user', {
      // const res = await fetch('http://localhost:5678/webhook-test/register-user', {
      method: 'POST',
      mode: 'cors',
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