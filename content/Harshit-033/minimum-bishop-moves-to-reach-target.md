---
title: "Minimum Bishop Moves to Reach Target"
slug: minimum-bishop-moves-to-reach-target
date: "2026-08-29"
---

# My Solution
~~~cpp
class Solution {
public:
    int minBishopMoves(vector<int>& source, vector<int>& target) {
        if(source[0]==target[0] && source[1]==target[1]) return 0;
        if((source[0]+source[1])%2!=(target[0]+target[1])%2) return -1;
        if(abs(source[0]-target[0])==abs(source[1]-target[1])) {
            return 1;
        }
        
        return 2;
          
        
        
    }
};
~~~

# Submission Review
## Approach
*   **Technique:** Mathematical/Case analysis based on the properties of a bishop on a chessboard.
*   **Optimality:** Optimal. The bishop's movement is constrained by color (parity of coordinates); if the target is reachable, it takes either 1 move (same diagonal) or 2 moves (different diagonals of the same color).

## Complexity
*   **Time Complexity:** $O(1)$, as it involves a constant number of arithmetic operations.
*   **Space Complexity:** $O(1)$, as it uses no auxiliary data structures.

## Efficiency Feedback
*   **Performance:** Highly efficient. The solution avoids BFS or exhaustive search, which would be unnecessary for this problem.
*   **Optimizations:** None required. The logic directly maps to the geometry of the chessboard.

## Code Quality
*   **Readability:** Good. The logic is straightforward and easy to follow.
*   **Structure:** Good. Early return conditions handle base cases and edge cases (unreachable squares) cleanly.
*   **Naming:** Good. `source` and `target` are standard and descriptive enough for this context.
*   **Concrete Improvements:**
    *   The code is quite clean. The only minor improvement would be to use `std::abs` explicitly (it is already used) and perhaps ensure the input coordinates represent valid board bounds if the problem constraints aren't guaranteed.
    *   The blank lines at the end of the function are unnecessary and should be removed for cleaner formatting.

---

# Question Revision
### Revision Report: Minimum Bishop Moves

**Pattern:** Geometry / Parity Analysis

**Brute Force:** 
Simulate all possible diagonal paths from the source using Breadth-First Search (BFS) to find the shortest path, exploring every square until the target is reached. 
*   **Time:** $O(N^2)$ (where $N$ is board size).
*   **Space:** $O(N^2)$ to store visited states.

**Optimal Approach:** 
Use parity and geometric properties. Bishops can only move on squares of the same color ($r + c$ parity).
1.  **Check Parity:** If the source and target squares have different colors ($r_1+c_1 \equiv r_2+c_2 \pmod 2$), the target is unreachable (return -1).
2.  **Check Colinearity:** If the bishop is already on a diagonal ($|r_1 - r_2| == |c_1 - c_2|$), the answer is 1.
3.  **General Case:** Any two squares of the same color are reachable in at most 2 moves (by finding the intersection of their diagonals).
*   **Time:** $O(1)$
*   **Space:** $O(1)$

**The 'Aha' Moment:**
Recognizing that bishop moves are constrained by the invariant of the square's color parity eliminates the need for any graph traversal.

**Summary:**
Always check for mathematical invariants like grid parity or diagonal slopes before resorting to BFS/Dijkstra for shortest path problems on a chessboard.

---