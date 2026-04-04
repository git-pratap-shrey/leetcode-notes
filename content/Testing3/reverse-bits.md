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
* **Technique**: Iterative bit manipulation using mathematical operations (division and power).
* **Optimality**: Suboptimal. The use of `Math.pow` inside a loop introduces unnecessary overhead and potential floating-point precision issues. Additionally, the logic fails for negative integers because `n % 2` and `n / 2` in Java behave differently for negative numbers (maintaining the sign bit), which will lead to incorrect results for inputs where the 31st bit is set.

## Complexity
* **Time Complexity**: $O(1)$ effectively, though $O(\log N)$ due to the loop. The use of `Math.pow` makes each iteration significantly slower than bitwise operations.
* **Space Complexity**: $O(1)$.

## Efficiency Feedback
* **Bottleneck**: `Math.pow(2, 31-i)` is computationally expensive and redundant. Bitwise shifts (`<<` or `>>>`) are the standard, hardware-accelerated way to handle bit positioning.
* **Logic Error**: The approach treats `n` as a signed integer. If `n` is negative, `n % 2` will return a negative remainder, corrupting the bit reconstruction. You should use unsigned right shift (`>>>`) and bitwise AND (`& 1`) to extract bits correctly regardless of the integer's sign.

## Code Quality
* **Readability**: Moderate. The code is concise but logically fragile.
* **Structure**: Moderate. The loop-based approach is standard, but the implementation relies on arithmetic rather than bitwise logic.
* **Naming**: Poor. `temp` and `rm` are non-descriptive; `reversed` and `bit` would be better.

### Concrete Improvements
1. Use bitwise operators (`&`, `<<`, `>>>`) instead of arithmetic (`%`, `/`, `Math.pow`).
2. Use `(n >>> i) & 1` to extract the $i$-th bit.
3. Use `result = (result << 1) | bit` to build the reversed number.

**Refactored Example:**
```java
public int reverseBits(int n) {
    int reversed = 0;
    for (int i = 0; i < 32; i++) {
        reversed = (reversed << 1) | (n & 1);
        n >>>= 1;
    }
    return reversed;
}
```

---
---


# Question Revision
### Revision Report: Reverse Bits

**Pattern:** Bit Manipulation

**Brute Force:** 
Iterate through all 32 bits of the input integer. Extract each bit using a mask (`n & 1`) and append it to a result variable by shifting the result left and the input right.

**Optimal Approach:**
1. Initialize `result = 0`.
2. Loop 32 times:
   - Shift `result` to the left by 1 (`result << 1`).
   - Extract the last bit of `n` (`n & 1`) and add it to `result` (`result | (n & 1)`).
   - Shift `n` to the right by 1 (`n >> 1`) to process the next bit.
3. **Complexity:** 
   - Time: $O(1)$ (fixed at 32 iterations).
   - Space: $O(1)$.

**The 'Aha' Moment:**
When the problem constraints specify a fixed bit-width (e.g., 32-bit unsigned integer), treat the number as an array of bits and use bitwise shifting to "collect" bits from one end and "deposit" them into the other.

**Summary:** To reverse bits, treat the integer as a stream and "peel" bits off the end of the source to "stack" them into the result using left-shifts.

---
