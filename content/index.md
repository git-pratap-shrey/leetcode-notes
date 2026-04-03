---
title: Home
---

# LeetCode Notes

Welcome.

<div id="lc-submit">
  <div style="font-size: 0.8rem; color: var(--gray); margin-bottom: 8px; font-style: italic;">
    Only submissions from the last 24/48 hours will be fetched.
  </div>
  <div style="display: flex; gap: 10px; align-items: center; flex-wrap: wrap; margin-bottom: 8px;">
    <input id="lc-user" type="text" placeholder="LeetCode username" style="padding: 0.5rem; border-radius: 4px; border: 1px solid var(--lightgray); background: var(--light); color: var(--dark); flex: 1; min-width: 200px;" />
    <button id="lc-btn" style="padding: 0.5rem 1rem; border-radius: 4px; border: none; background: var(--tertiary); color: var(--light); cursor: pointer; font-weight: 600;">Track</button>
  </div>
  <p id="lc-status" style="margin: 4px 0;"></p>
  <div style="font-size: 0.75rem; color: var(--gray); line-height: 1.4; max-width: 500px; font-style: italic;">
    Note: This is being run on the developer's personal system, which may be unavailable; new users or new submissions might have to wait a few hours. The system will update automatically, sit tight.
  </div>
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

Register username → automatic daily fetch → LLM generates notes → pushed to this page.

<script src="script.js"></script>