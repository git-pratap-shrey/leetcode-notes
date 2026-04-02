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

  let res, rawText, data;

  try {
    res = await fetch('https://suite-avon-sheriff-slideshow.trycloudflare.com/webhook/register-user', {
      method: 'POST',
      mode: 'cors',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ username })
    });
    rawText = await res.text();
  } catch (e) {
    status.textContent = '❌ Could not reach the server. Is the tunnel running?';
    btn.disabled = false;
    return;
  }

  try {
    data = JSON.parse(rawText);
  } catch (e) {
    status.textContent = '❌ Unexpected response from server: ' + rawText.slice(0, 100);
    btn.disabled = false;
    return;
  }

  if (!res.ok) {
    status.textContent = '❌ ' + (data.error || 'Something went wrong.');
    btn.disabled = false;
    return;
  }

  // Redirect to the user's page
  window.location.href = '/leetcode-notes/' + username;
}
</script>