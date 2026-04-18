---
title: "N-Queens"
slug: n-queens
date: "2026-04-17"
---

# My Solution
~~~cpp
class Solution {
public:
    void nq(vector<vector<string>>& ans,vector<string>& s,int n,int k){
        if(k==n){
            ans.push_back(s);
            return;
        }
        for(int i=0;i<n;i++){
            if(possible(s,k,i,n)){
                s[k][i]='Q';
                nq(ans,s,n,k+1);
                s[k][i]='.';
            }
        }
    }
    bool possible(vector<string>& s,int k,int sex,int n){
        for(int i=0;i<=k;i++){
            if(s[i][sex]=='Q'){
                return false;
            }
        }
        for(int i=k,j=sex;i>=0&&j>=0;i--,j--){
            if(s[i][j]=='Q'){
                return false;
            }
        }
        for(int i=k,j=sex;i>=0&&j<n;i--,j++){
            if(s[i][j]=='Q'){
                return false;
            }
        }
        return true;
    }
    vector<vector<string>> solveNQueens(int n) {
        vector<vector<string>>ans;
        vector<string>s(n,string(n,'.'));
        nq(ans,s,n,0);
        return ans;
    }
};
~~~

# Submission Review
## Approach
- **Technique**: Backtracking with recursive exploration.
- **Optimality**: Suboptimal. While the backtracking logic is correct, the safety check (`possible` function) iterates through the board, leading to unnecessary overhead.

## Complexity
- **Time Complexity**: $O(N!)$, as the algorithm explores permutations of column placements for each row. Each placement involves an $O(N)$ check.
- **Space Complexity**: $O(N^2)$ to store the board state and the recursion stack depth of $O(N)$.

## Efficiency Feedback
- **Bottleneck**: The `possible` function performs manual linear scans for columns and diagonals on every attempt.
- **Optimization**: Use three boolean arrays (or bitsets) to track occupied columns, main diagonals ($row - col$), and anti-diagonals ($row + col$). This would reduce the safety check from $O(N)$ to $O(1)$.

## Code Quality
- **Readability**: Moderate. The logic is straightforward, but naming is poor.
- **Structure**: Good. The separation between the recursive solver, the validation logic, and the initializer is clear.
- **Naming**: Poor. 
    - `nq` is non-descriptive (should be `backtrack` or `solve`).
    - `s` is vague (should be `board`).
    - `sex` is an inappropriate and confusing name for a column index.
    - `k` should be named `row` for clarity.
- **Improvements**:
    - Replace `sex` with `col`.
    - Pass `ans` and `s` by reference (already done) but consider making them member variables or using a helper wrapper to reduce argument passing.
    - Use `const` for parameters that are not modified.

---

# Question Revision
### N-Queens Revision Report

**Pattern:** Backtracking

**Brute Force:** 
Generate all possible combinations of placing $n$ queens on an $n \times n$ board ($\binom{n^2}{n}$) and validate each configuration against attack rules.

**Optimal Approach:**
*   **Logic:** Place queens row-by-row. For each row, iterate through columns and place a queen only if the column and both diagonals are unoccupied. Use three sets (or boolean arrays) to track:
    1.  Columns: `col`
    2.  Positive Diagonals: `row + col` (constant for all cells in a / diagonal)
    3.  Negative Diagonals: `row - col` (constant for all cells in a \ diagonal)
    If a placement leads to no solution in subsequent rows, remove the queen (backtrack) and try the next column.
*   **Time Complexity:** $O(n!)$
*   **Space Complexity:** $O(n^2)$ to store the board, or $O(n)$ for the recursion stack and tracking sets.

**The 'Aha' Moment:** 
The requirement to find all valid configurations of a constrained set suggests a state-space search where invalid paths can be pruned early.

**Summary:** 
Place queens row-by-row and use the sum/difference of coordinates to track diagonal conflicts in $O(1)$ time.

---