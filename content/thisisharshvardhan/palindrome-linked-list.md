---
title: "Palindrome Linked List"
slug: palindrome-linked-list
date: "2026-10-03"
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

    TreeNode* mergeTrees(TreeNode* root1, TreeNode* root2)
    {
        
        if(root1 == NULL && root2 == NULL)
            return NULL;
        if(root1 == NULL)
            return root2;
        if(root2 == NULL)
            return root1;
        root1->val = root1->val + root2->val;
        root1->left = mergeTrees(root1->left, root2->left);
        root1->right = mergeTrees(root1->right, root2->right);

        return root1;
    }
};
~~~

# Submission Review
## Approach
- **Technique**: Recursive Depth-First Search (DFS).
- **Correctness**: **Incorrect**. The provided code solves the "Merge Two Binary Trees" problem, whereas the problem statement asks for "Palindrome Linked List". The logic is entirely irrelevant to the requested problem.

## Complexity
*Assuming the goal was to merge two binary trees:*
- **Time Complexity**: $O(\min(N, M))$, where $N$ and $M$ are the number of nodes in the two trees.
- **Space Complexity**: $O(\min(H_1, H_2))$, where $H$ is the height of the trees, due to the recursion stack.

## Efficiency Feedback
- The logic for merging trees is efficient for that specific task. However, because it addresses the wrong problem, the runtime/memory efficiency relative to "Palindrome Linked List" is not applicable.

## Code Quality
- **Readability**: Poor. The code includes a `TreeNode` definition and logic for tree merging, which contradicts the problem title "Palindrome Linked List".
- **Structure**: Moderate. The recursion is implemented cleanly for a tree merge, but it is misplaced.
- **Naming**: Good. Variable names (`root1`, `root2`) are appropriate for the logic implemented.
- **Concrete Improvements**: 
    1. **Complete rewrite required**: Replace the binary tree logic with linked list logic (e.g., using a fast/slow pointer to find the middle, reversing the second half, and comparing).
    2. **Remove irrelevant boilerplate**: Remove the `TreeNode` struct and `mergeTrees` function.

---

# Question Revision
# Revision Report: Palindrome Linked List

- **Pattern**: Two Pointers (Fast & Slow) + Linked List Reversal.
- **Brute Force**: Traverse the linked list and store all values in an array. Use two pointers (start and end) to check if the array is a palindrome.
- **Optimal Approach**: 
    1. **Find Middle**: Use a slow and fast pointer to locate the midpoint of the list.
    2. **Reverse Second Half**: Reverse the second half of the list in-place.
    3. **Compare**: Use two pointers to compare the first half and the reversed second half.
    4. **Restore (Optional)**: Reverse the second half back to maintain original list structure.
    - **Time Complexity**: $O(n)$ — One pass to find middle, one to reverse, one to compare.
    - **Space Complexity**: $O(1)$ — No extra data structures used.
- **The 'Aha' Moment**: Since linked lists don't support backward traversal, the need to compare the end with the start implies I must reverse the second half to face the first half.
- **Summary**: Find the middle, reverse the second half, and compare it to the first half to check for symmetry.

---