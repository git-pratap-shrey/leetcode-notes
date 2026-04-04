---
title: "Binary Number with Alternating Bits"
slug: binary-number-with-alternating-bits

---
---

# My Solution
~~~java
class Solution {
    public boolean hasAlternatingBits(int n) {
        int temp=n%2;
        n=n/2;
        while(n>0){
            if(temp==n%2) return false;
            temp=n%2;
            n=n/2;
        }
        return true;
    }
}
~~~

# Submission Review
## Approach
*   **Technique**: Iterative modulo-based simulation.
*   **Optimality**: It is optimal in terms of complexity, but the implementation is slightly verbose compared to bitwise approaches.

## Complexity
*   **Time Complexity**: $O(\log n)$, as the algorithm processes each bit once.
*   **Space Complexity**: $O(1)$, using only a single integer variable for state.

## Efficiency Feedback
*   The logic is efficient and performs the minimum number of operations required to check bit parity.
*   **Optimization**: You can replace modulo and division with bitwise operators (`& 1` and `>> 1`) for a slight performance gain, though the JIT compiler likely handles these similarly.
*   **Alternative**: The problem can be solved in $O(1)$ without a loop using bitwise hacks:
    ```java
    int x = n ^ (n >> 1);
    return (x & (x + 1)) == 0;
    ```
    This trick works because shifting and XORing an alternating bit pattern results in a sequence of all 1s.

## Code Quality
*   **Readability**: Good. The logic is straightforward and easy to follow.
*   **Structure**: Good. Minimalist and fits the requirements well.
*   **Naming**: Moderate. `temp` is generic; `prevBit` would be more descriptive.
*   **Improvements**:
    *   Change `n % 2` to `n & 1`.
    *   Change `n / 2` to `n >>= 1`.
    *   Rename `temp` to `lastBit` to improve self-documentation.

---
---


# Question Revision
### Revision Report: Binary Number with Alternating Bits

**Pattern:** Bit Manipulation

**Brute Force:**
Convert the integer to a binary string (or list of bits) and iterate through the sequence, checking if `bits[i] == bits[i+1]` for any index.
*   **Time Complexity:** $O(\log n)$ (number of bits)
*   **Space Complexity:** $O(\log n)$ to store the bit representation.

**Optimal Approach:**
Use bitwise shifts to compare the bits with a shifted version of themselves. If $n$ has alternating bits, then $x = n \oplus (n >> 1)$ will result in a sequence of all 1s (e.g., `1010` XOR `0101` = `1111`). Checking if `(x & (x + 1)) == 0` confirms $x$ is a power of two minus one.
*   **Time Complexity:** $O(1)$
*   **Space Complexity:** $O(1)$

**The 'Aha' Moment:**
When a problem involves comparing adjacent bits or enforcing a specific binary sequence, shifting the number against itself allows you to perform the check across all bits simultaneously using XOR.

**Summary:**
To verify a repeating bit pattern, XOR the number with its own right-shifted self to consolidate the differences into a mask that is easily validated.

---
