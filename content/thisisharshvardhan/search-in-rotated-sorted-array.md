---
title: "Search in Rotated Sorted Array"
slug: search-in-rotated-sorted-array
date: "2026-08-01"
---

# My Solution
~~~

~~~

# Submission Review
Please provide the code you would like me to analyze. The **Code:** section of your request was empty.

---

# Question Revision
### Search in Rotated Sorted Array

**Pattern:** Modified Binary Search

**Brute Force:** Linear scan through the array to find the target.
* Time: $O(n)$
* Space: $O(1)$

**Optimal Approach:**
1. Initialize `left` and `right` pointers.
2. Calculate `mid`. If `nums[mid] == target`, return index.
3. **Identify the sorted half:**
   - If `nums[left] <= nums[mid]`, the left half is sorted. Check if the target lies within `[nums[left], nums[mid])`. If so, move `right` to `mid - 1`; otherwise, move `left` to `mid + 1`.
   - If the right half is sorted, check if the target lies within `(nums[mid], nums[right]]`. If so, move `left` to `mid + 1`; otherwise, move `right` to `mid - 1`.
* Time: $O(\log n)$
* Space: $O(1)$

**The 'Aha' Moment:** In a rotated sorted array, splitting the range in half always guarantees that at least one of the two halves remains sorted.

**Summary:** Use binary search by identifying the sorted half to decide whether to narrow the search range to that half or the rotated opposite.

---