---
title: "Power of Three"
slug: power-of-three
date: "2026-09-01"
---

# My Solution
~~~cpp
class Solution {
public:
    bool isPowerOfThree(int n) {
        if(n<=0){
            return false;
        }
        while(n%3==0){
            n=n/3;
        }
        return n==1;
    }
};
~~~

# Submission Review
## Approach
- **Technique:** Iterative simulation (Repeated Division).
- **Optimality:** Optimal in terms of general logic, though a constant-time $O(1)$ solution exists for fixed-width integers (by checking if the maximum power of 3 that fits in a 32-bit integer is divisible by $n$).

## Complexity
- **Time Complexity:** $O(\log_3 n)$ — The loop runs once for every power of 3 dividing $n$.
- **Space Complexity:** $O(1)$ — No additional memory is used regardless of input size.

## Efficiency Feedback
- **Runtime:** Very low. For a 32-bit signed integer, the loop executes a maximum of 19 times.
- **Optimization:** While the current approach is efficient, replacing the loop with `return n > 0 && 1162261467 % n == 0;` would reduce the complexity to $O(1)$.

## Code Quality
- **Readability:** Good. The logic is explicit and easy to follow.
- **Structure:** Good. Edge cases (non-positive integers) are handled immediately.
- **Naming:** Good. Variable `n` is appropriate for a mathematical input.
- **Improvements:** No concrete improvements needed for the current iterative logic; it is clean and correct.

---

# Question Revision
### Power of Three

**Pattern:** Mathematical Property / Constant Time Check

**Brute Force:** 
Use a `while` loop to repeatedly divide $n$ by 3 as long as the remainder is 0. If the final result is 1, $n$ is a power of three.
- **Time:** $O(\log_3 n)$
- **Space:** $O(1)$

**Optimal Approach:** 
Since $n$ is a 32-bit signed integer, there is a maximum possible power of three: $3^{19} = 1,162,261,467$. Because 3 is a prime number, any power of three ($3^k$) will only be divisible by smaller powers of three. Therefore, simply check if $n > 0$ and if $1,162,261,467 \pmod n == 0$.
- **Time:** $O(1)$
- **Space:** $O(1)$

**The 'Aha' Moment:** 
The fixed range of a 32-bit integer means there are only 20 possible powers of three, turning a search problem into a divisibility check.

**Summary:** Check if the maximum 32-bit power of 3 is divisible by $n$.

---