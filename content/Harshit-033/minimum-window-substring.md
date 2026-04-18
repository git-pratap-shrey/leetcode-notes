---
title: "Minimum Window Substring"
slug: minimum-window-substring
date: "2026-04-17"
---

# My Solution
~~~cpp
class Solution {
public:
    string minWindow(string s, string t) {
        unordered_map<char,int> mt;
        int left=0;
        int right=0;
        int count=t.size();
        int start=0;
        int end=0;
        int min=INT_MAX;

        for(int i=0;i<t.size();i++){
            mt[t[i]]+=1;
        }
        
        while(right<s.size()){
            if(mt.find(s[right])!=mt.end() && mt[s[right]]>0){
                count--;
            }
            mt[s[right]]-=1;

            while(count==0){
                if(min>(right-left+1)){
                start=left;
                end=right;
                min=(right-left+1);
            }
                mt[s[left]]+=1;
                if(mt[s[left]]>0){
                    count++;
                }
                left++;
            }
            
            
            right++;



        }
        if(min == INT_MAX) return "";
        string ans;
        for(int i=start;i<=end;i++){
            ans.push_back(s[i]);
        }
        return ans;

        
    }
};
~~~

# Submission Review
## Approach
- **Technique**: Two-pointer sliding window with a frequency map.
- **Optimality**: Optimal. The sliding window ensures each character in `s` is visited at most twice, and the frequency map allows for $O(1)$ average-time lookups.

## Complexity
- **Time Complexity**: $O(N + M)$, where $N$ is the length of `s` and $M$ is the length of `t`.
- **Space Complexity**: $O(K)$, where $K$ is the number of unique characters in `t` (bounded by the alphabet size, e.g., 128 or 256).

## Efficiency Feedback
- **Map Overhead**: Using `std::unordered_map` introduces hashing overhead. Since the input consists of characters, a fixed-size array `int[128]` would be significantly faster and use less memory.
- **String Construction**: The manual `for` loop using `push_back` to build the result string is less efficient than using `s.substr(start, min)`.
- **Redundant Checks**: `mt.find(s[right]) != mt.end()` is used to avoid inserting keys into the map. While it prevents map pollution, it adds a lookup; a fixed-size array would eliminate this need entirely.

## Code Quality
- **Readability**: Moderate. The logic is straightforward, but inconsistent whitespace and indentation make it look unpolished.
- **Structure**: Good. The implementation follows the standard sliding window pattern correctly.
- **Naming**: Poor. 
    - `min` is a common function name in the STL; using it as a variable name is risky.
    - `mt` is cryptic (should be `targetCounts` or similar).
    - `count` is vague (should be `remainingChars`).
- **Concrete Improvements**:
    - Replace `unordered_map<char, int>` with `vector<int>(128, 0)` or `int[128]`.
    - Replace the final `for` loop with `return (min == INT_MAX) ? "" : s.substr(start, min);`.
    - Use descriptive variable names to improve maintainability.

---

# Question Revision
### Minimum Window Substring

**Pattern:** Sliding Window (Two Pointers)

**Brute Force:** 
Generate all possible substrings of $S$, check if each contains all characters of $T$ using a frequency map, and track the minimum length. 
Complexity: $O(n^3)$.

**Optimal Approach:**
1. Use a frequency map to store required characters from $T$ and a second map for the current window.
2. Expand the `right` pointer to include characters until the window contains all required characters from $T$ (window becomes "valid").
3. Once valid, contract the `left` pointer to remove unnecessary characters from the start, updating the minimum length until the window becomes "invalid."
4. Repeat until the `right` pointer reaches the end of $S$.

*   **Time Complexity:** $O(S + T)$ — Each pointer traverses the string at most once.
*   **Space Complexity:** $O(K)$ — Where $K$ is the size of the character set (e.g., 52 for alphabet).

**The 'Aha' Moment:** 
The requirement for a "minimum window" containing a set of characters indicates a dynamic sliding window where you expand to find a solution and contract to optimize it.

**Summary:** 
Expand the window to satisfy the character requirements, then shrink it from the left to find the smallest possible valid substring.

---