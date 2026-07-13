---
title: "Two Sum"
slug: two-sum
date: "2026-06-01"
---

# My Solution
~~~

~~~

# Submission Review
No code was provided for analysis. Please provide the solution code and the language used to receive a review.

---

# Question Revision
### Two Sum

**Pattern:** Hash Map (Complement Lookup)

**Brute Force:** 
Use nested loops to iterate through every possible pair of elements to check if their sum equals the target.
*   **Time:** $O(n^2)$
*   **Space:** $O(1)$

**Optimal Approach:** 
Iterate through the array once. For each element, calculate the `complement` (`target - current_value`). Check if the complement exists in a Hash Map; if it does, return the indices. Otherwise, store the current value and its index in the map.
*   **Time:** $O(n)$
*   **Space:** $O(n)$

**The 'Aha' Moment:** 
The requirement to find a specific "complement" value efficiently indicates that a Hash Map can reduce the search time from $O(n)$ to $O(1)$.

**Summary:** 
Use a Hash Map to store visited numbers and their indices to find the target's complement in a single pass.

---