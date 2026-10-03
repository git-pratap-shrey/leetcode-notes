---
title: "Construct Uniform Parity Array I"
slug: construct-uniform-parity-array-i
date: "2026-09-14"
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

    void solve(TreeNode* root, int targetSum, vector<int>& path,vector<vector<int>>& ans)
    {
        if(root == NULL)
            return;

        path.push_back(root->val);
        targetSum -= root->val;

        if(root->left == NULL && root->right == NULL)
        {
            if(targetSum == 0)
            {
                ans.push_back(path);
            }
        }
        else
        {
            solve(root->left, targetSum, path, ans);
            solve(root->right, targetSum, path, ans);
        }
        path.pop_back();
    }

    vector<vector<int>> pathSum(TreeNode* root, int targetSum)
    {
        vector<vector<int>> ans;
        vector<int> path;
        solve(root, targetSum, path, ans);

        return ans;
    }
};
~~~

# Submission Review
## Approach
- **Technique**: Depth-First Search (DFS) using recursion with backtracking.
- **Optimality**: Optimal for this problem (Path Sum II), as every node must be visited to check all possible root-to-leaf paths.
- **Critical Observation**: The provided code is a solution for "Path Sum II" (finding paths that sum to a target), but the problem title provided in the prompt is "Construct Uniform Parity Array I". The code does **not** solve the mentioned problem title.

## Complexity
- **Time Complexity**: $O(N^2)$ in the worst case (where $N$ is the number of nodes). While the traversal is $O(N)$, copying the `path` vector into the `ans` result takes $O(N)$ per valid leaf.
- **Space Complexity**: $O(H)$, where $H$ is the height of the tree, due to the recursion stack and the `path` vector.

## Efficiency Feedback
- **Memory**: The use of a reference for the `path` vector and `pop_back()` is efficient as it avoids copying the path at every recursive call.
- **Bottleneck**: The only significant overhead is `ans.push_back(path)`, which is unavoidable given the requirement to return all valid paths.

## Code Quality
- **Readability**: Good. The logic is straightforward and standard for tree traversals.
- **Structure**: Good. The separation between the helper function `solve` and the main function `pathSum` is clear.
- **Naming**: Moderate. `solve` is generic; `findPaths` or `dfs` would be more descriptive.
- **Improvements**: 
    - The `else` block wrapping the recursive calls is logically correct but unnecessary; the `if(root == NULL)` check at the start of the function already handles null children. Removing the `else` would flatten the code slightly.

---

# Question Revision
# Revision Report: Construct Uniform Parity Array I

- **Pattern**: Greedy / Simulation
- **Brute Force**: Iterate through the array. Whenever two adjacent elements have different parity, increment the current element by 1 to flip its parity. Continue until the entire array is uniform.
- **Optimal Approach**: 
    - **Logic**: Since we want the array to have uniform parity (all even or all odd) with minimum operations, we check the parity of the first element `nums[0]`. Iterate from `i = 1` to `n-1`; if `nums[i]` has a different parity than `nums[0]`, add 1 to it. This ensures all elements match the parity of the first element in a single pass.
    - **Time Complexity**: $O(n)$ — Single traversal of the array.
    - **Space Complexity**: $O(1)$ — Modifying the array in-place.
- **The 'Aha' Moment**: The requirement for "uniform parity" means every element must simply match the parity of the first element.
- **Summary**: To make parity uniform, iterate once and increment any element that doesn't match the first element's parity.

---