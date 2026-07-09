---
title: "Minimum Bit Flips to Convert Number"
slug: minimum-bit-flips-to-convert-number
date: "2026-07-09"
---

# My Solution
~~~cpp
class Solution {
public:
    int minBitFlips(int start, int goal) {
        int count=0;
        for(int i=0;i<32;i++){
            if(((start>>i)&1) != ((goal>>i)&1)){
                count++;
            }
        }
        return count;
    }
};    
~~~

# Submission Review
## Approach
*   **Technique:** Bitwise manipulation (iterating through each bit).
*   **Optimal:** No. While functionally correct, it is not the most idiomatic or concise way to solve this problem.

## Complexity
*   **Time Complexity:** $O(k)$, where $k$ is the number of bits (fixed at 32). Effectively $O(1)$.
*   **Space Complexity:** $O(1)$.

## Efficiency Feedback
*   The current approach performs 32 iterations regardless of the input values. 
*   **Optimization:** Using the XOR operation (`start ^ goal`) allows you to isolate the differing bits in a single operation. You can then count the set bits (population count) using `__builtin_popcount(start ^ goal)`. This is faster and relies on optimized hardware/compiler instructions.

## Code Quality
*   **Readability:** Good. The logic is explicit and easy to follow.
*   **Structure:** Good. Simple, self-contained method.
*   **Naming:** Good. Variables are descriptive.

### Suggested Improvement
Replace the loop with a single expression for better performance and idiomatic C++ style:

```cpp
int minBitFlips(int start, int goal) {
    return __builtin_popcount(start ^ goal);
}
``` 
*Note: If you cannot use compiler intrinsics, a `while(n) { n &= (n-1); count++; }` loop (Brian Kernighan’s algorithm) is more efficient than a fixed 32-iteration loop as it only iterates proportional to the number of set bits.*

---

# Question Revision
### Revision Report: Minimum Bit Flips to Convert Number

**Pattern:** Bit Manipulation (XOR / Kernighan’s Algorithm)

**Brute Force:** 
Convert both numbers to binary strings of equal length, iterate through each index, compare bits, and increment a counter if they differ. 
*   **Time:** $O(\log n)$ (number of bits)
*   **Space:** $O(\log n)$ (to store string representation)

**Optimal Approach:** 
Perform an `XOR` operation between the two numbers (`start ^ goal`). The resulting integer contains a `1` at every position where the bits differ. Use **Brian Kernighan’s Algorithm** (`n &= (n - 1)`) to count the number of set bits (popcount) in the result.
*   **Time:** $O(k)$ where $k$ is the number of set bits.
*   **Space:** $O(1)$

**The 'Aha' Moment:** 
The XOR operator is a "difference detector" that naturally isolates bit discrepancies into a single integer, allowing you to bypass manual index-by-index comparison.

**Summary:** 
Whenever you need to count differences between bits, `XOR` the values and count the resulting set bits using `n &= (n - 1)`.

---