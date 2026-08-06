---
title: "Lowest Common Ancestor of a Binary Search Tree"
slug: lowest-common-ancestor-of-a-binary-search-tree
date: "2026-07-24"
---

# My Solution
~~~

~~~

# Submission Review
Please provide the code you would like me to analyze. The code section in your request was empty.

---

# Question Revision
### LCA of a Binary Search Tree

**Pattern:** BST Property / Binary Search

**Brute Force:** Treat the BST as a general Binary Tree. Recursively traverse the tree to find nodes $p$ and $q$, then backtrack to find the first common ancestor.  
**Complexity:** $O(n)$ time, $O(n)$ space.

**Optimal Approach:** Leverage the BST property (left < root < right). Start at the root:
1. If both $p$ and $q$ are smaller than the current node, move to the **left** child.
2. If both $p$ and $q$ are larger than the current node, move to the **right** child.
3. The moment $p$ and $q$ "split" (one is smaller, one is larger, or one equals the current node), the current node is the LCA.

**Complexity:** 
- **Time:** $O(h)$, where $h$ is the height of the tree (worst case $O(n)$ for skewed trees).
- **Space:** $O(1)$ if implemented iteratively.

**The 'Aha' Moment:** The phrase "Binary Search Tree" implies that node values strictly dictate the path, meaning the LCA is simply the first node that separates the two target values.

**Summary:** The LCA is the first node encountered where $p$ and $q$ are no longer in the same subtree.

---