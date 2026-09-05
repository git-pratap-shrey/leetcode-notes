---
title: "Balanced Binary Tree"
slug: balanced-binary-tree
date: "2026-08-16"
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
    int height(TreeNode* root){
        if(root==NULL){
            return 0;
        }
        int l=height(root->left);
        int r=height(root->right);
        return 1+max(l,r);
    }
    bool isBalanced(TreeNode* root) {
        if(root==NULL){
            return true;
        }
        int left=height(root->left);
        int right=height(root->right);
        if(abs(left-right)>1){
            return false;
        }
        return isBalanced(root->left) && isBalanced(root->right);
    }
};
~~~

# Submission Review
## Approach
- **Technique**: Top-down recursion. It calculates the height of subtrees independently at every node and then recursively checks balance for children.
- **Optimality**: **Suboptimal**. The solution performs redundant calculations by calling `height()` on the same nodes multiple times across different levels of the recursion.

## Complexity
- **Time Complexity**: $O(n^2)$ in the worst case (skewed tree) and $O(n \log n)$ in the average case (balanced tree). This is because for every node, the algorithm traverses all its descendants to calculate height.
- **Space Complexity**: $O(h)$, where $h$ is the height of the tree, due to the recursion stack. In the worst case, this is $O(n)$.

## Efficiency Feedback
- **Bottleneck**: The `height` function is called repeatedly on the same nodes. A node at depth $d$ is visited $d+1$ times.
- **Optimization**: Implement a bottom-up approach. Modify the height function to return a special value (e.g., `-1`) if a subtree is unbalanced. This allows the algorithm to determine balance and height in a single post-order traversal, reducing time complexity to $O(n)$.

## Code Quality
- **Readability**: Good. The logic is straightforward and easy to follow.
- **Structure**: Moderate. While logically separated, the separation leads to the efficiency bottleneck.
- **Naming**: Good. Function and variable names (`height`, `isBalanced`, `l`, `r`) are clear and appropriate.
- **Improvements**:
    - Replace the top-down logic with a single recursive function that returns height if balanced and `-1` if not.
    - Use `nullptr` instead of `NULL` for modern C++ consistency.

---

# Question Revision
### Balanced Binary Tree

**Pattern:** DFS / Post-order Traversal

**Brute Force:** 
Compute the height of the left and right subtrees for every single node in the tree. Since height is recalculated repeatedly for overlapping sub-problems, the time complexity is $O(n^2)$ in the worst case (skewed tree).

**Optimal Approach:** 
Use a bottom-up recursion (post-order). Each node returns its height to its parent if the subtree is balanced; otherwise, it returns a sentinel value (e.g., `-1`) to signal that the tree is already unbalanced. This allows the imbalance to propagate upward immediately without further calculations.

*   **Time Complexity:** $O(n)$ — Each node is visited once.
*   **Space Complexity:** $O(h)$ — Where $h$ is the height of the tree (recursion stack).

**The 'Aha' Moment:** 
The balance condition for a node depends entirely on information (height) provided by its children, signaling a bottom-up post-order traversal.

**Summary:** 
Use post-order DFS to bubble up heights and propagate a `-1` failure signal the moment any subtree becomes unbalanced.

---