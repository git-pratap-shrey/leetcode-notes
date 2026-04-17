---
title: "Pow(x, n)"
slug: powx-n
date: "2026-03-31"
---

# My Solution
~~~cpp
class Solution {
public:
    double solve(double x,long long n){
        if(n==0){
            return 1;
        }
        double ans=solve(x,n/2);
        if(n%2==0){
            return ans*ans;
        }
        else{
            return x*ans*ans;
        }
    }
    double myPow(double x, int n) {
        long long N=n;
        if(N<0){
            x=1/x;
            N=-N;
        }
        return solve(x,N);
    }
};
~~~

# Submission Review
## Approach
- **Technique**: Binary Exponentiation (Exponentiation by Squaring) using recursion.
- **Optimality**: Optimal. It reduces the number of multiplications from $O(n)$ to $O(\log n)$.

## Complexity
- **Time Complexity**: $O(\log n)$ — The exponent is halved in every recursive call.
- **Space Complexity**: $O(\log n)$ — Due to the recursion stack depth.

## Efficiency Feedback
- **Memory**: The space complexity is slightly higher than necessary. An iterative implementation would reduce space to $O(1)$.
- **Integer Overflow**: The use of `long long N = n` correctly prevents overflow when `n` is `INT_MIN` ($-2^{31}$), as `-n` would exceed the capacity of a 32-bit signed integer.

## Code Quality
- **Readability**: Good. The logic is straightforward and easy to follow.
- **Structure**: Good. Separating the sign handling logic in `myPow` from the recursive logic in `solve` keeps the base case clean.
- **Naming**: Moderate. `solve` is a generic name; a more descriptive name like `fastPow` or `recursivePow` would be preferred.
- **Concrete Improvements**:
    - Convert the recursion to a `while (N > 0)` loop to eliminate stack overhead.
    - Use `const` for parameters that do not change within the function scope.

---

# Question Revision
### Pow(x, n)

**Pattern:** Divide and Conquer (Binary Exponentiation)

**Brute Force:** Multiply $x$ by itself $n$ times using a loop.
- Time: $O(n)$
- Space: $O(1)$

**Optimal Approach:** Use **Exponentiation by Squaring**. Instead of linear multiplication, halve the exponent $n$ in each step and square the base $x$. If $n$ is even, $x^n = (x^2)^{n/2}$. If $n$ is odd, $x^n = x \cdot (x^2)^{(n-1)/2}$. Handle $n < 0$ by transforming $x$ to $1/x$ and $n$ to $-n$.
- Time: $O(\log n)$
- Space: $O(1)$ (iterative)

**The 'Aha' Moment:** The ability to square the base while halving the exponent allows the problem size to shrink logarithmically rather than linearly.

**Summary:** Use Binary Exponentiation to achieve $O(\log n)$ time by squaring the base and halving the power at each step.

---