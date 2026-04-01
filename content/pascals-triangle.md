---
title: "Pascal's Triangle"
slug: pascals-triangle

---
---

# My Solution
~~~c
/**
 * Return an array of arrays of size *returnSize.
 * The sizes of the arrays are returned as *returnColumnSizes array.
 * Note: Both returned array and *columnSizes array must be malloced, assume caller calls free().
 */
int** generate(int numRows, int* returnSize, int** returnColumnSizes) {

    int** arr = (int**)malloc(numRows * sizeof(int*));
    *returnSize=numRows;
    *returnColumnSizes = (int*)malloc(numRows * sizeof(int));
    for(int i = 0; i < numRows; i++) {
        arr[i] = (int*)malloc((i + 1) * sizeof(int));
        (*returnColumnSizes)[i]=i+1;
    }
    arr[0][0]=1;
    if(numRows==1){
        return arr;
    }
    arr[1][0]=arr[1][1]=1;
    if(numRows==2){
        return arr;
    }

    for(int i=2;i<numRows;i++){
        arr[i][0]=arr[i][i]=1;
        for(int j=1;j<i;j++){
            arr[i][j]=arr[i-1][j-1]+arr[i-1][j];
        }


    }
    return arr;

    
}
~~~

# Submission Review
## Approach
*   **Technique**: Iterative Dynamic Programming (building rows based on previous row values).
*   **Optimality**: Optimal. The solution computes each element exactly once with $O(N^2)$ complexity, where $N$ is the number of rows.

## Complexity
*   **Time Complexity**: $O(N^2)$, where $N$ is `numRows`. Each element is computed in constant time.
*   **Space Complexity**: $O(N^2)$, as required to store the full Pascal's triangle.

## Efficiency Feedback
*   **Runtime**: Highly efficient. The memory allocation overhead is unavoidable given the return format requirements.
*   **Memory**: Minimal footprint. It only allocates the exact space needed for the output triangle and the column size array.

## Code Quality
*   **Readability**: Good. The logic flows linearly and is easy to follow.
*   **Structure**: Moderate. The manual handling of `numRows == 1` and `numRows == 2` cases creates redundant code. These could be integrated into the main loop by setting bounds appropriately.
*   **Naming**: Good. Variable names (`arr`, `numRows`, `i`, `j`) are standard for this type of problem.

### Concrete Improvements
1.  **Consolidate Logic**: The special cases for `numRows == 1` and `numRows == 2` are unnecessary. The nested loop `for (int j = 1; j < i; j++)` will simply not execute for $i < 2$, and the logic `arr[i][0] = arr[i][i] = 1` handles the row boundaries correctly even for $i=1$. 
    *   *Refined loop*:
        ```c
        for (int i = 0; i < numRows; i++) {
            arr[i][0] = arr[i][i] = 1;
            for (int j = 1; j < i; j++) {
                arr[i][j] = arr[i-1][j-1] + arr[i-1][j];
            }
        }
        ```
2.  **Safety**: While not required for competitive programming, in production, one should check if `malloc` returns `NULL`.
3.  **Consistency**: Use consistent spacing around operators (e.g., `*returnSize = numRows` instead of `*returnSize=numRows`) to improve style.

---
---


# Question Revision
### Revision Report: Pascal's Triangle

**Pattern:** Dynamic Programming / Iterative Construction

**Brute Force:** 
Calculate each row by recursively computing the previous row, leading to redundant calculations and $O(2^n)$ time complexity.

**Optimal Approach:** 
Build the triangle row-by-row using the values from the previous row. Each element `triangle[i][j]` is the sum of `triangle[i-1][j-1]` and `triangle[i-1][j]`, treating out-of-bounds indices as 0.
*   **Time Complexity:** $O(n^2)$ where $n$ is the number of rows.
*   **Space Complexity:** $O(n^2)$ to store the result, or $O(n)$ if only storing the current row.

**The 'Aha' Moment:** 
Recognizing that each element is strictly defined by the sum of two adjacent elements in the row immediately above transforms the problem from a combinatorial formula into a simple iterative state transition.

**Summary:** 
Pascal’s Triangle is just a 2D array where every cell is the sum of the two cells above it, making it a classic grid-based dynamic programming problem.

---
