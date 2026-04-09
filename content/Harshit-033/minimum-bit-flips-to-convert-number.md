---
title: "Minimum Bit Flips to Convert Number"
slug: minimum-bit-flips-to-convert-number
date: "2026-04-09"

---
---

# My Solution
~~~c
int minBitFlips(int start, int goal) {

    int num=start^goal;
    int count=0;
    while(num>=1){
        if(num&1) count++;
        num=num>>1;
    }
    return count;
    
}
~~~

# Submission Review
## Approach
- **Technique:** Bitwise XOR followed by a bit-counting loop (Brian Kernighan’s algorithm alternative).
- **Optimality:** It is functionally correct but technically suboptimal compared to standard built-in functions or bit-manipulation tricks.

## Complexity
- **Time Complexity:** $O(k)$, where $k$ is the number of bits in the integer (effectively $O(1)$ for fixed-width integers like 32-bit `int`).
- **Space Complexity:** $O(1)$.

## Efficiency Feedback
- The current loop performs an iteration for every bit position, even if the bit is `0`. 
- **Optimization:** Use `__builtin_popcount(start ^ goal)` in GCC/Clang for a hardware-accelerated instruction. Alternatively, use `num &= (num - 1)` to count only set bits, reducing the loop iterations to exactly the number of bits that need flipping.

## Code Quality
- **Readability:** Good. The logic is straightforward and easy to follow.
- **Structure:** Good. Simple, self-contained function.
- **Naming:** Moderate. `num` is somewhat generic; `xor_result` or `diff` would be more descriptive.
- **Concrete Improvements:** 
    - The condition `while(num >= 1)` is technically correct, but `while(num > 0)` is more idiomatic.
    - To handle potentially negative inputs (though not expected given problem constraints), consider casting to `unsigned int` before the shift to ensure logical shift behavior.

```c
// Optimized version using Brian Kernighan's bit-counting approach
int minBitFlips(int start, int goal) {
    int diff = start ^ goal;
    int count = 0;
    while (diff > 0) {
        diff &= (diff - 1); // Clears the least significant set bit
        count++;
    }
    return count;
}
```

---
---


# Question Revision
### Revision Report: Minimum Bit Flips to Convert Number

**Pattern:** Bit Manipulation (XOR/Popcount)

**Brute Force:**
Iterate through each bit position (0 to 31) using bitwise shifts. Compare the bits of `start` and `goal` at each position; if they differ, increment a counter. 
*   **Time:** $O(1)$ (fixed 32-bit integer range)
*   **Space:** $O(1)$

**Optimal Approach:**
Compute `X = start ^ goal`. The XOR operation results in a bitmask where each `1` represents a position where `start` and `goal` differ. Use the built-in popcount function (e.g., `Integer.bitCount()` or `__builtin_popcount()`) to count the number of set bits in `X`. Alternatively, use Brian Kernighan’s algorithm (`n &= (n - 1)`) to clear set bits until zero.
*   **Time:** $O(1)$ (or $O(k)$ where $k$ is the number of set bits)
*   **Space:** $O(1)$

**The 'Aha' Moment:**
When a problem asks for the number of differing bits between two integers, the XOR operator is the universal tool to isolate those differences into a single value.

**Summary:**
Whenever you need to compare bits between two numbers, XOR them first, then count the resulting set bits.

---
