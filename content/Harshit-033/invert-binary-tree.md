---
title: "Invert Binary Tree"
slug: invert-binary-tree
date: "2026-06-22"
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
    TreeNode* invertTree(TreeNode* root) {
        if (!root) return nullptr;

        swap(root->left, root->right);

        invertTree(root->left);
        invertTree(root->right);

        return root;
    }
};

~~~

# Submission Review

## Approach
- **Technique**: Recursive Depth-First Search (DFS) using a pre-order traversal strategy.
- **Optimality**: Optimal. Every node in the tree must be visited at least once to perform the swap.

## Complexity
- **Time Complexity**: $O(N)$, where $N$ is the number of nodes in the tree.
- **Space Complexity**: $O(H)$, where $H$ is the height of the tree, representing the maximum depth of the recursion stack. In the worst case (a skewed tree), this becomes $O(N)$.

## Efficiency Feedback
- The solution is as efficient as possible for this problem. 
- The use of `std::swap` is idiomatic and efficient.

## Code Quality
- **Readability**: Good. The logic is concise and easy to follow.
- **Structure**: Good. Proper base case handling and recursive flow.
- **Naming**: Good. Follows standard conventions for tree-based problems.
- **Improvements**: None needed. The implementation is clean and follows best practices for this specific task.

---

# Question Revision

#

## Invert Binary Tree

**Pattern:** Tree Traversal (DFS/Recursion)

**Brute Force:** 
Iterative approach using a Queue (BFS). Traverse level by level, swapping the left and right children of each node encountered.

**Optimal Approach:** 
Recursive DFS. For the current node, swap its left and right children, then recursively apply the same operation to the left and right subtrees.
- **Time Complexity:** $O(n)$
- **Space Complexity:** $O(h)$ (where $h$ is tree height; $O(n)$ in worst-case skewed tree)

**The 'Aha' Moment:** 
The problem is self-similar: an inverted tree is simply a root node whose children are the roots of two already-inverted subtrees.

**Summary:** Recursively swap the left and right child pointers for every node in the tree.

---