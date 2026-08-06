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
Iterate through all possible pairs $(a, b)$ in the input array, calculate the strength using $GCD(a, b)$, and track the maximum value.
- **Time:** $O(n^2 \cdot \log(\min(a, b)))$
- **Space:** $O(1)$

**Optimal Approach:** 
Instead of pairs, iterate through every possible GCD value $g$ from the maximum element down to 1. For a fixed $g$, identify the two largest multiples of $g$ present in the dataset. If at least two multiples exist, calculate the strength and update the global maximum.
- **Time:** $O(M \log M)$ where $M$ is the maximum value in the array (based on the Harmonic series $\sum_{g=1}^{M} \frac{M}{g}$).
- **Space:** $O(M)$ to store the presence of numbers in a boolean array for $O(1)$ lookup.

**The 'Aha' Moment:** 
When a problem asks to maximize a function of $GCD(a, b)$, it is almost always faster to iterate over all possible GCD values and find their multiples than to iterate over all pairs.

**Summary:** 
To optimize GCD-based pair problems, iterate through potential GCDs and greedily select the largest available multiples.

---