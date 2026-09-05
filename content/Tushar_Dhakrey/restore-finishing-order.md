---
title: "Restore Finishing Order"
slug: restore-finishing-order
date: "2026-08-28"
---

# My Solution
~~~java
class Solution {
    public int[] recoverOrder(int[] order, int[] friends) {
        int n = friends.length;
        int[] recover = new int[n];
        HashSet<Integer> set = new HashSet<>();
        for(int i=0;i<n;i++){
            set.add(friends[i]);
        }
        int j=0;
        for(int i=0;i<order.length;i++){
            if(set.contains(order[i])){
                recover[j] = order[i];
                j++;
            }
        }
        return recover;
    }
}
~~~

# Submission Review
## Approach
*   **Technique**: Filtering using a Hash Set. 
*   **Optimal**: Yes. The problem requires identifying which elements from the `order` array exist in the `friends` set while maintaining their relative order. This is a linear scan approach, which is optimal for the given constraints.

## Complexity
*   **Time Complexity**: $O(N + M)$, where $N$ is the length of `order` and $M$ is the length of `friends`. Inserting into the `HashSet` takes $O(M)$, and the traversal of `order` takes $O(N)$.
*   **Space Complexity**: $O(M)$ to store the `friends` array in the `HashSet`.

## Efficiency Feedback
*   **Performance**: The solution is efficient. Using `HashSet` provides $O(1)$ average time complexity for lookups.
*   **Optimization**: If `friends` values are within a known small integer range, a `boolean[]` or `BitSet` could replace the `HashSet` to reduce overhead and improve cache locality, though this is only necessary if $M$ is very large and memory is constrained.

## Code Quality
*   **Readability**: Good. The logic is straightforward and easy to follow.
*   **Structure**: Good. The separation of initialization and logic is clear.
*   **Naming**: Moderate. While functional, `recover` (as an array name) is a verb; `result` or `restoredOrder` would be more conventional. `order` and `friends` are descriptive enough.
*   **Concrete Improvements**: 
    *   Consider using a `HashSet<Integer>(n)` constructor with an initial capacity to avoid resizing overhead.
    *   The current implementation assumes that the number of elements in `friends` exactly matches the number of elements in `order` that are present in `friends`. If this contract is guaranteed, the code is fine. If not, consider adding a check or defensive programming.

---

# Question Revision
### Revision Report: Restore Finishing Order (Topological Sort)

**Pattern:** Topological Sort (Kahn’s Algorithm / DFS-based)

**Brute Force:** Generate all possible permutations of the finishing order ($O(n!)$) and validate each against the given constraints (e.g., relative finish times or dependency rules).

**Optimal Approach:** Represent constraints as a Directed Acyclic Graph (DAG) where an edge $u \to v$ signifies $u$ must finish before $v$. Use Kahn’s algorithm (in-degree tracking):
1. Calculate in-degrees for all nodes.
2. Initialize a queue with all nodes having an in-degree of 0.
3. Iteratively remove nodes from the queue, adding them to the result and decrementing the in-degree of their neighbors.
4. **Complexity:** $O(V + E)$ time and $O(V + E)$ space, where $V$ is the number of participants and $E$ is the number of constraints.

**The 'Aha' Moment:** The requirement to maintain a global ordering based on *precedence constraints* between pairs is the unmistakable signature of a Directed Acyclic Graph.

**Summary:** Whenever you see dependencies that imply a linear sequence, model it as a DAG and perform a topological sort to resolve the order.

---