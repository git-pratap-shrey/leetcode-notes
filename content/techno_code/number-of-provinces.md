---
title: "Number of Provinces"
slug: number-of-provinces
date: "2026-11-10"
---

# My Solution
~~~cpp
class Solution {
public:
    int findCircleNum(vector<vector<int>>& isConnected) {
        queue<int> queue;
        unordered_set<int> visited;
        int res = 0;
        for (int c = 0; c < isConnected.size(); c++) {
            if (visited.count(c) != 0) continue;
            queue.push(c);
            visited.insert(c);
            res++;
            while (!queue.empty()) {
                int curr = queue.front();
                queue.pop();
                for (int i = 0; i<isConnected[curr].size(); i++) {
                    if (visited.count(i) == 0 && isConnected[curr][i]) {
                        queue.push(i);
                        visited.insert(i);
                    }
                }
            }
        }
        return res;
    }
};
~~~

# Submission Review
## Approach
- **Technique**: Breadth-First Search (BFS) to find connected components in an adjacency matrix.
- **Optimality**: Optimal. The algorithm visits every node and edge once to identify disjoint sets.

## Complexity
- **Time Complexity**: $O(N^2)$, where $N$ is the number of cities. The nested loop iterates through the adjacency matrix.
- **Space Complexity**: $O(N)$. In the worst case, the `visited` set and the `queue` will both store all $N$ nodes.

## Efficiency Feedback
- **Set Overhead**: Using `std::unordered_set<int>` for tracking visited nodes introduces unnecessary hashing overhead. Since the nodes are indexed $0$ to $N-1$, a `std::vector<bool>` or a fixed-size array would be significantly faster and more memory-efficient.
- **Queue Performance**: The BFS implementation is standard; however, for this specific problem, a Depth-First Search (DFS) would likely result in slightly cleaner code with similar performance.

## Code Quality
- **Readability**: Good. The logic is straightforward and follows standard BFS patterns.
- **Structure**: Good. The flow from outer loop (component discovery) to inner loop (component traversal) is clear.
- **Naming**: Moderate. `res` is generic (could be `provinces` or `count`), and `c` in the outer loop is slightly ambiguous (though clearly an index).

**Concrete Improvements**:
1. Replace `unordered_set<int> visited` with `vector<bool> visited(isConnected.size(), false)`.
2. Replace `visited.count(c) != 0` with `visited[c]`.
3. Rename `res` to `numProvinces` for better clarity.

---

# Question Revision
<thought>
*   Problem: "Number of Provinces" (LeetCode).
*   Goal: Revision report for study notes.
*   Persona: Senior DSA Trainer.
*   Format: Concise Markdown.
*   Requirements: Pattern, Brute Force, Optimal Approach (Logic + Complexity), 'Aha' Moment (1 sentence), Summary (1 sentence). No intro pleasantries.

    *   *Problem Description:* Given an adjacency matrix representing connections between cities, find the number of connected components (provinces).
    *   *Pattern:* Graph Traversal (DFS/BFS) or Disjoint Set Union (DSU).
    *   *Brute Force:* Iterating through all pairs and trying to find paths? Not really a separate "brute force" as graph traversal is the standard approach, but maybe just checking every city and starting a search.
    *   *Optimal Approach:*
        *   DFS/BFS: Visit each node; if not visited, start a traversal to mark all reachable nodes as one province. Increment count.
        *   DSU: Union all connected nodes. The number of unique roots equals the number of provinces.
        *   Complexity: $O(n^2)$ time (due to adjacency matrix), $O(n)$ space.
    *   *Aha Moment:* The problem asks for "connected components" in an undirected graph.
    *   *Summary:* Count disconnected clusters in a graph by iterating through all nodes and performing a traversal for each unvisited one.

    *   *Pattern:* Graph Traversal / Disjoint Set Union (DSU).
    *   *Brute Force:* Iterating through every city and performing a full search without tracking visited nodes (redundant and inefficient).
    *   *Optimal Approach:*
        *   *Logic:* Use a `visited` array. Loop through all cities; if a city isn't visited, it's the start of a new province. Use DFS or BFS to mark all reachable cities as visited.
        *   *Complexity:* Time: $O(n^2)$ (must scan the adjacency matrix), Space: $O(n)$ (recursion stack/visited array).
    *   *Aha Moment:* Whenever the problem asks for the number of "connected components" or "isolated groups," it's a signal for DFS, BFS, or DSU.
    *   *Summary:* Use a visited array and a graph traversal to count how many times you need to start a new search to cover all nodes.</thought>### Revision Report: Number of Provinces

- **Pattern**: Graph Traversal (DFS/BFS) or Disjoint Set Union (DSU).
- **Brute Force**: Perform a search from every single node to find all reachable nodes without tracking globally visited states, leading to redundant computations and potential infinite loops in cyclic graphs.
- **Optimal Approach**: 
    - **Logic**: Maintain a `visited` array. Iterate through each city; if it hasn't been visited, increment the province count and trigger a DFS/BFS to mark all cities in that connected component as visited.
    - **Time Complexity**: $O(n^2)$ where $n$ is the number of cities (required to scan the adjacency matrix).
    - **Space Complexity**: $O(n)$ for the `visited` array and recursion stack.
- **The 'Aha' Moment**: The requirement to find "connected components" or "isolated groups" in an undirected graph is a direct signal to use DFS, BFS, or DSU.
- **Summary**: Use a visited array and a traversal algorithm to count how many times a new search must be initiated to cover all nodes in the graph.

---