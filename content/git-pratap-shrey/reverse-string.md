---
title: "Reverse String"
slug: reverse-string
date: "2026-06-05"
---

# My Solution
~~~

~~~

# Submission Review
No code was provided for analysis. Please provide the source code to receive a review.

---

# Question Revision
### Revision Report: Reverse String

**Pattern:** Two Pointers

**Brute Force:** 
Create a temporary array, iterate through the input string backwards to fill the temporary array, and then copy the elements back into the original string.

**Optimal Approach:**
Initialize two pointers: `left` at index $0$ and `right` at $n-1$. Swap the characters at these positions and increment `left` while decrementing `right` until they meet or cross in the center.
- **Time Complexity:** $O(n)$
- **Space Complexity:** $O(1)$

**The 'Aha' Moment:** 
The requirement to modify the input "in-place" indicates that I should avoid extra memory and instead swap elements symmetrically from the edges inward.

**Summary:** 
Reverse the array in-place by swapping elements from the outside-in using two pointers.

---