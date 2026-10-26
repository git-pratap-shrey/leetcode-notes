---
title: "Two Sum IV - Input is a BST"
slug: two-sum-iv-input-is-a-bst
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
    TreeNode* build(vector<int>& nums, int l, int r) {
        if (l > r) return nullptr;              

        int mid = l + (r - l) / 2;             
        TreeNode* node = new TreeNode(nums[mid]);

        node->left  = build(nums, l, mid - 1);
        node->right = build(nums, mid + 1, r);

        return node;
    }

    TreeNode* sortedArrayToBST(vector<int>& nums) {
        return build(nums, 0, (int)nums.size() - 1);
    }
};
~~~

# Submission Review
## Approach
- **Technique:** Divide and Conquer (Recursive construction).
- **Optimality:** Not applicable. The provided code solves a completely different problem (**Convert Sorted Array to Binary Search Tree**) instead of the requested problem (**Two Sum IV - Input is a BST**). The code does not attempt to find two numbers that sum to a target value.

## Complexity
- **Time Complexity:** $O(N)$, where $N$ is the size of the input array, as each element is visited once to create a node.
- **Space Complexity:** $O(\log N)$ for the recursion stack (assuming a balanced BST).

## Efficiency Feedback
- The implementation is efficient for the task it *actually* performs (constructing a BST), but it is a **total failure** regarding the "Two Sum IV" problem requirement.

## Code Quality
- **Readability:** Good. The recursive logic is clear.
- **Structure:** Good. Helper function usage is appropriate.
- **Naming:** Good. `build`, `l`, `r`, and `mid` are standard for this algorithm.
- **Concrete Improvements:** 
    - The code must be completely rewritten to address the "Two Sum IV" problem. 
    - To solve "Two Sum IV", the author should implement an in-order traversal to get a sorted list and use a two-pointer approach, or use a `std::unordered_set` during a DFS traversal.

---

# Question Revision
# Revision Report: Two Sum IV - Input is a BST

### Pattern
**BST In-Order Traversal** $\rightarrow$ **Two Pointers**

### Brute Force
Perform a full traversal of the BST to extract all elements into a list, then use a nested loop to check every pair $(i, j)$ to see if they sum up to the target.
- **Time Complexity:** $O(n^2)$
- **Space Complexity:** $O(n)$

### Optimal Approach
1. **Flattening:** Perform an **In-Order Traversal** of the BST to generate a sorted array of all node values.
2. **Searching:** Use the **Two-Pointer technique** on the sorted array:
   - Place `left` at the start and `right` at the end.
   - If `sum == target`, return true.
   - If `sum < target`, increment `left` to increase the sum.
   - If `sum > target`, decrement `right` to decrease the sum.

**Complexity:**
- **Time Complexity:** $O(n)$ (Traversing the tree takes $O(n)$, and the two-pointer search takes $O(n)$).
- **Space Complexity:** $O(n)$ to store the flattened array.

### The 'Aha' Moment
The combination of "BST" and "Two Sum" implies utilizing the BST's property where an in-order traversal yields a sorted sequence, unlocking the $O(n)$ two-pointer strategy.

### Summary
Convert the BST to a sorted array via in-order traversal and apply the classic two-pointer approach to find the target sum.

---