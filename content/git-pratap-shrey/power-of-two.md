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
        return (n>=0 && __builtin_popcount(n)==1);
    }
};
~~~

# Submission Review
## Approach
*   **Technique**: Bit manipulation.
*   **Optimal**: Yes. It leverages the hardware-accelerated population count to verify that exactly one bit is set in the integer.

## Complexity
*   **Time Complexity**: $O(1)$. `__builtin_popcount` maps to a single CPU instruction (like `POPCNT` on x86) on most modern architectures.
*   **Space Complexity**: $O(1)$.

## Efficiency Feedback
*   **Runtime**: Highly efficient. The `n >= 0` check correctly handles the sign bit and the edge case for negative numbers, as power-of-two values must be positive.
*   **Alternative**: The standard bitwise trick `(n > 0) && ((n & (n - 1)) == 0)` is equally performant and potentially more portable across non-GCC/Clang compilers, but the provided approach is perfectly valid and readable.

## Code Quality
*   **Readability**: Good. The intent is clear.
*   **Structure**: Good. The solution is concise and fits well within the class structure.
*   **Naming**: Good. Standard naming conventions followed.
*   **Improvements**:
    *   The code is excellent. If strict adherence to the C++ standard (without compiler-specific intrinsics) is required, consider using `(n > 0) && ((n & (n - 1)) == 0)`.
    *   Note that `__builtin_popcount` expects an `unsigned int` or `int`; while it works for positive `int` values, it is best practice to ensure the type matches the expected width.

---

# Question Revision
### Revision Report: Power of Two

**Pattern:** Bit Manipulation

**Brute Force:**
Repeatedly divide the number by 2 or use a loop/recursion to multiply 2 by itself until the target is reached or exceeded.
*   **Time:** $O(\log n)$
*   **Space:** $O(1)$

**Optimal Approach:**
Powers of two in binary are represented as a `1` followed by only `0`s (e.g., $4 = 100_2, 8 = 1000_2$). Subtracting 1 flips all bits (e.g., $3 = 011_2$). Performing a bitwise AND between $n$ and $n-1$ will result in $0$ if and only if $n$ is a power of two and $n > 0$.
*   **Time:** $O(1)$
*   **Space:** $O(1)$

**The 'Aha' Moment:**
Whenever you see a problem involving powers of two, examine the binary representation to see how the single set bit interacts with its predecessor.

**Summary:**
To check for a power of two, verify $n > 0$ and $(n \ \& \ (n - 1)) == 0$ to clear the only set bit.

---