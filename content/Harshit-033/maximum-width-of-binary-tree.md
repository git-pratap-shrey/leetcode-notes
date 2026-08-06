---
title: "Maximum Width of Binary Tree"
slug: maximum-width-of-binary-tree
date: "2026-08-02"
---

# My Solution
~~~

~~~

# Submission Review
No code was provided for analysis. Please provide the implementation you would like me to review.

---

# Question Revision
### Maximum Width of Binary Tree

**Pattern:** BFS (Level Order Traversal) + Heap-based Indexing

**Brute Force:**
Attempting to physically traverse or store every `null` node between the leftmost and rightmost boundaries. This is computationally impossible for highly skewed trees where the width could be $2^{depth}$.

**Optimal Approach:**
Treat the binary tree as a complete binary tree by assigning a position index to every node. If a parent node is at index $i$, its left child is at $2i$ and its right child is at $2i + 1$. Perform a BFS, and for each level, calculate the width as `(last_node_index - first_node_index) + 1`.

*   **Time Complexity:** $O(n)$ — Each node is visited exactly once.
*   **Space Complexity:** $O(n)$ — Worst-case queue size for a full binary tree.

**The 'Aha' Moment:**
The requirement to count "null nodes in between" suggests that positions should be calculated mathematically (like a binary heap) rather than traversed physically.

**Summary:**
Use BFS with heap-style indexing ($2i, 2i+1$) to find the distance between the first and last indices at every level.

---