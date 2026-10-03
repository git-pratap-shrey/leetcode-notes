---
title: "Course Schedule II"
slug: course-schedule-ii
date: "2026-09-29"
---

# My Solution
~~~cpp
class Solution {
public:
    int candy(vector<int>& ratings) {
        vector<int>ans(ratings.size(),1);
        for(int i=1;i<ratings.size();i++){
            if(ratings[i]>ratings[i-1]){
                 ans[i]=ans[i-1]+1;
            }
        }

        for(int i=ratings.size()-2;i>=0;i--){
            if(ratings[i]>ratings[i+1]){
                ans[i]=max(ans[i],ans[i+1]+1);
            }
        }
        int a=0;
        return a=accumulate(ans.begin(),ans.end(),0);
    }
};
~~~

# Submission Review
## Approach
- **Technique**: Greedy / Two-pass approach. The solution performs one forward pass to satisfy left-to-right constraints and one backward pass to satisfy right-to-left constraints.
- **Optimality**: Optimal. This is the standard linear-time approach for this specific problem.

## Complexity
- **Time Complexity**: $O(n)$ where $n$ is the number of elements in `ratings`. The code performs three linear passes (forward, backward, and `accumulate`).
- **Space Complexity**: $O(n)$ to store the `ans` vector.

## Efficiency Feedback
- **Performance**: The runtime and memory usage are optimal for this approach.
- **Minor Optimization**: The final summation can be integrated into the second loop to avoid the call to `std::accumulate`, though this would not change the asymptotic complexity.

## Code Quality
- **Readability**: Moderate. The logic is clear, but there is a significant contradiction between the problem title and the implementation.
- **Structure**: Moderate. The function is named `candy` but the class is provided under the problem "Course Schedule II", which is a completely different problem (Topological Sort).
- **Naming**: Poor. 
    - `ans` is generic; `candies` would be more descriptive.
    - `a` is an unnecessary temporary variable.
- **Concrete Improvements**:
    - **Correct the Context**: The code solves the "Candy" problem, not "Course Schedule II".
    - **Clean up return statement**: Replace `return a=accumulate(...)` with `return accumulate(...)`.
    - **Const Correctness**: `ratings` should be passed as `const vector<int>&`.
    - **Header**: Ensure `<numeric>` is included for `std::accumulate`.

---

# Question Revision
# Revision Report: Course Schedule II

- **Pattern:** Topological Sort (Graph / BFS / DFS)
- **Brute Force:** Try every possible permutation of courses and check if each permutation satisfies all prerequisite constraints. This would result in a catastrophic $O(n! \cdot e)$ complexity.
- **Optimal Approach:** 
    - **Logic:** Use **Kahn's Algorithm (BFS)**. 
        1. Build an adjacency list and an `in-degree` array for all nodes.
        2. Push all nodes with `in-degree == 0` (no prerequisites) into a queue.
        3. While the queue is not empty: pop a node, add it to the result list, and decrement the in-degree of its neighbors.
        4. If a neighbor's in-degree becomes 0, add it to the queue.
        5. If the result list size equals the number of courses, return the list; otherwise, a cycle exists (return empty array).
    - **Complexity:** 
        - **Time:** $O(V + E)$, where $V$ is the number of courses and $E$ is the number of prerequisites.
        - **Space:** $O(V + E)$ to store the adjacency list and in-degree array.
- **The 'Aha' Moment:** The requirement to find a linear ordering based on dependencies (prerequisites) is the textbook definition of a Directed Acyclic Graph (DAG) and Topological Sort.
- **Summary:** Use Kahn's Algorithm (BFS with in-degrees) to order nodes in a DAG and detect cycles.

---