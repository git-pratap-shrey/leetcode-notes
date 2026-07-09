---
title: "Hamming Distance"
slug: hamming-distance
date: "2026-07-09"
---

# My Solution
~~~cpp
class Solution {
public:
    int hammingDistance(int x, int y) {
        int count=0;
        while(x !=0 || y !=0){
            int z=x%2;
            int m=y%2;
            if(z!=m){
                count++;
            }
            x=x/2;
            y=y/2;
        }
        return count;
    }
};
~~~

# Submission Review
## Approach
*   **Technique:** Bitwise manipulation via arithmetic simulation.
*   **Optimal:** No. While logically correct for positive integers, it is less efficient and less idiomatic than leveraging the XOR operator and built-in hardware instructions.

## Complexity
*   **Time Complexity:** $O(\log(\max(x, y)))$, proportional to the number of bits in the larger integer.
*   **Space Complexity:** $O(1)$.
*   **Bottleneck:** The manual arithmetic division and modulo operations are slower than bitwise XOR and popcount instructions.

## Efficiency Feedback
*   The use of division (`/`) and modulo (`%`) inside a `while` loop is significantly slower than bitwise operators (`^` for XOR, `>>` for right shift) and compiler intrinsics.
*   **Optimization:** Use `x ^ y` to isolate differing bits, then `__builtin_popcount(x ^ y)` to count them in a single clock cycle on most modern CPUs.

## Code Quality
*   **Readability:** Good. The logic is straightforward and easy to follow.
*   **Structure:** Good. Clean implementation for a simple helper function.
*   **Naming:** Moderate. `z` and `m` are non-descriptive; `bitX` and `bitY` would be clearer.
*   **Concrete Improvements:**
    *   Replace the entire loop with: `return __builtin_popcount(x ^ y);`.
    *   If avoiding built-ins is required, use bitwise operators:
        ```cpp
        int diff = x ^ y;
        int count = 0;
        while (diff > 0) {
            count += (diff & 1);
            diff >>= 1;
        }
        return count;
        ```
    *   Note: The current loop fails if $x$ or $y$ were negative (though constraints for Hamming distance usually imply non-negative integers). Using bitwise operators makes the logic more robust.

---

# Question Revision
### Revision Report: Hamming Distance

**Pattern:** Bit Manipulation

**Brute Force:**
Convert both integers to their binary representations (padded to equal length) and iterate through each bit position, incrementing a counter whenever the bits differ.

**Optimal Approach:**
1. Perform an **XOR** operation (`x ^ y`) on the two integers. This results in a new integer where each set bit (`1`) represents a position where the inputs differed.
2. Use **Brian Kernighan’s Algorithm** (or built-in population count functions) to count the number of set bits in the result. 
   - **Time Complexity:** $O(1)$ (effectively $O(k)$ where $k$ is the number of bits in the integer, fixed at 32).
   - **Space Complexity:** $O(1)$.

**The 'Aha' Moment:**
Whenever a problem asks for the number of differing positions between two numbers, realize that the XOR operator is a binary "difference filter" that isolates bits that do not match.

**Summary:**
XOR yields a bitmask of differences, and counting set bits is then all that remains.

---