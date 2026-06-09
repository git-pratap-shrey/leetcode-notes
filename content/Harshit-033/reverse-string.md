---
title: "Reverse String"
slug: reverse-string
date: "2026-06-05"
---

# My Solution
~~~

~~~

# Submission Review
No code was provided for analysis. Please provide the implementation to receive a review.

---

# Question Revision
### Reverse String

**Pattern:** Two Pointers

**Brute Force:** Create a temporary array, populate it with characters from the original string in reverse order, and then copy them back. 
- Time: $O(n)$
- Space: $O(n)$

**Optimal Approach:** Initialize two pointers—one at the start (`left`) and one at the end (`right`). Swap the characters at these positions and move the pointers toward each other until they meet in the middle.
- Time: $O(n)$
- Space: $O(1)$

**The 'Aha' Moment:** The requirement to modify the input "in-place" combined with a linear structure is a classic signal for the Two Pointers pattern.

**Summary:** Swap elements from the outside-in using two pointers to achieve $O(1)$ space complexity.

---