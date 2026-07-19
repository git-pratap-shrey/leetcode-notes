---
title: "Lowest Common Ancestor of a Binary Tree"
slug: lowest-common-ancestor-of-a-binary-tree
date: "2026-07-19"
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
    TreeNode* ans = NULL;
    int fun(TreeNode*root, TreeNode*p, TreeNode*q){
        if(root==NULL){
            return 0;
        }
        int left =fun(root->left,p,q);
        int right = fun(root->right,p,q);
        int self =0;
        // TreeNode*ans;
        if(root==p or root==q){
            self=1;
        }
        int total=left+right+self;
        if(total==2 and ans==NULL){
            ans=root;
        }
        return total;
    }
    TreeNode* lowestCommonAncestor(TreeNode* root, TreeNode* p, TreeNode* q) {
       fun(root,p,q);
       return ans;

        
    }
};
~~~

# Submission Review
## Approach
*   **Technique:** Post-order DFS traversal (bottom-up counting).
*   **Optimality:** Optimal in terms of algorithmic logic, as it visits each node exactly once to propagate the count of found target nodes ($p$ and $q$).

## Complexity
*   **Time Complexity:** $O(N)$, where $N$ is the number of nodes in the binary tree, as every node is visited exactly once.
*   **Space Complexity:** $O(H)$, where $H$ is the height of the tree, due to the recursion stack.

## Efficiency Feedback
*   **Pros:** The solution avoids redundant traversals by using a single pass.
*   **Cons:** The function continues to traverse the entire tree even after the LCA is found (`ans != NULL`). 
*   **Optimization:** You can prune the recursion by checking `if (ans != NULL) return 0;` at the start of `fun`. Additionally, returning a boolean or a pointer directly can avoid the need for a global/member variable `ans`.

## Code Quality
*   **Readability:** Moderate. The use of a class member variable to store the result is functional but less clean than returning the node directly through the recursion.
*   **Structure:** Moderate. The logic is sound, but the member variable approach makes the function stateful, which is unnecessary here.
*   **Naming:** Moderate. `fun` is non-descriptive; `countFoundNodes` or `dfs` would be clearer.
*   **Concrete Improvements:** 
    *   Avoid using a class member `ans`. Instead, have `fun` return the `TreeNode*` found. If `left` and `right` subtrees both return non-null, the current node is the LCA. If only one returns non-null, return that one upward.
    *   Remove the `NULL` check comments and commented-out code to clean up.
    *   Use `nullptr` instead of `NULL` for modern C++ standards.

---

# Question Revision
### Revision Report: Lowest Common Ancestor (LCA)

**Pattern:** Post-order Traversal (Recursive Tree Decomposition)

**Brute Force:** 
Find paths from the root to both target nodes $p$ and $q$, store them in lists, and traverse the lists until the values diverge.
*   **Time:** $O(n)$
*   **Space:** $O(n)$ (to store paths)

**Optimal Approach:**
Perform a post-order traversal (bottom-up). For each node, return the node itself if it matches $p$ or $q$, or the result of a recursive call on its children. If a node receives non-null values from both left and right subtrees, it is the LCA.
*   **Time:** $O(n)$ (visit each node once)
*   **Space:** $O(h)$ (recursion stack, where $h$ is tree height)

**The 'Aha' Moment:**
When you realize that the LCA is the first node where $p$ and $q$ appear in different subtrees (or one is the ancestor of the other), you can bubble the target nodes up the recursion stack to identify the convergence point without pre-calculating paths.

**Summary:** 
If the solution requires bubbling information up from children to a parent to make a decision, use post-order recursion.

---