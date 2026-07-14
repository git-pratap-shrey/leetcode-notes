---
title: "Permutation in String"
slug: permutation-in-string
date: "2026-06-09"
---

# My Solution
~~~cpp
class Solution {
public:
    bool checkInclusion(string s1, string s2) {

        int m = s1.size();
        int n = s2.size();

        if (m > n) return false;

        vector<int> s1Freq(26, 0);
        vector<int> Freq(26, 0);

        for (char ch : s1) {
            s1Freq[ch - 'a']++;
        }

        int low = 0;

        for (int high = 0; high < n; high++) {

            Freq[s2[high] - 'a']++;

            if (high - low + 1 > m) {
                Freq[s2[low] - 'a']--;
                low++;
            }

            if (high - low + 1 == m) {
                if (Freq == s1Freq) {
                    return true;
                }
            }
        }

        return false;
    }
};
~~~

# Submission Review
## Approach
- **Technique**: Fixed-size Sliding Window with Frequency Arrays.
- **Optimality**: Optimal. It processes the string in a single pass and uses constant extra space regardless of input size.

## Complexity
- **Time Complexity**: $O(n)$, where $n$ is the length of `s2`. Specifically, it is $O(n \times \Sigma)$ where $\Sigma$ is the alphabet size (26).
- **Space Complexity**: $O(1)$. The two frequency vectors are of fixed size (26), which does not scale with input size.

## Efficiency Feedback
- **Runtime**: The solution is efficient. The use of `vector == vector` in C++ for size 26 is very fast.
- **Optimization**: One could maintain a `matches` counter (tracking how many characters in the window currently satisfy the required frequency) to reduce the $O(26)$ comparison to $O(1)$ per character shift. However, for $\Sigma=26$, the current implementation is clean and sufficient.

## Code Quality
- **Readability**: Good. The logic is linear and easy to follow.
- **Structure**: Good. The boundary check (`m > n`) is handled correctly at the start.
- **Naming**: Moderate. `Freq` is slightly generic; `windowFreq` would be more descriptive to contrast with `s1Freq`.
- **Improvements**:
    - Change `vector<int>` to `std::array<int, 26>` to avoid heap allocation and potentially improve cache locality.
    - Use `const string&` for parameters (though provided as a class method, this is standard practice).

---

# Question Revision
### Permutation in String

**Pattern:** Sliding Window (Fixed Size)

**Brute Force:** Generate all permutations of `s1` and check if any exist as a substring in `s2`.
- **Complexity:** $O(n! \cdot m)$ time, where $n$ is `s1.length` and $m$ is `s2.length`.

**Optimal Approach:** 
Maintain a frequency array (size 26) for `s1` and a sliding window of length `s1.length` across `s2`. As the window slides, update the current window's frequency array by adding the new character and removing the trailing one. Compare the two arrays at each step.
- **Time Complexity:** $O(m)$ — we traverse `s2` once; array comparison is $O(26)$, which is constant.
- **Space Complexity:** $O(1)$ — the frequency arrays remain constant size regardless of input length.

**The 'Aha' Moment:** "Permutation" implies identical character frequencies, and "substring" implies a contiguous range, which together signal a fixed-size sliding window.

**Summary:** Use a fixed-size sliding window and frequency arrays to track and compare character counts.

---