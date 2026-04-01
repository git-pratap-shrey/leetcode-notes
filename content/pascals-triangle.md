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
*   **Technique:** Dynamic Programming / Iterative construction.
*   **Optimality:** Optimal. The solution builds the triangle row-by-row using the property $C(n, k) = C(n-1, k-1) + C(n-1, k)$, which is the standard $O(N^2)$ approach for generating Pascal's Triangle.

## Complexity
*   **Time Complexity:** $O(N^2)$, where $N$ is `numRows`. Each element is visited exactly once to calculate its value.
*   **Space Complexity:** $O(N^2)$ to store the triangle, which is required by the problem constraints.

## Efficiency Feedback
*   **Performance:** The runtime is efficient. The allocation strategy is clean; it allocates exactly the required memory upfront.
*   **Edge Cases:** The code explicitly handles `numRows = 1` and `numRows = 2` safely, preventing out-of-bounds access for these cases.

## Code Quality
*   **Readability:** Good. The logic follows the mathematical definition clearly.
*   **Structure:** Moderate. The hard-coded checks for `numRows == 1` and `numRows == 2` are functional but could be unified into the main loop to reduce redundancy.
*   **Naming:** Good. `arr`, `i`, `j`, `numRows` are standard for this type of problem.

### Concrete Improvements
1.  **Refactoring:** The `numRows == 1` and `numRows == 2` blocks are unnecessary. If the loop `for(int i=2; i<numRows; i++)` is used, the logic naturally handles rows 0 and 1 if structured properly, or simply remove the early returns and let the main loop handle rows $\ge 2$.
2.  **Robustness:** There is no check for `malloc` failures (returning `NULL`). While not strictly required in many competitive programming environments, it is good practice for production-level C code.
3.  **Style:** Add whitespace around operators and after commas for better readability.

**Suggested loop simplification:**
```c
for (int i = 0; i < numRows; i++) {
    arr[i][0] = 1;
    arr[i][i] = 1;
    for (int j = 1; j < i; j++) {
        arr[i][j] = arr[i - 1][j - 1] + arr[i - 1][j];
    }
}
```
*This block removes the need for special case handling entirely.*

---
---


# Question Revision
### Revision Report: Pascal's Triangle

**Pattern:** Dynamic Programming / Iterative Construction

**Brute Force:** 
Calculate each element using the factorial formula $\binom{n}{k} = \frac{n!}{k!(n-k)!}$. This is inefficient due to repeated factorials and potential integer overflow.

**Optimal Approach:**
Construct each row based on the values of the previous row. Each element `triangle[i][j]` is the sum of `triangle[i-1][j-1]` and `triangle[i-1][j]`.
*   **Time Complexity:** $O(n^2)$, where $n$ is the number of rows.
*   **Space Complexity:** $O(n^2)$ to store the result, or $O(n)$ if only the previous row is maintained.

**The 'Aha' Moment:**
The visual structure of the triangle reveals that every interior element is physically positioned directly beneath the sum of two neighbors from the level above.

**Summary:** 
Always derive the current state from the immediate previous state to turn a combinatorial math problem into a simple additive sequence.

---
