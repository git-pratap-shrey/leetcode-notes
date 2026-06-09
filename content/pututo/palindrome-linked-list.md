---
title: "Palindrome Linked List"
slug: palindrome-linked-list
date: "2026-06-07"
---

# My Solution
~~~

~~~

# Submission Review
No code was provided for analysis. Please provide the implementation you would like me to review.

---

# Question Revision
### Palindrome Linked List

**Pattern:** Two Pointers (Fast & Slow) + Linked List Reversal

**Brute Force:** 
Copy all node values into an array and use two pointers (start and end) to check for a palindrome.
*   **Time:** $O(n)$
*   **Space:** $O(n)$

**Optimal Approach:**
1.  **Find Midpoint:** Use a `fast` pointer (2 steps) and `slow` pointer (1 step) to reach the center of the list.
2.  **Reverse Second Half:** Reverse the linked list starting from the `slow` pointer's position.
3.  **Comparison:** Iterate through both the original head and the reversed half head simultaneously, comparing values.
4.  **Complexity:** 
    *   **Time:** $O(n)$
    *   **Space:** $O(1)$

**The 'Aha' Moment:** Since a singly linked list cannot be traversed backwards, you must physically reverse the second half to enable a symmetric comparison.

**Summary:** Find the middle, reverse the second half, and compare it to the first half.

---