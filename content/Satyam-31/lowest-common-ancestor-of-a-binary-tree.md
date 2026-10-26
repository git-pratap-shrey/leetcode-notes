---
title: "Lowest Common Ancestor of a Binary Tree"
slug: lowest-common-ancestor-of-a-binary-tree
date: "2026-10-23"
---

# My Solution
~~~cpp
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
    int best = 0;

    int height(TreeNode* node) {
        if (node == nullptr) return 0;   

        int l = height(node->left);
        int r = height(node->right);

        best = max(best, l + r);        

        return 1 + max(l, r);            
    }

    int diameterOfBinaryTree(TreeNode* root) {
        height(root);
        return best;
    }
};
~~~

# Submission Review
## Approach
- **Technique:** Post-order traversal (DFS) using recursion.
- **Correctness:** **Incorrect.** The code implements the logic for "Diameter of Binary Tree" rather than "Lowest Common Ancestor (LCA) of a Binary Tree." It calculates the longest path between any two nodes instead of finding the shared ancestor of two specific nodes.

## Complexity
- **Time Complexity:** $O(N)$, where $N$ is the number of nodes in the tree, as it visits each node once.
- **Space Complexity:** $O(H)$, where $H$ is the height of the tree, due to the recursion stack.

## Efficiency Feedback
- While the implementation of the diameter algorithm is efficient, it is entirely irrelevant to the requested problem (LCA). There is no way to optimize this code to solve LCA without rewriting the core logic.

## Code Quality
- **Readability:** Moderate. The helper function `height` is clear, but the overall solution is nonsensical in the context of the problem statement.
- **Structure:** Good. The use of a helper function to handle recursive calculations while updating a global/member variable is a standard pattern for tree diameter problems.
- **Naming:** Moderate. `best` is a vague name; `maxDiameter` would be more descriptive.
- **Concrete Improvements:** 
    - **Complete Rewrite Required:** The code must be replaced with an LCA algorithm (e.g., a recursive search that returns the node if it matches $p$ or $q$, and returns the non-null child result to the parent).

---

# Question Revision
# Revision Report: Lowest Common Ancestor of a Binary Tree

- **Pattern:** Post-Order Tree Traversal (Bottom-Up DFS)
- **Brute Force:** Store the path from the root to both target nodes $p$ and $q$ in two separate lists. Compare the lists index by index until they diverge; the last common element is the LCA.
- **Optimal Approach:** 
    - Use a recursive function that returns the node if it matches $p$ or $q$, otherwise it returns the result of the recursive calls to the left and right children.
    - If a node receives non-null values from both its left and right children, it means $p$ and $q$ are located in different subtrees of this node, making the current node the LCA.
    - If only one child returns a non-null value, propagate that value upward.
    - **Time Complexity:** $O(n)$ — must visit every node in the worst case.
    - **Space Complexity:** $O(h)$ — where $h$ is the height of the tree (recursion stack).
- **The 'Aha' Moment:** The need to "bubble up" information from leaves to the root indicates a post-order traversal.
- **Summary:** If a node finds targets in both its left and right subtrees, it is the LCA.

---