---
title: "Maximize Pair Strength Using GCD"
slug: maximize-pair-strength-using-gcd
date: "2026-08-02"
---

# My Solution
~~~

~~~

# Submission Review
Please provide the code you would like me to analyze. The code section in your request is currently empty.

---

# Question Revision
### Maximize Pair Strength Using GCD

**Pattern:** Number Theory / GCD Iteration

**Brute Force:** 
Iterate through every possible pair $(i, j)$ in the array, calculate $gcd(nums[i], nums[j]) \times (nums[i] + nums[j])$, and track the maximum.
- Time: $O(n^2 \log(\max(nums)))$
- Space: $O(1)$

**Optimal Approach:** 
Instead of iterating over pairs, iterate over all possible GCD values $g$ from $1$ to $\max(nums)$. For each $g$, find the two largest numbers in the array that are multiples of $g$. The strength for that $g$ is $g \times (\text{max}_1 + \text{max}_2)$.
- Time: $O(M \log M)$, where $M$ is the maximum element value (Harmonic Series summation).
- Space: $O(M)$ to store element presence/frequency.

**The 'Aha' Moment:** 
When a formula depends on the GCD of two numbers, it is often more efficient to iterate over all possible divisors (GCDs) and their multiples than to iterate over pairs of elements.

**Summary:** 
Fix the GCD first, then greedily pick the two largest multiples of that GCD to maximize the pair strength.

---