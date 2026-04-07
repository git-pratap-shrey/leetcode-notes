---
title: "Deepest Leaves Sum"
slug: deepest-leaves-sum
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
    void solve(TreeNode* root,int len, int& Maxlen, int& sum){
        if (root==NULL) return;
        if (root->left==NULL && root->right==NULL){
            if (len>Maxlen){
                Maxlen=len;
                sum=root->val;
            }
            else if (len==Maxlen){
                sum+=root->val;
            }
            return;
        }
        solve(root->left,len+1,Maxlen,sum);
        solve(root->right,len+1,Maxlen,sum);

    }
    int deepestLeavesSum(TreeNode* root) {
        int len=0;
        int Maxlen=0;
        int sum=0;
        solve(root,len, Maxlen, sum);
        return sum;
    }
};
~~~

# Submission Review
## Approach
*   **Technique:** Depth-First Search (DFS) traversal.
*   **Optimality:** Optimal. It visits each node exactly once to track the maximum depth and accumulate the sum of values at that depth.

## Complexity
*   **Time Complexity:** $O(N)$, where $N$ is the number of nodes in the binary tree, as every node is visited once.
*   **Space Complexity:** $O(H)$, where $H$ is the height of the tree, representing the recursion stack depth. In the worst case (skewed tree), this is $O(N)$.

## Efficiency Feedback
*   The approach is highly efficient for this problem.
*   Passing `Maxlen` and `sum` by reference avoids global variables or redundant object state, which is good practice.

## Code Quality
*   **Readability:** Good. The logic is straightforward and easy to follow.
*   **Structure:** Good. Using a helper function `solve` to carry state is a standard pattern for recursive tree problems.
*   **Naming:** Moderate. `Maxlen` and `len` are slightly inconsistent with standard camelCase (should be `maxLen` and `depth`). `solve` is generic; `traverse` or `dfs` would be more descriptive.
*   **Improvements:** 
    *   **Style:** Change `NULL` to `nullptr` to adhere to modern C++ standards.
    *   **Robustness:** Add `if (!root) return 0;` at the beginning of `deepestLeavesSum` to handle empty tree cases explicitly (though the current code handles it, it makes the intent clearer).
    *   **Parameter Cleanup:** `len` is initialized to 0, which is correct for counting levels starting from the root at level 0. However, `len` could be passed by value, and `Maxlen`/`sum` by reference, which is what you already did—this is correct.

---
---


# Question Revision
### Revision Report: Deepest Leaves Sum

**Pattern:** Breadth-First Search (BFS) / Level-Order Traversal

**Brute Force:** 
Perform a Depth-First Search (DFS) to store all node depths and values in a hash map, identify the maximum depth, and sum the values associated with that depth.
*   **Time:** $O(n)$
*   **Space:** $O(n)$

**Optimal Approach:**
Perform a level-order traversal (BFS) using a queue. At each level, reset a sum variable to $0$ and add the values of all nodes currently in the queue. After processing all levels, the final value of the sum variable will represent the sum of the deepest leaves.
*   **Time:** $O(n)$ – Each node is visited exactly once.
*   **Space:** $O(w)$ – Where $w$ is the maximum width of the tree (for the queue).

**The 'Aha' Moment:**
When a problem asks for information specifically at the "bottom" or "deepest" layer, a level-order traversal (BFS) naturally allows you to overwrite your results layer by layer until you reach the very end.

**Summary:**
When you need the result from the "last level" of a tree, perform a BFS and keep track of the running sum of each level, as the final level's total will be what remains.

---
