---
title: "Container With Most Water"
slug: container-with-most-water
date: "2026-06-03"
---

# My Solution
~~~

~~~

# Submission Review
Please provide the code you would like me to analyze. The `Language` and `Code` fields in your request are currently empty. Once the code is provided, I will review it for correctness, efficiency, and quality according to the requested format.

---

# Question Revision
### Container With Most Water

**Pattern:** Two Pointers

**Brute Force:** 
Calculate the area for every possible pair of lines using nested loops.
- Time: $O(n^2)$
- Space: $O(1)$

**Optimal Approach:** 
Initialize two pointers at the start and end of the array. Calculate the area, then move the pointer pointing to the **shorter** line inward. Since the width is strictly decreasing, the only way to potentially increase the area is to find a taller line to replace the current limiting height.
- Time: $O(n)$
- Space: $O(1)$

**The 'Aha' Moment:** 
The area is constrained by the shorter wall, so moving the taller wall can never increase the area, only moving the shorter one can.

**Summary:** 
Use two pointers at the boundaries and greedily shrink the width by moving the pointer at the shorter height.

---