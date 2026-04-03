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
*   **Technique:** Mathematical observation/Pattern matching.
*   **Optimality:** Optimal. The problem states `reversed1` is `num` with trailing zeros removed, and `reversed2` is `reversed1` reversed. If `num` has trailing zeros (and is not zero), the leading zeros of `reversed1` are lost, meaning `reversed2 != num`. If `num` has no trailing zeros, `reversed1` preserves all digits, and `reversed2` will equal `num`.

## Complexity
*   **Time Complexity:** $O(1)$ — Only a constant number of arithmetic operations are performed.
*   **Space Complexity:** $O(1)$ — No extra space utilized.

## Efficiency Feedback
*   The approach is highly efficient as it avoids the overhead of integer-to-string conversion or actual reversal simulation. It utilizes a direct property of base-10 number reversal.

## Code Quality
*   **Readability:** Good. The logic is self-explanatory.
*   **Structure:** Good. The logic is appropriately encapsulated within the function.
*   **Naming:** Good. The function name matches the problem requirement.
*   **Improvements:** The logic could be written more concisely as a one-liner: `return num == 0 || num % 10 != 0;`. This eliminates the `if` block, though the current implementation is perfectly acceptable.

---
---


# Question Revision
### Revision Report: A Number After a Double Reversal

**Pattern:** Mathematical Property / Digit Manipulation

**Brute Force:** 
Convert the integer to a string, reverse it, convert back to integer, repeat the process a second time, and compare the result with the original input.

**Optimal Approach:** 
Observe the behavior of trailing zeros. Reversing an integer once removes trailing zeros; reversing it again does not restore them if the original number ended in zero (e.g., `120` -> `21` -> `12`). Therefore, the condition `reversed2 == num` is equivalent to checking if the original number does not end in zero, unless the number is `0` itself.
*   **Time Complexity:** $O(\log n)$ (to extract digits) or $O(1)$ if using the property check.
*   **Space Complexity:** $O(1)$.

**The 'Aha' Moment:** 
Recognizing that trailing zeros act as a "lossy" transformation during reversal is faster than performing two full reversal operations.

**Summary:** 
If an integer ends in zero, its double reversal will never equal the original unless the number is zero.

---
