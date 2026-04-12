---
title: "Invert Binary Tree"
slug: invert-binary-tree
date: "2026-04-12"

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
    TreeNode* solve(TreeNode* root){
        if (!root) return NULL;
        TreeNode* left=solve(root->left);
        TreeNode* right=solve(root->right);

        root->left=right;
        root->right=left;

        return root;

    }
    TreeNode* invertTree(TreeNode* root) {
        solve(root);
        return root;
    }
};
~~~

# Submission Review
## Approach
* **Technique:** Recursive Depth-First Search (DFS).
* **Optimality:** Optimal. The problem requires visiting every node at least once to perform the swap, and this approach does exactly that in $O(N)$ time.

## Complexity
* **Time Complexity:** $O(N)$, where $N$ is the number of nodes, as each node is visited exactly once.
* **Space Complexity:** $O(H)$, where $H$ is the height of the tree, due to the recursion stack. In the worst case (skewed tree), this is $O(N)$.

## Efficiency Feedback
* The logic is highly efficient. The usage of a helper `solve` function is functionally correct, though it introduces a slight overhead of an extra function call stack compared to calling `invertTree` recursively directly.
* Since the function returns the modified node, you can perform the swap inline to make the code more concise.

## Code Quality
* **Readability:** Good. The logic is straightforward and easy to follow.
* **Structure:** Moderate. The `solve` function is redundant. Since `invertTree` already returns a `TreeNode*`, the recursion can be performed directly inside `invertTree`.
* **Naming:** Good. `root` and the recursive calls are intuitively named.

### Concrete Improvements
You can simplify the code by eliminating the `solve` helper function entirely. This improves readability and reduces the depth of the call stack slightly:

```cpp
class Solution {
public:
    TreeNode* invertTree(TreeNode* root) {
        if (!root) return nullptr;
        
        // Swap children after recursive inversion
        TreeNode* left = invertTree(root->left);
        TreeNode* right = invertTree(root->right);
        
        root->left = right;
        root->right = left;
        
        return root;
    }
};
```
*Note: Using `nullptr` is preferred over `NULL` in modern C++.*

---
---


# Question Revision
### Revision Report: Invert Binary Tree

**Pattern:** Tree Traversal (Divide and Conquer / Recursion)

**Brute Force:**
Visit every node starting from the root using a queue or stack. For each node, swap its left and right children, then recursively proceed to the children.

**Optimal Approach:**
Perform a post-order or pre-order traversal. For every node, swap its `left` and `right` pointers, then recurse into both subtrees. 
*   **Time Complexity:** $O(n)$, where $n$ is the number of nodes, as each node is visited exactly once.
*   **Space Complexity:** $O(h)$, where $h$ is the height of the tree, representing the maximum depth of the recursive call stack.

**The 'Aha' Moment:**
The problem asks for a structural transformation that is identical for every subtree, signaling that the result of the root depends entirely on the recursive inversion of its children.

**Summary:**
To invert a tree, swap the children of the current node and delegate the inversion of the subtrees to the recursive function.

---
