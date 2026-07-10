---
title: "Invert Binary Tree"
slug: invert-binary-tree
date: "2026-06-22"

---

# My Solution
~~~/**
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

        if(root == NULL) {
            return NULL;
        }

        swap(root->left, root->right);

        invertTree(root->left);
        invertTree(root->right);

        return root;
    }
};
~~~

# Submission Review

## Approach

- **Technique**: Recursive Depth-First Search (DFS) / Pre-order traversal.
- **Optimality**: Optimal. Every node in the tree must be visited exactly once to swap its children.

## Complexity

- **Time Complexity**: $O(N)$, where $N$ is the number of nodes in the tree.
- **Space Complexity**: $O(H)$, where $H$ is the height of the tree, representing the maximum depth of the recursion stack. In the worst case (a skewed tree), this is $O(N)$.

## Efficiency Feedback
- The implementation is highly efficient as it performs a single pass and uses the standard `std::swap` for pointer exchange.
- No significant bottlenecks are present.

## Code Quality

- **Readability**: Good. The logic is concise and follows the problem requirements directly.
- **Structure**: Good. Standard recursive structure.
- **Naming**: Good. Uses clear, standard naming conventions.
- **Improvements**: Replace `NULL` with `nullptr` to adhere to modern C++ (C++11 and later) standards for better type safety.

---

# Question Revision

#

## Invert Binary Tree

**Pattern:** DFS (Recursive)

**Brute Force:** Use a Queue (BFS) to traverse the tree level-by-level, swapping the left and right children of each node as they are dequeued.

**Optimal Approach:** 
Use a recursive post-order or pre-order traversal. At each node, swap its left and right child pointers, then recursively call the function on both children.
- **Time Complexity:** $O(n)$ where $n$ is the number of nodes.
- **Space Complexity:** $O(h)$ where $h$ is the tree height (call stack depth).

**The 'Aha' Moment:** The mirror image of a tree is simply the mirror image of its root's children, making this a classic recursive sub-problem.

**Summary:** Recursively swap the left and right children of every node until the base case (null) is reached.

---
