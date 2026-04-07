---
title: "Average of Levels in Binary Tree"
slug: average-of-levels-in-binary-tree
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
    vector<double> averageOfLevels(TreeNode* root) {
        queue<TreeNode*> q;
        q.push(root);
        q.push(NULL);
        vector<int> temp;
        vector<double> result;
        while(!q.empty()){
            TreeNode* front=q.front();
            q.pop();
            
            if (!front){
                long long sum=0;
                for (int i=0;i<temp.size();i++){
                    sum+=temp[i];
                }
                double avg=(double)sum/temp.size();
                result.push_back(avg);
                temp.clear();
                if (!q.empty()) q.push(NULL);
            }
            else {
                temp.push_back(front->val);
                if (front->right) q.push(front->right);
                if (front->left) q.push(front->left);
            }
        }
        return result;
    }
};
~~~

# Submission Review
## Approach
*   **Technique:** Level-order traversal (BFS) using a sentinel node (`NULL`) to mark level boundaries.
*   **Optimality:** Suboptimal. While the traversal logic is correct, the use of an intermediate `vector<int> temp` to store values per level forces an unnecessary secondary pass to compute the sum and adds extra space overhead.

## Complexity
*   **Time Complexity:** $O(N)$, where $N$ is the number of nodes. Each node is visited once, and the sum calculation is performed once per level.
*   **Space Complexity:** $O(W)$, where $W$ is the maximum width of the tree. The queue and the `temp` vector store nodes/values for one level at a time.

## Efficiency Feedback
*   **Bottleneck:** The current code iterates over `temp` to calculate the sum. This can be integrated directly into the BFS loop. By tracking `currentLevelSum` and `currentLevelCount` inside the `while` loop, you eliminate the `vector<int>` entirely and avoid the redundant $O(W)$ summation loop.
*   **Data Type:** Using `long long` for `sum` is good practice to prevent overflow before the division.

## Code Quality
*   **Readability:** Good. The logic is straightforward and easy to follow.
*   **Structure:** Moderate. The use of a `NULL` sentinel is a classic pattern, but managing it adds conditional branches that could be simplified using a size-based level traversal (i.e., `int size = q.size(); while(size--)`).
*   **Naming:** Good. Variable names like `q`, `temp`, and `result` are standard for this level of algorithmic problem.
*   **Concrete Improvements:**
    *   Replace the `NULL` sentinel with a level-based loop: `int n = q.size();` to process each level. This makes the logic cleaner and avoids potential `NULL` pointer dereference risks (though not present here).
    *   Remove `vector<int> temp` and accumulate `sum` and `count` variables directly within the inner loop to save memory and reduce operations.

```cpp
// Suggested optimization:
vector<double> averageOfLevels(TreeNode* root) {
    vector<double> result;
    if (!root) return result;
    queue<TreeNode*> q;
    q.push(root);
    while(!q.empty()){
        int n = q.size();
        double sum = 0;
        for(int i = 0; i < n; ++i){
            TreeNode* curr = q.front(); q.pop();
            sum += curr->val;
            if(curr->left) q.push(curr->left);
            if(curr->right) q.push(curr->right);
        }
        result.push_back(sum / n);
    }
    return result;
}
```

---
---


# Question Revision
### Revision Report: Average of Levels in Binary Tree

**Pattern:** Breadth-First Search (BFS) / Level-Order Traversal

**Brute Force:** 
Perform a Depth-First Search (DFS) to map nodes into a hash map where keys are level indices and values are lists of node sums, then calculate averages.
*   **Time:** $O(n)$ 
*   **Space:** $O(n)$ to store the tree structure and map.

**Optimal Approach:** 
Use a queue to process the tree level by level. At each level, track the sum of values and the count of nodes, calculate the average, and push it to the result list before proceeding to the next level.
*   **Time:** $O(n)$, as we visit each node exactly once.
*   **Space:** $O(w)$, where $w$ is the maximum width of the tree (size of the queue).

**The 'Aha' Moment:** 
Whenever a problem asks for an aggregate statistic (sum, average, max) based on the "depth" or "level" of nodes, a level-order traversal is the most direct way to isolate those groups.

**Summary:**
When you need to process data layer-by-layer, initialize a queue and iterate through its current size to keep your logic locked to a single tree level.

---
