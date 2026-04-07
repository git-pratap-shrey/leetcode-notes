---
title: "Path Sum III"
slug: path-sum-iii
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
    void solve(TreeNode* root, vector<int>& path, int& count,int targetSum){
        if (!root) return ;
        path.push_back(root->val);

        solve(root->left,path,count,targetSum);
        solve(root->right,path,count,targetSum);

        int size=path.size();
        long long sum=0;
        for (int i=size-1;i>=0;i--){
            sum+=path[i];
            if (sum==targetSum) count+=1;
        }
        path.pop_back();
    }
    int pathSum(TreeNode* root, int targetSum) {
        int count=0;
        vector<int> path;
        solve(root,path,count,targetSum);
        return count;
    }
};
~~~

# Submission Review
## Approach
*   **Technique:** Depth-First Search (DFS) with a backtracking path vector. It explores every possible path ending at a specific node by traversing backward through the current recursion stack.
*   **Optimality:** Suboptimal. While it correctly finds all paths, it re-calculates the path sum repeatedly. An optimal approach uses a Hash Map (prefix sum technique) to achieve $O(N)$ time complexity.

## Complexity
*   **Time Complexity:** $O(N^2)$ in the worst case (skewed tree) and $O(N \log N)$ in a balanced tree. The nested loop iterating over the `path` vector for every node causes this overhead.
*   **Space Complexity:** $O(H)$, where $H$ is the tree height, due to the recursion stack and the `path` vector.

## Efficiency Feedback
*   **Bottleneck:** The manual iteration `for (int i=size-1; i>=0; i--)` inside the recursive calls turns a tree traversal into a quadratic-time operation.
*   **Optimization:** Use a `std::unordered_map<long long, int>` to store the prefix sums encountered so far. By calculating `current_sum - targetSum` and checking if that value exists in the map, you can solve the problem in a single $O(N)$ pass.

## Code Quality
*   **Readability:** Good. The logic is straightforward and easy to follow.
*   **Structure:** Moderate. The use of a helper function `solve` is standard, though passing `path` by reference and popping back is effectively manual backtracking, which is correct but slightly verbose.
*   **Naming:** Good. Variable names like `path`, `count`, and `targetSum` accurately describe their roles.
*   **Concrete Improvements:** 
    *   **Data Types:** Using `long long sum` is correct to prevent overflow, but ensure the `targetSum` comparison is consistent (the problem constraints define `targetSum` as `int`, but intermediate path sums could potentially exceed `int` range if node values are large).
    *   **Performance:** Replace the `vector<int>& path` and the inner loop with a `unordered_map<long long, int> prefixCounts` passed by value or updated globally to reach $O(N)$ time.

---
---


# Question Revision
### Path Sum III

**Pattern:** Prefix Sum + Hash Map (Tracking subtree paths)

**Brute Force:** 
For every node in the tree, initiate a DFS to find all paths starting from that node that sum to `targetSum`.
*   **Time:** $O(n^2)$ (in skewed trees) or $O(n \log n)$ (in balanced trees).
*   **Space:** $O(h)$ where $h$ is tree height.

**Optimal Approach:**
Use a Hash Map to store the frequency of prefix sums encountered along the current path from the root. As you traverse, calculate the current `runningSum` and check how many times `(runningSum - targetSum)` has occurred in the map. Backtrack by decrementing the count of the current `runningSum` when returning from the recursive call.
*   **Time:** $O(n)$
*   **Space:** $O(h)$

**The 'Aha' Moment:**
Whenever a problem asks for the number of subarrays (or paths) that sum to $k$, it is a signal to treat the running sum like a prefix sum array and use a hash map to look back for the complement.

**Summary:**
Think of a tree path as an array path and use the "Running Sum - Target = Complement" lookup pattern to transform an $O(n^2)$ search into an $O(n)$ hash map lookup.

---
