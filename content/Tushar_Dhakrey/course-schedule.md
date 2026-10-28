---
title: "Course Schedule"
slug: course-schedule
date: "2026-10-28"
---

# My Solution
~~~java
class Solution {
    public boolean canFinish(int n, int[][] E) {
        boolean[] vis = new boolean[n];
        boolean[] rec = new boolean[n];
        for(int i=0;i<n;i++){
            if(!vis[i]){
                if(iscycle(i,vis,rec,E)){
                    return false;
                }
            }
        }
        return true;
    }
    boolean iscycle(int src, boolean[] vis, boolean[] rec, int[][] E){
        vis[src] = true;
        rec[src] = true;
        for(int i=0;i<E.length;i++){
            int u = E[i][0];
            int v = E[i][1];
            if(u==src){
                if(!vis[v]){
                    if(iscycle(v,vis,rec,E)) return true;
                }
                else if(rec[v]){
                    return true;
                }
            }
            
        }
        rec[src] = false;
        return false;
    }
}
~~~

# Submission Review
## Approach
- **Technique**: Depth First Search (DFS) for cycle detection in a directed graph using recursion stacks (`rec` array) and a visited array (`vis`).
- **Optimality**: **Suboptimal**. While the cycle detection logic is correct, the graph representation is inefficient.

## Complexity
- **Time Complexity**: $O(N \cdot E)$, where $N$ is the number of courses and $E$ is the number of edges.
    - **Reason**: For every node visited in the DFS, the code iterates through the entire edge list `E` to find neighbors (`for(int i=0;i<E.length;i++)`).
- **Space Complexity**: $O(N)$.
    - **Reason**: Uses two boolean arrays of size $N$ and the recursion stack depth can go up to $N$.

## Efficiency Feedback
- **Bottleneck**: The primary bottleneck is the lack of an Adjacency List. Searching the entire edge array inside the recursive function turns a standard $O(N+E)$ DFS into $O(N \cdot E)$.
- **Optimization**: Convert the `int[][] E` input into an `ArrayList<Integer>[]` or `List<List<Integer>>` before starting the DFS to reduce neighbor lookup from $O(E)$ to $O(\text{out-degree})$.

## Code Quality
- **Readability**: Moderate. The logic is easy to follow, but the lack of whitespace makes it cramped.
- **Structure**: Moderate. The recursive helper is separate, but the graph traversal is intertwined with edge filtering.
- **Naming**: Poor. 
    - `E` is too generic (should be `prerequisites` or `edges`).
    - `vis` and `rec` are abbreviated (should be `visited` and `recursionStack`).
    - `iscycle` should follow camelCase (`isCycle`).
- **Concrete Improvements**:
    1. Implement an Adjacency List.
    2. Use descriptive variable names.
    3. Follow Java camelCase naming conventions.

---

# Question Revision
# Revision Report: Course Schedule

- **Pattern**: Graph / Topological Sort (Cycle Detection)
- **Brute Force**: Attempt every possible permutation of courses to see if a valid sequence exists. This is computationally impossible ($O(n!)$) as the number of courses increases.
- **Optimal Approach**: 
    - **Logic**: Use **Kahn's Algorithm (BFS)**. 
        1. Build an adjacency list and an `in-degree` array (counting prerequisites for each course).
        2. Queue all courses with an `in-degree` of 0 (courses with no prerequisites).
        3. While the queue is not empty, pop a course, increment a counter, and reduce the `in-degree` of its neighbors.
        4. If a neighbor's `in-degree` becomes 0, add it to the queue.
        5. If the final counter equals the total number of courses, no cycle exists.
    - **Complexity**: 
        - **Time**: $O(V + E)$ where $V$ is courses and $E$ is prerequisites.
        - **Space**: $O(V + E)$ to store the graph.
- **The 'Aha' Moment**: Whenever a problem describes "dependencies" or "prerequisites" and asks if a sequence is possible, it is a request to detect a cycle in a Directed Acyclic Graph (DAG).
- **Summary**: Use Kahn's BFS (in-degree) or DFS (recursion stack) to ensure the dependency graph contains no cycles.

---