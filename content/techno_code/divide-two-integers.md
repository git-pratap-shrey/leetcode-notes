---
title: "Divide Two Integers"
slug: divide-two-integers
date: "2026-06-30"

---

# My Solution
~~~
class
 Solution {
public:
    int divide(int dividend, int divisor) {

      if(dividend==INT_MIN&&divisor==-1)
            return INT_MAX;

        long long dvd=abs((long long)dividend);
        long long dvs=abs((long long)divisor);

      long long ans=0;

        while(dvd>=dvs){

            long long tmp=dvs,cnt=1;

             while((tmp<<1)<=dvd){
                tmp<<=1;
                cnt<<=1;
            }

            dvd-=tmp;
            ans+=cnt;
        }

        if((dividend<0)^(divisor<0))
            ans=-ans;

        return (int)ans;
    }
};
~~~

# Submission Review

## Approach

- **Technique**: Bit-manipulation using exponential search (bit-shifting). The code repeatedly finds the largest multiple of the divisor (in powers of 2) that fits into the remaining dividend.
- **Optimality**: Optimal. This simulates binary division, reducing the time complexity from linear $O(N)$ to logarithmic $O(\log N)$ relative to the dividend.

## Complexity

- **Time Complexity**: $O(\log^2 (\frac{\text{dividend}}{\text{divisor}}))$ or more simply $O(\log(\text{dividend}))$. Each outer loop iteration removes a power-of-two multiple of the divisor, corresponding to setting a bit in the binary representation of the quotient.
- **Space Complexity**: $O(1)$. Only a few `long long` variables are used regardless of input size.

## Efficiency Feedback

- **Runtime**: Very efficient due to the use of bit-shifts (`<< 1`), which are faster than arithmetic multiplication.
- **Memory**: Minimal memory footprint.
- **Observation**: Using `long long` avoids the complex edge-case handling required when dealing with `INT_MIN` in a purely 32-bit environment (where `abs(INT_MIN)` overflows a signed 32-bit integer).

## Code Quality

- **Readability**: Good. The logic is straightforward and the use of XOR for sign determination is a standard, concise practice.
- **Structure**: Good. The special case for overflow is handled at the entry point, and the core logic is isolated.
- **Naming**: Moderate. While `dvd`, `dvs`, `tmp`, and `cnt` are understandable in context, more descriptive names (e.g., `absDividend`, `absDivisor`, `currentMultiple`, `currentQuotient`) would improve clarity.
- **Improvements**: 
    - Consistent indentation is missing in the first `if` block.
    - Explicitly using `1LL` during shifts can prevent potential overflow if the logic were ever ported to a system where `long long` behavior differs, though it is safe here.

---

# Question Revision

#

## Revision Report: Divide Two Integers

**Pattern:** Bit Manipulation / Exponential Search

**Brute Force:** 
Repeatedly subtract the divisor from the dividend until the dividend is smaller than the divisor.
- **Complexity:** $O(n)$ time, where $n$ is the quotient.

**Optimal Approach:**
Instead of subtracting one divisor at a time, subtract the largest possible multiple of the divisor using bit shifts (doubling). Find the largest $k$ such that $\text{divisor} \times 2^k \le \text{dividend}$, subtract it, and repeat with the remainder.
- **Time Complexity:** $O(\log^2 n)$ or $O(\log n)$ depending on the inner loop implementation.
- **Space Complexity:** $O(1)$.

**The 'Aha' Moment:** 
The restriction on multiplication, division, and modulo operators is a direct signal to implement those operations using binary representation and bit-shifting.

**Summary:** 
Efficiently divide by subtracting the largest powers-of-two multiples of the divisor.

---
