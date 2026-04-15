---
title: "Longest Consecutive Sequence"
slug: longest-consecutive-sequence
date: "2026-04-13"
---

# My Solution
~~~

~~~

# Submission Review
No code was provided for analysis. Please provide the source code you would like me to review.

---

# Question Revision
### Longest Consecutive Sequence

**Pattern:** Hashing / Set

**Brute Force:** Sort the array and iterate through it to count the longest streak of consecutive integers. 
- Time: $O(n \log n)$
- Space: $O(1)$ or $O(n)$ depending on sorting implementation.

**Optimal Approach:** 
1. Insert all numbers into a `Set` for $O(1)$ lookups.
2. Iterate through the array; for each number `n`, check if `n - 1` exists in the set.
3. If `n - 1` does **not** exist, `n` is the start of a potential sequence. Start a `while` loop to count how many consecutive integers (`n+1`, `n+2`, ...) exist in the set.
4. Update the maximum length found.

- **Time Complexity:** $O(n)$ — each element is visited at most twice.
- **Space Complexity:** $O(n)$ — to store the set.

**The 'Aha' Moment:** The $O(n)$ time requirement for an unsorted array implies that sorting is forbidden and a Hash Set must be used to achieve constant-time lookups.

**Summary:** Use a set to identify the start of a sequence (where `num - 1` is missing) and then count upwards to find the streak length.

---