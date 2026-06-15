---
title: "Remove Nth Node From End of List"
slug: remove-nth-node-from-end-of-list
date: "2026-06-10"
---

# My Solution
~~~

~~~

# Submission Review
Please provide the code you would like me to review. You did not include the source code in your message. 

Once provided, I will analyze it based on your requested criteria:
*   **Approach**
*   **Complexity**
*   **Efficiency Feedback**
*   **Code Quality**

---

# Question Revision
### Revision Report: Remove Nth Node From End of List

**Pattern:** Two Pointers (Fast & Slow)

**Brute Force:**
1. Traverse the entire list to calculate its total length $L$.
2. Traverse a second time to reach the $(L - n)$ position.
3. Update the `next` pointer of the $(L - n - 1)$ node to skip the target node.
*   **Time Complexity:** $O(n)$ (two passes)
*   **Space Complexity:** $O(1)$

**Optimal Approach:**
1. Use two pointers, `fast` and `slow`, both starting at a `dummy` node (to handle head removal edge cases).
2. Advance `fast` by $n + 1$ steps.
3. Move `fast` and `slow` forward simultaneously until `fast` reaches `null`.
4. The `slow` pointer will now be resting exactly at the node *before* the one to be deleted.
*   **Time Complexity:** $O(n)$ (one pass)
*   **Space Complexity:** $O(1)$

**The 'Aha' Moment:**
The need to process an "end-relative" index in a single pass is the classic signal to use a fixed-gap two-pointer window.

**Summary:**
When you need to find an element relative to the end of a linked list, offset two pointers by $n$ and move them in lockstep until the leading pointer hits the finish line.

---