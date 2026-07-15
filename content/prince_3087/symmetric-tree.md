---
title: "Symmetric Tree"
slug: symmetric-tree
date: "2026-07-15"
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
    bool fun(TreeNode* p , TreeNode* q){
        if(p==NULL and q==NULL){
            return true;
        }
        if(p==NULL or q==NULL){
            return false;
        }
        if(p->val!=q->val){
            return false;
        }
        bool b1=fun(p->left,q->right);
        bool b2=fun(p->right,q->left);
        if(b1==true and b2==true){
            return true;
        }
        else{return false;}
    }

    bool isSymmetric(TreeNode* root) {
        bool ans=fun(root->left,root->right);
        return ans;
        
    }
};
~~~

# Submission Review
## Approach
- **Technique:** Recursive Depth-First Search (DFS).
- **Optimality:** Optimal. The algorithm correctly compares the left subtree with the right subtree by mirroring the traversal (comparing left-left with right-right and left-right with right-left).

## Complexity
- **Time Complexity:** $O(N)$, where $N$ is the number of nodes in the tree, as each node is visited exactly once.
- **Space Complexity:** $O(H)$, where $H$ is the height of the tree, due to the recursion stack. In the worst case (skewed tree), this is $O(N)$.

## Efficiency Feedback
- The implementation is already efficient.
- **Minor optimization:** The condition `if(b1==true and b2==true)` can be simplified to `return b1 && b2;` to avoid explicit `if/else` branching.

## Code Quality
- **Readability:** Good. The logic is clear and intuitive.
- **Structure:** Good. Using a helper function `fun` is standard practice for tree problems requiring state comparison.
- **Naming:** Poor. `fun`, `p`, `q`, `b1`, and `b2` are generic identifiers. Using names like `isMirror`, `leftNode`, `rightNode`, `leftMatch`, and `rightMatch` would significantly improve maintainability.
- **Concrete Improvements:**
    - Handle the edge case where `root` is `NULL` (though the problem constraints usually imply at least one node, it is safer to check `if (!root) return true;` in `isSymmetric`).
    - Rename `fun` to `checkMirror` or similar for better intent.
    - Consolidate the return statement in `fun`: `return (p->val == q->val) && fun(p->left, q->right) && fun(p->right, q->left);`.

---

# Question Revision
### Revision Report: Symmetric Tree

**Pattern:** Recursion / Tree Traversal (Mirror Property)

**Brute Force:** 
Serialize the left and right subtrees into lists (e.g., in-order traversal) and check if they are exact mirrors. This requires $O(n)$ space for the lists and $O(n)$ time for traversal.

**Optimal Approach:** 
Use a helper function that compares two nodes simultaneously:
1. If both are `null`, return `true`.
2. If only one is `null` or values differ, return `false`.
3. Recursively check `(left.left, right.right)` and `(left.right, right.left)`.
*   **Time Complexity:** $O(n)$ (each node visited once).
*   **Space Complexity:** $O(h)$ (where $h$ is tree height, due to the call stack).

**The 'Aha' Moment:** 
Whenever a problem asks to compare two branches of a tree for equality or symmetry, realize you are not traversing one tree, but walking two trees in parallel.

**Summary:** 
Symmetry is just a mirrored comparison; pass two pointers down the tree and explore their subtrees in opposite directions.

---