--- title: "Path Sum" slug: path-sum date: "2026-06-24" ---  # My Solution ~~~/**
 * Definition for a binary tree node.
 * struct TreeNode {
 *     int val;
 *     TreeNode *left;
 *     TreeNode *right;
 *     TreeNode() : val(0), left(nullptr), right(nullptr) {}
 *     TreeNode(int x) : val(x), left(nullptr), right(nullptr) {}
 *     TreeNode(int x, TreeNode *left, TreeNode *right) : val(x), left(left),
 * right(right) {}
 * };
 */
class Solution {
public:
    bool fn(TreeNode* root, int sum, int targetSum) {
        if(!root->left && !root->right){
            // cout << sum << endl;
            if (targetSum == sum + root->val) {
                return true;
            }
            return false;
        }

        if (root->left) {
            if (fn(root->left, sum + root->val, targetSum)) {
                return true;
            }
        }
        if (root->right) {
            if (fn(root->right, sum + root->val, targetSum)) {
                return true;
            }
        }
        return false;
    }
    bool hasPathSum(TreeNode* root, int targetSum) {
        if (!root) {
            return false;
        }
        if(!root->left && !root->right){
            if(root->val == targetSum){
                return true;
            }
            return false;
        }
        if (root->left) {
            if (fn(root->left, root->val, targetSum)) {
                return true;
            }
        }
        if (root->right) {
            if (fn(root->right, root->val, targetSum)) {
                return true;
            }
        }
        return false;
    }
}; - cpp~~~  # Submission Review ## Approach
- **Technique**: Depth First Search (DFS) using recursion.
- **Optimality**: Optimal. The problem requires potentially visiting every node to find a valid path, making $O(N)$ the lower bound.

## Complexity
- **Time Complexity**: $O(N)$, where $N$ is the number of nodes in the tree. Each node is visited at most once.
- **Space Complexity**: $O(H)$, where $H$ is the height of the tree, representing the maximum depth of the recursion stack. In the worst case (skewed tree), this is $O(N)$.

## Efficiency Feedback
- **Redundancy**: The solution contains significant logic duplication. Both `hasPathSum` and `fn` implement the exact same leaf-check and child-traversal logic.
- **Overhead**: The use of a helper function `fn` is unnecessary here; the same logic could be implemented by subtracting the current node's value from `targetSum` in a single recursive function.

## Code Quality
- **Readability**: Moderate. The presence of commented-out code (`// cout << sum << endl;`) is unprofessional and cluttering.
- **Structure**: Moderate. The separation into `hasPathSum` and `fn` is redundant, as the base cases and recursive steps are nearly identical in both.
- **Naming**: Poor. `fn` is a non-descriptive name that provides no hint as to the function's purpose (e.g., `dfs` or `checkPathSum` would be better).

**Concrete Improvements**:
1. **Simplify Logic**: Merge `fn` into `hasPathSum`. Instead of passing a `sum` accumulator, subtract the current node value from `targetSum` and check if the remaining sum is 0 at a leaf.
2. **Remove Duplication**: Eliminate the redundant leaf checks and child existence checks performed in both functions.
3. **Clean Up**: Remove dead code/comments.  ---  # Question Revision ### Path Sum

**Pattern:** Depth First Search (DFS) / Recursion

**Brute Force:** Traverse every possible path from root to leaf, maintaining a running sum, and check if that sum equals `targetSum` upon reaching a leaf node.

**Optimal Approach:** 
Use recursive DFS to subtract the current node's value from the `targetSum`. A path is valid if the current node is a leaf and its value exactly matches the remaining `targetSum`.

- **Time Complexity:** $O(n)$ — each node is visited once.
- **Space Complexity:** $O(h)$ — where $h$ is the tree height (recursion stack).

**The 'Aha' Moment:** The requirement for a "root-to-leaf path" indicates a need to carry state (the remaining sum) downwards through a depth-first traversal.

**Summary:** Use recursive DFS to subtract node values from the target, returning true if a leaf's value matches the remaining sum.  ---