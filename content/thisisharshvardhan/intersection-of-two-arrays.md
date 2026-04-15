---
title: "Intersection of Two Arrays"
slug: intersection-of-two-arrays
date: "2026-04-09"
---

# My Solution
~~~

~~~

# Submission Review
No code was provided for analysis. Please provide the implementation you would like me to review.

---

# Question Revision
### Intersection of Two Arrays

**Pattern:** Hash Set

**Brute Force:** 
Use nested loops to check every element of `nums1` against every element of `nums2`, adding matches to a result list if they aren't already present. 
*   Time: $O(n \cdot m)$
*   Space: $O(\min(n, m))$

**Optimal Approach:** 
Convert the smaller array into a Hash Set to achieve $O(1)$ average-time lookups. Iterate through the second array, adding elements to a result set if they exist in the first set.
*   **Time Complexity:** $O(n + m)$
*   **Space Complexity:** $O(\min(n, m))$

**The 'Aha' Moment:** 
The requirement for "unique elements" in the intersection is a direct signal to use a Set for both deduplication and fast membership testing.

**Summary:** 
Store one array in a Set and filter the second array against it to find unique commonalities in linear time.

---