---
title: "Symmetric Tree"
slug: symmetric-tree
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
    int minDepth(TreeNode* root) {
        if (root == nullptr) return 0;         

        
        if (root->left == nullptr)  return 1 + minDepth(root->right);
        if (root->right == nullptr) return 1 + minDepth(root->left);

        
        return 1 + min(minDepth(root->left), minDepth(root->right));
    }
};
~~~

# Submission Review
## Approach
- **Technique:** Recursive Depth-First Search (DFS).
- **Correctness:** **Incorrect.** The provided code solves the "Minimum Depth of Binary Tree" problem, but the problem statement provided is "Symmetric Tree". The logic does not check for symmetry (mirroring) of the tree; it calculates the shortest path to a leaf.

## Complexity
- **Time Complexity:** $O(N)$, where $N$ is the number of nodes in the tree, as it visits each node once.
- **Space Complexity:** $O(H)$, where $H$ is the height of the tree, representing the maximum depth of the recursion stack.

## Efficiency Feedback
- While the logic is efficient for finding the minimum depth, it is completely irrelevant to the "Symmetric Tree" problem.
- To solve "Symmetric Tree," the code would need a helper function that compares two nodes (left subtree and right subtree) simultaneously to check if they are mirror images.

## Code Quality
- **Readability:** Moderate. The logic is clear for a `minDepth` implementation, but the disconnect between the problem name and the code is a critical failure.
- **Structure:** Good. Base cases are handled correctly for the logic implemented.
- **Naming:** Poor. The function name `minDepth` matches the logic but contradicts the problem statement ("Symmetric Tree").
- **Concrete Improvements:**
    1. **Rewrite the logic:** Implement a `isMirror(TreeNode* t1, TreeNode* t2)` function.
    2. **Comparison Logic:** Ensure values are compared and left children of one are compared with right children of the other.

---

# Question Revision
# Revision Report: Symmetric Tree

- **Pattern:** Recursive DFS / Tree Traversal (Mirror Imaging)
- **Brute Force:** Convert the tree into an array (in-order or pre-order) and check if the array is a palindrome. *Note: This is unreliable due to null nodes and doesn't handle structure properly.*
- **Optimal Approach:**
    - **Logic:** Use a helper function that takes two nodes (left subtree and right subtree). A tree is symmetric if:
        1. Both nodes are `null`.
        2. Both nodes are not `null`, their values are equal, and their children are mirrors of each other:
           - `left.left` must match `right.right`
           - `left.right` must match `right.left`
    - **Time Complexity:** $O(n)$ — every node is visited once.
    - **Space Complexity:** $O(h)$ — where $h$ is the height of the tree, representing the recursion stack.
- **The 'Aha' Moment:** Symmetry in trees is not about identical structures, but about "mirroring," which signals that I need to compare the leftmost child of one side with the rightmost child of the other.
- **Summary:** A tree is symmetric if the left subtree is a mirror image of the right subtree.

---