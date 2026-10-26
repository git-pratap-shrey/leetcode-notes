---
title: "Find Target Indices After Sorting Array"
slug: find-target-indices-after-sorting-array
date: "2026-10-20"
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
    int solve(TreeNode* root,int& ans){
        if(root==NULL){
            return 0;
        }
        int left=max(0,solve(root->left,ans));
        int right=max(0,solve(root->right,ans));
        ans=max(ans,root->val+left+right);
        return root->val+max(left,right);
    }
    int maxPathSum(TreeNode* root) {
        int ans=INT_MIN;
        solve(root,ans);
        return ans;
    }
};
~~~

# Submission Review
## Approach
- **Technique**: Post-order recursive traversal (DFS) used to find the Maximum Path Sum in a binary tree.
- **Optimality**: This is the optimal approach for this specific problem (Maximum Path Sum), as it visits each node once and calculates the local maximum path.
- **Critical Error**: The code provided **does not solve the problem stated** ("Find Target Indices After Sorting Array"). It implements a solution for "Binary Tree Maximum Path Sum".

## Complexity
- **Time Complexity**: $O(N)$, where $N$ is the number of nodes in the tree, as each node is visited exactly once.
- **Space Complexity**: $O(H)$, where $H$ is the height of the tree, due to the recursion stack.

## Efficiency Feedback
- The use of `max(0, solve(...))` correctly handles negative path contributions, preventing the path sum from decreasing when a subtree provides a negative value.
- Memory usage is minimal and optimal for a recursive DFS.

## Code Quality
- **Readability**: Moderate. The logic is concise, but the discrepancy between the problem title and the implementation is a major failure in context.
- **Structure**: Good. The helper function `solve` correctly separates the path-continuation logic from the global answer update.
- **Naming**: Poor. `solve` is a generic name; `calculateMaxGain` or `dfs` would be more descriptive. `ans` is acceptable but `maxSum` would be clearer.
- **Concrete Improvements**: 
    - Remove the unused `TreeNode` definition comments if not required by the environment.
    - Fix the fundamental mismatch: the code implements a Binary Tree algorithm, while the problem asks for array index manipulation.

---

# Question Revision
# Revision Report: Find Target Indices After Sorting Array

- **Pattern:** Sorting / Counting (Frequency Map)
- **Brute Force:** Sort the array first using a built-in sorting algorithm, then iterate through the sorted array to find all indices where the element equals the target.
- **Optimal Approach:** 
    - **Logic:** Instead of sorting, count how many numbers in the array are strictly *smaller* than the target (this determines the starting index) and count how many times the *target itself* appears (this determines the range of indices).
    - **Time Complexity:** $O(n)$ (single pass through the array).
    - **Space Complexity:** $O(1)$ if excluding the output list.
- **The 'Aha' Moment:** The problem asks for indices *after* sorting, but since we only care about one specific target value, we only need to know its relative rank and frequency.
- **Summary:** Use counting to determine the target's starting position and frequency instead of performing a full sort.

---