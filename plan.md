# Plan: Offline Username Storage + Per-Question Dates

## Context

Two problems to solve:
1. When n8n server is offline, homepage registration fails silently with no recovery
2. Dates shown on folder pages are wrong — they use filesystem/git dates instead of actual LeetCode solve dates

## Feature 1: Offline Username Storage (localStorage + auto-retry)

### Scope
Modify **one file**: `content/script.js`

### Changes
- Add `localStorage` helpers (`getPendingUsers`, `savePendingUsers`, `addPendingUser`, `removePendingUser`)
- On form submit: try webhook first → on failure, save to localStorage, show "X pending — auto-retry on revisit" message
- On page load (`init`): read pending usernames from localStorage, attempt to submit them one-by-one, remove from localStorage on success
- Add a visual "X pending" badge indicator on the homepage
- No changes to n8n workflows needed — pending usernames are retried by the client when it revisits the site and the tunnel is back up

### Edge Cases
- Duplicate prevention via `includes()` check before adding to pending
- Same username submitted twice → deduplicated in localStorage
- User clears localStorage → harmless, they can re-register

---

## Feature 2: Per-Question Dates (enhanced meta.json)

### New meta.json structure
```json
{"user": {"questions": {"two-sum": {"date": "2024-01-15", "language": "cpp"}}}}
→ from: {"user": {"questions": ["two-sum"]}}
```

The solve date from LeetCode's `timestamp` field gets written into each `.md` file's YAML frontmatter as `date: "YYYY-MM-DD"`. Quartz already reads frontmatter first (`priority: ["frontmatter", "git", "filesystem"]`), so no quartz config changes needed.

### Changes Required

#### 1. `migrate-meta.js` — one-time migration script (creates, then deletes after use)
Converts all existing users from `questions: []` to `questions: {}` format. Marks old entries with `date: null, language: null`.

#### 2. `leetcode-notes-authorizer.json` — 1 node change
**Node: `check status`** (line `meta[username] = { questions: [] }`)
→ Change to `meta[username] = { questions: {} }`

#### 3. `leetcode-notes-main.json` — 4 node changes

**Node: `split-per-user`**
- `data.questions || []` → `data.questions || {}`

**Node: `filter-by-hour`**
- Normalize to handle both array and object formats: `const processedSlugs = Array.isArray(processedQuestions) ? processedQuestions : Object.keys(processedQuestions)`
- Add `solvedAt: new Date(sub.timestamp * 1000).toISOString().split('T')[0]` to pass date through the chain

**Node: `collect-slugs`**
- Instead of `grouped[username].push(titleSlug)`, push objects: `{ slug: titleSlug, date: solvedAt, language: lang }`

**Node: `updated json`**
- Use object keys with `ensureNewFormat` helper to handle mixed formats
- Write `meta[username].questions[entry.slug] = { date, language }` instead of `push`

**Node: `create .mds`**
- Add `date: "{{ solvedAt }}"` to the YAML frontmatter in the markdown template

#### 4. `backfill-dates.sh` — optional one-time script
Adds `date` frontmatter to existing `.md` files using git commit dates as fallback. This ensures old content also gets proper dates.

---

## File Summary

| File | Action | Feature |
|------|--------|---------|
| `content/script.js` | Rewrite with localStorage logic + pending badge | 1 |
| `migrate-meta.js` | Create, run, delete after migration | 2 |
| `leetcode-notes-authorizer.json` | Edit 1 code node | 2 |
| `leetcode-notes-main.json` | Edit 4 code nodes + 1 executeCommand node | 2 |
| `meta.json` | Transform via migration script | 2 |
| `backfill-dates.sh` | Create, optionally run | 2 |

**No changes needed** to: `quartz.config.ts`, `quartz/components/*.tsx` — existing frontmatter-first date reading handles everything once dates are present in markdown.

---

## Verification

1. Run `npx quartz build` to confirm site still builds after script.js changes
2. Check new `.md` files have `date:` in frontmatter after next pipeline run
3. Verify folder pages show correct dates on the built site
4. Test localStorage flow: kill n8n, register a username, reload page, restart n8n, reload page again — should auto-submit
