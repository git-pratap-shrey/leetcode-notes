---
title: "Trapping Rain Water"
slug: trapping-rain-water
date: "2026-06-13"
---

# My Solution
~~~

~~~

# Submission Review
Please provide the code you would like me to analyze. The `Code:` section of your request is currently empty.

---

# Question Revision
### Trapping Rain Water

**Pattern:** Two Pointers

**Brute Force:** 
For every element, scan the entire array to the left and right to find the maximum heights. The water trapped at index $i$ is $\min(\text{max\_left}, \text{max\_right}) - \text{height}[i]$.
- **Time:** $O(n^2)$
- **Space:** $O(1)$

**Optimal Approach:** 
Initialize two pointers at the ends of the array and maintain `left_max` and `right_max`. Move the pointer pointing to the smaller height toward the center; if the current height is less than its respective boundary max, add the difference to the total. This works because the smaller of the two boundaries is the limiting factor for water retention.
- **Time:** $O(n)$
- **Space:** $O(1)$

**The 'Aha' Moment:** 
Water trapping is limited by the *shorter* of the two walls, so we only need to track the boundary that is currently the global minimum.

**Summary:** 
Water at any point is $\min(\text{max\_left}, \text{max\_right}) - \text{current\_height}$.

---