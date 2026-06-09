---
title: "Sum of Compatible Numbers in Range I"
slug: sum-of-compatible-numbers-in-range-i
date: "2026-06-07"
---

# My Solution
~~~

~~~

# Submission Review
## Approach
- **Technique**: Brute-force iteration with a digit-validation helper function.
- **Optimality**: Optimal for "Range I" constraints (typically small ranges). For significantly larger ranges, a Digit Dynamic Programming (Digit DP) approach would be required to avoid $O(N)$ iteration.

## Complexity
- **Time Complexity**: $O(N \cdot \log_{10}(\text{high}))$, where $N$ is the number of integers in the range $[low, high]$. The $\log_{10}$ factor represents the number of digits processed per integer.
- **Space Complexity**: $O(\log_{10}(\text{high}))$ to store the string representation of the number during validation.

## Efficiency Feedback
- **Bottleneck**: The repeated conversion of integers to strings and the subsequent casting of characters back to integers (`int(s[i])`) inside the loop.
- **Optimization**: Use `divmod(n, 10)` in a loop to extract digits mathematically. This avoids string allocation and character-to-int casting, reducing overhead.

## Code Quality
- **Readability**: Good. The logic is straightforward and easy to follow.
- **Structure**: Good. Encapsulating the compatibility check in a helper function (`is_compatible`) improves clarity.
- **Naming**: Good. Variable names like `total_sum` and `is_compatible` clearly describe their purpose.
- **Improvement**: 
    - Store `int(s[i])` in a variable to avoid casting the same digit twice during the sliding window check (e.g., `s[i+1]` becomes `s[i]` in the next iteration).

---

# Question Revision
### Sum of Compatible Numbers in Range I

**Pattern:** Digit Manipulation / Simulation

**Brute Force:**
Iterate through every integer from `low` to `high`. For each integer, convert it to a string or use modulo/division to extract digits and check if any two adjacent digits have an absolute difference $\le 1$. If no such pair exists, add the number to the total sum.

**Optimal Approach:**
Since the constraints for "Range I" are relatively small ($10^6$), a linear scan with digit extraction is efficient.
1. Loop $i$ from `low` to `high`.
2. Extract digits of $i$ using `i % 10` and `i / 10`.
3. Compare the current digit with the previous digit; if $|d_n - d_{n-1}| \le 1$, mark as incompatible.
4. Accumulate the sum of all compatible numbers.

- **Time Complexity:** $O(N \cdot K)$, where $N$ is the number of elements in the range and $K$ is the maximum number of digits ($\log_{10}(\text{high})$).
- **Space Complexity:** $O(1)$ if extracting digits mathematically, or $O(K)$ if converting to a string.

**The 'Aha' Moment:**
The requirement to compare "adjacent digits" signals that the property is local to the number's representation, necessitating a digit-by-digit traversal.

**Summary:**
Iterate the range and sum numbers where every pair of adjacent digits has an absolute difference strictly greater than 1.

---