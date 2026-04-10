---
title: "Construct Binary Tree from Inorder and Postorder Traversal"
slug: construct-binary-tree-from-inorder-and-postorder-traversal
date: "2026-04-10"

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

    int get(int ele, vector<int> arr){
        for (int i=0;i<arr.size();i++){
            if (ele==arr[i]){
                return i;
            }
        }
        return -1;
    }

    TreeNode* solve(vector<int> inorder,vector<int> postorder, int & postInd, int inStart, int inEnd){
        if (postInd<0){
            return NULL;
        }
        if (inStart>inEnd){
            return NULL;
        }

        int ele=postorder[postInd];
        postInd--;
        int inInd = get(ele,inorder);

        TreeNode* root = new TreeNode(ele);
        root->right= solve(inorder,postorder,postInd,inInd+1,inEnd);
        root->left= solve(inorder,postorder,postInd,inStart,inInd-1);
        
        return root;
    }
    TreeNode* buildTree(vector<int>& inorder, vector<int>& postorder) {
        int postInd=postorder.size()-1;
        TreeNode* root= solve(inorder,postorder,postInd,0,inorder.size()-1);
        return root;
    }
};
~~~

# Submission Review
## Approach
*   **Technique:** Recursive divide-and-conquer. The algorithm selects the last element of the current postorder segment as the root and partitions the inorder array to define left and right subtrees.
*   **Optimality:** Suboptimal. While the tree construction logic is correct, the implementation of finding the root index in the inorder array is inefficient.

## Complexity
*   **Time Complexity:** $O(N^2)$, where $N$ is the number of nodes. The `get()` function performs a linear search inside the recursion.
*   **Space Complexity:** $O(N)$ due to the recursion stack and the tree storage.

## Efficiency Feedback
*   **Bottleneck:** The linear search (`get` function) inside the recursive function makes the complexity quadratic.
*   **Optimization:** Use a `std::unordered_map<int, int>` to store the indices of the inorder array values. This reduces the lookup time from $O(N)$ to $O(1)$ on average, bringing the total time complexity down to $O(N)$.
*   **Pass-by-value:** The `solve` function passes `inorder` and `postorder` vectors by value. This causes $O(N^2)$ extra space and time overhead due to vector copying. Pass by reference (`const vector<int>&`) to avoid this.

## Code Quality
*   **Readability:** Moderate. The logic is standard, but the inefficient search function distracts from the primary algorithm.
*   **Structure:** Good. The helper function `solve` is a standard way to handle recursive tree construction.
*   **Naming:** Moderate. `get`, `ele`, `inInd` are somewhat generic; `findInorderIndex` or `rootVal` would be more descriptive.
*   **Concrete Improvements:**
    *   Pre-process the `inorder` array into a hash map: `unordered_map<int, int> inorderMap; for(int i=0; i<inorder.size(); ++i) inorderMap[inorder[i]] = i;`.
    *   Change the `solve` signature to accept `const vector<int>&` and the reference to the hash map.
    *   Remove the `get` function entirely.

---
---


# Question Revision
### Revision Report: Construct Binary Tree from Inorder and Postorder Traversal

**Pattern:** Divide and Conquer / Recursion

**Brute Force:**
Search the root (last element of the postorder array) in the inorder array. Use its index to slice the inorder array into left/right subtrees, then recursively slice the postorder array by corresponding sizes. 
*Complexity:* $O(n^2)$ due to repeated array slicing and searching.

**Optimal Approach:**
1. Use a **HashMap** to store the indices of the inorder array for $O(1)$ lookup.
2. Use a pointer (or global index) to track the current root starting from the end of the postorder array.
3. Build the tree recursively: Process the right subtree before the left subtree (because postorder is `Left -> Right -> Root`).
*Complexity:* $O(n)$ time (each node visited once), $O(n)$ space (hash map and recursion stack).

**The 'Aha' Moment:**
The last element of a postorder traversal is always the root, which acts as the perfect anchor to partition the inorder array into distinct left and right child subtrees.

**Summary:** 
Always use the last element of postorder as your current root and the inorder index map to partition subarrays in constant time.

---
