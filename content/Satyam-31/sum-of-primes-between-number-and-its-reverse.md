---
title: "Sum of Primes Between Number and Its Reverse"
slug: sum-of-primes-between-number-and-its-reverse
date: "2026-05-03"
---

# My Solution
~~~

~~~

# Submission Review
Please provide the code you would like me to analyze. The "Code" section in your request is currently empty.

---

# Question Revision
### Sum of Primes Between Number and Its Reverse

**Pattern:** Sieve of Eratosthenes / Prime Generation

**Brute Force:** 
Reverse the number to define the range $[\min(N, R), \max(N, R)]$. Iterate through every integer in this range and check primality using trial division up to $\sqrt{x}$.

**Optimal Approach:**
1. Reverse the input integer $N$ to get $R$.
2. Define the limit $M = \max(N, R)$.
3. Use a Sieve of Eratosthenes to precompute all primes up to $M$ using a boolean array.
4. Iterate from $\min(N, R)$ to $M$, summing values where the sieve array is `true`.

*   **Time Complexity:** $O(M \log \log M)$ to build the sieve, where $M$ is the maximum of the number and its reverse.
*   **Space Complexity:** $O(M)$ to store the primality array.

**The 'Aha' Moment:** 
The need to evaluate multiple candidates for primality within a contiguous range signals that a Sieve is more efficient than repeated individual primality tests.

**Summary:** 
Reverse the number to establish a range and apply a Sieve of Eratosthenes to efficiently sum all primes within those boundaries.

---