---
title: "Path Sum II"
slug: path-sum-ii
date: "2026-07-27"
---

# My Solution
~~~

~~~

# Submission Review
No code was provided for analysis. Please provide the implementation and the language used for the **Path Sum II** problem to receive a detailed technical review.

---

# Question Revision
### Path Sum II

**Pattern:** Backtracking / DFS

**Brute Force:** Traverse every possible root-to-leaf path, storing each full path in a temporary list, and validate the sum only after reaching a leaf.

**Optimal Approach:** Use DFS to traverse the tree while maintaining a running sum and a current path list. When a leaf node is reached, if the remaining target equals the leaf's value, add a snapshot (copy) of the current path to the result list. Pop the current node from the path list during the backtracking step to restore state for other branches.

- **Time Complexity:** $O(N^2)$ in the worst case (e.g., a skewed tree where we copy $O(N)$ paths of length $O(N)$).
- **Space Complexity:** $O(H)$ where $H$ is the height of the tree, used by the recursion stack and the current path list.

**The 'Aha' Moment:** The requirement to return the actual sequences of "all paths" rather than just a boolean or count signals the need for backtracking to reconstruct the routes.

**Summary:** Use DFS with backtracking to track the current path and sum, recording the path whenever a leaf matches the target.

---