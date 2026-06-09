---
title: "Construct Binary Search Tree from Preorder Traversal"
slug: construct-binary-search-tree-from-preorder-traversal
date: "2026-04-14"
---

# My Solution
~~~

~~~

# Submission Review
Please provide the code you would like me to analyze. You have not included a solution in your request.

---

# Question Revision
### Construct Binary Search Tree from Preorder Traversal

**Pattern:** Recursive Boundary / Range Constraint

**Brute Force:** 
For every root node, scan the remaining array to find the first element larger than the root. This element marks the start of the right subtree. 
- **Time:** $O(n^2)$ worst case (skewed tree), $O(n \log n)$ average.
- **Space:** $O(n)$ for recursion.

**Optimal Approach:**
Maintain a global index and pass a maximum allowable value (`upper_bound`) to each recursive call. If the current element exceeds the `upper_bound`, it cannot belong to the current subtree and is returned as `null`.
1. Initialize `upper_bound` as $\infty$.
2. If `preorder[index] > upper_bound`, return `null`.
3. Create a node with `preorder[index++]`.
4. Recursively build the left subtree with `upper_bound = node.val`.
5. Recursively build the right subtree with the inherited `upper_bound`.

- **Time:** $O(n)$ — each element is visited exactly once.
- **Space:** $O(n)$ — recursion stack depth in the worst case.

**The 'Aha' Moment:** 
The preorder sequence provides the visit order, but the BST property allows us to use a value-based boundary to determine exactly when a subtree ends.

**Summary:** 
Use a recursive upper bound to partition the preorder array into BST subtrees in a single linear pass.

---