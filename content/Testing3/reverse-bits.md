---
title: "Reverse Bits"
slug: reverse-bits

---
---

# My Solution
~~~java
class Solution {
    public int reverseBits(int n) {
        int temp=0,rm=0;
        for(int i=0;i<32;i++){
            rm=n%2;
             n=n/2;
            temp=temp+rm*(int)Math.pow(2,31-i);
        }
        return temp;
    }
}
~~~

# Submission Review
## Approach
*   **Technique:** Bit manipulation simulation using arithmetic operators (division/modulo).
*   **Optimal:** No. The approach uses floating-point exponentiation (`Math.pow`) inside a loop, which is computationally expensive and logically fragile for bitwise operations.

## Complexity
*   **Time Complexity:** $O(k)$, where $k=32$. While the loop runs 32 times, the use of `Math.pow` inside the loop adds unnecessary overhead per iteration.
*   **Space Complexity:** $O(1)$.

## Efficiency Feedback
*   **Bottleneck:** The `Math.pow(2, 31-i)` function is designed for floating-point arithmetic. Converting this result to an `int` 32 times is significantly slower than bitwise shifts. 
*   **Overflow/Correctness:** The current logic fails for `n < 0` because `n % 2` and `n / 2` with negative integers in Java do not behave like logical bitwise operations. For example, `-1 % 2` is `-1`. This code only functions correctly for positive integers.

## Code Quality
*   **Readability:** Moderate. The logic is easy to follow but non-idiomatic.
*   **Structure:** Poor. The use of `Math.pow` for bit manipulation is discouraged.
*   **Naming:** Poor. Variables `temp` and `rm` are non-descriptive; `reversed` and `remainder` would be better.

### Concrete Improvements
1.  **Use Bitwise Operators:** Replace arithmetic with `(n >> i) & 1` and `result | (bit << (31 - i))`.
2.  **Handle Signedness:** Use the `>>>` (unsigned right shift) operator to handle the 32nd bit correctly regardless of whether the input is interpreted as signed or unsigned.
3.  **Refactored Code:**
```java
public int reverseBits(int n) {
    int result = 0;
    for (int i = 0; i < 32; i++) {
        result <<= 1;          // Shift result to make room
        result |= (n & 1);     // Add the LSB of n
        n >>>= 1;              // Logical shift to process next bit
    }
    return result;
}
```

---
---


# Question Revision
### Revision Report: Reverse Bits

**Pattern:** Bit Manipulation

**Brute Force:** 
Convert the 32-bit integer to a string or array of bits, reverse the sequence, and convert it back to an integer. This requires $O(n)$ space and multiple passes to handle leading zeros and base conversion.

**Optimal Approach:** 
Iterate through all 32 bits of the input. For each bit, extract it using the bitwise AND operator (`n & 1`), shift the result left (`result << 1`), and add the extracted bit to the result using bitwise OR (`|`). Then, shift the input right (`n >> 1`) to process the next bit.
*   **Time Complexity:** $O(1)$ (since the input size is fixed at 32 bits).
*   **Space Complexity:** $O(1)$.

**The 'Aha' Moment:** 
When the problem specifies a fixed-length data type (32-bit integer), treat the number as a stream of bits and use a loop to "peel off" bits from the source and "push" them into a accumulator.

**Summary:** 
Reverse bits by consuming the input bit-by-bit from the least significant position and shifting them into a new integer, effectively mirroring the bit sequence.

---
