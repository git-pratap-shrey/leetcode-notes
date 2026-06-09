---
title: "Smallest Stable Index II"
slug: smallest-stable-index-ii
date: "2026-04-19"
---

# My Solution
~~~

~~~

# Submission Review
## Approach
- **Technique**: Segment Tree with Lazy Propagation.
- **Optimality**: Optimal. The solution uses a segment tree to handle range updates and a binary search-like traversal (walk on segment tree) to find the first index satisfying the condition in $O(\log N)$ time.

## Complexity
- **Time Complexity**: $O(Q \log N)$, where $Q$ is the number of queries and $N$ is the maximum index $r$ encountered. Each `update` and `query` operation takes logarithmic time.
- **Space Complexity**: $O(N)$, specifically $4N$ for the segment tree array.

## Efficiency Feedback
- **Redundancy**: The `build` function is redundant. Since the segment tree is initialized with zeros and the `Node` struct defaults to 0 (via `tree.resize` and the build loop), the explicit `build` call provides no functional benefit.
- **Dynamic Range**: The code determines $N$ by scanning all queries first (`n = max(n, r)`). This is an efficient way to handle coordinate ranges when $N$ is not explicitly provided.
- **Query Logic**: The `query` function finds the leftmost index $i$ where $val[i] \le 0$. Since updates only increment values by 1, this effectively finds the first index that has never been updated. If all indices have been updated (all $> 0$), the logic will always recurse into the right child, eventually returning the last index $n$.

## Code Quality
- **Readability**: Moderate. The implementation follows standard competitive programming patterns, but lacks comments explaining the "Stable Index" condition.
- **Structure**: Good. The separation of `push`, `update`, and `query` follows standard segment tree modularity.
- **Naming**: Moderate. Variable names like `l`, `r`, and `q` are standard in CP but generic.
- **Concrete Improvements**:
    1. **Remove `build()`**: It iterates through $4N$ elements just to set them to 0, which is already the default or handled by `resize`.
    2. **Input Validation**: Added a check `if (!(cin >> q)) return 0;` which is good for robustness against empty inputs.
    3. **Potential Bug**: If the problem requires returning a specific value (e.g., -1) when no index $\le 0$ exists, the current `query` function fails because it will return $n$ by default. This depends on the unseen problem constraints.

---

# Question Revision
### Revision Report: Smallest Stable Index II

**Pattern:** Modular Arithmetic / Mathematical Simulation

**Brute Force:** 
Simulate every rotation operation on the entire array. For each operation, shift all elements and track their new positions.
- **Time Complexity:** $O(N \cdot K)$ where $N$ is array size and $K$ is number of operations.
- **Space Complexity:** $O(1)$ or $O(N)$ depending on in-place simulation.

**Optimal Approach:** 
Instead of moving elements, track the cumulative net displacement. Sum all shift values and apply a modulo $N$ operation to find the final total offset $S$. An index $i$ is stable if $(i + S) \pmod N = i$. This condition is only true if $S \equiv 0 \pmod N$. If $S=0$, the smallest stable index is $0$; otherwise, no index remains stable.
- **Time Complexity:** $O(K)$ to aggregate shifts.
- **Space Complexity:** $O(1)$.

**The 'Aha' Moment:** 
The composition of multiple rotations is functionally equivalent to a single rotation by the sum of their magnitudes modulo $N$.

**Summary:** 
Collapse sequential rotations into a single net displacement using modulo $N$ to determine stability in constant space.

---