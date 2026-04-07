---
title: "Count Commas in Range II"
slug: count-commas-in-range-ii
date: "2026-03-16"

---
---

# My Solution
~~~cpp
class Solution {
public:
    long long countCommas(long long n) {
        long long r=0,i;
        for(i=1000;i<=n;i*=1000){
            r+=(n-i+1);
        }
        return r;
    }
};
~~~

# Submission Review
## Approach
- **Technique:** Digit counting based on powers of 1000. 
- **Optimality:** The approach is **optimal**. It correctly counts the number of times a comma appears in numbers from 1 to $n$. A number $x$ has a comma if $x \ge 1000$, two commas if $x \ge 1,000,000$, etc. The logic `n - i + 1` calculates how many numbers in the range $[1, n]$ are at least $i$, effectively counting the $k$-th comma for all positions $k$.

## Complexity
- **Time Complexity:** $O(\log_{1000} n)$. Given $n \le 10^{18}$, the loop runs at most 6 times. This is effectively $O(1)$.
- **Space Complexity:** $O(1)$.

## Efficiency Feedback
- The solution is extremely efficient. The use of a simple loop over powers of 1000 is the mathematical equivalent of summing the number of blocks of 3 digits beyond the first block.
- **Potential Issue:** The loop condition `i <= n` is safe for `long long`, but if $n$ were the maximum value of `long long` ($2^{63}-1$), `i *= 1000` could overflow. However, since $10^{18} < 2^{63}-1$, it is safe for the given constraints.

## Code Quality
- **Readability:** Moderate. The variable names `r` and `i` are not descriptive.
- **Structure:** Good. Simple and concise.
- **Naming:** Poor. Use descriptive names like `totalCommas` instead of `r` and `threshold` or `magnitude` instead of `i`.
- **Concrete Improvements:**
  - Add a comment explaining the mathematical logic (that each power of 1000 adds exactly one comma per valid number).
  - Use more descriptive variable names for clarity in a professional or educational context.

```cpp
class Solution {
public:
    long long countCommas(long long n) {
        long long totalCommas = 0;
        for (long long magnitude = 1000; magnitude <= n; magnitude *= 1000) {
            totalCommas += (n - magnitude + 1);
        }
        return totalCommas;
    }
};
```

---
---


# Question Revision
### Revision Report: Count Commas in Range II

**Pattern:** Digit DP (Combinatorics on Digits)

**Brute Force:** 
Iterate through every integer from 1 to $n$, convert each to a string, and count occurrences of the comma character (representing digit placement). 
*   **Complexity:** $O(n \cdot \log_{10} n)$ time, $O(\log n)$ space.

**Optimal Approach:** 
Use a Digit DP function `count(N)` that calculates the total number of commas for all numbers up to $N$. Process the number digit-by-digit, counting how many times each digit position contributes to the comma total based on the prefix and suffix values.
*   **Complexity:** $O(\log_{10} n)$ time, $O(\log_{10} n)$ space.

**The 'Aha' Moment:** 
The constraint $n \le 10^{15}$ immediately invalidates linear iteration and signals that the solution must depend only on the number of digits in $n$.

**Summary:** 
When a problem asks for digit-based counts over a massive range, ignore the individual numbers and calculate the contribution of each digit position using combinatorics.

---
