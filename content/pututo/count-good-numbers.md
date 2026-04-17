---
title: "Count Good Numbers"
slug: count-good-numbers
date: "2026-04-11"
---

# My Solution
~~~cpp
class Solution {
public:
    long long mod = 1e9 + 7;
    long long power(long long x,long long n){
        if(n==0){
            return 1;
        }
        long long half=power(x,n/2);
        long long res=(half*half)%mod;
        if(n%2){
            res=(res*x)%mod;
            return res;
        }
        return res;
    }
    int countGoodNumbers(long long n) {
        long long even = (n+1)/2;
        long long odd = n/2;
        return (power(5,even)*power(4,odd))%mod;
    }
};
~~~

# Submission Review
## Approach
- **Technique**: Modular Exponentiation (Binary Exponentiation) using a recursive divide-and-conquer strategy.
- **Optimality**: Optimal. The number of choices for even positions (5) and odd positions (4) is independent, leading to the formula $5^{\lceil n/2 \rceil} \times 4^{\lfloor n/2 \rfloor} \pmod{10^9+7}$, which is efficiently computed in logarithmic time.

## Complexity
- **Time Complexity**: $O(\log n)$ due to two calls to the binary exponentiation function.
- **Space Complexity**: $O(\log n)$ because of the recursive call stack.

## Efficiency Feedback
- The runtime is optimal for the given constraints.
- **Bottleneck**: The space complexity is $O(\log n)$ due to recursion. This could be reduced to $O(1)$ by implementing the `power` function iteratively.

## Code Quality
- **Readability**: Good. The logic is straightforward and easy to follow.
- **Structure**: Good. Helper function is used correctly to encapsulate the exponentiation logic.
- **Naming**: Good. Variables `even`, `odd`, and `half` clearly describe their purpose.
- **Concrete Improvements**:
    - **Iterative Power**: Change `power` to an iterative loop to eliminate recursion overhead and reduce space complexity to $O(1)$.
    - **Const Correctness**: Declare `mod` as `const` or `constexpr` since it is a constant value.
    - **Type Safety**: While the final result fits in an `int`, the internal multiplications are correctly handled using `long long` to prevent overflow before the modulo operation.

---

# Question Revision
### Count Good Numbers

**Pattern:** Modular Exponentiation / Combinatorics

**Brute Force:**
Iterate from $0$ to $n-1$, multiplying the result by 5 for even indices and 4 for odd indices.
*   **Time:** $O(n)$
*   **Space:** $O(1)$

**Optimal Approach:**
The number of even indices is $\lceil n/2 \rceil$ and odd indices is $\lfloor n/2 \rfloor$. The total count is $(5^{\lceil n/2 \rceil} \times 4^{\lfloor n/2 \rfloor}) \pmod{10^9 + 7}$. Use binary exponentiation (pow function) to compute these powers efficiently.
*   **Time:** $O(\log n)$
*   **Space:** $O(1)$

**The 'Aha' Moment:**
The extreme constraint on $n$ ($10^{15}$) makes linear iteration impossible, signaling that the solution must be logarithmic.

**Summary:**
Calculate the product of choices for even and odd positions using binary exponentiation to handle large $n$ under a modulo.

---