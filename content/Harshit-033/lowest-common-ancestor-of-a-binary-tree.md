---
title: "Lowest Common Ancestor of a Binary Tree"
slug: lowest-common-ancestor-of-a-binary-tree
date: "2026-07-30"
---

# My Solution
~~~

~~~

# Submission Review
No code was provided for analysis. Please provide the implementation you would like me to review, along with the programming language used.

---

# Question Revision
### Lowest Common Ancestor of a Binary Tree

**Pattern:** Tree DFS (Post-order Traversal)

**Brute Force:** 
Perform two separate traversals to find and store the paths from the root to nodes `p` and `q` in lists. Compare the paths element-by-element; the last common node before the paths diverge is the LCA.

**Optimal Approach:**
Use a recursive bottom-up approach. For any given node:
1. If the node is `null`, `p`, or `q`, return the node itself.
2. Recursively search the left and right subtrees.
3. If both the left and right calls return non-null, the current node is the LCA.
4. If only one call returns non-null, return that non-null value (propagating the found target upwards).

**Complexity:**
- Time: $O(n)$ where $n$ is the number of nodes.
- Space: $O(h)$ where $h$ is the height of the tree (recursion stack).

**The 'Aha' Moment:**
The LCA is the unique node where the search for `p` and `q` first "converges" from opposite subtrees during a bottom-up traversal.

**Summary:**
Bubble up the target nodes via post-order DFS; the first node to receive signals from both child branches is the LCA.

---