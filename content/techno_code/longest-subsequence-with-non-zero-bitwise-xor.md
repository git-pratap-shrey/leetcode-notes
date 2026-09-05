---
title: "Longest Subsequence With Non-Zero Bitwise XOR"
slug: longest-subsequence-with-non-zero-bitwise-xor
date: "2026-08-19"
---

# My Solution
~~~cpp
class Solution {
public:
    int longestSubsequence(vector<int>& nums) {
        auto tot = 0, nonZero = 0;

        for (auto& n : nums) {
            nonZero |= n > 0;
            tot ^= n;
        }

        return nonZero * (nums.size() - !tot);
    }
};
~~~

# Submission Review
## Approach
- **Technique**: XOR properties. The solution leverages the fact that if the total XOR sum is $0$, removing any non-zero element $x$ results in a new XOR sum of $0 \oplus x = x$, which is non-zero.
- **Optimality**: Optimal. A single pass is sufficient to determine if a non-zero XOR sum is possible and what the maximum length is.

## Complexity
- **Time Complexity**: $O(n)$, where $n$ is the size of the input vector.
- **Space Complexity**: $O(1)$.

## Efficiency Feedback
- The implementation is highly efficient. It uses basic bitwise and arithmetic operations with minimal overhead.
- The use of `!tot` as a boolean-to-integer cast and `nonZero` as a multiplier effectively handles all edge cases (all zeros, total XOR zero, total XOR non-zero) without branching.

## Code Quality
- **Readability**: Moderate. While clever, the return statement `nonZero * (nums.size() - !tot)` is slightly cryptic and relies on implicit type conversion.
- **Structure**: Good. The logic is compact and contained within a single loop.
- **Naming**: Moderate. `tot` is acceptable, but `nonZero` is used as a boolean flag rather than a count, which could be slightly misleading.
- **Improvements**:
    - Use `bool` for `nonZero` for clarity.
    - Replace the multiplier logic with a standard `if/else` or `std::max` for better maintainability, as the performance gain from avoiding branches here is negligible.

---

# Question Revision
### Longest Subsequence With Non-Zero Bitwise XOR

**Pattern:** Bit Manipulation / XOR Properties

**Brute Force:** 
Iterate through all $2^n$ possible subsequences, calculate the XOR sum for each, and track the maximum length among those with a non-zero sum.
- Time: $O(n \cdot 2^n)$
- Space: $O(1)$

**Optimal Approach:**
1. Calculate the XOR sum of the entire array.
2. If the total XOR sum is $\neq 0$, the longest subsequence is the entire array (length $n$).
3. If the total XOR sum is $0$, removing any single non-zero element $x$ will change the total XOR sum to $0 \oplus x = x$, which is non-zero. Thus, the length is $n-1$.
4. If all elements in the array are $0$, no non-zero XOR sum is possible. Return $0$.

- **Time Complexity:** $O(n)$
- **Space Complexity:** $O(1)$

**The 'Aha' Moment:** 
If the total XOR sum is zero, removing any single non-zero element guaranteedly flips the total sum to non-zero.

**Summary:** 
If the total XOR is non-zero, return $n$; otherwise, return $n-1$ if at least one non-zero element exists, else $0$.

---