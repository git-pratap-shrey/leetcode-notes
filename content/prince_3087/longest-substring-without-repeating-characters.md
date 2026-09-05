---
title: "Longest Substring Without Repeating Characters"
slug: longest-substring-without-repeating-characters
date: "2026-08-31"
---

# My Solution
~~~cpp
class Solution {
public:
    int lengthOfLongestSubstring(string s) {
        unordered_map<char,int> f;
        int low=0;
        int result = 0;
        int high = 0;
        while(high<s.size()){
            f[s[high]]++;
            int k=high-low+1;
            while(f.size()<k){
                f[s[low]]--;
                if(f[s[low]]==0){
                    f.erase(s[low]);
                }
                low++;
                k=high-low+1;
            }
            if(f.size()==k){
                int length = high-low+1;
                result=max(result,length);
            }
            high++;
        }
        return result;
        
    }
};
~~~

# Submission Review
## Approach
*   **Technique:** Sliding Window using an `unordered_map` to track character frequencies.
*   **Optimal:** No. The current approach uses an inner `while` loop to shrink the window, which is unnecessary for this problem. The standard optimal approach uses a hash map (or array) to store the *last seen index* of each character, allowing the window start to jump in $O(1)$ without an inner loop.

## Complexity
*   **Time Complexity:** $O(n)$, where $n$ is the length of the string. Although there is a nested loop, the `low` pointer only traverses the string once across the entire execution. However, `unordered_map` operations add a constant overhead.
*   **Space Complexity:** $O(min(n, m))$, where $m$ is the size of the character set (e.g., 128 for ASCII).

## Efficiency Feedback
*   **Bottleneck:** Using `std::unordered_map` involves hashing overhead. Since the problem typically involves ASCII/extended ASCII characters, a fixed-size integer array `int map[128]` (or 256) would be significantly faster and more cache-friendly.
*   **Redundancy:** The condition `f.size() < k` effectively checks for duplicates. You can simplify the logic by updating the `low` pointer directly to `max(low, last_seen[s[high]] + 1)` instead of incrementing it one by one.

## Code Quality
*   **Readability:** Moderate. The logic is functional but slightly more complex than necessary due to the nested `while` structure.
*   **Structure:** Moderate. The `while` loops are clear, but the nested shrinking logic is atypical for this specific problem.
*   **Naming:** Moderate. `f` is an ambiguous name for a frequency map. `char_counts` or `seen` would be better. `low` and `high` are acceptable, but `left` and `right` are standard industry conventions for sliding window problems.
*   **Concrete Improvements:**
    *   Replace `unordered_map<char, int>` with `vector<int>(128, -1)` to store the last seen index.
    *   Eliminate the inner `while` loop entirely.
    *   Use `left = max(left, last_seen[s[right]] + 1)` to jump the window start.

---

# Question Revision
### Problem: Longest Substring Without Repeating Characters

**Pattern:** Sliding Window (with Hash Map/Set)

**Brute Force:**
Iterate through all possible substrings using nested loops ($O(n^2)$), and for each, verify uniqueness using a set ($O(n)$), resulting in $O(n^3)$ total time complexity.

**Optimal Approach:**
Use a **Sliding Window** maintained by two pointers (`left`, `right`). Expand `right` to include characters; if a character is already in the Hash Map (and within current bounds), jump `left` to the position immediately after the previous occurrence.
*   **Time Complexity:** $O(n)$ — Each character is visited at most twice.
*   **Space Complexity:** $O(min(m, n))$ — Where $m$ is the size of the character set.

**The 'Aha' Moment:**
When the problem asks for a contiguous sequence based on a condition (uniqueness) that allows for an expanding/contracting boundary, it is a clear signal to use a sliding window.

**Summary:**
Maintain a window of unique characters by shifting the left boundary to `map[char] + 1` whenever a duplicate is encountered.

---