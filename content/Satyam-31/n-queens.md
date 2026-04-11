---
title: "N-Queens"
slug: n-queens
date: "2026-04-11"

---
---

# My Solution
~~~cpp
class Solution {
public:
bool isSafe(vector<string>& board, int row, int col, int n) {

       
        for (int i = 0; i < row; i++) {
            if (board[i][col] == 'Q') return false;
        }

       
        for (int i = row, j = col; i >= 0 && j >= 0; i--, j--) {
            if (board[i][j] == 'Q') return false;
        }

        
        for (int i = row, j = col; i >= 0 && j < n; i--, j++) {
            if (board[i][j] == 'Q') return false;
        }

        return true;
    }

    void solve(vector<string>& board, int row, int n, vector<vector<string>>& ans) {

       
        if (row == n) {
            ans.push_back(board);
            return;
        }

        
        for (int col = 0; col < n; col++) {

            if (isSafe(board, row, col, n)) {

                board[row][col] = 'Q';

                solve(board, row + 1, n, ans);

              
                board[row][col] = '.';
            }
        }
    }

    vector<vector<string>> solveNQueens(int n) {
        vector<vector<string>> ans;
        vector<string> board(n, string(n, '.'));

        solve(board, 0, n, ans);

        return ans;
    }
};
~~~

# Submission Review
## Approach
*   **Technique:** Backtracking (recursive depth-first search).
*   **Optimality:** Optimal for finding all solutions. It explores the search space systematically and prunes invalid branches early.

## Complexity
*   **Time Complexity:** $O(N!)$, where $N$ is the size of the board. This is standard for N-Queens, as the branching factor decreases at each row.
*   **Space Complexity:** $O(N^2)$ to store the board and recursion stack depth, excluding the space required to store all solutions.

## Efficiency Feedback
*   **Bottleneck:** The `isSafe` function performs linear scans in $O(N)$ for every placement, leading to $O(N \cdot N!)$ total operations.
*   **Optimization:** You can achieve $O(1)$ lookup time for safety checks by using three boolean arrays (or bitmasks) to track occupied columns, left diagonals (`row - col`), and right diagonals (`row + col`). This would reduce the overhead of the `isSafe` function significantly.

## Code Quality
*   **Readability:** Good. The logic is clean and easy to follow.
*   **Structure:** Good. Separation of concerns between `isSafe` and `solve` is clear.
*   **Naming:** Good. The function and variable names are descriptive and standard.

### Concrete Improvements
1.  **Refactor `isSafe`:** Replace the manual iteration with three auxiliary data structures (e.g., `vector<bool> cols`, `diag1`, `diag2`) to perform constant-time validation. 
2.  **Pass by Reference:** You are correctly passing `ans` and `board` by reference, which avoids unnecessary copying.
3.  **Modern C++:** Consider using `std::vector<bool>` or bitsets for the safety arrays to save space. 
4.  **Diagonal Indexing:** For the diagonal checks, the constant-time mapping is:
    *   Column: `col`
    *   Left Diagonal: `row - col + (n - 1)`
    *   Right Diagonal: `row + col`

---
---


# Question Revision
### N-Queens Revision Report

**Pattern:** Backtracking

**Brute Force:**
Generate all possible permutations of queen placements on an $N \times N$ board and validate each configuration by checking if any two queens share a row, column, or diagonal.
*   **Complexity:** $O(N! \cdot N)$

**Optimal Approach:**
Use backtracking with constraint propagation. Maintain three boolean arrays (or bitmasks) to track occupied columns, positive diagonals ($row + col$), and negative diagonals ($row - col$). Instead of checking the whole board, only attempt to place a queen in rows where the column and both diagonals are currently unattacked.
*   **Time Complexity:** $O(N!)$
*   **Space Complexity:** $O(N)$

**The 'Aha' Moment:**
When the constraints of a problem require checking a valid configuration among an exponential search space, realizing that you can prune the search tree by tracking "attack vectors" transforms a brute-force search into a manageable state-space traversal.

**Summary:**
Whenever you need to place $N$ items with mutual constraints, use backtracking with boolean state-tracking to prune invalid paths the moment they are created.

---
