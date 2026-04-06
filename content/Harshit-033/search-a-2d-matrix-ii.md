---
title: "Search a 2D Matrix II"
slug: search-a-2d-matrix-ii
date: "2026-04-06"

---
---

# My Solution
~~~c


bool searchMatrix(int** matrix, int matrixSize, int* matrixColSize, int target){

    int col=matrixColSize[0]-1;
    int row=0;

    while(row<matrixSize && col>=0){
        if(matrix[row][col]==target){
            return true;
        }

        if(matrix[row][col]<target){
            row++;
        }
        else{
            col--;
        }
    }

    return false;


}
~~~

# Submission Review
## Approach
*   **Technique:** Greedy traversal starting from the top-right corner (or bottom-left).
*   **Optimality:** Optimal. It leverages the sorted property of rows and columns to eliminate one row or column in each iteration.

## Complexity
*   **Time Complexity:** $O(M + N)$, where $M$ is the number of rows and $N$ is the number of columns. Each step moves either down or left, visiting at most $M+N$ elements.
*   **Space Complexity:** $O(1)$, as it uses a constant amount of extra space.

## Efficiency Feedback
*   The approach is highly efficient for the given constraints.
*   No meaningful optimizations are possible, as the algorithm already achieves the lower bound complexity for this search problem.

## Code Quality
*   **Readability:** Good. The logic is straightforward and easy to follow.
*   **Structure:** Good. The `while` loop condition correctly manages boundary checks.
*   **Naming:** Moderate. `col` and `row` are clear, but `matrixSize` and `matrixColSize` are standard library-provided names that are slightly ambiguous (it is not immediately clear if `matrixColSize` is a pointer or array without context, though this is typical for LeetCode C interfaces).
*   **Concrete Improvements:** 
    *   Add a check for `matrix == NULL` or `matrixSize == 0` at the start to handle edge cases gracefully, although the current logic implicitly returns `false` (or potentially dereferences a null pointer if `matrixColSize` is null). 
    *   Consider adding a `const` qualifier to `int** matrix` to indicate the matrix is not modified.

---
---


# Question Revision
**Defining the Problem Scope**

I'm currently focused on defining the problem scope for LeetCode's "Search a 2D Matrix II," aiming for a Markdown format tailored for junior/mid-level developers under mentorship. I'm prioritizing the inclusion of pattern recognition, brute force, and an optimal solution with clear logic and complexity analysis. The goal is to highlight a compelling "Aha!" moment for the developer.


**Refining the Solution's Structure**

I've refined the solution structure for LeetCode's 2D Matrix search. I'm prioritizing concise, high-signal content, immediately presenting the problem statement. The optimal approach uses "Staircase Search" starting from the top-right corner, offering an "Aha!" moment by comparing it to a Binary Search Tree root. The time complexity is O(m + n).


### Pattern
Search Space Reduction (Staircase Search)

### Brute Force
Iterate through every element in the $m \times n$ matrix using nested loops.
- **Time Complexity:** $O(m \times n)$
- **Space Complexity:** $O(1)$

### Optimal Approach
Start at the **top-right** corner $(0, \text{cols}-1)$. Compare the current element with the `target`:
1. If `matrix[row][col] == target`, return `true`.
2. If `matrix[row][col] > target`, the entire current column can be ignored because all elements below it are even larger; move **left** (`col--`).
3. If `matrix[row][col] < target`, the entire current row can be ignored because all elements to the left are even smaller; move **down** (`row++`).

Repeat until the target is found or the boundaries are exceeded. (Note: This also works starting from the bottom-left corner).

- **Time Complexity:** $O(m + n)$, as you can at most move $m$ steps down and $n$ steps left.
- **Space Complexity:** $O(1)$

### The 'Aha' Moment
The top-right and bottom-left corners are the only positions where the two available directions offer opposite sorting gradients (one direction decreases values while the other increases them), effectively turning the matrix into a Binary Search Tree.

### Summary
Eliminate an entire row or column at each step by navigating the matrix from a corner where the horizontal and vertical sort orders diverge.

---
