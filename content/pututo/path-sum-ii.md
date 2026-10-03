---
title: "Path Sum II"
slug: path-sum-ii
date: "2026-09-07"
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
- **Technique**: Depth-First Search (DFS) / Backtracking. The solution traverses all paths from root to leaf, maintaining a current path and a running sum.
- **Optimality**: Optimal. Every node must be visited at least once to determine if a path exists, and the backtracking approach avoids redundant path allocations.

## Complexity
- **Time Complexity**: $O(N^2)$ in the worst case. While the traversal is $O(N)$, copying a valid path into the `ans` vector takes $O(N)$. In a skewed tree where every path is valid, this results in quadratic time.
- **Space Complexity**: $O(N)$. The recursion stack and the `path` vector both scale linearly with the height of the tree (worst case $O(N)$ for a skewed tree).

## Efficiency Feedback
- **Memory**: Memory usage is efficient due to passing the `path` and `ans` vectors by reference, avoiding repeated allocations.
- **Potential Bottleneck**: The only bottleneck is the `ans.push_back(path)` operation, which is unavoidable as the problem requires returning all complete paths.

## Code Quality
- **Readability**: Good. The logic is straightforward and follows standard DFS patterns.
- **Structure**: Good. Separating the recursive helper (`solve`) from the main function (`pathSum`) is appropriate.
- **Naming**: Moderate. `solve` is a generic name; `findPaths` or `dfs` would be more descriptive.
- **Concrete Improvements**:
    - Use `const int& targetSum` or simply pass it by value (as is done) since it's a primitive.
    - Consider using `std::vector::reserve` if the number of paths is known, though not possible here.
    - The `else` block around the recursive calls is technically unnecessary because the `root == NULL` check at the top handles empty children, but it slightly optimizes by avoiding two function calls at every leaf.

---

# Question Revision
# Revision Report: Path Sum II

- **Pattern**: Depth First Search (DFS) / Backtracking
- **Brute Force**: Traverse every possible path from root to leaf using recursion, storing the current path in a list. If the leaf node's value completes the target sum, add a copy of the current path to the final result list.
- **Optimal Approach**: 
    - Use a recursive helper function to track the `current_sum` and the `current_path`.
    - Subtract the node's value from the target sum at each step.
    - **Base Case**: If the current node is a leaf and its value equals the remaining target sum, record the path.
    - **Backtracking**: Push the current node to the path before visiting children, and pop it after the children have been processed to restore the state for the parent's other branches.
    - **Complexity**: 
        - Time: $O(n^2)$ in the worst case (e.g., a complete binary tree where many paths satisfy the sum, requiring a copy of the path list).
        - Space: $O(h)$ where $h$ is the tree height (recursion stack).
- **The 'Aha' Moment**: The requirement to return the **actual paths** (not just a boolean or count) signals a need for backtracking to maintain and revert the state of the current traversal path.
- **Summary**: Use DFS to explore paths and backtrack the current path list to find all root-to-leaf sequences that sum to the target.

---