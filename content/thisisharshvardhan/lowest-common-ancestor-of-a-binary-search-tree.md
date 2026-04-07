---
title: "Lowest Common Ancestor of a Binary Search Tree"
slug: lowest-common-ancestor-of-a-binary-search-tree
date: "2026-04-07"

---
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
    TreeNode* lca(TreeNode* root, TreeNode* p, TreeNode* q){
        if (!root) return NULL;
        if (root==p || root==q) return root;
        
        TreeNode* left=lca(root->left,p,q);
        TreeNode* right=lca(root->right,p,q);

        if (left && right) return root;
        return left ? left : right;

    }
    TreeNode* lowestCommonAncestor(TreeNode* root, TreeNode* p, TreeNode* q) {
        TreeNode* Node=lca(root,p,q);
        return Node;
    }
};
~~~

# Submission Review
## Approach
*   **Technique:** Recursive Tree Traversal (General LCA algorithm).
*   **Optimality:** **Suboptimal.** This approach ignores the "Binary Search Tree" property. It treats the input as a generic binary tree, performing a post-order traversal rather than leveraging the ordering of nodes to prune the search space.

## Complexity
*   **Time Complexity:** $O(N)$, where $N$ is the number of nodes in the tree, as it must visit every node in the worst case.
*   **Space Complexity:** $O(H)$, where $H$ is the height of the tree, due to the recursion stack.

## Efficiency Feedback
*   **Bottleneck:** The algorithm searches both subtrees regardless of whether `p` and `q` are already found in one branch. 
*   **Optimization:** In a BST, if `root->val` is greater than both `p->val` and `q->val`, the LCA must be in the left subtree. If both are smaller, it must be in the right. If they lie on opposite sides, the `root` is the LCA. This allows for $O(H)$ time complexity, which is significantly faster for balanced trees.

## Code Quality
*   **Readability:** Good. The logic is standard and clean.
*   **Structure:** Moderate. The `lca` helper function is unnecessary, as the logic could be placed directly in `lowestCommonAncestor`.
*   **Naming:** Moderate. `Node` is a generic name (e.g., `lcaNode` would be better). The function name `lca` is fine, but redundant given the class method name.
*   **Concrete Improvements:**
    *   Remove the `lca` helper function and implement the BST property logic directly in `lowestCommonAncestor`.
    *   Use an iterative approach (`while(root)`) to achieve $O(1)$ auxiliary space complexity instead of $O(H)$ recursion stack space.

```cpp
// Optimized BST approach:
TreeNode* lowestCommonAncestor(TreeNode* root, TreeNode* p, TreeNode* q) {
    while (root) {
        if (root->val > p->val && root->val > q->val) root = root->left;
        else if (root->val < p->val && root->val < q->val) root = root->right;
        else return root;
    }
    return nullptr;
}
```

---
---


# Question Revision
### Revision Report: Lowest Common Ancestor (LCA) of a BST

**Pattern:** Binary Search Tree Properties / Iterative Traversal

**Brute Force:**
Perform a traversal (DFS/BFS) to store paths from the root to both nodes `p` and `q` in lists, then iterate to find the last common element.
*   **Time:** $O(n)$
*   **Space:** $O(n)$

**Optimal Approach:**
Leverage the BST property where `left < root < right`. Start at the root and traverse downward:
1. If both `p` and `q` are smaller than the current node, move to the left child.
2. If both are larger, move to the right child.
3. If the current node value falls between `p` and `q` (or equals one of them), you have found the LCA.
*   **Time:** $O(h)$ where $h$ is tree height.
*   **Space:** $O(1)$ (Iterative) or $O(h)$ (Recursive stack).

**The 'Aha' Moment:**
Because it is a **BST** (not a generic Binary Tree), the first node you encounter that lies numerically between `p` and `q` must be the splitting point where their paths diverge.

**Summary:** 
In a BST, the LCA is simply the first node whose value is numerically trapped between `p` and `q`.

---
