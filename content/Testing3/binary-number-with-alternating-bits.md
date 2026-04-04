---
title: "Binary Number with Alternating Bits"
slug: binary-number-with-alternating-bits

---
---

# My Solution
~~~java
class Solution {
    public boolean hasAlternatingBits(int n) {
        int temp=n%2;
        n=n/2;
        while(n>0){
            if(temp==n%2) return false;
            temp=n%2;
            n=n/2;
        }
        return true;
    }
}
~~~

# Submission Review
## Approach
*   **Technique:** Iterative bit manipulation. The code checks the current parity of the number, shifts it right, and compares it with the previous bit.
*   **Optimality:** It is optimal in terms of Big-O complexity ($O(\log n)$), but can be implemented more elegantly using bitwise operations without division/modulo.

## Complexity
*   **Time Complexity:** $O(\log n)$, as the number of bits in $n$ is logarithmic relative to the value of $n$.
*   **Space Complexity:** $O(1)$, as it uses a constant amount of extra space.

## Efficiency Feedback
*   **Performance:** Using division (`/2`) and modulo (`%2`) operators is generally slower than bitwise operators (`>>` and `&`). While JVM compilers might optimize this, it is idiomatic in competitive programming to use bitwise shifts.
*   **Potential Optimization:** A more "bit-manipulation" heavy approach:
    1.  `n ^= (n >> 1);`
    2.  Check if the resulting value is of the form $2^k - 1$ (i.e., `(n & (n + 1)) == 0`).

## Code Quality
*   **Readability:** Good. The logic is straightforward and easy to follow.
*   **Structure:** Good. The loop correctly handles the termination condition.
*   **Naming:** Moderate. `temp` is generic; `lastBit` would be more descriptive.
*   **Concrete Improvements:**
    *   Use `n >>= 1` instead of `n = n / 2`.
    *   Use `n & 1` instead of `n % 2` to extract the LSB.
    *   The `temp` variable initialization before the loop is fine, but ensures the code is cleaner by avoiding potential edge case issues with zero (though the problem constraints usually imply $n \ge 1$).

```java
// Recommended bitwise refinement
public boolean hasAlternatingBits(int n) {
    int lastBit = n & 1;
    n >>= 1;
    while (n > 0) {
        int currentBit = n & 1;
        if (lastBit == currentBit) return false;
        lastBit = currentBit;
        n >>= 1;
    }
    return true;
}
```

---
---


# Question Revision
### Revision Report: Binary Number with Alternating Bits

**Pattern:** Bit Manipulation

**Brute Force:** 
Convert the integer to a string or array of bits, iterate through the sequence, and compare each bit with its predecessor to ensure $bit_i \neq bit_{i+1}$.
*   **Time:** $O(\log n)$
*   **Space:** $O(\log n)$

**Optimal Approach:** 
Use bitwise operations to check the pattern without conversion. If $n$ has alternating bits, then $x = n \oplus (n >> 1)$ results in a number consisting of all 1s (e.g., $1010_2 \oplus 0101_2 = 1111_2$). Check if $x \ \& \ (x + 1) == 0$ to verify that $x$ is a sequence of contiguous 1s.
*   **Time:** $O(1)$
*   **Space:** $O(1)$

**The 'Aha' Moment:** 
The observation that shifting a sequence of alternating bits and XORing it with itself cancels out the variations, leaving a string of uniform bits, turns a positional check into a geometric property check.

**Summary:** 
Whenever a problem asks for an "alternating" bit pattern, use $n \oplus (n >> 1)$ to collapse the sequence into a constant value.

---
