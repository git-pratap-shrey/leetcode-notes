---
title: "Path Sum"
slug: path-sum
date: "2026-06-25"
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
    bool hasPathSum(TreeNode* root,int targetSum) {

        if(root==nullptr){
            return false;
        }
        targetSum-=root->val;
        if(root->left==nullptr && root->right==nullptr){
            if(targetSum==0){
                return true;
            }
            else{
                return false;
            }
        }
        bool leftPath=hasPathSum(root->left,targetSum);
        bool rightPath=hasPathSum(root->right,targetSum);
        if(leftPath||rightPath){
            return true;
        }

        return false;
    }
};
~~~  # Submission Review 

## Approach
- **Technique**: Recursive Depth-First Search (DFS).
- **Optimality**: Optimal. The algorithm must visit nodes to determine if a valid path exists, and $O(N)$ is the lower bound for this problem.

## Complexity
- **Time Complexity**: $O(N)$, where $N$ is the number of nodes in the tree. Each node is visited exactly once.
- **Space Complexity**: $O(H)$, where $H$ is the height of the tree. This represents the maximum depth of the recursion stack (worst case $O(N)$ for a skewed tree, average case $O(\log N)$ for a balanced tree).

## Efficiency Feedback
- **Redundant Computation**: The code calculates `rightPath` regardless of whether `leftPath` is already `true`. Using the logical OR operator directly in the return statement would allow short-circuiting, potentially skipping the traversal of the right subtree.

## Code Quality
- **Readability**: Moderate. The logic is clear, but it is overly verbose.
- **Structure**: Good. The base cases and recursive steps are handled in a logical order.
- **Naming**: Good. Variable names like `leftPath` and `rightPath` clearly describe their purpose.

**Concrete Improvements**:
1. **Simplify Booleans**: Replace `if(targetSum==0){ return true; } else { return false; }` with `return targetSum == 0;`.
2. **Short-circuit Recursion**: Replace the `leftPath`/`rightPath` variables and the subsequent `if` block with:
   `return hasPathSum(root->left, targetSum) || hasPathSum(root->right, targetSum);`

---

# Question Revision #

## Path Sum

**Pattern:** DFS / Recursion

**Brute Force:** Traverse every possible root-to-leaf path, calculating the total sum for each, and compare it to the target.

**Optimal Approach:** Use a recursive top-down approach. Subtract the current node's value from the target sum as you descend. A path is found if you reach a leaf node where the remaining target sum equals the leaf's value.
- **Time Complexity:** $O(n)$ where $n$ is the number of nodes.
- **Space Complexity:** $O(h)$ where $h$ is the tree height (recursion stack).

**The 'Aha' Moment:** The requirement for a "root-to-leaf path" signals a depth-first traversal where the state (remaining sum) is passed down to children.

**Summary:** Subtract node values from the target during DFS; if a leaf's value matches the remaining sum, return true.

---
