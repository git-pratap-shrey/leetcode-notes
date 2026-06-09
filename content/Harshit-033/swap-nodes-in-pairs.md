---
title: "Swap Nodes in Pairs"
slug: swap-nodes-in-pairs
date: "2026-05-28"
---

# My Solution
~~~

~~~

# Submission Review
No code was provided for analysis. Please provide the implementation you would like me to review.

---

# Question Revision
### Revision Report: Swap Nodes in Pairs

**Pattern:** Linked List Manipulation

**Brute Force:** 
Extract all node values into an array, swap adjacent elements in the array, and write the values back into the original nodes.
*   **Time:** $O(n)$
*   **Space:** $O(n)$

**Optimal Approach:** 
Use a **dummy node** to simplify head transitions and a `prev` pointer to track the node immediately preceding the pair being swapped. For each pair (`first`, `second`), rewire the pointers: `prev.next` $\to$ `second`, `first.next` $\to$ `second.next`, and `second.next` $\to$ `first`.
*   **Time:** $O(n)$
*   **Space:** $O(1)$

**The 'Aha' Moment:** 
The requirement to swap *nodes* rather than *values* signals that pointer redirection is mandatory, and the pairing structure necessitates a tracking pointer (`prev`) to maintain list continuity.

**Summary:** 
Use a dummy node and a trailing pointer to iteratively rewire pairs as `prev` $\to$ `second` $\to$ `first` $\to$ `next_pair`.

---