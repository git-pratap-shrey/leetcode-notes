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
*   **Technique:** Binary Search on columns.
*   **Optimal:** Yes. By finding the global maximum in the middle column and comparing it to its horizontal neighbors, the algorithm effectively narrows the search space to a half-grid where a peak must exist. This is the optimal $O(M \log N)$ approach.

## Complexity
*   **Time Complexity:** $O(M \log N)$, where $M$ is the number of rows and $N$ is the number of columns. Finding the maximum in a column takes $O(M)$, and the binary search runs for $\log N$ steps.
*   **Space Complexity:** $O(1)$ (excluding the returned array), as the search is performed in place.

## Efficiency Feedback
*   **Runtime:** The approach is highly efficient for large matrices.
*   **Bottleneck:** None. The logic correctly discards half the search space based on the slope toward the larger neighbor.
*   **Edge Cases:** The use of `-1` as a boundary value for neighbors is clever, but assumes all elements in the matrix are non-negative. If the input matrix contains negative integers, this could lead to incorrect results. Check the problem constraints regarding the value range.

## Code Quality
*   **Readability:** Good. The logic is concise and easy to follow.
*   **Structure:** Good. The binary search structure is standard and clean.
*   **Naming:** Good. Variable names (`maxRow`, `low`, `high`, `mid`) are intuitive.
*   **Concrete Improvements:**
    *   **Safety:** Add a check to ensure `mat` and `matColSize` are not `NULL`.
    *   **Memory:** The `malloc` is appropriate, but consider that if the function is called repeatedly in a test suite, you should document the memory management expectation (the caller is responsible for `free`).
    *   **Robustness:** If the matrix can contain values less than `-1`, replace the sentinel value `-1` with a macro like `INT_MIN`. 
    *   **Formatting:** The indentation and spacing are consistent and follow professional standards.

---
---


# Question Revision
### Revision Report: Find a Peak Element II

**Pattern:** Binary Search on Grid (Divide and Conquer)

**Brute Force:**
Iterate through every cell and check if it is greater than its neighbors. 
*   **Time:** $O(n \times m)$
*   **Space:** $O(1)$

**Optimal Approach:**
Instead of a full search, pick a column, find the global maximum in that column ($O(m)$), and compare it to its horizontal neighbors. If the element is smaller than its left/right neighbor, discard the half of the grid that cannot contain the peak. Repeat this process for columns.
*   **Time:** $O(m \log n)$ (where $m$ is rows, $n$ is columns)
*   **Space:** $O(1)$

**The 'Aha' Moment:**
The requirement to find a "peak" in a sorted or semi-ordered structure without visiting every element is a classic signal that binary search can be applied to reduce the search space by half in each step.

**Summary:** 
When searching for a local maximum in a 2D grid, use binary search on columns by tracking the row-wise global maximum to guarantee the peak exists in the unsearched half.

---
