---
title: "Convert Sorted List to Binary Search Tree"
slug: convert-sorted-list-to-binary-search-tree
date: "2026-04-08"

---
---

# My Solution
~~~cpp
/**
 * Definition for singly-linked list.
 * struct ListNode {
 *     int val;
 *     ListNode *next;
 *     ListNode() : val(0), next(nullptr) {}
 *     ListNode(int x) : val(x), next(nullptr) {}
 *     ListNode(int x, ListNode *next) : val(x), next(next) {}
 * };
 */
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
    int getlen(ListNode* head){
        ListNode* temp=head;
        int count=0;
        while(temp){
            count++;
            temp=temp->next;
        }
        return count;
    }
    TreeNode* solve(ListNode* &head,int n){
        if (!head) return NULL;
        if (n<=0) return NULL;

        TreeNode* left=solve(head,n/2);

        int ele=head->val;
        TreeNode* root= new TreeNode(ele);

        root->left=left;
        head=head->next;

        TreeNode* right=solve(head,n-n/2-1);
        root->right=right;

        return root;
    }
    TreeNode* sortedListToBST(ListNode* head) {
        int n=getlen(head);
        TreeNode* root=solve(head,n);
        return root;
    }
};
~~~

# Submission Review
## Approach
*   **Technique:** Simulation of an In-order traversal to build the Binary Search Tree. It uses a bottom-up recursive strategy by passing the `head` pointer by reference to ensure the linked list is traversed linearly as the tree is constructed.
*   **Optimality:** Optimal. It achieves the construction in $O(N)$ time by utilizing the fact that an in-order traversal of a BST corresponds to the sorted sequence of the linked list.

## Complexity
*   **Time Complexity:** $O(N)$, where $N$ is the number of nodes in the list. The list is traversed once to calculate the length and once to build the tree.
*   **Space Complexity:** $O(\log N)$ for the recursion stack, assuming a balanced tree construction.

## Efficiency Feedback
*   **Runtime:** The implementation is highly efficient. By passing `ListNode* &head` by reference, the code avoids the $O(N)$ overhead of finding the middle element repeatedly (which would lead to an $O(N \log N)$ approach).
*   **Memory:** The use of recursion is memory-efficient for this problem, as the depth of the stack is limited to the height of the balanced BST ($\log N$).

## Code Quality
*   **Readability:** Good. The logic is concise and follows a standard pattern for linked-list-to-BST conversion.
*   **Structure:** Good. The separation of `getlen` and the recursive `solve` function is logical.
*   **Naming:** Moderate. While `solve` and `n` are standard in competitive programming, more descriptive names like `buildBST` and `listLength` would improve professional code quality.
*   **Concrete Improvements:**
    *   The `n <= 0` check in `solve` is sufficient, but the `if (!head)` check is technically redundant given the `n` constraints.
    *   The variable `ele` is unnecessary; `new TreeNode(head->val)` is sufficient.
    *   Add `const` to the `getlen` function signature: `int getlen(ListNode* head) const`.

---
---


# Question Revision
### Revision Report: Convert Sorted List to Binary Search Tree

**Pattern:** Divide and Conquer / Linked List manipulation (Fast & Slow Pointers)

**Brute Force:**
1. Traverse the linked list to store all values in an array ($O(n)$ time).
2. Recursively pick the middle element of the array to create the root, then repeat for left and right subarrays ($O(n)$ time).
3. **Complexity:** Time $O(n)$, Space $O(n)$.

**Optimal Approach:**
1. Find the middle of the linked list using the **Fast & Slow Pointer** technique to serve as the root.
2. Recursively convert the left half of the list (before the middle) into the left subtree and the right half into the right subtree.
3. To achieve $O(n)$ time, use a global pointer to track the current list node while performing an **in-order traversal**, effectively building the tree as you traverse the list.
4. **Complexity:** Time $O(n)$, Space $O(\log n)$ (stack depth).

**The 'Aha' Moment:**
The requirement to convert a sorted structure into a height-balanced BST is a direct signal to use the middle element as the root, mirroring the binary search process on an array.

**Summary:** 
Whenever you need to build a balanced tree from a sorted sequence, recursively split the range in half to ensure the middle element always becomes the root.

---
