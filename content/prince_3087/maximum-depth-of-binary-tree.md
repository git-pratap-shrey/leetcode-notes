---
title: "Maximum Depth of Binary Tree"
slug: maximum-depth-of-binary-tree
date: "2026-07-28"
---

# My Solution
~~~

~~~

# Submission Review
No code was provided for analysis. Please provide the implementation you wish to have reviewed.

---

# Question Revision
### Maximum Depth of Binary Tree

**Pattern:** DFS / Recursion

**Brute Force:** Level-order traversal (BFS) using a queue to count levels one by one until the queue is empty.

**Optimal Approach:** Recursive post-order traversal. The height of the current node is $1$ plus the maximum height of its left and right subtrees.
- **Time Complexity:** $O(n)$
- **Space Complexity:** $O(h)$ where $h$ is the height of the tree (recursion stack).

**The 'Aha' Moment:** The depth of a node is a recursive property defined by the maximum depth of its children.

**Summary:** Use recursion to bubble up the maximum height from the leaves to the root.

---