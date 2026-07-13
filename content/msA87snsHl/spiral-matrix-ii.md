---
title: "Spiral Matrix II"
slug: spiral-matrix-ii
date: "2026-07-13"
---

# My Solution
~~~java
class Solution {
    public int[][] generateMatrix(int n) {
        int[][] arr = new int[n][n];
        int count = 1;
        int left = 0;
        int right = n - 1;
        int top = 0;
        int bottom = n - 1;
        while ( top <= bottom && left <= right){
            for (int j = left; j <= right; j++) {
                arr[top][j] = count;
                count++;
            }
            top++;

            
            for (int i = top; i <= bottom; i++) {
                arr[i][right] = count;
                count++;
            }
            right--;

            if (top <= bottom) {
                for (int j = right; j >= left; j--) {
                    arr[bottom][j] = count++;
                }
                bottom--;
            }

          
            if (left <= right) {
                for (int i = bottom; i >= top; i--) {
                    arr[i][left] = count;
                    count++;
                }
                left++;
            }
        }
        return arr;
    }
}
~~~

# Submission Review
## Approach
* **Technique**: Simulation using boundary pointers (`top`, `bottom`, `left`, `right`).
* **Optimality**: Optimal. The algorithm visits each cell exactly once in the required spiral order.

## Complexity
* **Time Complexity**: $O(n^2)$, as we fill each of the $n \times n$ cells exactly once.
* **Space Complexity**: $O(1)$ (excluding the output matrix), as only a few integer pointers are used.

## Efficiency Feedback
* **Efficiency**: The runtime is optimal for the problem requirements.
* **Optimizations**: No significant algorithmic improvements are possible. The use of `count++` inside the loops is efficient and idiomatic.

## Code Quality
* **Readability**: Good. The code flows logically and follows the standard spiral traversal pattern.
* **Structure**: Good. The conditional checks (`top <= bottom` and `left <= right`) correctly prevent unnecessary overwrites or index-out-of-bounds errors when $n$ is odd.
* **Naming**: Good. Variable names `top`, `bottom`, `left`, and `right` clearly describe their purpose as boundary markers.

### Concrete Improvements
* **Consistency**: In the third `for` loop, you use `arr[bottom][j] = count++;`, whereas in other loops you use `arr[i][right] = count; count++;`. Stick to one style (the latter is generally preferred for clarity).
* **Robustness**: While not strictly necessary given the problem constraints, adding a check for `n < 0` would make the method more defensive, though current constraints likely imply `n >= 0`.

---

# Question Revision
### Revision Report: Spiral Matrix II

**Pattern:** Simulation / Boundary Management

**Brute Force:** Create a 2D array and attempt to manually increment indices while handling nested loops with conditional checks to skip filled cells, leading to complex logic and high risk of off-by-one errors.

**Optimal Approach:** Maintain four boundaries (`top`, `bottom`, `left`, `right`). Iterate through the layers by traversing top-left to top-right, top-right to bottom-right, bottom-right to bottom-left, and bottom-left to top-left, shrinking boundaries after each edge completion.
*   **Time Complexity:** $O(n^2)$, where $n^2$ is the total number of elements in the matrix.
*   **Space Complexity:** $O(1)$ (excluding the output matrix).

**The 'Aha' Moment:** The requirement to traverse in a specific, repetitive geometric path (inward spirals) is a clear signal to use boundary variables that narrow toward the center as the simulation progresses.

**Summary:** Whenever a problem demands a structured path through a 2D grid that shrinks inward, define four boundaries and contract them as you complete each edge.

---