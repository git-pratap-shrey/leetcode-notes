---
title: "Reverse Linked List"
slug: reverse-linked-list
date: "2026-10-03"
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
- **Technique**: Backtracking / Depth-First Search (DFS) recursion.
- **Optimality**: The approach is optimal for the problem it *actually* solves (Path Sum II), as every node must be visited to find all valid paths. However, the solution is **completely incorrect** for the requested problem ("Reverse Linked List").

## Complexity
- **Time Complexity**: $O(N)$, where $N$ is the number of nodes in the tree.
- **Space Complexity**: $O(H)$, where $H$ is the height of the tree (recursion stack and path vector), excluding the space required for the output list.

## Efficiency Feedback
- The code implements a tree traversal algorithm. Because it is solving a completely different problem than "Reverse Linked List," the efficiency relative to the requested task is irrelevant.
- For the logic implemented: Passing `vector<int>& path` by reference and using `pop_back()` is an efficient way to handle backtracking.

## Code Quality
- **Readability**: Poor. The code provides a solution for "Path Sum II" (Binary Tree) while the problem prompt asks for "Reverse Linked List." This creates a total mismatch between intent and implementation.
- **Structure**: Moderate. The separation of the helper function `solve` from the main entry point `pathSum` is standard.
- **Naming**: Moderate. `solve` is too generic; `findPaths` would be more descriptive.
- **Concrete Improvements**: 
    1. **Critical**: Replace the entire codebase. The current code uses `TreeNode` (Binary Tree) instead of `ListNode` (Linked List).
    2. **Critical**: Implement a pointer-reversal loop or recursive flip instead of a target-sum search.

---

# Question Revision
# Revision Report: Reverse Linked List

- **Pattern**: Two Pointers (Iterative) / Recursion
- **Brute Force**: Copy the values of the linked list into an array or stack, reverse the array, and then overwrite the linked list nodes with the reversed values.
- **Optimal Approach**: 
    - **Logic**: Use two pointers, `prev` (initialized to `null`) and `curr` (initialized to `head`). While `curr` is not null, temporarily store `curr.next`, flip the `curr.next` pointer to point to `prev`, then shift `prev` and `curr` one step forward.
    - **Time Complexity**: $O(n)$ — Single pass through the list.
    - **Space Complexity**: $O(1)$ — No extra memory used regardless of list size.
- **The 'Aha' Moment**: The need to change the direction of a one-way connection without losing the reference to the rest of the list signals the need for a temporary "next" pointer.
- **Summary**: Reverse the direction of each node's pointer to its previous neighbor while traversing.

---