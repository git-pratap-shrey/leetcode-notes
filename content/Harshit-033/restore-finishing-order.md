---
title: "Restore Finishing Order"
slug: restore-finishing-order
date: "2026-09-21"
---

# My Solution
~~~cpp
class Solution{
public:
    vector<int> recoverOrder(vector<int>&order,vector<int>&friends){
        int n=order.size();
        vector<int>arr(n+1,0);
        for(int i:friends)arr[i]=1;
        vector<int>ans;
        for(int i:order){
            if(arr[i])ans.push_back(i);
        }
        return ans;
    }
};
~~~

# Submission Review
## Approach
- **Technique**: Filtering using a boolean lookup table (frequency array).
- **Optimality**: Optimal. It preserves the relative order of elements as they appear in the original sequence while ensuring linear time complexity.

## Complexity
- **Time Complexity**: $O(n + f)$, where $n$ is the size of `order` and $f$ is the size of `friends`. Each vector is traversed at most twice.
- **Space Complexity**: $O(n)$, required for the lookup array `arr`.

## Efficiency Feedback
- The runtime is minimal.
- **Potential Bottleneck**: The use of `vector<int> arr(n+1, 0)` assumes that the values within `order` and `friends` are bounded by $n$. If the IDs are large or sparse, this will cause a segmentation fault or excessive memory usage. In such cases, a `std::unordered_set<int>` would be necessary.

## Code Quality
- **Readability**: Good. The logic is straightforward and concise.
- **Structure**: Good.
- **Naming**: Moderate. `arr` is a generic name; `is_friend` or `exists` would more clearly describe its purpose.
- **Improvements**:
    - Replace `vector<int> arr` with `vector<bool>` to reduce the memory footprint.
    - Add a check or use a hash set if the input values can exceed the size of the `order` vector.

---

# Question Revision
### Revision Report: Restore Finishing Order

**Pattern:** Topological Sort (Kahn's Algorithm / DFS)

**Brute Force:** 
Generate all $n!$ possible permutations of the participants and validate each against the given constraints.
- **Complexity:** $O(n! \cdot m)$, where $n$ is the number of participants and $m$ is the number of constraints.

**Optimal Approach:** 
Represent the finishing constraints as a Directed Acyclic Graph (DAG) where an edge $u \to v$ means $u$ finished before $v$. Use Kahn's Algorithm:
1. Calculate the **in-degree** of every node.
2. Initialize a queue with all nodes having an in-degree of 0.
3. While the queue is not empty:
    - Pop a node, add it to the final order.
    - For each neighbor, decrement its in-degree; if it hits 0, push it to the queue.
4. If the final order contains fewer than $n$ nodes, a cycle exists (no valid order).

- **Time Complexity:** $O(V + E)$
- **Space Complexity:** $O(V + E)$

**The 'Aha' Moment:** 
The phrase "finished before" establishes a directional dependency, signaling that the problem is about ordering nodes in a DAG.

**Summary:** 
Model dependencies as a graph and use Topological Sort to find a linear sequence that satisfies all precedence constraints.

---