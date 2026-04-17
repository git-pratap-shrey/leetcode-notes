---
title: "Power of Two"
slug: power-of-two
date: "2026-03-30"
---

# My Solution
~~~cpp
class Solution {
public:
    bool isPowerOfTwo(int n) {
        if(n==1){
            return true;
        }
        if(n%2!=0 || n<=0 ){
            return false;
        }
        return isPowerOfTwo(n/2);
    }
};
~~~

# Submission Review
## Approach
- **Technique**: Recursive division.
- **Optimality**: Suboptimal. While correct, it uses $O(\log n)$ time and space, whereas a bitwise approach (`n > 0 && (n & (n - 1)) == 0`) achieves $O(1)$ for both.

## Complexity
- **Time Complexity**: $O(\log n)$ — The input is divided by 2 in each recursive call.
- **Space Complexity**: $O(\log n)$ — Due to the recursive call stack.

## Efficiency Feedback
- **Bottleneck**: The recursion depth creates unnecessary memory overhead on the stack.
- **Optimization**: Replacing recursion with a `while` loop would reduce space complexity to $O(1)$. Using bitwise operations would reduce time complexity to $O(1)$.

## Code Quality
- **Readability**: Good. The logic is straightforward and easy to follow.
- **Structure**: Moderate. The base cases are handled correctly, but recursion is an overkill for this problem.
- **Naming**: Good. Method and parameter names follow standard conventions.
- **Improvements**: 
    - Convert the recursive function to an iterative one or a bitwise check.
    - The check `n <= 0` is performed in every recursive call; it only needs to be checked once at the start.

---

# Question Revision
### Power of Two

**Pattern:** Bit Manipulation

**Brute Force:** 
Iteratively divide the number by 2 as long as it is even. If the final result is 1, it is a power of two.
- **Time:** $O(\log n)$
- **Space:** $O(1)$

**Optimal Approach:** 
A power of two has exactly one bit set in binary (e.g., $8 = 1000_2$). The number $n-1$ flips that bit and sets all following bits to 1 (e.g., $7 = 0111_2$). Performing a bitwise AND between $n$ and $n-1$ will result in 0 if $n$ is a power of two.
- **Time:** $O(1)$
- **Space:** $O(1)$

**The 'Aha' Moment:** 
Powers of two are the only positive integers that contain exactly one set bit in their binary representation.

**Summary:** 
Check if `n > 0` and `(n & (n - 1)) == 0` to identify powers of two instantly.

---