---
title: "Sum Root to Leaf Numbers"
slug: sum-root-to-leaf-numbers
date: "2026-10-23"
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
    int ans=0;
    int dfs(TreeNode* root){
        if(!root)
        return 0;
        int l=dfs(root->left);
        int r=dfs(root->right);
        int left=0;int right=0;
        if(root->left && root->val==root->left->val)
        left=l+1;
        if(root->right&&root->val==root->right->val)
        right=r+1;

        ans=max(ans,left+right);
        return max(left,right);
    }
    int longestUnivaluePath(TreeNode* root) {
        dfs(root);
        return ans;

    }
};
~~~

# Submission Review
## Approach
- **Technique**: Post-order Traversal (DFS) / Bottom-up Recursion.
- **Correctness**: **Incorrect**. The provided code solves the problem **"Longest Univalue Path"**, but the problem statement requested is **"Sum Root to Leaf Numbers"**. The logic calculates the length of the longest path where all nodes have the same value, which is entirely unrelated to summing digits from root to leaf.

## Complexity
- **Time Complexity**: $O(N)$, where $N$ is the number of nodes in the tree, as it visits each node once.
- **Space Complexity**: $O(H)$, where $H$ is the height of the tree, due to the recursion stack.

## Efficiency Feedback
- The implementation of the "Longest Univalue Path" logic is efficient for that specific problem.
- However, it is 0% efficient for "Sum Root to Leaf Numbers" because it solves the wrong problem.

## Code Quality
- **Readability**: Moderate. The logic is concise, but the lack of comments and compressed spacing makes it slightly harder to scan.
- **Structure**: Good. The separation of the helper function `dfs` and the main function is standard.
- **Naming**: Poor. Variable names like `l`, `r`, `left`, and `right` are ambiguous and easily confused with the `TreeNode` pointers `left` and `right`.
- **Improvements**:
    1. **Critical**: Rewrite the entire logic to handle path summation (passing the current running sum down to children).
    2. Use more descriptive names (e.g., `leftLength` instead of `left`).
    3. Remove unnecessary variable initializations (`int left=0; int right=0;`) by using the ternary operator or direct assignments.

---

# Question Revision
# Revision Report: Sum Root to Leaf Numbers

- **Pattern**: DFS / Tree Traversal (Recursive)
- **Brute Force**: Explore every possible path from root to leaf using a queue or stack, storing each complete path as a string or list, then converting those paths to integers and summing them.
- **Optimal Approach**: 
    - **Logic**: Use a recursive DFS. Pass the "current sum" down to children. At each node, update the sum using the formula: `current_sum = (parent_sum * 10) + node.val`. When a leaf node is reached (both `left` and `right` are null), return the `current_sum`. Sum the results from left and right subtrees.
    - **Time Complexity**: $O(n)$ where $n$ is the number of nodes (each node visited once).
    - **Space Complexity**: $O(h)$ where $h$ is the height of the tree (recursion stack).
- **The 'Aha' Moment**: The need to track a running value that evolves as you move deeper into a hierarchy signals a top-down DFS with a state accumulator.
- **Summary**: Pass the accumulated path value down as `(sum * 10) + val` and return the total only when hitting a leaf.

---