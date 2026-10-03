---
title: "Binary Tree Paths"
slug: binary-tree-paths
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
    void solve(TreeNode* root,string path,vector<string>&ans){
        if(root==NULL)
        return ;
        path+=to_string(root->val);
        if(root->left==NULL && root->right==NULL){
            ans.push_back(path);
            return;
        }
        path+="->";
        solve(root->left,path,ans);
        solve(root->right,path,ans);
    }

    vector<string> binaryTreePaths(TreeNode* root) {
        vector<string>ans;
        solve(root,"",ans);
        return ans;
    }
};
~~~

# Submission Review
## Approach
- **Technique**: Depth-First Search (DFS) using recursion.
- **Optimality**: Optimal. Every node must be visited once to construct all paths from root to leaf.

## Complexity
- **Time Complexity**: $O(N \cdot H)$, where $N$ is the number of nodes and $H$ is the height of the tree. In the worst case (skewed tree), string concatenation and copying take $O(N)$ per leaf, leading to $O(N^2)$.
- **Space Complexity**: $O(H)$ for the recursion stack, where $H$ is the height of the tree. The result vector storage is not typically counted toward auxiliary space but would be $O(N \cdot H)$.

## Efficiency Feedback
- **String Handling**: The current solution passes the `path` string by value in each recursive call. This creates a new string object at every level of the tree, increasing memory allocation overhead.
- **Optimization**: Passing the string by reference and performing manual backtracking (removing the added characters after the recursive calls) would reduce the number of string allocations.

## Code Quality
- **Readability**: Good. The logic is straightforward and easy to follow.
- **Structure**: Good. The separation of the helper function `solve` from the main interface is standard practice.
- **Naming**: Moderate. `solve` is a generic name; `findPaths` or `dfs` would be more descriptive. `ans` is acceptable for competitive programming but `paths` would be better for production.
- **Concrete Improvements**:
    - Use `std::to_string` carefully; in performance-critical environments, a custom integer-to-string conversion or `std::stringstream` might be faster, though `to_string` is sufficient here.
    - Ensure consistent spacing around operators (e.g., `root == NULL` instead of `root==NULL`).

---

# Question Revision
# Revision Report: Binary Tree Paths

- **Pattern**: Depth-First Search (DFS) / Pre-order Traversal.
- **Brute Force**: Exhaustively traverse every possible path from root to leaf, storing the current path in a list and converting it to a string only when a leaf node is reached.
- **Optimal Approach**: 
    - Use a recursive DFS function that passes down the current path string.
    - If the current node is a leaf (no left or right child), add the completed path string to the result list.
    - Otherwise, recursively call the function for left and right children, appending the current node's value and an arrow (`->`) to the path string.
    - **Time Complexity**: $O(n)$ where $n$ is the number of nodes (each node is visited once).
    - **Space Complexity**: $O(h)$ where $h$ is the tree height (recursion stack depth).
- **The 'Aha' Moment**: The requirement to find paths from root to **leaf** implies a complete traversal of every branch, which is a textbook case for DFS.
- **Summary**: Use DFS to carry the path string downward and collect it only when you hit a leaf node.

---