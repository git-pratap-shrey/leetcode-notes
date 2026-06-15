---
title: "Trapping Rain Water"
slug: trapping-rain-water
date: "2026-06-13"
---

# My Solution
~~~

~~~

# Submission Review
Please provide the code you would like me to analyze. I am ready to review your solution once you paste it.

---

# Question Revision
### Revision Report: Trapping Rain Water

**Pattern:** Two Pointers / Pre-computation (Prefix/Suffix Max)

**Brute Force:** For each element, iterate to the left to find the max height and to the right to find the max height; the water trapped at index `i` is `min(max_left, max_right) - height[i]`.
*   **Complexity:** $O(n^2)$ Time, $O(1)$ Space.

**Optimal Approach:** Use two pointers (`left` and `right`) starting at the ends of the array. Maintain `left_max` and `right_max`. Always move the pointer pointing to the shorter wall, as the water level is constrained by the shorter side.
*   **Complexity:** $O(n)$ Time, $O(1)$ Space.

**The 'Aha' Moment:** The realization that water trapped at any bar is determined strictly by the *minimum* of the maximum heights encountered so far from either direction, allowing you to process the smaller side greedily.

**Summary:** Whenever water capacity is constrained by the "limiting factor" (the shorter side), use two pointers to track running maximums from both ends simultaneously.

---