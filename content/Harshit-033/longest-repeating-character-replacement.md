---
title: "Longest Repeating Character Replacement"
slug: longest-repeating-character-replacement
date: "2026-04-16"
---

# My Solution
~~~cpp
class Solution {
public:
    int characterReplacement(string s, int k) {

        int left=0;
        int right=0;
        int len=1;
        int maxf=0;
        int current=0;
        int ans=0;
        unordered_map<char,int> mp;

        while(right<s.size()){
            mp[s[right]]+=1;
            maxf=(mp[s[right]]>maxf)?mp[s[right]]:maxf;

            
            while((right-left+1)-maxf>k){
                mp[s[left]]-=1;
                left++;


            }
            if((right-left+1)-maxf<=k){
                current=right-left+1;
                
            }

            ans=(ans<current)?current:ans;
            right++;
        }

        return ans;
        
    }
};
~~~

# Submission Review
## Approach
- **Technique**: Sliding Window.
- **Optimality**: Optimal. The window expands to find the maximum length and shrinks only when the number of characters to be replaced exceeds $k$.

## Complexity
- **Time Complexity**: $O(n)$, where $n$ is the length of the string. Each pointer (`left`, `right`) traverses the string at most once.
- **Space Complexity**: $O(1)$. While an `unordered_map` is used, it stores at most 26 unique uppercase English characters, regardless of input size.

## Efficiency Feedback
- **Map Overhead**: Using `std::unordered_map<char, int>` introduces hashing overhead. Since the input consists of characters, a fixed-size array `int freq[26]` would be significantly faster.
- **Redundant Variables**: The variable `current` is unnecessary; the window length `right - left + 1` can be used directly in the `max` calculation.
- **Max Frequency Logic**: The code correctly maintains `maxf`. Note that `maxf` does not need to be decreased when shrinking the window, as we only care about windows that exceed the previous maximum frequency to improve the result.

## Code Quality
- **Readability**: Moderate. There is excessive vertical whitespace and a lack of consistent formatting.
- **Structure**: Good. The sliding window logic is implemented correctly.
- **Naming**: Poor. `mp` is too generic; `maxf` and `ans` are overly abbreviated.
- **Concrete Improvements**:
    - Replace `unordered_map` with `int count[26] = {0};` and index using `s[right] - 'A'`.
    - Use `std::max()` instead of ternary operators for better readability.
    - Remove the redundant `current` variable.
    - Remove unnecessary empty lines.

---

# Question Revision
### Longest Repeating Character Replacement

**Pattern:** Sliding Window (Dynamic Size)

**Brute Force:** Iterate through every possible substring, count the frequency of the most common character, and check if `(substring_length - max_freq) <= k`.
*   **Complexity:** $O(n^2)$ or $O(n^3)$ depending on frequency counting.

**Optimal Approach:** 
Use two pointers to maintain a window. Expand the `right` pointer and track character frequencies in a map. If the number of characters needing replacement (`window_width - max_freq`) exceeds `k`, shrink the window from the `left`.
*   **Time Complexity:** $O(n)$ — each pointer traverses the string once.
*   **Space Complexity:** $O(1)$ — the frequency map is limited to 26 uppercase English letters.

**The 'Aha' Moment:** The phrase "longest substring" combined with a flexible constraint ($k$ replacements) indicates a sliding window where the validity is determined by `window_size - max_freq <= k`.

**Summary:** Maintain a window and slide it forward, ensuring the cost to make all characters identical stays within $k$.

---