---
title: "Longest Palindromic Substring"
slug: longest-palindromic-substring
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

    string longestPalindrome(string s) {
        vector<vector<int>> dp(s.size(), vector<int>(s.size(), -1));
        int maximum = 1;
        int start = 0;

        for (int i = 0; i < s.size(); i++) {
            for (int j = i; j < s.size(); j++) {
                if (build_dp(s, dp, i, j)) {
                    if (j - i + 1 > maximum) {
                        start = i;
                        maximum = max(maximum, j - i + 1);
                    }
                }
            }
        }

        return s.substr(start, maximum);
    }
};
~~~

# Submission Review
## Approach
- **Technique:** Memoized recursion (Top-down DP).
- **Optimality:** Suboptimal. While the DP state space $O(N^2)$ is correct, the implementation uses an $O(N^2)$ outer loop to iterate through all substrings, resulting in redundant checks and unnecessary overhead compared to iterative DP or the Expand Around Center approach.

## Complexity
- **Time Complexity:** $O(N^2)$, where $N$ is the string length. Although each state is computed once, the nested loops and recursion setup add constant factor overhead.
- **Space Complexity:** $O(N^2)$ due to the memoization table.

## Efficiency Feedback
- **Bottleneck:** The recursion stack depth can reach $O(N)$ for long strings, which is unnecessary. The iterative approach (either DP table filling or Expand Around Center) is generally faster and safer against stack overflow.
- **Optimization:** "Expand Around Center" is the optimal approach, yielding $O(N^2)$ time and $O(1)$ auxiliary space, significantly outperforming this $O(N^2)$ space solution.

## Code Quality
- **Readability:** Good. The logic is clean and easy to follow.
- **Structure:** Moderate. The `build_dp` helper function is well-defined, but the logic inside `longestPalindrome` is unnecessarily coupled with the recursion.
- **Naming:** Good. Variable names (`maximum`, `start`, `dp`) are intuitive.
- **Concrete Improvements:**
    - **Iterative DP:** Replace the recursive structure with an iterative `dp[i][j]` table approach to eliminate recursion overhead.
    - **Center Expansion:** Switch to the Expand Around Center algorithm to reduce space complexity from $O(N^2)$ to $O(1)$.
    - **Base Case:** The `maximum` initialization should handle empty strings (if applicable) more gracefully, as `s.substr` with length 1 on an empty string may cause issues depending on constraints.

---
---


# Question Revision
### Revision Report: Longest Palindromic Substring

**Pattern:** Expand Around Center / Dynamic Programming

**Brute Force:**
*   **Logic:** Generate all possible substrings ($O(n^2)$), check each for symmetry ($O(n)$).
*   **Complexity:** $O(n^3)$ time, $O(1)$ space.

**Optimal Approach:**
*   **Logic:** A palindrome mirrors around its center. Since a center can be one character (odd) or between two characters (even), there are $2n-1$ possible centers. Iterate through each center and expand outwards as long as the characters match.
*   **Complexity:** $O(n^2)$ time, $O(1)$ space.

**The 'Aha' Moment:**
When the problem involves finding a local property that grows symmetrically outward, identifying the "center" of that symmetry is almost always more efficient than evaluating complete substrings.

**Summary:**
Don't build substrings to check them; identify all possible centers and expand outwards until the symmetry breaks.

---
