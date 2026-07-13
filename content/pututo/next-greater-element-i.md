---
title: "Next Greater Element I"
slug: next-greater-element-i
date: "2026-06-07"
---

# My Solution
~~~

~~~

# Submission Review
No code was provided for analysis. Please provide the source code you would like me to review.

---

# Question Revision
### Next Greater Element I

**Pattern:** Monotonic Stack

**Brute Force:** For every element in `nums1`, locate its position in `nums2` and linearly scan all elements to its right until a larger value is found.

**Optimal Approach:** 
Iterate through `nums2` and maintain a **monotonic decreasing stack**. When the current element is greater than the stack's top, the current element is the "Next Greater Element" for that top element; pop it and store the pair in a hash map. After one pass of `nums2`, simply map `nums1` values to their corresponding results in the hash map.
- **Time Complexity:** $O(n + m)$ where $n$ is `nums1.length` and $m$ is `nums2.length`.
- **Space Complexity:** $O(m)$ to store the stack and the hash map.

**The 'Aha' Moment:** The requirement to find the "first element to the right that is larger" is a classic signal to use a monotonic stack.

**Summary:** Use a monotonic stack to pre-calculate all next-greater relationships in the reference array and store them in a map for instant lookup.

---