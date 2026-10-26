---
title: "Min Stack"
slug: min-stack
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
    unordered_set<int> seen;

    bool findTarget(TreeNode* root, int k) {
        if (root == nullptr) return false;

        if (seen.count(k - root->val)) return true;
        seen.insert(root->val);

        return findTarget(root->left, k) || findTarget(root->right, k);
    }
};
~~~

# Submission Review
## Approach
- **Technique**: Recursive Depth-First Search (DFS) combined with a Hash Set (`unordered_set`) to track visited nodes.
- **Optimality**: Optimal for a general binary tree. It ensures every node is visited exactly once and lookups for the complement value ($k - \text{val}$) are $O(1)$ on average.

## Complexity
- **Time Complexity**: $O(N)$, where $N$ is the number of nodes in the tree. Each node is processed once.
- **Space Complexity**: $O(N)$. In the worst case (a skewed tree), the recursion stack takes $O(N)$ and the `unordered_set` stores $O(N)$ elements.

## Efficiency Feedback
- **Memory**: The use of `unordered_set` is necessary for $O(1)$ lookups, but for very large trees, the memory overhead of the hash set and the recursion stack could be significant.
- **Optimization**: If the input were specifically a Binary Search Tree (BST), a two-pointer approach with an in-order traversal iterator would reduce the space complexity to $O(H)$ (where $H$ is height). However, based on the provided `TreeNode` structure, this is a general binary tree.

## Code Quality
- **Readability**: Good. The logic is concise and easy to follow.
- **Structure**: Moderate. The `seen` set is a member variable of the class. In a multi-threaded environment or multiple calls to `findTarget` on the same `Solution` instance, this would lead to incorrect results because the set is not cleared between calls.
- **Naming**: Good. `seen` and `k` are standard and clear in this context.

**Concrete Improvements**:
1. **State Management**: Move `unordered_set<int> seen` into a private helper function or clear it at the start of `findTarget` to prevent state leakage between test cases.
2. **Parameter Passing**: Pass the set by reference to a helper function to avoid making it a class member.

---

# Question Revision
# Revision Report: Min Stack

- **Pattern:** Design / Auxiliary Data Structure.
- **Brute Force:** Iterate through the entire stack to find the minimum element every time `getMin()` is called.
    - **Time Complexity:** $O(n)$ for `getMin()`.
- **Optimal Approach:** Maintain a secondary "Min Stack" (or store pairs in a single stack) that tracks the minimum value at every state of the primary stack.
    - **Logic:** When pushing $x$, push $\min(x, \text{current\_min})$ onto the Min Stack. When popping, pop from both. This ensures the top of the Min Stack always represents the minimum of the elements currently in the primary stack.
    - **Time Complexity:** $O(1)$ for all operations (`push`, `pop`, `top`, `getMin`).
    - **Space Complexity:** $O(n)$ to store the min values.
- **The 'Aha' Moment:** The requirement for $O(1)$ `getMin()` while the stack is constantly mutating means the minimum must be pre-computed and stored for every possible stack height.
- **Summary:** Use a parallel stack to mirror the main stack's history of minimum values.

---