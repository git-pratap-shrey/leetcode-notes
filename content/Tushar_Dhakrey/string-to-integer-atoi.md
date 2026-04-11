---
title: "String to Integer (atoi)"
slug: string-to-integer-atoi
date: "2026-04-11"

---
---

# My Solution
~~~java
class Solution {
    public int myAtoi(String s) {
        s = s.trim();
        if(s.isEmpty()) return 0;
        int sign = 1;
        int i = 0;
        int number = 0;
        if(s.charAt(i)=='-'){
            sign = -1;
            i++;
        }
        else if(s.charAt(i)=='+'){
            i++;
        }
        while(i<s.length() && Character.isDigit(s.charAt(i))){
            int digit = s.charAt(i)-'0';
             if(number>(Integer.MAX_VALUE)/10 || (number==(Integer.MAX_VALUE)/10 && digit>7)){       //overflow //MAX = 2147483647 //last digit = 7
                if(sign==1) return Integer.MAX_VALUE;
                else return Integer.MIN_VALUE;
            }
            number = number*10+digit; //You don’t need to store "123"
            //You directly build integer → more efficient (O(1) extra space
            i++;
        }
        return number*sign;
    }
}
~~~

# Submission Review
## Approach
*   **Technique**: Iterative parsing (Greedy).
*   **Status**: Optimal for the requirements. It processes the string in a single pass ($O(n)$) without storing extra data structures, correctly handling constraints and edge cases.

## Complexity
*   **Time Complexity**: $O(n)$, where $n$ is the length of the string, as it performs a single trim and a single scan.
*   **Space Complexity**: $O(n)$ due to `s.trim()`, which creates a new string. This could be $O(1)$ auxiliary space if the trim were implemented manually by skipping whitespace indices.

## Efficiency Feedback
*   **Bottleneck**: The use of `s.trim()` creates a copy of the string in memory. While usually acceptable, in extremely memory-constrained environments, you could simply iterate past leading spaces using a pointer.
*   **Optimization**: The overflow logic is correct and handled before the multiplication occurs, preventing `Integer` overflow exceptions effectively.

## Code Quality
*   **Readability**: Good. The logic is straightforward and follows the expected state transitions for this problem.
*   **Structure**: Good. The separation of sign handling and digit processing is logical.
*   **Naming**: Good. Variable names like `sign`, `number`, and `digit` are descriptive and clear.
*   **Concrete Improvements**:
    *   **Whitespace Handling**: Instead of `s = s.trim()`, use a `while` loop to find the first non-space index to avoid unnecessary memory allocation.
    *   **Edge Case**: The current code fails if the string contains only a sign (`"+"`, `"-"`). Adding a check `if (i == s.length()) return 0;` after the sign logic would make it more robust against malformed input.
    *   **Input Validation**: Ensure that the code explicitly handles the case where the index `i` is accessed after a potential increment (e.g., `s.charAt(i)` when `i` reaches `s.length()` after a sign). While your `i < s.length()` check in the `while` loop covers this for digits, the `if` checks for `s.charAt(i)` before the loop are potentially unsafe if the string ends abruptly after a sign character.

---
---


# Question Revision
### Revision Report: String to Integer (atoi)

**Pattern:** Simulation / State Machine

**Brute Force:** 
Iterate through the string, extract all numeric characters into a new buffer, convert to a long/integer, and check for overflow boundaries. This approach is brittle because it fails to handle leading whitespace, signs, and non-numeric characters correctly in one pass.

**Optimal Approach:**
Single-pass simulation using a pointer and a state-based logic:
1.  **Skip Whitespace:** Increment index while `s[i] == ' '`.
2.  **Handle Sign:** Check for `+` or `-` and store the multiplier.
3.  **Process Digits:** Iterate until a non-digit is found, updating the result as `result = result * 10 + digit`.
4.  **Overflow Check:** Before multiplying by 10 or adding the digit, check if the value exceeds `INT_MAX` or is less than `INT_MIN` using boundary constants.
*   **Time Complexity:** $O(n)$, where $n$ is the length of the string.
*   **Space Complexity:** $O(1)$, using only a few primitive variables.

**The 'Aha' Moment:**
When a problem requires processing a stream of characters with strict boundary conditions (signs, overflow, non-digits), think of it as a state machine where you must sequentially validate inputs before committing to the calculation.

**Summary:**
Always treat integer parsing as a state-based pipeline that handles leading whitespace, signs, and overflow checks before calculating the value.

---
