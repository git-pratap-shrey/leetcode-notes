---
title: "Regular Expression Matching"
slug: regular-expression-matching
date: "2026-09-26"
---

# My Solution
~~~cpp
class Solution {
public:
    int solve(string s,string p,int i,int j,vector<vector<int>>& dp){
        if(i<0&&j<0) return 1;
        if(j<0) return 0;
        
        if(i<0){
            for(int k=0;k<=j;k+=2){
                if(k+1>j||p[k+1]!='*') return 0;
            }
            return 1;
        }
        if(dp[i][j]!=-1){
            return dp[i][j];
        }
        
        if(s[i]==p[j]||p[j]=='.')
            return dp[i][j]=solve(s,p,i-1,j-1,dp);
        
        if(p[j]=='*'){
            if(j==0) return 0;
            
            if(p[j-1]==s[i]||p[j-1]=='.')
                return dp[i][j]=solve(s,p,i-1,j,dp)||solve(s,p,i,j-2,dp);
            
            return dp[i][j]=solve(s,p,i,j-2,dp);
        }
        
        return 0;
    }

    bool isMatch(string s,string p){
        vector<vector<int>> dp(s.size(),vector<int>(p.size(),-1));
        int x=solve(s,p,s.size()-1,p.size()-1,dp);
        return x;
    }
};
~~~

# Submission Review
## Approach
- **Technique**: Top-down Dynamic Programming (Memoization) using recursion.
- **Optimality**: Optimal. The state transitions correctly handle the `*` wildcard (treating it as zero or more of the preceding element) and the `.` wildcard.

## Complexity
- **Time Complexity**: $O(N \times M)$, where $N$ is the length of string `s` and $M$ is the length of pattern `p`. Each state $(i, j)$ is computed once.
- **Space Complexity**: $O(N \times M)$ for the DP table, plus $O(N + M)$ for the recursion stack.

## Efficiency Feedback
- **Memory**: The use of `vector<vector<int>>` introduces some overhead. Using a fixed-size array or a 1D vector mapping would be slightly faster.
- **Base Case**: The loop in the `i < 0` base case is efficient, correctly ensuring that the remaining pattern consists only of `char + *` pairs.
- **Runtime**: The logic avoids redundant calculations effectively via the `dp` table.

## Code Quality
- **Readability**: Moderate. The logic is concise, but the lack of spacing around operators (e.g., `i<0&&j<0`) makes it denser than necessary.
- **Structure**: Good. The separation of the recursive helper `solve` and the wrapper `isMatch` is standard.
- **Naming**: Moderate. `s`, `p`, `i`, and `j` are standard for this problem, but `x` in `isMatch` is generic.
- **Concrete Improvements**:
    - Change `vector<vector<int>>` to `vector<vector<signed char>>` or `int dp[101][101]` if constraints allow, to reduce memory footprint.
    - Add whitespace around logical operators for better readability.
    - Pass `s` and `p` by reference in the `solve` function (already done, but ensure `const string&` to prevent accidental modifications and signal intent).

---

# Question Revision
# Revision Report: Regular Expression Matching

- **Pattern**: Dynamic Programming (Top-Down Memoization or Bottom-Up Tabulation).
- **Brute Force**: Recursive backtracking. Check if current characters match; if a `*` is encountered, branch into two paths: ignore the `char*` sequence (zero occurrences) or consume one matching character and stay at the same pattern position.
- **Optimal Approach**: 
    - **Logic**: Use a 2D DP table `dp[i][j]` representing if `s[i:]` matches `p[j:]`. 
        - If `p[j]` is not `*`: Match `s[i]` with `p[j]` (or `.`) and move both pointers to `i+1, j+1`.
        - If `p[j+1]` is `*`: Two choices: (1) Treat `char*` as empty and move to `j+2`, or (2) If `s[i]` matches `p[j]`, consume `s[i]` and move to `i+1, j`.
    - **Complexity**: 
        - Time: $O(S \times P)$ where $S$ and $P$ are lengths of string and pattern.
        - Space: $O(S \times P)$ for the memoization table.
- **The 'Aha' Moment**: The `*` operator creates overlapping subproblems and multiple decision paths (stay vs. move), which is a classic signal for DP.
- **Summary**: Handle the `*` by branching between skipping the character sequence or consuming one match while remaining on the same pattern state.

---