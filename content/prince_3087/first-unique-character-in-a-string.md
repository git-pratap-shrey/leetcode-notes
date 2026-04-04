---
title: "First Unique Character in a String"
slug: first-unique-character-in-a-string

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
- **Optimality:** Optimal in terms of algorithmic complexity class, but can be improved in constant-time overhead for this specific problem domain (characters).

## Complexity
- **Time Complexity:** $O(N)$, where $N$ is the length of the string. We perform two passes over the string.
- **Space Complexity:** $O(K)$, where $K$ is the size of the alphabet (constant space, $K \le 26$ for lowercase English letters).

## Efficiency Feedback
- **Bottleneck:** `unordered_map` involves hashing overhead and potential collisions. 
- **Optimization:** Since the input is constrained (likely lowercase English letters), a fixed-size array `int count[26] = {0};` or `std::vector<int>(26, 0)` is significantly faster than an `unordered_map` due to better cache locality and the elimination of hash calculations.

## Code Quality
- **Readability:** Good. The logic is straightforward and easy to follow.
- **Structure:** Good. The two-pass approach is standard and correctly implemented.
- **Naming:** Moderate. `mp` is acceptable but `charCounts` or `freq` would be more descriptive.
- **Concrete Improvements:** 
    - Replace `unordered_map<char, int>` with `int freq[26] = {0}` to improve execution speed and memory footprint.
    - Add `ios_base::sync_with_stdio(false); cin.tie(NULL);` if this were part of a competitive programming solution requiring high-throughput I/O (though not strictly necessary for this specific method).
    - Use `const string& s` as a parameter to avoid unnecessary string copying.

---
---


# Question Revision
### Revision Report: First Unique Character in a String

**Pattern:** Frequency Map (Hashing)

**Brute Force:**
For each character at index $i$, iterate through the entire string again to check if it appears anywhere else.
*   **Time Complexity:** $O(n^2)$
*   **Space Complexity:** $O(1)$

**Optimal Approach:**
1. Perform a single pass to store the frequency of each character in a hash map (or a fixed-size array of 26 integers).
2. Perform a second pass over the string, returning the index of the first character with a frequency count of 1.
*   **Time Complexity:** $O(n)$
*   **Space Complexity:** $O(1)$ (since the alphabet size is constant at 26).

**The 'Aha' Moment:**
When a problem asks for the *first* occurrence of an element satisfying a condition based on the *global count* of elements, a two-pass frequency map is more efficient than nested iteration.

**Summary:**
Use a frequency map to decouple the count of occurrences from the original order of the input, allowing you to identify unique elements in linear time.

---
