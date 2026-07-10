---
title: "Longest Palindromic Subsequence"
slug: longest-palindromic-subsequence
date: "2026-06-25"

---

# My Solution
~~~
class
 Solution {
public:
    int solve(string& a , string& b, int i, int j,vector<vector<int>>& dp){
        if (i>=a.size()) return 0;
        if (j>=b.size()) return 0;
        if (dp[i][j]!=-1) return dp[i][j];
        int ans;
        if (a[i]==b[j]){
            ans = 1 + solve(a,b,i+1,j+1,dp);
            dp[i][j] = ans;
        }
        else {
            ans = 0 + max(solve(a,b,i+1,j,dp),solve(a,b,i,j+1,dp));
            dp[i][j] = ans;
        }
        return ans;
    }
    int longestPalindromeSubseq(string s) {
        vector<vector<int>> dp (s.size(),vector<int>(s.size(),-1));
        string a = s;
        reverse(s.begin(),s.end());
        string b = s;
        return solve(a,b,0,0,dp);
    }
};
~~~

# Submission Review

## Approach

- **Technique**: Reduction to **Longest Common Subsequence (LCS)**. The code finds the LCS between the original string and its reverse, which is a standard optimal method for finding the Longest Palindromic Subsequence.
- **Optimality**: Optimal. The time and space complexity match the theoretical lower bounds for this approach.

## Complexity

- **Time Complexity**: $O(n^2)$, where $n$ is the length of the string. Each state in the $n \times n$ DP table is computed exactly once.
- **Space Complexity**: $O(n^2)$ to store the memoization table, plus $O(n)$ for the recursion stack.

## Efficiency Feedback

- **Memory**: The use of `vector<vector<int>>` introduces some overhead. For competitive programming, a fixed-size array or a 1D flattened vector would be slightly faster and more memory-efficient.
- **Recursion**: While correct, a bottom-up iterative DP approach would eliminate the recursion stack overhead and prevent potential `StackOverflow` for very large inputs.
- **Redundant Copying**: The strings are copied into `a` and `b`. This is $O(n)$ and negligible compared to $O(n^2)$, but unnecessary if the original string and its reverse were handled directly.

## Code Quality

- **Readability**: Moderate. The logic is clear, but the naming is overly generic.
- **Structure**: Good. The separation of the recursive helper and the main driver function is clean.
- **Naming**: Poor. 
    - `solve` $\rightarrow$ `findLCS` or `computeLPS`.
    - `a` and `b` $\rightarrow$ `original` and `reversed`.
    - `i` and `j` $\rightarrow$ `idx1` and `idx2`.
- **Concrete Improvements**:
    - Change `vector<vector<int>>` to a 2D array if the maximum constraint of $n$ is known.
    - Use `const string&` for parameters to be explicit about immutability.

---

# Question Revision

#

## Longest Palindromic Subsequence

**Pattern:** Dynamic Programming (Interval DP)

**Brute Force:** Recursively explore all possible subsequences and check if each is a palindrome.
- **Complexity:** $O(2^n \cdot n)$

**Optimal Approach:** Use a 2D DP table where `dp[i][j]` stores the LPS length for the substring from index $i$ to $j$.
- **Logic:** 
    - If `s[i] == s[j]`: The two characters contribute 2 to the length: `2 + dp[i+1][j-1]`.
    - If `s[i] != s[j]`: The LPS is the maximum of excluding either the leftmost or rightmost character: `max(dp[i+1][j], dp[i][j-1])`.
- **Time Complexity:** $O(n^2)$
- **Space Complexity:** $O(n^2)$ (can be optimized to $O(n)$).

**The 'Aha' Moment:** Recognizing that the LPS of a string is identical to the Longest Common Subsequence (LCS) of the string and its reverse.

**Summary:** Build the solution from the smallest possible intervals (single characters) outward to the full string length.

---
