---
title: "Move Zeroes"
slug: move-zeroes
date: "2026-08-04"
---

# My Solution
~~~

~~~

# Submission Review
It appears you haven't provided the code for the solution. Please paste the code you would like me to analyze, and I will review it according to the specified criteria.

---

# Question Revision
### Move Zeroes

**Pattern:** Two Pointers

**Brute Force:** Use an auxiliary array to store all non-zero elements in order, then fill the remaining slots with zeros and copy it back to the original array.

**Optimal Approach:** 
Maintain a `slow` pointer (write-head) and a `fast` pointer (read-head). Iterate with `fast`; whenever a non-zero element is encountered, swap it with the element at the `slow` pointer and increment `slow`.
- **Time Complexity:** $O(n)$
- **Space Complexity:** $O(1)$

**The 'Aha' Moment:** The requirement to maintain "relative order" while modifying the array "in-place" signals a read/write pointer strategy.

**Summary:** Use a write-pointer to shift all non-zero elements to the front, effectively bubbling zeros to the end.

---