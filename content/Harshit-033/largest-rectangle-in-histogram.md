---
title: "Largest Rectangle in Histogram"
slug: largest-rectangle-in-histogram
date: "2026-04-14"
---

# My Solution
~~~

~~~

# Submission Review
No code was provided for analysis. Please provide the implementation for the **Largest Rectangle in Histogram** problem, along with the language used, to receive a detailed review following the requested format.

---

# Question Revision
### Largest Rectangle in Histogram

**Pattern:** Monotonic Stack

**Brute Force:** 
Iterate through every possible pair of boundaries $(i, j)$, find the minimum height within that range, and calculate the area: $\text{width} \times \min(\text{heights})$.
*   **Time Complexity:** $O(n^2)$
*   **Space Complexity:** $O(1)$

**Optimal Approach:** 
Maintain a **monotonic increasing stack** of indices. When the current bar is shorter than the bar at the stack's top, the top bar's "right limit" is the current index, and its "left limit" is the index below it in the stack. Pop the stack and calculate the area using the popped bar as the minimum height. Append a zero-height bar to the end of the input to ensure all remaining elements are processed.
*   **Time Complexity:** $O(n)$ (each element is pushed and popped exactly once)
*   **Space Complexity:** $O(n)$

**The 'Aha' Moment:** 
The rectangle's height is limited by the shortest bar; therefore, for every bar, we need to find the nearest smaller elements to its left and right to determine its maximum possible width.

**Summary:** 
Use a monotonic stack to find the left and right boundaries of the largest rectangle that can be formed using each bar as the minimum height.

---