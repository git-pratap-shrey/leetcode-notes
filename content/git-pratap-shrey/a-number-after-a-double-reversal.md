---
title: "A Number After a Double Reversal"
slug: a-number-after-a-double-reversal
date: "2026-04-01"

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
*   **Technique:** Mathematical logic/Observation.
*   **Optimality:** Optimal. The problem states that reversing a number $N$ results in $N'$ and reversing $N'$ results in $N''$. If the number ends in a trailing zero, the leading zero in the first reversal is dropped, making the second reversal unequal to the original. This solution correctly identifies that only numbers ending in zero (excluding zero itself) fail the condition.

## Complexity
*   **Time Complexity:** $O(1)$. The logic performs a single constant-time arithmetic operation and comparison.
*   **Space Complexity:** $O(1)$. No auxiliary space is used.

## Efficiency Feedback
*   **Runtime/Memory:** Exceptionally high efficiency. It avoids the $O(\log_{10} N)$ cost of performing actual digit reversals by using the mathematical property of the operation. 

## Code Quality
*   **Readability:** Good. The logic is self-explanatory.
*   **Structure:** Good. Minimalistic and clean.
*   **Naming:** Good. Function name adheres to the problem statement.
*   **Improvements:** None required. The code is concise and idiomatic for competitive programming.

---
---


# Question Revision
### Revision Report: A Number After a Double Reversal

**Pattern:** Mathematical Property / Digit Manipulation

**Brute Force:** 
Convert the integer to a string, reverse it, convert back to integer, repeat the process a second time, and compare the result with the original input.  
*   **Time:** $O(\log_{10} n)$
*   **Space:** $O(\log_{10} n)$ (due to string storage)

**Optimal Approach:** 
Observe that reversing a number removes trailing zeros (e.g., $120 \rightarrow 21 \rightarrow 12$). If the original number ends in zero, the double reversal will result in a smaller number because the zero is permanently lost. Therefore, the problem reduces to checking if `num == 0` or if the last digit of the original number is non-zero.
*   **Time:** $O(1)$
*   **Space:** $O(1)$

**The 'Aha' Moment:** 
Recognizing that trailing zeros act as a "lossy" transformation during reversal is the key to bypassing the simulation entirely.

**Summary:** 
Don't simulate the reversal process when the problem’s constraint relies on the mathematical behavior of trailing zeros.

---
