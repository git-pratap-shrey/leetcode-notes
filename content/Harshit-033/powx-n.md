---
title: "Pow(x, n)"
slug: powx-n
date: "2026-04-11"

---
---

# My Solution
~~~c
double myPow(double x, int n) {
    long long N=n;
    
    if (N<0){
        x=1/x;
        N=-N;
    }

    if (N==0) return 1.0;

    if (N%2==0) {
        return myPow(x*x,N/2);
    } else {
        return x*myPow(x*x,(N-1)/2);
    }
}
~~~

# Submission Review
## Approach
*   **Technique:** Binary Exponentiation (Exponentiation by Squaring) using recursion.
*   **Optimality:** Optimal. The algorithm reduces the number of multiplications to $O(\log N)$ by squaring the base and halving the exponent at each step.

## Complexity
*   **Time Complexity:** $O(\log N)$, where $N$ is the absolute value of the exponent. Each recursive call halves $N$.
*   **Space Complexity:** $O(\log N)$ due to the recursive call stack.

## Efficiency Feedback
*   **Performance:** The solution is highly efficient. 
*   **Optimization:** The recursion depth of $O(\log N)$ is negligible for $N$ within 32-bit integer limits (maximum depth $\approx 31$ or $63$ for `long long`), so a memory-intensive iterative approach is not strictly necessary unless stack space is extremely constrained. 

## Code Quality
*   **Readability:** Good. The logic is concise and easy to follow.
*   **Structure:** Good. Using `long long N` correctly handles the edge case where `n = INT_MIN` (preventing overflow when negating).
*   **Naming:** Good. `N` is used consistently for the exponent.
*   **Concrete Improvements:**
    *   **Tail Recursion:** The code is almost tail-recursive, but the `else` case (`x * myPow(...)`) prevents it from being strictly optimized by the compiler. While not necessary for this constraint, an iterative version would eliminate the $O(\log N)$ stack space entirely.
    *   **Style:** Minor: Consistent spacing around operators (e.g., `x = 1 / x;` instead of `x=1/x;`) would improve professional appearance.

### Suggested Iterative Refinement:
```c
double myPow(double x, int n) {
    long long N = n;
    if (N < 0) {
        x = 1 / x;
        N = -N;
    }
    double res = 1.0;
    while (N > 0) {
        if (N % 2 == 1) res *= x;
        x *= x;
        N /= 2;
    }
    return res;
}
```
This reduces space complexity to $O(1)$.

---
---


# Question Revision
### Revision Report: Pow(x, n)

**Pattern:** Divide and Conquer (Binary Exponentiation)

**Brute Force:** 
Multiply $x$ by itself $n$ times.
*   **Time:** $O(n)$
*   **Space:** $O(1)$

**Optimal Approach:** 
Use the property $x^n = (x^{n/2})^2$. If $n$ is odd, $x^n = x \cdot (x^{n/2})^2$. Recursively halve $n$ until $n=0$. Handle negative $n$ by converting the base to $1/x$ and exponent to $|n|$.
*   **Time:** $O(\log n)$
*   **Space:** $O(\log n)$ (stack depth)

**The 'Aha' Moment:** 
When you see an exponentiation problem with a large $n$, recognize that you can halve the work at every step by squaring the base, turning linear growth into logarithmic decay.

**Summary:** 
Always reduce powers by half via squaring ($x^n = x^{n/2} \cdot x^{n/2}$) to transform $O(n)$ linear multiplication into $O(\log n)$ efficiency.

---
