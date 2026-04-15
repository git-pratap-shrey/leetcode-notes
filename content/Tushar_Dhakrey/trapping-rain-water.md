---
title: "Trapping Rain Water"
slug: trapping-rain-water
date: "2026-04-14"
---

# My Solution
~~~

~~~

# Submission Review
No code was provided for analysis. Please provide the implementation you would like me to review.

---

# Question Revision
### Trapping Rain Water

**Pattern:** Two Pointers

**Brute Force:** For every index $i$, iterate through the entire array to find the maximum heights to the left and right; water trapped is $\min(\text{left\_max}, \text{right\_max}) - \text{height}[i]$.

**Optimal Approach:** 
Use two pointers (`left`, `right`) and two variables (`left_max`, `right_max`). Move the pointer pointing to the smaller height toward the center, as the water level is limited by the shorter boundary. Update the corresponding max and add the difference between the current max and the current height to the total.
- **Time Complexity:** $O(n)$
- **Space Complexity:** $O(1)$

**The 'Aha' Moment:** The water trapped at any bar is determined by the *shorter* of the two boundary peaks, allowing us to ignore the taller side and process from the outside in.

**Summary:** Use two pointers to track boundaries and process the shorter side inward to calculate trapped water based on the limiting height.

---