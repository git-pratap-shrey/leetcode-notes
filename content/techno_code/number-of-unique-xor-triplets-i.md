---
title: "Number of Unique XOR Triplets I"
slug: number-of-unique-xor-triplets-i
date: "2026-07-23"
---

# My Solution
~~~

~~~

# Submission Review
Please provide the code you would like me to analyze. The **Code** section in your request was left empty.

---

# Question Revision
### Revision Report: Number of Unique XOR Triplets

**Pattern:** Hashing / XOR Properties

**Brute Force:**
Iterate through all possible triplets $(i, j, k)$ using three nested loops and check if their XOR sum meets the criteria.
- **Time:** $O(n^3)$
- **Space:** $O(1)$

**Optimal Approach:**
Use a frequency map to store the occurrences of each number. Iterate through all pairs $(i, j)$ and calculate the required third value using the property: if $a \oplus b \oplus c = \text{target}$, then $c = \text{target} \oplus a \oplus b$. Use the map to count how many times $c$ appears, subtracting instances where $c$ is the same index as $i$ or $j$ to avoid reuse.
- **Time:** $O(n^2)$
- **Space:** $O(n)$

**The 'Aha' Moment:**
The identity $a \oplus b \oplus c = K \iff c = K \oplus a \oplus b$ transforms a search for a third element into a constant-time hash map lookup.

**Summary:**
Reduce a triplet search to a pair search by using XOR's self-inverse property to solve for the third missing element.

---