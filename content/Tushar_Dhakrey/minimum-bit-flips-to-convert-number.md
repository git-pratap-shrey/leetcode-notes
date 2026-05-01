---
title: "Minimum Bit Flips to Convert Number"
slug: minimum-bit-flips-to-convert-number
date: "2026-04-24"
---

# My Solution
~~~java
class Solution {
    public int minBitFlips(int start, int goal) {
        return Integer.bitCount(start^goal);
    }
}
~~~

# Submission Review
## Approach
- **Technique**: Bit Manipulation (XOR + Population Count).
- **Optimality**: Optimal. The XOR operation identifies all differing bits, and `bitCount` calculates the total number of these differences.

## Complexity
- **Time Complexity**: $O(1)$. `Integer.bitCount` in Java typically maps to a single hardware instruction (e.g., `POPCNT` on x86) or a constant-time bit-shifting algorithm.
- **Space Complexity**: $O(1)$. No auxiliary space is used.

## Efficiency Feedback
- The solution is maximally efficient. It leverages built-in JVM intrinsics that are highly optimized at the machine level.

## Code Quality
- **Readability**: Good. The logic is expressed in a single, clear line.
- **Structure**: Good.
- **Naming**: Good.
- **Improvements**: None needed.

---

# Question Revision
### Revision Report: Minimum Bit Flips to Convert Number

**Pattern:** Bit Manipulation

**Brute Force:** 
Iterate through all 32 bits of both numbers. Use a mask or right-shift to compare the Least Significant Bit (LSB) of both integers; increment a counter whenever the bits differ.

**Optimal Approach:** 
Perform a bitwise XOR (`start ^ goal`). The XOR operation results in a number where bits are set to `1` only at positions where the original bits differed. Count the set bits (population count) of this result using Brian Kernighan’s algorithm or a built-in function.
- **Time Complexity:** $O(1)$ (Fixed bit-width of 32/64 bits)
- **Space Complexity:** $O(1)$

**The 'Aha' Moment:** 
The requirement to find "differing bits" is the definition of the XOR operation, and the "number of flips" is the Hamming distance.

**Summary:** 
XOR the two numbers to isolate differing bits and count the set bits in the result.

---