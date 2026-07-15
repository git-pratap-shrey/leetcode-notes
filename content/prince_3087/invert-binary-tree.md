---
title: "Invert Binary Tree"
slug: invert-binary-tree
date: "2026-07-15"
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
    void fun(TreeNode*root){
        if(root==NULL){
            return;
        }
        swap(root->left,root->right);
        fun(root->left);
        fun(root->right);
        return;
     
    }
    TreeNode* invertTree(TreeNode* root) {
        fun(root);
        return root;
        
    }
};
~~~

# Submission Review
## Approach
*   **Technique:** Recursive Depth-First Search (DFS).
*   **Optimality:** Optimal. The algorithm must visit every node to invert the subtrees, which this approach does in a single traversal.

## Complexity
*   **Time Complexity:** $O(N)$, where $N$ is the number of nodes in the binary tree, as every node is visited exactly once.
*   **Space Complexity:** $O(H)$, where $H$ is the height of the tree, due to the recursion stack. In the worst case (skewed tree), this is $O(N)$; in the best case (balanced tree), it is $O(\log N)$.

## Efficiency Feedback
*   The logic is as efficient as possible for this problem. No further optimizations are required.
*   The use of `std::swap` is idiomatic and performant for pointer redirection.

## Code Quality
*   **Readability:** Moderate. The logic is clear, but the function naming is non-descriptive.
*   **Structure:** Good. The helper function approach effectively separates the inversion logic from the return value requirement of the public method.
*   **Naming:** Poor. `fun` is a generic name that provides no information about the function's purpose. `invert` or `invertRecursive` would be more appropriate.
*   **Concrete Improvements:**
    *   **Rename:** Change `fun` to `invertHelper` or `reverseNode`.
    *   **Conciseness:** The `return;` statement at the end of the `void` function is redundant.
    *   **Style:** Remove the extra whitespace/formatting inconsistencies for cleaner code.
    *   **Standard:** Use `nullptr` instead of `NULL` for modern C++ consistency.

```cpp
// Suggested refactoring:
class Solution {
public:
    TreeNode* invertTree(TreeNode* root) {
        if (!root) return nullptr;
        
        swap(root->left, root->right);
        invertTree(root->left);
        invertTree(root->right);
        
        return root;
    }
};
```
*Note: The recursive approach can be simplified into a single function as shown above, removing the need for an external helper entirely.*

---

# Question Revision
### Revision Report: Invert Binary Tree

**Pattern:** Tree Traversal (Recursion / DFS)

**Brute Force:** 
Traverse the tree level-by-level or via DFS, and for every node encountered, swap its left and right children references. While the logic is essentially the same as the optimal approach, it is often implemented inefficiently by creating a new tree rather than modifying the existing nodes in-place.

**Optimal Approach:** 
Perform a post-order or pre-order traversal (DFS). At each node, swap the `left` and `right` pointers, then recursively call the function on the `left` and `right` subtrees.
*   **Time Complexity:** $O(n)$, where $n$ is the number of nodes, as each node must be visited once.
*   **Space Complexity:** $O(h)$, where $h$ is the height of the tree, representing the maximum depth of the recursion stack.

**The 'Aha' Moment:**
When the transformation of a parent node depends entirely on the state of its swapped children, a recursive bottom-up or top-down traversal is the natural mechanism to propagate the change.

**Summary:** 
Inverting a tree is simply a recursive swap operation that turns every node's left child into its right child and vice versa.

---