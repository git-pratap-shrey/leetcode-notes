---
title: "Complement of Base 10 Integer"
slug: complement-of-base-10-integer

---
---

# My Solution
~~~java
class Solution {
    public int bitwiseComplement(int n) {
        StringBuilder str=new StringBuilder();
        if(n==1) return 0;
        if(n==0) return 1;
        while(n>0){
        int  r=n%2;
            if(r==0){str.append(1);
            }else{
                str.append(0);
            }
            n/=2;
        }
        str=str.reverse();
        int sum=0,l=str.length();
        for(int i=0;i<l;i++){
            if(str.charAt(i)=='1'){
                sum=sum+(int)Math.pow(2,l-1-i);
            }
        }
        return sum;
    }
}
~~~

# Submission Review
## Approach
*   **Technique**: String manipulation and mathematical reconstruction. It converts the integer to its binary representation via repeated division, flips the bits, and calculates the new decimal value using powers of two.
*   **Optimal**: No. The approach involves unnecessary overhead through object creation (`StringBuilder`) and string parsing/reversing. Bitwise operations are significantly more efficient for this problem.

## Complexity
*   **Time Complexity**: $O(\log N)$, where $N$ is the input integer. The loop runs for the number of bits in $N$.
*   **Space Complexity**: $O(\log N)$ due to the `StringBuilder` storing the binary representation.

## Efficiency Feedback
*   **Bottleneck**: String object creation, `char` manipulation, and `Math.pow()` (which uses floating-point arithmetic) are expensive compared to native integer bit manipulation.
*   **Optimizations**: 
    *   Use a bitmask to flip bits directly: `Integer.highestOneBit(n)` can help identify the number of bits. 
    *   Alternatively, XOR the number with a mask consisting of all `1`s of the same length (e.g., if $n=5$ ($101_2$), XOR with $111_2$ ($7$) to get $010_2$ ($2$)).

## Code Quality
*   **Readability**: Moderate. The logic is clear but verbose.
*   **Structure**: Moderate. The edge cases ($0$ and $1$) are handled explicitly, though they could be integrated into a general bitwise logic.
*   **Naming**: Moderate. `str` is a generic name; `binaryRepresentation` would be more descriptive.
*   **Concrete Improvements**:
    *   Avoid `Math.pow()`; use `1 << (l - 1 - i)` for integer shifting.
    *   Refactor using bitwise operations for brevity and performance:
        ```java
        public int bitwiseComplement(int n) {
            if (n == 0) return 1;
            int mask = Integer.highestOneBit(n);
            mask = (mask << 1) - 1;
            return n ^ mask;
        }
        ```

---
---


# Question Revision
### Revision Report: Complement of Base 10 Integer

**Pattern:** Bit Manipulation

**Brute Force:** Convert the integer to a binary string, iterate through each character to flip `0` to `1` and `1` to `0`, then convert the resulting string back into a decimal integer.
*   **Time Complexity:** $O(\log n)$ (number of bits)
*   **Space Complexity:** $O(\log n)$ (to store the string)

**Optimal Approach:** Use a bitmask with the same number of bits as the input to perform an XOR operation. Construct the mask by shifting `1`s until the mask is greater than or equal to the input, then compute `input ^ mask`.
*   **Time Complexity:** $O(\log n)$
*   **Space Complexity:** $O(1)$

**The 'Aha' Moment:** The bitwise complement of a number $x$ is equal to $x \oplus \text{mask}$, where the mask consists of all $1$s of the same length as the binary representation of $x$.

**Summary:** Complementing a binary number is equivalent to XORing it with a mask of all ones of equal bit-length.

---
