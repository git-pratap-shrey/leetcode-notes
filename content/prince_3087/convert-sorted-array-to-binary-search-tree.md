---
title: "Convert Sorted Array to Binary Search Tree"
slug: convert-sorted-array-to-binary-search-tree
date: "2026-08-02"
---

# My Solution
~~~

~~~

# Submission Review
No code was provided in the request. Please provide the implementation you would like me to review.

---

# Question Revision
### Convert Sorted Array to Binary Search Tree

**Pattern**: Divide and Conquer

**Brute Force**: Iterate through the sorted array and insert elements into a BST one by one. This results in a degenerate (linked-list) tree with $O(n)$ height, failing the height-balance requirement.

**Optimal Approach**: 
Recursively select the middle element of the current array segment as the root node. This ensures that the number of nodes in the left and right subtrees differs by at most one, maintaining a height-balanced property.
- **Time Complexity**: $O(n)$ as every element is visited once.
- **Space Complexity**: $O(\log n)$ for the recursive call stack.

**The 'Aha' Moment**: Since the array is already sorted, the middle element is the perfect candidate for the root to keep the tree balanced.

**Summary**: Use recursive midpoint selection to mirror the binary search process and build a balanced BST.

---