---
title: "Number of 1 Bits"
slug: number-of-1-bits
date: "2026-04-21"
---

# My Solution
~~~java
class Solution {
    public int hammingWeight(int n) {
        int bits = 0;
        int mask = 1;
        for(int i=0;i<32;i++){
            if((mask&n)!=0){
                bits++;
            }
            mask <<= 1;
        }
        return bits;
    }
}
~~~

# Submission Review
## Approach
- **Technique**: Bit manipulation using a sliding mask.
- **Optimality**: Correct, but suboptimal. It iterates through all 32 bits regardless of the number of set bits present in the input.

## Complexity
- **Time Complexity**: $O(1)$ (Fixed 32 iterations).
- **Space Complexity**: $O(1)$.

## Efficiency Feedback
- **Bottleneck**: The loop always runs 32 times. For inputs with few set bits, this is inefficient.
- **Optimizations**:
    - **Brian Kernighan’s Algorithm**: Use `n &= (n - 1)` in a loop to iterate only as many times as there are set bits.
    - **Built-in Method**: Use `Integer.bitCount(n)` in Java, which implements a highly optimized divide-and-conquer bit-counting strategy.
    - **Right Shift**: Instead of maintaining a `mask` variable, shift `n` right (`n >>>= 1`) and check the least significant bit (`(n & 1) != 0`).

## Code Quality
- **Readability**: Good. The logic is simple and easy to follow.
- **Structure**: Good.
- **Naming**: Good. Variable names `bits` and `mask` clearly describe their purpose.
- **Improvements**: Replace the `mask` logic with a right-shift on `n` to remove the need for an extra variable and extra operations per loop.

---

# Question Revision
### Number of 1 Bits

**Pattern:** Bit Manipulation

**Brute Force:** 
Iterate through all 32 bits of the integer using a loop, checking the last bit with `n & 1` and right-shifting `n` by one position in each step.
- **Time:** $O(1)$ (constant 32 iterations)
- **Space:** $O(1)$

**Optimal Approach (Brian Kernighan’s Algorithm):**
Repeatedly apply the operation `n = n & (n - 1)`. This operation specifically clears the least significant set bit (the rightmost `1`) to `0` in every iteration. The loop continues until `n` becomes `0`.
- **Time:** $O(k)$ where $k$ is the number of set bits.
- **Space:** $O(1)$

**The 'Aha' Moment:** 
The expression `n & (n - 1)` always removes exactly one set bit, allowing the loop to run only as many times as there are `1`s.

**Summary:** Use Brian Kernighan’s algorithm to count set bits in time proportional to the number of `1`s rather than the total number of bits.

---