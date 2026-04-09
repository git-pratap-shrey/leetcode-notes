---
title: "Power of Two"
slug: power-of-two
date: "2026-04-09"

---
---

# My Solution
~~~c
bool isPowerOfTwo(int n) {
    if(n<=0){
        return false;
    }
    if(n!=1 && n%2!=0){
        return false;
    }
    if(n==1){
        return true;
    }
    n= n >> 1;

    return isPowerOfTwo(n);

    
}
~~~

# Submission Review
## Approach
- **Technique**: Recursive approach with trial division by 2.
- **Optimality**: Suboptimal. The recursive approach adds overhead and is slower than bitwise manipulation. A power of two has exactly one bit set in binary representation, which can be checked in $O(1)$ time.

## Complexity
- **Time Complexity**: $O(\log n)$, as the function divides $n$ by 2 in each recursive step.
- **Space Complexity**: $O(\log n)$ due to the recursive call stack depth.

## Efficiency Feedback
- **Bottleneck**: The function uses recursion for a calculation that can be done using the property `(n & (n - 1)) == 0`.
- **Optimization**: For $n > 0$, replace the entire logic with `return (n > 0) && ((n & (n - 1)) == 0);`. This eliminates the call stack and reduces the operations to a few CPU cycles.

## Code Quality
- **Readability**: Good; the logic is simple to follow.
- **Structure**: Moderate; the recursion is unnecessary for this specific problem.
- **Naming**: Good; the function name clearly reflects its purpose.
- **Concrete Improvements**:
    - Avoid recursion to prevent potential stack overflow on large inputs (though constrained by `int` here) and to improve performance.
    - Consolidate the base cases. The current checks (`n != 1 && n % 2 != 0`) are redundant once you use bitwise logic.
    - Remove the unnecessary assignment `n = n >> 1` by performing the shift within the recursive call or replacing the structure entirely.

---
---


# Question Revision
### Revision Report: Power of Two

**Pattern:** Bit Manipulation

**Brute Force:**
Repeatedly divide the number by 2 or use a `while` loop to check if $n$ remains divisible by 2 until it reaches 1. 
*   **Complexity:** Time: $O(\log n)$, Space: $O(1)$.

**Optimal Approach:**
Use the bitwise property that a power of two in binary is a `1` followed by only `0`s (e.g., $8 = 1000_2$). Subtracting 1 flips all bits (e.g., $7 = 0111_2$). Therefore, $n \ \& \ (n - 1)$ will result in $0$ if $n$ is a power of two (and $n > 0$).
*   **Complexity:** Time: $O(1)$, Space: $O(1)$.

**The 'Aha' Moment:**
Whenever a problem involves powers of a base (like 2), think about the unique properties of their binary representations compared to their predecessors.

**Summary:**
Powers of two have exactly one bit set, so clearing the lowest set bit using `n & (n - 1)` must result in zero.

---
