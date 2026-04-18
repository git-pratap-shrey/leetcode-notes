---
title: "Mirror Distance of an Integer"
slug: mirror-distance-of-an-integer
date: "2026-04-18"
---

# My Solution
~~~cpp
class Solution {
public:
    int mirrorDistance(int n) {
        int a=n;
        int p=0;
        while(a>0){
            int m=a%10;
            p=p*10+m;
            a=a/10;
        }
        return abs(n-p);
        
    }
};
~~~

# Submission Review
## Approach
- **Technique**: Iterative digit extraction and reconstruction (Integer Reversal).
- **Optimality**: Optimal. The solution processes each digit of the number exactly once.

## Complexity
- **Time Complexity**: $O(\log_{10} n)$ — The number of iterations is proportional to the number of digits in $n$.
- **Space Complexity**: $O(1)$ — Constant extra space is used regardless of the input size.

## Efficiency Feedback
- The runtime and memory usage are minimal and appropriate for the problem.
- **Potential Risk**: The variable `p` (the reversed number) is declared as an `int`. If $n$ is large (e.g., $1,000,000,007$), the reversed value could exceed the maximum limit of a 32-bit signed integer, leading to integer overflow. Using `long` or `long long` for `p` would mitigate this.

## Code Quality
- **Readability**: Moderate. The logic is simple, but the lack of descriptive variable names makes it less intuitive.
- **Structure**: Good. The logic is contained within a single, concise method.
- **Naming**: Poor.
    - `a` $\rightarrow$ `temp` or `original`
    - `p` $\rightarrow$ `reversed`
    - `m` $\rightarrow$ `digit`
- **Concrete Improvements**:
    - Use descriptive naming to improve maintainability.
    - Use `long` for the reversed variable to prevent overflow.

---

# Question Revision
### Mirror Distance of an Integer

**Pattern:** Math / Digit Manipulation

**Brute Force:** Convert the integer to a string, reverse the string, parse it back to an integer, and calculate the absolute difference.

**Optimal Approach:** 
Use a loop with modulo (`% 10`) and integer division (`/ 10`) to extract digits and reconstruct the reversed number mathematically.
- **Time Complexity:** $O(\log_{10} n)$ — proportional to the number of digits.
- **Space Complexity:** $O(1)$ — only a few integer variables used.

**The 'Aha' Moment:** The term "mirror" is a direct hint to perform a digit reversal of the input integer.

**Summary:** Compute the absolute difference between the original integer and its reversed counterpart.

---