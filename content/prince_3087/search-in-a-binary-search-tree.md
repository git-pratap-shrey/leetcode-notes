---
title: "Search in a Binary Search Tree"
slug: search-in-a-binary-search-tree
date: "2026-07-22"
---

# My Solution
~~~

~~~

# Submission Review
No code was provided for analysis. Please provide the implementation you would like me to review.

---

# Question Revision
### Search in a Binary Search Tree

**Pattern:** BST Traversal / Binary Search

**Brute Force:** 
Perform a full tree traversal (DFS or BFS) visiting every node until the target value is found. 
- Time: $O(n)$
- Space: $O(n)$

**Optimal Approach:** 
Leverage the BST property: for any node, all values in the left subtree are smaller and all values in the right subtree are larger. Compare the target to the current node and move only in the direction of the target.
- **Time Complexity:** $O(h)$, where $h$ is the height of the tree ($O(\log n)$ average, $O(n)$ worst case).
- **Space Complexity:** $O(1)$ for iterative implementation; $O(h)$ for recursive due to the call stack.

**The 'Aha' Moment:** 
The phrase "Binary Search Tree" is the trigger to use the sorted property to prune the search space by half at each step.

**Summary:** Use the root's value to decide whether to move left or right, treating the tree as a sorted array.

---