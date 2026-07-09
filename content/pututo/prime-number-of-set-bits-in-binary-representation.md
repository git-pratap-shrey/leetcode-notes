---
title: "Prime Number of Set Bits in Binary Representation"
slug: prime-number-of-set-bits-in-binary-representation
date: "2026-07-09"
---

# My Solution
~~~cpp
class Solution {
public:
    int isPrime(int ans,int count){
        int p=0;
        for(int i=2;i*i<=count;i++){
            if(count%i==0){
                p++;
            }
        }
        if(p==0){
            ans+=1;
        }
        return ans;
    }

    int countPrimeSetBits(int left, int right) {
        int ans=0;
        for(int i=left;i<=right;i++){
            int z=i;
            int count=0;
            while(z!=0){
                if((z&1)==1){
                    count++;
                }
                z=z>>1;
            }
            if(count>1){
                ans=isPrime(ans,count);
            }
        }
        return ans;
    }
};
~~~

# Submission Review
## Approach
*   **Technique:** Iterative bit manipulation and primality testing.
*   **Optimality:** Suboptimal. The primality test is performed repeatedly for every number in the range `[left, right]`. Since the maximum possible number of set bits for a 32-bit integer is small (max 32), a precomputed set or a small lookup table is more efficient.

## Complexity
*   **Time Complexity:** $O((R-L) \cdot (\log R \cdot \sqrt{\log R}))$, where $R$ is the right bound. The $\sqrt{\log R}$ factor comes from the `isPrime` function checking bits up to the square root of the count.
*   **Space Complexity:** $O(1)$ additional space.

## Efficiency Feedback
*   **Bottleneck:** The `isPrime` function is called inside the loop. For small inputs (up to $10^6$), the maximum bit count is $\le 20$. The prime numbers up to 20 are `{2, 3, 5, 7, 11, 13, 17, 19}`.
*   **Optimization:** Use a constant-time lookup (e.g., a bitmask `0b10100010100010101100` or a `std::unordered_set`) to check if `count` is prime, replacing the `isPrime` function entirely. Use `__builtin_popcount(i)` for counting bits instead of the `while` loop.

## Code Quality
*   **Readability:** Moderate. The logic is clear, but the implementation is verbose for such a standard problem.
*   **Structure:** Moderate. The `isPrime` function signature is confusing; passing `ans` into `isPrime` and returning it makes the flow unnecessarily coupled.
*   **Naming:** Moderate. Variables like `z`, `p`, and `ans` are somewhat generic; `bitCount` or `is_prime` would be better.

### Concrete Improvements
1.  **Bit Counting:** Replace the `while` loop with `__builtin_popcount(i)`.
2.  **Primality Logic:** Replace the entire `isPrime` function with a static set or a simple `switch/if` statement checking against known primes:
    ```cpp
    bool isPrime(int n) {
        return (n == 2 || n == 3 || n == 5 || n == 7 || n == 11 || 
                n == 13 || n == 17 || n == 19 || n == 23 || n == 29 || n == 31);
    }
    ```
3.  **Refactoring:** Simplify `countPrimeSetBits` to just increment `ans` if `isPrime(__builtin_popcount(i))` returns true.

---

# Question Revision
### Revision Report: Prime Number of Set Bits

**Pattern:** Bit Manipulation / Counting

**Brute Force:** 
For every number in the range $[L, R]$, compute the binary string, count the '1's (Hamming weight), and perform a primality test on the count. 

**Optimal Approach:**
1. **Population Count:** Use built-in functions (e.g., `Integer.bitCount(n)` or `__builtin_popcount(n)`) to find the number of set bits in $O(1)$ per integer.
2. **Lookup Table:** Since the maximum value is $10^6$, the maximum number of set bits is small (for $2^{20} \approx 10^6$, max bits is 20). Pre-define a set or boolean array of prime numbers up to 20.
3. **Complexity:** $O((R-L) \cdot \log(\text{max\_bits}))$, which simplifies to $O(N)$ where $N$ is the number of integers in the range, as the bit-counting and prime-lookup are constant time. Space complexity is $O(1)$ (constant size set).

**The 'Aha' Moment:**
The constraint that the input range goes up to $10^6$ implies a maximum bit count of 20, turning a primality test problem into a simple fixed-size lookup.

**Summary:** When dealing with bit counts of standard integer types, treat the set of possible counts as a small, finite set to use a lookup table instead of active computation.

---