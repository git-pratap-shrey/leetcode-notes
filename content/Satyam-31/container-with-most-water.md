---
title: "Container With Most Water"
slug: container-with-most-water
date: "2026-06-03"
---

# My Solution
~~~

~~~

# Submission Review
No code was provided for analysis. Please provide the implementation you would like me to review.

---

# Question Revision
### Container With Most Water

**Pattern:** Two Pointers

**Brute Force:** Iterate through every possible pair of lines using nested loops to calculate the area for each combination and track the maximum.
- Time: $O(n^2)$
- Space: $O(1)$

**Optimal Approach:** Place pointers at the extreme left and right to start with maximum width. Calculate area, then move the pointer pointing to the shorter line inward, as the area is bottlenecked by the shorter height.
- Time: $O(n)$
- Space: $O(1)$

**The 'Aha' Moment:** Since the area is limited by the shorter bar, moving the taller bar can only decrease the area (width decreases while height stays capped by the shorter bar).

**Summary:** Start with maximum width and greedily move the pointer at the shorter height to seek a taller boundary.

---