---
title: "Diameter of Binary Tree"
slug: diameter-of-binary-tree
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
    int d=0;
        int height(TreeNode* root){
            if(!root)
            return 0;
            int l=height(root->left);
            int r=height(root->right);
            d=max(d,l+r);
            return 1+max(l,r);
        }
    int diameterOfBinaryTree(TreeNode* root) {
        height(root);
        return d;
    }
};
~~~

# Submission Review
## Approach
- **Technique:** Bottom-up Recursion (DFS). The solution calculates the height of each subtree while simultaneously updating a global maximum diameter based on the sum of the left and right heights.
- **Optimality:** Optimal. The problem requires visiting every node at least once, and this approach does so in a single pass.

## Complexity
- **Time Complexity:** $O(N)$, where $N$ is the number of nodes in the binary tree. Each node is visited exactly once.
- **Space Complexity:** $O(H)$, where $H$ is the height of the tree. This represents the maximum depth of the recursion stack (worst case $O(N)$ for a skewed tree).

## Efficiency Feedback
- The runtime and memory usage are optimal for this problem.
- No meaningful optimizations are available as the algorithm already operates in linear time and linear space.

## Code Quality
- **Readability:** Moderate. The logic is clear, but the lack of spacing and indentation makes it feel cramped.
- **Structure:** Moderate. The use of a class member variable `d` for state tracking is acceptable in competitive programming, but passing a reference or using a helper structure is generally preferred in production code.
- **Naming:** Poor. Variables `d`, `l`, and `r` are overly cryptic. `d` should be `maxDiameter`, `l` should be `leftHeight`, and `r` should be `rightHeight`.

**Concrete Improvements:**
1. Rename variables to be descriptive.
2. Apply consistent indentation and spacing for better legibility.
3. Move `d` inside `diameterOfBinaryTree` and pass it by reference to the `height` function to avoid relying on global/class state.

---

# Question Revision
# Revision Report: Diameter of Binary Tree

- **Pattern**: DFS / Tree Recursion (Bottom-Up)
- **Brute Force**: For every single node in the tree, calculate the max depth of its left and right subtrees. The diameter at that node is `left_depth + right_depth`. Track the global maximum.
- **Optimal Approach**: 
    - Use a recursive helper function that returns the **height** of a node.
    - While calculating height, update a global variable `diameter` using the sum of the heights of the left and right children: `diameter = max(diameter, left_height + right_height)`.
    - **Time Complexity**: $O(n)$ — each node is visited once.
    - **Space Complexity**: $O(h)$ — where $h$ is the tree height (recursion stack).
- **The 'Aha' Moment**: The diameter doesn't necessarily pass through the root, but it always passes through *some* node's highest point, allowing us to calculate it as a byproduct of a standard height DFS.
- **Summary**: The diameter is the maximum `left_height + right_height` encountered during a post-order height traversal.

---