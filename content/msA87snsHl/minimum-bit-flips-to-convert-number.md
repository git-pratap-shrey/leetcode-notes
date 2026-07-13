---
title: "Minimum Bit Flips to Convert Number"
slug: minimum-bit-flips-to-convert-number
date: "2026-07-09"
---

# My Solution
~~~java
class Solution {
    public int minBitFlips(int start, int goal) {
        int count = 0;
        for(int i = 0; i < 32; i++){
            if( ((start >> i)&1) != ((goal >> i)&1)){
                count++;
            }
        }
        return count;
    }
}
~~~

# Submission Review
## Approach
*   **Technique:** Bitwise manipulation (iterating through each bit position).
*   **Optimality:** Suboptimal. While correct, it performs a fixed 32 iterations regardless of the values of `start` and `goal`. A more idiomatic and faster approach uses the XOR operator (`^`) combined with bit-counting primitives.

## Complexity
*   **Time Complexity:** $O(1)$ (specifically 32 iterations).
*   **Space Complexity:** $O(1)$.
*   **Bottleneck:** The loop runs a constant 32 times regardless of whether the numbers are small or large.

## Efficiency Feedback
*   **Runtime:** The bitwise XOR approach (`Integer.bitCount(start ^ goal)`) is generally more efficient as it maps to a single hardware instruction or a highly optimized intrinsic on modern CPUs, bypassing the manual loop overhead.
*   **Optimization:** Replace the `for` loop with `return Integer.bitCount(start ^ goal);`. This computes the result in $O(1)$ without manual iteration.

## Code Quality
*   **Readability:** Good. The logic is explicit and easy to follow.
*   **Structure:** Good. Simple, self-contained method.
*   **Naming:** Good. Variable names `start`, `goal`, and `count` are clear and idiomatic.
*   **Improvements:** 
    *   Use `Integer.bitCount(start ^ goal)` to simplify the code significantly.
    *   If using manual iteration for educational purposes, `(start ^ goal)` could be evaluated once, and then you could use the Brian Kernighan’s algorithm (`n &= (n - 1)`) to count bits, which is faster than checking all 32 positions if the number of set bits is small.

---

# Question Revision
### Revision Report: Minimum Bit Flips to Convert Number

**Pattern:** Bit Manipulation (XOR / Kernighan’s Algorithm)

**Brute Force:**
Convert both integers to binary strings, pad the shorter string with leading zeros, iterate through each index, and increment a counter whenever bits differ at the same position.
*   **Time:** $O(\log(\max(start, goal)))$
*   **Space:** $O(\log(\max(start, goal)))$ to store the binary representation.

**Optimal Approach:**
1. Perform an `XOR` operation on `start` and `goal`. The resulting number has a `1` bit at every position where `start` and `goal` differ.
2. Count the number of set bits (`1`s) in the result using `n & (n - 1)` (Brian Kernighan’s Algorithm), which clears the least significant set bit in each iteration.
*   **Time:** $O(k)$, where $k$ is the number of set bits (or $O(\log n)$ total bits).
*   **Space:** $O(1)$.

**The 'Aha' Moment:**
When a problem asks to identify positions where two values differ, `XOR` acts as a logical inequality filter that isolates exactly those discrepancies into a single integer.

**Summary:**
Whenever you need to count differing bits between two numbers, `XOR` them and count the resulting set bits.

---