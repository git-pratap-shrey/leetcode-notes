---
title: "Two Sum"
slug: two-sum
date: "2026-06-01"
---

# My Solution
~~~

~~~

# Submission Review
No code was provided for analysis. Please provide the implementation you would like me to review.

---

# Question Revision
### Two Sum

**Pattern**: Hash Map (One-pass)

**Brute Force**: 
Iterate through every possible pair using nested loops to check if their sum equals the target.
- Time: $O(n^2)$
- Space: $O(1)$

**Optimal Approach**: 
Iterate through the array once. For each element `num`, calculate the `complement` (`target - num`). Check if this complement already exists in a hash map; if it does, return the current index and the complement's index. Otherwise, store the current `num` and its index in the map.
- Time: $O(n)$
- Space: $O(n)$

**The 'Aha' Moment**: The need to find a specific "complement" value instantly suggests using a hash map for $O(1)$ lookups.

**Summary**: Trade space for time by using a hash map to remember seen values and their indices.

---