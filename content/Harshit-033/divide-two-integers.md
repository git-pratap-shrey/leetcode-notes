---
title: "Divide Two Integers"
slug: divide-two-integers
date: "2026-04-09"

---
---

# My Solution
~~~cpp
class Solution {
public:
    int divide(int dividend, int divisor) {
        if(dividend==divisor) return 1;
        if(dividend==INT_MIN && divisor==-1) return INT_MAX;        
        if(divisor==1) return dividend;

        

        
        bool sin=(dividend<0)^(divisor<0);

        int count=0;
        long long sum;

        
        long long divd=abs((long long)dividend);
        long long divi=abs((long long)divisor);

        int i=0;

        while(divd>=divi){
            sum=divi<<i;

            if(sum<=divd){
                i++;
            }
            else{
                i=i-1;
                divd=divd-(divi<<i);
                count+=1<<i;
                i=0;
            }
        }

        if(sin) return -count;
        return count;
    }
};
~~~

# Submission Review
## Approach
*   **Technique:** Bit manipulation (binary long division/shifting).
*   **Optimality:** Optimal. The algorithm mimics manual long division in binary, resulting in logarithmic time complexity $O(\log^2(\text{dividend}))$.

## Complexity
*   **Time Complexity:** $O(\log^2(\text{dividend}))$. In each iteration of the `while` loop, the inner search for the largest shift factor takes logarithmic time, and this happens roughly $\log(\text{dividend})$ times as the remainder decreases.
*   **Space Complexity:** $O(1)$. No auxiliary data structures are used.

## Efficiency Feedback
*   **Shift Logic:** Using `divi << i` is an efficient way to perform multiplication by powers of 2.
*   **Redundant Checks:** `if(dividend==divisor) return 1;` and `if(divisor==1) return dividend;` are minor optimizations, but note that the main loop handles these cases correctly regardless.
*   **Edge Case:** The solution correctly handles `INT_MIN` using `long long` casting to prevent overflow during `abs()`.

## Code Quality
*   **Readability:** Moderate. The logic is slightly compressed, and variable names are somewhat terse.
*   **Structure:** Good. The logic flow is logical and follows standard bit-manipulation practices for division.
*   **Naming:** Moderate. `sin` is ambiguous (could mean 'sine'); `sign` would be more descriptive. `divd` and `divi` are acceptable abbreviations but `dividend_abs` and `divisor_abs` would improve clarity.

### Concrete Improvements
1.  **Refactor Variable Names:** Rename `sin` to `isNegative`, `divd` to `absDividend`, and `divi` to `absDivisor`.
2.  **Edge Case Clarity:** While `dividend == divisor` is handled, the code relies on implicit behavior for `0`. If `dividend` is `0`, the loop condition `divd >= divi` fails immediately, returning `0`, which is correct.
3.  **Use `std::abs`:** Ensure `<cmath>` or `<cstdlib>` is included. Since you are using `long long`, `std::abs` is overloaded correctly, but explicitly casting to `long long` as you did is safe.
4.  **Refine Loop:** The logic `i = i - 1` and resetting `i = 0` is functional, but it could be cleaner by using a nested loop structure to clarify the "search" vs "subtract" phases. 

```cpp
// Example of clearer structure:
while (absDividend >= absDivisor) {
    long long temp = absDivisor, multiple = 1;
    while (absDividend >= (temp << 1)) {
        temp <<= 1;
        multiple <<= 1;
    }
    absDividend -= temp;
    count += multiple;
}
``` 
This revision removes the need for manual index backtracking, making the logic easier to follow.

---
---


# Question Revision
### Revision Report: Divide Two Integers

**Pattern:** Bit Manipulation / Exponential Search

**Brute Force:** 
Repeatedly subtract the divisor from the dividend until the remainder is less than the divisor.
*   **Time Complexity:** $O(n)$ where $n$ is the quotient.
*   **Space Complexity:** $O(1)$.

**Optimal Approach:**
Use bit shifting to subtract powers of two. Double the divisor (by left-shifting) in each step to find the largest multiple of $2^k$ that fits into the dividend, then subtract that multiple and add $2^k$ to the quotient. Repeat until the remainder is smaller than the divisor.
*   **Time Complexity:** $O(\log^2 n)$ or $O(\log n)$ depending on implementation, as we reduce the dividend exponentially.
*   **Space Complexity:** $O(1)$.

**The 'Aha' Moment:**
When the problem forbids multiplication, division, and modulo, and the constraints suggest $O(n)$ is too slow, the doubling/halving nature of binary representations is the only way to achieve logarithmic performance.

**Summary:** 
Whenever you are forbidden from using division, treat the operation as binary subtraction by shifting the divisor left to find the largest power-of-two multiplier.

---
