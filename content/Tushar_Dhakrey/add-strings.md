---
title: "Add Strings"
slug: add-strings
date: "2026-04-09"

---
---

# My Solution
~~~java
class Solution {
    public String addStrings(String num1, String num2) {
        int i=num1.length()-1;
        int j=num2.length()-1;
        int carry = 0;
        StringBuilder sb = new StringBuilder();
        while(i>=0||j>=0||carry!=0){
            int d1 = i>=0?num1.charAt(i)-'0':0;
            int d2 = j>=0?num2.charAt(j)-'0':0;
            int sum = d1+d2+carry;
            carry = sum/10;
            sb.append(sum%10);
            i--;
            j--;
        }
        return sb.reverse().toString();
    }
}
~~~

# Submission Review
## Approach
*   **Technique:** Two-pointer approach with manual digit-by-digit addition and carry propagation.
*   **Optimality:** Optimal. It traverses each string exactly once, which is the theoretical lower bound for this problem.

## Complexity
*   **Time Complexity:** $O(\max(N, M))$, where $N$ and $M$ are the lengths of the two strings.
*   **Space Complexity:** $O(\max(N, M))$ to store the resulting `StringBuilder` string.

## Efficiency Feedback
*   **Runtime:** The efficiency is high. By avoiding parsing the strings into integers (which would overflow for large inputs), the solution handles arbitrary length strings within the constraints of memory.
*   **Optimizations:** The current implementation is efficient. Using `StringBuilder.append()` followed by a single `reverse()` is standard and performs well in Java.

## Code Quality
*   **Readability:** Good. The logic is straightforward and easy to follow.
*   **Structure:** Good. The `while` loop condition effectively handles strings of unequal lengths and a trailing carry in one pass.
*   **Naming:** Good. `i`, `j`, `d1`, `d2`, and `carry` are clear, conventional names for this algorithm.
*   **Improvements:** 
    *   While not strictly necessary, pre-allocating the `StringBuilder` capacity to `Math.max(num1.length(), num2.length()) + 1` could provide a minor performance micro-optimization by reducing array resizing overhead.

---
---


# Question Revision
### Revision Report: Add Strings

**Pattern:** Two Pointers (Reverse Traversal)

**Brute Force:** Convert the strings to integers (e.g., `int()`), add them, and convert back to string. This fails for large inputs due to integer overflow constraints in many languages.

**Optimal Approach:** 
*   Initialize two pointers at the end of each string and a `carry` variable at 0.
*   Iterate backwards, adding digits at each pointer plus the `carry`.
*   Calculate `sum % 10` for the current digit and `sum // 10` for the new `carry`.
*   Prepend digits to the result or reverse the final collection.
*   **Time Complexity:** $O(\max(N, M))$ where $N$ and $M$ are string lengths.
*   **Space Complexity:** $O(\max(N, M))$ to store the resulting string.

**The 'Aha' Moment:** Whenever you see an arithmetic problem involving numbers too large for primitive data types, treat the strings as digit arrays and simulate column-by-column addition from right to left.

**Summary:** Simulate manual addition by starting pointers at the end of both strings and propagating a carry until all digits are processed.

---
