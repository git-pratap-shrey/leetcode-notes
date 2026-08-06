---
title: "Find Missing Elements"
slug: find-missing-elements
date: "2026-08-04"
---

# My Solution
~~~

~~~

# Submission Review
Please provide the code you would like me to analyze. The `Code:` section of your request was left empty; therefore, I cannot perform the review.

---

# Question Revision
### Revision Report: Find Missing Elements

**Pattern:** In-place Marking (Cyclic Sort variant)

**Brute Force:** Use a Hash Set to store all existing elements, then iterate through the expected range $[1, n]$ to identify which values are missing from the set.

**Optimal Approach:** 
Iterate through the array; for every value $x$, treat $|x|-1$ as an index and mark the element at that position as negative. After the pass, any index $i$ that still holds a positive value indicates that the number $i+1$ is missing.
- **Time Complexity:** $O(n)$
- **Space Complexity:** $O(1)$ (excluding the result list)

**The 'Aha' Moment:** When the input values are bounded by the array's size, the array indices themselves can serve as a hash map for tracking presence.

**Summary:** Use the array's own indices to mark visited elements via sign inversion to achieve constant space.

---