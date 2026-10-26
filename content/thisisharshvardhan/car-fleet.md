---
title: "Car Fleet"
slug: car-fleet
date: "2026-10-24"
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

   int solve(TreeNode* root,int mx){
    if(!root) return 0;
    int cnt=0;
    if(root->val>=mx){
        cnt=1;
        mx=root->val;
    }
    cnt+=solve(root->left,mx);
    cnt+=solve(root->right,mx);
    return cnt;

   }
    int goodNodes(TreeNode* root) {
        return solve(root,INT_MIN);
    }
};
~~~

# Submission Review
## Approach
- **Technique**: DFS (Depth First Search) using recursion. The solution maintains the maximum value encountered along the path from the root to the current node to determine if a node is "good."
- **Optimality**: Optimal. Every node must be visited exactly once to determine if it meets the criteria.

## Complexity
- **Time Complexity**: $O(N)$, where $N$ is the number of nodes in the tree.
- **Space Complexity**: $O(H)$, where $H$ is the height of the tree, representing the maximum depth of the recursion stack. In the worst case (skewed tree), this is $O(N)$.

## Efficiency Feedback
- The efficiency is optimal for this problem. 
- The use of `INT_MIN` correctly handles cases where node values are negative.

## Code Quality
- **Readability**: Moderate. The logic is clear, but the provided code contains a misleading comment block at the top.
- **Structure**: Good. The separation of the helper function `solve` from the main `goodNodes` function is standard.
- **Naming**: Moderate. `solve` is a generic name; `countGoodNodes` would be more descriptive.
- **Concrete Improvements**:
    - **Critical Error**: The code provided is a solution for the "Count Good Nodes in Binary Tree" problem, but the prompt labels the problem as "Car Fleet." The implementation is correct for the tree problem, but entirely unrelated to a "Car Fleet" problem.
    - Remove the unused `TreeNode` definition if it is already provided by the environment to reduce clutter.
    - Change `solve` to a more descriptive name.

---

# Question Revision
# Revision Report: Car Fleet

- **Pattern**: Monotonic Stack / Sorting (Time-to-Destination)
- **Brute Force**: Simulate the movement of cars second-by-second or calculate every single collision point. This is inefficient due to floating-point precision and potentially massive time steps.
- **Optimal Approach**: 
    1. Pair each car's position with its speed and **sort them by position in descending order** (closest to target first).
    2. Calculate the time each car takes to reach the target: $\text{time} = \frac{\text{target} - \text{position}}{\text{speed}}$.
    3. Iterate through the sorted cars: if a car takes *less than or equal* time than the fleet in front of it, it will collide and become part of that fleet. If it takes *more* time, it starts a new fleet.
    - **Time Complexity**: $O(n \log n)$ due to sorting.
    - **Space Complexity**: $O(n)$ to store the times/sorted pairs.
- **The 'Aha' Moment**: Realizing that a car's ability to catch up depends solely on whether its "time to destination" is less than or equal to the car ahead of it.
- **Summary**: Sort cars by position descending and use a stack to merge any car that arrives faster than (or at the same time as) the fleet ahead.

---