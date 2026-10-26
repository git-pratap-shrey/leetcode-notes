---
title: "Flatten Binary Tree to Linked List"
slug: flatten-binary-tree-to-linked-list
date: "2026-10-22"
---

# My Solution
~~~java
class Solution {
    public int canCompleteCircuit(int[] gas, int[] cost) {
        int tank = 0;
        int total = 0;
        int start = 0;
        for(int i=0;i<gas.length;i++){
            int diff = gas[i]-cost[i];
            total += diff;
            tank += diff;
            if(tank<0){
                start = i+1;
                tank = 0;
            }
        }
        return total>=0? start: -1;
    }
}
~~~

# Submission Review
## Approach
- **Technique:** Greedy.
- **Correctness:** The logic correctly identifies the starting point by resetting the `tank` whenever it becomes negative and verifying the total gas balance at the end.
- **Optimality:** Optimal. It solves the problem in a single pass.

**Critical Error:** The provided code is for the **"Gas Station"** problem, but the problem statement requested is **"Flatten Binary Tree to Linked List"**. The solution is entirely irrelevant to the specified problem.

## Complexity
- **Time Complexity:** $O(n)$, where $n$ is the length of the `gas` array.
- **Space Complexity:** $O(1)$ as it uses a constant amount of extra space.

## Efficiency Feedback
- The runtime is optimal for the Gas Station problem.
- No further optimizations are needed for this specific algorithm.

## Code Quality
- **Readability:** Good. The logic is concise and follows standard competitive programming patterns.
- **Structure:** Good. The single-loop structure is appropriate.
- **Naming:** Moderate. `tank` and `total` are clear, but `diff` is generic (though acceptable in this context).
- **Improvements:** 
    - Fix the mismatch between the problem statement and the implementation.
    - Use `final` for variables that do not change if applicable, though unnecessary for competitive programming.

---

# Question Revision
# Revision Report: Flatten Binary Tree to Linked List

### Pattern
**Tree Traversal / Post-order Traversal (Reverse)**

### Brute Force
Perform a standard Pre-order traversal (Root $\rightarrow$ Left $\rightarrow$ Right) to store all nodes in a list. Then, iterate through the list to rewire every node's `left` to `null` and `right` to the next node in the list.

### Optimal Approach
**Logic:** Use a **Reverse Post-order Traversal** (Right $\rightarrow$ Left $\rightarrow$ Root). By visiting the rightmost node first and keeping track of the `previously visited node`, we can link the current node's `right` pointer to that previous node and set its `left` pointer to `null`. This effectively builds the linked list from the tail back to the head.

- **Time Complexity:** $O(n)$ — Every node is visited exactly once.
- **Space Complexity:** $O(h)$ — Where $h$ is the height of the tree (recursion stack).

### The 'Aha' Moment
The requirement to maintain a "pre-order" sequence while modifying pointers in-place suggests that processing the nodes in reverse order avoids losing references to child nodes.

### Summary
To flatten a tree into a pre-order list in-place, traverse in **Right $\rightarrow$ Left $\rightarrow$ Root** order and link each node to the one processed immediately before it.

---