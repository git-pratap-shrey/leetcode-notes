---
title: "Kth Smallest Element in a BST"
slug: kth-smallest-element-in-a-bst
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
    bool check(TreeNode* node, long long low, long long high) {
        if (node == nullptr) return true;

        if (node->val <= low || node->val >= high) return false;

        return check(node->left, low, node->val) &&
               check(node->right, node->val, high);
    }

    bool isValidBST(TreeNode* root) {
        return check(root, LLONG_MIN, LLONG_MAX);
    }
};
~~~

# Submission Review
## Approach
- **Technique:** Recursive range-based validation.
- **Correctness:** The code is **completely incorrect** for the stated problem. The problem asks for the **Kth Smallest Element in a BST**, but the provided code implements a **Validate Binary Search Tree** algorithm. It does not take an integer `k` as input nor does it return the kth element.

## Complexity
- **Time Complexity:** $O(N)$ where $N$ is the number of nodes in the tree, as it visits each node once.
- **Space Complexity:** $O(H)$ where $H$ is the height of the tree, due to the recursion stack.

## Efficiency Feedback
- While the logic for validating a BST is efficient, it is irrelevant to the target problem. To solve "Kth Smallest Element," an in-order traversal (iterative or recursive) should be used to stop at the $k$-th visited node.

## Code Quality
- **Readability:** Good. The logic for the `isValidBST` function is clear and follows standard conventions.
- **Structure:** Good for a validation utility, but fundamentally mismatched with the problem requirement.
- **Naming:** Good. Function and variable names accurately describe their roles in a BST validation context.
- **Concrete Improvements:**
    - **Critical:** Rewrite the entire class. Replace `isValidBST` and `check` with an in-order traversal method (e.g., `kthSmallest(TreeNode* root, int k)`).
    - **Logic Change:** Use a counter to track the number of nodes visited during in-order traversal and return the value when the counter equals $k$.

---

# Question Revision
# Revision Report: Kth Smallest Element in a BST

- **Pattern:** Tree Traversal (In-order)
- **Brute Force:** Traverse the entire tree (any method), store all elements in an array, sort the array, and return the element at index `k-1`.
- **Optimal Approach:** Perform an **In-order Traversal** (Left $\rightarrow$ Root $\rightarrow$ Right). Since an in-order traversal of a BST visits nodes in ascending order, simply keep a counter and stop the traversal as soon as the $k$-th node is visited.
    - **Time Complexity:** $O(H + k)$, where $H$ is the tree height.
    - **Space Complexity:** $O(H)$ to maintain the recursion stack.
- **The 'Aha' Moment:** The phrase "BST" combined with "Kth smallest" is a direct trigger for **In-order Traversal**, as it naturally yields sorted output.
- **Summary:** Use in-order traversal to treat a BST as a sorted list and stop at the $k$-th element.

---