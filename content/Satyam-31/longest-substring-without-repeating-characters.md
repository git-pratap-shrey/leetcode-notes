---
title: "Longest Substring Without Repeating Characters"
slug: longest-substring-without-repeating-characters
date: "2026-02-25"

---
---

# My Solution
~~~cpp
class Solution {
public:
    int lengthOfLongestSubstring(string s) {
        unordered_map<char,int>mp;
       int left=0;
        int m=0;
        for(int i=0;i<s.size();i++){
             mp[s[i]]++;
             while(mp[s[i]]>1){
                mp[s[left]]--;
                left++;
             }
               m=max(m,i-left+1);
        }
        return m;
    }
};
~~~

# Submission Review
## Approach
- **Technique:** Sliding window using an `unordered_map` to track character frequencies.
- **Optimality:** It is optimal in terms of asymptotic time complexity, though using a fixed-size array (`vector<int>(128, -1)`) would be faster than `unordered_map` due to lower constant-factor overhead.

## Complexity
- **Time Complexity:** $O(n)$, where $n$ is the length of the string. Each character is visited at most twice (once by `i`, once by `left`).
- **Space Complexity:** $O(\min(n, m))$, where $m$ is the size of the character set (e.g., 128 for ASCII).

## Efficiency Feedback
- **Bottleneck:** `unordered_map` involves hashing overhead. Since character inputs are typically bounded (ASCII/Extended ASCII), a fixed-size array `int map[128] = {0}` is significantly more efficient.
- **Optimization:** Instead of incrementing and decrementing counts, store the **last seen index** of each character. This allows you to jump the `left` pointer directly to `last_index + 1`, reducing the `while` loop operations to a simple index comparison.

## Code Quality
- **Readability:** Good. The logic is straightforward and standard for this pattern.
- **Structure:** Good. Uses a clean sliding window pattern.
- **Naming:** Moderate. `m` is an ambiguous name; `maxLength` would be clearer. `mp` is generic; `lastSeen` or `charCount` would be better.
- **Improvements:**
    - Use `std::vector<int>(128, -1)` instead of `unordered_map` for faster lookup.
    - Add `ios::sync_with_stdio(0); cin.tie(0);` if this were to be used in a high-throughput competitive environment (though usually unnecessary for this specific problem).
    - Consider `s.length()` instead of `s.size()` (semantic preference).

---
---


# Question Revision
### Revision Report: Longest Substring Without Repeating Characters

**Pattern:** Sliding Window (with Hash Map/Set)

**Brute Force:**
Generate all possible substrings, check each for uniqueness using a Set, and track the maximum length found.
*   **Time Complexity:** $O(n^3)$ (or $O(n^2)$ with an optimized set check).
*   **Space Complexity:** $O(min(n, m))$, where $m$ is the size of the charset.

**Optimal Approach:**
Use a sliding window defined by two pointers (`left`, `right`). Expand `right` to include characters; if a duplicate is encountered, use a Hash Map to store the last seen index of each character and jump `left` directly to `map.get(char) + 1` to skip the repeated element.
*   **Time Complexity:** $O(n)$ (each character is visited at most twice).
*   **Space Complexity:** $O(min(n, m))$ for the Hash Map.

**The 'Aha' Moment:**
When the problem asks for the "longest substring" with a constraint on internal elements, it is a clear indicator that the search space can be pruned using a sliding window to avoid redundant re-scans.

**Summary:**
Whenever you need to track a "valid" range in a contiguous sequence, use a sliding window to expand the end and shrink the start to maintain the constraint in linear time.

---
