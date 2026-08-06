---
title: "Sum Root to Leaf Numbers"
slug: sum-root-to-leaf-numbers
date: "2026-07-27"
---

# My Solution
~~~

~~~

# Submission Review
No code was provided for analysis. Please provide the solution code to proceed with the review.

---

# Question Revision
### Sum Root to Leaf Numbers

**Pattern:** DFS / Tree Traversal

**Brute Force:** Traverse all paths from root to leaf, store each path as a string or list, convert those paths to integers, and calculate their total sum.

**Optimal Approach:** 
Use a recursive DFS. Pass the accumulated value from the parent down to the children. At each node, update the current number: `currentSum = (parentSum * 10) + node.val`. If a node is a leaf, return its `currentSum`; otherwise, return the sum of the recursive calls to its left and right children.

*   **Time Complexity:** $O(n)$ where $n$ is the number of nodes.
*   **Space Complexity:** $O(h)$ where $h$ is the height of the tree (recursion stack).

**The 'Aha' Moment:** The requirement to process "root to leaf" paths indicates that state (the running number) must be passed downward through a DFS traversal.

**Summary:** Accumulate the numeric value as you descend the tree and sum the final totals at the leaf nodes.

---