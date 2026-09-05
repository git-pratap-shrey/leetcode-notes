---
title: "Task Scheduler"
slug: task-scheduler
date: "2026-08-21"
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
    void fn (TreeNode* root, int num, int& answer){
        if(!root){
            return;
        }
        if(!root->left && !root->right){
            num += root->val;
            // cout<<num;
            answer += num;
            return;
        }
        else{
            fn(root->left, (num+root->val)*10, answer);
            fn(root->right, (num+root->val)*10, answer);
        }
    }
    int sumNumbers(TreeNode* root) {
        int answer = 0;
        if(!root->left && !root->right){
            return root->val;
        }
        fn(root->left, (root->val)*10, answer);
        fn(root->right, (root->val)*10, answer);

        return answer;
    }
};
~~~

# Submission Review
## Approach
*   **Technique:** Depth-First Search (DFS) traversal.
*   **Optimality:** Optimal. It visits each node exactly once to accumulate path sums.

## Complexity
*   **Time Complexity:** $O(N)$, where $N$ is the number of nodes in the binary tree.
*   **Space Complexity:** $O(H)$, where $H$ is the height of the tree, representing the recursion stack.

## Efficiency Feedback
*   The logic is efficient. However, the `sumNumbers` function contains an unnecessary special case for root-only trees that duplicates logic already handled by the `fn` function.

## Code Quality
*   **Readability:** Moderate. The recursion logic is standard, but the handling of the root node is fragmented.
*   **Structure:** Moderate. The `if(!root->left && !root->right)` check in `sumNumbers` is redundant and complicates the entry point.
*   **Naming:** Moderate. `fn` is an opaque name; `dfs` or `traverse` would be more descriptive.
*   **Concrete Improvements:**
    *   Simplify `sumNumbers` by calling the recursive function directly on the root: `fn(root, 0, answer);`.
    *   Inside `fn`, the base case `if (!root) return;` will handle the empty case, and the leaf check `!root->left && !root->right` will correctly add the accumulated path to `answer`. This eliminates the need for manual root checks in the main function.
    *   Add `const` qualifiers to parameters that are not modified (e.g., `TreeNode* root`).

---

# Question Revision
### Revision Report: Task Scheduler

**Pattern:** Greedy / Priority Queue (Max-Heap)

**Brute Force:**
Simulate the schedule tick-by-tick. Use a frequency map and try to pick the most frequent available task that isn't on "cooldown." This results in $O(n \cdot \text{cooldown})$ complexity due to repeated scanning of the frequency map.

**Optimal Approach:**
Calculate the maximum possible slots needed based on the most frequent task ($f_{max}$). 
1. Place the most frequent task in $f_{max} - 1$ cycles with a gap of size $n$.
2. Fill the gaps with remaining tasks.
3. If the gaps are overfilled, the answer is the total number of tasks; otherwise, it is $(f_{max} - 1) \times (n + 1) + (\text{count of tasks with } f_{max})$.
*   **Time Complexity:** $O(n)$ to count task frequencies.
*   **Space Complexity:** $O(1)$ (since the alphabet size is constant, max 26).

**The 'Aha' Moment:**
When the problem imposes a mandatory "cooling period" between identical items, prioritize the most frequent elements first to minimize idle time, as they dictate the total cycle duration.

**Summary:** 
Identify the bottleneck task (the one with max frequency) and use it to frame the grid of intervals, then distribute the remaining tasks to fill the gaps.

---