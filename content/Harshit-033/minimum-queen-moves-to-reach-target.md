---
title: "Minimum Queen Moves to Reach Target"
slug: minimum-queen-moves-to-reach-target
date: "2026-09-26"
---

# My Solution
~~~cpp
class Solution {
public:
    int minQueenMoves(vector<int>& source, vector<int>& target) {
        if(source[0]==target[0] && source[1]==target[1]){
            return 0;
        }
        if(source[0]==target[0] || source[1]==target[1] || abs(source[0]-target[0])==abs(source[1]-target[1])){
            return 1;
        }
        return 2;
    }
};
~~~

# Submission Review
## Approach
- **Technique**: Conditional logic based on the properties of a Queen's movement in chess.
- **Optimality**: Optimal. A Queen can reach any square on a chessboard in at most 2 moves. The code correctly checks for 0 moves (same position), 1 move (same row, column, or diagonal), and defaults to 2 moves for all other cases.

## Complexity
- **Time Complexity**: $O(1)$. The operations consist of a constant number of comparisons and arithmetic operations.
- **Space Complexity**: $O(1)$. No additional memory is allocated regardless of input size.

## Efficiency Feedback
- The implementation is maximally efficient. There are no bottlenecks to address.

## Code Quality
- **Readability**: Good. The logic follows a clear hierarchy of conditions.
- **Structure**: Good. Simple and direct.
- **Naming**: Moderate. While `source` and `target` are clear, the function name is provided by the problem signature.
- **Concrete Improvements**:
    - Use `const vector<int>&` for parameters to avoid potential copies (though already present here).
    - The logic is sound, but adding `std::abs` explicitly requires `<cmath>` or `<cstdlib>`, which is implied but should be ensured.

---

# Question Revision
# Revision Report: Minimum Queen Moves to Reach Target

- **Pattern:** Greedy / Geometry-based Case Analysis
- **Brute Force:** Use Breadth-First Search (BFS) to explore all possible queen moves (horizontal, vertical, diagonal) until the target is reached.
- **Optimal Approach:** 
  - If the start and target are the same position, moves = `0`.
  - If the target is on the same row, same column, or same diagonal as the start, moves = `1`.
  - Otherwise, the queen can always reach any square on a chessboard in exactly `2` moves (e.g., move to the target's row, then move horizontally to the target).
  - **Complexity:** 
    - Time: $O(1)$
    - Space: $O(1)$
- **The 'Aha' Moment:** Realizing that a queen's movement range is so expansive that no two points on a finite grid ever require more than two moves to connect.
- **Summary:** Check for identical position (0), collinear/diagonal alignment (1), or default to 2 moves.

---