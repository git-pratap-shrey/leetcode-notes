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
- **Technique**: Mathematical observation (digit analysis).
- **Optimality**: Optimal. The problem asks if `reverse(reverse(num)) == num`. Reversing a number that ends in a non-zero digit preserves its value after two reversals. If a number ends in zero (and is not zero itself), the leading zero is lost during the first reversal, making the second reversal unequal to the original.

## Complexity
- **Time Complexity**: $O(1)$. Constant time arithmetic and modulo operations.
- **Space Complexity**: $O(1)$. No auxiliary space used.

## Efficiency Feedback
- The solution is highly efficient as it avoids the $O(\log_{10} n)$ overhead of actually performing integer reversals. It reduces the transformation to a simple conditional check.

## Code Quality
- **Readability**: Good. The logic is concise and easy to follow.
- **Structure**: Good. The method fits the required interface perfectly.
- **Naming**: Good. The variable name `num` is standard for integer inputs.

### Concrete Improvements
- The logic could be simplified to a single line:
  ```cpp
  return num == 0 || num % 10 != 0;
  ```
- This reduces branching and improves conciseness without sacrificing clarity.

---
---


# Question Revision
### Revision Report: A Number After a Double Reversal

**Pattern:** Mathematical Property / Simulation

**Brute Force:** Convert the integer to a string, reverse it, convert back to integer, repeat the process, and compare the result with the original.  
*   **Time:** $O(\log n)$ (number of digits)
*   **Space:** $O(\log n)$ (to store the string/digits)

**Optimal Approach:** Observe that a number reversed twice returns to itself *unless* it ends in a zero. If the original number has a trailing zero, reversing it loses that digit, making it impossible to recover the original value upon the second reversal.
*   **Logic:** Simply return `num == 0 || num % 10 != 0`.
*   **Time:** $O(1)$
*   **Space:** $O(1)$

**The 'Aha' Moment:** The realization that trailing zeros act as "information loss" during reversal is the mathematical shortcut that avoids the simulation entirely.

**Summary:** Reversing a number twice is an identity function unless the number ends in zero, in which case the trailing zero is permanently stripped.

---
