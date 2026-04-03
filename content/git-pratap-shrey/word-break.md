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
* **Technique**: Top-down Dynamic Programming (Memoization).
* **Optimality**: Optimal. It explores substrings starting from the current index and caches results for each starting position to avoid redundant computations.

## Complexity
* **Time Complexity**: $O(n^3 + m)$, where $n$ is the length of the string and $m$ is the total number of characters in `wordDict`. The substring operation takes $O(n)$, and there are $O(n)$ states, leading to $O(n^2)$ total transitions, with each transition performing a string slice/hash lookup.
* **Space Complexity**: $O(n + m)$, where $n$ is the recursion depth/DP table size and $m$ is the size of the hash set.

## Efficiency Feedback
* **Runtime**: Good. The use of `unordered_set` provides average $O(1)$ lookups.
* **Potential Bottleneck**: The `s.substr(left, right - left)` creates a new string object in every iteration. While acceptable for typical constraints, it involves heap allocation.
* **Optimization**: To avoid string allocations, one could use `std::string_view` (C++17) or a Trie structure to match prefixes against the dictionary without slicing the original string.

## Code Quality
* **Readability**: Good. The logic is concise and easy to follow.
* **Structure**: Good. Using a helper function for the recursion is standard and clean.
* **Naming**: Moderate. `fn` and `hash` are overly generic. `canBreak` and `wordSet` would be more descriptive.
* **Improvements**:
    * Rename `fn` to something descriptive like `solve`.
    * Use `std::string_view` to eliminate temporary string copies during the `substr` calls.
    * The `dp` vector could be initialized with size `s.size() + 1` to handle the base case index more naturally.

---
---


# Question Revision
### Revision Report: Word Break

**Pattern:** Dynamic Programming (Memoization or Tabulation)

**Brute Force:**
Use recursion to check every possible prefix of the string against the dictionary. If a prefix matches, recursively check the remainder. This results in $O(2^n)$ complexity due to overlapping subproblems and exponential branching.

**Optimal Approach:**
Use a boolean DP array `dp[i]` where `dp[i]` is true if the substring `s[0...i-1]` can be segmented into dictionary words.
*   **Logic:** For each index `i`, iterate through all possible split points `j < i`. If `dp[j]` is true and `s[j...i-1]` is in the dictionary, then `dp[i]` is true.
*   **Time Complexity:** $O(n^2 \cdot k)$ where $n$ is string length and $k$ is the average cost of substring operations/hashing.
*   **Space Complexity:** $O(n)$ to store the DP table.

**The 'Aha' Moment:**
When a problem asks if a complex structure can be built by repeatedly combining smaller, overlapping valid sub-segments, it is a classic indicator that the results of those sub-segments should be cached.

**Summary:**
Whenever a problem requires partitioning a string to satisfy a global condition, use a DP array to store the reachability of each index to avoid redundant recursive branches.

---
