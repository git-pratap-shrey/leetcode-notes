---
title: "Largest Integer With Given Digit Sum"
slug: largest-integer-with-given-digit-sum
date: "2026-07-26"
---

# My Solution
~~~

~~~

# Submission Review
Please provide the code you would like me to analyze. There was no code included in your message.

---

# Question Revision
### Revision Report: Largest Integer With Given Digit Sum

**Pattern:** Greedy

**Brute Force:** Generate all possible integers with length $\le \text{maxNum}$ and digit sum $\le \text{digitSum}$, then identify the maximum.

**Optimal Approach:** To maximize an integer, maximize the most significant digits (leftmost) first. Fill positions from left to right with `9`s until the `digitSum` is depleted or `maxNum` is reached. If the remaining `digitSum` is between $1$ and $8$, place that value in the next slot and fill any remaining length with `0`s.
- **Time Complexity:** $O(\text{maxNum})$
- **Space Complexity:** $O(\text{maxNum})$ (to store the resulting string/number)

**The 'Aha' Moment:** The requirement for the "largest" integer dictates a greedy strategy of maximizing the highest place values first.

**Summary:** Fill as many leading positions as possible with 9s until the digit sum budget is exhausted or the length limit is hit.

---