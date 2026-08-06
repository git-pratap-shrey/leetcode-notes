---
title: "Maximum Matching of Players With Trainers"
slug: maximum-matching-of-players-with-trainers
date: "2026-08-05"
---

# My Solution
~~~

~~~

# Submission Review
No code was provided for analysis. Please provide the implementation you would like me to review.

---

# Question Revision
### Maximum Matching of Players With Trainers

**Pattern**: Greedy / Two Pointers

**Brute Force**: Generate all possible permutations of pairings between players and trainers and count the matches for each, selecting the maximum. 
- Time: $O(n!)$ or $O(2^n \cdot n)$

**Optimal Approach**: 
1. Sort both `players` and `trainers` arrays in ascending order.
2. Use two pointers (`p` for players, `t` for trainers).
3. Iterate through the arrays: if `players[p] <= trainers[t]`, a match is made; increment both pointers. Otherwise, increment only `t` to find a trainer with higher capacity.
- **Time Complexity**: $O(n \log n + m \log m)$ where $n$ and $m$ are lengths of the two arrays.
- **Space Complexity**: $O(1)$ (ignoring sorting overhead).

**The 'Aha' Moment**: The need to maximize matches given a "less than or equal to" constraint indicates that using the smallest viable trainer for the smallest player preserves larger trainers for more demanding players.

**Summary**: Sort both arrays and greedily match the smallest possible player to the smallest capable trainer.

---