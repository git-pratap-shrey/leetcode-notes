---
title: "Reverse Bits"
slug: reverse-bits

---
---

# My Solution
~~~java
class Solution {
    public int reverseBits(int n) {
        int temp=0,rm=0;
        for(int i=0;i<32;i++){
            rm=n%2;
             n=n/2;
            temp=temp+rm*(int)Math.pow(2,31-i);
        }
        return temp;
    }
}
~~~

# Submission Review
## Approach
*   **Technique:** Bit manipulation via arithmetic operators (`%`, `/`) and `Math.pow`.
*   **Optimal:** No. The approach relies on floating-point arithmetic (`Math.pow`) and repeated division/modulus, which is significantly slower than bitwise operations.

## Complexity
*   **Time Complexity:** $O(1)$ (effectively constant time for 32 iterations).
*   **Space Complexity:** $O(1)$.
*   **Bottleneck:** The use of `Math.pow()` inside a loop introduces unnecessary overhead and potential precision issues, though it works here because $2^{31-i}$ results in integers.

## Efficiency Feedback
*   **Issue:** `Math.pow(2, 31-i)` is computationally expensive compared to bit-shifting (`1 << (31 - i)`).
*   **Issue:** Using division (`/`) and modulus (`%`) on a signed integer `n` can lead to incorrect results if `n` is negative (as Java's `/` operator truncates toward zero and does not treat the bit pattern as an unsigned 32-bit integer).
*   **Optimization:** Use bitwise operators: `(n >>> i) & 1` to extract bits and `result | (bit << (31 - i))` to assemble the reversed integer.

## Code Quality
*   **Readability:** Moderate. The logic is easy to follow, but the math-heavy approach is non-idiomatic for bit manipulation.
*   **Structure:** Moderate. The loop covers the 32-bit range correctly.
*   **Naming:** Poor. `temp` and `rm` are nondescriptive; `reversed` and `bit` would be better.
*   **Concrete Improvements:** 
    *   Use `Integer.reverseBytes` or bitwise shifts.
    *   Example improvement:
        ```java
        int result = 0;
        for (int i = 0; i < 32; i++) {
            result = (result << 1) | (n & 1);
            n >>= 1;
        }
        return result;
        ```
    *   *Self-correction:* The provided loop structure above is much cleaner and avoids the need for `Math.pow`.

---
---


# Question Revision
### Revision Report: Reverse Bits

**Pattern:** Bit Manipulation

**Brute Force:** Iterate through all 32 bits of the input integer, extract each bit using a mask (`n & 1`), and store it in a new result variable while shifting the result to the left.

**Optimal Approach:** Process the input bit-by-bit using a loop. Initialize `result = 0`, then for each of the 32 iterations: shift `result` left by 1, add the last bit of the input (`n & 1`) to `result`, and shift the input `n` right by 1.
*   **Time Complexity:** $O(1)$ (Fixed to 32 operations regardless of input value).
*   **Space Complexity:** $O(1)$.

**The 'Aha' Moment:** The fixed-width requirement (32 bits) signals that you must process every position regardless of the input's magnitude, making bitwise shifting the most efficient traversal mechanism.

**Summary:** Treat the integer as a 32-slot array and use bitwise shifts to "pop" from the end of the input and "push" onto the result.

---
