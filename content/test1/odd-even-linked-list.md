---
title: "Odd Even Linked List"
slug: odd-even-linked-list
date: "2026-06-08"
---

# My Solution
~~~

~~~

# Submission Review
Please provide the code snippet you would like me to analyze. You did not include the code in your message. 

Once provided, I will evaluate it based on your criteria (Approach, Complexity, Efficiency, and Code Quality).

---

# Question Revision
### Revision Report: Odd Even Linked List

**Pattern:** Two Pointers / Pointer Manipulation

**Brute Force:** 
Create two separate lists—one for odd-indexed nodes and one for even-indexed nodes—by iterating through the original list, then traverse the odd list to the end and attach the head of the even list to the tail of the odd list.
*   **Time:** $O(n)$
*   **Space:** $O(n)$

**Optimal Approach:** 
Use two pointers (`odd` and `even`) to rearrange nodes in-place. Initialize `odd` at `head`, `even` at `head.next`, and `evenHead` to track the start of the even list. Iteratively update `odd.next` to `even.next` and `even.next` to `odd.next.next`, then jump the pointers forward. Finally, connect `odd.next` to `evenHead`.
*   **Time:** $O(n)$
*   **Space:** $O(1)$

**The 'Aha' Moment:**
The requirement to maintain the relative order of nodes while partitioning the list by parity suggests an in-place pointer relinking strategy rather than creating new nodes.

**Summary:** 
When asked to group elements by property (index or value) in a linked list, maintain two separate "chains" and re-link their pointers in a single pass to save space.

---