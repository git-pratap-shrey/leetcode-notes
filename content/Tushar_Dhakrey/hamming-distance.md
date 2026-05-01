---
title: "Hamming Distance"
slug: hamming-distance
date: "2026-04-23"
---

# My Solution
~~~java
class Solution {
    public int hammingDistance(int x, int y) {
        return Integer.bitCount(x^y);
    }
}
~~~

# Submission Review
## Approach
- **Technique**: Bit Manipulation.
- **Optimality**: Optimal. The XOR operator identifies differing bits, and `Integer.bitCount` calculates the population count (Hamming weight) of the resulting mask.

## Complexity
- **Time Complexity**: $O(1)$. Both XOR and `Integer.bitCount` operate in constant time regardless of the input value.
- **Space Complexity**: $O(1)$. No additional memory is allocated.

## Efficiency Feedback
- The solution is maximally efficient. It leverages Java's intrinsic `Integer.bitCount`, which often maps directly to a hardware instruction (e.g., `POPCNT` on x86), minimizing CPU cycles.

## Code Quality
- **Readability**: Good. The intent is clear and utilizes standard library functions.
- **Structure**: Good. Simple, single-expression method.
- **Naming**: Good. Follows standard Java naming conventions.
- **Improvements**: None. The code is concise and idiomatic.

---

# Question Revision
### Hamming Distance

**Pattern:** Bit Manipulation

**Brute Force:** Convert both integers to binary strings of equal length, iterate through the characters, and increment a counter whenever the characters at the same index differ.

**Optimal Approach:** 
Perform an XOR operation between the two integers; this results in a bitmask where only the positions that differed are set to `1`. Use a built-in population count function or Brian Kernighan’s algorithm to count the set bits.
- **Time Complexity:** $O(1)$ (constant time for fixed-width 32/64-bit integers).
- **Space Complexity:** $O(1)$.

**The 'Aha' Moment:** The phrase "positions at which the corresponding bits are different" is the literal definition of the XOR operation.

**Summary:** XOR the two numbers and count the set bits of the result.

---