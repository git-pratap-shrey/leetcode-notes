---
title: "Lowest Common Ancestor of a Binary Search Tree"
slug: lowest-common-ancestor-of-a-binary-search-tree
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
    int count = 0;
    int ans = 0;

    void inorder(TreeNode* node, int k) {
        if (node == nullptr || count >= k) return;

        inorder(node->left, k);

        count++;
        if (count == k) {
            ans = node->val;
            return;
        }

        inorder(node->right, k);
    }

    int kthSmallest(TreeNode* root, int k) {
        inorder(root, k);
        return ans;
    }
};
~~~

# Submission Review
## Approach
- **Technique**: In-order traversal (Recursive).
- **Correctness**: **Incorrect**. The provided code implements `kthSmallestElementInBST`, not the `Lowest Common Ancestor (LCA) of a Binary Search Tree`. It solves a completely different problem than the one stated.

## Complexity
- **Time Complexity**: $O(H + k)$, where $H$ is the height of the tree. It visits nodes until the $k$-th smallest is found.
- **Space Complexity**: $O(H)$ for the recursion stack.

## Efficiency Feedback
- For the problem it *actually* implements (`kthSmallest`), the efficiency is optimal for a standard BST.
- For the requested problem (`LCA`), this code is entirely irrelevant and fails to provide a solution.

## Code Quality
- **Readability**: Good. The logic for the in-order traversal is clear.
- **Structure**: Moderate. Using class-level member variables (`count`, `ans`) for state tracking in a recursive function is generally discouraged in production code as it makes the object non-reusable without manual reset.
- **Naming**: Good. Function and variable names accurately describe their role within the context of finding the $k$-th smallest element.
- **Concrete Improvements**: 
    - To solve the actual LCA problem: Compare the target values $p$ and $q$ with the current node's value to decide whether to move left, right, or return the current node.
    - To improve the current code: Pass `count` by reference or return the value through the recursion to avoid global/member state.

---

# Question Revision
# Revision Report: Lowest Common Ancestor of a BST

- **Pattern**: BST Property (Binary Search Tree Traversal)
- **Brute Force**: Traverse the tree to find the paths from the root to both nodes `p` and `q`, store these paths in lists, and compare them to find the last common node in both sequences.
- **Optimal Approach**: 
    - **Logic**: Leverage the BST property (left < root < right). Starting at the root:
        1. If both `p` and `q` are smaller than the current node, the LCA must be in the **left subtree**.
        2. If both `p` and `q` are larger than the current node, the LCA must be in the **right subtree**.
        3. If one is smaller and the other is larger (or one equals the current node), the current node **is** the LCA.
    - **Time Complexity**: $O(h)$ where $h$ is the height of the tree (worst case $O(n)$ for skewed trees).
    - **Space Complexity**: $O(1)$ for iterative approach; $O(h)$ for recursive due to call stack.
- **The 'Aha' Moment**: The mention of a **Binary Search Tree** (rather than a general Binary Tree) means I can use the node values to discard an entire subtree at each step.
- **Summary**: The LCA is the first node encountered that splits the paths to $p$ and $q$ into different subtrees.

---