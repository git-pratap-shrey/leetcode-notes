---
title: "Diameter of Binary Tree"
slug: diameter-of-binary-tree
date: "2026-07-28"
---

# My Solution
~~~

~~~

# Submission Review
No code was provided for analysis. Please provide the source code you would like me to review.

---

# Question Revision
### Diameter of Binary Tree

**Pattern:** Tree DFS (Bottom-Up Recursion)

**Brute Force:** 
Calculate the height of the left and right subtrees for every single node in the tree. The diameter is the maximum of `left_height + right_height` across all nodes.
- **Complexity:** $O(n^2)$

**Optimal Approach:**
Use a post-order traversal to calculate height and diameter simultaneously. Each recursive call returns the height of the current subtree to its parent, while updating a global maximum variable with the sum of the left and right subtree heights at that specific node.
- **Time Complexity:** $O(n)$
- **Space Complexity:** $O(h)$ where $h$ is the tree height (recursion stack).

**The 'Aha' Moment:** 
The diameter is not necessarily the path through the root, but the maximum `left_height + right_height` encountered at *any* node during a height-calculation traversal.

**Summary:** 
Track the global maximum of `left_height + right_height` while using a standard DFS to return subtree heights.

---