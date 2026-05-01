---
title: "Add Binary"
slug: add-binary
date: "2026-04-29"
---

# My Solution
~~~java
class Solution {
    public String addBinary(String a, String b) {
        int n1 = a.length()-1;
        int n2 = b.length()-1;
        int c = 0, base = 2;
        StringBuilder sd = new StringBuilder();
        while(n1>=0 || n2>=0){
            int t1 =0,t2 = 0, sum = 0;
            if(n1>=0){
                t1=a.charAt(n1--)-'0';
            }
            if(n2>=0){
                t2=b.charAt(n2--)-'0';
            }
            sum = t1+t2+c;
            if(sum>=base){
                c=1;
                sum = sum-base;
            }
            else{
                c =0 ;
            }
            sd.append(sum);
        }
        if(c==1){
            sd.append(c);
        }
        return sd.reverse().toString();
    }
}
~~~

# Submission Review
## Approach
- **Technique**: Two-pointer simulation of column-wise binary addition.
- **Optimality**: Optimal. It processes each character exactly once and uses the minimum required space to store the result.

## Complexity
- **Time Complexity**: $O(\max(N, M))$, where $N$ and $M$ are the lengths of strings `a` and `b`.
- **Space Complexity**: $O(\max(N, M))$ to store the resulting string in the `StringBuilder`.

## Efficiency Feedback
- The use of `StringBuilder` is appropriate to avoid $O(N^2)$ string concatenation.
- The logic handles unbalanced string lengths efficiently by defaulting `t1` or `t2` to 0 when a pointer goes out of bounds.
- Using `sd.reverse()` at the end is the standard efficient way to handle trailing-to-leading addition in Java.

## Code Quality
- **Readability**: Moderate. The logic is straightforward, but variable names are too cryptic.
- **Structure**: Good. The loop condition and post-loop carry check are handled correctly.
- **Naming**: Poor. 
    - `n1`, `n2`: Should be `ptrA`, `ptrB` or `i`, `j`.
    - `c`: Should be `carry`.
    - `sd`: Should be `result` or `sb`.
    - `t1`, `t2`: Should be `bitA`, `bitB`.
- **Improvements**:
    - Replace `if(sum >= base)` with `c = sum / 2` and `sum = sum % 2` for a more generalized base-n approach, though the current `if` is slightly more performant for binary.
    - The variable `base = 2` is declared but barely used; it can be replaced with the literal `2` or used more consistently.

---

# Question Revision
### Add Binary

**Pattern:** Simulation / Two Pointers

**Brute Force:** Convert both binary strings to base-10 integers, sum them, and convert the result back to a binary string. (Risk: Integer overflow for very long strings).

**Optimal Approach:**
Iterate backwards through both strings using two pointers, simulating manual addition. Maintain a `carry` variable to handle overflows from each position.
- Current digit = `(digitA + digitB + carry) % 2`
- New carry = `(digitA + digitB + carry) // 2`
- Append results to a list and reverse at the end.

**Complexity:**
- **Time:** $O(\max(n, m))$ where $n$ and $m$ are the lengths of the input strings.
- **Space:** $O(\max(n, m))$ to store the resulting string.

**The 'Aha' Moment:** When input sizes can exceed standard integer limits, simulate the manual column-addition process from right to left.

**Summary:** Perform bit-by-bit addition from the least significant bit, propagating the carry forward.

---