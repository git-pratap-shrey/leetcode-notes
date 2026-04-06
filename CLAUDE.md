# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when when working with code in this repository.

## Project Overview

This is a **Quartz v4** static site generator fork, customized to serve as a **personal LeetCode knowledge base**. An external n8n workflow (running on WSL2) tracks LeetCode usernames, fetches accepted submissions daily, generates structured markdown notes via Gemini Flash LLM, and pushes them to this repo under `content/<username>/`.

The site is deployed to GitHub Pages via `/deploy.yml` on every push to `main`.

## Key Commands

```bash
# Build the site locally with live preview
npx quartz build --serve

# Build once
npx quartz build

# Type check + prettier check
npm run check

# Format code
npm run format

# Run tests
npm run test

# Build docs directory only (for debugging)
npx quartz build --serve -d docs
```

## Architecture

- **`content/`** — Markdown source files. Each subdirectory represents a LeetCode username. Notes are auto-generated markdown pages with frontmatter.
- **`quartz.config.ts`** — Plugin configuration (transforms, filters, emitters). Controls parsing, syntax highlighting, link resolution, site sitemap/RSS, etc.
- **`quartz.layout.ts`** — Page layout configuration (which React/Preact components appear where).
- **`quartz/`** — Core Quartz engine (build pipeline, plugins, components, CSS).
- **`public/`** — Build output (gitignored, deployed to GitHub Pages).
- **`meta.json`** — State file tracking which submissions have been processed.

### Build Pipeline

Content flows through three plugin stages:

1. **Transformers** — Parse markdown, extract frontmatter, apply syntax highlighting, convert LaTeX/katex, resolve wikilinks.
2. **Filters** — Remove draft content.
3. **Emitters** — Output HTML, CSS, JS, redirects, sitemaps, RSS feeds, tag pages, folder pages.

### LeetCode Pipeline (External)

The n8n workflows (`leetcode-notes-main.json`, `leetcode-notes-authorizer.json`) handle:
1. User registration via the site
2. Daily fetch of recent accepted LeetCode submissions via GraphQL API
3. LLM (Gemini Flash) generates structured notes (pattern, complexity, insights)
4. Commits new markdown to `content/<username>/`
5. GitHub Pages auto-deploys

## Adding Content

- **Manual notes**: Create `.md` files in `content/` with YAML frontmatter.
- **Automatic notes**: Register a LeetCode username on the site's homepage and the n8n pipeline handles the rest.
