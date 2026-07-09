---
title: "Find the Difference"
slug: find-the-difference
date: "2026-07-09"
---

# My Solution
~~~cpp
class Solution {
public:
    char findTheDifference(string s, string t) {
        unordered_map<char,int> mp;
        for(auto it:s){
            mp[it] ++;
         }
         for(auto it:t){
            mp[it] --;
         }
         for (auto it:mp){
            if(it.second ==-1){
                return it.first;
            }
         }
         return ' ';
    }
};
~~~

# Submission Review
## Approach
*   **Technique:** Frequency counting using a hash map (`unordered_map`).
*   **Optimality:** Suboptimal. While the logic is correct, a frequency array or bit manipulation (XOR) is more efficient for this specific problem given the character set is likely limited to lowercase English letters.

## Complexity
*   **Time Complexity:** $O(N + M)$, where $N$ and $M$ are the lengths of `s` and `t`. However, the hash map introduces overhead compared to a fixed-size array.
*   **Space Complexity:** $O(1)$ effectively, as the map size is bounded by the alphabet size (constant 26), though it adds heap allocation overhead.

## Efficiency Feedback
*   **Overhead:** `unordered_map` is significantly slower and more memory-intensive than a `std::vector<int>(26, 0)` or a raw array `int count[26]`.
*   **Optimization:** Using an array of size 26 or 128 (for ASCII) eliminates hashing costs. Alternatively, **XORing all characters** of both strings is the most optimal approach: it requires $O(N+M)$ time and $O(1)$ space with zero auxiliary data structure overhead.

## Code Quality
*   **Readability:** Good. The logic is straightforward and easy to follow.
*   **Structure:** Good. Uses a standard map-based approach correctly.
*   **Naming:** Moderate. `mp` and `it` are standard, but descriptive names (e.g., `charCounts`, `c`) would improve clarity.
*   **Improvements:**
    *   Replace `unordered_map<char, int>` with `int count[26] = {0}`.
    *   The loop `for (auto it:mp)` could potentially fail if `mp[it]` becomes `0` before checking `-1` (though not in this specific logic flow); however, simply returning the character via XOR is more idiomatic for this problem.
    *   Example of XOR approach:
        ```cpp
        char res = 0;
        for (char c : s) res ^= c;
        for (char c : t) res ^= c;
        return res;
        ```

---

# Question Revision
### Revision Report: Find the Difference

**Pattern:** Bit Manipulation (XOR) or Hash Map

**Brute Force:** 
Count the frequency of characters in both strings using a Hash Map and compare the counts to find the mismatch.
*   **Time:** $O(n)$
*   **Space:** $O(1)$ (since alphabet size is fixed at 26).

**Optimal Approach:** 
Use the XOR operator. XORing a character with itself results in 0 ($x \oplus x = 0$), and XORing any value with 0 results in the value ($x \oplus 0 = x$). By XORing all characters in both strings together, all identical characters cancel out, leaving only the extra character.
*   **Time:** $O(n)$
*   **Space:** $O(1)$

**The 'Aha' Moment:** 
When you need to identify a single "difference" or a "missing" element in a collection where all other items appear in pairs, XOR allows you to cancel out duplicates regardless of their order.

**Summary:** 
Use XOR to find the "odd one out" in linear time without the memory overhead of a hash table.

---