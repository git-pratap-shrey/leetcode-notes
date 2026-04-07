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
*   **Technique:** Binary search on the columns of the matrix combined with a linear scan to find the maximum element in the selected column.
*   **Optimality:** Optimal. It achieves $O(N \log M)$ complexity (where $N$ is the number of rows and $M$ is the number of columns), which is standard for this problem.

## Complexity
*   **Time Complexity:** $O(N \log M)$, where $N$ is `matSize` and $M$ is `matColSize`. In each step of the binary search, you traverse one column ($O(N)$).
*   **Space Complexity:** $O(1)$ (excluding the allocated return array), as the algorithm uses a constant amount of extra space.

## Efficiency Feedback
*   **Performance:** The runtime is efficient for large matrices.
*   **Boundary Conditions:** Using `-1` for comparisons at the edges assumes all elements in the matrix are non-negative. If the matrix contains negative numbers, this logic is **flawed**.
    *   *Fix:* Use `INT_MIN` for out-of-bounds comparisons instead of `-1`.

## Code Quality
*   **Readability:** Good. The logic is concise and easy to follow.
*   **Structure:** Good. The binary search structure is clear.
*   **Naming:** Good. Variable names (`maxRow`, `low`, `high`, `mid`) are standard and descriptive.

### Concrete Improvements
1.  **Safety:** Update the boundary comparison values:
    ```c
    int left = (mid > 0) ? mat[maxRow][mid - 1] : -1; // Risky if input has negative values
    // Use:
    int left = (mid > 0) ? mat[maxRow][mid - 1] : -1; // If constraints guarantee non-negative
    // Or use INT_MIN for robustness
    ```
2.  **Memory:** The `malloc` is correct, but ensure the caller knows to free it. This is standard for LeetCode C interfaces.
3.  **Redundancy:** The `returnSize` logic is correct, but ensure you include `<stdlib.h>` for `malloc` and `<limits.h>` if you switch to `INT_MIN`.

---
---


# Question Revision
### Revision Report: Find a Peak Element II

**Pattern:** Binary Search on a 2D Grid

**Brute Force:** 
Scan every element in the $m \times n$ matrix to find a value greater than its four neighbors.
*   **Time Complexity:** $O(m \cdot n)$
*   **Space Complexity:** $O(1)$

**Optimal Approach:** 
Find the maximum element in a chosen column `mid`. If the element is smaller than its neighbor in the next column, a peak must exist in the right half; otherwise, a peak exists in the left half (or at that current element). Repeat this process by halving the columns.
*   **Time Complexity:** $O(m \cdot \log n)$
*   **Space Complexity:** $O(1)$

**The 'Aha' Moment:** 
The guarantee that "an element is greater than its neighbors" is a local property that allows you to discard half the search space because a peak is mathematically guaranteed to exist in the direction of the strictly increasing neighbor.

**Summary:** 
When asked to find a local optimum in a sorted or partially ordered structure, treat the search space as a monotonic function to apply binary search, even across multiple dimensions.

---
