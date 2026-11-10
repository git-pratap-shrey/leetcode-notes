---
title: "Number of Provinces"
slug: number-of-provinces
date: "2026-11-03"
---

# My Solution
~~~cpp
class Solution {
public:

    void dfs(int node, vector<int>adj[], vector<int>&vis){
            vis[node]=1;
            for(auto it: adj[node]){
                if(!vis[it]){
                    dfs(it,adj,vis);
              }
        }
    }

    int findCircleNum(vector<vector<int>>& isConnected) {
        int n=isConnected.size();
        int m=isConnected[0].size();
        vector<int>adj[n];
        for(int i=0;i<n;i++){
            for(int j=0;j<m;j++){
                if(isConnected[i][j]==1 && i!=j){
                    adj[i].push_back(j);
                    adj[j].push_back(i);
                }
            }
        }
        vector<int> vis(n,0);
        int count=0;
        for(int i=0;i<n;i++){
          if(!vis[i]){
            count++;
            dfs(i,adj,vis);
          }
        }
        return count;
   }
};
~~~

# Submission Review
<thought>*   Problem: Number of Provinces (finding connected components in an undirected graph).*   Problem: Number of Provinces (finding connected components in an undirected graph).
    *   Input: Adjacency matrix `isConnected`.
    *   Output: Number of connected components.

    *   The code converts the adjacency matrix `isConnected` into an adjacency list `adj`.
    *   It then performs a DFS starting from every unvisited node.
    *   Each DFS call marks all nodes in a connected component as visited.
    *   The count of DFS starts equals the number of provinces.

    *   Time Complexity:
        *   Building the adjacency list: $O(n \times m)$, where $n=m$ (since it's a square matrix). So $O(n^2)$.
        *   DFS traversal: Each node and edge is visited once. Max edges $n^2$. So $O(n^2)$.
        *   Total: $O(n^2)$. This is optimal for an adjacency matrix input.
    *   Space Complexity:
        *   Adjacency list: $O(n^2)$ in the worst case (dense graph).
        *   Visited array: $O(n)$.
        *   Recursion stack: $O(n)$.
        *   Total: $O(n^2)$.

    *   The conversion from adjacency matrix to adjacency list is redundant. One can perform DFS directly on the `isConnected` matrix.
    *   `adj[j].push_back(i)` is redundant because the nested loops iterate through both $(i, j)$ and $(j, i)$, adding the edge twice.

    *   Readability: Moderate. Indentation is slightly inconsistent.
    *   Structure: Good. Standard class-based approach.
    *   Naming: Moderate. `it` is generic; `adj` is standard; `vis` is standard.
    *   Potential Improvements: Remove the adjacency list conversion to save space and time. Fix indentation. Remove redundant edge push.</thought>## Approach
- **Technique**: Depth First Search (DFS) to find the number of connected components.
- **Optimality**: Suboptimal in terms of space, though optimal in terms of time complexity for the given input format.

## Complexity
- **Time Complexity**: $O(n^2)$, where $n$ is the number of nodes. The code iterates through the entire $n \times n$ matrix to build the adjacency list and then visits every node and edge during DFS.
- **Space Complexity**: $O(n^2)$ to store the adjacency list. This is unnecessary as the input is already provided as an adjacency matrix.

## Efficiency Feedback
- **Redundancy**: The conversion from an adjacency matrix to an adjacency list is redundant. DFS can be performed directly on `isConnected[i][j]`, reducing auxiliary space from $O(n^2)$ to $O(n)$ (for the visited array and recursion stack).
- **Redundant Operations**: Inside the nested loop, `adj[j].push_back(i)` is unnecessary because the loop covers both `(i, j)` and `(j, i)`, effectively adding every undirected edge twice to the list.

## Code Quality
- **Readability**: Moderate. The indentation is inconsistent (e.g., `dfs` function body and `if` blocks).
- **Structure**: Good. Logic is clearly separated into a helper traversal function and a main driver function.
- **Naming**: Moderate. `it` is a generic iterator name; `node`, `vis`, and `adj` are standard but could be more descriptive (e.g., `visited`, `adjacencyList`).
- **Concrete Improvements**:
    1. Remove `vector<int> adj[n]` and iterate over `isConnected[node][i]` inside the `dfs` function.
    2. Use `std::vector<std::vector<int>>` instead of a C-style array of vectors (`vector<int> adj[n]`) to avoid potential stack overflow or compatibility issues with some compilers.
    3. Fix indentation for better maintainability.

---

# Question Revision
<thought>
*   Problem: Number of Provinces (LeetCode).
*   Goal: Generate a concise, high-signal Markdown revision report.
*   Role: Senior DSA Trainer.
*   Constraints:
    *   Concise Markdown summaries.
    *   Standard Big-O notation (e.g., $O(n)$).
    *   'Aha' moment: strictly one sentence.
    *   No introductory pleasantries.
    *   Specific sections: Pattern, Brute Force, Optimal Approach, The 'Aha' Moment, Summary.

    *   Input: An $n \times n$ matrix representing connectivity between cities.
    *   Goal: Find the number of connected components.
    *   Pattern: Graph Traversal (DFS/BFS) or Disjoint Set Union (DSU).

    *   *Pattern:* Graph Connectivity / Connected Components.
    *   *Brute Force:* Iterating through all pairs multiple times to check connectivity manually (very inefficient). More realistically, just basic DFS/BFS traversal. Let's stick to the "naive" perspective: checking every possible path between all pairs.
    *   *Optimal Approach:*
        *   Logic: Use DFS, BFS, or DSU to traverse the graph. Treat cities as nodes and connections as edges. Every time a traversal starts from an unvisited node, it counts as one province.
        *   Time Complexity: $O(n^2)$ because we must scan the entire adjacency matrix.
        *   Space Complexity: $O(n)$ to track visited nodes.
    *   *Aha Moment:* The problem asks for "groups of connected elements," which is the textbook definition of finding connected components in a graph.
    *   *Summary:* Use a visited array and DFS/BFS to count how many times you need to start a new traversal to visit every node.</thought>### Revision Report: Number of Provinces

- **Pattern**: Graph Connectivity (Connected Components)
- **Brute Force**: Iteratively check all possible paths between every pair of cities to determine if they belong to the same group, leading to redundant traversals and exponential/high polynomial complexity.
- **Optimal Approach**: Treat cities as nodes and connections as edges. Use **DFS**, **BFS**, or **Union-Find (DSU)** to traverse the graph. Start a traversal from every unvisited node; each time a new traversal begins, increment the province count.
    - **Time Complexity**: $O(n^2)$ to scan the adjacency matrix.
    - **Space Complexity**: $O(n)$ for the visited array/recursion stack.
- **The 'Aha' Moment**: Whenever a problem asks for the number of "isolated groups" or "connected clusters," it is a direct signal to find Connected Components in a graph.
- **Summary**: Count how many times you must initiate a DFS/BFS to visit all nodes in the adjacency matrix.

---