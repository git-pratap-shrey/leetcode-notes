---
title: "Remove Nth Node From End of List"
slug: remove-nth-node-from-end-of-list
date: "2026-06-10"
---

# My Solution
~~~

~~~

# Submission Review
No code was provided for analysis. Please provide the **Language** and the **Code** implementation you would like me to review.

---

# Question Revision
### Remove Nth Node From End of List

**Pattern:** Two Pointers (Fast & Slow / Fixed Gap)

**Brute Force:** 
Perform two passes: first, traverse the entire list to find its total length $L$; second, traverse to the $(L - n)$-th node and unlink the subsequent node.

**Optimal Approach:**
1. Initialize a `dummy` node pointing to `head` to handle edge cases (e.g., removing the first node).
2. Advance a `fast` pointer $n$ steps ahead.
3. Move both `fast` and `slow` pointers one step at a time until `fast` reaches the end of the list.
4. Because the gap is maintained at $n$, `slow` now points to the node immediately *before* the target.
5. Update `slow.next` to `slow.next.next` to bypass the target node.

- **Time Complexity:** $O(n)$
- **Space Complexity:** $O(1)$

**The 'Aha' Moment:** 
Finding a position relative to the *end* of a singly linked list without knowing the length suggests maintaining a constant gap of $n$ nodes between two pointers.

**Summary:** 
Use a dummy node and a two-pointer gap of $n$ to locate and delete the target node in a single traversal.

---