---
title: "Sudoku Solver"
slug: sudoku-solver

---
---

# My Solution
~~~java
class Solution {
    public void solveSudoku(char[][] board) {
        solve(board);
    }
    public boolean solve(char[][] board){
        for(int i=0;i<board.length;i++){
            for(int j=0;j<board[i].length;j++){
                if(board[i][j]=='.'){
                    for(char c='1';c<='9';c++){
                        if(isvalid(board,i,j,c)){
                            board[i][j]= c;
                            if(solve(board)==true){
                                return true;
                            }
                            else{
                                board[i][j]='.';
                            }
                        }
                    }
                    return false;
                }
            }
        }
        return true;
    }
    public boolean isvalid(char[][] board,int row, int col, char c){
        for(int i=0;i<9;i++){
            if(board[row][i]==c){
            return false;
            }
            if(board[i][col]==c){
            return false;
            }
            if(board[3*(row/3)+i/3][3*(col/3)+i%3]==c){
            return false;
            }
        }
        return true;   
    }
}
~~~

# Submission Review
## Approach
*   **Technique:** Backtracking (Recursive Depth-First Search).
*   **Optimality:** Optimal for standard Sudoku grid sizes (9x9). The search space is small enough that brute-force backtracking with pruning (validity checks) effectively finds the solution.

## Complexity
*   **Time Complexity:** $O(9^m)$, where $m$ is the number of empty cells. While the upper bound is high, the constraints of Sudoku prune the search tree significantly in practice.
*   **Space Complexity:** $O(m)$, where $m$ is the number of empty cells, representing the recursion stack depth.

## Efficiency Feedback
*   **Bottleneck:** The `isvalid` method performs three linear scans of the board (row, column, and subgrid) for every placement attempt.
*   **Optimization:** You can maintain three boolean arrays (or bitmasks) to track used numbers in rows, columns, and 3x3 subgrids. This reduces `isvalid` from $O(1)$ constant time (relative to the grid size) by eliminating the $O(9)$ loop per call.

## Code Quality
*   **Readability:** Good. The logic is straightforward and idiomatic for a backtracking solution.
*   **Structure:** Good. Separation between the solver and the validity checker is clean.
*   **Naming:** Moderate. `isvalid` should be camelCase (e.g., `isValid`) to follow standard Java naming conventions.
*   **Improvements:**
    *   **Convention:** Use `isValid` instead of `isvalid`.
    *   **Performance:** Pre-calculating occupied numbers at the start of `solve` would significantly speed up the recursive process.
    *   **Style:** Remove the redundant `== true` in `if(solve(board) == true)`. `if(solve(board))` is sufficient and cleaner.

---
---


# Question Revision
### Revision Report: Sudoku Solver

**Pattern:** Backtracking

**Brute Force:**
Generate every possible permutation of digits (1–9) for every empty cell. Since there are up to 81 empty cells, the search space is $9^{81}$, which is computationally infeasible.

**Optimal Approach:**
Use backtracking with constraint propagation. Iterate through cells and, for each, attempt to place a valid digit (checking row, column, and 3x3 sub-grid constraints). If a path leads to a conflict, backtrack and try the next valid digit. 
*   **Time Complexity:** $O(9^m)$, where $m$ is the number of empty cells. In the worst case, this is $O(9^{81})$.
*   **Space Complexity:** $O(m)$ for the recursion stack.

**The 'Aha' Moment:**
When the problem requires finding a valid configuration within a constrained search space where a partial solution can be invalidated early, backtracking is the only way to systematically prune the state space.

**Summary:**
Treat Sudoku as a sequence of decisions where each choice constrains future possibilities; use backtracking to explore valid paths and revert state immediately upon hitting a constraint violation.

---
