---
title: "Longest Common Subsequence"
slug: longest-common-subsequence
date: "2026-09-26"
---

# My Solution
~~~cpp
class Solution {
public:
    int solve(string text1, string text2,int i,int j,vector<vector<int>>& dp){
        if(i==text1.size() || j==text2.size()){
            return 0;
        }
        if(dp[i][j]!=-1) return dp[i][j];
        int x=0;
        
        if(text1[i]==text2[j]){
            x=1+solve(text1,text2,i+1,j+1,dp);
        }
        else{
            x=0+max(solve(text1,text2,i+1,j,dp),solve(text1,text2,i,j+1,dp));
        }
        return dp[i][j]=x;
    }

    int longestCommonSubsequence(string text1, string text2) {
        vector<vector<int>> dp(text1.size()+1,vector<int>(text2.size()+1,0));
        //return solve(text1,text2,0,0,dp);
/*
        for(int i=0;i<=text1.size();i++){
            dp[i][text2.size()]=0;

        }
        for(int i=0;i<=text2.size();i++){
            dp[text1.size()][i]=0;
            
        }
*/
        for(int i=text1.size()-1;i>=0;i--){
            for(int j=text2.size()-1;j>=0;j--){
                int x=0;
        
                if(text1[i]==text2[j]){
                    x=1+dp[i+1][j+1];
                }
                else{
                    x=0+max(dp[i+1][j],dp[i][j+1]);
                }
                dp[i][j]=x;

            }
        }
        return dp[0][0];


        
    }
};
~~~

# Submission Review
## Approach
- **Technique**: Dynamic Programming (Bottom-Up). The solution also contains a commented-out top-down memoization approach.
- **Optimality**: Optimal. The bottom-up DP approach correctly computes the LCS by iterating through all state combinations.

## Complexity
- **Time Complexity**: $O(N \times M)$, where $N$ and $M$ are the lengths of `text1` and `text2` respectively. Every state in the DP table is computed once.
- **Space Complexity**: $O(N \times M)$ to store the 2D DP table.

## Efficiency Feedback
- **Memory**: The space complexity can be optimized to $O(\min(N, M))$ by using two rows (current and previous) instead of a full 2D matrix, as the calculation for `dp[i]` only depends on `dp[i+1]`.
- **Runtime**: The bottom-up approach is efficient and avoids the recursion overhead present in the commented-out `solve` function.

## Code Quality
- **Readability**: Moderate. The code contains a significant amount of dead code (commented-out recursive function and initialization loops) which clutters the implementation.
- **Structure**: Moderate. The presence of an unused helper function (`solve`) inside the class makes the final production code messy.
- **Naming**: Good. Variable names like `text1`, `text2`, and `dp` are standard for this problem.

**Concrete Improvements**:
1. Remove the `solve` method and all commented-out blocks to clean up the class.
2. Use `const string&` in the recursive function (if kept) to avoid unnecessary string copying, though not applicable to the current active bottom-up logic.
3. Implement space optimization (1D array) if memory limits are tight.

---

# Question Revision
# Revision Report: Longest Common Subsequence (LCS)

- **Pattern:** Dynamic Programming (2D Grid)
- **Brute Force:** Recursively explore all possible subsequences by comparing characters from the end of both strings. If they match, add 1; if not, branch into two recursive calls (skip char in string A or skip char in string B).
- **Optimal Approach:** 
    - **Logic:** Build a 2D table `dp[i][j]` representing the LCS of `text1[0...i-1]` and `text2[0...j-1]`. 
        - If `text1[i-1] == text2[j-1]`, then `dp[i][j] = 1 + dp[i-1][j-1]`.
        - Otherwise, `dp[i][j] = max(dp[i-1][j], dp[i][j-1])`.
    - **Time Complexity:** $O(N \times M)$ where $N, M$ are the lengths of the two strings.
    - **Space Complexity:** $O(N \times M)$ (can be optimized to $O(\min(N, M))$ using two rows).
- **The 'Aha' Moment:** When you need to find the "longest" shared sequence between two strings and the decision at the current index depends on previous optimal decisions.
- **Summary:** Use a 2D DP table where a match increments the diagonal value, and a mismatch takes the maximum of the top or left neighbors.

---