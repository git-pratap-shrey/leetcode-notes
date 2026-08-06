---
title: "Next Greater Element I"
slug: next-greater-element-i
date: "2026-08-01"
---

# My Solution
~~~

~~~

# Submission Review
No code was provided in your request. Please provide the solution implementation to be analyzed.

---

# Question Revision
### Next Greater Element I

**Pattern:** Monotonic Stack + Hash Map

**Brute Force:** 
For every element in `nums1`, locate its index in `nums2` and iterate through the remaining elements to the right until a larger value is encountered.
- **Time:** $O(n \times m)$
- **Space:** $O(1)$

**Optimal Approach:**
1. Traverse `nums2` and maintain a **decreasing stack** of elements.
2. Whenever the current element is greater than the stack's top, the current element is the "next greater" for that top element. Pop the stack and store the pair in a Hash Map.
3. Push the current element onto the stack.
4. Iterate through `nums1` and retrieve the pre-computed values from the map.
- **Time:** $O(n + m)$
- **Space:** $O(m)$

**The 'Aha' Moment:** 
The requirement to find the "first larger element to the right" is the signature trigger for a Monotonic Stack.

**Summary:** 
Pre-compute all next-greater relationships in the larger array using a monotonic stack and store them in a map for constant-time retrieval.

---