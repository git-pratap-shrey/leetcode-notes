---
title: "Climbing Stairs"
slug: climbing-stairs
date: "2026-06-12"
---

# My Solution
~~~

~~~

# Submission Review
No code was provided for analysis. Please provide the implementation you would like me to review.

---

# Question Revision
### Revision Report: Climbing Stairs

**Pattern:** Dynamic Programming (Fibonacci Sequence)

**Brute Force:**
Use recursion to calculate the number of ways to reach step $n$ by summing the ways to reach $n-1$ and $n-2$. This results in a redundant recursive tree.
- **Time:** $O(2^n)$
- **Space:** $O(n)$ (recursion stack)

**Optimal Approach:**
Use an iterative approach with two variables to track the ways to reach the previous two steps, as the current step is always the sum of the two preceding ones.
- **Logic:** `current = prev1 + prev2`
- **Time:** $O(n)$
- **Space:** $O(1)$

**The 'Aha' Moment:** 
Recognizing that the total ways to reach the current step is the sum of the ways to reach the two steps immediately below it.

**Summary:** 
The problem is a direct application of the Fibonacci sequence where $f(n) = f(n-1) + f(n-2)$.

---