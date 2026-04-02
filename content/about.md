---
About this project
---

This is a personal knowledge base that automatically converts LeetCode submissions into structured revision notes.

It is not a public tool. Access is limited to a small group of people.

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