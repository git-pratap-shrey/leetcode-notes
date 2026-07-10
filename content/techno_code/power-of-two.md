---
title: "Power of Two"
slug: power-of-two
date: "2026-07-10"
---

# My Solution
~~~cpp
class Solution {
public:
    bool isPowerOfTwo(int n) {
        if(n<=0){
            return false;
           }
       if(n==1){
            return true;
        }
        if(n%2!=0){
            return false;
         }
        return isPowerOfTwo(n/2);
    }
};
~~~

# Submission Review
## Approach
*   **Technique:** Recursive approach.
*   **Optimal:** No. While it correctly identifies powers of two, it uses $O(\log n)$ stack space and multiple function calls where a bitwise operation would be $O(1)$ and iterative.

## Complexity
*   **Time Complexity:** $O(\log n)$, as the number is divided by 2 in each recursive step.
*   **Space Complexity:** $O(\log n)$ due to the recursion stack depth.

## Efficiency Feedback
*   **Bottleneck:** The overhead of recursive function calls is unnecessary for this problem.
*   **Optimization:** Use the bitwise property: `(n > 0) && ((n & (n - 1)) == 0)`. This performs the check in $O(1)$ time and $O(1)$ space without branching or recursion.

## Code Quality
*   **Readability:** Good. The logic is straightforward and easy to follow.
*   **Structure:** Moderate. The base cases are clearly defined, but the implementation is overly verbose for a simple boolean check.
*   **Naming:** Good. `isPowerOfTwo` and `n` are standard and descriptive enough for this context.
*   **Improvements:** 
    *   Remove recursion in favor of the bitwise `n & (n - 1)` trick to improve performance and memory usage.
    *   Consistent indentation: The code has inconsistent whitespace (e.g., `if(n<=0){` vs `if(n==1){`).
    *   The first three `if` statements can be simplified or condensed.

---

# Question Revision
### Revision Report: Power of Two

**Pattern:** Bit Manipulation

**Brute Force:**
Repeatedly divide the number by 2 or use a loop/recursion to multiply 2 by itself until the value equals $n$. 
*   **Time Complexity:** $O(\log n)$
*   **Space Complexity:** $O(1)$

**Optimal Approach:**
Leverage the property of powers of two in binary representation: a power of two has exactly one bit set (e.g., $4$ is `100`, $8$ is `1000`). If $n > 0$, then $n \& (n - 1)$ will flip the rightmost set bit to 0. If the result is $0$, the number is a power of two.
*   **Time Complexity:** $O(1)$
*   **Space Complexity:** $O(1)$

**The 'Aha' Moment:**
When you see a problem involving powers of two, immediately consider binary representation where these numbers always appear as a single `1` followed by zeros.

**Summary:**
Subtracting 1 from a power of two flips the leading bit and turns all trailing zeros into ones, making the bitwise AND of $n$ and $n-1$ perfectly zero.

---