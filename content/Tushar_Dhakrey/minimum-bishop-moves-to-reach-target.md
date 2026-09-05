---
title: "Minimum Bishop Moves to Reach Target"
slug: minimum-bishop-moves-to-reach-target
date: "2026-08-29"
---

# My Solution
~~~java
class Solution {
    public int minBishopMoves(int[] source, int[] target) {
        if(source[0]==target[0] && source[1]==target[1]){
            return 0;
        }
        if(Math.abs(source[0]-target[0])==Math.abs(source[1]-target[1])){
            return 1;
        }
        else if((source[0]+source[1])%2!=(target[0]+target[1])%2){
            return -1;
        }
        else{
            return 2;
        }
    }
}
~~~

# Submission Review
## Approach
*   **Technique**: Mathematical/Geometric logic (parity check).
*   **Optimality**: Optimal. A bishop can reach any square of the same color in at most two moves. If the target is on a different colored square, it is unreachable.

## Complexity
*   **Time Complexity**: $O(1)$, as it involves simple arithmetic operations.
*   **Space Complexity**: $O(1)$, as it uses constant extra space.

## Efficiency Feedback
*   **Runtime/Memory**: Highly efficient. The solution avoids graph traversal (like BFS) by exploiting the property that a bishop on an $N \times N$ board can reach any square of the same color in $\leq 2$ moves.
*   **Optimizations**: None required. The logic covers all cases:
    *   Distance 0 (already there).
    *   Distance 1 (same diagonal).
    *   Distance 2 (same color, but different diagonals).
    *   Unreachable (different color).

## Code Quality
*   **Readability**: Good. The logic flow is straightforward and easy to follow.
*   **Structure**: Good. Minimalist structure; appropriate use of conditional returns.
*   **Naming**: Moderate. While `source` and `target` are standard for coordinate-based problems, they are somewhat generic.
*   **Improvements**:
    *   **Input Validation**: The code assumes valid board coordinates (within range). If the board is finite (e.g., $8 \times 8$), this logic holds, but it is worth noting that this solution assumes an infinite plane or a sufficiently large board where the bishop is never blocked by edges.
    *   **Conciseness**: The `else` keyword is redundant after the `if` and `else if` returns. Removing it would slightly clean up the flow.

---

# Question Revision
### Revision Report: Minimum Bishop Moves

**Pattern:** Geometry / Parity Analysis

**Brute Force:** 
Simulating all possible diagonal paths via Breadth-First Search (BFS) to find the shortest distance from the starting square to the target square. This is inefficient due to the board's potentially large state space.

**Optimal Approach:**
Observe that a bishop stays on squares of the same color. 
1. **Feasibility:** If the starting square $(r1, c1)$ and target square $(r2, c2)$ have different parities (i.e., $(r1+c1) \pmod 2 \neq (r2+c2) \pmod 2$), the target is unreachable (0 moves).
2. **Logic:** 
   - If start == target: 0 moves.
   - If on the same diagonal ($|r1-r2| == |c1-c2|$): 1 move.
   - Otherwise: 2 moves (a bishop can reach any square of the same color in at most two moves by intersecting diagonals).
*   **Time Complexity:** $O(1)$
*   **Space Complexity:** $O(1)$

**The 'Aha' Moment:**
Realizing that bishops are confined to a single color grid and can reach any square of that color in at most two moves turns a search problem into a simple parity and geometric check.

**Summary:**
Bishops are color-bound and move in diagonals; if the target color matches and it isn't on the same diagonal, the answer is always two.

---