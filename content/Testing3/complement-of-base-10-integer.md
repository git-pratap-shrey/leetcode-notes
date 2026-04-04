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
*   **Technique:** Conversion to binary representation via string building, bit flipping, and re-parsing to decimal.
*   **Optimal:** No. This approach is inefficient because it uses string manipulation and `Math.pow()` to perform bitwise logic that can be handled natively by CPU instructions.

## Complexity
*   **Time Complexity:** $O(\log n)$, as it processes bits. However, the use of `Math.pow()` inside the loop adds unnecessary overhead per bit.
*   **Space Complexity:** $O(\log n)$ due to the `StringBuilder` storage.

## Efficiency Feedback
*   **Bottleneck:** The manual conversion between string/integer types and the use of `Math.pow()` are significantly slower than bitwise operators.
*   **Optimization:** You can find the complement by calculating the mask (a number consisting of all 1s of the same bit-length as `n`) and using the XOR operator: `n ^ mask`. This reduces the operation to $O(1)$ arithmetic steps.

## Code Quality
*   **Readability:** Moderate. The logic is clear but overly verbose for a simple bit manipulation task.
*   **Structure:** Moderate. The base cases for 0 and 1 are handled, but the loop logic for general integers is unnecessarily complex.
*   **Naming:** Good. Variable names are clear enough, though `str` is generic.

### Concrete Improvements
Replace the entire method body with a bitwise approach. For example:

```java
public int bitwiseComplement(int n) {
    if (n == 0) return 1;
    // Calculate the mask of 1s equal to the bit length of n
    int mask = Integer.highestOneBit(n);
    mask = (mask << 1) - 1; 
    return n ^ mask;
}
```
*   This avoids string allocation and repeated power calculations, making the code more idiomatic and performant.

---
---


# Question Revision
### Revision Report: Complement of Base 10 Integer

**Pattern:** Bit Manipulation

**Brute Force:** Convert the integer to a binary string, iterate through each character to flip '0' to '1' and '1' to '0', then convert the resulting string back into a decimal integer.

**Optimal Approach:** XOR the number with a "mask" consisting of all 1s of the same bit length (e.g., for `5` (101), the mask is `7` (111); $5 \oplus 7 = 2$ (010)).
*   **Time Complexity:** $O(\log n)$ (number of bits).
*   **Space Complexity:** $O(1)$.

**The 'Aha' Moment:** Realizing that flipping bits is equivalent to performing an XOR operation against a mask of identical bit-width ($n \oplus \text{mask} = \text{complement}$).

**Summary:** To flip all bits of a number, XOR it with a bitmask of 1s equal to its bit-length.

---
