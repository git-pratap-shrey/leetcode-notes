---
title: "Minimum Add to Make Parentheses Valid"
slug: minimum-add-to-make-parentheses-valid
date: "2026-04-14"
---

# My Solution
~~~

~~~

# Submission Review
No code was provided for analysis. Please provide the implementation and the language to proceed with the review.

---

# Question Revision
### Minimum Add to Make Parentheses Valid

**Pattern:** Greedy / Balance Tracking

**Brute Force:** Exhaustively test all possible insertion points and combinations of characters to find the shortest string that satisfies validity rules.

**Optimal Approach:** 
Maintain two counters: `open_unmatched` and `close_unmatched`. Iterate through the string:
1. If character is `(`, increment `open_unmatched`.
2. If character is `)`, check if `open_unmatched > 0`. If so, decrement it (pair found); otherwise, increment `close_unmatched`.
3. Total additions required = `open_unmatched + close_unmatched`.

- **Time Complexity:** $O(n)$
- **Space Complexity:** $O(1)$

**The 'Aha' Moment:** Validity is determined by the net deficiency of pairs, meaning any parenthesis that cannot be paired during a single linear scan must be compensated for by an addition.

**Summary:** Track unmatched opens and closes independently to calculate the total deficit.

---