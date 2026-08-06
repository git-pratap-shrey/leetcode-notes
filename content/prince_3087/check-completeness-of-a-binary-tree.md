---
title: "Check Completeness of a Binary Tree"
slug: check-completeness-of-a-binary-tree
date: "2026-07-29"
---

# My Solution
~~~

~~~

# Submission Review
## Approach
- **Technique**: Breadth-First Search (BFS) / Level-Order Traversal.
- **Optimality**: Optimal. A binary tree is complete if all levels are filled except possibly the last, which must be filled from left to right. By traversing in level-order and ensuring no non-null node appears after the first `null` is encountered, the property is verified in a single pass.

## Complexity
- **Time Complexity**: $O(N)$, where $N$ is the number of nodes in the tree. Each node and its null children are processed exactly once.
- **Space Complexity**: $O(N)$. In the worst case (a perfect binary tree), the queue will hold up to $O(N/2)$ nodes at the leaf level.

## Efficiency Feedback
- **Runtime**: Efficient. The use of `collections.deque` ensures $O(1)$ pop operations from the front.
- **Memory**: Memory usage is proportional to the maximum width of the tree, which is expected for BFS.

## Code Quality
- **Readability**: Good. The logic is straightforward and follows a clear linear flow.
- **Structure**: Good. The separation of the `TreeNode` class and the `Solution` class is standard for this problem type.
- **Naming**: Good. Variable names like `found_null` clearly communicate their purpose.
- **Improvements**: No significant improvements needed. The current implementation is clean and idiomatic.

---

# Question Revision
### Check Completeness of a Binary Tree

**Pattern:** BFS (Level-Order Traversal)

**Brute Force:** Recursively assign an index to each node (root=0, left=$2i+1$, right=$2i+2$); if the maximum index encountered is not equal to $n-1$ (where $n$ is total nodes), the tree is not complete.

**Optimal Approach:** Perform a BFS using a queue, adding all children (including `null` pointers) to the queue. Once a `null` node is dequeued, every remaining element in the queue must also be `null`. If any non-null node appears after the first `null`, the tree is incomplete.
- **Time Complexity:** $O(n)$
- **Space Complexity:** $O(n)$

**The 'Aha' Moment:** The phrase "as far left as possible" implies that in a level-order sequence, no actual node can exist after the first empty slot.

**Summary:** A complete binary tree is a level-order traversal where no non-null nodes follow the first encountered null.

---