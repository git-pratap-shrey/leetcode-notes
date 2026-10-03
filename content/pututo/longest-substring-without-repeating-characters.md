---
title: "Longest Substring Without Repeating Characters"
slug: longest-substring-without-repeating-characters
date: "2026-09-03"
---

# My Solution
~~~cpp
class Solution {
public:
    int lengthOfLongestSubstring(string s) {
        unordered_map<char, int> mp;
        int left = 0;
        int maxLen = 0;

        for (int right = 0; right < s.size(); right++) {

        
            if (mp.find(s[right]) != mp.end() && mp[s[right]] >= left) {
                left = mp[s[right]] + 1;
            }

            mp[s[right]] = right;   
            maxLen = max(maxLen, right - left + 1);
        }

        return maxLen;
    }
};
~~~

# Submission Review
## Approach
- **Technique:** Sliding Window with a Hash Map.
- **Optimality:** Optimal. It processes the string in a single pass and uses the map to jump the `left` pointer instantly rather than incrementing it step-by-step.

## Complexity
- **Time Complexity:** $O(n)$ where $n$ is the length of the string. Each character is visited once.
- **Space Complexity:** $O(min(m, n))$ where $m$ is the size of the character set (alphabet).

## Efficiency Feedback
- **Runtime:** The use of `std::unordered_map` introduces overhead due to hashing. Since the input consists of characters, replacing the map with a fixed-size array `int mp[128]` or `vector<int>(128, -1)` would significantly reduce constant-time overhead and memory allocations.
- **Memory:** Low, but `unordered_map` is heavier than a primitive array.

## Code Quality
- **Readability:** Good. The logic is concise and follows standard sliding window patterns.
- **Structure:** Good. The flow is linear and easy to trace.
- **Naming:** Good. Variable names (`left`, `right`, `maxLen`, `mp`) are conventional and clear.

**Concrete Improvements:**
- Change `unordered_map<char, int>` to `int mp[128]` initialized to `-1` to optimize speed.
- Change `s.size()` to `int` or use `size_t` for the loop index to avoid signed/unsigned comparison warnings.

---

# Question Revision
# Revision Report: Longest Substring Without Repeating Characters

### Pattern
**Sliding Window (Dynamic)**

### Brute Force
Iterate through every possible substring by using nested loops for the start and end indices. For each substring, use a Set or Hash Map to check for duplicate characters.
- **Time Complexity:** $O(n^3)$
- **Space Complexity:** $O(\min(n, m))$ where $m$ is the size of the alphabet.

### Optimal Approach
Use two pointers (`left` and `right`) to maintain a window. As the `right` pointer expands, store the last seen index of each character in a Hash Map. If a duplicate character is encountered, jump the `left` pointer to `map[char] + 1` (ensuring it only moves forward) to instantly shrink the window and remove the duplicate.

- **Time Complexity:** $O(n)$ — each pointer traverses the string at most once.
- **Space Complexity:** $O(\min(n, m))$ — to store the character indices.

### The 'Aha' Moment
The requirement for a **contiguous** segment (substring) combined with a **constraint** (no repeats) is a classic signal to use a Sliding Window.

### Summary
Maintain a window with a map of character indices to jump the left boundary whenever a repeat is found.

---