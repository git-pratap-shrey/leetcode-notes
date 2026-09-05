---
title: "Sum Root to Leaf Numbers"
slug: sum-root-to-leaf-numbers
date: "2026-08-18"
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
    vector<vector<int>> ans;
    vector<vector<int>> pathSum(TreeNode* root, int targetSum) {
        vector<int> path;
        dfs(root, targetSum, path);
        return ans;
    }
    void dfs(TreeNode* root, int targetSum, vector<int>& path) {
        if (root == nullptr) return;
        path.push_back(root->val);
        targetSum -= root->val;
        if (root->left == nullptr && root->right == nullptr) { 
            if (targetSum == 0) 
                ans.push_back(path);
        } else {
            dfs(root->left, targetSum, path);
            dfs(root->right, targetSum, path);
        }
        path.pop_back(); 
    }
};
~~~

# Submission Review
## Approach
*   **Technique:** Backtracking/DFS.
*   **Optimality:** This solution is **suboptimal** for the "Sum Root to Leaf Numbers" problem. The provided code actually implements "Path Sum II" (finding paths that equal a `targetSum`), not the standard "Sum Root to Leaf Numbers" (which requires returning the sum of numbers formed by root-to-leaf paths). If the intent is to solve "Sum Root to Leaf Numbers," this logic is logically incorrect as it filters paths by `targetSum`.

## Complexity
*   **Time Complexity:** $O(N)$, where $N$ is the number of nodes, as each node is visited once.
*   **Space Complexity:** $O(H)$ for the recursion stack and path vector, where $H$ is the height of the tree.

## Efficiency Feedback
*   **Bottleneck:** The use of `vector<vector<int>>` and `vector<int>` for paths is memory-intensive. 
*   **Optimization:** If the goal is just the sum of numbers, you should calculate the numerical value on the fly (`currentVal = currentVal * 10 + node->val`) rather than storing entire paths in vectors. This reduces space complexity to $O(H)$ and eliminates vector allocations.

## Code Quality
*   **Readability:** Moderate. The code is clean, but the naming convention is misleading.
*   **Structure:** Good. The backtracking pattern (push, recurse, pop) is standard and correctly implemented.
*   **Naming:** Poor. The class/function names are confusing because they solve a different LeetCode problem ("Path Sum II") than the one requested ("Sum Root to Leaf Numbers").
*   **Improvements:**
    *   **Mismatch:** Rename the function to `pathSumII` to match the actual logic, or rewrite the logic to compute the numerical sum of digits if the goal is "Sum Root to Leaf Numbers."
    *   **Pass-by-reference:** `targetSum` is passed by value, which is fine for integers, but ensure no unnecessary copies are made if the logic scales.
    *   **Data Structures:** If solving "Sum Root to Leaf Numbers," remove all vector containers and return a simple `int` or `long long` sum.

---

# Question Revision
### Revision Report: Sum Root to Leaf Numbers

**Pattern:** Depth-First Search (DFS) / Pre-order Traversal

**Brute Force:**
Generate all possible root-to-leaf paths by storing them in a list or string, then convert each finished path to an integer and sum them up. This requires $O(n^2)$ space in the worst case (skewed tree) to store path strings and multiple traversals.

**Optimal Approach:**
Traverse the tree while maintaining a running total: `current_sum = (prev_sum * 10) + node.val`. When a leaf node is reached, return the `current_sum`; otherwise, return the sum of the left and right subtrees.
*   **Time Complexity:** $O(n)$, where $n$ is the number of nodes, as we visit each node exactly once.
*   **Space Complexity:** $O(h)$, where $h$ is the height of the tree (recursion stack), ranging from $O(\log n)$ for balanced trees to $O(n)$ for skewed trees.

**The 'Aha' Moment:**
The requirement to treat a path as a decimal number is a signal that you can pass the cumulative state down the recursion stack rather than collecting the full path at the leaf.

**Summary:**
Whenever a path-based calculation depends on the digits of its ancestors, pass the running total as a parameter through your DFS to avoid backtracking or storing full paths.

---