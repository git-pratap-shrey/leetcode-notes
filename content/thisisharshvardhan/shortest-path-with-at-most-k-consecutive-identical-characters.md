---
title: "Shortest Path With At Most K Consecutive Identical Characters"
slug: shortest-path-with-at-most-k-consecutive-identical-characters
date: "2026-06-21"
---

# My Solution
~~~cpp
class Solution {
public:
    long long shortestPath(int n, vector<vector<int>>& edges, string labels, int k) {
        vector<vector<pair<int,int>>> adj(n);
        for (auto& e : edges)
            adj[e[0]].push_back({e[1], e[2]});

        const long long INF = 1e18;
        vector<vector<long long>> dp(n, vector<long long>(k + 1, INF));
        priority_queue<tuple<long long,int,int>, vector<tuple<long long,int,int>>, greater<>> pq;

        dp[0][1] = 0;
        pq.push({0, 0, 1});

        while (!pq.empty()) {
            auto [d, u, cnt] = pq.top(); pq.pop();

            if (d > dp[u][cnt]) continue;

            for (auto& [v, w] : adj[u]) {
                int nc = (labels[v] == labels[u]) ? cnt + 1 : 1;
                if (nc > k) continue;

                long long nd = d + w;
                if (nd < dp[v][nc]) {
                    dp[v][nc] = nd;
                    pq.push({nd, v, nc});
                }
            }
        }

        long long ans = INF;
        for (int s = 1; s <= k; s++)
            ans = min(ans, dp[n-1][s]);

        return ans == INF ? -1 : ans;
    }
};

~~~

# Submission Review
## Approach
- **Technique**: Dijkstra's Algorithm with state augmentation.
- **State**: The state is defined as `(u, cnt)`, where `u` is the current node and `cnt` is the current number of consecutive identical labels ending at node `u`.
- **Optimality**: Optimal. Since all edge weights are assumed to be non-negative (typical for shortest path problems unless specified otherwise), Dijkstra is the most efficient way to explore the augmented state space.

## Complexity
- **Time Complexity**: $O(E \cdot k \log(n \cdot k))$, where $E$ is the number of edges and $n$ is the number of nodes. Each state $(u, cnt)$ is pushed into the priority queue at most once, and each edge is relaxed for each possible streak value $k$.
- **Space Complexity**: $O(n \cdot k + E)$ to store the `dp` table and the adjacency list.

## Efficiency Feedback
- **Memory**: The `vector<vector<long long>> dp` table consumes $O(n \cdot k)$ space. If $n$ and $k$ are very large (e.g., $n=10^5, k=10^5$), this will cause a Memory Limit Exceeded (MLE) error. In such cases, a `std::map` or a hash table could be used, though it would increase time complexity.
- **Runtime**: The use of `std::tuple` and structured bindings is efficient in C++17. The `greater<>` comparator ensures the priority queue acts as a min-priority queue.

## Code Quality
- **Readability**: Good. The logic is concise and the flow is easy to follow.
- **Structure**: Good. Standard Dijkstra implementation.
- **Naming**: Moderate. While `u`, `v`, `d`, `nd`, `nc` are common in competitive programming, more descriptive names (e.g., `dist`, `next_dist`, `next_count`) would improve maintainability.

**Concrete Improvements**:
1. **Input Validation**: The code assumes $k \ge 1$. If $k=0$ is possible, `dp[0][1]` will cause an out-of-bounds access.
2. **Graph Type**: The code currently treats the graph as **directed**. If the problem specifies an undirected graph, `adj[e[1]].push_back({e[0], e[2]})` must be added.
3. **Edge Case**: If the start node itself cannot satisfy the $k$ constraint (though impossible for $k \ge 1$ since the initial streak is 1), it isn't explicitly checked.

---

# Question Revision
### Shortest Path With At Most K Consecutive Identical Characters

**Pattern:** BFS with Augmented State

**Brute Force:**
Explore all possible paths using DFS and backtracking, tracking the current character and its consecutive count. This results in exponential time complexity $O(4^{R \cdot C})$ as it visits the same cell multiple times via different paths.

**Optimal Approach:**
Use Breadth-First Search (BFS) to find the shortest path. To handle the constraint, augment the state in the `visited` set from `(row, col)` to `(row, col, last_char, current_streak)`. 
1. If the next cell has the same character as the current: increment `streak`. If `streak > K`, the move is invalid.
2. If the next cell has a different character: reset `streak` to 1.
3. Standard BFS queue ensures the first time the destination is reached, it is the shortest path.

*   **Time Complexity:** $O(R \cdot C \cdot K)$ — each cell can be visited up to $K$ times per character.
*   **Space Complexity:** $O(R \cdot C \cdot K)$ — to store the augmented visited states.

**The 'Aha' Moment:**
When the validity of a move depends on the history of the path (the current streak), the state must be augmented to include those variables in the `visited` set.

**Summary:**
Find the shortest path using BFS while incorporating the current character and its consecutive count into the visited state to enforce the $K$-limit.

---