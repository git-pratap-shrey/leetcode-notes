---
title: "Koko Eating Bananas"
slug: koko-eating-bananas
date: "2026-06-04"
---

# My Solution
~~~

~~~

# Submission Review
No code was provided for analysis. Please provide the solution you would like me to review.

---

# Question Revision
### Koko Eating Bananas

**Pattern:** Binary Search on Answer

**Brute Force:** Linear search through all possible speeds $k$ from $1$ up to $\max(\text{piles})$. For each $k$, calculate total hours spent eating; the first $k$ that results in total hours $\le H$ is the answer.

**Optimal Approach:** 
The possible eating speeds are sorted in the range $[1, \max(\text{piles})]$. Since the ability to finish all bananas is monotonic (if speed $k$ works, any speed $> k$ also works), we use binary search to find the minimum feasible $k$. For each midpoint $k$, calculate total hours as $\sum \lceil \text{pile}/k \rceil$.

*   **Time Complexity:** $O(n \cdot \log(\max(\text{piles})))$
*   **Space Complexity:** $O(1)$

**The 'Aha' Moment:** The problem asks for the "minimum" value of a variable within a range where the feasibility follows a monotonic (True/False) pattern.

**Summary:** Binary search the eating speed range to find the lowest $k$ that allows Koko to finish all piles within $H$ hours.

---