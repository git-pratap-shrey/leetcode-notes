---
title: "Symmetric Tree"
slug: symmetric-tree
date: "2026-10-26"
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
    bool isM(TreeNode* n,TreeNode* m){
        if(m==nullptr && n==nullptr){
            return true;
        }
        else if(n==nullptr || m==nullptr){
            return false;
        }
        return n->val==m->val && isM(n->left,m->right) && isM(n->right,m->left);
    }
    bool isSymmetric(TreeNode* root) {
        return isM(root->left,root->right);
    }
};
~~~

# Submission Review
## Approach
- **Technique**: Recursive Depth-First Search (DFS). The solution uses a helper function to simultaneously traverse the left subtree and the right subtree in mirror order.
- **Optimality**: Optimal. Every node must be visited once to verify symmetry.

## Complexity
- **Time Complexity**: $O(N)$, where $N$ is the number of nodes in the tree.
- **Space Complexity**: $O(H)$, where $H$ is the height of the tree, representing the maximum depth of the recursion stack. In the worst case (skewed tree), this is $O(N)$.

## Efficiency Feedback
- The solution is efficient. It uses short-circuit evaluation (`&&`), meaning it returns `false` as soon as a mismatch is found, avoiding unnecessary traversal of the remaining nodes.

## Code Quality
- **Readability**: Moderate. The logic is clear, but the naming is opaque.
- **Structure**: Good. The separation of the recursive helper function from the main entry point is correct.
- **Naming**: Poor. `isM` and `n, m` are non-descriptive. `isMirror` and `left, right` would be more appropriate for a tree symmetry problem.
- **Concrete Improvements**:
    - Rename `isM` to `isMirror`.
    - Rename parameters `n` and `m` to `left` and `right` (or `t1`, `t2`).
    - Add a null check for `root` in `isSymmetric` (though most platform constraints guarantee a non-null root, it is safer practice).

---

# Question Revision
# Revision Report: Symmetric Tree

- **Pattern**: Tree Recursion / DFS (Dual Traversal)
- **Brute Force**: Serialize the left and right subtrees into strings/lists (e.g., Pre-order) and compare them. However, this fails to account for the "mirror" property unless the serialization is specifically designed for mirroring.
- **Optimal Approach**: Use a helper function to compare two trees simultaneously. A tree is symmetric if the left subtree is a mirror image of the right subtree. 
    - **Logic**: Two nodes are mirrors if:
        1. Both are `null`.
        2. Both are non-null, their values are equal, and:
            - Left child of the left tree matches the right child of the right tree.
            - Right child of the left tree matches the left child of the right tree.
    - **Time Complexity**: $O(n)$ where $n$ is the number of nodes (each node visited once).
    - **Space Complexity**: $O(h)$ where $h$ is the height of the tree (recursion stack).
- **The 'Aha' Moment**: "Symmetric" implies a mirror reflection, meaning I must compare the **outermost** children and the **innermost** children of two different nodes.
- **Summary**: Treat it as comparing two separate trees where the left's left must match the right's right.

---