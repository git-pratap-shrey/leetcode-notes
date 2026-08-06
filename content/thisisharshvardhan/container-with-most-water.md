---
title: "Container With Most Water"
slug: container-with-most-water
date: "2026-08-05"
---

# My Solution
~~~

~~~

# Submission Review
No code was provided for analysis. Please provide the implementation you would like me to review, including the language used.

---

# Question Revision
### Container With Most Water

**Pattern:** Two Pointers

**Brute Force:** 
Iterate through every possible pair of vertical lines using nested loops, calculate the area for each, and track the maximum.
- Time: $O(n^2)$
- Space: $O(1)$

**Optimal Approach:**
Initialize one pointer at the start and one at the end of the array. Calculate the area using the distance between pointers and the minimum of the two heights. To potentially increase the area, move the pointer pointing to the shorter line inward, as the shorter line is the limiting factor.
- Time: $O(n)$
- Space: $O(1)$

**The 'Aha' Moment:** 
Since the height of the water is limited by the shorter wall, moving the taller wall can only decrease the width without ever increasing the height.

**Summary:** 
Maximize area by narrowing the window from both ends, always discarding the shorter boundary.

---