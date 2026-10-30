---
title: "Min Cost to Connect All Points"
slug: min-cost-to-connect-all-points
date: "2026-10-30"
---

# My Solution
~~~java
class Solution {
    private int mandist(int[][] points,int p1,int p2){
        return Math.abs(points[p1][0]-points[p2][0]) + Math.abs(points[p1][1]-points[p2][1]);
    }
    public int minCostConnectPoints(int[][] points) {
        int n = points.length;
        boolean[] mst = new boolean[n];
        int mincost = 0;
        PriorityQueue<int[]> pq = new PriorityQueue<>((a,b)->Integer.compare(a[0],b[0]));
        pq.add(new int[]{0,0});
        while(!pq.isEmpty()){
            int[] curr = pq.poll();
            int wt = curr[0];
            int node = curr[1];
            if(mst[node]) continue;
            mst[node] = true;
            mincost += wt;
            for(int i=0;i<n;i++){
                int edgewt = mandist(points,node,i);
                pq.add(new int[]{edgewt,i});
            }
        }
        return mincost;
    }
}
~~~

# Submission Review
## Approach
- **Technique:** Prim's Algorithm using a Priority Queue.
- **Optimality:** Suboptimal. While Prim's is correct for MST, using a `PriorityQueue` for a dense graph (where every point is connected to every other point) results in higher complexity than the array-based Prim's implementation.

## Complexity
- **Time Complexity:** $O(N^2 \log N)$. The `while` loop runs for $N$ nodes, and for each node, $N$ edges are added to the Priority Queue. Each PQ operation takes $O(\log(\text{edges}))$, leading to $O(N^2 \log N)$.
- **Space Complexity:** $O(N^2)$. In the worst case, the Priority Queue stores nearly all possible edges between points.

## Efficiency Feedback
- **Bottleneck:** The Priority Queue is overkill for this dense graph. Since $E = N^2$, a simple array-based Prim's algorithm (keeping track of the minimum distance from the MST to each outside node) would reduce time complexity to $O(N^2)$ and space to $O(N)$.
- **Memory:** High memory usage due to storing `int[]` objects in the `PriorityQueue` for every single edge encounter.

## Code Quality
- **Readability:** Good. The logic is straightforward and follows standard MST patterns.
- **Structure:** Good. Helper method `mandist` correctly encapsulates the Manhattan distance logic.
- **Naming:** Moderate. `mst` is used as a name for the `visited` array; `visited` would be more accurate. `mandist` is clear enough.
- **Improvements:** 
    - Use a `visited` array instead of naming it `mst`.
    - Implement the $O(N^2)$ Prim's variant to avoid $O(N^2 \log N)$ overhead and reduce space from $O(N^2)$ to $O(N)$.

---

# Question Revision
### Revision Report: Min Cost to Connect All Points

- **Pattern:** Minimum Spanning Tree (MST)
- **Brute Force:** Generate all possible combinations of edges to form a connected graph and calculate the total weight for each, picking the minimum. This is computationally impossible due to the exponential number of spanning trees (Cayley's Formula).
- **Optimal Approach:** 
    - **Logic:** Use **Prim's Algorithm** or **Kruskal's Algorithm**. For a dense graph (where every point can connect to every other point), Prim's is generally more efficient. Start from an arbitrary node, greedily add the cheapest edge that connects a node inside the MST to a node outside the MST using a Min-Priority Queue.
    - **Time Complexity:** $O(E \log V)$ or $O(n^2 \log n)$ since $E = n^2$.
    - **Space Complexity:** $O(n)$ to store visited nodes and the priority queue.
- **The 'Aha' Moment:** The requirement to "connect all points" with the "minimum cost" is the textbook definition of finding a Minimum Spanning Tree.
- **Summary:** Use Prim's or Kruskal's to greedily connect all nodes with the lowest total edge weight.

---