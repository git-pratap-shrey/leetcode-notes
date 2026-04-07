---
title: "Two Sum IV - Input is a BST"
slug: two-sum-iv-input-is-a-bst
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
    void solve(TreeNode* root, vector<int>& inorder){
        if (!root) return;
        solve(root->left,inorder);
        inorder.push_back(root->val);
        solve(root->right,inorder);
    }
    bool checksum(vector<int> arr, int target){
        int n=arr.size();
        int s=0;
        int e=n-1;
        while(s<e){
            int sum=arr[s]+arr[e];
            if (sum==target) return true;
            if (sum>target) e--;
            if (sum<target) s++;

        }
        return false;
    }
    bool findTarget(TreeNode* root, int k) {
        vector<int> inorder;
        solve(root,inorder);
        bool ans=checksum(inorder,k);
        return ans;
    }
};
~~~

# Submission Review
## Approach
*   **Technique:** In-order traversal to flatten the BST into a sorted array, followed by the two-pointer technique.
*   **Optimality:** Optimal in terms of asymptotic time complexity, though space complexity could be improved from $O(N)$ to $O(H)$ using an iterator-based approach (BST iterator).

## Complexity
*   **Time Complexity:** $O(N)$, where $N$ is the number of nodes. We traverse all nodes once and then perform a linear scan of the sorted array.
*   **Space Complexity:** $O(N)$ to store the flattened vector of node values.

## Efficiency Feedback
*   **Bottleneck:** The solution allocates $O(N)$ additional space regardless of the target value.
*   **Optimization:** Using an iterative approach with two stacks (one for forward traversal, one for backward traversal) would reduce space complexity to $O(H)$, where $H$ is the height of the tree. This would also allow for early termination without traversing the entire tree if a match is found.

## Code Quality
*   **Readability:** Good. The logic is straightforward and easy to follow.
*   **Structure:** Moderate. The `solve` function is a helper; it could be made `private` or implemented as a lambda inside `findTarget`.
*   **Naming:** Moderate. `solve` and `checksum` are somewhat generic; `inorderTraversal` and `hasTwoSum` would be more descriptive.
*   **Concrete Improvements:** 
    *   Pass `vector<int>&` by reference in `checksum` (currently passed by value, which triggers an unnecessary $O(N)$ copy).
    *   Change `checksum` to `checkTwoSum` and ensure the parameter is `const vector<int>& arr`.
    *   The `if` checks in the `while` loop of `checksum` should use `else if` for clarity and minor performance gain, as they are mutually exclusive.

---
---


# Question Revision
### Revision Report: Two Sum IV - Input is a BST

**Pattern:** In-order Traversal + Two Pointers (or Hash Set)

**Brute Force:**
Perform a level-order or recursive traversal to store all nodes in an array, then use a nested loop to check every pair for the target sum.
*   **Time Complexity:** $O(n^2)$
*   **Space Complexity:** $O(n)$

**Optimal Approach:**
Perform an **in-order traversal** to collect node values into a sorted list ($O(n)$ time), then use the **two-pointer technique** starting from both ends of the list to find the target sum ($O(n)$ time). Alternatively, use a **Hash Set** during a single traversal to check for the complement ($target - current$) on the fly.
*   **Time Complexity:** $O(n)$
*   **Space Complexity:** $O(n)$ (for the list/set or recursion stack)

**The 'Aha' Moment:**
The sorted nature of a BST is implicitly leveraged by an in-order traversal, which transforms a tree search problem into a classic "Two Sum in a Sorted Array" problem.

**Summary:**
Whenever you see a BST and a pair-sum requirement, use in-order traversal to treat the tree as a sorted array and apply the two-pointer pattern.

---
