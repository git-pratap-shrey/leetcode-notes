---
title: "Pow(x, n)"
slug: powx-n
date: "2026-04-19"
---

# My Solution
~~~java
class Solution {
    public double myPow(double x, int n) {
        double ans = 1;
        long m = n;
        if(x==0 && n<0) return 0;
        if(m<0){
            m = -m;
        }
        while(m>0){
            if(m%2==1){
                ans = ans*x;
                m = m-1;
            }
            else{
                m = m/2;
                x = x*x;
            }
        }
        if(n<0){
            ans = 1.0/ans;
        }
        return ans;
    }
}
~~~

# Submission Review
## Approach
- **Technique**: Binary Exponentiation (Exponentiation by Squaring), implemented iteratively.
- **Optimality**: Optimal. It reduces the number of multiplications from $O(n)$ to $O(\log n)$.

## Complexity
- **Time Complexity**: $O(\log n)$ — The exponent `m` is halved in nearly every iteration.
- **Space Complexity**: $O(1)$ — Only a few primitive variables are used regardless of input size.

## Efficiency Feedback
- **Runtime**: Very efficient. The use of `long m = n` correctly prevents integer overflow when `n` is `Integer.MIN_VALUE` (since `-Integer.MIN_VALUE` exceeds `Integer.MAX_VALUE`).
- **Optimization**: The `if(m%2==1)` block performs `m = m - 1`. This is logically sound, as the subsequent iteration will inevitably enter the `else` block to perform the division.

## Code Quality
- **Readability**: Good. The logic is straightforward and easy to follow.
- **Structure**: Good. The handling of negative exponents is separated from the core multiplication loop.
- **Naming**: Moderate. `ans` is acceptable, but `m` should be named more descriptively (e.g., `exponent` or `absN`).
- **Concrete Improvements**:
    - **Logic Error**: The line `if(x==0 && n<0) return 0;` is mathematically incorrect. $0$ raised to a negative power is division by zero ($1/0$), which typically results in `Infinity` in Java's `double` precision. Returning `0` is an incorrect representation of this state.
    - **Simplification**: The `if(m%2==1)` block can be simplified by removing `m = m - 1` and simply letting the loop continue; the `else` logic (squaring) will still work if the parity check is handled via bitwise AND (`m & 1`).

---

# Question Revision
### Pow(x, n)

**Pattern:** Divide and Conquer (Binary Exponentiation)

**Brute Force:** 
Multiply $x$ by itself $n$ times using a loop.
- **Time:** $O(n)$
- **Space:** $O(1)$

**Optimal Approach:** 
Use the property that $x^n = (x^{n/2})^2$ if $n$ is even, and $x^n = x \cdot (x^{n/2})^2$ if $n$ is odd. For negative exponents, calculate $(1/x)^{-n}$.
- **Time:** $O(\log n)$
- **Space:** $O(\log n)$ (recursive stack) or $O(1)$ (iterative)

**The 'Aha' Moment:** 
The exponential growth of the result suggests that halving the exponent at each step can reduce linear time to logarithmic time.

**Summary:** 
Use Binary Exponentiation to calculate powers by squaring the base and halving the exponent recursively.

---