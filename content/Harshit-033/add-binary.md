---
title: "Add Binary"
slug: add-binary
date: "2026-04-30"
---

# My Solution
~~~cpp
class Solution {
public:
    string addBinary(string a, string b) {
        int i=a.size()-1;
        int j=b.size()-1;
        int carry=0;
        
        string result="";

        while (i>=0 || j>=0 || carry) {
            int s=0, t=0;

            if (i>=0) {
                s=a[i]-'0';
                i--;
            }
            if (j>=0) {
                t=b[j]-'0';
                j--;
            }

            int sum=s+t+carry;

            result.push_back((sum%2)+'0');
            carry=sum/2;
        }

        reverse(result.begin(), result.end());
        return result;
    }
};
~~~

# Submission Review
## Approach
- **Technique**: Simulation of manual binary addition using two pointers and a carry variable.
- **Optimality**: Optimal. The algorithm processes each character of the input strings exactly once.

## Complexity
- **Time Complexity**: $O(\max(N, M))$, where $N$ and $M$ are the lengths of strings `a` and `b`.
- **Space Complexity**: $O(\max(N, M))$ to store the resulting binary string.

## Efficiency Feedback
- **Runtime**: Very efficient; the linear pass and final reverse are optimal for this problem.
- **Memory**: Memory usage is minimal. However, since `result` is built using `push_back`, the string may undergo multiple reallocations. 
- **Optimization**: Calling `result.reserve(std::max(a.size(), b.size()) + 1);` before the loop would prevent redundant memory reallocations.

## Code Quality
- **Readability**: Good. The logic is clean and follows the standard addition algorithm.
- **Structure**: Good. The `while` loop condition correctly handles mismatched string lengths and trailing carries.
- **Naming**: Moderate. While `i` and `j` are acceptable for indices, `s` and `t` are overly generic; names like `bitA` and `bitB` would be more descriptive.
- **Improvements**: 
    - Use `std::max` to reserve capacity for the result string.
    - Replace `(sum % 2) + '0'` with `(sum & 1) ? '1' : '0'` for a slight idiomatic performance gain in bit manipulation, though not strictly necessary here.

---

# Question Revision
### Add Binary

**Pattern:** Simulation / Two Pointers

**Brute Force:** Convert both binary strings to integers, add them, and convert the sum back to a binary string. 
* *Risk:* Integer overflow for very long binary strings.

**Optimal Approach:**
Simulate manual addition by iterating from the end of both strings toward the beginning. Use a `carry` variable to track overflows from each position.
1. Use two pointers starting at the last index of each string.
2. Sum the bits at the current pointers plus the carry.
3. Append `sum % 2` to the result and update `carry = sum // 2`.
4. Continue until both pointers are exhausted and the carry is 0.
5. Reverse the result string.

* **Time Complexity:** $O(\max(n, m))$
* **Space Complexity:** $O(\max(n, m))$

**The 'Aha' Moment:** The problem is a direct simulation of elementary school addition, requiring a right-to-left traversal to handle carry-over.

**Summary:** Simulate binary addition using two pointers and a carry variable, iterating from the least significant bit to the most.

---