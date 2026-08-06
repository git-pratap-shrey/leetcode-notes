---
title: "Construct Binary Tree from Preorder and Inorder Traversal"
slug: construct-binary-tree-from-preorder-and-inorder-traversal
date: "2026-07-31"
---

# My Solution
~~~

~~~

# Submission Review
No code was provided for analysis. Please provide the implementation you would like me to review.

---

# Question Revision
### Construct Binary Tree from Preorder and Inorder Traversal

**Pattern:** Divide and Conquer (Recursion)

**Brute Force:** Repeatedly scan the inorder array to find the root's index and slice the arrays into sub-lists for each recursive call.

**Optimal Approach:** 
Use a Hash Map to store the `value -> index` mapping of the inorder traversal for $O(1)$ lookups. Use a recursive helper function that tracks the current boundaries (`left`, `right`) of the inorder subtree and a global pointer for the current preorder element.
- **Time Complexity:** $O(n)$
- **Space Complexity:** $O(n)$

**The 'Aha' Moment:** Preorder reveals the sequence of roots, while Inorder reveals the structural split between left and right children.

**Summary:** Map the inorder indices and recursively build the tree by using preorder elements as roots to partition the inorder array.

---