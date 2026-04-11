---
title: "Sudoku Solver"
slug: sudoku-solver
date: "2026-04-11"

---
---

# My Solution
~~~cpp
class Solution {
public:
    bool isSafe(vector<vector<char>>& board, int row, int col, char digit) {

       
        for (int j = 0; j < 9; j++) {
            if (board[row][j] == digit) return false;
        }

        
        for (int i = 0; i < 9; i++) {
            if (board[i][col] == digit) return false;
        }

        
        int startRow = (row / 3) * 3;
        int startCol = (col / 3) * 3;

        for (int i = startRow; i < startRow + 3; i++) {
            for (int j = startCol; j < startCol + 3; j++) {
                if (board[i][j] == digit) return false;
            }
        }

        return true;
    }

    bool solve(vector<vector<char>>& board,int row,int col){
        if(row==9) return true;
        int nextRow=row;
        int nextCol=col+1;
        if(col==8){
            nextRow=row+1;
            nextCol=0;
        }
        
        if (board[row][col] != '.') {
            return solve(board, nextRow, nextCol);
        }

        for (char digit = '1'; digit <= '9'; digit++) {

            if (isSafe(board, row, col, digit)) {

                board[row][col] = digit;

                if (solve(board, nextRow, nextCol)) {
                    return true;
                }

               
                board[row][col] = '.';
            }
        }

        return false;
    }
    void solveSudoku(vector<vector<char>>& board) {
       solve(board,0,0);
        
    }
};
~~~

# Submission Review
## Approach
*   **Technique:** Backtracking (recursive depth-first search).
*   **Optimality:** Standard optimal approach for solving Sudoku by brute-forcing empty cells, though performance could be improved by using bitmasks to track constraints.

## Complexity
*   **Time Complexity:** $O(9^m)$, where $m$ is the number of empty cells. In the worst case (empty board), this is $O(9^{81})$, though pruning via `isSafe` significantly reduces the actual search space.
*   **Space Complexity:** $O(m)$ due to the recursion stack depth.

## Efficiency Feedback
*   **Redundancy:** The `isSafe` function performs three full loops every time it is called. Since `isSafe` is called inside the recursion, this is repeatedly checking constraints that could be cached.
*   **Optimization:** Using three arrays of bitmasks (or boolean arrays) to track used digits in each row, column, and 3x3 block would reduce `isSafe` from $O(1)$ (effectively constant 27 operations) to $O(1)$ constant time lookup.

## Code Quality
*   **Readability:** Good. The logic is clear and follows a standard recursive pattern.
*   **Structure:** Good. The separation between the validator (`isSafe`) and the solver (`solve`) is clean.
*   **Naming:** Good. `isSafe`, `solve`, and parameter names are intuitive and descriptive.

### Concrete Improvements
1.  **State Tracking:** Maintain `rowUsed[9][9]`, `colUsed[9][9]`, and `boxUsed[3][3][9]` boolean arrays. This allows you to check if a digit is safe in $O(1)$ without iterating over the board, which provides a noticeable speedup in tight recursive calls.
2.  **Input Validation:** The current code assumes the input `board` is always valid or solvable. Adding a basic initial check or ensuring `solve` returns correctly is fine, but the function signature is correct for the standard LeetCode problem.
3.  **Parameter Passing:** Passing `board` by reference is already correctly implemented, avoiding unnecessary copies.

---
---


# Question Revision
### Revision Report: Sudoku Solver

**Pattern:** Backtracking (Constraint Satisfaction)

**Brute Force:** 
Generate every possible combination of digits 1-9 for all empty cells ($9^{81}$ complexity) and validate each completed board. This is computationally infeasible due to the massive search space.

**Optimal Approach:** 
Use a recursive backtracking algorithm that attempts to fill cells one by one. Maintain state (e.g., bitmasks or boolean arrays) for rows, columns, and 3x3 sub-grids to perform $O(1)$ validation for each placement.
*   **Time Complexity:** $O(9^m)$, where $m$ is the number of empty cells. While worst-case is exponential, pruning invalid paths significantly reduces the branching factor in practice.
*   **Space Complexity:** $O(m)$ for the recursion stack and $O(1)$ for the fixed-size auxiliary state arrays.

**The 'Aha' Moment:** 
When the problem requires finding a single valid configuration in a decision tree where choices are interdependent and early invalid moves must be undone, backtracking is the standard tool.

**Summary:** 
Use backtracking with state-tracking arrays to prune the search space early whenever you need to explore permutations that must satisfy global constraints.

---
