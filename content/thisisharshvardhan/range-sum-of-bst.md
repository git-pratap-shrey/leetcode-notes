---
title: "Range Sum of BST"
slug: range-sum-of-bst
date: "2026-04-10"

---
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
    void solve(TreeNode* root, int& ans,int low,int high){
        if (!root) return;
        solve(root->left,ans,low,high);
        if (root->val>=low && root->val<=high){
            ans+=root->val;
        }
        solve(root->right,ans,low,high);
    }
    int rangeSumBST(TreeNode* root, int low, int high) {
        int ans=0;
        solve(root,ans,low,high);
        return ans;
    }
};
~~~

# Submission Review
## Approach
*   **Technique:** In-order traversal (Depth-First Search).
*   **Optimality:** **Suboptimal.** While correct, it performs a full traversal ($O(N)$) of the tree. It ignores the Binary Search Tree (BST) property, which allows pruning subtrees that fall outside the `[low, high]` range.

## Complexity
*   **Time Complexity:** $O(N)$, where $N$ is the number of nodes in the tree, because it visits every node regardless of its value.
*   **Space Complexity:** $O(H)$, where $H$ is the height of the tree, due to the recursion stack.

## Efficiency Feedback
*   **Bottleneck:** The current solution visits nodes that cannot possibly contribute to the sum.
*   **Optimization:** You can prune the search space:
    *   If `root->val > low`, explore the left subtree.
    *   If `root->val < high`, explore the right subtree.
    *   This reduces the average time complexity significantly in balanced BSTs.

## Code Quality
*   **Readability:** Good. The logic is straightforward and easy to follow.
*   **Structure:** Moderate. Using a helper function `solve` is standard, but the logic could be integrated into the main function or a recursive return-based approach for cleaner code.
*   **Naming:** Moderate. `ans` is acceptable, but `sum` or `total` would be more descriptive. 
*   **Concrete Improvements:** 
    *   Refactor to return an `int` directly instead of passing a reference: `return (in_range ? root->val : 0) + rangeSumBST(left) + rangeSumBST(right);`
    *   Implement the pruning logic mentioned in the Efficiency Feedback to leverage the BST property. 
    *   Pass `low` and `high` by `const` reference or as members if the class were stateful, though not strictly necessary here.

---
---


# Question Revision
### Revision Report: Range Sum of BST

**Pattern:** Tree Traversal (DFS/Pruning)

**Brute Force:** 
Perform a standard traversal (In-order, Pre-order, or Post-order) to visit every node in the tree, check if the node's value falls within `[low, high]`, and add it to a running sum.
*   **Time Complexity:** $O(n)$
*   **Space Complexity:** $O(h)$ (where $h$ is tree height)

**Optimal Approach:** 
Leverage the **Binary Search Tree (BST) property**. At any node, if the current value is greater than `high`, prune the right subtree; if it is less than `low`, prune the left subtree. Only explore branches that could potentially contain values within the range.
*   **Time Complexity:** $O(n)$ in the worst case (e.g., a skewed tree), but significantly faster on average as branches are discarded.
*   **Space Complexity:** $O(h)$ for the recursion stack.

**The 'Aha' Moment:** 
The fact that it is a **BST** rather than a generic binary tree is the signal to use the sorted property to prune branches instead of visiting every node.

**Summary:** 
Use the BST property to prune unnecessary branches; if `node.val` is out of range, skip the subtree that cannot possibly contain valid values.

---
