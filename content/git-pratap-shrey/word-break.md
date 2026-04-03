---
title: "Word Break"
slug: word-break

---
---

# My Solution
~~~cpp
class Solution {
public:
    bool fn(string& s, unordered_set<string>& hash, vector<int>& dp, int left) {
        if (left == s.size()) return true;

        if (dp[left] != -1) return dp[left];

        for (int right = left + 1; right <= s.size(); right++) {
            if (hash.count(s.substr(left, right - left))) {
                if (fn(s, hash, dp, right)) {
                    return dp[left] = 1;
                }
            }
        }

        return dp[left] = 0;
    }

    bool wordBreak(string s, vector<string>& wordDict) {
        unordered_set<string> hash(wordDict.begin(), wordDict.end());
        vector<int> dp(s.size(), -1);
        return fn(s, hash, dp, 0);
    }
};
~~~

# Submission Review
## Approach
*   **Technique:** Top-down Dynamic Programming (Memoization) with recursion.
*   **Optimality:** Optimal. This is a standard approach to solving the Word Break problem by breaking the string into prefixes and recursively checking the suffix.

## Complexity
*   **Time Complexity:** $O(n^3)$, where $n$ is the length of the string $s$. There are $n$ states, and for each state, the loop runs $O(n)$ times with a substring operation taking $O(n)$.
*   **Space Complexity:** $O(n + m)$, where $n$ is the length of the string (for the `dp` array and recursion stack) and $m$ is the total number of characters in `wordDict` (for the hash set).

## Efficiency Feedback
*   **Substring Overhead:** The expression `s.substr(left, right - left)` creates a new string object in every iteration. In performance-critical scenarios, using `std::string_view` (C++17) would avoid these allocations and improve runtime.
*   **Set Lookup:** Using `unordered_set` is efficient, providing average $O(L)$ lookups (where $L$ is word length).

## Code Quality
*   **Readability:** Good. The logic is concise and follows standard DP patterns.
*   **Structure:** Good. Separation between the memoization helper and the driver function is clear.
*   **Naming:** Moderate. Function name `fn` is non-descriptive; `solve` or `canBreak` would be more professional.
*   **Concrete Improvements:**
    *   **String View:** Use `std::string_view` for substring operations to reduce heap allocations.
    *   **Parameter Passing:** The `dp` vector size is initialized to `s.size()`, but access index `left` reaches `s.size()` (base case). While the code works because the base case returns before checking `dp[left]`, changing the `dp` size to `s.size() + 1` makes the intent clearer and avoids off-by-one confusion.
    *   **Const correctness:** Pass `wordDict` or the `unordered_set` by `const` reference where applicable.

---
---


# Question Revision
### Revision Report: Word Break

**Pattern:** Dynamic Programming (Memoization or Tabulation)

**Brute Force:**
Use recursion to check every possible prefix of the string against the dictionary. If a prefix matches, recursively check the remainder. This results in $O(2^n)$ complexity due to redundant re-computation of overlapping subproblems.

**Optimal Approach:**
Use a boolean DP array `dp[i]` where `dp[i]` is true if the substring `s[0...i-1]` can be segmented.
*   **Logic:** For each index `i` from 1 to `n`, iterate through all split points `j < i`. `dp[i]` is true if `dp[j]` is true AND the substring `s[j...i-1]` exists in the dictionary.
*   **Time Complexity:** $O(n^2 \cdot m)$, where $n$ is string length and $m$ is the average length of words (due to substring slicing and hashing).
*   **Space Complexity:** $O(n)$ for the DP table.

**The 'Aha' Moment:**
When you realize that determining if a string can be broken depends entirely on the results of previously solved sub-segments, the overlapping subproblem structure mandates DP.

**Summary:** 
Whenever a problem asks if a sequence can be formed by combining elements from a set, define `dp[i]` as the state of the first `i` characters and look backward for valid transition points.

---
