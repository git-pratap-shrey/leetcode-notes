---
title: "A Number After a Double Reversal"
slug: a-number-after-a-double-reversal
date: "2026-04-10"

---
---

# My Solution
~~~c
bool isSameAfterReversals(int num) {

    if(num==0) return true;
    if(num%10==0) return false;

    return true;
    
}
~~~

# Submission Review
## Approach
*   **Technique:** Mathematical observation (Greedy/Constant time logic).
*   **Optimality:** Optimal. The problem relies on the property that reversing an integer $x$ and then reversing it again returns $x$ if and only if there are no trailing zeros (unless $x=0$).

## Complexity
*   **Time Complexity:** $O(1)$. The logic performs simple arithmetic checks.
*   **Space Complexity:** $O(1)$. No extra space is allocated.

## Efficiency Feedback
*   The solution is highly efficient as it avoids the $O(\log_{10} n)$ overhead of actual integer reversal loops. By identifying the trailing zero condition ($num \% 10 == 0$), it solves the problem using simple branching.

## Code Quality
*   **Readability:** Good. The logic is concise and easy to follow.
*   **Structure:** Good. Simple conditional checks handle all edge cases correctly.
*   **Naming:** N/A (single function provided).
*   **Concrete Improvements:** 
    *   The code is already minimal. It could technically be written as a single line: `return num == 0 || num % 10 != 0;`, but the current version is perfectly readable.

---
---


# Question Revision
### Revision Report: A Number After a Double Reversal

**Pattern:** Mathematical Property / Digit Manipulation

**Brute Force:** 
Convert the integer to a string, reverse it, convert back to integer, repeat the process, and compare the result to the original input. This involves multiple type conversions and string allocations.

**Optimal Approach:** 
Observe that reversing an integer twice effectively restores the number unless it ends in a zero. Trailing zeros are lost during the first reversal (e.g., `180` → `81`) and cannot be recovered during the second (e.g., `81` → `18`). Therefore, the condition simplifies to checking if the last digit is zero.
*   **Time Complexity:** $O(1)$ (Direct integer check or constant-time digit extraction).
*   **Space Complexity:** $O(1)$.

**The 'Aha' Moment:**
Recognizing that trailing zeros are non-invertible anchors that violate the identity property of double-reversal allows you to bypass the simulation entirely.

**Summary:**
Double-reversing an integer is an identity function unless the number ends in zero, which causes permanent data loss of trailing digits.

---
