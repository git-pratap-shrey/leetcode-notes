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
        while(start!=0||goal!=0){
            int z=start%2;
            int y=goal%2;
            if(z!=y){
                count++;
            }
        start=start>>1;
        goal=goal>>1;
        }
        return count;
    }
};
~~~

# Submission Review
## Approach
*   **Technique:** Bitwise manipulation (iterative bit-by-bit comparison).
*   **Optimal:** No. While correct, it is less efficient than using the XOR operator, which directly identifies differing bits.

## Complexity
*   **Time Complexity:** $O(\log(\max(\text{start, goal})))$. The loop runs for the number of bits in the larger integer.
*   **Space Complexity:** $O(1)$.

## Efficiency Feedback
*   **Bottleneck:** The manual modulo (`% 2`) and right-shift (`>> 1`) operations are redundant.
*   **Optimization:** You can compute `int xor_val = start ^ goal` and then use `__builtin_popcount(xor_val)` (GCC built-in) or a simple loop counting set bits (`n &= (n-1)`). This reduces the logic to a single XOR operation followed by a bit-counting operation, which is significantly faster and more idiomatic.

## Code Quality
*   **Readability:** Good. The logic is straightforward and easy to follow.
*   **Structure:** Moderate. The use of a `while` loop condition `start != 0 || goal != 0` is correct, but bitwise operations make the intent cleaner.
*   **Naming:** Moderate. `z` and `y` are non-descriptive; `bitStart` and `bitGoal` would be more expressive.
*   **Improvements:** 
    *   Use `start ^ goal` to isolate differing bits.
    *   Replace the loop with `__builtin_popcount(start ^ goal)` for production-grade efficiency in competitive programming (if using GCC).

```cpp
// Recommended optimized version
class Solution {
public:
    int minBitFlips(int start, int goal) {
        int diff = start ^ goal;
        int count = 0;
        while (diff > 0) {
            diff &= (diff - 1); // Brian Kernighan's algorithm
            count++;
        }
        return count;
    }
};
```

---

# Question Revision
### Revision Report: Minimum Bit Flips to Convert Number

**Pattern:** Bit Manipulation (XOR / Brian Kernighan’s Algorithm)

**Brute Force:**
Iterate through the bits of both numbers from 0 to 31, compare the bits at each position, and increment a counter whenever they differ.  
*   **Time:** $O(1)$ (fixed 32-bit integer range).
*   **Space:** $O(1)$.

**Optimal Approach:**
1. Perform an `XOR` operation between the two numbers (`start ^ goal`). This results in a number where bits are set to `1` only at positions where the original bits differed.
2. Count the number of set bits (population count) in the result using `n & (n - 1)` (Brian Kernighan’s algorithm) to clear the least significant set bit in each iteration.
*   **Time:** $O(k)$, where $k$ is the number of set bits.
*   **Space:** $O(1)$.

**The 'Aha' Moment:**
When a problem asks to compare differences between two binary representations, `XOR` acts as a mask that highlights exactly where those differences occur.

**Summary:**
Whenever you need to identify bitwise differences between two numbers, `XOR` them and count the resulting set bits.

---