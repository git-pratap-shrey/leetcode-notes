---
title: "Sum Root to Leaf Numbers"
slug: sum-root-to-leaf-numbers
date: "2026-08-18"
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

 int num(TreeNode* root,int n){
    if(!root) return 0;
    n=n*10+root->val;
    if(!root->left && !root->right) 
    return n;
    return num(root->left,n)+num(root->right,n);
 }
class Solution {
public:
    int sumNumbers(TreeNode* root) {
        if(!root) return 0;
        return num(root,0);
        
    }
};
~~~

# Submission Review
## Approach
* **Technique:** Recursive Depth-First Search (DFS).
* **Optimality:** Optimal. The algorithm visits each node exactly once, which is necessary to calculate the path sums.

## Complexity
* **Time Complexity:** $O(N)$, where $N$ is the number of nodes in the binary tree, as each node is visited once.
* **Space Complexity:** $O(H)$, where $H$ is the height of the tree, due to the implicit recursion stack. In the worst case (skewed tree), this is $O(N)$; in the best case (balanced tree), this is $O(\log N)$.

## Efficiency Feedback
* The efficiency is excellent. 
* **Minor Optimization:** The `if(!root) return 0;` check in `num` is technically redundant because the base case `if(!root->left && !root->right)` and the caller's check handle the terminal nodes safely. Removing the redundant check can slightly reduce branching.

## Code Quality
* **Readability:** Good. The logic is concise and follows standard recursive patterns.
* **Structure:** Moderate. Placing the helper function `num` in the global namespace is acceptable for competitive programming, but nesting it as a private member function or using a lambda inside `sumNumbers` is preferred for better encapsulation.
* **Naming:** Poor. `num` is ambiguous; `calculatePathSum` or `dfs` would be more descriptive. 
* **Concrete Improvements:**
    * Use a lambda function to keep the helper logic within the `Solution` class.
    * Use `const TreeNode*` for the input pointer to signify read-only access to the tree.
    * Add a `using` declaration or maintain consistent indentation for the recursive calls.

```cpp
class Solution {
public:
    int sumNumbers(TreeNode* root) {
        auto dfs = [&](auto self, TreeNode* node, int currentSum) -> int {
            if (!node) return 0;
            currentSum = currentSum * 10 + node->val;
            if (!node->left && !node->right) return currentSum;
            return self(self, node->left, currentSum) + self(self, node->right, currentSum);
        };
        return dfs(dfs, root, 0);
    }
};
```

---

# Question Revision
### Revision Report: Sum Root to Leaf Numbers

**Pattern:** Depth-First Search (DFS) / Pre-order Traversal

**Brute Force:**
Generate all possible root-to-leaf paths by storing them in a list or string, then convert each finished path to an integer and sum them up. This requires $O(n^2)$ space in the worst case (skewed tree) to store path strings and multiple traversals.

**Optimal Approach:**
Perform a DFS where you pass the "running sum" down the recursion stack. At each node, update the current path sum: `current_sum = (current_sum * 10) + node.val`. When a leaf node is reached, return the accumulated sum.
*   **Time Complexity:** $O(n)$ where $n$ is the number of nodes, as each node is visited once.
*   **Space Complexity:** $O(h)$ where $h$ is the tree height, representing the recursion stack depth.

**The 'Aha' Moment:**
The requirement to treat a path as a multi-digit number implies that the state (the accumulated value) must be transformed and carried forward through the recursive call stack.

**Summary:**
Whenever you need to derive a value from a path, pass the "accumulated state" down as a parameter during DFS to transform the problem into a simple leaf-node summation.

---