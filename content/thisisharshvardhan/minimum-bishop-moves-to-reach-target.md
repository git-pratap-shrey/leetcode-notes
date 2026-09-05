---
title: "Minimum Bishop Moves to Reach Target"
slug: minimum-bishop-moves-to-reach-target
date: "2026-08-29"
---

# My Solution
~~~cpp
class Solution {
public:
    bool searchMatrix(vector<vector<int>>& matrix, int target) {
        int m=matrix.size();
        int n=matrix[0].size();
        int low=0;
        int high=m*n-1;
        while(low<=high){
            int mid=low+(high-low)/2;
            int r=mid/n;
            int c=mid%n;
            if(matrix[r][c]==target){
                return true;
            }
            else if(matrix[r][c]<target){
                low=mid+1;
            }
            else{
                high=mid-1;
            }
        }
        return false;
    }
};
~~~

# Submission Review
## Approach
*   **Technique:** Binary search on a flattened matrix (treating a 2D grid as a 1D sorted array).
*   **Optimality:** Optimal for the specific problem of searching a row-wise and column-wise sorted matrix (often referred to as "Search a 2D Matrix I").

## Complexity
*   **Time Complexity:** $O(\log(m \times n))$, where $m$ is rows and $n$ is columns. This is the logarithmic efficiency of binary search.
*   **Space Complexity:** $O(1)$, as it uses a constant amount of extra space.

## Efficiency Feedback
*   **Performance:** Excellent. The arithmetic transformation `mid / n` and `mid % n` avoids the need to copy matrix data into a 1D vector, maintaining high performance and minimal cache misses.
*   **Edge Cases:** The code correctly handles empty matrices (if checked) or single-element matrices. Note: Ensure `matrix` is not empty before accessing `matrix[0].size()` to avoid runtime errors on empty inputs.

## Code Quality
*   **Readability:** Good. The logic is standard and easy to follow.
*   **Structure:** Good. The function is concise and performs a single, well-defined task.
*   **Naming:** Moderate. `r` and `c` are acceptable in this context, but `row` and `col` would be slightly more descriptive.
*   **Concrete Improvements:**
    *   Add a guard clause at the beginning: `if (matrix.empty() || matrix[0].empty()) return false;`. This prevents potential out-of-bounds access or division errors.
    *   The problem title provided ("Minimum Bishop Moves") is **mismatched** with the code provided (Search a 2D Matrix). Ensure the solution matches the actual problem requirements.

---

# Question Revision
### Revision Report: Minimum Bishop Moves

**Pattern:** Geometry / Parity Analysis

**Brute Force:** 
Simulate BFS on an $8 \times 8$ grid to find the shortest path, exploring all possible diagonal moves until the target is reached.

**Optimal Approach:** 
*   **Logic:** A bishop can only reach a square if the color matches the starting square (i.e., `(r1 + c1) % 2 == (r2 + c2) % 2`). If the parities differ, it is impossible (return 0 or -1). If the bishop is already at the target, 0 moves. If the target is on the same diagonal, 1 move. Otherwise, 2 moves are always sufficient to reach any square of the same color on an empty board.
*   **Time Complexity:** $O(1)$
*   **Space Complexity:** $O(1)$

**The 'Aha' Moment:**
The realization that a bishop is constrained to a single color and can reach any square of that color on an empty board in at most two moves transforms a graph search problem into a simple parity check.

**Summary:** 
Whenever a piece is restricted to a specific color grid, always check parity first; if the parities match, the answer is almost always a small constant.

---