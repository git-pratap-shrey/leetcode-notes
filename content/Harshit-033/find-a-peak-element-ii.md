---
title: "Find a Peak Element II"
slug: find-a-peak-element-ii
date: "2026-04-06"

---
---

# My Solution
~~~c
int* findPeakGrid(int** mat, int matSize, int* matColSize, int* returnSize) {
    *returnSize = 2;
    int* arr = (int*)malloc(sizeof(int) * 2);

    int low = 0;
    int high = matColSize[0] - 1;

    while (low <= high) {
        int mid = (low + high) / 2;

        
        int maxRow = 0;
        for (int i = 0; i < matSize; i++) {
            if (mat[i][mid] > mat[maxRow][mid]) {
                maxRow = i;
            }
        }

        int left = (mid > 0) ? mat[maxRow][mid - 1] : -1;
        int right = (mid < matColSize[0] - 1) ? mat[maxRow][mid + 1] : -1;

        
        if (mat[maxRow][mid] > left && mat[maxRow][mid] > right) {
            arr[0] = maxRow;
            arr[1] = mid;
            return arr;
        }
        else if (mat[maxRow][mid] < right) {
            low = mid + 1;  
        }
        else {
            high = mid - 1;  
        }
    }

    return arr;
}
~~~

# Submission Review
## Approach
*   **Technique:** Binary Search on columns combined with a linear search for the maximum element in the selected column.
*   **Optimality:** Optimal. By finding the global maximum in the chosen column, the algorithm ensures that the element is greater than its vertical neighbors by definition, and the binary search decision ensures it is greater than horizontal neighbors.

## Complexity
*   **Time Complexity:** $O(m \log n)$, where $m$ is the number of rows and $n$ is the number of columns. Finding the max in a column takes $O(m)$ and the binary search takes $O(\log n)$ steps.
*   **Space Complexity:** $O(1)$ (excluding the returned array), as the algorithm uses a constant amount of extra space.

## Efficiency Feedback
*   **Bottleneck:** The $O(m)$ scan inside the $O(\log n)$ loop is the standard approach for this problem. It is efficient given the constraints of the "Peak Element II" problem (typically $m, n \le 500$).
*   **Optimization:** The code correctly handles edge cases (boundaries) using ternary operators, which is efficient and avoids unnecessary index checks.

## Code Quality
*   **Readability:** Good. The logic is concise and follows a clear flow.
*   **Structure:** Good. The use of `malloc` is appropriate for returning an array from a C function.
*   **Naming:** Good. Variable names (`low`, `high`, `maxRow`, `mid`) are standard and intuitive.
*   **Concrete Improvements:**
    *   **Memory Safety:** While not strictly required for competitive programming, adding a check to verify if `malloc` succeeds is good practice. 
    *   **Input Assumption:** The code assumes `matColSize` is the same for all rows. While typical for grid problems, ensure the problem constraints guarantee a rectangular matrix.
    *   **Style:** `int* arr = (int*)malloc(...)` is standard, but in C, casting the return value of `malloc` is unnecessary and can hide errors if `<stdlib.h>` is missing. 
    *   **Clarity:** The `else if` logic could be slightly more explicit regarding the comparison to `left` vs `right` to improve readability for others, though the current logic is functionally sound.

---
---


# Question Revision
**Analyzing Peak Elements**

I'm currently focused on the LeetCode "Find a Peak Element II" problem and am working on understanding the constraints, especially the requirement for a solution to be O(m log n) or O(n log m) where m and n are the dimensions of the grid. It seems a binary search approach is necessary to efficiently locate any peak element in the 2D grid. I'm exploring how to adapt that search strategy to this 2D context.


**Refining Optimal Search Strategy**

I've refined the optimal approach to identifying peak elements. The core idea involves binary searching on either rows or columns. I select the middle column, identify the global maximum within that column, and then compare it to its horizontal neighbors. If the maximum is greater, it's a peak. Otherwise, I focus the search on the half where the neighbor is larger. This leverages the requirement for O(m log n) or O(n log m) complexity.


### Pattern
Binary Search (Dimensional Reduction)

### Brute Force
Iterate through every cell $(i, j)$ in the $M \times N$ matrix and check all four neighbors.
- **Time Complexity:** $O(M \cdot N)$
- **Space Complexity:** $O(1)$

### Optimal Approach
1. Perform a binary search on the columns (range `low = 0`, `high = width - 1`).
2. For the `mid_col`, find the row index `max_row` containing the maximum value in that specific column.
3. Compare `mat[max_row][mid_col]` with its left and right neighbors:
   - If `mat[max_row][mid_col]` is greater than both, it is a peak (it's already greater than top/bottom neighbors by being the column max).
   - If the left neighbor is larger, the peak must exist in the left half.
   - Otherwise, the peak must exist in the right half.
- **Time Complexity:** $O(N \log M)$ where $N$ is the number of rows and $M$ is the number of columns.
- **Space Complexity:** $O(1)$

### The 'Aha' Moment
By selecting the global maximum of a column, you eliminate the vertical neighbor check entirely, allowing you to treat the 2D grid as a 1D "Peak Element" problem across columns.

### Summary
To find a 2D peak efficiently, binary search on columns and use the column's maximum element to determine which half of the matrix must contain a peak.

---
