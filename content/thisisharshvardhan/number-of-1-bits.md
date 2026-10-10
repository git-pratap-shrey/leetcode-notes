---
title: "Number of 1 Bits"
slug: number-of-1-bits
date: "2026-10-09"
---

# My Solution
~~~cpp
class Solution {
public:
    int hammingWeight(int n) {
        return __builtin_popcount(n);
    }
};
~~~

# Submission Review
## Approach
- **Technique**: Built-in Compiler Intrinsic. The solution uses `__builtin_popcount`, a GCC-specific function that maps to a single CPU instruction (like `POPCNT` on x86) if supported by the hardware.
- **Optimality**: Optimal. It utilizes hardware-level acceleration to count set bits.

## Complexity
- **Time Complexity**: $O(1)$. The instruction executes in constant time regardless of the input value.
- **Space Complexity**: $O(1)$. No additional memory is allocated.

## Efficiency Feedback
- **Runtime**: Extremely low. Using a compiler intrinsic is faster than any manual loop or bit-manipulation algorithm (e.g., Brian Kernighan's algorithm).
- **Memory**: Minimal. No auxiliary data structures are used.

## Code Quality
- **Readability**: Good. The intent is clear for developers familiar with C++/GCC.
- **Structure**: Good. The implementation is concise and fits the required class structure.
- **Naming**: Good. Follows the provided method signature.
- **Improvements**: 
    - **Portability**: `__builtin_popcount` is specific to GCC/Clang. For a platform-independent C++20 solution, `std::popcount` from the `<bit>` header would be preferred.

---

# Question Revision
# Revision Report: Number of 1 Bits

- **Pattern**: Bit Manipulation
- **Brute Force**: Iterate through all 32 bits of the integer using a mask (checking if `(n & 1)` is true, then shifting `n` right by 1).
- **Optimal Approach**: Use **Brian Kernighan’s Algorithm**. Instead of checking every bit, use the operation `n = n & (n - 1)`, which flips the least significant set bit (1) to 0 in each iteration. Repeat until $n$ becomes 0.
    - **Time Complexity**: $O(k)$ where $k$ is the number of set bits (worst case $O(32)$ or $O(1)$).
    - **Space Complexity**: $O(1)$.
- **The 'Aha' Moment**: The requirement to count only '1' bits suggests using bitwise operations to skip over the '0's.
- **Summary**: Use `n & (n - 1)` to jump directly between set bits and count them efficiently.

---