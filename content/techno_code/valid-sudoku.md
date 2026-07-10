---
title: "Valid Sudoku"
slug: valid-sudoku
date: "2026-07-01"

---

# My Solution
~~~
class
 Solution {
public:
    bool isValidSudoku(vector<vector<char>>& board) {

        vector<vector<int>>row(9,vector<int>(9,0));
        vector<vector<int>>col(9,vector<int>(9,0));
        vector<vector<int>>box(9,vector<int>(9,0));

        for(int i=0;i<9;i++){

            for(int j=0;j<9;j++){

                if(board[i][j]=='.')
                    continue;

                int val=board[i][j]-'1';
                int idx=(i/3)*3+(j/3);

                if(row[i][val]||col[j][val]||box[idx][val])
                    return false;

                row[i][val]=1;
                col[j][val]=1;
                box[idx][val]=1;
            }
        }

        return true;
    }
};
~~~

# Submission Review

## Approach

- **Technique**: Frequency tracking using lookup tables (hashing).
- **Optimality**: Optimal. The solution performs a single pass over the $9 \times 9$ grid and uses constant auxiliary space relative to the problem constraints.

## Complexity

- **Time Complexity**: $O(1)$ (or $O(N^2)$ where $N=9$). The board size is fixed, resulting in exactly 81 iterations.
- **Space Complexity**: $O(1)$ (or $O(N^2)$ where $N=9$). The three $9 \times 9$ matrices occupy a constant amount of memory.

## Efficiency Feedback

- **Memory Overhead**: The use of `vector<vector<int>>` triggers multiple heap allocations. Since the dimensions are constant (9x9), using stack-allocated arrays (e.g., `int row[9][9]`) or `std::bitset<9> row[9]` would be more performant and cache-friendly.
- **Data Type**: Using `int` to store binary states (0 or 1) is less efficient than `bool` or bit-masking.

## Code Quality

- **Readability**: Good. The logic is straightforward and easy to follow.
- **Structure**: Good. The nested loop correctly covers all cells, and the early exit (`return false`) is handled properly.
- **Naming**: Good. Variables `row`, `col`, `box`, `val`, and `idx` are descriptive and appropriate for the context.

**Concrete Improvements**:
- Replace `vector<vector<int>>` with `int row[9][9] = {0};` to eliminate dynamic allocation overhead.
- Alternatively, use `std::bitset<9> row[9];` to reduce the memory footprint and potentially speed up lookups.

---

# Question Revision

#

## Valid Sudoku

**Pattern:** Hashing / Tracking Sets

**Brute Force:** For every cell containing a digit, iterate through its entire row, entire column, and its $3 \times 3$ sub-box to check for duplicates.

**Optimal Approach:** Use three collections of sets (one for rows, one for columns, and one for $3 \times 3$ blocks) to track digits encountered during a single pass of the grid. For a cell at $(r, c)$, the block index can be identified as `(r // 3, c // 3)`.
- **Time Complexity:** $O(1)$ (fixed $9 \times 9$ grid) or $O(N^2)$ where $N$ is the grid dimension.
- **Space Complexity:** $O(1)$ (fixed $9 \times 9$ grid) or $O(N^2)$ to store the sets.

**The 'Aha' Moment:** The requirement to validate three independent constraints (row, column, and box) simultaneously suggests a single-pass traversal using hash-based trackers.

**Summary:** Iterate the grid once and use sets to track seen values for each row, column, and $3 \times 3$ block.

---
