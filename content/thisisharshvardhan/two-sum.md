---
title: "Two Sum"
slug: two-sum
date: "2026-04-10"
---

# My Solution
~~~

~~~

# Submission Review
Please provide the code you would like me to analyze. No code was included in your request.

---

# Question Revision
### Two Sum

**Pattern:** Hash Map

**Brute Force:** 
Nested loops to iterate through every possible pair of elements to check if their sum equals the target.
- Time: $O(n^2)$
- Space: $O(1)$

**Optimal Approach:** 
Iterate through the array once. For each element, calculate the `complement` (`target - current_value`). If the complement exists in the hash map, return the stored index and the current index; otherwise, store the current value and its index in the map.
- Time: $O(n)$
- Space: $O(n)$

**The 'Aha' Moment:** 
The requirement to find a specific complementary value (`target - x`) instantly points to a Hash Map for $O(1)$ lookups.

**Summary:** 
Trade space for time by using a hash map to track visited numbers and their indices for instant complement retrieval.

---