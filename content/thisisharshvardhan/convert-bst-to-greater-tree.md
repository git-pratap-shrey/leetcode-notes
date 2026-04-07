---
title: "Convert BST to Greater Tree"
slug: convert-bst-to-greater-tree
date: "2026-04-07"

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
    int sum=0;
    void solve(TreeNode* root){
        if (!root) return;
        solve(root->right);
        sum+=root->val;
        root->val=sum;
        solve(root->left);
    }
    TreeNode* convertBST(TreeNode* root) {
        solve(root);
        return root;
    }
};
~~~

# Submission Review
## Approach
*   **Technique:** Reverse In-order Traversal (Right -> Node -> Left).
*   **Optimality:** Optimal. It visits each node exactly once to accumulate the running sum and update values in-place, which is the standard approach for this problem.

## Complexity
*   **Time Complexity:** $O(N)$, where $N$ is the number of nodes in the BST, as every node is visited exactly once.
*   **Space Complexity:** $O(H)$, where $H$ is the height of the tree, representing the recursion stack depth. In the worst case (skewed tree), this is $O(N)$; in a balanced tree, it is $O(\log N)$.

## Efficiency Feedback
*   The runtime is optimal for the given constraints.
*   The space efficiency is limited by the recursion stack. While Morris Traversal could achieve $O(1)$ auxiliary space, it is typically overkill for standard BST problems unless memory is extremely constrained.

## Code Quality
*   **Readability:** Good. The logic is concise and follows the standard recursive pattern for reverse in-order traversal.
*   **Structure:** Good. The helper function `solve` effectively encapsulates the traversal logic.
*   **Naming:** Moderate. `solve` is generic; `reverseInOrder` or `accumulateSum` would be more descriptive of the function's purpose.
*   **Concrete Improvements:**
    *   Consider making the helper function `private` to follow encapsulation best practices.
    *   Using a `sum` member variable is fine for competitive programming, but passing it by reference or using a class-level member is cleaner than relying on the implicit scope if you were to expand this into a larger class.
    *   The member variable `sum` should ideally be initialized within `convertBST` (or reset if the class instance is reused) to ensure the code remains robust across multiple calls to `convertBST`. Currently, if the same object is used twice, `sum` will not be reset to 0.

```cpp
// Suggested fix for multiple test cases:
TreeNode* convertBST(TreeNode* root) {
    sum = 0; // Reset sum before processing
    solve(root);
    return root;
}
```

---
---


# Question Revision
### Revision Report: Convert BST to Greater Tree

**Pattern:** Reverse In-Order Traversal (Right-Root-Left)

**Brute Force:**
Store all node values in a sorted array, calculate suffix sums for each value, and perform a second pass to update nodes. 
*   **Time:** $O(n)$
*   **Space:** $O(n)$

**Optimal Approach:**
Perform a modified In-Order traversal visiting the Right subtree, then the Root, then the Left subtree. Maintain a `running_sum` variable that accumulates the values of visited nodes; update the current node's value with this sum before moving to the left child.
*   **Time:** $O(n)$ (each node visited once)
*   **Space:** $O(h)$ where $h$ is tree height (recursion stack)

**The 'Aha' Moment:**
Since a BST’s In-Order traversal produces values in ascending order, reversing the traversal direction allows you to process values in descending order while maintaining a prefix/running sum.

**Summary:** 
Whenever you need to calculate cumulative totals based on sorted order in a BST, perform a Reverse In-Order traversal to accumulate values globally.

---
