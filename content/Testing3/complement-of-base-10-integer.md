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
- **Technique:** String manipulation and binary conversion.
- **Optimality:** Suboptimal. The approach converts the integer to a binary string representation, manually flips bits, and converts back to an integer using `Math.pow`. This involves unnecessary memory allocation and multiple traversals.

## Complexity
- **Time Complexity:** $O(\log n)$, as it processes the number of bits in $n$. However, the use of `Math.pow` inside a loop adds an extra $O(\log n)$ overhead per iteration if not optimized by the JVM, effectively making it $O((\log n)^2)$.
- **Space Complexity:** $O(\log n)$ to store the binary string representation in a `StringBuilder`.

## Efficiency Feedback
- **Bottleneck:** The use of `Math.pow` is expensive. Bitwise operations are significantly faster and more idiomatic.
- **Optimization:** Use a bitmask to flip bits. For example, find the number of bits $b$ in $n$, then calculate `n ^ ((1 << b) - 1)`. This avoids string conversion and heap allocation entirely.

## Code Quality
- **Readability:** Moderate. The logic is clear, but the implementation is verbose for such a simple problem.
- **Structure:** Moderate. The manual handling of edge cases (`0` and `1`) is fine but can be consolidated.
- **Naming:** Good. Variable names like `str` and `r` are standard enough for this scope.
- **Concrete Improvements:** 
    - Replace the `StringBuilder` loop with a single integer manipulation loop or a bitwise mask.
    - If sticking to a loop, calculate the result using `sum = (sum << 1) | bit` to avoid `Math.pow` and the need to reverse the string.
    - Example of a cleaner approach:
      ```java
      if (n == 0) return 1;
      int mask = 0;
      int temp = n;
      while (temp > 0) {
          mask = (mask << 1) | 1;
          temp >>= 1;
      }
      return n ^ mask;
      ```

---
---


# Question Revision
### Revision Report: Complement of Base 10 Integer

**Pattern:** Bitwise Manipulation

**Brute Force:**
Convert the integer to a binary string, iterate through each character, flip '0's to '1's and '1's to '0's, then convert the resulting string back to an integer. 
*Complexity: $O(\log n)$*

**Optimal Approach:**
Generate a bitmask of the same length as the number (consisting of all '1's) by finding the smallest power of 2 greater than the number, then XOR the number with this mask. 
*Example:* For $N=5$ (binary `101`), mask is `111` (7). `101 ^ 111 = 010` (2).
*Complexity: Time $O(1)$, Space $O(1)$*

**The 'Aha' Moment:**
Realizing that the complement of a number $N$ relative to a bitmask of all ones is equivalent to $N \oplus \text{mask}$ because XORing a bit with 1 always flips it.

**Summary:** 
To flip bits within a number's specific range, create a mask of identical length filled with ones and XOR it with the original value.

---
