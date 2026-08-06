---
title: "Construct Binary Tree from Inorder and Postorder Traversal"
slug: construct-binary-tree-from-inorder-and-postorder-traversal
date: "2026-08-01"
---

# My Solution
~~~

~~~

# Submission Review
No code was provided for analysis. Please provide the implementation you would like me to review.

---

# Question Revision
### Construct Binary Tree from Inorder and Postorder Traversal

**Pattern:** Recursive Divide and Conquer

**Brute Force:** 
Recursively identify the root from the end of the postorder list, then perform a linear search in the inorder list to find the root's index to split the tree into left and right subtrees. 
- **Time:** $O(n^2)$ due to repeated linear scans.
- **Space:** $O(n)$ for the recursion stack.

**Optimal Approach:**
Use a Hash Map to store the value-to-index mapping of the inorder traversal for $O(1)$ lookups. Process the postorder array from right to left to identify the root, then use the map to split the inorder array into left and right subtrees.
- **Time:** $O(n)$
- **Space:** $O(n)$

**The 'Aha' Moment:** 
The last element of the postorder traversal is always the root, and its position in the inorder traversal explicitly divides the left and right subtrees.

**Summary:** 
Map inorder indices and process postorder backwards to recursively reconstruct the tree from root to leaves.

---