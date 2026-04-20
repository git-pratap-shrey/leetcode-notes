---
title: "Binary Tree Maximum Path Sum"
slug: binary-tree-maximum-path-sum
date: "2026-04-20"
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
    int dia=INT_MIN;
    int diam(TreeNode* root){
        if(root==NULL) return 0;

        int left=max(0,diam(root->left));
        int right=max(0,diam(root->right));
        int current=(left+right+root->val);
        dia=(current>dia)?current:dia;
        return root->val+max(left,right);
    }
    int maxPathSum(TreeNode* root) {
        diam(root);
        return dia;
        
    }
};
~~~

# Submission Review
## Approach
- **Technique**: Recursive Depth-First Search (DFS) / Post-order Traversal.
- **Optimality**: Optimal. It computes the maximum path sum in a single pass by calculating the best contribution of each subtree to its parent while updating a global maximum for paths that peak at the current node.

## Complexity
- **Time Complexity**: $O(N)$, where $N$ is the number of nodes in the tree. Each node is visited exactly once.
- **Space Complexity**: $O(H)$, where $H$ is the height of the tree, representing the maximum depth of the recursion stack. In the worst case (skewed tree), this is $O(N)$.

## Efficiency Feedback
- The use of `max(0, ...)` effectively prunes negative paths, which is the correct way to handle nodes with negative values in this problem.
- The runtime and memory usage are as low as possible for this algorithm.

## Code Quality
- **Readability**: Moderate. The logic is clear, but the naming is misleading.
- **Structure**: Good. The separation between the helper function and the main entry point is standard.
- **Naming**: Poor. 
    - `diam` and `dia` typically refer to the "Diameter" of a tree (the longest path between two nodes regardless of value). Since this problem asks for the "Maximum Path Sum," names like `calculateMaxGain` and `maxSum` would be more appropriate.
- **Concrete Improvements**:
    - Replace `dia = (current > dia) ? current : dia;` with the standard `dia = max(dia, current);` for consistency.
    - Use `nullptr` instead of `NULL` (C++11 standard).
    - Change the helper function name from `diam` to something describing "path sum" or "gain."

---

# Question Revision
### Binary Tree Maximum Path Sum

**Pattern:** Recursive DFS (Bottom-Up / Post-order Traversal)

**Brute Force:** For every node in the tree, calculate all possible paths starting from that node using separate traversals, resulting in redundant computations.

**Optimal Approach:**
*   **Logic:** Use a recursive helper that computes the maximum "single-branch" contribution (node value + max of either left or right subtree). While calculating this, update a global maximum by treating the current node as the **apex** of the path (Node + Left Gain + Right Gain). If a subtree's contribution is negative, treat it as 0 (ignore it).
*   **Time Complexity:** $O(n)$ — each node is visited once.
*   **Space Complexity:** $O(h)$ — where $h$ is the tree height (recursion stack).

**The 'Aha' Moment:** The path can "bend" at a node, meaning the global maximum is found by treating a node as the peak connecting its left and right branches, while only returning the single best branch upward to the parent.

**Summary:** Track the global max using the "arch" (left + node + right) but return only the "single-leg" (node + max(left, right)) to the recursive caller.

---