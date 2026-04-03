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
*   **Technique:** Top-down Dynamic Programming (Memoization).
*   **Optimality:** Optimal. The approach explores partitions of the string and uses memoization to store the result of each suffix starting index, avoiding redundant subproblem computations.

## Complexity
*   **Time Complexity:** $O(n^3)$, where $n$ is the length of the string. The recursion depth is $O(n)$, and the loop runs up to $O(n)$ times. String slicing `s.substr()` also takes $O(n)$ time.
*   **Space Complexity:** $O(n + m \cdot k)$, where $n$ is the string length, $m$ is the number of words, and $k$ is the average length of a word (the space used by the `unordered_set`). The recursion stack and `dp` vector take $O(n)$.

## Efficiency Feedback
*   **Bottleneck:** The `s.substr()` call inside the loop creates a new string object in every iteration, which is costly.
*   **Optimization:** You can avoid substring creation by using `string_view` (C++17) to reference substrings of the original string without copying, or by using a Trie to match words while iterating.

## Code Quality
*   **Readability:** Good. The logic is straightforward and standard for this problem.
*   **Structure:** Good. The separation of the memoization helper function is clear.
*   **Naming:** Moderate. `fn` is generic; a more descriptive name like `solve` or `canBreak` would be better.
*   **Improvements:** 
    *   Rename `fn` to `canBreak`.
    *   Use `std::string_view` for the helper function parameters to avoid copying the string during `substr` comparisons.
    *   The `dp` vector size is `s.size()`, but in the base case, `left` can equal `s.size()`. Ensure the `dp` vector is sized `s.size() + 1` or handle the bounds check carefully to avoid potential off-by-one errors if `left` index usage varies. Current code is safe because of the base case `left == s.size()` returning before accessing `dp`.

---
---


# Question Revision
### Word Break (LeetCode 139)

**Pattern:** Dynamic Programming

**Brute Force:** 
Use recursion to check every possible prefix of the string. If a prefix exists in the dictionary, recursively call the function on the remainder of the string. This results in $O(2^n)$ complexity due to redundant re-computation of overlapping sub-problems.

**Optimal Approach:** 
Use a DP array `dp` of size `n + 1`, where `dp[i]` is a boolean representing whether `s[0...i-1]` can be segmented. Iterate through the string, and for each position `i`, check all previous positions `j` such that `dp[j]` is true and the substring `s[j...i]` exists in the dictionary.
*   **Time Complexity:** $O(n^2 \cdot m)$ where $n$ is string length and $m$ is the average word length (due to substring slicing).
*   **Space Complexity:** $O(n)$ to store the DP table.

**The 'Aha' Moment:** 
The problem asks for a boolean existence of a combination derived from smaller, overlapping sub-problems, which is the hallmark signature for DP rather than simple recursion.

**Summary:** 
Whenever a complex problem can be broken into smaller, reusable sub-decisions that build toward a final state, use a DP array to cache the "can I reach this point?" result.

---
