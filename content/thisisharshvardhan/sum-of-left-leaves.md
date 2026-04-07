---
title: "Sum of Left Leaves"
slug: sum-of-left-leaves
date: "2026-04-06"

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
class Solution {
public:
    void solve (TreeNode* root, int& ans){
        if (root==NULL) return;
        if (root->left){
            if (!root->left->left && !root->left->right){
                ans+=root->left->val;
            }
        }

        solve (root->left,ans);
        solve(root->right,ans);
    }
    int sumOfLeftLeaves(TreeNode* root) {
        if (root==NULL) return 0;
        if (root->left==NULL && root->right==NULL) return 0;
        int ans=0;
        solve(root,ans);
        return ans;

    }
};
~~~

# Submission Review
## Approach
- **Technique:** Recursive Depth-First Search (DFS).
- **Optimality:** Optimal. It visits each node exactly once.

## Complexity
- **Time Complexity:** $O(N)$, where $N$ is the number of nodes in the tree, as every node is visited once.
- **Space Complexity:** $O(H)$, where $H$ is the height of the tree, due to the recursion stack. In the worst case (skewed tree), this is $O(N)$.

## Efficiency Feedback
- The logic is efficient. Using a reference parameter (`int& ans`) is a clean way to accumulate the result without returning values up the recursion stack.
- The check `if (root->left==NULL && root->right==NULL) return 0;` in the entry function is technically redundant because the recursive `solve` function handles leaf nodes naturally (no children satisfy the `if (root->left)` condition), but it does not harm performance.

## Code Quality
- **Readability:** Good. The logic is straightforward and easy to follow.
- **Structure:** Moderate. The helper function `solve` is placed inside the class, but could be marked `private` to better encapsulate the interface.
- **Naming:** Good. `ans` and `solve` are standard, though more descriptive names like `sum` and `traverse` would improve clarity.
- **Improvements:**
    - The `solve` function does not strictly need to visit right children if they cannot contain "left leaves" as descendants, though the current implementation is correct.
    - You can simplify the recursive structure by returning the sum directly:
      ```cpp
      int sumOfLeftLeaves(TreeNode* root) {
          if (!root) return 0;
          int sum = 0;
          if (root->left) {
              if (!root->left->left && !root->left->right) sum += root->left->val;
              else sum += sumOfLeftLeaves(root->left);
          }
          sum += sumOfLeftLeaves(root->right);
          return sum;
      }
      ```
    - Mark the `solve` function as `private`.

---
---


# Question Revision
### Revision Report: Sum of Left Leaves

**Pattern:** Tree Traversal (DFS/BFS)

**Brute Force:**
Perform a full tree traversal and store all nodes in a list, then iterate through the list to check if a node has a left child that is a leaf.
*   **Complexity:** Time $O(n)$, Space $O(n)$ for storage + $O(h)$ for recursion stack.

**Optimal Approach:**
Use a recursive DFS that carries a boolean flag `isLeft` to indicate if the current node is a left child. If a node is a leaf (no children) and `isLeft` is true, add its value to the sum.
*   **Time Complexity:** $O(n)$, where $n$ is the number of nodes, as we visit each node exactly once.
*   **Space Complexity:** $O(h)$, where $h$ is the height of the tree (recursion stack).

**The 'Aha' Moment:**
The requirement to distinguish between a "left leaf" and a "right leaf" forces you to pass state down the recursion tree to identify the child's orientation relative to its parent.

**Summary:** 
Whenever a condition depends on the relationship between a parent and its child, pass metadata down the recursive call stack to maintain context.

---
