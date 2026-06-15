---
title: "Middle of the Linked List"
slug: middle-of-the-linked-list
date: "2026-06-15"
---

# My Solution
~~~

~~~

# Submission Review
Please provide the code implementation you would like me to analyze. The **Code** section of your request is currently empty.

---

# Question Revision
### Middle of the Linked List

**Pattern:** Two Pointers (Fast & Slow)

**Brute Force:** Traverse the list once to calculate the total length $L$, then traverse a second time to the node at index $\lfloor L/2 \rfloor$.

**Optimal Approach:** Initialize two pointers, `slow` and `fast`, at the head. Move `slow` one step and `fast` two steps per iteration. When `fast` reaches the end of the list, `slow` will be positioned exactly at the middle.
- **Time Complexity:** $O(n)$
- **Space Complexity:** $O(1)$

**The 'Aha' Moment:** Whenever you need to find a specific relative position (like the middle or a cycle) in a linked list without knowing its length, use the Fast & Slow pointer technique.

**Summary:** A pointer moving at double speed leaves a slower pointer exactly at the midpoint upon completion.

---