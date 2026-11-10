---
title: "Course Schedule II"
slug: course-schedule-ii
date: "2026-11-03"
---

# My Solution
~~~cpp
class Solution {
public:
    vector<int> findOrder(int numCourses, vector<vector<int>>& prerequisites) {
        vector<vector<int>>adj(numCourses);
        vector<int>ind(numCourses,0);
        vector<int>ans;
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
            ans.push_back(t);
            for(int n:adj[t]){
                ind[n]--;
                if(ind[n]==0)
                q.push(n);
            }
        }
        if(ans.size()==numCourses)
        return ans;
    
      return {};
    }
};
~~~

# Submission Review
<thought>Course Schedule II (find topological sort order of courses).
C++.
Kahn's Algorithm (BFS-based topological sort).

    *   `adj` list: `vector<vector<int>>adj(numCourses)`.
    *   In-degree array: `vector<int>ind(numCourses, 0)`.
    *   Queue for nodes with 0 in-degree.
    *   Logic:
        1. Build adjacency list and calculate in-degrees.
        2. Push nodes with in-degree 0 into the queue.
        3. Process queue, adding nodes to `ans` and decrementing neighbors' in-degrees.
        4. If a neighbor's in-degree becomes 0, push it to the queue.
        5. Check if `ans.size() == numCourses` to detect cycles.

    *   *Approach:* Kahn's Algorithm. This is optimal for topological sorting.
    *   *Complexity:*
        *   Time: $O(V + E)$, where $V$ is `numCourses` and $E$ is `prerequisites.size()`.
        *   Space: $O(V + E)$ for the adjacency list and auxiliary arrays.
    *   *Efficiency:* It's efficient. No obvious bottlenecks.
    *   *Code Quality:*
        *   Readability: Good, though naming is very terse (`a`, `b`, `t`, `n`, `ind`).
        *   Structure: Standard and clean.
        *   Naming: Poor/Moderate. Variable names are too short.

    *   Avoid generic theory.
    *   Concise and structured.
    *   Follow the specific Markdown output format.</thought>## Approach
- **Technique:** Kahn's Algorithm (BFS-based Topological Sort).
- **Optimality:** Optimal. It correctly identifies a valid ordering or detects a cycle in linear time.

## Complexity
- **Time Complexity:** $O(V + E)$, where $V$ is `numCourses` and $E$ is the number of `prerequisites`. Each node and edge is processed exactly once.
- **Space Complexity:** $O(V + E)$ to store the adjacency list and the in-degree array.

## Efficiency Feedback
- **Runtime/Memory:** The implementation is highly efficient.
- **Optimization:** Using `std::vector<int> adj[numCourses]` instead of `vector<vector<int>>` could slightly reduce overhead, but for competitive programming, the current approach is standard and acceptable.

## Code Quality
- **Readability:** Moderate. The logic is clear, but variable names are overly terse.
- **Structure:** Good. The flow from graph construction $\rightarrow$ initialization $\rightarrow$ processing $\rightarrow$ validation is logical.
- **Naming:** Poor. 
    - `ind` $\rightarrow$ `inDegree`
    - `adj` $\rightarrow$ `adjacencyList`
    - `t` $\rightarrow$ `currCourse`
    - `n` $\rightarrow$ `neighbor`
    - `a`, `b` $\rightarrow$ `course`, `prereq`
- **Concrete Improvements:** 
    - Replace `auto p:prerequisites` with `const auto& p` to avoid unnecessary copying of vectors.
    - Use `reserve()` on the `ans` vector (`ans.reserve(numCourses)`) to prevent multiple reallocations.

---

# Question Revision
<thought>*   Problem: Course Schedule II (LeetCode).
    *   Goal: Revision report for a student (mentored by a senior DSA trainer).
    *   Format: Concise, high-signal Markdown.
    *   Constraints: Big-O notation, one-sentence 'Aha' moment, no pleasantries.
    *   Required sections: Pattern, Brute Force, Optimal Approach (Logic + Complexity), The 'Aha' Moment, Summary.

    *   Input: Number of courses, list of prerequisites (pairs).
    *   Goal: Return the order of courses to finish them, or an empty array if it's impossible (cycle exists).
    *   Key concept: Directed Acyclic Graph (DAG), Topological Sort.

    *   *Pattern:* Topological Sort (Kahn's Algorithm or DFS).
    *   *Brute Force:* Try every permutation of courses and check if prerequisites are met. Complexity: $O(n! \cdot p)$.
    *   *Optimal Approach:*
        *   Logic: Use Kahn's Algorithm. Calculate in-degrees for all nodes. Push nodes with in-degree 0 into a queue. Process nodes: remove them from the queue, add to the result list, and decrement the in-degree of their neighbors. If a neighbor's in-degree becomes 0, add it to the queue. If the result list length is less than $n$, a cycle exists.
        *   Time Complexity: $O(V + E)$, where $V$ is the number of courses and $E$ is the number of prerequisites.
        *   Space Complexity: $O(V + E)$ to store the adjacency list and in-degree array.
    *   *The 'Aha' Moment:* Prerequisites create a directed dependency graph where you must complete one task before another, which is the textbook definition of a Topological Sort.
    *   *Summary:* Use Kahn's Algorithm (in-degree queue) to order dependencies and detect cycles in a directed graph.

    *   Ensure Markdown is clean.
    *   Ensure $O(n)$ format.
    *   Check the "one sentence" constraint for 'Aha' and 'Summary'.</thought>### Revision Report: Course Schedule II

- **Pattern:** Topological Sort (Graph)
- **Brute Force:** Generate all possible permutations of courses and check if each permutation satisfies the prerequisite constraints. Complexity: $O(n! \cdot p)$.
- **Optimal Approach:** 
    - **Logic:** Use **Kahn’s Algorithm** (BFS). 
        1. Build an adjacency list and an `in-degree` array (counting incoming edges for each node).
        2. Initialize a queue with all nodes having `in-degree == 0`.
        3. While the queue is not empty, pop a node, add it to the topological order, and decrement the `in-degree` of its neighbors. 
        4. If a neighbor's `in-degree` reaches 0, push it to the queue.
        5. If the final order contains all $n$ courses, return it; otherwise, a cycle exists (return empty array).
    - **Time Complexity:** $O(V + E)$
    - **Space Complexity:** $O(V + E)$
- **The 'Aha' Moment:** The requirement to order tasks based on dependencies ("do X before Y") is a direct signal for Topological Sort in a Directed Acyclic Graph (DAG).
- **Summary:** Use Kahn's Algorithm (in-degree queue) to linearize dependencies and detect cycles in a directed graph.

---