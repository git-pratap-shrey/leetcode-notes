---
title: "All Elements in Two Binary Search Trees"
slug: all-elements-in-two-binary-search-trees
date: "2026-04-09"

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
    void solve(TreeNode* root, vector<int>& arr1){
        if (!root) return ;
        solve(root->left,arr1);
        arr1.push_back(root->val);
        solve(root->right,arr1);
    }
    void merge(vector<int> arr1,vector<int> arr2, vector<int>& result){
        int i=0;
        int j=0;
        while(i < arr1.size() && j<arr2.size()){
            if (arr1[i]<arr2[j]){
                result.push_back(arr1[i]);
                i++;
            }
            else {
                result.push_back(arr2[j]);
                j++;
            }
        }
        while(i<arr1.size()){
            result.push_back(arr1[i]);
            i++;
        }
        while(j<arr2.size()){
            result.push_back(arr2[j]);
            j++;
        }

    }
    vector<int> getAllElements(TreeNode* root1, TreeNode* root2) {
        vector<int> list1;
        vector<int> list2;

        solve(root1,list1);
        solve(root2,list2);

        vector<int> result;

        merge(list1,list2,result);
        return result;
    }
};
~~~

# Submission Review
## Approach
*   **Technique:** In-order traversal to extract elements into sorted arrays, followed by a two-pointer merge algorithm.
*   **Optimality:** Optimal in terms of time complexity ($O(N+M)$), which is the theoretical lower bound since all nodes must be visited.

## Complexity
*   **Time Complexity:** $O(N + M)$, where $N$ and $M$ are the number of nodes in the two trees.
*   **Space Complexity:** $O(N + M)$ to store the extracted elements, plus $O(H_1 + H_2)$ for the recursion stack (where $H$ is the tree height).

## Efficiency Feedback
*   **Bottleneck:** The `merge` function accepts `vector<int>` by value. This causes unnecessary copies of the entire arrays, leading to increased memory usage and overhead.
*   **Optimization:** Pass the vectors by constant reference (`const vector<int>&`) to the `merge` function to avoid deep copying.

## Code Quality
*   **Readability:** Good. The logic is standard and easy to follow.
*   **Structure:** Moderate. The `solve` function is essentially an `inorder` traversal; naming it `inorder` would be more descriptive.
*   **Naming:** Moderate. `solve` is generic; `inorder` or `traverse` would clearly communicate the function's purpose.
*   **Concrete Improvements:**
    *   Change `merge(vector<int> arr1, vector<int> arr2, ...)` to `merge(const vector<int>& arr1, const vector<int>& arr2, ...)`.
    *   Pre-allocate memory for the `result` vector using `result.reserve(list1.size() + list2.size())` to avoid multiple reallocations during `push_back`.
    *   Add the `const` qualifier to `root` pointers in `solve` since the trees are not modified.

---
---


# Question Revision
### Revision Report: All Elements in Two Binary Search Trees

**Pattern:** Merge Sort (Two Pointers)

**Brute Force:**
Traverse both trees independently to collect all nodes into a list ($O(n+m)$ space), append them to a single array, and sort the combined array.
*   **Time:** $O((n+m) \log(n+m))$
*   **Space:** $O(n+m)$

**Optimal Approach:**
Perform an in-order traversal on both BSTs to generate two sorted arrays/iterators. Use a two-pointer merge strategy (similar to the merge step in Merge Sort) to combine the elements into a final sorted list.
*   **Time:** $O(n+m)$ where $n$ and $m$ are the number of nodes in each tree.
*   **Space:** $O(n+m)$ for the output; $O(h_1 + h_2)$ stack space for traversal.

**The 'Aha' Moment:**
Because an in-order traversal of a BST is inherently sorted, the problem reduces to merging two pre-sorted lists.

**Summary:**
Treat in-order traversals as sorted streams and apply the merge-step from Merge Sort to combine them efficiently.

---
