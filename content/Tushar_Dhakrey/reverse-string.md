---
title: "Reverse String"
slug: reverse-string
date: "2026-06-04"
---

# My Solution
~~~

~~~

# Submission Review
Please provide the code you would like me to analyze. The "Code" section in your request was left empty.

---

# Question Revision
### Reverse String

**Pattern:** Two Pointers

**Brute Force:** 
Create a new array, populate it by iterating through the input array backwards, then copy the new array back into the original.
- Time: $O(n)$
- Space: $O(n)$

**Optimal Approach:** 
Initialize one pointer at the start (`left`) and one at the end (`right`). Swap the characters at these positions, then move the pointers toward each other until they meet in the center.
- Time: $O(n)$
- Space: $O(1)$

**The 'Aha' Moment:** 
The requirement to modify the input array "in-place" is a primary signal to use two pointers swapping from opposite ends.

**Summary:** 
Reverse a sequence in-place by swapping elements from the outside-in using two pointers.

---