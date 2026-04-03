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
*   **Technique:** Memoized Recursion (Top-Down Dynamic Programming).
*   **Optimality:** Optimal. It effectively prunes the search space by memoizing the result of each suffix starting at index `left`.

## Complexity
*   **Time Complexity:** $O(n^2 \cdot m)$, where $n$ is the length of the string and $m$ is the average length of words in the dictionary. The nested loop runs $O(n^2)$ times, and the `substr` operation and hash lookup take $O(n)$ time.
*   **Space Complexity:** $O(n + k)$, where $n$ is the recursion depth/DP table size and $k$ is the space required for the `unordered_set`.

## Efficiency Feedback
*   **Bottleneck:** The `s.substr(left, right - left)` call creates a new string object in every iteration, incurring unnecessary heap allocation overhead.
*   **Optimization:** You can optimize this by checking prefix matches using `string_view` (C++17) to avoid string copies, or by reversing the iteration to only check dictionary words that could possibly fit the remaining length.

## Code Quality
*   **Readability:** Good. The logic is concise and easy to follow.
*   **Structure:** Good. Separation of the helper function from the main interface is standard and clean.
*   **Naming:** Moderate. `fn`, `hash`, `left`, and `right` are generic. `canBreak` or `memo` would be more descriptive.
*   **Improvements:**
    *   **Data Types:** Use `std::string_view` for the `substr` logic to prevent memory allocation during the loop.
    *   **Boundary:** The `dp` vector size should be `s.size() + 1` to safely handle the base case index if you ever needed to store it (though the current logic returns before accessing `dp[s.size()]`, it is safer practice).
    *   **Encapsulation:** The helper function could be marked `private` or implemented as a lambda inside `wordBreak` to keep the class interface clean.

---
---


# Question Revision
### Word Break (LeetCode 139)

**Pattern:** Dynamic Programming

**Brute Force:** Generate every possible substring combination using recursion. This leads to redundant calculations of the same suffixes, resulting in exponential time complexity, $O(2^n)$.

**Optimal Approach:** Use a boolean DP array `dp[i]` where `dp[i]` represents if the substring `s[0...i-1]` can be segmented into dictionary words.
*   **Logic:** Initialize `dp[0] = true`. For each index `i` from 1 to `n`, check every previous index `j < i`. If `dp[j]` is true and `s[j...i-1]` exists in the dictionary, set `dp[i] = true`.
*   **Time Complexity:** $O(n^2 \cdot k)$ where $n$ is string length and $k$ is the max word length (due to substring slicing/hashing).
*   **Space Complexity:** $O(n)$ to store the DP array.

**The 'Aha' Moment:** The problem asks for a binary outcome (can it be segmented?) based on overlapping subproblems that build upon previous valid segmentations.

**Summary:** Whenever a problem asks if a complex structure can be built from smaller, reusable parts, stop searching and start filling a DP table.

---
