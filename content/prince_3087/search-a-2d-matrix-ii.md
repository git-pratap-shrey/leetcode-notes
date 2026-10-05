---
title: "Search a 2D Matrix II"
slug: search-a-2d-matrix-ii
date: "2026-10-05"
---

# My Solution
~~~cpp
class Solution {
public:
    bool searchMatrix(vector<vector<int>>& mat, int target) {
       int m = mat.size();
       int n = mat[0].size();
       int row = m-1;
       int col = 0;
       while(row>=0 && col<n){

        if(mat[row][col]==target){
            return true;
        }
        else if(mat[row][col]<target){
            col++;
        }
        else{
            row--;
        }

       }
       return false;
    }
};
~~~

# Submission Review
## Approach
- **Technique:** Staircase Search (Two-pointer approach starting from the bottom-left corner).
- **Optimality:** Optimal. It leverages both row-wise and column-wise sorting to eliminate a row or column in each step.

## Complexity
- **Time Complexity:** $O(m + n)$, where $m$ is the number of rows and $n$ is the number of columns. In the worst case, the pointer traverses from the bottom-left to the top-right.
- **Space Complexity:** $O(1)$, as it only uses a few integer variables regardless of input size.

## Efficiency Feedback
- **Runtime:** Very efficient. The algorithm avoids redundant checks and does not use expensive operations.
- **Memory:** Minimal footprint; no additional data structures are allocated.

## Code Quality
- **Readability:** Good. The logic is straightforward and easy to follow.
- **Structure:** Good. The `while` loop condition and the `if-else if-else` block correctly handle all traversal scenarios.
- **Naming:** Moderate. While `row` and `col` are acceptable, `m` and `n` are generic; however, they are standard conventions in competitive programming.
- **Improvements:**
    - Add a check for an empty matrix (`if (mat.empty() || mat[0].empty()) return false;`) to prevent runtime errors (segmentation faults) when accessing `mat[0].size()`.
    - Use `const auto&` or avoid unnecessary copies if the matrix were passed by value, though it is correctly passed by reference here.

---

# Question Revision
# Revision Report: Search a 2D Matrix II

- **Pattern**: Two Pointers / Staircase Search
- **Brute Force**: Iterate through every element in the matrix using nested loops.
    - **Complexity**: Time $O(m \times n)$, Space $O(1)$.
- **Optimal Approach**: 
    Start at the **top-right corner** (or bottom-left). Since rows are sorted left-to-right and columns are sorted top-to-bottom:
    - If `current > target`: Move **left** (entire column is now ruled out).
    - If `current < target`: Move **down** (entire row is now ruled out).
    - If `current == target`: Return true.
    - **Complexity**: Time $O(m + n)$, Space $O(1)$.
- **The 'Aha' Moment**: The dual-sorting property creates a "decision tree" at the corners where one direction strictly increases and the other strictly decreases.
- **Summary**: Start at the top-right corner to treat the 2D matrix like a Binary Search Tree.

---