---
title: "Rotate List"
slug: rotate-list
date: "2026-06-12"
---

# My Solution
~~~

~~~

# Submission Review
## Approach
- **Technique**: Linked list manipulation using a circular pointer strategy.
- **Optimality**: Optimal. The solution requires calculating the length of the list to handle cases where $k \ge \text{length}$ and to locate the exact break point.

## Complexity
- **Time Complexity**: $O(N)$, where $N$ is the number of nodes in the list. The list is traversed at most twice (once to find length/tail, once to find the new tail).
- **Space Complexity**: $O(1)$. Only a constant amount of extra space is used for pointers.

## Efficiency Feedback
- **Runtime**: The runtime is minimal as it performs a linear scan.
- **Memory**: Memory usage is optimal since the rotation is performed in-place without allocating new nodes.
- **Optimization**: The early exit `if (k == 0) return head;` after the modulo operation is a good optimization to avoid unnecessary pointer manipulation.

## Code Quality
- **Readability**: Good. The logic follows a clear, linear progression.
- **Structure**: Good. Edge cases are handled upfront, and the transition from a linear list to a circular list and back to linear is handled cleanly.
- **Naming**: Good. Variables like `stepsToNewTail`, `newTail`, and `newHead` explicitly describe their roles.
- **Improvements**: None required; the implementation is idiomatic and concise.

---

# Question Revision
### Rotate List

**Pattern:** Linked List Manipulation / Cycle Transformation

**Brute Force:** 
Perform a single rotation $k$ times. In each iteration, traverse to the end of the list to move the last node to the front.
- **Time:** $O(k \cdot n)$
- **Space:** $O(1)$

**Optimal Approach:**
1. Calculate the length of the list $L$ and find the tail node.
2. Normalize $k$ using $k = k \pmod L$. If $k=0$, return the head immediately.
3. Connect the tail to the head to form a circular linked list.
4. Traverse $L - k$ steps from the head to find the new tail.
5. Set the node after the new tail as the new head, then break the circular connection by setting `newTail.next = null`.

- **Time:** $O(n)$
- **Space:** $O(1)$

**The 'Aha' Moment:** 
Connecting the tail to the head transforms the rotation problem into a simple "find the break point" problem.

**Summary:** 
Make the list circular and break the link at the $(L - k)$-th node to isolate the new head.

---