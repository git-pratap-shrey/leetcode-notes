---
title: "Subtree of Another Tree"
slug: subtree-of-another-tree
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
 *     TreeNode() : val(0), left(nullptr), right(nullptr) {}
 *     TreeNode(int x) : val(x), left(nullptr), right(nullptr) {}
 *     TreeNode(int x, TreeNode *left, TreeNode *right) : val(x), left(left), right(right) {}
 * };
 */
class Solution {
public:
    bool sametree(TreeNode*p , TreeNode*q){
        if(p==NULL and q==NULL){
            return true;
        }
        if(p==NULL or q==NULL){
            return false;

        }
        if(p->val != q->val){
            return false;
        }
        bool b1=sametree(p->left,q->left);
        bool b2= sametree(p->right,q->right);
        if(b1==true and b2==true){
            return true;
        }
        else{
            return false;}
   }
   bool subtrees(TreeNode* root , TreeNode*subroot){

    if(subroot==NULL){
        return true;
    }
    if(root==NULL){
        return false;

    }
    if(sametree(root,subroot)){
        return true;
    }
    bool left = subtrees(root->left,subroot);
    bool right =  subtrees(root->right,subroot);
    return left||right;


   }

    bool isSubtree(TreeNode* root, TreeNode* subroot) {
        bool  ans =subtrees(root,subroot);
        return ans;
        
    }
};
~~~

# Submission Review
## Approach
*   **Technique:** Recursive Tree Traversal (Depth-First Search). The solution recursively checks every node in `root` to see if the subtree starting there matches `subroot`.
*   **Optimality:** Suboptimal. While correct, it performs repeated structure comparisons, leading to a worst-case complexity of $O(N \times M)$ where $N$ and $M$ are the number of nodes in `root` and `subroot` respectively. For large skewed trees, this is inefficient.

## Complexity
*   **Time Complexity:** $O(N \times M)$. In the worst case (e.g., highly repetitive node values or skewed trees), `sametree` is called for every node in `root`.
*   **Space Complexity:** $O(H)$, where $H$ is the height of the tree, due to the recursion stack.

## Efficiency Feedback
*   **Bottleneck:** The redundant comparisons. A more efficient approach would involve tree serialization (e.g., Merkle Hashing or string serialization with null markers) to reduce time complexity to $O(N + M)$.
*   **Minor Note:** The `sametree` logic `if(b1==true and b2==true)` is unnecessarily verbose; `return b1 && b2;` is cleaner and idiomatic.

## Code Quality
*   **Readability:** Moderate. The logic is clear, but the code lacks standard formatting and uses inconsistent spacing.
*   **Structure:** Good. The separation of concerns between `sametree` and `subtrees` is correct.
*   **Naming:** Moderate. Function names like `sametree` and `subtrees` are functional, but `isSameTree` and `isSubtree` (standard camelCase) would follow C++ conventions better.
*   **Concrete Improvements:**
    *   **Conciseness:** Replace `if(b1==true and b2==true) return true; else return false;` with `return b1 && b2;`.
    *   **Consistency:** Standardize indentation (currently erratic).
    *   **Modernization:** Use `nullptr` instead of `NULL` to maintain C++ type safety.
    *   **Efficiency:** For competitive programming, consider adding a check to compare tree heights or node counts before deep comparison to prune the search space.

---

# Question Revision
### Revision Report: Subtree of Another Tree

**Pattern:** Tree Traversal / Recursion

**Brute Force:**
For every node in the main tree (`root`), perform a full comparison of the subtrees starting at that node against the target tree (`subRoot`).
*   **Time Complexity:** $O(M \times N)$, where $N$ is the number of nodes in `root` and $M$ is the number of nodes in `subRoot`.
*   **Space Complexity:** $O(H)$ for the recursion stack (where $H$ is tree height).

**Optimal Approach:**
Use a helper function `isSameTree(p, q)` to check for structural and value equality. Traverse the main tree using DFS; at every node, trigger `isSameTree`. If a match is found, return `true`.
*   **Time Complexity:** $O(M \times N)$ in the worst case (e.g., skewed trees).
*   **Space Complexity:** $O(H)$ where $H$ is the height of the tree.
*(Note: Can be optimized to $O(M+N)$ using Merkle Hashing or Serialization, but the recursive approach is the standard expectation.)*

**The 'Aha' Moment:**
The problem decomposes into a nested sub-problem: "Does a match start here?" must be checked at every possible node in the main tree.

**Summary:**
Always treat a tree as a collection of subtrees and apply a helper function to validate equality at every anchor point.

---