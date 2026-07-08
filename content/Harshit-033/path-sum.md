---
title: "Path Sum"
slug: path-sum
date: "2026-06-25"
---

# My Solution
~~~

~~~

# Submission Review
Please provide the code you would like me to analyze. The `Code:` section in your request was empty.

---

# Question Revision
### Path Sum

**Pattern:** Depth First Search (DFS) / Recursion

**Brute Force:** Traverse every possible path from root to leaf, maintaining a running sum for each path, and check if any match the target.

**Optimal Approach:** 
Use a recursive DFS to subtract the current node's value from the `targetSum`. If a leaf node is reached (no left or right children) and its value equals the remaining `targetSum`, a valid path exists.
- **Time Complexity:** $O(n)$
- **Space Complexity:** $O(h)$ (where $h$ is tree height; $O(n)$ in worst-case skewed tree)

**The 'Aha' Moment:** The phrase "root-to-leaf path" signals a top-down traversal where the remaining sum can be passed as state through recursion.

**Summary:** Recursively subtract node values from the target sum and return true if a leaf's value equals the final remainder.

---