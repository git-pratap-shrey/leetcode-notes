---
title: "Number of 1 Bits"
slug: number-of-1-bits
date: "2026-10-10"
---

# My Solution
~~~cpp
class Solution {
public:
    int hammingWeight(int n) {
        int count=0;
        while(n!=0){
            count=count+(n&1);
            n=n>>1;
        }
        return count;
        
    }
};
~~~

# Submission Review
## Approach
- **Technique:** Bit manipulation (Bit-shifting and masking).
- **Optimality:** Suboptimal. While correct, it iterates through every bit until the most significant `1` is reached. Brian Kernighan’s algorithm (`n &= (n - 1)`) would be more optimal as it only iterates through the set bits.

## Complexity
- **Time Complexity:** $O(\log n)$ or $O(W)$ where $W$ is the word size (e.g., 32). The loop runs once for every bit until the highest set bit is shifted out.
- **Space Complexity:** $O(1)$.

## Efficiency Feedback
- **Runtime:** Low, but can be improved for sparse integers.
- **Optimization:** Using `n &= (n - 1)` reduces the number of iterations from the total bit length to only the number of set bits (the Hamming weight itself).

## Code Quality
- **Readability:** Good. The logic is straightforward and easy to follow.
- **Structure:** Good. Standard class/method structure.
- **Naming:** Moderate. `count` is acceptable, but `n` is generic (though standard for bit manipulation problems).
- **Improvements:** 
    - Use `count++` or `++count` instead of `count = count + (n & 1)` for idiomatic C++.
    - Ensure the input type is `uint32_t` or `unsigned int` to avoid potential issues with sign-extension during right shifts on negative signed integers (though the problem context usually implies unsigned).

---

# Question Revision
# Revision Report: Number of 1 Bits

- **Pattern**: Bit Manipulation
- **Brute Force**: 
    - Iterate through all 32 bits of the integer.
    - Use a mask (e.g., `n & 1`) to check if the LSB is 1, then right-shift the number by 1 bit in each iteration.
- **Optimal Approach (Brian Kernighan’s Algorithm)**: 
    - Instead of checking every bit, use the expression `n = n & (n - 1)`.
    - This operation effectively flips the rightmost set bit (1) to 0 in every iteration.
    - Count how many times this operation is performed until `n` becomes 0.
    - **Time Complexity**: $O(k)$ where $k$ is the number of set bits (worst case $O(32)$ or $O(1)$).
    - **Space Complexity**: $O(1)$.
- **The 'Aha' Moment**: When the goal is specifically to count "set bits" rather than traverse the whole number, the `n & (n - 1)` trick is the standard way to skip zeros.
- **Summary**: Use `n & (n - 1)` to jump directly between 1s and count them efficiently.

---