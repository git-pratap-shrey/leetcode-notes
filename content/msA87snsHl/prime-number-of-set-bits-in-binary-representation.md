---
title: "Prime Number of Set Bits in Binary Representation"
slug: prime-number-of-set-bits-in-binary-representation
date: "2026-07-11"
---

# My Solution
~~~java
class Solution {
    public int countPrimeSetBits(int left, int right) {
        int count = 0;
        for (int i = left; i <= right; i++) {
            int setBits = 0;
            for (int j = 0; j < 32; j++) {
                if (((i >> j) & 1) == 1) {
                    setBits++;
                }
            }
            int c = 1;

            if (setBits <= 1) {
                c = 0;
            } else {
                for (int k = 2; k * k <= setBits; k++) {
                    if (setBits % k == 0) {
                        c = 0;
                        break;
                    }
                }
            }

            if (c != 0) {
                count++;
            }
        }
        return count;
    }
}
~~~

# Submission Review
## Approach
*   **Technique:** Brute force iteration with manual bit counting and trial division for primality testing.
*   **Optimal:** No. The bit counting and primality check are redundant; since the input constraints for `right` (max $10^6$) result in a maximum of 20 set bits, a bitmask or a simple precomputed boolean array/set is much more efficient.

## Complexity
*   **Time Complexity:** $O((R-L) \cdot (\log R + \sqrt{\log R}))$, where $\log R$ is the number of bits (max 32). The bit iteration runs 32 times, and primality testing takes $O(\sqrt{\text{bits}})$.
*   **Space Complexity:** $O(1)$.
*   **Bottleneck:** Redundant primality checks for every number in the range $[L, R]$.

## Efficiency Feedback
*   **Bit Counting:** The `for` loop `j = 0 to 32` is inefficient. Use `Integer.bitCount(i)`, which uses built-in CPU instructions (often `POPCNT`).
*   **Primality Check:** Since the maximum number of set bits for an integer up to $10^6$ is 19 (for $2^{20}-1$), primality can be checked in $O(1)$ using a hardcoded bitmask: `(mask >> setBits) & 1 == 1`. 
*   **Overhead:** Recomputing primality for the same values (e.g., 2, 3, 5, 7, 11, 13, 17, 19) thousands of times is unnecessary.

## Code Quality
*   **Readability:** Moderate. The logic is clear but manual.
*   **Structure:** Poor. The primality logic is embedded inside the loop, violating the single responsibility principle.
*   **Naming:** Poor. Variable names `c`, `i`, `j`, `k` are non-descriptive and generic.
*   **Improvements:**
    *   Replace the inner bit-counting loop with `Integer.bitCount(i)`.
    *   Replace the trial division loop with a lookup: `Set<Integer> primes = Set.of(2, 3, 5, 7, 11, 13, 17, 19);`.
    *   Consider refactoring the primality check into a separate helper method if you do not use a lookup set.

---

# Question Revision
### Revision Report: Prime Number of Set Bits in Binary Representation

**Pattern:** Bit Manipulation / Counting

**Brute Force:** 
Iterate through each integer in the range $[L, R]$, count the number of set bits (1s) for each using a loop or language-specific built-in function, and check if that count is a prime number by iterating through potential divisors.

**Optimal Approach:** 
*   **Logic:** Since the constraints for integers are typically small (up to $10^6$, which is $< 2^{20}$), the maximum number of set bits is $\le 20$. Pre-calculate primes up to 20 using a `Set` or bitmask (`665772` represents primes $\{2, 3, 5, 7, 11, 13, 17, 19\}$). For each number in the range, use `Integer.bitCount(n)` to get the count and perform an $O(1)$ lookup in the prime set.
*   **Time Complexity:** $O((R-L) \cdot \log(\text{max\_val}))$, where $\log(\text{max\_val})$ is the cost of counting bits.
*   **Space Complexity:** $O(1)$, as the prime set size is constant (max 20).

**The 'Aha' Moment:** 
The small input constraint (max 20 set bits) turns a mathematical primality test into a constant-time lookup problem.

**Summary:** 
When the range of possible outcomes is tiny, pre-compute or hardcode the result set to transform dynamic calculations into $O(1)$ lookups.

---