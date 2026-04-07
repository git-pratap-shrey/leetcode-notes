---
title: "Binary Search Tree to Greater Sum Tree"
slug: binary-search-tree-to-greater-sum-tree
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
    TreeNode* bstToGst(TreeNode* root) {
        solve(root);
        return root;
    }
};
~~~

# Submission Review
## Approach
* **Technique**: Reverse In-order Traversal (Right-Root-Left).
* **Optimality**: Optimal. Visiting each node exactly once is the theoretical lower bound for this problem.

## Complexity
* **Time Complexity**: $O(N)$, where $N$ is the number of nodes in the BST, as each node is visited once.
* **Space Complexity**: $O(H)$, where $H$ is the height of the tree, due to the recursion stack. In the worst case (skewed tree), this is $O(N)$.

## Efficiency Feedback
* The implementation is highly efficient. It performs a single pass over the tree and maintains a running sum using a class member variable, which is standard for this type of problem.
* No unnecessary memory allocation or extra data structures are used.

## Code Quality
* **Readability**: Good. The logic is concise and follows a standard pattern for BST modifications.
* **Structure**: Good. Using a helper function `solve` to maintain state while keeping the main interface clean is idiomatic.
* **Naming**: Moderate. While `solve` is acceptable for competitive programming, `reverseInorder` or `accumulateGreaterSum` would be more descriptive. 
* **Improvements**:
    * **Encapsulation**: Moving the `sum` variable into the helper function signature or using a lambda (C++11 and later) would avoid polluting the `Solution` class member scope, making the solution thread-safe and re-entrant.
    * **Const Correctness**: Since the function logic is straightforward, it could be encapsulated within a lambda inside `bstToGst` to keep the class clean.

```cpp
// Example of a cleaner implementation using a lambda
TreeNode* bstToGst(TreeNode* root) {
    int sum = 0;
    auto traverse = [&](auto self, TreeNode* node) -> void {
        if (!node) return;
        self(self, node->right);
        sum += node->val;
        node->val = sum;
        self(self, node->left);
    };
    traverse(traverse, root);
    return root;
}
```

---
---


# Question Revision
### Revision Report: BST to Greater Sum Tree

**Pattern:** Reverse In-Order Traversal (Right -> Root -> Left)

**Brute Force:**
Store all node values in a sorted array via in-order traversal, calculate the suffix sums for each element, and perform a second pass to update each node with its corresponding suffix sum.
*   **Time:** $O(n)$
*   **Space:** $O(n)$

**Optimal Approach:**
Perform a **Reverse In-Order Traversal**. Maintain a running `sum` variable initialized to 0. As you visit each node (Right child, then Root, then Left child), add the current node's value to `sum` and update the node's value to the current `sum`.
*   **Time:** $O(n)$ — Each node is visited exactly once.
*   **Space:** $O(h)$ — Where $h$ is the height of the tree (recursion stack depth).

**The 'Aha' Moment:**
When a problem asks for an operation based on values "greater than" the current node in a BST, realize that a standard in-order traversal visits nodes from smallest to largest, so a reversed one visits them from largest to smallest.

**Summary:**
Use reverse in-order traversal (Right-Root-Left) to accumulate a running sum when you need to transform BST values based on their relative magnitude.

---
