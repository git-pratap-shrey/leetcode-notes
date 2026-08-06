---
title: "Maximize Pair Strength Using GCD"
slug: maximize-pair-strength-using-gcd
date: "2026-08-02"
---

# My Solution
~~~

~~~

# Submission Review
No code or language was provided in your request. Please provide the implementation you would like me to analyze.

---

# Question Revision
### Revision Report: Maximize Pair Strength Using GCD

**Pattern:** Number Theory (GCD-centric Iteration)

**Brute Force:** 
Evaluate all possible pairs $(i, j)$, calculate their GCD, and compute strength.
- **Time:** $O(n^2 \log M)$ where $M$ is the maximum element.
- **Space:** $O(1)$.

**Optimal Approach:** 
Instead of iterating over pairs, iterate over all possible GCD values $g$ from $M$ down to $1$. For each $g$, find the two largest multiples of $g$ present in the array by iterating backwards from $M$ in steps of $g$.
- **Time:** $O(M \log M)$ (based on the Harmonic series $\sum_{i=1}^{M} \frac{M}{i}$).
- **Space:** $O(M)$ to store element existence in a boolean array/frequency map.

**The 'Aha' Moment:** 
When the objective function depends heavily on the GCD, it is often more efficient to iterate over all possible GCD values than over all possible pairs.

**Summary:** 
Iterate through all potential GCDs and greedily pick the two largest available multiples for each.

---