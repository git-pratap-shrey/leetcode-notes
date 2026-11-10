---
title: "Valid Sudoku"
slug: valid-sudoku
date: "2026-11-03"
---

# My Solution
~~~java
class Solution {
    public boolean isValidSudoku(char[][] board) {
        for(int i=0;i<9;i++){
            HashSet<Character> rowset = new HashSet<>();
            HashSet<Character> colset = new HashSet<>();
            for(int j=0;j<9;j++){
                char r = board[i][j];
                if(r!='.'){
                    if(rowset.contains(r)){
                        return false;
                    }
                    rowset.add(r);
                }
                char c = board[j][i];
                if(c!='.'){
                    if(colset.contains(c)){
                        return false;
                    }
                    colset.add(c);
                } 
            }
        }
        for(int row =0;row<9;row+=3){
            for(int col=0;col<9;col+=3){
                HashSet<Character> set = new HashSet<>();
                for(int i=row;i<row+3;i++){
                    for(int j=col;j<col+3;j++){
                        char ch = board[i][j];
                        if(ch!='.'){
                            if(set.contains(ch)){
                                return false;
                            }
                            set.add(ch);
                        }
                    }
                }
            }
        }
        return true;
    }
}
~~~

# Submission Review
<thought>*   Problem: Valid Sudoku.
    *   Goal: Check if a 9x9 Sudoku board is valid (rows, columns, and 3x3 sub-boxes must not have duplicates).
    *   Language: Java.

    *   First part: Nested loops (`i` from 0-8, `j` from 0-8).
        *   `rowset` checks row `i`.
        *   `colset` checks column `i` (by accessing `board[j][i]`).
        *   Logic: If a character isn't '.', check if it exists in the set; if so, return false. Otherwise, add it.
    *   Second part: Nested loops for 3x3 blocks.
        *   Outer loops `row` and `col` increment by 3.
        *   Inner loops `i` and `j` iterate through the 3x3 block.
        *   Logic: Similar to above using a `HashSet`.

    *   Technique: Iterative scanning with HashSets for duplicate detection.
    *   Optimality: It is optimal in terms of time complexity ($O(1)$ since the board is fixed at 9x9, or $O(N^2)$ generally).

    *   Time Complexity: $O(1)$ (constant time because the input is always 9x9). More generally, $O(N^2)$ where $N=9$.
    *   Space Complexity: $O(1)$ (the sets store at most 9 elements each).

    *   The code creates many `HashSet` objects (18 for rows/cols, 9 for boxes).
    *   Since the range of values is fixed ('1'-'9'), a boolean array or a bitmask would be significantly faster and more memory-efficient than `HashSet<Character>`.

    *   Readability: Good. The logic is straightforward.
    *   Structure: Moderate. It separates row/col checks from box checks. These could be unified into a single pass, but separate passes are acceptable for clarity.
    *   Naming: Moderate. `rowset`, `colset`, `set`, `r`, `c`, `ch` are generic but understandable in this context.

    *   Avoid `HashSet<Character>` to prevent boxing/unboxing overhead. Use `boolean[10]` or an `int` bitmask.
    *   The row and column checks can be combined with the box check into a single nested loop structure to reduce the number of iterations over the board.</thought>## Approach
- **Technique**: Iterative scanning using `HashSet` to detect duplicates in rows, columns, and 3x3 sub-grids.
- **Optimality**: Optimal in terms of asymptotic time complexity, though suboptimal in constant-factor overhead due to object allocation.

## Complexity
- **Time Complexity**: $O(1)$ (The board is fixed at $9 \times 9$, resulting in a constant number of operations). Generally $O(N^2)$ where $N$ is the board dimension.
- **Space Complexity**: $O(1)$ (The sets store a maximum of 9 characters each).

## Efficiency Feedback
- **High Overhead**: The use of `HashSet<Character>` causes significant overhead due to **autoboxing** (converting `char` to `Character` objects) and heap allocations.
- **Optimization**: Since the input range is limited ('1'-'9'), replacing `HashSet` with a **boolean array** (`boolean[10]`) or a **bitmask** (`int`) would drastically reduce execution time and memory consumption.
- **Redundant Passes**: The code traverses the board twice (once for rows/cols, once for boxes). This could be unified into a single nested loop pass.

## Code Quality
- **Readability**: Good. The logic is explicit and easy to follow.
- **Structure**: Moderate. The separation of row/column checks and sub-grid checks is clean but leads to redundant iterations.
- **Naming**: Moderate. Variable names like `r`, `c`, and `ch` are overly brief; `rowset` and `colset` are acceptable.
- **Concrete Improvements**:
    - Replace `HashSet<Character>` with `boolean[]` to avoid boxing.
    - Use a single loop structure to validate rows, columns, and blocks simultaneously.
    - Consider using a single 1D array or a bitmask to track seen numbers for better cache locality.

---

# Question Revision
<thought>
*   Problem: Valid Sudoku (LeetCode).
*   Goal: Create a concise, high-signal Markdown revision report for a student.
*   Role: Senior DSA Trainer.
*   Constraints:
    *   Standard Big-O notation ($O(n)$, $O(1)$).
    *   'Aha' moment: Strictly one sentence.
    *   No introductory pleasantries.
    *   Format: Pattern, Brute Force, Optimal Approach, 'Aha' Moment, Summary.

    *   The problem asks to verify if a $9 \times 9$ Sudoku board is valid.
    *   Rules: Each row, each column, and each $3 \times 3$ sub-box must contain digits $1-9$ without repetition.
    *   Empty cells ('.') are ignored.

    *   Pattern: Hashing / Set.

    *   Brute Force: Check each row separately, then check each column separately, then check each of the 9 sub-boxes separately using three distinct passes.

    *   Optimal Approach: Single pass. Use hash sets to track numbers seen so far for each row, column, and box.
        *   Row identifier: `row_index`
        *   Column identifier: `col_index`
        *   Box identifier: `(row // 3, col // 3)`
    *   Complexity:
        *   Time: $O(1)$ since the board size is fixed at $81$ cells (or $O(n^2)$ if the board were $n \times n$).
        *   Space: $O(1)$ since the storage for sets is fixed at $81$ values (or $O(n^2)$).

    *   'Aha' Moment: The need to check for *duplicates* across three different dimensions (row, col, box) simultaneously points directly to using Hash Sets for tracking.

    *   Summary: Use a set of tuples (or multiple sets) to track seen numbers across rows, columns, and $3 \times 3$ grids in a single traversal.

    *   Pattern: Hashing
    *   Brute Force: Perform three separate passes over the board: once for rows, once for columns, and once for the nine $3 \times 3$ sub-boxes.
    *   Optimal Approach: Single pass using Hash Sets. For each cell `(r, c)` containing a digit `v`, store the triplets `(r, v)`, `(c, v)`, and `(r//3, c//3, v)`. If any triplet already exists in the set, the board is invalid.
        *   Time: $O(1)$ (Fixed $9 \times 9$ board)
        *   Space: $O(1)$ (Fixed $9 \times 9$ board)
    *   'Aha' Moment: The requirement to detect duplicates across three different constraints (row, column, and block) suggests tracking "seen" elements using a hash-based structure.
    *   Summary: Map coordinates to unique keys for rows, columns, and blocks to detect duplicates in one traversal.</thought>### Valid Sudoku Revision Report

- **Pattern**: Hashing / Set
- **Brute Force**: Perform three separate passes over the board: one to validate all rows, one for all columns, and one for all nine $3 \times 3$ sub-boxes.
- **Optimal Approach**: Single pass using a Hash Set. For every cell `(r, c)` containing digit `v`, attempt to insert three unique identifiers into the set: `(r, v)` for the row, `(c, v)` for the column, and `(r//3, c//3, v)` for the $3 \times 3$ block. If any insertion fails, a duplicate exists.
    - **Time Complexity**: $O(1)$ (The board is always $9 \times 9$, resulting in a constant 81 iterations).
    - **Space Complexity**: $O(1)$ (The set stores at most $3 \times 81$ entries).
- **The 'Aha' Moment**: The need to detect duplicates across three different constraints simultaneously suggests using unique keys in a Hash Set to track "seen" values.
- **Summary**: Use a set of tuples to track seen numbers across rows, columns, and $3 \times 3$ blocks in a single traversal.

---