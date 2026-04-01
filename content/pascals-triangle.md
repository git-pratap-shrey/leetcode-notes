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
*   **Technique:** Iterative Dynamic Programming.
*   **Optimality:** Optimal. It constructs the triangle row-by-row using the property that each element is the sum of the two elements above it in the previous row.

## Complexity
*   **Time Complexity:** $O(n^2)$, where $n$ is `numRows`. Every element in the triangle is visited exactly once.
*   **Space Complexity:** $O(n^2)$ to store the output structure. This is optimal as it matches the size of the required output.

## Efficiency Feedback
*   **Efficiency:** The implementation is highly efficient. It performs the necessary memory allocations upfront, avoiding dynamic resizing or reallocations.
*   **Minor Improvement:** The early `if` statements for `numRows == 1` and `numRows == 2` are safe but technically redundant; the nested loop structure would handle these cases correctly if the loop indices were adjusted or initialized properly.

## Code Quality
*   **Readability:** Good. The logic is straightforward and follows the standard construction method for Pascal's triangle.
*   **Structure:** Good. Memory allocation follows the expected pattern for LeetCode-style C problems.
*   **Naming:** Moderate. `arr` is generic; `triangle` or `result` would be more descriptive.
*   **Concrete Improvements:**
    *   **Memory Safety:** The code assumes `malloc` always succeeds. While typical in competitive programming, in production, one should check if `arr` or the inner arrays are `NULL`.
    *   **Loop Consolidation:** You can merge the initialization of the first two rows into the main loop by handling `i=0` and `i=1` inside the loop logic, which would reduce code duplication.
    *   **Documentation:** The code correctly follows the specific LeetCode signature for `returnColumnSizes`, which is often a source of error for beginners.

---
---


# Question Revision
### Revision Report: Pascal's Triangle

**Pattern:** Dynamic Programming / Iterative Construction

**Brute Force:** 
Calculate each row by recursively computing the previous row, leading to redundant calculations and $O(2^n)$ time complexity.

**Optimal Approach:**
Construct the triangle row-by-row using the property that `triangle[i][j] = triangle[i-1][j-1] + triangle[i-1][j]`. Initialize each row with 1s and fill the inner values by summing the two elements directly above in the previous row.
*   **Time Complexity:** $O(n^2)$, where $n$ is the number of rows.
*   **Space Complexity:** $O(n^2)$ to store the result triangle (or $O(n)$ if only the previous row is kept).

**The 'Aha' Moment:**
The problem explicitly defines each element as a mathematical dependency on its two upper neighbors, which is the textbook definition of overlapping subproblems in Dynamic Programming.

**Summary:**
Treat each row as the accumulation of its predecessor to transform a recursive combinatorial problem into a simple iterative summation.

---
