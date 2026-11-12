---
title: "Critical Connections in a Network"
slug: critical-connections-in-a-network
date: "2026-11-12"
---

# My Solution
~~~java
class Solution {
    int time;
    int[] tin, low;
    private void dfs(int u,int par, List<List<Integer>> adj, List<List<Integer>> bridges){
        low[u]=tin[u]=++time;
        for(int v: adj.get(u)){
            if(tin[v]==-1){
                dfs(v,u,adj,bridges);
                low[u] = Math.min(low[u],low[v]);
                if(low[v]>tin[u]){
                    bridges.add(Arrays.asList(u,v));
                }
            }
            else if(v!=par){
                low[u] = Math.min(low[u],tin[v]);
            }
        }
    }
    public List<List<Integer>> criticalConnections(int n, List<List<Integer>> connections) {
        List<List<Integer>> adj = new ArrayList<>();
        for(int i=0;i<n;i++){
            adj.add(new ArrayList<>());
        }
        for(List<Integer> edge: connections){
            int u = edge.get(0);
            int v = edge.get(1);
            adj.get(u).add(v);
            adj.get(v).add(u);
        }
        time = 0;
        tin = new int[n];
        low = new int[n];
        Arrays.fill(tin,-1);
        List<List<Integer>> bridges = new ArrayList<>();
        for(int i=0;i<n;i++){
            if(tin[i]==-1){
                dfs(i,-1,adj,bridges);
            }
        }
        return bridges;
    }
}
~~~

# Submission Review
<thought>*   Problem: Critical Connections in a Network (finding bridges in an undirected graph).
    *   Language: Java.
    *   Algorithm: Tarjan's Bridge-finding algorithm (or similar DFS-based approach using `tin` and `low` arrays).

    *   `criticalConnections` method:
        *   Builds adjacency list from edge list.
        *   Initializes `tin` (time of insertion) and `low` (lowest reachable `tin`).
        *   Calls `dfs` for all components.
    *   `dfs` method:
        *   Recursive traversal.
        *   Standard bridge detection: `low[v] > tin[u]`.
        *   Handles back-edges: `low[u] = Math.min(low[u], tin[v])`.

    *   `tin` and `low` arrays: size $n$.
    *   Adjacency list: $n$ vertices, $2e$ edges.
    *   Time Complexity: $O(V + E)$ because it's a standard DFS.
    *   Space Complexity: $O(V + E)$ for adjacency list and recursion stack.

    *   Is it optimal? Yes, bridge finding is $O(V+E)$.
    *   Any bottlenecks? Adjacency list construction is $O(E)$. Memory is proportional to the graph size.

    *   Readability: Moderate. Lacks spaces around operators and indentation is basic.
    *   Structure: Good. Logic is split between graph construction and the recursive search.
    *   Naming: Poor/Moderate. `tin`, `low`, `u`, `v`, `par` are common in CP but non-descriptive for professional software engineering.
    *   Improvements: Use `int[][]` for edges or a specialized class if performance is critical, but `List<List<Integer>>` is acceptable for this problem.

    *   Approach: Tarjan's / Bridge-finding algorithm. Optimal.
    *   Complexity: Time $O(V+E)$, Space $O(V+E)$.
    *   Feedback: Memory is standard; recursion depth might be an issue for very deep graphs in some environments, but usually fine for CP.
    *   Quality: `tin` and `low` are terse. Need more whitespace.</thought>## Approach
- **Technique**: Tarjan's Bridge-finding algorithm (DFS-based).
- **Optimality**: Optimal. The algorithm visits each node and edge exactly once to identify bridges in a single traversal.

## Complexity
- **Time Complexity**: $O(V + E)$, where $V$ is the number of nodes and $E$ is the number of connections.
- **Space Complexity**: $O(V + E)$ to store the adjacency list, the `tin`/`low` arrays, and the recursion stack.

## Efficiency Feedback
- **Performance**: The implementation is efficient.
- **Memory**: Using `ArrayList<ArrayList<Integer>>` for the adjacency list introduces some overhead compared to a primitive `int[][]` or a packed array representation, but it is standard for this problem.
- **Potential Risk**: For extremely deep graphs (e.g., a line graph with $10^5$ nodes), the recursive DFS may trigger a `StackOverflowError` in Java depending on the JVM stack size.

## Code Quality
- **Readability**: Moderate. The logic is clear to those familiar with graph theory, but the lack of whitespace around operators (e.g., `u,int par`, `i=0;i<n`) makes it feel cramped.
- **Structure**: Good. The separation between the graph construction and the DFS traversal is clean.
- **Naming**: Moderate. While `tin` (time in) and `low` (lowest reachable) are standard shorthand in competitive programming, `u`, `v`, and `par` are overly terse for production-grade code.
- **Concrete Improvements**:
    - Add spacing around operators and after commas for better readability.
    - Use more descriptive names: `u` $\rightarrow$ `currentNode`, `v` $\rightarrow$ `neighbor`, `par` $\rightarrow$ `parent`.
    - Initialize the `adj` list with an initial capacity `n` to avoid internal array resizing.

---

# Question Revision
<thought>*   Problem: "Critical Connections in a Network" (LeetCode).
    *   Goal: Generate a concise,*   Problem: "Critical Connections in a Network" (LeetCode).
    *   Goal: Generate a concise, high-signal revision report in Markdown.
    *   Required Sections: Pattern, Brute Force, Optimal Approach, The 'Aha' Moment, Summary.
    *   Constraints: Standard Big-O notation, 'Aha' moment = one sentence, no intro pleasantries, senior DSA trainer persona.

    *   Problem asks for "critical connections" (bridges) in an undirected graph.
    *   A bridge is an edge that, if removed, increases the number of connected components.

    *   Pattern: Graph / Tarjan's Bridge-finding Algorithm (or DFS with discovery/low-link values).
    *   Brute Force: Remove every edge one by one and check connectivity using BFS/DFS.
    *   Optimal: Tarjan's Algorithm / DFS with `discovery_time` and `low_link_value`.
        *   `discovery_time[u]`: When node $u$ was first visited.
        *   `low_link[u]`: The lowest `discovery_time` reachable from $u$ in the DFS tree (including back-edges).
        *   An edge $(u, v)$ is a bridge if `low_link[v] > discovery_time[u]`.
    *   Complexity: $O(V + E)$ time and space.
    *   The 'Aha' Moment: The term "critical connection" (removing it breaks connectivity) is the textbook definition of a "Bridge" in graph theory.
    *   Summary: Use DFS to track the earliest visited node reachable from a subtree; if no back-edge exists to the parent or above, the edge is a bridge.

    *   Pattern: Graph (Tarjan's Bridge-finding Algorithm).
    *   Brute Force: Remove each edge one by one and run BFS/DFS to check if the graph remains connected. Time: $O(E \cdot (V+E))$.
    *   Optimal:
        *   Logic: Perform a DFS and maintain two arrays: `discovery` (time node was first visited) and `low` (lowest discovery time reachable via back-edges). An edge $(u, v)$ is critical if $low[v] > discovery[u]$, meaning $v$ has no way to reach $u$ or any ancestor of $u$ without using the edge $(u, v)$.
        *   Time Complexity: $O(V + E)$
        *   Space Complexity: $O(V + E)$
    *   Aha Moment: "Critical connection" is a synonym for a "bridge" in an undirected graph.
    *   Summary: Track discovery times and the lowest reachable ancestor via DFS to identify edges that aren't part of any cycle.</thought>### Revision Report: Critical Connections in a Network

- **Pattern**: Graph / Tarjan's Bridge-finding Algorithm
- **Brute Force**: Iteratively remove each edge and run a BFS/DFS to check if the graph remains connected. 
    - Time: $O(E \cdot (V+E))$
- **Optimal Approach**: 
    - **Logic**: Use DFS to track two values for each node: `discovery` (time node was first visited) and `low` (the lowest `discovery` time reachable from the node, including back-edges to ancestors). An edge $(u, v)$ is a bridge if $low[v] > discovery[u]$, indicating there is no back-edge from $v$ or its descendants back to $u$ or any of $u$'s ancestors.
    - **Time Complexity**: $O(V + E)$
    - **Space Complexity**: $O(V + E)$
- **The 'Aha' Moment**: The term "critical connection" is the textbook definition of a **bridge** in an undirected graph.
- **Summary**: Use DFS to identify edges that are not part of any cycle by comparing discovery times with the lowest reachable ancestor.

---