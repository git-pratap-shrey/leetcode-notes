---
title: "Convert Sorted Array to Binary Search Tree"
slug: convert-sorted-array-to-binary-search-tree
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
 *     TreeNode(int x) : val(x), left(NULL), right(NULL) {}
 * };
 */

class Solution {
public:
    TreeNode* lowestCommonAncestor(TreeNode* root, TreeNode* p, TreeNode* q) {
        if (p->val < root->val && q->val < root->val)
            return lowestCommonAncestor(root->left, p, q);
        if (p->val > root->val && q->val > root->val)
            return lowestCommonAncestor(root->right, p, q);
        return root;
    }
};
~~~

# Submission Review
## Approach
- **Technique**: Recursive Binary Search Tree (BST) traversal.
- **Correctness**: **Incorrect**. The code implements `lowestCommonAncestor` (LCA), but the problem statement asks to "Convert Sorted Array to Binary Search Tree." The provided solution does not solve the requested problem.

## Complexity
- **Time Complexity**: $O(H)$, where $H$ is the height of the tree.
- **Space Complexity**: $O(H)$ due to the recursion stack.
- **Bottleneck**: The solution is irrelevant to the problem of converting an array to a BST.

## Efficiency Feedback
- The logic for finding the LCA in a BST is efficient for its specific purpose, but as it does not address the array-to-BST conversion, it provides zero utility for the given problem.

## Code Quality
- **Readability**: Poor. The function name and logic contradict the problem objective.
- **Structure**: Poor. It lacks the necessary logic to handle input arrays or create new `TreeNode` instances.
- **Naming**: Moderate (within the context of LCA), but Poor (within the context of the problem).
- **Concrete Improvements**: Replace the entire class implementation. To solve "Convert Sorted Array to BST," implement a recursive function that picks the middle element of the current array segment as the root to ensure the tree remains height-balanced.

---

# Question Revision
# Revision Report: Convert Sorted Array to Binary Search Tree

- **Pattern:** Divide and Conquer / Binary Search Logic
- **Brute Force:** Iteratively insert elements from the sorted array into a BST. Since the array is sorted, this would result in a skewed tree (essentially a linked list), failing the requirement for a height-balanced BST.
- **Optimal Approach:** 
    - **Logic:** To keep the tree balanced, the middle element of the current array/subarray must be the root. Recursively repeat this process: the middle of the left half becomes the left child, and the middle of the right half becomes the right child.
    - **Time Complexity:** $O(n)$ — each element is visited exactly once to create a node.
    - **Space Complexity:** $O(\log n)$ — the recursion stack depth equals the height of the balanced tree.
- **The 'Aha' Moment:** The keywords "Sorted Array" and "Height-Balanced BST" imply that the median of the range must be the root to ensure equal distribution of nodes.
- **Summary:** To balance a BST from a sorted array, always pick the middle element as the root and recurse on the left and right halves.

---