---
title: "Delete the Middle Node of a Linked List"
slug: delete-the-middle-node-of-a-linked-list
date: "2026-06-12"
---

# My Solution
~~~

~~~

# Submission Review
Please provide the source code you would like me to analyze. You haven't included the code in your message. Once you provide it, I will evaluate it based on your criteria.

---

# Question Revision
### Revision Report: Delete the Middle Node of a Linked List

**Pattern:** Two Pointers (Slow & Fast)

**Brute Force:**
1. Traverse the list once to count the total number of nodes ($n$).
2. Calculate the middle index as $n // 2$.
3. Traverse the list a second time to reach the node just before the middle index, then update its `next` pointer to skip the middle node.
*   **Time:** $O(n)$
*   **Space:** $O(1)$

**Optimal Approach:**
1. Initialize two pointers, `slow` and `fast`, at the head.
2. Use a `dummy` node pointing to the head to handle edge cases (like a single-node list).
3. Move `fast` two steps and `slow` one step per iteration.
4. When `fast` reaches the end, `slow` will be positioned exactly at the node *preceding* the middle. Update `slow.next = slow.next.next`.
*   **Time:** $O(n)$
*   **Space:** $O(1)$

**The 'Aha' Moment:**
Whenever a problem requires identifying a position relative to the end of a linked list or finding the midpoint without knowing the length upfront, a "runner" technique using two pointers at different speeds is the standard tool.

**Summary:**
When you need to find the "middle" or "nth from end" in one pass, move a fast pointer ahead of a slow pointer to create a fixed-distance offset.

---