---
title: "Sqrt(x)"
slug: sqrtx
date: "2026-06-06"
---

# My Solution
~~~

~~~

# Submission Review
Please provide the code you would like me to analyze. No code was included in your request.

---

# Question Revision
### Sqrt(x)

**Pattern:** Binary Search

**Brute Force:** Linear search from $0$ up to $x$, returning the last integer $i$ where $i^2 \le x$. Time: $O(\sqrt{x})$, Space: $O(1)$.

**Optimal Approach:** Perform binary search on the range $[0, x]$. Calculate $mid$; if $mid^2 \le x$, it is a potential answer, so move the left boundary to $mid + 1$ to find a larger possible integer. If $mid^2 > x$, move the right boundary to $mid - 1$.
- **Time Complexity:** $O(\log x)$
- **Space Complexity:** $O(1)$

**The 'Aha' Moment:** The problem asks for a value in a monotonically increasing range $[0, x]$, which is the classic signal for binary search.

**Summary:** Treat the range of possible square roots as a sorted array and binary search for the largest integer whose square does not exceed $x$.

---