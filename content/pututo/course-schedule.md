---
title: "Course Schedule"
slug: course-schedule
date: "2026-11-03"
---

# My Solution
~~~cpp
class Solution {
public:
    bool canFinish(int numCourses, vector<vector<int>>& prerequisites) {
        vector<vector<int>>adj(numCourses);
        vector<int>ind(numCourses,0);
        queue<int>q;
        int count=0;
        for(auto p:prerequisites){
            int a=p[0];
            int b=p[1];
            adj[b].push_back(a);
            ind[a]++;
        }
        for(int i=0;i<numCourses;i++) {
            if(ind[i]==0) 
                q.push(i);
        }
        while(!q.empty()){
            int t=q.front();
            q.pop();
            count++;
            for(int n:adj[t]){
                ind[n]--;
                if(ind[n]==0)
                q.push(n);
            }
        }
        return count==numCourses;
    }
};
~~~

# Submission Review
## Approach
- **Technique:** Kahn's Algorithm for Topological Sorting (BFS-based).
- **Optimality:** Optimal. Detecting a cycle in a directed graph via in-degree reduction is the standard efficient approach for this problem.

## Complexity
- **Time Complexity:** $O(V + E)$, where $V$ is `numCourses` and $E$ is the number of `prerequisites`. Each node and edge is visited exactly once.
- **Space Complexity:** $O(V + E)$ to store the adjacency list and the in-degree array.

## Efficiency Feedback
- **Runtime:** The implementation is efficient. Using a `std::queue` and an adjacency list ensures linear time complexity.
- **Memory:** Memory usage is minimal and necessary for the graph representation.
- **Optimization:** Minor performance gain could be achieved by using `reserve()` on the adjacency list vectors if $E$ was known to be very large, but it is unnecessary here.

## Code Quality
- **Readability:** Good. The logic follows the standard Kahn's algorithm flow clearly.
- **Structure:** Good. The separation of graph construction, queue initialization, and processing is logical.
- **Naming:** Moderate. Variable names are overly brief (`adj`, `ind`, `p`, `a`, `b`, `t`, `n`). While common in competitive programming, `inDegree`, `course`, and `neighbor` would be more descriptive.
- **Improvements:**
    - Use `const auto& p : prerequisites` in the for-loop to avoid unnecessary copying of the inner vectors.
    - Replace `int a=p[0]; int b=p[1];` with structured bindings for better clarity: `auto& [course, prereq] = p;`.

---

# Question Revision
<thought>*   Problem: Course Schedule (LeetCode).
    *   Goal: Generate a revision report for study notes.
    *   Constraints: Senior DSA trainer persona, concise, high-signal Markdown, Big-O notation ($O(n)$), 'Aha' moment strictly one sentence, no intro pleasantries.

    *   Problem involves courses and prerequisites (dependencies).
    *   It's a classic Graph problem. Specifically, detecting a cycle in a directed graph.
    *   Pattern: Topological Sort / Cycle Detection.

    *   *Brute Force:* Try all permutations of courses to see if any satisfy the prerequisites. (Inefficient, factorial complexity). Or, a simple DFS from every node without tracking the recursion stack properly (though that's closer to the optimal). Let's go with "Checking every possible sequence of courses."

    *   *Optimal Approach:*
        *   Kahn's Algorithm (BFS) or DFS cycle detection.
        *   Kahn's Logic: Compute in-degrees. Push nodes with 0 in-degree into a queue. Process them, reducing in-degrees of neighbors. If the number of processed nodes equals total courses, it's a DAG (no cycle).
        *   Time Complexity: $O(V + E)$ where $V$ is courses and $E$ is prerequisites.
        *   Space Complexity: $O(V + E)$ for the adjacency list and in-degree array.

    *   *The 'Aha' Moment:* The presence of dependencies (Prerequisites $\to$ Course) indicates a Directed Graph, and the ability to complete the sequence depends on the absence of cycles.

    *   *Summary:* If a directed graph has a cycle, a topological ordering is impossible.

    *   Pattern: Topological Sort / Cycle Detection.
    *   Brute Force: Test all $n!$ permutations of courses to check if prerequisites are met for each.
    *   Optimal Approach: Use Kahn's Algorithm (BFS); maintain in-degrees of nodes, process nodes with 0 in-degree, and count if all nodes are visited. Time: $O(V + E)$, Space: $O(V + E)$.
    *   Aha Moment: "Prerequisites" define directed edges, and "can you finish" asks if the graph is a Directed Acyclic Graph (DAG).
    *   Summary: Use Kahn's Algorithm or DFS to detect cycles in a directed graph.</thought>### Course Schedule - Revision Report

- **Pattern**: Topological Sort / Cycle Detection in Directed Graph.
- **Brute Force**: Generate all $n!$ permutations of courses and check if each sequence satisfies the prerequisite constraints.
- **Optimal Approach**: 
    - **Logic**: Use **Kahn's Algorithm (BFS)**. Compute the in-degree of every node. Queue all nodes with an in-degree of 0. While the queue is not empty, pop a node, increment a counter, and decrement the in-degree of its neighbors. If a neighbor's in-degree reaches 0, add it to the queue. If the final counter equals the total number of courses, no cycle exists.
    - **Time Complexity**: $O(V + E)$
    - **Space Complexity**: $O(V + E)$ (to store the adjacency list and in-degree array).
- **The 'Aha' Moment**: The term "prerequisites" defines directed edges, and the question "can you finish" is a direct ask for whether the graph is a Directed Acyclic Graph (DAG).
- **Summary**: A course schedule is possible if and only if the dependency graph contains no cycles.

---