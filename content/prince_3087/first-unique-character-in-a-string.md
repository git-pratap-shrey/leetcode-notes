---
title: "First Unique Character in a String"
slug: first-unique-character-in-a-string
date: "2026-04-04"

---
---

# My Solution
~~~cpp
class Solution {
public:
    int firstUniqChar(string s) {
        unordered_map<char,int>mp;
        for(int i=0;i<s.size();i++){
            mp[s[i]]++;
        }
        for(int i=0;i<s.size();i++){
            if(mp[s[i]]==1){
                return i;
            }
        }
    return -1; 
    }
    
};
~~~

# Submission Review
## Approach
- **Technique:** Frequency counting using a hash map (`unordered_map`). 
- **Optimality:** It is optimal in terms of asymptotic time complexity, but the constant factor can be improved significantly given the limited character set.

## Complexity
- **Time Complexity:** $O(N)$, where $N$ is the length of the string. The solution performs two linear passes.
- **Space Complexity:** $O(1)$ (or $O(K)$ where $K$ is the alphabet size). Since the alphabet size is constant (e.g., 26 for lowercase English letters), the space usage is bounded.

## Efficiency Feedback
- **Bottleneck:** `std::unordered_map` has higher overhead due to hashing operations and potential collisions compared to a fixed-size array.
- **Optimization:** Since the input consists of standard characters, replacing `unordered_map<char, int>` with a fixed-size array `int count[26]` (or `int count[128]` for ASCII) will significantly reduce constant time overhead and memory allocation costs.

## Code Quality
- **Readability:** Good. The logic is straightforward and easy to follow.
- **Structure:** Good. The two-pass approach is the standard, efficient way to solve this problem.
- **Naming:** Moderate. `mp` is acceptable but `freq` or `charCounts` would be more descriptive.
- **Concrete Improvements:** 
    - Use `std::vector<int> mp(26, 0)` or a raw array `int mp[26] = {0};` instead of `unordered_map`. 
    - You can map characters to indices using `s[i] - 'a'`.
    - If the input supports full ASCII, use `int mp[256] = {0};` to cover all potential characters.

---
---


# Question Revision
### Revision Report: First Unique Character in a String

**Pattern:** Frequency Counting (Hash Map / Array)

**Brute Force:**
For each character at index `i`, iterate through the rest of the string to check if it appears elsewhere. 
*   **Time:** $O(n^2)$
*   **Space:** $O(1)$

**Optimal Approach:**
1.  Perform a first pass to populate a frequency map (or size-26 integer array) with the count of each character.
2.  Perform a second pass through the string, returning the index of the first character with a count of `1`.
*   **Time:** $O(n)$
*   **Space:** $O(1)$ (since the alphabet size is constant at 26).

**The 'Aha' Moment:**
When the problem requires identifying a unique element based on global constraints rather than local adjacency, a two-pass frequency count is the standard approach to trade space for linear time.

**Summary:** 
Use a frequency map for "first unique" problems to decouple position tracking from existence verification.

---
