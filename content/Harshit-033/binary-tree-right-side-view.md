---
title: "Binary Tree Right Side View"
slug: binary-tree-right-side-view
date: "2026-04-24"
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
    vector<int> rightSideView(TreeNode* root) {
        vector<int> ans;
        map<int,int> mp;
        queue<pair<TreeNode*,int>> qu;
        if(root==NULL){
            return ans;
        }
        qu.push({root,0});
        while(!qu.empty()){
            auto p=qu.front();
            qu.pop();
            TreeNode* node=p.first;
            int x=p.second;
            mp[x]=node->val;
            if(node->left){
                qu.push({node->left,x+1});
            }
            if(node->right){
                qu.push({node->right,x+1});
            }

        }

        for(auto p:mp){
            ans.push_back(p.second);
        }
        return ans;
        
    }
};
~~~

# Submission Review
## Approach
- **Technique**: Breadth-First Search (BFS) using a `std::queue` and a `std::map` to track the last node encountered at each depth.
- **Optimality**: Suboptimal. While the logic is correct, using a `std::map` introduces unnecessary logarithmic overhead and extra memory for keys that are contiguous integers.

## Complexity
- **Time Complexity**: $O(N \log D)$, where $N$ is the number of nodes and $D$ is the maximum depth of the tree. The $\log D$ factor comes from `std::map` insertions.
- **Space Complexity**: $O(N)$ to store the queue and the map.

## Efficiency Feedback
- **Bottleneck**: The `std::map<int, int>` is the primary inefficiency. Since depths are sequential, a `std::vector` or a level-by-level BFS traversal (using the queue size) would achieve $O(N)$ time.
- **Optimization**: Process the queue in batches (level-by-level). Only the last node of each batch needs to be added to the result vector, eliminating the need for the map and the final loop.

## Code Quality
- **Readability**: Moderate. The logic is easy to follow, but variable naming is overly cryptic.
- **Structure**: Good. Standard implementation flow.
- **Naming**: Poor. Variables `mp`, `qu`, `p`, and `x` are non-descriptive. Preferred: `levelMap`, `nodeQueue`, `current`, and `depth`.
- **Concrete Improvements**:
    - Replace `std::map<int, int>` with a `std::vector<int>` if depth tracking is required.
    - Use `if (!root) return {};` for a more concise null check.
    - Implement level-order traversal using `int size = qu.size()` to capture the rightmost node directly.

---

# Question Revision
### Binary Tree Right Side View

**Pattern:** Breadth-First Search (BFS) / Level Order Traversal

**Brute Force:** Perform a full tree traversal (DFS/BFS) and maintain a map of `depth -> node_value`. Every time a node is visited at a specific depth, overwrite the value in the map. The final values in the map represent the rightmost nodes.

**Optimal Approach:** 
Use a queue to perform a level-order traversal. For each level, determine the number of nodes currently in the queue (`level_size`). Iterate through these nodes, and when the loop index reaches `level_size - 1`, add that node's value to the result list.

*   **Time Complexity:** $O(n)$ where $n$ is the number of nodes.
*   **Space Complexity:** $O(w)$ where $w$ is the maximum width of the tree.

**The 'Aha' Moment:** The "right side view" is mathematically equivalent to extracting the last element of every level in a standard BFS.

**Summary:** Use BFS to traverse level-by-level and capture only the final node of each level.

---