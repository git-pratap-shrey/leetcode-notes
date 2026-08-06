---
title: "Assign Cookies"
slug: assign-cookies
date: "2026-08-05"
---

# My Solution
~~~

~~~

# Submission Review
No code was provided for analysis. Please provide the implementation you would like me to review.

---

# Question Revision
### Assign Cookies

**Pattern:** Greedy / Two Pointers

**Brute Force:** For each child, iterate through all available cookies to find the smallest one that satisfies their greed factor, marking used cookies to avoid reuse.

**Optimal Approach:** Sort both the greed factors and the cookie sizes. Use two pointers to iterate through both arrays: if the current cookie size $\ge$ current child's greed, move both pointers (child satisfied); otherwise, move only the cookie pointer to find a larger cookie.
- **Time Complexity:** $O(n \log n + m \log m)$ where $n$ and $m$ are the lengths of the two arrays.
- **Space Complexity:** $O(1)$ or $O(\log n + \log m)$ depending on the sorting implementation.

**The 'Aha' Moment:** The goal to maximize the number of satisfied children by using the smallest sufficient resource suggests a greedy approach on sorted data.

**Summary:** Sort both arrays and use two pointers to match the smallest sufficient cookie to the least greedy child.

---