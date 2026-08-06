---
title: "Two Sum IV - Input is a BST"
slug: two-sum-iv-input-is-a-bst
date: "2026-07-26"
---

# My Solution
~~~

~~~

# Submission Review
No code was provided for analysis. Please provide the implementation to receive a review based on the requested criteria.

---

# Question Revision
### Revision Report: Two Sum IV - Input is a BST

**Pattern:** BST Traversal + Hash Set

**Brute Force:** 
Flatten the BST into a sorted array using in-order traversal, then use the Two-Pointer technique to find the target sum.

**Optimal Approach:** 
Perform a DFS traversal (In-order, Pre-order, or Post-order). For every node visited, calculate the complement (`target - node.val`). If the complement exists in a Hash Set, return `true`; otherwise, add the current node's value to the set.
- **Time Complexity:** $O(n)$
- **Space Complexity:** $O(n)$

**The 'Aha' Moment:** 
The tree structure is a distraction; the core requirement is finding a pair sum, which is most efficiently solved by tracking seen values in a Hash Set.

**Summary:** 
Traverse the BST and use a Hash Set to store visited values to find the complement of the target sum in $O(n)$ time.

---