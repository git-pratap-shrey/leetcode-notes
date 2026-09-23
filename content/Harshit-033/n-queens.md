---
title: "N-Queens"
slug: n-queens
date: "2026-09-22"
---

# My Solution
~~~cpp
class Solution {
public:
    bool is_safe(vector<string> &board,int s,int n,int col){
        int r=n;
        int c=col;
        while(r>=0 && c>=0){
            if(board[r][c]=='Q') return false;
            r--;
            c--;

        }
        r=n;
        c=col;
        while(c>=0){
            if(board[r][c]=='Q') return false;
            c--;
        }
        c=col;
        while(r<s && c>=0){
            if(board[r][c]=='Q') return false;
            r++;
            c--;
        }
        return true;
    }

    void solve(vector<vector<string>> &ans,vector<string> &board,int n,int col){
        if(col==n){
            ans.push_back(board);
            return;
        }

        for(int i=0;i<n;i++){
            if(is_safe(board,n,i,col)){
                board[i][col]='Q';
                solve(ans,board,n,col+1);
                board[i][col]='.';
            }
        }
    }
    vector<vector<string>> solveNQueens(int n) {
        vector<vector<string>> ans;
        vector<string> board(n);
        string s(n,'.');
        for(int i=0;i<n;i++){
            board[i]=s;
        }
        solve(ans,board,n,0);
        return ans;
    }
};
~~~

# Submission Review
## Approach
- **Technique**: Backtracking. The solution attempts to place queens column by column and recurses. If a placement leads to no solution, it backtracks by removing the queen.
- **Optimality**: Suboptimal. While the backtracking logic is standard, the safety check is performed in $O(N)$ time per placement, whereas it can be optimized to $O(1)$ using auxiliary boolean arrays to track occupied rows and diagonals.

## Complexity
- **Time Complexity**: $O(N! \cdot N)$. There are $N!$ possible placements in the worst case, and for each, the `is_safe` function iterates up to $3N$ times.
- **Space Complexity**: $O(N^2)$. The board requires $O(N^2)$ space, and the recursion stack depth is $O(N)$.

## Efficiency Feedback
- **Safety Check Bottleneck**: The `is_safe` function manually traverses the row and diagonals. This can be replaced by three boolean arrays: `rowUsed[N]`, `diag1[2*N]`, and `diag2[2*N]`.
- **Memory**: The use of `vector<string>` for the board is standard for this specific return type, but repeatedly passing and copying these structures adds overhead.

## Code Quality
- **Readability**: Poor.
- **Structure**: Moderate. The separation of `is_safe` and `solve` is logical, but the implementation is confusing.
- **Naming**: Poor. 
    - In `is_safe`, the parameters `s` and `n` are used counter-intuitively. 
    - In `solve`, the call `is_safe(board, n, i, col)` passes the board size `n` into the parameter `s` and the row index `i` into the parameter `n`. This parameter swapping makes the code extremely difficult to trace and prone to bugs.
- **Concrete Improvements**:
    1. **Fix Variable Naming**: Rename `s` to `boardSize` and `n` to `row` in `is_safe`.
    2. **Avoid Parameter Swapping**: Pass arguments in a logical order (e.g., `is_safe(board, row, col, n)`).
    3. **Optimization**: Use bitmasking or boolean arrays to reduce the `is_safe` check from $O(N)$ to $O(1)$.

---

# Question Revision
### N-Queens Revision Report

**Pattern:** Backtracking

**Brute Force:** Try every possible combination of placing $n$ queens on $n^2$ squares and validate if any two queens attack each other.

**Optimal Approach:** 
Place queens row-by-row. To ensure validity in $O(1)$, maintain three sets to track occupied columns, positive diagonals (where $row + col$ is constant), and negative diagonals (where $row - col$ is constant). If a queen cannot be placed in a row, backtrack to the previous row and move that queen.
- **Time Complexity:** $O(N!)$
- **Space Complexity:** $O(N^2)$ (to store the board)

**The 'Aha' Moment:** The requirement to find all valid configurations while pruning invalid paths as soon as a constraint is violated points directly to Backtracking.

**Summary:** Place queens row-by-row and use sets to track columns and diagonals for instant collision detection.

---