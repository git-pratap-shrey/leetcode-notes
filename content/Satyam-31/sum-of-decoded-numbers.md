---
title: "Sum of Decoded Numbers"
slug: sum-of-decoded-numbers
date: "2026-09-02"
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
    bool hasPathSum(TreeNode* root, int targetSum) {
        if (root == nullptr) return false;

        
        if (root->left == nullptr && root->right == nullptr) {
            return root->val == targetSum;
        }

        int remaining = targetSum - root->val;

        return hasPathSum(root->left, remaining) ||
               hasPathSum(root->right, remaining);
    }
};
~~~

# Submission Review
## Approach
*   **Technique:** Depth-First Search (DFS) / Recursion.
*   **Optimality:** Optimal. It visits each node exactly once to determine if a path exists from the root to a leaf that sums to the target.

## Complexity
*   **Time Complexity:** $O(N)$, where $N$ is the number of nodes in the tree, as every node is visited at most once.
*   **Space Complexity:** $O(H)$, where $H$ is the height of the tree, representing the recursion stack depth. In the worst case (skewed tree), this is $O(N)$.

## Efficiency Feedback
*   **Performance:** The runtime is as efficient as possible for this problem, as any solution must traverse the tree to verify path sums.
*   **Memory:** The use of the call stack is standard for tree traversals. The implementation is memory-efficient as it does not allocate auxiliary data structures (like vectors or queues).

## Code Quality
*   **Readability:** Good. The logic is clean, and the base cases are handled correctly.
*   **Structure:** Good. The recursive structure is idiomatic and follows standard binary tree traversal patterns.
*   **Naming:** Good. The variable names `targetSum` and `remaining` clearly convey the state of the computation.
*   **Concrete Improvements:** 
    *   The code is already quite idiomatic. One minor aesthetic point: the empty line after the first null check is unnecessary. 
    *   In C++17 or later, you could potentially use `if` with an initializer if there were more complex state to track, but for this problem, the current approach is perfectly acceptable.

---

# Question Revision
### Revision Report: Sum of Decoded Numbers

**Pattern:** Two Pointers / String Manipulation

**Brute Force:**
Recursively decode the entire string by expanding every segment (e.g., "a2[b]" becomes "abb") into a full string in memory and then calculating the sum or index.
*   **Time Complexity:** $O(N \cdot K)$ where $K$ is the decoded length (exponential in cases of nested brackets).
*   **Space Complexity:** $O(N \cdot K)$ to store the expanded string.

**Optimal Approach:**
Instead of decoding, calculate the total length of the string mathematically by iterating through the input. To find the character at a specific index, use modular arithmetic to backtrack through the nested structure without ever constructing the actual string.
*   **Time Complexity:** $O(n)$ where $n$ is the length of the encoded string.
*   **Space Complexity:** $O(1)$ (or $O(d)$ stack space for recursion depth $d$).

**The 'Aha' Moment:**
When the constraints indicate a decoded string length far too large to store in memory (e.g., $10^{10}$), it is a definitive signal to use mathematical index tracking rather than string construction.

**Summary:**
Don't build the string if the constraints imply a massive length; calculate indices mathematically by traversing backwards through the structure.

---