---
title: "Recover Binary Search Tree"
slug: recover-binary-search-tree
date: "2026-08-02"
---

# My Solution
~~~

~~~

# Submission Review
No code was provided for analysis. Please provide the implementation you would like me to review.

---

# Question Revision
### Recover Binary Search Tree

**Pattern:** In-order Traversal

**Brute Force:**
Perform an in-order traversal to store all node values in an array, sort the array, and perform a second in-order traversal to reassign the sorted values to the nodes.
- **Time:** $O(n \log n)$
- **Space:** $O(n)$

**Optimal Approach:**
Leverage the fact that an in-order traversal of a BST must be strictly increasing. Use a pointer (`prev`) to track the previously visited node.
1. Identify the first violation where `prev.val > current.val`. The `prev` node is the first misplaced element.
2. Identify the last violation where `prev.val > current.val`. The `current` node is the second misplaced element.
3. Swap the values of these two nodes.
- **Time:** $O(n)$
- **Space:** $O(h)$ where $h$ is the tree height (stack space); $O(1)$ if using Morris Traversal.

**The 'Aha' Moment:**
The definition of a BST dictates that its in-order traversal is a sorted array, meaning any "recovery" is simply a problem of finding two elements that break the sorted sequence.

**Summary:**
Perform an in-order traversal to identify the two nodes that violate the increasing order property and swap their values.

---