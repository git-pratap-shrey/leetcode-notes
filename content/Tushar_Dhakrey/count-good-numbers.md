---
title: "Count Good Numbers"
slug: count-good-numbers
date: "2026-04-20"
---

# My Solution
~~~java
class Solution {
    private long mod = 1_000_000_007;
    public int countGoodNumbers(long n) {
        long even = (n+1)/2;
        long odd = n/2;
        long first = pow(5,even)%mod;
        long second = pow(4,odd)%mod;
        return (int)((first*second)%mod);
    }
    private long pow(long x, long n){
        if(n==0) return 1;
        long temp = pow(x,n/2);
        if(n%2==0){
            return (temp*temp)%mod;
        }
        else{
            return (x*temp*temp)%mod;
        }
    }
}
~~~

# Submission Review
## Approach
- **Technique**: Binary Exponentiation (Exponentiation by Squaring).
- **Optimality**: Optimal. The problem requires calculating large powers modulo $10^9+7$, and binary exponentiation reduces the time complexity from linear to logarithmic.

## Complexity
- **Time Complexity**: $O(\log n)$ — The `pow` function divides the exponent by 2 at each recursive step.
- **Space Complexity**: $O(\log n)$ — Due to the recursive call stack depth.

## Efficiency Feedback
- **Runtime**: Efficient. The logic correctly handles the modulo operation at each multiplication step to prevent overflow.
- **Memory**: The space complexity is slightly higher than necessary due to recursion. An iterative implementation of `pow` would reduce space to $O(1)$.

## Code Quality
- **Readability**: Good. The logic is clean and easy to follow.
- **Structure**: Good. Helper method `pow` separates the math logic from the main function.
- **Naming**: Moderate. Variable names `first` and `second` are generic; `evenPower` and `oddPower` would be more descriptive.
- **Concrete Improvements**:
    - Convert the recursive `pow` method to an iterative loop to eliminate the $O(\log n)$ stack overhead.
    - Change `first` and `second` to more descriptive names.

---

# Question Revision
### Count Good Numbers

**Pattern:** Modular Exponentiation / Combinatorics

**Brute Force:**
Iteratively multiply by 5 for every even index and 4 for every odd index.
*   **Complexity:** $O(n)$ time, which fails for $n = 10^{15}$.

**Optimal Approach:**
Identify that the choices for each index are independent.
1.  **Even indices:** There are $\lceil n/2 \rceil$ positions with 5 choices (0, 2, 4, 6, 8).
2.  **Odd indices:** There are $\lfloor n/2 \rfloor$ positions with 4 choices (2, 3, 5, 7).
3.  **Calculation:** Use Binary Exponentiation (Power function) to calculate $(5^{\text{evens}} \times 4^{\text{odds}}) \pmod{10^9 + 7}$.

*   **Time Complexity:** $O(\log n)$
*   **Space Complexity:** $O(1)$

**The 'Aha' Moment:**
The constraint $n \le 10^{15}$ makes any linear approach impossible, signaling that the solution must be logarithmic via binary exponentiation.

**Summary:**
Use modular exponentiation to calculate the product of independent choices for even and odd positions in $O(\log n)$.

---