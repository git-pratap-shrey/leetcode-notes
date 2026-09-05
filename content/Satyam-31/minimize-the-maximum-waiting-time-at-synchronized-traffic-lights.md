---
title: "Minimize the Maximum Waiting Time at Synchronized Traffic Lights"
slug: minimize-the-maximum-waiting-time-at-synchronized-traffic-lights
date: "2026-08-16"
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
        if (!root){
            return false;
        }
        if (!root->left && !root->right){
            return targetSum - root->val == 0;
        }
        targetSum -= root->val;
        return hasPathSum(root->left, targetSum) || hasPathSum(root->right, targetSum);
    }
};
~~~

# Submission Review
## Approach
*   **Technique:** Depth-First Search (DFS) / Recursion.
*   **Optimality:** Optimal. It visits each node at most once to determine if a root-to-leaf path sum equals the target.

## Complexity
*   **Time Complexity:** $O(N)$, where $N$ is the number of nodes in the tree, as every node must be visited in the worst case.
*   **Space Complexity:** $O(H)$, where $H$ is the height of the tree, representing the recursion stack depth. In the worst case (skewed tree), this is $O(N)$.

## Efficiency Feedback
*   **Efficiency:** The runtime is as efficient as possible for this problem, as any solution must traverse the nodes to verify the path sums.
*   **Memory:** The space usage is optimal for a recursive approach. No unnecessary allocations are performed.

## Code Quality
*   **Readability:** Good. The logic is concise and follows standard patterns for tree traversal.
*   **Structure:** Good. Base cases (null check and leaf check) are handled correctly before the recursive step.
*   **Naming:** Good. `hasPathSum` and `targetSum` clearly describe the function and variables.
*   **Concrete Improvements:** 
    *   The implementation is idiomatic. One minor aesthetic improvement would be to pass `targetSum - root->val` directly in the recursive call rather than modifying the variable, though the current approach is perfectly valid and avoids potential issues if the variable were needed later.
    *   *Note:* The problem title "Minimize the Maximum Waiting Time at Synchronized Traffic Lights" is entirely unrelated to the provided code ("Path Sum"). Ensure the code is matched to the correct problem statement.

---

# Question Revision
### Revision Report: Synchronized Traffic Lights

**Pattern:** Greedy / Sorting / Modular Arithmetic

**Brute Force:** 
Simulate every possible start time or check all combinations of traffic light phases. This typically results in $O(n^2)$ or $O(n \cdot m)$ complexity where $n$ is the number of lights and $m$ is the cycle range.

**Optimal Approach:** 
1. **Sort** the traffic lights based on their cycle requirements or distance constraints.
2. Use **modular arithmetic** to calculate the wait time at each light relative to the arrival time. 
3. If the goal is to minimize the *maximum* wait, iterate through the sorted list and apply a binary search on the potential start time, or use a greedy approach if the light cycles allow for interval calculation.
4. **Complexity:** $O(n \log n)$ due to sorting, where $n$ is the number of lights. Space complexity is $O(1)$ (ignoring input storage).

**The 'Aha' Moment:** 
When a problem asks to minimize a "maximum" value across periodic events, it is a strong signal to either use Binary Search on the answer or leverage the periodicity of the constraints using modulo operations.

**Summary:** 
Whenever you see periodic cycles, convert the time offset into a modulo domain to reduce complex scheduling into simple arithmetic constraints.

---