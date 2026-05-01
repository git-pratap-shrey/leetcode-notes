---
title: "Valid Sudoku"
slug: valid-sudoku
date: "2026-04-26"
---

# My Solution
~~~cpp
class Solution {
public:
    bool isValidSudoku(vector<vector<char>>& board) {

        int arr[9][9]={0};
        int boxes[9][9] = {0};
        for(int i=0;i<9;i++){
            int m[9]={0};
            for(int j=0;j<9;j++){

                int val=board[i][j]-'1';
                if(val<0) continue;
                int boxIndex = (i/3)*3 + (j/3);
                if(arr[val][j]==1 || m[val]==1 || boxes[boxIndex][val]==1) return false;
                arr[val][j]=1;
                m[val]=1;
                boxes[boxIndex][val] = 1;

            }
        }
        return true;
        
    }
};
~~~

# Submission Review
## Approach
- **Technique:** Frequency tracking using auxiliary arrays (Hash-map equivalent). It uses three separate structures to track occurrences of digits (1-9) across rows, columns, and 3x3 sub-grids.
- **Optimality:** Optimal. The solution visits each cell exactly once and uses a constant amount of extra space relative to the fixed board size.

## Complexity
- **Time Complexity:** $O(1)$ (or $O(N^2)$ where $N=9$). The board is always $9 \times 9$, resulting in exactly 81 iterations.
- **Space Complexity:** $O(1)$ (or $O(N^2)$ where $N=9$). The auxiliary arrays `arr`, `boxes`, and `m` use a fixed amount of memory regardless of the input values.

## Efficiency Feedback
- **Runtime:** Very efficient due to the use of primitive arrays and a single-pass traversal.
- **Memory:** Minimal overhead.
- **Optimization:** The check `if(val < 0) continue;` correctly handles the empty cell character `'.'` because the ASCII value of `'.'` (46) minus `'1'` (49) is negative. However, explicitly checking `if(board[i][j] == '.')` would be more readable and robust.

## Code Quality
- **Readability:** Moderate. The logic is concise, but the variable names are non-descriptive.
- **Structure:** Good. The nested loop and early exit strategy are appropriate for this problem.
- **Naming:** Poor. 
    - `arr` is used to track columns; a name like `colSeen` would be clearer.
    - `m` is used to track rows; a name like `rowSeen` would be clearer.
    - `val` is the zero-indexed digit, which is acceptable.
- **Concrete Improvements:**
    - Replace `int arr[9][9]` and `int m[9]` with names that reflect their purpose (Columns and Rows).
    - Use `bool` instead of `int` for the tracking arrays to better represent the state (seen/not seen).
    - Explicitly check for `'.'` instead of relying on the ASCII subtraction result being negative.

---

# Question Revision
### Valid Sudoku

**Pattern:** Hashing / Set

**Brute Force:** 
Perform three separate passes over the board: one to check all rows, one for all columns, and one for all $3 \times 3$ sub-boxes, using a frequency array for each.

**Optimal Approach:**
Perform a single pass through the $9 \times 9$ grid. Maintain three collections of sets (or boolean arrays): one for rows, one for columns, and one for the nine $3 \times 3$ sub-boxes. For each cell $(r, c)$ containing a digit $v$, check if $v$ already exists in `rows[r]`, `cols[c]`, or `boxes[(r/3, c/3)]`. If it does, the board is invalid.

*   **Time Complexity:** $O(1)$ (The board is always $9 \times 9$, resulting in a constant 81 iterations).
*   **Space Complexity:** $O(1)$ (The storage for sets is fixed regardless of input values).

**The 'Aha' Moment:**
The requirement to verify "uniqueness" across three different dimensions (row, col, box) simultaneously indicates a Hashing/Set-based tracking strategy.

**Summary:**
Use a single pass and hash sets to track occurrences across rows, columns, and $3 \times 3$ sub-grids to detect duplicates.

---