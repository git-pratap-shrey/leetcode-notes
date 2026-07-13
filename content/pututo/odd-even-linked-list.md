---
title: "Odd Even Linked List"
slug: odd-even-linked-list
date: "2026-06-08"
---

# My Solution
~~~

~~~

# Submission Review
No code was provided for analysis. Please provide the implementation to receive a review based on the specified criteria.

---

# Question Revision
### Odd Even Linked List

**Pattern:** Two Pointers (Multi-pointer manipulation)

**Brute Force:**
Extract all node values into an array, separate them into two lists (odd-indexed and even-indexed), and rebuild the linked list from these values.
- **Time:** $O(n)$
- **Space:** $O(n)$

**Optimal Approach:**
Maintain two separate chains: an `odd` chain and an `even` chain. Use a pointer for the `evenHead` to remember where the even chain starts. Iterate through the list, assigning `odd.next` to `odd.next.next` and `even.next` to `even.next.next`, effectively decoupling the list into two. Finally, connect the tail of the odd chain to the `evenHead`.
- **Time:** $O(n)$
- **Space:** $O(1)$

**The 'Aha' Moment:**
The requirement to maintain relative order while segregating by index suggests maintaining two independent pointers that "leapfrog" over each other.

**Summary:**
Split the list into two separate odd and even chains and stitch them together at the end.

---