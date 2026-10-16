---
title: "Lowest Common Ancestor of a Binary Tree"
slug: lowest-common-ancestor-of-a-binary-tree
date: "2026-10-16"
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
        if(root==NULL || root==p || root==q){
            return root;
        }
        TreeNode* left=lowestCommonAncestor(root->left,p,q);
        TreeNode* right=lowestCommonAncestor(root->right,p,q);
        if(left!=NULL && right!=NULL){
            return root;
        }
        if(left!=NULL){
            return left;
        }
        return right;
    }
};
~~~

# Submission Review
## Approach
- **Technique**: Recursive Depth-First Search (DFS) / Post-order Traversal.
- **Optimality**: Optimal. The algorithm must visit nodes to locate $p$ and $q$; a single bottom-up pass is the most efficient way to determine the LCA.

## Complexity
- **Time Complexity**: $O(N)$, where $N$ is the number of nodes in the binary tree. In the worst case, every node is visited once.
- **Space Complexity**: $O(H)$, where $H$ is the height of the tree. This is the space required for the recursion stack (worst case $O(N)$ for a skewed tree, $O(\log N)$ for a balanced tree).

## Efficiency Feedback
- The implementation is efficient. It utilizes "short-circuiting" by returning immediately when a target node is found, avoiding unnecessary traversal of subtrees once a match is identified.
- No meaningful optimizations are available for this specific problem constraints.

## Code Quality
- **Readability**: Good. The logic is clean and follows the standard recursive pattern for this problem.
- **Structure**: Good. The base cases and recursive steps are logically separated.
- **Naming**: Moderate. `left` and `right` are slightly ambiguous as they refer to the *result* of the recursive call (the ancestor/node found) rather than the child nodes themselves. `leftRes` or `leftNode` would be more precise.
- **Improvements**: 
    - Use `nullptr` instead of `NULL` for modern C++ standards.
    - Add `const` qualifiers to parameters `p` and `q` if they are not intended to be modified.

---

# Question Revision
# Revision Report: Lowest Common Ancestor of a Binary Tree

- **Pattern:** Post-Order Tree Traversal (Bottom-Up Recursion)
- **Brute Force:** Store the path from the root to node $p$ and the path from the root to node $q$ in two separate lists. Compare the lists index by index; the last common node before the paths diverge is the LCA.
- **Optimal Approach:** 
    - Use a recursive function that returns the node if it matches $p$ or $q$.
    - Search left and right subtrees. 
    - If both left and right recursive calls return a non-null value, the current node is the LCA.
    - If only one side returns a value, bubble that value up to the parent.
    - **Time Complexity:** $O(n)$ — each node is visited once.
    - **Space Complexity:** $O(h)$ — where $h$ is the tree height (recursion stack).
- **The 'Aha' Moment:** Since the LCA is the lowest node that has both $p$ and $q$ as descendants, I need to gather information from the children before deciding for the parent (Bottom-Up).
- **Summary:** If a node finds targets in both its left and right subtrees, that node must be the LCA.

---