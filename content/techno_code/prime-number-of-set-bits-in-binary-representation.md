---
title: "Prime Number of Set Bits in Binary Representation"
slug: prime-number-of-set-bits-in-binary-representation
date: "2026-07-09"
---

# My Solution
~~~cpp
class Solution {
public:
    int countPrimeSetBits(int left, int right) {
        int count=0;
        for(int i=left; i<=right; i++){
            int setBits=0;
           for(int j=0; j<32; j++){
            if(((i>>j)&1)==1){
                setBits++;
           }
        }
        bool isPrime=true;
        if(setBits <=1) isPrime = false;
         else {
            for(int k=2;k*k<=setBits;k++){
            if(setBits % k==0){ 
                isPrime= false;
                break;
            }

        }}
        if(isPrime)
         count++;
    }
    return count;
    }
};
~~~

# Submission Review
## Approach
*   **Technique:** Brute force iteration with bit manipulation and manual primality testing.
*   **Optimal:** No. The approach is suboptimal due to redundant primality checks and inefficient bit counting.

## Complexity
*   **Time Complexity:** $O((R-L) \cdot W \cdot \sqrt{W})$, where $W$ is the number of bits (32). Given constraints for $R \le 10^6$, $W$ is effectively small ($\le 20$), but the primality test inside the loop is unnecessary overhead.
*   **Space Complexity:** $O(1)$.

## Efficiency Feedback
*   **Bottleneck:** Calculating `setBits` using a loop of 32 iterations and performing primality testing (even trial division) for every number is inefficient. 
*   **Optimization:**
    *   Use `__builtin_popcount(i)` for $O(1)$ bit counting.
    *   Since the maximum number of set bits for an integer up to $10^6$ is 19 (as $2^{20} > 10^6$), use a precomputed bitmask or a `std::unordered_set<int>` containing primes $\{2, 3, 5, 7, 11, 13, 17, 19\}$ for $O(1)$ lookup instead of calculating primality repeatedly.

## Code Quality
*   **Readability:** Moderate. The code is functional but cluttered with logic that could be abstracted.
*   **Structure:** Moderate. Nested loops make the logic harder to follow; logic could be separated into a `isPrime` helper function or a precomputed lookup.
*   **Naming:** Good. Variable names (`setBits`, `isPrime`, `left`, `right`) are clear and descriptive.
*   **Concrete Improvements:**
    *   Replace the `j` loop with `__builtin_popcount(i)`.
    *   Replace the `k` loop with a simple check: `bool isPrime = (mask >> setBits) & 1;` where `mask` is a constant integer representing prime indices (e.g., `0b10100010100010101100`).

---

# Question Revision
### Revision Report: Prime Number of Set Bits in Binary Representation

**Pattern:** Bit Manipulation / Counting

**Brute Force:** 
Iterate through each integer in the range $[L, R]$, count the set bits (1s) using a loop or `n & (n-1)`, and check if the count exists in a hardcoded list of primes up to 32. 
*   **Time:** $O((R-L) \times \log(\text{max\_val}))$
*   **Space:** $O(1)$

**Optimal Approach:**
Use the built-in population count function (e.g., `Integer.bitCount()` in Java or `bin(n).count('1')` in Python) to count set bits for each integer. Since the constraint is small ($10^6$), the max number of set bits is $\le 20$. Pre-calculate a bitmask or set of primes `{2, 3, 5, 7, 11, 13, 17, 19}` for $O(1)$ verification.
*   **Time:** $O((R-L) \times \log(\text{max\_val}))$
*   **Space:** $O(1)$

**The 'Aha' Moment:**
The constraint $n \le 10^6$ implies that the number of set bits will never exceed 20, turning a potentially complex prime-checking task into a simple lookup in a tiny, constant set.

**Summary:**
When bit counts are bounded by a small range, treat the population count as a simple integer index to look up against a precomputed set of prime properties.

---