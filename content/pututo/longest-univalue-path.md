---
title: "Longest Univalue Path"
slug: longest-univalue-path
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
- **Technique**: Post-order traversal (Recursive DFS).
- **Optimality**: **Incorrect.** The code implements the logic for "Diameter of Binary Tree," not "Longest Univalue Path." It calculates the longest path between any two nodes regardless of their values, ignoring the requirement that nodes in the path must have the same value.

## Complexity
- **Time Complexity**: $O(N)$, where $N$ is the number of nodes in the tree.
- **Space Complexity**: $O(H)$, where $H$ is the height of the tree (recursion stack).

## Efficiency Feedback
- While the traversal is efficient for a general diameter problem, it is irrelevant to the "Longest Univalue Path" problem because it lacks conditional checks to verify if child nodes share the same value as the parent.

## Code Quality
- **Readability**: Poor. The logic does not match the problem statement.
- **Structure**: Moderate. Standard recursive structure, but the helper function is named `height` while it actually computes diameter updates.
- **Naming**: Poor. 
    - `d` is a non-descriptive variable name for the global maximum path.
    - `height` is misleading as it computes the diameter as a side effect.
    - The main function is named `diameterOfBinaryTree`, which contradicts the requested problem `longestUnivaluePath`.

## Concrete Improvements
1. **Logic Correction**: Inside the recursive function, check if `root->left` exists and `root->left->val == root->val`. If not, the path length from that direction must be reset to 0.
2. **Naming**: Rename `d` to `maxPath` and `height` to `dfs` or `solve`.
3. **Encapsulation**: Move the global variable `d` into the class as a private member or pass it by reference to avoid global state issues.

---

# Question Revision
# Revision Report: Longest Univalue Path

- **Pattern:** Tree DFS / Bottom-Up Recursion.
- **Brute Force:** For every single node in the tree, treat it as the root and perform a BFS/DFS to find the longest univalue path starting from that node.
- **Optimal Approach:** 
    - Use a post-order traversal (Bottom-Up). Each node asks its children: *"What is the longest univalue path you can offer me that matches my value?"*
    - If a child's value matches the current node, the path length is `child_path + 1`, otherwise it is `0`.
    - The local maximum path at any node is the **sum** of the lengths provided by the left and right children (since the path can go through the node to both sides).
    - Return only the **maximum of the two** paths to the parent (since a path cannot split in two directions and still be a single path for the parent).
    - **Complexity:** 
        - Time: $O(n)$ — each node is visited once.
        - Space: $O(h)$ — where $h$ is the height of the tree (recursion stack).
- **The 'Aha' Moment:** The path can "bend" at a root node, meaning the answer is a global maximum of (left\_leg + right\_leg), but only one leg can be passed up to the parent.
- **Summary:** Use bottom-up DFS to track the longest single-arm path and update a global maximum using the sum of both arms.

---