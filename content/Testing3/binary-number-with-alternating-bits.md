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
*   **Technique:** Iterative bit manipulation using modulo and division.
*   **Optimality:** Optimal. It checks adjacent bits sequentially, which is the most straightforward way to validate the condition.

## Complexity
*   **Time Complexity:** $O(\log n)$, where $n$ is the input integer. The number of iterations is equal to the number of bits in $n$.
*   **Space Complexity:** $O(1)$, as it uses a constant amount of extra space.

## Efficiency Feedback
*   **Runtime:** The implementation is highly efficient. Since it processes bits using arithmetic operations, it performs as well as any bit-shifting approach.
*   **Optimization:** This can be solved in $O(1)$ time without a loop using bitwise tricks:
    ```java
    n ^= (n >> 1);
    return (n & (n + 1)) == 0;
    ```
    This works because `n ^ (n >> 1)` results in a sequence of 1s if the bits alternate, and `(n & (n + 1)) == 0` is a classic check for a number consisting entirely of 1s (like `0111...`).

## Code Quality
*   **Readability:** Good. The logic is easy to follow.
*   **Structure:** Good. Simple loop structure with an early return.
*   **Naming:** Moderate. `temp` is slightly vague; `lastBit` would be more descriptive.
*   **Improvements:** 
    *   Using bitwise operators (`n >>= 1` and `n & 1`) is generally idiomatic for bit-manipulation problems, even if arithmetic operators are functionally equivalent.
    *   The `temp` variable could be initialized to `n & 1` and the loop could be simplified to avoid the initial manual step outside the loop.

---
---


# Question Revision
### Revision Report: Binary Number with Alternating Bits

**Pattern:** Bit Manipulation

**Brute Force:**
Convert the integer to a binary string (or list of bits) and iterate through the sequence to verify that no two adjacent elements are identical.
*   **Time Complexity:** $O(\log n)$ (number of bits)
*   **Space Complexity:** $O(\log n)$ to store the bit representation.

**Optimal Approach:**
1.  Perform a bitwise XOR between the number `n` and `n >> 1`. This produces a value where every bit is `1` if the original bits alternated.
2.  Let `x = n ^ (n >> 1)`. If `n` has alternating bits, `x` will be a sequence of all `1`s (e.g., `111`).
3.  Check if `x & (x + 1) == 0`, which is the standard trick to verify if a number is of the form $2^k - 1$.
*   **Time Complexity:** $O(1)$
*   **Space Complexity:** $O(1)$

**The 'Aha' Moment:**
When a problem asks to verify a relationship between *adjacent bits*, shifting the number by one position and XORing it aligns these neighbors to expose patterns globally.

**Summary:**
XORing a number with its right-shift collapses alternating bits into a string of ones, which can be validated using the $x \& (x+1)$ property.

---
