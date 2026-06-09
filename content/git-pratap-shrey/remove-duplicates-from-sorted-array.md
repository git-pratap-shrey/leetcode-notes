---
title: "Remove Duplicates from Sorted Array"
slug: remove-duplicates-from-sorted-array
date: "2026-06-01"
---

# My Solution
~~~

~~~

# Submission Review
No code was provided for analysis. Please provide the implementation you would like me to review in the **Code** section, and specify the **Language**.

---

# Question Revision
### Remove Duplicates from Sorted Array

**Pattern:** Two Pointers

**Brute Force:** Use a Hash Set to track unique elements and overwrite the original array.  
*   **Time:** $O(n)$  
*   **Space:** $O(n)$

**Optimal Approach:** 
Maintain two pointers: a `slow` pointer that tracks the index of the last unique element found, and a `fast` pointer that iterates through the array. Whenever `nums[fast]` differs from `nums[slow]`, increment `slow` and copy the value of `nums[fast]` to that position.
*   **Time:** $O(n)$
*   **Space:** $O(1)$

**The 'Aha' Moment:** The "sorted" constraint guarantees that all duplicate elements are adjacent, eliminating the need for a Hash Set.

**Summary:** Use a slow pointer to overwrite the array with unique values encountered by a fast pointer.

---