---
title: "Palindromic Substrings"
slug: palindromic-substrings
date: "2026-03-30"

---
---

# My Solution
~~~cpp
class Solution {
public:
    bool build_dp(string& s, vector<vector<int>>& dp, int left, int right) {
        if (left > right)
            return true;

        if (dp[left][right] == 1)
            return true;
        if (dp[left][right] == 0)
            return false;

        if (left == right) {
            dp[left][right] = 1;
            return true;
        }
        if (s[left] == s[right] && build_dp(s, dp, left + 1, right - 1)) {
            dp[left][right] = 1;
            return true;
        }
        dp[left][right] = 0;
        return false;
    }
    
    int countSubstrings(string s) {
        vector<vector<int>> dp(s.size(), vector<int>(s.size(), -1));
        int count = 0;
        for (int i = 0; i < s.size(); i++) {
            for (int j = i; j < s.size(); j++) {
                if (build_dp(s, dp, i, j)) {
                    count++;
                }
            }
        }

        return count;
    }
};
~~~

# Submission Review
## Approach
- **Technique:** Memoized recursion (Top-down DP).
- **Optimality:** Suboptimal. While the DP state caching is correct, the overall approach checks all $O(N^2)$ possible substrings explicitly. Manacher's algorithm or the "Expand Around Center" technique are more efficient.

## Complexity
- **Time Complexity:** $O(N^2)$, where $N$ is the length of the string. Each state in the $N \times N$ matrix is computed once, and there are $N^2$ states.
- **Space Complexity:** $O(N^2)$ to store the `dp` table and the recursion stack.

## Efficiency Feedback
- **Bottleneck:** The $O(N^2)$ space complexity is unnecessary. 
- **Optimization:** You can achieve $O(1)$ auxiliary space (excluding the input string) by using the "Expand Around Center" approach, which iterates through all $2N-1$ possible centers and expands outwards until the palindrome property is violated. This also avoids the overhead of recursion.

## Code Quality
- **Readability:** Good. The logic is clean and easy to follow.
- **Structure:** Moderate. The `build_dp` function is logically sound, but the nested loops in `countSubstrings` combined with the recursion make the control flow slightly more complex than necessary.
- **Naming:** Good. Variable names like `left`, `right`, and `dp` are standard and descriptive.

### Concrete Improvements
1. **Iterative DP:** If you prefer DP, use a bottom-up iterative approach. This avoids potential stack overflow issues for very large strings and reduces function call overhead.
2. **Space Optimization:** Transition to the "Expand Around Center" pattern:
   ```cpp
   int count = 0;
   for (int i = 0; i < s.size(); i++) {
       // Odd length
       int l = i, r = i;
       while (l >= 0 && r < s.size() && s[l--] == s[r++]) count++;
       // Even length
       l = i, r = i + 1;
       while (l >= 0 && r < s.size() && s[l--] == s[r++]) count++;
   }
   ```
   This eliminates the `vector<vector<int>>` and reduces space to $O(1)$.

---
---


# Question Revision
### Revision Report: Palindromic Substrings

**Pattern:** Expand Around Center (Two Pointers)

**Brute Force:**
Generate every possible substring ($O(n^2)$) and verify if each is a palindrome ($O(n)$), resulting in a total complexity of **$O(n^3)$** time and **$O(1)$** space.

**Optimal Approach:**
Iterate through each index (and the gaps between indices) as a potential center of a palindrome, expanding outwards as long as characters match.
*   **Time Complexity:** $O(n^2)$ because there are $2n-1$ centers and each expansion takes $O(n)$.
*   **Space Complexity:** $O(1)$ (excluding the input storage).

**The 'Aha' Moment:**
When a problem asks for all substrings with a specific property that grows symmetrically, treating every index and inter-index gap as a potential center eliminates redundant checks.

**Summary:**
Always consider "Expand Around Center" when a problem requires checking palindromes, as it leverages symmetry to drop the complexity from cubic to quadratic.

---
