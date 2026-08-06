---
title: "Trapping Rain Water"
slug: trapping-rain-water
date: "2026-07-22"
---

# My Solution
~~~

~~~

# Submission Review
No code was provided for analysis. Please provide the implementation you would like reviewed.

---

# Question Revision
### Trapping Rain Water

**Pattern:** Two Pointers

**Brute Force:** 
For every element, iterate through the entire array to find the maximum height to its left and right. Calculate water as $\min(\text{max\_left}, \text{max\_right}) - \text{height}[i]$.
*   **Time:** $O(n^2)$
*   **Space:** $O(1)$

**Optimal Approach:** 
Maintain `left` and `right` pointers and their respective maximum heights. Move the pointer pointing to the smaller height inward; since the opposite side is guaranteed to be at least as tall as the current side's maximum, the water trapped depends solely on the current side's maximum.
*   **Time:** $O(n)$
*   **Space:** $O(1)$

**The 'Aha' Moment:** 
The water level at any point is limited by the *shorter* of the two boundaries, meaning we only need to track the maximum height of the side we are currently moving.

**Summary:** 
Calculate trapped water by moving pointers inward from both ends, adding the difference between the current height and the limiting maximum height of the shorter side.

---