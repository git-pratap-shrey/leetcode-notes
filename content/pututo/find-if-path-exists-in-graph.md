---
title: "Find if Path Exists in Graph"
slug: find-if-path-exists-in-graph
date: "2026-10-27"
---

# My Solution
~~~cpp
class Solution {
public:
         void dfs(int node,vector<vector<int>>& a,vector<int>&vis){
            vis[node]=1;
            for(int neig:a[node]){
                if(!vis[neig]){
                    dfs(neig,a,vis);
                }
            }
         }
    bool validPath(int n, vector<vector<int>>& edges, int source, int destination) {
        vector<vector<int>>a(n);
        for(auto& e:edges){
            int u=e[0];
            int v=e[1];
            a[u].push_back(v);
            a[v].push_back(u);
        }
        vector<int>vis(n,0);
        dfs(source,a,vis);

        return vis[destination];
    }
};
~~~

# Submission Review
## Approach
- **Technique**: Depth-First Search (DFS) using an adjacency list.
- **Optimality**: Optimal. DFS/BFS/Union-Find are the standard optimal approaches for reachability in an undirected graph.

## Complexity
- **Time Complexity**: $O(V + E)$, where $V$ is the number of nodes (`n`) and $E$ is the number of edges. Each node and edge is visited once.
- **Space Complexity**: $O(V + E)$ to store the adjacency list and $O(V)$ for the visited array and recursion stack.

## Efficiency Feedback
- **Performance**: The solution is efficient.
- **Potential Optimization**: For very deep graphs, an iterative DFS or BFS could prevent a `StackOverflowError`, though for most competitive programming constraints, this recursive approach is sufficient.
- **Early Exit**: The current code visits all reachable nodes before returning. Adding a check `if (node == destination) return true;` inside the `dfs` function would allow for an early exit, potentially improving average-case runtime.

## Code Quality
- **Readability**: Moderate. The logic is clear, but the indentation is inconsistent and whitespace is lacking.
- **Structure**: Good. Separation of the traversal logic (`dfs`) and the graph construction (`validPath`) is appropriate.
- **Naming**: Poor. Variable names like `a` (adjacency list), `vis` (visited), and `neig` (neighbor) are overly abbreviated.
- **Improvements**:
    - Use more descriptive names: `adj` instead of `a`, `visited` instead of `vis`.
    - Use `const` references for parameters that are not modified (e.g., `const vector<vector<int>>& adj`).
    - Standardize indentation for professional readability.

---

# Question Revision
# Revision Report: Find if Path Exists in Graph

- **Pattern:** Graph Traversal (BFS/DFS) or Union-Find.
- **Brute Force:** Recursively explore every possible path from the `source` node to the `destination` node without tracking visited nodes (leads to infinite loops/exponential time).
- **Optimal Approach:** 
    - **Logic:** Convert the edge list into an **Adjacency List** for efficient neighbor lookup. Use a **BFS** (queue) or **DFS** (stack/recursion) to traverse the graph. Maintain a `visited` set to ensure each node is processed only once. If the `destination` is dequeued/visited, a path exists.
    - **Time Complexity:** $O(V + E)$ where $V$ is the number of vertices and $E$ is the number of edges.
    - **Space Complexity:** $O(V + E)$ to store the adjacency list and the visited set.
- **The 'Aha' Moment:** Whenever a problem asks if two nodes are "connected" or if a "path exists" in an undirected graph, it is a classic reachability problem solvable via Traversal or Union-Find.
- **Summary:** Use an adjacency list and BFS/DFS with a visited set to check reachability between two nodes.

---