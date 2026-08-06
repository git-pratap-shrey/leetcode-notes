---
title: "Validate Binary Search Tree"
slug: validate-binary-search-tree
date: "2026-08-01"
---

# My Solution
~~~

~~~

# Submission Review
Please provide the code implementation you would like me to analyze. The `Code:` section of your request is currently empty, and per my instructions, I cannot hallucinate or assume a specific implementation.

---

# Question Revision
### Validate Binary Search Tree

**Pattern:** DFS / Recursion (Range Constraints)

**Brute Force:** For every node, traverse its entire left subtree to verify all values are smaller and its entire right subtree to verify all values are larger.

**Optimal Approach:** Perform a recursive DFS passing a `min` and `max` boundary. A node is valid if `min < node.val < max`. When moving left, update the `max` boundary to the current node's value; when moving right, update the `min` boundary.
- **Time Complexity:** $O(n)$
- **Space Complexity:** $O(h)$ (where $h$ is tree height)

**The 'Aha' Moment:** Realizing that a node must satisfy constraints imposed by all its ancestors, not just its immediate parent.

**Summary:** Use recursive range boundaries to ensure every node in a subtree adheres to the global BST property.

---