---
title: "Aggregate Two Time Series"
slug: aggregate-two-time-series
date: "2026-07-26"
---

# My Solution
~~~

~~~

# Submission Review
Please provide the code you would like me to analyze. The **Code** section of your request is currently empty.

---

# Question Revision
### Aggregate Two Time Series

**Pattern:** Two Pointers (Merge Sort Style)

**Brute Force:** Concatenate both arrays into one list, sort by timestamp, and then iterate through the sorted list to merge entries with duplicate timestamps.
*   **Time:** $O((N+M) \log (N+M))$
*   **Space:** $O(N+M)$

**Optimal Approach:** Leverage the fact that time series data is typically pre-sorted by timestamp. Use two pointers to traverse both arrays simultaneously. Compare timestamps at each pointer:
1.  **$T_1 < T_2$:** Append $T_1$ data, increment pointer 1.
2.  **$T_1 > T_2$:** Append $T_2$ data, increment pointer 2.
3.  **$T_1 = T_2$:** Aggregate values (sum/average) into a single entry, increment both pointers.
*   **Time:** $O(N+M)$
*   **Space:** $O(N+M)$ to store the result.

**The 'Aha' Moment:** The requirement to merge two already-sorted sequences indicates a linear merge process rather than a full re-sort.

**Summary:** Merge sorted timestamp arrays using two pointers, aggregating values on collisions to maintain linear time complexity.

---