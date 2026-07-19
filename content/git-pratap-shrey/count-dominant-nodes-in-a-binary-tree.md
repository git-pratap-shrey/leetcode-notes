---
title: "Count Dominant Nodes in a Binary Tree"
slug: count-dominant-nodes-in-a-binary-tree
date: "2026-07-19"
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
 *     TreeNode(int x, TreeNode *left, TreeNode *right) : val(x), left(left),
 * right(right) {}
 * };
 */
class Solution {
public:
    pair<int, int> fn(TreeNode* root) {
        int left_count = 0; 
        int right_count = 0;
        int maximum = 0;
        pair<int, int> temp;
        if (root->left) {

            temp = fn(root->left);
            left_count = temp.first;

            maximum = max(maximum, temp.second);
        }
        if (root->right) {
            temp = fn(root->right);
            right_count = temp.first;

            maximum = max(maximum, temp.second);
        }

        if (!root->left && !root->right) {
            return {1, root->val};
        }

        if (maximum <= root->val) {
            return { left_count + right_count + 1, root->val };
        }

        return {left_count + right_count, maximum};
    }

    int countDominantNodes(TreeNode* root) { return fn(root).first; }
};
~~~

# Submission Review
## Approach
*   **Technique:** Post-order tree traversal (recursive DFS).
*   **Optimal:** Yes. It processes each node exactly once, which is the necessary requirement for tree traversal problems.

## Complexity
*   **Time Complexity:** $O(N)$, where $N$ is the number of nodes in the binary tree, as each node is visited once.
*   **Space Complexity:** $O(H)$, where $H$ is the height of the tree, due to the recursion stack.

## Efficiency Feedback
*   The logic is efficient. It correctly propagates the count of dominant nodes and the maximum value encountered in the subtree up to the parent.
*   **Memory:** The use of `pair<int, int>` is lightweight.
*   **Safety:** The code lacks a null check for `root` at the entry point of `fn`. If the initial `root` passed to `countDominantNodes` is `nullptr`, the `root->left` access will cause a segmentation fault.

## Code Quality
*   **Readability:** Moderate. The logic is clear, but the variable naming is slightly confusing.
*   **Structure:** Good. The helper function `fn` encapsulates the state tracking effectively.
*   **Naming:** Poor. 
    *   `fn` is a generic name; `countAndMax` or `getDominantInfo` would be more descriptive.
    *   `maximum` in the context of the return pair actually represents the "maximum value in the current subtree," but the variable itself is initialized to 0, which is incorrect if the tree contains negative integers.
*   **Concrete Improvements:**
    1.  Add `if (!root) return {0, INT_MIN};` at the start of `fn`.
    2.  Initialize `maximum` to `root->val` instead of `0` to handle negative values correctly.
    3.  Avoid re-declaring `pair<int, int> temp` repeatedly inside the `if` blocks; initialize it only when needed or use structured bindings (C++17).

### Suggested Refinement snippet:
```cpp
pair<int, int> fn(TreeNode* root) {
    if (!root) return {0, INT_MIN};
    if (!root->left && !root->right) return {1, root->val};

    auto left = fn(root->left);
    auto right = fn(root->right);

    int max_val = max({root->val, left.second, right.second});
    int count = left.first + right.first + (root->val >= max(left.second, right.second) ? 1 : 0);
    
    return {count, max_val};
}
```

---

# Question Revision
### Revision Report: Count Dominant Nodes

**Pattern:** Post-order Traversal (Bottom-up DFS)

**Brute Force:**
For every node, traverse its entire subtree to check if it satisfies the dominance condition (e.g., node value $\ge$ all values in its subtree). 
*   **Time:** $O(n^2)$
*   **Space:** $O(h)$ (recursion stack)

**Optimal Approach:**
Perform a post-order traversal where each node returns metadata about its subtree (e.g., the `maximum` value found in that subtree). At each step, compare the current node's value against the returned maximums from children to determine if the node is dominant. 
*   **Time:** $O(n)$ (each node visited once)
*   **Space:** $O(h)$ (where $h$ is tree height)

**The 'Aha' Moment:**
When a problem requires subtree-wide properties to validate a condition at the root, returning aggregate statistics (like `max` or `min`) during a post-order traversal allows you to resolve the condition in a single pass.

**Summary:** 
If checking a condition requires knowledge of the entire subtree, pass the necessary aggregate metrics up the recursion stack rather than re-traversing downward.

---