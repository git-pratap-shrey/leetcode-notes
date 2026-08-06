---
title: "Path Sum"
slug: path-sum
date: "2026-07-26"
---

# My Solution
~~~

~~~

# Submission Review
No code was provided for analysis. Please provide the implementation you would like me to review.

---

# Question Revision
### Path Sum

**Pattern:** DFS / Tree Recursion

**Brute Force:** Traverse every possible path from root to leaf using recursion, maintaining a running sum and comparing it to the target upon reaching a leaf node.

**Optimal Approach:** Use a top-down recursive approach. At each node, subtract the current node's value from the target sum. If the current node is a leaf and its value equals the remaining target, a valid path exists.
- **Time Complexity:** $O(n)$ — each node is visited once.
- **Space Complexity:** $O(h)$ — where $h$ is the tree height (recursion stack).

**The 'Aha' Moment:** The requirement for a "root-to-leaf path" implies a top-down traversal where the target sum can be reduced as you descend.

**Summary:** Recursively subtract node values from the target sum and return true if a leaf node's value exactly matches the remaining target.

---