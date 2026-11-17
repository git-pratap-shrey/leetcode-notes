---
title: "Longest Palindromic Subsequence"
slug: longest-palindromic-subsequence
date: "2026-11-15"
---

# My Solution
~~~java
class Solution {
    public int longestPalindromeSubseq(String s) {
        int n = s.length();
        int[][] dp = new int[n][n];
        for(int i=n-1;i>=0;i--){
            dp[i][i] = 1;
            for(int j=i+1;j<n;j++){
                if(s.charAt(i)==s.charAt(j)){
                    dp[i][j] = 2+ dp[i+1][j-1];
                }
                else{
                    dp[i][j] = Math.max(dp[i+1][j],dp[i][j-1]);
                }
            }
        }
        return dp[0][n-1];
    }
}
~~~

# Submission Review
<thought>*   Problem: Longest Palindromic Subsequence.
    *   Language: Java.
    *   Approach: 2D Dynamic Programming.
    *   Core Logic:
        *   `dp[i][j]` represents the LPS of the substring from index $i$ to $j$.
        *   Base case: `dp[i][i] = 1` (single character is a palindrome).
        *   Recursive step:
            *   If `s[i] == s[j]`, `dp[i][j] = 2 + dp[i+1][j-1]`.
            *   Else, `dp[i][j] = max(dp[i+1][j], dp[i][j-1])`.
        *   Order of iteration: $i$ goes from $n-1$ down to $0$, $j$ goes from $i+1$ up to $n-1$. This ensures that `dp[i+1][j-1]`, `dp[i+1][j]`, and `dp[i][j-1]` are already computed.

    *   Time Complexity: Nested loops (outer $n$, inner $\approx n$). Total $O(n^2)$.
    *   Space Complexity: 2D array `int[n][n]`. Total $O(n^2)$.

    *   The approach is the standard optimal DP solution for LPS.
    *   Time complexity is $O(n^2)$, which is expected.
    *   Space complexity $O(n^2)$ can be optimized to $O(n)$ because each state only depends on the current row and the previous row. However, the current implementation is correct and standard.

    *   Readability: High. Simple, clean logic.
    *   Structure: Good. Single method, standard loop structure.
    *   Naming: `dp`, `n`, `s`, `i`, `j`. Acceptable for competitive programming, though `dp` is generic.

    *   Approach: DP (Optimal).
    *   Complexity: $O(n^2)$ Time, $O(n^2)$ Space.
    *   Efficiency: Mention the possibility of space optimization (1D array).
    *   Code Quality: Good.</thought>## Approach
- **Technique**: Dynamic Programming (Bottom-Up).
- **Optimality**: Optimal. The solution correctly implements the standard recurrence relation for the Longest Palindromic Subsequence problem.

## Complexity
- **Time Complexity**: $O(n^2)$, where $n$ is the length of the string. There are two nested loops iterating through the string dimensions.
- **Space Complexity**: $O(n^2)$ to store the DP table.

## Efficiency Feedback
- **Runtime**: The runtime is efficient for the given constraints.
- **Memory**: Memory usage is $O(n^2)$. This could be optimized to $O(n)$ by using two 1D arrays (or one array and a temporary variable), as the calculation for the current row $i$ only depends on results from row $i$ and row $i+1$.

## Code Quality
- **Readability**: Good. The logic is concise and follows the standard DP pattern for interval-based problems.
- **Structure**: Good. The iteration order (decrementing $i$, incrementing $j$) correctly handles dependency requirements.
- **Naming**: Moderate. While `dp`, `i`, and `j` are standard in competitive programming, more descriptive names (e.g., `lengthTable`) would improve maintainability in a production environment.
- **Improvement**: For very large strings, replacing `s.charAt(i)` with a `char[]` array (via `s.toCharArray()`) would slightly improve performance by avoiding repeated bounds checking and method calls.

---

# Question Revision
<thought>*   Problem: Longest Palindromic Subsequence (LPS).
    *   Goal: Create a concise, high-signal Markdown revision report.
    *   Role: Senior DSA trainer mentoring a student.
    *   Constraints: Concise, standard Big-O, 'Aha' moment = 1 sentence, no introductory pleasantries.

    *   *Pattern:* Dynamic Programming (specifically, Interval DP or reduction to Longest Common Subsequence).
    *   *Brute Force:* Try every possible subsequence ($2^n$ combinations), check if it's a palindrome, and track the max length.
    *   *Optimal Approach:*
        *   Option A (Interval DP): Let $dp[i][j]$ be the LPS in $s[i..j]$. If $s[i] == s[j]$, $dp[i][j] = 2 + dp[i+1][j-1]$. Else, $dp[i][j] = \max(dp[i+1][j], dp[i][j-1])$.
        *   Option B (LCS): The LPS of string $S$ is exactly the Longest Common Subsequence (LCS) of $S$ and its reverse $S_{rev}$.
    *   *Complexity:* Time $O(n^2)$, Space $O(n^2)$ (or $O(n)$ if optimized).
    *   *Aha Moment:* Palindromes read the same forward and backward, so the longest shared subsequence between a string and its reverse is the answer.

    *   *Pattern:* Dynamic Programming (Interval or LCS).
    *   *Brute Force:* Recursively generate all $2^n$ subsequences and check for palindromes.
    *   *Optimal:* Use the property that LPS of string $S$ is the Longest Common Subsequence (LCS) of $S$ and $\text{reverse}(S)$.
    *   *Complexity:* Time: $O(n^2)$, Space: $O(n^2)$.
    *   *Aha Moment:* "Palindromic" implies symmetry, suggesting that finding the common elements between the string and its mirror image reveals the longest palindrome.
    *   *Summary:* The Longest Palindromic Subsequence is simply the LCS of the string and its reverse.</thought>### Revision Report: Longest Palindromic Subsequence

- **Pattern:** Dynamic Programming (Interval DP or reduction to LCS).
- **Brute Force:** Recursively check all $2^n$ possible subsequences to see if they are palindromes and track the maximum length.
- **Optimal Approach:** 
    - **Logic:** Transform the problem into a Longest Common Subsequence (LCS) problem. The LPS of string $S$ is equivalent to the LCS of $S$ and its reverse $S_{rev}$. Alternatively, use interval DP where $dp[i][j]$ represents the LPS in range $[i, j]$; if $s[i] == s[j]$, add 2 to the result of the inner range $dp[i+1][j-1]$, otherwise take the maximum of $dp[i+1][j]$ and $dp[i][j-1]$.
    - **Complexity:** Time: $O(n^2)$ | Space: $O(n^2)$ (can be optimized to $O(n)$).
- **The 'Aha' Moment:** The symmetry of a palindrome means the longest sequence that appears in both the original string and its reverse is the longest palindromic subsequence.
- **Summary:** LPS is simply the LCS of the string and its reverse.

---