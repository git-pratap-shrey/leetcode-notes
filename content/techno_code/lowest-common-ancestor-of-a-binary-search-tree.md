---
title: "Lowest Common Ancestor of a Binary Search Tree"
slug: lowest-common-ancestor-of-a-binary-search-tree
date: "2026-10-24"
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
    void inorder(TreeNode* root,int& k,int &ans){
        if(root==NULL){
            return;
        }
        inorder(root->left,k,ans);
        k--;
        if(k==0){
            ans=root->val;
        }
        inorder(root->right,k,ans);
    }
    int kthSmallest(TreeNode* root, int k) {
        int ans=0;
        inorder(root,k,ans);
        return ans;
    }
};
~~~

# Submission Review
## Approach
- **Technique**: In-order traversal (recursion).
- **Correctness**: **Incorrect**. The code implements the solution for "Kth Smallest Element in a BST," not "Lowest Common Ancestor (LCA) of a BST." It completely ignores the LCA logic and fails to address the problem requirements.

## Complexity
- **Time Complexity**: $O(N)$, where $N$ is the number of nodes in the tree.
- **Space Complexity**: $O(H)$, where $H$ is the height of the tree, due to the recursion stack.

## Efficiency Feedback
- The implementation is efficient for finding the $k$-th smallest element, but since it solves the wrong problem, the efficiency is irrelevant to the target task.
- **Bottleneck**: The recursion continues to traverse the rest of the tree even after the $k$-th element is found (`ans` is set, but `inorder` continues).

## Code Quality
- **Readability**: Moderate. The logic for $k$-th smallest is clear, but it is misleading given the problem title.
- **Structure**: Good. Standard recursive helper pattern.
- **Naming**: Good. `inorder`, `k`, and `ans` are descriptive for the logic implemented.
- **Concrete Improvements**: 
    - To solve **LCA of a BST**, the code must be entirely rewritten to compare the values of the two target nodes against the current root to decide whether to move left, right, or return the current root.
    - To optimize the current $k$-th smallest logic: add a base case to stop recursion once `k == 0`.

---

# Question Revision
# Revision Report: Lowest Common Ancestor of a Binary Search Tree

- **Pattern**: BST Property (Binary Search Tree Traversal)
- **Brute Force**: Perform a general Binary Tree LCA search: traverse the entire tree to find both nodes, track their paths from the root, and find the last common node in those paths.
- **Optimal Approach**: Leverage the BST property (`left < root < right`). Starting at the root:
    1. If both targets are **smaller** than the current node, move **left**.
    2. If both targets are **larger** than the current node, move **right**.
    3. If they are on **opposite sides** (or one is the root), the current node is the LCA.
    - **Time Complexity**: $O(h)$ where $h$ is the height of the tree ($O(\log n)$ for balanced, $O(n)$ for skewed).
    - **Space Complexity**: $O(1)$ for iterative approach; $O(h)$ for recursive.
- **The 'Aha' Moment**: The phrase "Binary Search Tree" means I don't need to search the whole tree; the values themselves dictate the direction of the LCA.
- **Summary**: The LCA is the first node encountered that splits the two target values into different subtrees.

---