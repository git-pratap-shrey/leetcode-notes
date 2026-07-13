---
title: "Delete the Middle Node of a Linked List"
slug: delete-the-middle-node-of-a-linked-list
date: "2026-06-12"
---

# My Solution
~~~

~~~

# Submission Review
No code was provided for analysis. Please provide the implementation you wish to have reviewed.

---

# Question Revision
### Delete the Middle Node of a Linked List

**Pattern:** Two Pointers (Fast & Slow)

**Brute Force:** 
Traverse the list once to calculate the total length $N$, then traverse a second time to the $(N/2 - 1)$-th node and skip the subsequent node.

**Optimal Approach:**
Use a `slow` pointer moving one step and a `fast` pointer moving two steps. By the time `fast` reaches the end of the list, `slow` will be positioned at the middle node. Use a `prev` pointer to track the node immediately preceding `slow` to perform the deletion (`prev.next = slow.next`).
- **Time Complexity:** $O(n)$
- **Space Complexity:** $O(1)$

**The 'Aha' Moment:** 
The requirement to find a relative midpoint in a singly linked list without knowing the length upfront is a classic trigger for the "Tortoise and Hare" technique.

**Summary:** Use slow and fast pointers to locate the middle in a single pass, ensuring you maintain a reference to the previous node to decouple the target.

---