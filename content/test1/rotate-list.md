---
title: "Rotate List"
slug: rotate-list
date: "2026-06-12"
---

# My Solution
~~~

~~~

# Submission Review
Please provide the code you would like me to review. You did not include the source code in your message. 

Once you provide the code, I will evaluate it based on the criteria: **Approach**, **Complexity**, **Efficiency**, and **Code Quality**.

---

# Question Revision
### Revision Report: Rotate List

**Pattern:** Linked List Manipulation / Cycle Detection

**Brute Force:**
Rotate the list $k$ times by moving the tail element to the head in each iteration.
*   **Time:** $O(k \times n)$
*   **Space:** $O(1)$

**Optimal Approach:**
1.  Connect the tail to the head to form a **circular linked list**.
2.  Calculate the effective rotation point by computing `k % length`.
3.  Traverse to the new tail position (`length - k % length - 1`) and break the circle.
*   **Time:** $O(n)$ (two passes: one to find length, one to find the split point).
*   **Space:** $O(1)$.

**The 'Aha' Moment:**
When a problem involves shifting elements beyond the list boundaries, treating the list as a ring allows you to perform rotations via pointer reassignment rather than nested iterations.

**Summary:**
Convert the linear list into a circular one to treat modular index shifting as a simple pointer break operation.

---