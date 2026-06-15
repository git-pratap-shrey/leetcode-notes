---
title: "Climbing Stairs"
slug: climbing-stairs
date: "2026-06-12"
---

# My Solution
~~~

~~~

# Submission Review
Please provide the code you would like me to analyze! You haven't included the code in your message. Once provided, I will review it based on your criteria.

---

# Question Revision
### Revision Report: Climbing Stairs

**Pattern:** Dynamic Programming / Fibonacci Sequence

**Brute Force:** 
Use recursion to explore every path: at each step, you can take either 1 or 2 stairs. This results in a branching factor of 2, leading to $O(2^n)$ time complexity due to redundant calculations.

**Optimal Approach:**
Recognize that to reach step $n$, you must have come from either step $n-1$ or $n-2$. Therefore, $f(n) = f(n-1) + f(n-2)$. Use an iterative approach (or two variables) to store only the last two results, avoiding the need for an $O(n)$ array.
*   **Time Complexity:** $O(n)$
*   **Space Complexity:** $O(1)$

**The 'Aha' Moment:**
When the current state relies entirely on the sum of two distinct previous states, you are simply looking at the Fibonacci sequence in disguise.

**Summary:**
If the current decision is the sum of previous independent decisions, discard the recursion tree and track only the last two states in constant space.

---