---
title: "Longest Repeating Character Replacement"
slug: longest-repeating-character-replacement
date: "2026-09-30"
---

# My Solution
~~~java
class Solution {
    public int characterReplacement(String s, int k) {
        int n = s.length();
        int l = 0;
        int maxfre = 0;
        int ans = 0;
        int[] fre = new int[26];
        for(int r=0;r<n;r++){
            int ind = s.charAt(r)-'A';
            fre[ind]++;
            maxfre = Math.max(maxfre,fre[ind]);
            int window = r-l+1;
            int replace = window - maxfre;
            if(replace>k){
                fre[s.charAt(l)-'A']--;
                l++;
            }
            ans = Math.max(ans,r-l+1);
        }
        return ans;
    }
}
~~~

# Submission Review
## Approach
- **Technique:** Sliding Window (Two Pointers) with a frequency array.
- **Optimality:** Optimal. It maintains a window and shrinks it only when the number of characters to replace (`window_size - max_frequency`) exceeds $k$.

## Complexity
- **Time Complexity:** $O(n)$, where $n$ is the length of the string. Each character is visited at most twice (once by the right pointer and once by the left).
- **Space Complexity:** $O(1)$. The frequency array is of constant size (26), regardless of the input string length.

## Efficiency Feedback
- **Performance:** The runtime is optimal for this problem. 
- **Optimization:** The current implementation of `maxfre` is a common optimization; it doesn't need to be decreased when the left pointer moves because a window can only be improved if we find a higher frequency than the historical maximum encountered so far.

## Code Quality
- **Readability:** Moderate. The logic is sound, but the lack of spacing around operators and inconsistent variable naming makes it feel cramped.
- **Structure:** Good. The single-pass loop is the correct way to implement this algorithm.
- **Naming:** Poor. Variables like `l`, `r`, `fre`, `maxfre`, and `ans` are overly abbreviated.
- **Concrete Improvements:**
    - Rename `l` $\rightarrow$ `left`, `r` $\rightarrow$ `right`, `fre` $\rightarrow$ `counts`, `maxfre` $\rightarrow$ `maxFrequency`.
    - Add whitespace around operators (e.g., `r=0` $\rightarrow$ `r = 0`) for better legibility.
    - `ans = Math.max(ans, r - l + 1)` can be simplified to `ans = Math.max(ans, n)` if the window is never shrunk beyond its maximum size, but the current approach is more explicit.

---

# Question Revision
# Revision Report: Longest Repeating Character Replacement

### Pattern
**Sliding Window (Variable Size)**

### Brute Force
Check every possible substring within the string. For each substring, count the frequencies of all characters. Calculate the number of replacements needed by subtracting the frequency of the most common character from the total length of the substring. If replacements $\leq k$, update the maximum length.
- **Complexity:** $O(n^3)$ or $O(n^2)$ depending on implementation.

### Optimal Approach
Use two pointers (`left`, `right`) to maintain a window. Expand the window by moving `right` and tracking character frequencies in a hash map/array.
1. **Condition:** A window is valid if: `(window_length - max_freq_char) <= k`.
2. **Shrinking:** If the condition is violated, increment `left` to shrink the window until it becomes valid again.
3. **Optimization:** You don't actually need to decrease `max_freq` when shrinking `left`; the window size only increases when a *new* global `max_freq` is found.

**Complexity:**
- **Time:** $O(n)$ — Each pointer traverses the string once.
- **Space:** $O(1)$ — The frequency map size is constant (max 26 uppercase English letters).

### The 'Aha' Moment
When the problem asks for the **longest contiguous subarray** given a **constraint on changes (k)**, it is a classic signal for a Sliding Window.

### Summary
Expand a window and shrink it only when the count of "characters to be replaced" (length minus max frequency) exceeds $k$.

---