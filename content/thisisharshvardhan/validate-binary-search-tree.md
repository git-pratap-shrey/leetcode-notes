---
title: "Validate Binary Search Tree"
slug: validate-binary-search-tree
date: "2026-04-08"

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
 *     TreeNode() : val(0), left(nullptr), right(nullptr) {}
 *     TreeNode(int x) : val(x), left(nullptr), right(nullptr) {}
 *     TreeNode(int x, TreeNode *left, TreeNode *right) : val(x), left(left), right(right) {}
 * };
 */
class Info {
public:
    long long maxi;
    long long mini;
    bool isBST;
};
class Solution {
public:
    Info solve(TreeNode* root){
        if (!root){
            Info temp;
            temp.maxi=LLONG_MIN;
            temp.mini=LLONG_MAX;
            temp.isBST=true;
            return temp;
        }

        Info left=solve(root->left);
        Info right=solve(root->right);

        Info curr;
        curr.maxi=max((long long)root->val,max(left.maxi,right.maxi));
        curr.mini=min((long long)root->val,min(left.mini,right.mini));
        if(root->val>left.maxi && root->val<right.mini && left.isBST && right.isBST){
            curr.isBST=true;
        }
        else {
            curr.isBST=false;
        }
        return curr;
    }
    bool isValidBST(TreeNode* root) {
        Info ans=solve(root);
        return ans.isBST;
    }
};
~~~

# Submission Review
## Approach
- **Technique**: Bottom-up Tree DP (Post-order traversal). 
- **Optimality**: Optimal. The approach correctly validates the BST property by passing up the minimum and maximum values of subtrees to ensure all nodes satisfy the BST constraint ($left.max < root.val < right.min$).

## Complexity
- **Time Complexity**: $O(N)$, where $N$ is the number of nodes in the tree, as each node is visited exactly once.
- **Space Complexity**: $O(H)$, where $H$ is the height of the tree, due to the recursion stack.

## Efficiency Feedback
- **Runtime**: High efficiency for a tree traversal.
- **Optimization**: The logic is sound. Using `long long` for `maxi`/`mini` is necessary to handle edge cases where `root->val` equals `INT_MIN` or `INT_MAX`. No further optimizations are needed.

## Code Quality
- **Readability**: Good. The logic is clear and follows standard tree traversal patterns.
- **Structure**: Good. Using a helper struct `Info` to propagate metadata is a clean way to handle return values in tree DP.
- **Naming**: Good. Names like `maxi`, `mini`, and `isBST` are intuitive.
- **Concrete Improvements**:
    - **Initialization**: Inside the base case (`!root`), you can use a constructor for the `Info` struct to reduce boilerplate code.
    - **Header**: Ensure `<climits>` is included for `LLONG_MIN` and `LLONG_MAX`.
    - **Initialization Safety**: Instead of `temp.maxi = LLONG_MIN`, consider using `nullptr` or a boolean flag to indicate an empty subtree to avoid potential issues with nodes containing the minimum possible `long long` values, although the current logic works given the problem constraints (integer values).

---
---


# Question Revision
### Revision Report: Validate Binary Search Tree

**Pattern:** Depth-First Search (DFS) / Range Constraints

**Brute Force:**
Recursively check if every node is greater than its left child and smaller than its right child. This fails because a node must satisfy constraints imposed by *all* its ancestors, not just its immediate parent.

**Optimal Approach:**
Pass down an allowed `[min, max]` range for each node. For the root, the range is $(-\infty, +\infty)$. When moving left, update `max` to current node's value; when moving right, update `min`.
*   **Time Complexity:** $O(n)$ — Each node is visited exactly once.
*   **Space Complexity:** $O(h)$ — Where $h$ is the tree height, due to the recursion stack.

**The 'Aha' Moment:**
The problem isn't just about comparing a node to its direct children; it is about maintaining a dynamic "valid window" that constrains all subsequent nodes in a subtree.

**Summary:**
Always pass down boundary constraints ($min, max$) when a node's validity depends on its entire ancestral path rather than just its parent.

---
