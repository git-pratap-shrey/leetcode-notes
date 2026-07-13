---
title: "Hamming Distance"
slug: hamming-distance
date: "2026-07-09"
---

# My Solution
~~~java
class Solution {
    public int hammingDistance(int x, int y) {
        int count = 0;
        for(int i = 0; i < 32; i++){
            if( ((x >> i)&1) != ((y >> i)&1)){
                count++;
            }
        }
        return count;
    }
}
~~~

# Submission Review
## Approach
*   **Technique:** Bit manipulation via iterative bit-shifting.
*   **Optimality:** Suboptimal. While correct, it performs a fixed 32 iterations regardless of the values of `x` and `y`.

## Complexity
*   **Time Complexity:** $O(1)$ (effectively constant as it is capped at 32 iterations).
*   **Space Complexity:** $O(1)$.

## Efficiency Feedback
*   **Bottleneck:** The loop runs 32 times regardless of how many bits differ. 
*   **Optimization:** Using `Integer.bitCount(x ^ y)` is the idiomatic and most efficient way to solve this in Java. It uses the `popcount` instruction available in modern CPUs, which is significantly faster than manual iteration.

## Code Quality
*   **Readability:** Good. The logic is straightforward and easy to follow.
*   **Structure:** Good. Simple, functional, and contained within the expected class structure.
*   **Naming:** Good. `count` and parameter names are clear.
*   **Improvements:** Replace the `for` loop with `return Integer.bitCount(x ^ y);`. This reduces the code to a single line and leverages optimized low-level hardware instructions.

---

# Question Revision
### Revision Report: Hamming Distance

**Pattern:** Bit Manipulation

**Brute Force:**
Convert both integers to their binary representations (padded to equal length), compare each bit position, and increment a counter whenever the bits differ.
*   **Time Complexity:** $O(\log n)$ (where $n$ is the value of the integer, as the number of bits is fixed at 32).
*   **Space Complexity:** $O(1)$ (or $O(\log n)$ if storing binary strings).

**Optimal Approach:**
Compute `z = x ^ y` (XOR). Since XOR results in a `1` only where bits differ, the Hamming distance is simply the count of set bits (population count) in `z` using the Brian Kernighan algorithm (`n &= (n - 1)`).
*   **Time Complexity:** $O(k)$ where $k$ is the number of set bits (at most 32).
*   **Space Complexity:** $O(1)$.

**The 'Aha' Moment:**
Whenever a problem asks for the number of differing positions between two values, XOR will immediately isolate those differences into a single integer.

**Summary:**
Use XOR to identify bit differences and Brian Kernighan’s algorithm to count them efficiently.

---