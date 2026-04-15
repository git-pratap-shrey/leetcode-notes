---
title: Home
---

# LeetCode Notes

Welcome.

<div id="lc-submit">
  <div style="font-size: 0.8rem; color: var(--gray); margin-bottom: 8px; font-style: italic;">
    For new users, only submissions from the Recent AC list will be fetched, for existing users, new questions will be fetched automatically.
  </div>
  <div style="display: flex; gap: 10px; align-items: center; flex-wrap: wrap; margin-bottom: 8px;">
    <input id="lc-user" type="text" placeholder="LeetCode username" style="padding: 0.5rem; border-radius: 4px; border: 1px solid var(--lightgray); background: var(--light); color: var(--dark); flex: 1; min-width: 200px;" />
    <button id="lc-btn" style="padding: 0.5rem 1rem; border-radius: 4px; border: none; background: var(--tertiary); color: var(--light); cursor: pointer; font-weight: 600;">Track</button>
  </div>
  <p id="lc-status" style="margin: 4px 0;"></p>
</div>

---
About this project
---

This is a personal knowledge base that automatically converts LeetCode submissions into structured revision notes, also giving you, personalized code reviews.

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
