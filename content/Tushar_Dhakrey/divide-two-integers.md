---
title: "Divide Two Integers"
slug: divide-two-integers
date: "2026-04-22"
---

# My Solution
~~~java
class Solution {
    public int divide(int dividend, int divisor) {
        if(dividend==divisor) return 1;
        boolean sign = true;
        if(dividend>=0 && divisor<0) sign =false;
        else if(dividend<=0 && divisor>0) sign =false;
        long n = Math.abs((long)dividend);
        long d = Math.abs((long)divisor);
        long quotient = 0;
        while(n>=d){
            int cnt=0;
            while(n>=(d<<(cnt+1))){
                cnt++;
            }
            quotient += 1<<cnt;
            n -= (d<<cnt);
        }
        if(quotient==(1<<31) && sign) return Integer.MAX_VALUE;
        if(quotient==(1<<31) && !sign) return Integer.MIN_VALUE;
        return sign ? (int)quotient : (int)-quotient;
    }
}
~~~

# Submission Review
## Approach
- **Technique**: Bit-shifting subtraction (Exponential search). The code simulates division by finding the largest multiple of the divisor (in powers of 2) that fits into the remaining dividend.
- **Optimality**: Optimal for constraints forbidding multiplication, division, and modulo operators. It achieves logarithmic time complexity relative to the dividend.

## Complexity
- **Time Complexity**: $O(\log^2 n)$ or $O(\log n)$ depending on analysis. For each bit of the quotient, it performs a shift search. Since the dividend is bounded by $2^{31}$, the total iterations are minimal.
- **Space Complexity**: $O(1)$.

## Efficiency Feedback
- **Integer Overflow Bug**: The expression `1 << 31` in Java results in a signed 32-bit integer `-2147483648`. Comparing the `long quotient` to this value (`quotient == (1 << 31)`) will fail to correctly identify the overflow case for `Integer.MAX_VALUE` (which is $2^{31}-1$). It should be `1L << 31`.
- **Long Usage**: Using `long` to handle `Math.abs(Integer.MIN_VALUE)` is correct and prevents overflow during absolute value conversion.

## Code Quality
- **Readability**: Moderate. The logic is concise, but the lack of descriptive names makes it harder to follow at a glance.
- **Structure**: Good. The flow from sign determination $\rightarrow$ calculation $\rightarrow$ overflow handling $\rightarrow$ result return is logical.
- **Naming**: Poor.
    - `n` $\rightarrow$ `absDividend`
    - `d` $\rightarrow$ `absDivisor`
    - `cnt` $\rightarrow$ `shift`
    - `sign` $\rightarrow$ `isPositive`
- **Concrete Improvements**:
    - Change `1 << 31` to `1L << 31` to avoid signed integer wrap-around.
    - Replace the sign logic with a more concise: `boolean isPositive = (dividend < 0) == (divisor < 0);`.
    - Use descriptive variable names to improve maintainability.

---

# Question Revision
### Divide Two Integers

**Pattern:** Bit Manipulation / Binary Exponential Search

**Brute Force:**
Repeatedly subtract the divisor from the dividend until the dividend is smaller than the divisor.
- **Time:** $O(n)$ where $n$ is the quotient.
- **Space:** $O(1)$.

**Optimal Approach:**
Avoid linear subtraction by doubling the divisor (using left shifts `<<`) to find the largest multiple of the divisor ($divisor \times 2^k$) that fits into the current dividend. Subtract this value, record the power of 2 ($2^k$), and repeat the process with the remainder until the dividend is exhausted.
- **Time:** $O((\log n)^2)$ or $O(1)$ given the fixed 32-bit integer range.
- **Space:** $O(1)$.

**The 'Aha' Moment:** 
The restriction on multiplication and division operators is a direct hint to use bit shifting to simulate powers of 2.

**Summary:** 
Exponentially increase the divisor using bit-shifts to subtract large chunks of the dividend, reducing the time complexity from linear to logarithmic.

---