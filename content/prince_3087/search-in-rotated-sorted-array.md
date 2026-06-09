---
title: "Search in Rotated Sorted Array"
slug: search-in-rotated-sorted-array
date: "2026-06-03"
---

# My Solution
~~~

~~~

# Submission Review
No code was provided for analysis. Please provide the solution you would like me to review.

---

# Question Revision
### Search in Rotated Sorted Array

**Pattern:** Modified Binary Search

**Brute Force:** 
Iterate through the entire array linearly to find the target.
- Time: $O(n)$
- Space: $O(1)$

**Optimal Approach:** 
Perform a binary search. In a rotated sorted array, at least one half of the current search range (`[left, mid]` or `[mid, right]`) must be sorted. 
1. Calculate `mid`.
2. If `nums[left] <= nums[mid]`, the left half is sorted. Check if the target lies within `nums[left]` and `nums[mid]`.
3. Otherwise, the right half must be sorted. Check if the target lies within `nums[mid]` and `nums[right]`.
4. Narrow the search range based on these boundaries.

- Time: $O(\log n)$
- Space: $O(1)$

**The 'Aha' Moment:** 
The requirement for $O(\log n)$ time on a "sorted" (albeit rotated) array signals Binary Search, with the trick being that one half of the split is always monotonically increasing.

**Summary:** 
Identify which half of the array is sorted to determine if the target resides within that range or the opposite rotated half.

---