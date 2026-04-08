---
title: "Convert Sorted Array to Binary Search Tree"
slug: convert-sorted-array-to-binary-search-tree
date: "2026-04-08"

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

    TreeNode* solve(vector<int> arr, int s, int e){
        if (s>e) return NULL;

        int mid=(s+e)/2;
        int ele=arr[mid];

        TreeNode* root = new TreeNode(ele);

        root->left=solve(arr,s,mid-1);
        root->right=solve(arr,mid+1,e);

        return root;
    }
    TreeNode* sortedArrayToBST(vector<int>& nums) {
        int s=0;
        int e=nums.size()-1;
        TreeNode* root= solve(nums,s,e);
        return root;
    }
};
~~~

# Submission Review
## Approach
*   **Technique:** Recursive Divide and Conquer. The array is split at the middle element to ensure height balance, which is the standard optimal approach for this problem.
*   **Optimality:** Optimal in logic, but suboptimal in implementation due to parameter passing.

## Complexity
*   **Time Complexity:** $O(N)$, where $N$ is the number of elements in the array. Each element is visited exactly once to create a node.
*   **Space Complexity:** $O(\log N)$ (call stack depth for a balanced tree), but currently **$O(N \log N)$** due to passing the `vector` by value.

## Efficiency Feedback
*   **Bottleneck:** The `solve` function accepts `vector<int> arr` by value. This causes the entire vector to be copied for every recursive call, resulting in unnecessary memory allocation and $O(N \log N)$ space complexity.
*   **Optimization:** Pass the vector by constant reference (`const vector<int>& arr`) to avoid copying the entire array during recursion.

## Code Quality
*   **Readability:** Good. The logic is straightforward and easy to follow.
*   **Structure:** Moderate. The recursion logic is clean, but the helper function should ideally be private.
*   **Naming:** Moderate. `s` and `e` are acceptable for indices, but `start` and `end` would be more descriptive. `ele` is redundant as it can be passed directly to the constructor.
*   **Improvements:**
    1.  Change function signature: `TreeNode* solve(const vector<int>& arr, int s, int e)`.
    2.  Simplify instantiation: `TreeNode* root = new TreeNode(arr[mid]);`.
    3.  Encapsulation: Move the helper function to `private` scope to keep the class interface clean.

---
---


# Question Revision
### Revision Report: Convert Sorted Array to BST

**Pattern:** Divide and Conquer (Recursive Tree Construction)

**Brute Force:**
Insert elements one by one into a BST. This results in an $O(n^2)$ worst-case time complexity if the array is processed sequentially, as it creates a skewed tree (essentially a linked list).

**Optimal Approach:**
Since the array is sorted, the middle element is the perfect root for a balanced BST. Recursively apply this logic by splitting the array into left and right halves to construct the left and right subtrees.
*   **Time Complexity:** $O(n)$ — Every element is visited exactly once to create a node.
*   **Space Complexity:** $O(\log n)$ — The recursion stack depth corresponds to the height of the balanced BST.

**The 'Aha' Moment:**
Whenever you see a sorted data structure and are asked to build a tree, treat the middle element as the pivot to ensure the resulting tree remains perfectly balanced.

**Summary:** 
Transform sorted ranges into balanced trees by recursively picking the median as the root to guarantee height symmetry.

---
