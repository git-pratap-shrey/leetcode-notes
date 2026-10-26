---
title: "Insert into a Binary Search Tree"
slug: insert-into-a-binary-search-tree
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
 *     TreeNode(int x) : val(x), left(NULL), right(NULL) {}
 * };
 */
class Solution {
public:
    vector<int> distanceK(TreeNode* root, TreeNode* target, int k) {
        unordered_map<TreeNode*,TreeNode*>parent;

        queue<TreeNode*>q;
        q.push(root);

        while(!q.empty()){
            TreeNode* curr=q.front();
            q.pop();

            if(curr->left){
                parent[curr->left]=curr;
                q.push(curr->left);
            }
             if(curr->right){
                parent[curr->right]=curr;
                q.push(curr->right);
            }
        }
        unordered_set<TreeNode*>visited;
        q.push(target);
        visited.insert(target);
        int d=0;

        while(!q.empty()){
            if(d==k) break;
            int n=q.size();
            for(int i=0;i<n;i++){
                TreeNode* curr=q.front();
                q.pop();

                if(curr->left && !visited.count(curr->left)){
                    visited.insert(curr->left);
                    q.push(curr->left);
                }
                 if(curr->right && !visited.count(curr->right)){
                    visited.insert(curr->right);
                    q.push(curr->right);
                }
                 if(parent.count(curr) && !visited.count(parent[curr])){
                    visited.insert(parent[curr]);
                    q.push(parent[curr]);
                }
            }
            d++;
        }
        vector<int>ans;
        while(!q.empty()){
            ans.push_back(q.front()->val);
            q.pop();
        }
        return ans;
    }
};
~~~

# Submission Review
## Approach
- **Technique**: Graph transformation and Breadth-First Search (BFS). The solution first maps parent pointers using BFS to treat the tree as an undirected graph, then performs a second BFS starting from the `target` node to find all nodes at distance `k`.
- **Optimality**: Optimal. Finding all nodes at a specific distance in a graph requires visiting those nodes and their neighbors; BFS is the standard optimal approach for shortest-path distances in unweighted graphs.

## Complexity
- **Time Complexity**: $O(N)$, where $N$ is the number of nodes. The first BFS visits every node once to build the parent map, and the second BFS visits each node at most once.
- **Space Complexity**: $O(N)$. The `unordered_map` for parents, the `unordered_set` for visited nodes, and the `queue` can all grow linearly with the number of nodes.

## Efficiency Feedback
- **Memory usage**: The use of an `unordered_set` and `unordered_map` introduces significant overhead. Using a `std::vector` or adding a `visited` flag to the node structure (if permissible) would reduce constant-time overhead.
- **Queue handling**: The solution correctly uses level-order traversal to track distance `d`, which is efficient.

## Code Quality
- **Readability**: Moderate. While the logic is clear, the code lacks comments and has inconsistent indentation/spacing (e.g., `if(curr->left)` vs `if (parent.count(curr))`).
- **Structure**: Poor. **Critical Logic Error**: The provided code implements the problem *"All Nodes Distance K in Binary Tree"*, but the problem statement given is *"Insert into a Binary Search Tree"*. The code does not address the prompt's problem.
- **Naming**: Moderate. Variables like `d`, `n`, and `q` are standard for competitive programming but lack descriptive clarity for production environments.
- **Concrete Improvements**: 
    1. **Problem Alignment**: The code must be completely rewritten to implement BST insertion instead of distance calculation.
    2. **Formatting**: Standardize spacing around operators and keywords for better legibility.

---

# Question Revision
# Revision Report: Insert into a Binary Search Tree

- **Pattern:** BST Traversal / Recursion
- **Brute Force:** Flatten the BST into a sorted array, append the new value, and rebuild a balanced BST from scratch.
- **Optimal Approach:** 
    - **Logic:** Leverage the BST property (left < root < right). Compare the new value with the current node: if smaller, recurse left; if larger, recurse right. When a `null` child is encountered, that is the correct insertion point.
    - **Time Complexity:** $O(h)$, where $h$ is the height of the tree ($O(\log n)$ average, $O(n)$ worst case).
    - **Space Complexity:** $O(h)$ for the recursion stack.
- **The 'Aha' Moment:** The requirement to maintain the BST property means the insertion point is uniquely determined by a single path from root to leaf.
- **Summary:** Follow the BST property logic to find the first available `null` spot and attach the new node there.

---