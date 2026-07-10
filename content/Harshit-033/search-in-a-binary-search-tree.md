---
title: "Search in a Binary Search Tree"
slug: search-in-a-binary-search-tree
date: "2026-06-24"
---

# My Solution
~~~
cpp
/**
 * Definition for a binary tree node.
 * struct TreeNode {
 *     int val;
 *     TreeNode *left;
 *     TreeNode *right;
 *     TreeNode() : val(0), left(nullptr), right(nullptr) {}
 *     TreeNode(int x) : val(x), left(nullptr), right(nullptr) {}
 *     TreeNode(int x, TreeNode *left, TreeNode *right) : val(x), left(left), right(right) {}
 * };
 */
class Solution {
public:
    TreeNode* searchBST(TreeNode* root, int val) {
        if (root == nullptr || root->val == val)
            return root;

        if (val < root->val)
            return searchBST(root->left, val);

        return searchBST(root->right, val);
    }
};
~~~

# Submission Review

## Approach
- **Technique**: Recursive traversal leveraging the Binary Search Tree (BST) property.
- **Optimality**: Optimal. The algorithm eliminates half of the remaining search space at each step, visiting only nodes along a single path from the root to the target or a leaf.

## Complexity
- **Time Complexity**: $O(H)$, where $H$ is the height of the tree. In the worst case (skewed tree), this is $O(N)$; in a balanced tree, it is $O(\log N)$.
- **Space Complexity**: $O(H)$ due to the recursive call stack.

## Efficiency Feedback
- **Memory**: The current recursive implementation uses $O(H)$ stack space. While acceptable for most constraints, this could be optimized to $O(1)$ space by using an iterative `while` loop.
- **Runtime**: Runtime is minimal as it performs a direct path descent.

## Code Quality
- **Readability**: Good. The logic is concise and follows the natural definition of a BST.
- **Structure**: Good. Base cases are handled correctly at the start of the function.
- **Naming**: Good. Variables follow standard conventions (`root`, `val`).
- **Improvements**:
    - Convert to an iterative approach to avoid potential `StackOverflowError` on extremely deep, skewed trees.

---

# Question Revision

#

## Search in a Binary Search Tree

**Pattern:** Binary Search (Tree-based)

**Brute Force:** Perform a full tree traversal (DFS or BFS) to visit every node until the target value is found.

**Optimal Approach:** 
Leverage the BST property: for any node, all values in the left subtree are smaller and all values in the right subtree are larger. Compare the target with the current node; if it's smaller, move left; if larger, move right. Repeat until the node is found or a `null` is reached.

*   **Time Complexity:** $O(h)$, where $h$ is the height of the tree ($O(\log n)$ for balanced, $O(n)$ for skewed).
*   **Space Complexity:** $O(h)$ for recursive stack or $O(1)$ for iterative approach.

**The 'Aha' Moment:** The term "Binary Search Tree" is a direct signal that the data is sorted, allowing you to prune an entire subtree at every step.

**Summary:** Use the BST property to discard half the remaining search space at each node.

---