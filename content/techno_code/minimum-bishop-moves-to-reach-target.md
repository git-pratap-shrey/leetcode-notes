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
        if((((source[0]+source[1])%2==0)&&((target[0]+target[1])%2==0))||(((source[0]+source[1])%2!=0)&&((target[0]+target[1])%2!=0))){
            int sum=source[0]+source[1];
            int ans=target[0]+target[1];
            if(sum==ans||(source[0]-source[1]==target[0]-target[1])){
                return 1;
            }
            else{
                return 2;
            }
        }
        else{
            return -1;
        }
    }
};
~~~

# Submission Review
## Approach
- **Technique**: Mathematical parity check and coordinate geometry.
- **Optimality**: Optimal in terms of time and space complexity, but **logically incorrect** for the case where the source and target are the same square.

## Complexity
- **Time Complexity**: $O(1)$
- **Space Complexity**: $O(1)$

## Efficiency Feedback
- The runtime and memory usage are minimal.
- **Logic Bug**: The code fails to check if `source == target`. If the starting position is the target, the answer should be `0`, but this code returns `1`.

## Code Quality
- **Readability**: Poor. The initial `if` condition is excessively verbose and repetitive.
- **Structure**: Moderate. The nested logic is simple, but the lack of a base case for `0` moves is a functional flaw.
- **Naming**: Poor. `sum` and `ans` are generic; `ans` is particularly misleading as it stores a coordinate sum, not the final answer.

### Concrete Improvements
1. **Handle the 0-move case**: Add `if (source == target) return 0;` at the beginning.
2. **Simplify Parity Check**: Replace the long boolean expression with:
   `if ((source[0] + source[1]) % 2 == (target[0] + target[1]) % 2)`
3. **Refactor Variable Names**: Use descriptive names like `sourceSum` and `targetSum`.
4. **Clean Logic**:
   ```cpp
   if (source == target) return 0;
   if ((source[0] + source[1]) % 2 != (target[0] + target[1]) % 2) return -1;
   if (abs(source[0] - target[0]) == abs(source[1] - target[1])) return 1;
   return 2;
   ```

---

# Question Revision
### Minimum Bishop Moves to Reach Target

**Pattern:** Mathematical / Coordinate Geometry (Case Analysis)

**Brute Force:** 
Use Breadth-First Search (BFS) to traverse all reachable diagonal squares until the target is found. This is overkill due to the rigid movement constraints of the bishop.

**Optimal Approach:**
1. **Parity Check:** Check if $(r1 + c1) \pmod 2 == (r2 + c2) \pmod 2$. If they differ, the target is on a different color square and unreachable.
2. **Case 0:** If $(r1, c1) == (r2, c2)$, distance is $0$.
3. **Case 1:** If $|r1 - r2| == |c1 - c2|$, they share a diagonal; distance is $1$.
4. **Case 2:** Otherwise, any square of the same color can be reached in exactly $2$ moves.

*   **Time Complexity:** $O(1)$
*   **Space Complexity:** $O(1)$

**The 'Aha' Moment:** 
Bishops are color-bound, and any two squares of the same color on a chessboard can be connected by at most two intersecting diagonals.

**Summary:** 
Verify color parity, then check for equality (0), diagonal alignment (1), or default to 2 moves.

---