---
title: "Binary Tree Right Side View"
slug: binary-tree-right-side-view
date: "2026-04-06"

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
    void solve (TreeNode* root,vector<int>& ans, int level) {
        if (root==NULL) return ;

        if (level==ans.size()) ans.push_back(root->val);
        solve(root->right,ans,level+1);
        solve(root->left,ans,level+1);
    }
    vector<int> rightSideView(TreeNode* root) {
        vector<int> ans;
        int level=0;
        solve(root,ans,level);
        return ans;
    }
};
~~~

# Submission Review
## Approach
*   **Technique:** Depth-First Search (DFS) with level tracking.
*   **Optimality:** Optimal. By prioritizing the right child over the left child in recursion, the first node encountered at any new depth is guaranteed to be the rightmost node.

## Complexity
*   **Time Complexity:** $O(N)$, where $N$ is the number of nodes in the tree. Each node is visited exactly once.
*   **Space Complexity:** $O(H)$, where $H$ is the height of the tree, representing the recursion stack depth. In the worst case (skewed tree), this is $O(N)$.

## Efficiency Feedback
*   The solution is highly efficient. It avoids the overhead of a queue required in Breadth-First Search (BFS) while achieving the same result.
*   The logic `level == ans.size()` is a clever, standard trick to identify the first node visited at a new depth level without needing a separate data structure to track visited levels.

## Code Quality
*   **Readability:** Good. The logic is clean and the intent is clear.
*   **Structure:** Good. The helper function `solve` effectively encapsulates the recursive logic.
*   **Naming:** Moderate. `solve` is generic; `dfs` or `traverse` would be more descriptive.
*   **Improvements:**
    *   **Const correctness:** The helper function `solve` should take `TreeNode*` as `const TreeNode*` to indicate that the tree structure is not being modified.
    *   **Memory optimization:** Passing `ans` by reference is correct and well-implemented. 
    *   **Parameter naming:** `level` could be passed as a `const int` to emphasize it is a read-only depth tracker.

---
---


# Question Revision
### Revision Report: Binary Tree Right Side View

**Pattern:** Breadth-First Search (BFS) / Level-Order Traversal

**Brute Force:** Perform a full level-order traversal using a queue, store every node in a list, and extract the last element of each level array. 
*   **Time:** $O(n)$
*   **Space:** $O(n)$ (storing all nodes).

**Optimal Approach:** Perform a level-order traversal and only record the value of the **last node** encountered at each depth level. Alternatively, use a Depth-First Search (DFS) where you visit the right child before the left child, only adding a node to the result list if its depth matches the current result list size.
*   **Time:** $O(n)$ (each node visited once).
*   **Space:** $O(d)$ where $d$ is tree diameter/height (stack space or queue width).

**The 'Aha' Moment:** The requirement to see only the "rightmost" node per level implies that we only care about the state of the tree at each distinct depth, which is the signature of a level-by-level traversal.

**Summary:** When asked for a "view" of a tree, prioritize processing each level entirely or tracking depth to capture only the edge-most node of that layer.

---
