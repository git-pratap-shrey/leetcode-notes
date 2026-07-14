---
title: "Find All Anagrams in a String"
slug: find-all-anagrams-in-a-string
date: "2026-06-09"
---

# My Solution
~~~cpp
class Solution {
public:
    vector<int> findAnagrams(string s, string p) {
        vector<int> ans;

        int n = s.size();
        int m = p.size();

        if (m > n) return ans;

        vector<int> pFreq(26, 0);
        vector<int> winFreq(26, 0);

        for (char ch : p) {
            pFreq[ch - 'a']++;
        }

        int low = 0;

        for (int high = 0; high < n; high++) {
            winFreq[s[high] - 'a']++;

            if (high - low + 1 > m) {
                winFreq[s[low] - 'a']--;
                low++;
            }

            if (high - low + 1 == m) {
                if (winFreq == pFreq) {
                    ans.push_back(low);
                }
            }
        }

        return ans;
    }
};

~~~

# Submission Review
## Approach
- **Technique**: Sliding Window with Frequency Arrays.
- **Optimality**: Optimal. It processes the string $s$ in a single pass while maintaining a constant-size frequency map.

## Complexity
- **Time Complexity**: $O(n)$, where $n$ is the length of string $s$. The vector comparison `winFreq == pFreq` takes $O(26)$, which is a constant factor.
- **Space Complexity**: $O(1)$ (excluding the output vector), as the frequency arrays are fixed at size 26 regardless of input size.

## Efficiency Feedback
- **Runtime**: Very efficient. The overhead of comparing two vectors of size 26 is negligible.
- **Optimization**: To further reduce the constant factor, a `matchCount` integer could be maintained to track how many characters currently satisfy the required frequency, eliminating the need for the $O(26)$ comparison at every step. However, for $26$ characters, the current implementation is sufficiently fast.

## Code Quality
- **Readability**: Good. The logic is straightforward and follows standard sliding window patterns.
- **Structure**: Good. The edge case `m > n` is handled correctly at the start.
- **Naming**: Good. Variable names (`pFreq`, `winFreq`, `low`, `high`) clearly communicate their purpose.
- **Concrete Improvements**: 
    - The check `if (high - low + 1 == m)` is logically redundant after the `if (high - low + 1 > m)` block, as the window size is guaranteed to be $m$ once `high` reaches $m-1$. It can be simplified.

---

# Question Revision
### Find All Anagrams in a String

**Pattern:** Fixed-Size Sliding Window

**Brute Force:** 
Iterate through every substring of `s` with length equal to `p`. Sort both the substring and `p`, then compare them for equality.
- **Time:** $O((s-p) \cdot p \log p)$
- **Space:** $O(1)$ or $O(p)$ depending on sorting implementation.

**Optimal Approach:**
Maintain two frequency arrays (size 26) to track character counts for `p` and the current window in `s`. Slide the window across `s` by adding one character to the right and removing one from the left, updating the window array in $O(1)$. Compare the two arrays at each step.
- **Time:** $O(n)$ where $n$ is the length of `s`.
- **Space:** $O(1)$ as the frequency arrays are fixed at size 26.

**The 'Aha' Moment:** 
The requirement to find a contiguous block of a specific length that satisfies a frequency condition indicates a fixed-size sliding window.

**Summary:** 
Slide a window of length `p` across `s` and use a frequency map to track character matches in constant time.

---