--- title: "Sudoku Solver" slug: sudoku-solver date: "2026-07-08" ---  # My Solution ~~~class Solution {
public:
    bool helper(vector<vector<char>>& board,int row,int col){
        if(row==9){
            return true;
        }
        int nextRow=row , nextCol=col+1;
        if(nextCol==9){
            nextRow=row+1;
            nextCol=0;
        }
        if(board[row][col]!='.'){
            return helper(board,nextRow,nextCol);
        }

        for(char dig='1';dig<='9';dig++){
            if(isSafe(board,row,col,dig)){
                board[row][col]=dig;
                if(helper(board,nextRow,nextCol)){
                    return true;
                }
                board[row][col]='.';
            }
        }
        return false;
    }

    bool isSafe(vector<vector<char>>& board,int row,int col,char dig){
        //horizontal
        for(int j=0;j<9;j++){
            if(board[row][j]==dig){
                return false;
            }
        }
        //vertical
        for(int j=0;j<9;j++){
            if(board[j][col]==dig){
                return false;
            }
        }
        //block
        int srow=(row/3)*3;
        int scol=(col/3)*3;
        for(int i=srow;i<=srow+2;i++){
            for(int j=scol;j<=scol+2;j++){
                if(board[i][j]==dig){
                    return false;
                }
            }
        }
        return true;
    }

    void solveSudoku(vector<vector<char>>& board) {
        helper(board,0,0);
    }
}; - cpp~~~  # Submission Review ## Approach
- **Technique**: Backtracking. The solution uses a recursive depth-first search to try digits 1-9 in empty cells, backtracking when a constraint is violated.
- **Optimality**: Suboptimal but acceptable for a $9 \times 9$ grid. While it finds the solution, it performs redundant scans of the board for every digit attempt.

## Complexity
- **Time Complexity**: $O(9^{K})$ where $K$ is the number of empty cells. In the worst case, it explores a vast state space, though pruned by the `isSafe` checks.
- **Space Complexity**: $O(K)$ recursive stack depth, where $K \le 81$.

## Efficiency Feedback
- **Bottleneck**: The `isSafe` function is called repeatedly and performs three separate iterations (row, column, and $3 \times 3$ block) every time.
- **Optimization**: 
    - Use three 2D arrays or bitmasks (e.g., `bool rowUsed[9][10]`, `bool colUsed[9][10]`, `bool boxUsed[9][10]`) to track digits. This would reduce the `isSafe` check from $O(27)$ to $O(1)$.
    - Combine the row and column checks into a single loop to reduce iteration overhead.

## Code Quality
- **Readability**: Good. The logic is clean and follows a standard backtracking template.
- **Structure**: Good. The separation of the recursive driver (`helper`) and the validation logic (`isSafe`) is appropriate.
- **Naming**: Moderate. `helper` is too generic; a name like `solveRecursive` or `backtrack` would be more descriptive.
- **Concrete Improvements**:
    - **Combine Loops**: In `isSafe`, the row and column checks can be merged:
      ```cpp
      for(int i=0; i<9; i++) {
          if(board[row][i] == dig || board[i][col] == dig) return false;
      }
      ```
    - **Const Correctness**: `isSafe` should mark the board as `const vector<vector<char>>&` to indicate it does not modify the state.  ---  # Question Revision ### Sudoku Solver

**Pattern:** Backtracking

**Brute Force:** 
Attempt every possible combination of numbers (1-9) in all empty cells and verify the entire board's validity only after it is fully populated.

**Optimal Approach:** 
Recursively traverse the board. For every empty cell, try placing digits 1-9. Before placing, validate that the digit does not already exist in the current row, column, or $3 \times 3$ sub-box. If a placement leads to a solution, return true; otherwise, reset the cell (backtrack) and try the next digit.

*   **Time Complexity:** $O(9^{n})$ where $n$ is the number of empty cells.
*   **Space Complexity:** $O(n)$ for the recursion stack.

**The 'Aha' Moment:** 
The need to explore multiple possibilities while adhering to strict constraints—and the necessity to undo choices when they lead to a dead end—is the hallmark of backtracking.

**Summary:** 
Fill empty cells recursively and backtrack immediately upon hitting a constraint violation.  ---