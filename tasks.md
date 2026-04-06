# Tasks Progress

## Feature 1: Offline Username Storage (localStorage + auto-retry)
- [x] Plan finalized
- [ ] Rewrite `content/script.js` with localStorage helpers, pending badge, auto-retry on load

## Feature 2: Per-Question Dates (enhanced meta.json)
- [ ] Create and run `migrate-meta.js`
- [ ] Update `leetcode-notes-authorizer.json` — `check status` node
- [ ] Update `leetcode-notes-main.json` — 5 nodes
  - [ ] `split-per-user` (questions: [] → {})
  - [ ] `filter-by-hour` (normalize format, pass `solvedAt` date)
  - [ ] `collect-slugs` (push objects instead of strings)
  - [ ] `updated json` (write object format, handle migration)
  - [ ] `create .mds` (add `date:` to frontmatter)
- [ ] Create `backfill-dates.sh` (optional)

## Other
- [ ] Create `future_features.md` with feature descriptions
