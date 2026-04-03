---
title: "A Number After a Double Reversal"
slug: a-number-after-a-double-reversal

---
---

# My Solution
~~~cpp
class Solution {
public:
    bool isSameAfterReversals(int num) {
        if (num != 0 && num % 10 == 0) {
            return false;
        }
        return true;
    }
};
~~~

# Submission Review
## Approach
*   **Technique:** Mathematical observation (Property of trailing zeros).
*   **Optimality:** Optimal. The problem asks if reversing a number twice results in the original number. Since reversing removes trailing zeros (e.g., $120 \rightarrow 21 \rightarrow 12$), a number maintains its value if and only if it does not have trailing zeros, or if it is exactly $0$.

## Complexity
*   **Time Complexity:** $O(1)$. The logic performs a single constant-time arithmetic operation and comparison.
*   **Space Complexity:** $O(1)$. No auxiliary space is used.

## Efficiency Feedback
*   **Performance:** Highly efficient. It avoids the overhead of integer-to-string conversion or the two-pass digit reversal process ($O(\log n)$), which are unnecessary given the mathematical property.

## Code Quality
*   **Readability:** Good. The logic is concise and immediately clear to anyone familiar with the properties of base-10 numbers.
*   **Structure:** Good. The class-based structure matches standard competitive programming environment requirements.
*   **Naming:** Good. `isSameAfterReversals` accurately describes the function's purpose.
*   **Improvements:** The code is already minimal and efficient. No substantive improvements are necessary.

---
---


# Question Revision
### Revision Report: A Number After a Double Reversal

**Pattern:** Math / Digit Manipulation

**Brute Force:**
Convert the integer to a string, reverse it, convert back to an integer, and repeat the process twice to check for equality with the original input.
*   **Time Complexity:** $O(\log_{10} n)$ (number of digits)
*   **Space Complexity:** $O(\log_{10} n)$ (to store string representation)

**Optimal Approach:**
Observe the mathematical property of the reversal: trailing zeros in the original number are lost during the first reversal (e.g., $180 \rightarrow 81 \rightarrow 18$). Therefore, a number returns to its original form if and only if it does not end in zero, or if the number is exactly `0`.
*   **Time Complexity:** $O(1)$
*   **Space Complexity:** $O(1)$

**The 'Aha' Moment:**
Trailing zeros act as "data loss" points during a reversal because they become leading zeros, which vanish when converted back into a standard integer type.

**Summary:**
Reversing a number twice returns the original value unless it contains trailing zeros, as those digits are permanently discarded during the first reversal.

---
