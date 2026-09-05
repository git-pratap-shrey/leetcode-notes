---
title: "Maximum Length Substring With Two Occurrences"
slug: maximum-length-substring-with-two-occurrences
date: "2026-08-15"
---

# My Solution
~~~cpp
class Solution {
public:
    int maximumLengthSubstring(string s) {
        int n=s.size();
        unordered_map<int,int>freq;
        int i=0;
        int ans=0;
        for(int j=0;j<n;j++){
            freq[s[j]]++;
            while(freq[s[j]]>2){
                freq[s[i]]--;
                i++;
            }
            ans=max(ans,j-i+1);
        }
        return ans;
    }
};
~~~

# Submission Review
## Approach
- **Technique**: Sliding Window (Two Pointers).
- **Optimality**: Optimal. The algorithm maintains a valid window and expands/contracts it linearly, ensuring every possible maximal substring is considered.

## Complexity
- **Time Complexity**: $O(N)$, where $N$ is the length of the string. Each character is visited at most twice (once by the right pointer `j` and once by the left pointer `i`).
- **Space Complexity**: $O(K)$, where $K$ is the size of the character set (alphabet). Since the character set is finite (e.g., 256 for extended ASCII), this is effectively $O(1)$.

## Efficiency Feedback
- **Map Overhead**: The use of `std::unordered_map` introduces unnecessary hashing overhead and potential collisions. 
- **Optimization**: Replacing `unordered_map<int, int>` with a fixed-size array `int freq[256] = {0};` would significantly improve runtime and reduce memory latency due to better cache locality.

## Code Quality
- **Readability**: Good. The logic is concise and follows standard sliding window patterns.
- **Structure**: Good. The loop and conditional shrinking are implemented correctly.
- **Naming**: Moderate. While `i` and `j` are common in competitive programming, `left` and `right` would more clearly communicate the window boundaries.
- **Improvements**:
    - Change `unordered_map` to `vector<int>(256, 0)` or a raw array.
    - Use `size_t` for indexing to avoid signed/unsigned comparison warnings with `s.size()`.

---

# Question Revision
### Maximum Length Substring With Two Occurrences

**Pattern:** Sliding Window

**Brute Force:**
Iterate through all possible substrings, count the frequency of each character using a hash map, and track the maximum length where no character count exceeds two.
*   **Complexity:** $O(n^2)$ time, $O(k)$ space.

**Optimal Approach:**
Use two pointers (`left`, `right`) and a frequency map to maintain a valid window. Expand the `right` pointer to include characters; if a character's frequency exceeds two, increment the `left` pointer and decrement frequencies until the offending character's count returns to two.
*   **Time Complexity:** $O(n)$ — each pointer traverses the string once.
*   **Space Complexity:** $O(k)$ — where $k$ is the size of the character set (e.g., 26 for English lowercase).

**The 'Aha' Moment:**
The requirement for a "maximum length substring" subject to a "frequency constraint" is a textbook indicator for a dynamic Sliding Window.

**Summary:**
Expand the window and shrink from the left immediately when any character's frequency exceeds two.

---