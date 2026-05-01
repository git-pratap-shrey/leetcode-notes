---
title: "Vertical Order Traversal of a Binary Tree"
slug: vertical-order-traversal-of-a-binary-tree
date: "2026-04-23"
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
    vector<vector<int>> verticalTraversal(TreeNode* root) {
        map<int, map<int,multiset<int>>> n;
        queue<pair<TreeNode*,pair<int,int>>> qu;
        qu.push({root ,{0,0}});
        while(!qu.empty()){
            auto p=qu.front();
            qu.pop();
            TreeNode* node=p.first;
            int x=p.second.first;
            int y=p.second.second;
            n[x][y].insert(node->val);
            if(node->left){
                qu.push({node->left,{x-1,y+1}});
            }
            if(node->right){
                qu.push({node->right,{x+1,y+1}});
            }
        }
        vector<vector<int>> ans;
        for(auto p:n){
            vector<int> col;
            for(auto q:p.second){
                col.insert(col.end(),q.second.begin(),q.second.end());
            }
            ans.push_back(col);
        }
        return ans;
        
    }
};
~~~

# Submission Review
## Approach
- **Technique**: BFS (Breadth-First Search) using a nested data structure (`map<int, map<int, multiset<int>>>`) to store nodes based on their coordinates (column, row).
- **Optimality**: Optimal. The problem requires nodes to be sorted by column, then row, and finally by value. The nested map and multiset automatically handle these sorting requirements.

## Complexity
- **Time Complexity**: $O(N \log N)$, where $N$ is the number of nodes. Each node is inserted into a map and a multiset, both of which have logarithmic time complexity for insertions.
- **Space Complexity**: $O(N)$ to store the coordinates and values of all nodes in the map and the queue.

## Efficiency Feedback
- **Memory Overhead**: Using `std::map` and `std::multiset` introduces significant pointer overhead compared to vectors. While asymptotically optimal, the constant factor is high.
- **Bottleneck**: The nested map lookup `n[x][y]` happens for every node; however, given the constraints of binary tree problems on most platforms, this is acceptable.

## Code Quality
- **Readability**: Moderate. The logic is clear, but the lack of descriptive variable names hinders quick understanding.
- **Structure**: Good. The separation between the traversal phase and the result construction phase is clean.
- **Naming**: Poor. 
    - `n` $\rightarrow$ `nodes` or `columns`.
    - `qu` $\rightarrow$ `q` or `queue`.
    - `p`, `q` $\rightarrow$ Use structured bindings (C++17) for better clarity (e.g., `for (auto const& [col, rows] : n)`).
- **Concrete Improvements**: 
    - Use C++17 structured bindings to avoid `p.first`, `p.second.first` etc.
    - Replace `col.insert(col.end(), q.second.begin(), q.second.end())` with a more explicit loop or `std::move` if applicable, though the current approach is functional.

---

# Question Revision
### Vertical Order Traversal of a Binary Tree

**Pattern:** BFS + Coordinate Mapping (Hash Map/TreeMap)

**Brute Force:** 
Perform a DFS to collect all nodes as tuples of `(column, row, value)`. Sort the entire collection primarily by column, secondarily by row, and tertiarily by value.

**Optimal Approach:**
*   **Logic:** Use a Queue for BFS to traverse the tree, tracking the `(node, column, row)` for each element. Use a Map where the key is the `column` and the value is a list of `(row, value)` pairs. After traversal, sort the pairs within each column (by row, then value) and extract them in increasing order of column keys.
*   **Time Complexity:** $O(N \log N)$ (where $N$ is the number of nodes; sorting nodes within the same column dominates).
*   **Space Complexity:** $O(N)$ to store all nodes in the map.

**The 'Aha' Moment:** 
The "vertical" requirement indicates a need for a column index (left = -1, right = +1), while the "top-to-bottom" requirement suggests BFS is more natural than DFS for row tracking.

**Summary:** 
Map nodes to `(col, row)` coordinates using BFS, then group and sort by column to produce the vertical slices.

---