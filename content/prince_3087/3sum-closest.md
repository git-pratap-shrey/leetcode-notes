---
title: "3Sum Closest"
slug: 3sum-closest
date: "2026-08-24"
---

# My Solution
~~~cpp
class Solution {
public:
    int minBishopMoves(vector<int>& source, vector<int>& target) {
        int source_sum = source[0] + source[1];
        int target_sum = target[0] + target[1];

        int source_diff = source[0] - source[1];
        int target_diff = target[0] - target[1];
        
        
        if(target_sum % 2 != source_sum % 2)    return -1;
        if(source_sum == target_sum || source_diff == target_diff)    return 1;

        return 2;
    }
};
~~~

# Submission Review
## Approach
*   **Technique:** Mathematical parity and coordinate transformation (Manhattan-to-Chebyshev-like conversion for Bishop movement).
*   **Optimal:** Yes. A bishop on a chessboard can only reach squares of the same color (checked via `(r+c)%2`). Once parity matches, a bishop can reach any square in 1 move (if on the same diagonal) or 2 moves (if on the same color).

## Complexity
*   **Time Complexity:** $O(1)$, as it performs a constant number of arithmetic operations.
*   **Space Complexity:** $O(1)$, as it uses a fixed amount of extra space.

## Efficiency Feedback
*   The logic is highly efficient. Since it uses direct coordinate arithmetic rather than BFS or simulation, the runtime is optimal.

## Code Quality
*   **Readability:** Moderate.
*   **Structure:** Poor. The function name `minBishopMoves` is descriptive, but the class name `Solution` and the context provided ("3Sum Closest") mismatch the actual logic, which is a chessboard problem.
*   **Naming:** Good for the function variables, but the overall context is confusing.
*   **Concrete Improvements:**
    *   **Mismatch Correction:** Ensure the class and method names align with the problem definition.
    *   **Input Validation:** The code assumes the input vectors have at least two elements. Consider adding a check or documenting the constraint that `source.size() == 2 && target.size() == 2`.
    *   **Logic Simplification:** The parity check `target_sum % 2 != source_sum % 2` is correct, but be aware that in C++, the `%` operator on negative numbers can return negative results (e.g., `-1 % 2` is `-1`). While this works for equality checks, using `abs()` or checking parity via `(source[0] + source[1]) % 2 == (target[0] + target[1]) % 2` is safer if coordinates can be negative.

---

# Question Revision
### Revision Report: 3Sum Closest

**Pattern:** Two Pointers (on a sorted array)

**Brute Force:**
Iterate through all possible triplets using three nested loops, calculate their sums, compare against the target, and track the closest difference.
*   **Time Complexity:** $O(n^3)$
*   **Space Complexity:** $O(1)$

**Optimal Approach:**
1. Sort the array.
2. Fix one element (`nums[i]`) and use two pointers (`left` and `right`) to find the pair that brings the triplet sum closest to the target.
3. If the sum is less than the target, move `left` forward; if greater, move `right` backward.
4. Update the "closest sum" whenever the current absolute difference is smaller than the global minimum.
*   **Time Complexity:** $O(n^2)$ (Sorting takes $O(n \log n)$, the nested loop takes $O(n^2)$).
*   **Space Complexity:** $O(1)$ or $O(n)$ depending on the sorting implementation.

**The 'Aha' Moment:**
The requirement to find a specific combination within a collection that satisfies a numerical proximity constraint—combined with the need to avoid $O(n^3)$—is a classic signal to trade sorting time for the efficiency of the Two Pointers pattern.

**Summary:**
When searching for an optimal sum among triplets, sorting the array allows you to collapse the search space from $O(n^3)$ to $O(n^2)$ by pivoting on a fixed element and using two pointers to adjust the sum.

---