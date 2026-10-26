---
title: "Binary Tree Level Order Traversal II"
slug: binary-tree-level-order-traversal-ii
date: "2026-10-23"
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
    vector<vector<int>> zigzagLevelOrder(TreeNode* root) {
        vector<vector<int>> ans;
        if (root == nullptr) return ans;

        queue<TreeNode*> q;
        q.push(root);
        bool leftToRight = true;

        while (!q.empty()) {
            int n = q.size();
            vector<int> level(n);

            for (int i = 0; i < n; i++) {
                TreeNode* curr = q.front();
                q.pop();

                int idx = leftToRight ? i : n - 1 - i;
                level[idx] = curr->val;

                if (curr->left)  q.push(curr->left);
                if (curr->right) q.push(curr->right);
            }

            ans.push_back(level);
            leftToRight = !leftToRight;
        }
        return ans;
    }
};
~~~

# Submission Review
## Approach
- **Technique**: Breadth-First Search (BFS) using a queue. It employs a boolean flag (`leftToRight`) to determine the insertion index of nodes within each level's vector.
- **Optimality**: The approach is optimal for the "Zigzag" variant. However, there is a **critical logical mismatch**: the provided code implements **Binary Tree Zigzag Level Order Traversal**, but the problem statement requested **Binary Tree Level Order Traversal II** (which typically requires returning levels from bottom to top).

## Complexity
- **Time Complexity**: $O(N)$, where $N$ is the number of nodes in the tree. Each node is visited once.
- **Space Complexity**: $O(W)$, where $W$ is the maximum width of the tree. This is the space required for the queue and the temporary `level` vector.

## Efficiency Feedback
- **Runtime**: The use of a pre-allocated vector `vector<int> level(n)` and calculating the index `idx` is more efficient than using `std::reverse` on the vector after each level.
- **Memory**: Memory usage is minimal and appropriate for the constraints of a BFS traversal.

## Code Quality
- **Readability**: Good. The logic is straightforward and the intent is clear.
- **Structure**: Good. The loop structure correctly handles level-by-level processing.
- **Naming**: Good. Variables like `leftToRight`, `curr`, and `ans` are intuitive.

**Concrete Improvements:**
1. **Problem Mismatch**: If the goal is "Level Order Traversal II", the `leftToRight` logic should be removed, and the final `ans` vector should be reversed (or levels should be inserted at the front).
2. **Const Correctness**: While not critical in competitive programming, `TreeNode* root` could be `const` if the tree is not being modified.

---

# Question Revision
# Revision Report: Binary Tree Level Order Traversal II

- **Pattern:** Breadth-First Search (BFS) / Queue
- **Brute Force:** Perform a standard Level Order Traversal to get the levels in top-down order, then manually reverse the entire resulting list of lists.
- **Optimal Approach:** 
    - Use a `Queue` to process the tree level by level (standard BFS).
    - Instead of appending each level's list to the end of the result list, **prepend** (insert at index 0) or use a `Deque` to push to the front.
    - **Time Complexity:** $O(n)$ where $n$ is the number of nodes.
    - **Space Complexity:** $O(n)$ to store the queue and the output.
- **The 'Aha' Moment:** The requirement for "bottom-up" order combined with a tree structure suggests a standard BFS traversal where the final result is simply reversed or collected in a stack.
- **Summary:** Perform a standard BFS and reverse the final list (or prepend levels) to flip the traversal from top-down to bottom-up.

---