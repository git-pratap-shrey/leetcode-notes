---
title: "Cheapest Flights Within K Stops"
slug: cheapest-flights-within-k-stops
date: "2026-11-05"
---

# My Solution
~~~java
class Solution {
    public int findCheapestPrice(int n, int[][] flights, int src, int dst, int k) {
        List<List<int[]>> graph = new ArrayList<>();
        for(int i=0;i<n;i++){
            graph.add(new ArrayList<>());
        }
        for(int[] flight : flights){
            int u = flight[0];
            int v = flight[1];
            int wt = flight[2];
            graph.get(u).add(new int[]{v,wt});
        }
        Queue<int[]> q = new LinkedList<>();
        int[] dist = new int[n];
        Arrays.fill(dist,Integer.MAX_VALUE);
        dist[src] = 0;
        q.offer(new int[]{src,0,-1});
        while(!q.isEmpty()){
            int[] curr = q.poll();
            int u = curr[0];
            int cost = curr[1];
            int stop = curr[2];
            for(int[] edge:graph.get(u)){
                int v = edge[0];
                int wt = edge[1];
                if(cost+wt<dist[v] && stop+1<=k){
                    dist[v] = cost+wt;
                    q.offer(new int[]{v,dist[v],stop+1});
                }
            }
        }
        if(dist[dst]==Integer.MAX_VALUE){
            return -1;
        }
        return dist[dst];
    }
}
~~~

# Submission Review
<thought>*   Problem: Cheapest Flights Within K Stops.
    *   Input: `n` (nodes), `flights` (*   Problem: Cheapest Flights Within K Stops.
    *   Input: `n` (nodes), `flights` (edges with weights), `src` (start), `dst` (end), `k` (max stops).
    *   Goal: Find the minimum cost to get from `src` to `dst` with at most `k` stops.

    *   Graph representation: Adjacency list (`List<List<int[]>>`).
    *   Algorithm: A modified Breadth-First Search (BFS) using a queue.
    *   State in queue: `[current_node, current_cost, stops_taken]`.
    *   Pruning condition: `if(cost + wt < dist[v] && stop + 1 <= k)`.
    *   Wait, looking closer at the queue initialization: `q.offer(new int[]{src, 0, -1});`.
    *   The condition `stop + 1 <= k` ensures the number of stops doesn't exceed $k$.
    *   The `dist` array stores the minimum cost found so far to reach node $v$.

    *   *Correctness:*
        *   Does it handle the "at most k stops" correctly?
        *   The code uses a distance array `dist[v]` to prune.
        *   *Potential Issue:* Standard Dijkstra uses a PriorityQueue for cost. This code uses a `LinkedList` (Queue).
        *   *Critical Bug:* In "Cheapest Flights Within K Stops", a path might have a higher cost but fewer stops, potentially allowing it to reach the destination within the limit while a cheaper path exceeds the limit.
        *   In this code, `if(cost + wt < dist[v] && stop + 1 <= k)` only updates `dist[v]` if the cost is strictly less. If a path arrives at $v$ with a slightly higher cost but significantly fewer stops, it is discarded. This is a known pitfall for this specific problem.
        *   However, the code uses BFS. In a standard BFS, you process by levels (stops). If we process level by level, the first time we hit a node, it's the minimum stops. But we want minimum cost.
        *   Wait, the queue contains `[u, cost, stop]`. The condition `stop + 1 <= k` is checked.
        *   Actually, the logic `cost + wt < dist[v]` is risky here because `dist[v]` should ideally track the minimum cost *at a specific stop count* or the distance array should be handled like Bellman-Ford.
        *   Let's re-evaluate: If a cheaper path is found but it uses $k$ stops, and a more expensive path is found that uses $k-1$ stops, the more expensive path might be the only one capable of reaching the destination. But since this code updates `dist[v]` only on a cost decrease, it might block the valid path.
        *   *Self-Correction:* In this specific implementation, the BFS queue processes paths. Since it's a `LinkedList` and not a `PriorityQueue`, it's essentially a modified Bellman-Ford/SPFA. The distance array `dist[v]` acts as a global minimum. This can lead to incorrect results if a path with more stops is cheaper but blocks a path with fewer stops that is necessary to reach the destination.

    *   *Complexity:*
        *   Time: In the worst case, it's like SPFA. With $k$ stops, each node can be added to the queue multiple times.
        *   Space: $O(V + E)$ for graph and $O(V)$ for distance array.

    *   *Code Quality:*
        *   Readable, standard naming.
        *   Structure is clean.

    *   Approach: Modified BFS/SPFA.
    *   Optimality: Suboptimal/Incorrect. The `dist` array pruning based solely on cost without considering the number of stops can lead to incorrect results.
    *   Complexity: Time $O(K \cdot E)$, Space $O(V + E)$.</thought>## Approach
- **Technique**: Modified Breadth-First Search (BFS) / SPFA-like approach.
- **Optimality**: **Suboptimal/Incorrect**. The solution uses a global `dist` array to prune paths based solely on cost (`cost + wt < dist[v]`). In this specific problem, a path with a higher cost but fewer stops might be the only way to reach the destination within the $K$ limit. By pruning based only on cost, the algorithm may discard a viable path that could have reached the destination, leading to an incorrect result or `-1`.

## Complexity
- **Time Complexity**: $O(K \cdot E)$, where $E$ is the number of flights. In the worst case, each edge is relaxed up to $K$ times.
- **Space Complexity**: $O(V + E)$ to store the adjacency list and the distance array.

## Efficiency Feedback
- **Pruning Logic**: The condition `if(cost + wt < dist[v] && stop + 1 <= k)` is too aggressive. To be correct, the distance should either be tracked per stop count (like Bellman-Ford) or the pruning should allow paths with fewer stops even if they are more expensive.
- **Queue Choice**: Using a `LinkedList` results in a level-order traversal. For shortest path problems with weights, a `PriorityQueue` (Dijkstra) is typically preferred, though here the constraint is on stops, making BFS/Bellman-Ford more appropriate.

## Code Quality
- **Readability**: Good. The logic is easy to follow and the flow is linear.
- **Structure**: Good. Graph construction is separated from the traversal logic.
- **Naming**: Good. Variables like `u`, `v`, `wt`, and `dist` are standard in graph theory.

**Concrete Improvements**:
1. **Fix Correctness**: Use a 2D array `dist[node][stops]` or implement the Bellman-Ford algorithm for exactly $K+1$ iterations to ensure paths with fewer stops are not prematurely discarded.
2. **Edge Case**: The initialization `stop = -1` is a clever way to handle the "at most $K$ stops" (which means $K+1$ edges), but it makes the logic slightly harder to read. Using `edgesCount` would be more intuitive.

---

# Question Revision
<thought>*   Problem: Cheapest Flights Within K Stops (LeetCode).
    *   Goal: Revision report in Markdown.
    *   Constraint: Senior DSA trainer persona, concise, high-signal, Big-O notation, 1-sentence 'Aha' moment, no intro pleasantries.

    *   Graph problem.
    *   Find the shortest path (cheapest cost) from source to destination.
    *   Constraint: Maximum $K$ stops.
    *   Standard Dijkstra doesn't quite work because a longer path (more stops) might be cheaper, but if it exceeds $K$, it's invalid. However, we can track stops in the state.
    *   Better approach for "fixed number of edges/steps": Bellman-Ford or BFS.

    *   *Pattern:* BFS / Modified Dijkstra / Bellman-Ford. (BFS is most intuitive for "K steps").
    *   *Brute Force:* Recursive DFS exploring all paths from source to destination, keeping track of cost and stops, pruning paths that exceed $K$.
    *   *Optimal Approach:* Use BFS with a `dist` array. Each level of BFS corresponds to one stop. We update distances only if a cheaper path is found within the current stop limit.
        *   *Time Complexity:* $O(K \cdot E)$, where $E$ is the number of edges.
        *   *Space Complexity:* $O(V)$, where $V$ is the number of vertices.

    *   *The 'Aha' Moment:* "Within $K$ stops" implies a constraint on the number of edges, which suggests a Breadth-First Search (layer by layer) or Bellman-Ford (iterative relaxation up to $k+1$ times).

    *   *Summary:* Use BFS or Bellman-Ford to find the cheapest path while restricting the number of edge relaxations to $K+1$.</thought>### Revision Report: Cheapest Flights Within K Stops

- **Pattern**: Breadth-First Search (BFS) / Modified Bellman-Ford.
- **Brute Force**: Recursive DFS exploring all possible paths from source to destination, pruning any path that exceeds $K$ stops or the current minimum cost.
- **Optimal Approach**: Use a queue-based BFS to explore the graph level by level. Maintain a `dist` array to track the minimum cost to reach each city. Only push a neighbor into the queue if the new path is cheaper than the previously recorded cost for that city. Stop the BFS after $K+1$ iterations (levels).
    - **Time Complexity**: $O(K \cdot E)$ where $E$ is the number of edges.
    - **Space Complexity**: $O(V)$ to store the minimum distances.
- **The 'Aha' Moment**: The constraint "Within $K$ stops" transforms the problem from a standard shortest path (Dijkstra) into a shortest path with a maximum edge limit, signaling a level-order traversal or iterative relaxation.
- **Summary**: Solve as a shortest path problem but limit the relaxation process to exactly $K+1$ iterations to respect the stop constraint.

---