# Future Features

Potential enhancements for the Quartz v4 LeetCode knowledge base.

## Problem Difficulty Badges/Tags
- Display Easy / Medium / Hard badges on each problem card and page header.
- Source difficulty from the LeetCode GraphQL API or a local lookup table.
- Add difficulty-based filtering and sorting on index/tag pages.

## Category / Topic Grouping
- Organize problems by common patterns: Arrays, Trees, Dynamic Programming, Graphs, Two Pointers, Sliding Window, Binary Search, Backtracking, Greedy, etc.
- A dedicated "Topics" page that lists problems grouped by pattern.
- Frontmatter field `tags` or `topic` to drive grouping (Quartz already supports tag pages).
- Cross-reference pages showing related problems within the same topic.

## Solution Comparison
- Support multiple solutions per problem (brute force, optimized, alternative).
- Render a comparison table showing time/space complexity of each approach.
- Allow toggling between solutions with tabs (e.g., C++, Python, Java).

## User Analytics
- Streak tracking: consecutive days of solved problems visualized as a calendar heatmap.
- Progress charts: line or bar charts showing problems solved per week/month.
- Difficulty distribution pie chart (Easy vs Medium vs Hard ratio).
- Topic mastery radar chart showing coverage across problem categories.
- Could integrate a lightweight JS charting library (Chart.js, lightweight-charts).

## Search Improvements
- Full-text search powered by Quartz's built-in search with custom ranking (by date, difficulty, topic).
- Filterable search: narrow results by difficulty, topic, or date range.
- Search suggestions/autocomplete for problem titles and patterns.

## Code Snippet Syntax Selector
- A language switcher on solution blocks that toggles between C++, Python, Java, JavaScript, etc.
- Store multiple language snippets in a single note using YAML list or named code blocks.
- Remember the user's preferred language via localStorage.

## Spaced Repetition & Revision Reminders
- Track "revision due" dates based on spaced repetition intervals (1d, 3d, 7d, 21d).
- A "Due for Review" page listing problems whose revision date has passed.
- Email or notification hook via n8n to prompt daily review.

## Performance & CI Enhancements
- Incremental build caching to speed up Quartz rebuilds when only a few notes change.
- Pre-commit hook to validate frontmatter fields (title, slug, date presence).
- Automated difficulty and topic tagging via LLM during note generation in n8n.

## Social / Sharing Features
- Shareable problem cards (generated images with problem title, difficulty, user stats).
- Public leaderboard comparing users' problem counts and streaks.
- RSS feed per user so subscribers can follow specific users' progress.
