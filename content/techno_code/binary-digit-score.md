---
title: "Binary Digit Score"
slug: binary-digit-score
date: "2026-10-25"
---

# My Solution
~~~cpp
/**
 * Definition for a binary tree node.
 * struct TreeNode {
 *     int val;
 *     TreeNode *left;
 *     TreeNode *right;
 *     TreeNode(int x) : val(x), left(NULL), right(NULL) {}
 * };
 */

class Solution {
public:
    TreeNode* lowestCommonAncestor(TreeNode* root, TreeNode* p, TreeNode* q) {
        TreeNode* curr =root;
        while(curr){
            if(curr->val > p->val && curr->val > q->val){
                curr=curr->left;
            }
            else if(curr->val < p->val && curr->val < q->val){
                curr=curr->right;
            }
            else{
                return curr;
            }
        }
        return nullptr;
    }
};
~~~

# Submission Review
## Approach
- **Technique**: Iterative traversal of a Binary Search Tree (BST) using the property that the LCA is the first node encountered whose value lies between (or equals) the values of $p$ and $q$.
- **Optimality**: Optimal. It leverages the BST property to avoid visiting unnecessary subtrees.

## Complexity
- **Time Complexity**: $O(H)$, where $H$ is the height of the tree. In the worst case (skewed tree), this is $O(N)$.
- **Space Complexity**: $O(1)$. The solution uses a single pointer for traversal, avoiding the overhead of recursion.

## Efficiency Feedback
- The runtime and memory usage are minimal.
- By using an iterative approach instead of recursion, the solution avoids potential stack overflow for very deep trees and reduces constant-time overhead.

## Code Quality
- **Readability**: Good. The logic is straightforward and easy to follow.
- **Structure**: Good. The loop control and conditional branches correctly handle all three possible BST LCA scenarios.
- **Naming**: Moderate. `curr` is acceptable, though `node` is more conventional. The function name matches the standard LCA problem, but it contradicts the "Binary Digit Score" problem title mentioned in the prompt (the code solves Lowest Common Ancestor in a BST).
- **Improvements**: 
    - Add `const` qualifiers to `TreeNode* p` and `TreeNode* q` as they are not modified.
    - Ensure consistency between the problem title provided ("Binary Digit Score") and the actual implementation (LCA), as they are unrelated.

---

# Question Revision
# Revision Report: Binary Digit Score

- **Pattern:** String Parsing / Simulation
- **Brute Force:** Iterate through the string, maintain a counter for zeros, and manually build the binary string for ones. Convert the resulting binary string to an integer using a built-in library function.
- **Optimal Approach:** 
    - Maintain two counters: `zeros` and `ones`.
    - Traverse the string once to count occurrences of each digit.
    - Construct the final binary representation by concatenating `ones` copies of '1' followed by `zeros` copies of '0'.
    - Convert this binary string to a decimal integer.
    - **Time Complexity:** $O(n)$ where $n$ is the length of the string.
    - **Space Complexity:** $O(n)$ to store the intermediate binary string.
- **The 'Aha' Moment:** The requirement to group all '1's before all '0's indicates that the actual positions in the input don't matter—only the total counts do.
- **Summary:** Count 0s and 1s, then shift the 1s to the left to form a single binary number.

---