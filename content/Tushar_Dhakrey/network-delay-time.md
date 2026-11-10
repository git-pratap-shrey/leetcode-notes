---
title: "Network Delay Time"
slug: network-delay-time
date: "2026-11-06"
---

# My Solution
~~~java
class Solution {
    static class edge{
        int v, wt;
        edge(int v,int wt){
            this.v = v;
            this.wt = wt;
        }
    }
    public int networkDelayTime(int[][] times, int n, int k) {
        List<List<edge>> g = new ArrayList<>();
        for(int i=0;i<n;i++){
            g.add(new ArrayList<>());
        }
        for(int time[]: times){
            int u = time[0]-1;
            int v = time[1]-1;
            int wt = time[2];
            g.get(u).add(new edge(v,wt));
        }
        int[] dis = djalgo(k-1,g,n);
        int ans = 0;
        for(int d: dis){
            if(d==Integer.MAX_VALUE){
                return -1;
            }
            ans = Math.max(ans,d);
        }
        return ans;

    }
    private int[] djalgo(int src,List<List<edge>> g,int V){
        int[] dis = new int[V];
        Arrays.fill(dis,Integer.MAX_VALUE);
        dis[src] = 0;
        PriorityQueue<int[]> pq = new PriorityQueue<>((a,b)->Integer.compare(a[0],b[0]));
        pq.add(new int[]{0,src});
        while(!pq.isEmpty()){
            int[] curr = pq.poll();
            int u = curr[1];
            if(curr[0]>dis[u]) continue;
            for(edge e: g.get(u)){
                if(dis[u]!=Integer.MAX_VALUE && dis[u]+e.wt<dis[e.v]){
                    dis[e.v] = dis[u] + e.wt;
                    pq.add(new int[]{dis[e.v], e.v});
                }
            }
        }
        return dis;
    }
}
~~~

# Submission Review
## Approach
- **Technique**: Dijkstra's Algorithm using a Priority Queue (Min-Heap).
- **Optimality**: Optimal. Dijkstra is the standard and most efficient approach for single-source shortest paths in a graph with non-negative edge weights.

## Complexity
- **Time Complexity**: $O(E \log V)$, where $E$ is the number of edges and $V$ is the number of nodes. This is due to the priority queue operations for every edge relaxation.
- **Space Complexity**: $O(V + E)$ to store the adjacency list and the distance array.

## Efficiency Feedback
- **Runtime**: The implementation is efficient. The check `if(curr[0] > dis[u]) continue;` correctly prevents processing outdated distance entries in the priority queue, avoiding unnecessary relaxations.
- **Memory**: Memory usage is standard. The use of a custom `edge` class is slightly more overhead than using a primitive 2D array but provides better clarity.

## Code Quality
- **Readability**: Moderate. The logic is clear, but the naming conventions are poor.
- **Structure**: Good. The separation of the graph traversal logic into `djalgo` keeps the main method clean.
- **Naming**: Poor. 
    - `djalgo` is an unclear abbreviation for `dijkstra`.
    - `edge` class starts with a lowercase letter (violates Java naming conventions).
    - `v` and `wt` are acceptable in competitive programming but vague for software engineering.
- **Concrete Improvements**:
    - Rename `djalgo` to `dijkstra`.
    - Rename `edge` to `Edge`.
    - Ensure consistent casing for class names.
    - Use `final` for variables that do not change (e.g., `u`, `v`, `wt` inside loops) to improve intent.

---

# Question Revision
<thought>*   Problem: Network Delay Time (LeetCode).
    *   Goal: Find the minimum time it takes for all nodes to receive a signal from a source node.
    *   Input: Times (edges with weights), n (nodes), k (source).

    *   Pattern: Shortest Path in a Weighted Graph (Single Source Shortest Path - SSSP). Specifically, Dijkstra's Algorithm.

    *   Brute Force: Bellman-Ford (though usually, BFS/DFS isn't feasible for weighted graphs). Bellman-Ford is a common alternative to Dijkstra's for SSSP, but Dijkstra's is the "standard" optimal for non-negative weights. Actually, a naive approach could be DFS with path tracking, but that's exponential. Let's stick to Bellman-Ford as a suboptimal baseline or simply describe a brute-force search.

    *   Optimal Approach:
        *   Logic: Use Dijkstra's algorithm with a min-priority queue. Keep track of the shortest distance from source $k$ to every other node. Once the priority queue is empty, the maximum value in the distance array is the answer. If any node is unreachable, return -1.
        *   Time Complexity: $O(E \log V)$ where $E$ is the number of edges and $V$ is the number of nodes.
        *   Space Complexity: $O(V + E)$ for the adjacency list and priority queue.

    *   Aha Moment: "Minimum time for all nodes to receive a signal" + "weighted edges" $\rightarrow$ Single-Source Shortest Path (Dijkstra).

    *   Summary: Find the shortest path from the source to all nodes and take the maximum of those paths.</thought>### Revision Report: Network Delay Time

- **Pattern:** Single-Source Shortest Path (SSSP) / Dijkstra's Algorithm.
- **Brute Force:** Use Bellman-Ford to relax all edges $n-1$ times; inefficient for graphs without negative weights.
- **Optimal Approach:** 
    - Use a **Min-Priority Queue** to greedily visit the node with the current smallest known distance.
    - Maintain a `dist` array initialized to infinity, with `dist[source] = 0`.
    - For every node popped, update its neighbors' distances if a shorter path is found via the current node.
    - The result is $\max(\text{dist array})$. If any node remains at infinity, return -1.
    - **Time Complexity:** $O(E \log V)$ where $E$ is the number of edges and $V$ is the number of nodes.
    - **Space Complexity:** $O(V + E)$ to store the adjacency list and priority queue.
- **The 'Aha' Moment:** "Minimum time for all nodes to receive a signal" in a weighted graph is a classic request for the shortest path from one source to all other nodes.
- **Summary:** Solve for the shortest path to every node from the source; the answer is the time the last node receives the signal (the maximum of all shortest paths).

---