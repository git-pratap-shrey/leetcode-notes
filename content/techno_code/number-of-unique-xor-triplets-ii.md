---
title: "Number of Unique XOR Triplets II"
slug: number-of-unique-xor-triplets-ii
date: "2026-07-24"
---

# My Solution
~~~

~~~

# Submission Review
No code was provided for analysis. Please provide the implementation you would like reviewed to proceed.

---

# Question Revision
### Revision Report: Number of Unique XOR Triplets II

**Pattern:** Hashing / XOR Property

**Brute Force:** 
Three nested loops iterating through all possible index combinations $(i, j, k)$ to check if $nums[i] \oplus nums[j] \oplus nums[k] = \text{target}$.
- Time: $O(n^3)$
- Space: $O(1)$

**Optimal Approach:**
1. Store frequencies of all numbers in a hash map to handle duplicates and get a list of unique elements $U$.
2. Iterate through all pairs of unique elements $(u_i, u_j)$.
3. Calculate the required third element: $u_k = \text{target} \oplus u_i \oplus u_j$.
4. To ensure uniqueness and avoid overcounting, only count the triplet if $u_i \le u_j \le u_k$ and $u_k$ exists in the map.
5. Handle cases where $u_i, u_j, u_k$ are not distinct using combinations (e.g., $\binom{freq}{k}$).

- **Time Complexity:** $O(u^2)$ where $u$ is the number of unique elements.
- **Space Complexity:** $O(u)$ to store the frequency map.

**The 'Aha' Moment:**
The XOR operation is its own inverse, meaning the equation $a \oplus b \oplus c = K$ can be rearranged to $c = K \oplus a \oplus b$, reducing the search space from $O(n^3)$ to $O(n^2)$.

**Summary:**
Reduce a triplet search to a pair search by solving for the third element using the XOR inverse property.

---