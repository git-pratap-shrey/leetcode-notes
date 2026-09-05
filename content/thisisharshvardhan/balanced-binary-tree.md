---
title: "Balanced Binary Tree"
slug: balanced-binary-tree
date: "2026-08-17"
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

 int findheight(TreeNode* root){
       if(root == NULL) return 0;
       return 1+max(findheight(root->left),findheight(root->right));
 }
class Solution {
public:
    bool isBalanced(TreeNode* root) {
        if (root == NULL) return true;

        int lh=findheight(root->left);
        int rh=findheight(root->right);

        if(abs(lh-rh)>1) return false;

        bool left=(isBalanced(root->left));
        bool right=(isBalanced(root->right));

        if(!left || !right) return false;
        return true;
        
    }
};
~~~

# Submission Review
## Approach
*   **Technique:** Recursive depth-first search.
*   **Optimal:** No. The current approach calculates the height of the tree repeatedly for every node. This is a top-down approach that leads to redundant calculations. An optimal solution uses a bottom-up approach (post-order traversal) to calculate height and check balance in a single pass.

## Complexity
*   **Time Complexity:** $O(n^2)$ in the worst case (skewed tree), as `findheight` is called for every node, and each `findheight` traversal takes $O(n)$.
*   **Space Complexity:** $O(h)$ where $h$ is the height of the tree, representing the recursion stack depth.

## Efficiency Feedback
*   **Bottleneck:** The redundant `findheight` calls cause the $O(n^2)$ complexity.
*   **Optimization:** Merge the height calculation and the balance check. Return `-1` from a helper function if a subtree is unbalanced; otherwise, return the actual height. This reduces time complexity to $O(n)$.

## Code Quality
*   **Readability:** Moderate. Logic is clear, but the separation of `findheight` as a global function is unconventional for a class-based solution.
*   **Structure:** Moderate. The recursion logic is fragmented; the balance check and height calculation are decoupled when they should be integrated.
*   **Naming:** Good. `lh` and `rh` are standard abbreviations for left/right heights.
*   **Concrete Improvements:**
    *   Move `findheight` inside the `Solution` class as a private helper or embed it into the logic.
    *   Use `std::abs` (from `<cmath>` or `<cstdlib>`) and ensure the logic returns early as soon as an imbalance is detected to avoid unnecessary traversals.
    *   Refactor to a single helper function: 
        ```cpp
        int check(TreeNode* node) {
            if (!node) return 0;
            int l = check(node->left); if (l == -1) return -1;
            int r = check(node->right); if (r == -1) return -1;
            if (abs(l - r) > 1) return -1;
            return 1 + max(l, r);
        }
        ```

---

# Question Revision
### Revision Report: Balanced Binary Tree

**Pattern:** Depth-First Search (Post-order Traversal)

**Brute Force:** 
For every node, calculate the height of the left and right subtrees and check if the difference is $\le 1$. Since `height` is called for every node, this results in redundant calculations leading to $O(n^2)$ time complexity.

**Optimal Approach:** 
Use a recursive DFS function that returns the height of the subtree if balanced, or a sentinel value (e.g., `-1`) if unbalanced. By checking the balance condition during the post-order return phase, we compute height and balance status in a single pass.
*   **Time Complexity:** $O(n)$
*   **Space Complexity:** $O(h)$ (where $h$ is the tree height, due to the recursion stack)

**The 'Aha' Moment:**
When a problem requires checking a property across all subtrees, perform the calculation bottom-up during a post-order traversal to pass results to the parent, effectively pruning the search as soon as a subtree fails the condition.

**Summary:** 
If checking a subtree property involves height or depth, use a post-order DFS that returns both the value and a validity flag to achieve $O(n)$ linear time.

---