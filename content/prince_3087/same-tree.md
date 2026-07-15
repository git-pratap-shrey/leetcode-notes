---
title: "Same Tree"
slug: same-tree
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
    bool fun(TreeNode* p,TreeNode*q){
        if(p==NULL and q==NULL){
            return true;
        }
        if(p==NULL or q==NULL){
            return false;
        }
        if(p->val != q->val){
            return false;
        }
        bool b1=fun(p->left,q->left);
        bool b2=fun(p->right,q->right);
        if(b1==true && b2==true ){
            return true;
        }
        else return false;
    }

    bool isSameTree(TreeNode* p, TreeNode* q) {
        bool answer=fun(p,q);
        return answer;
        
    }
};
~~~

# Submission Review
## Approach
*   **Technique:** Recursive Depth-First Search (DFS).
*   **Optimality:** Optimal. The algorithm traverses each node exactly once, which is necessary to determine equality.

## Complexity
*   **Time Complexity:** $O(N)$, where $N$ is the number of nodes in the smaller tree, as every node is visited at most once.
*   **Space Complexity:** $O(H)$, where $H$ is the height of the tree, representing the recursion stack depth (worst case $O(N)$ for a skewed tree).

## Efficiency Feedback
*   The implementation is efficient; no significant overhead exists.
*   **Optimization:** The boolean logic in the recursive step (`if(b1==true && b2==true)`) can be simplified to a single expression `return fun(p->left, q->left) && fun(p->right, q->right);` to leverage short-circuit evaluation. This avoids traversing the right subtree if the left subtree check already fails.

## Code Quality
*   **Readability:** Moderate. The logic is clear, but the coding style is slightly verbose.
*   **Structure:** Moderate. While correct, the helper function `fun` and the unnecessary intermediate variable `answer` add clutter.
*   **Naming:** Poor. `fun`, `b1`, and `b2` are non-descriptive. Use `isSame`, `leftMatch`, and `rightMatch` instead.
*   **Improvements:**
    *   Rename `fun` to a more descriptive name like `isSameNode`.
    *   Simplify the return statement to `return (p->val == q->val) && isSameNode(p->left, q->left) && isSameNode(p->right, q->right);`.
    *   Remove the `isSameTree` wrapper if you directly recurse or keep it clean by returning the function call directly.

---

# Question Revision
### Revision Report: Same Tree

**Pattern:** Tree Traversal (Recursion / DFS)

**Brute Force:**
Serialize both trees into arrays (including null placeholders) using a traversal method like In-order or Level-order, then compare the two resulting arrays for equality.
*   **Time:** $O(n)$
*   **Space:** $O(n)$

**Optimal Approach:**
Perform a simultaneous recursive DFS on both trees. At each node:
1. If both are `null`, return `true`.
2. If one is `null` or values differ, return `false`.
3. Recursively check if `left` subtrees match AND `right` subtrees match.
*   **Time:** $O(n)$ (where $n$ is the number of nodes in the smaller tree).
*   **Space:** $O(h)$ (where $h$ is the height of the tree for the recursion stack).

**The 'Aha' Moment:**
When a problem requires comparing the structural integrity and content of two trees, an identical recursive traversal on both nodes simultaneously simplifies the base cases significantly.

**Summary:**
If two trees must be identical, verify the root values and recursively validate that both left and right subtrees match in parallel.

---