---
title: "String to Integer (atoi)"
slug: string-to-integer-atoi
date: "2026-04-08"

---
---

# My Solution
~~~c


int myAtoi(char* s) {

    int i = 0;
    int sign = 1;
    long num = 0;

    while (s[i] == ' ') {
        i++;
    }

    if (s[i] == '+' || s[i] == '-') {
        if (s[i] == '-') sign = -1;
        i++;
    }

    while (s[i] >= '0' && s[i] <= '9') {

        num = num * 10 + (s[i] - '0');

        if (sign * num > INT_MAX) return INT_MAX;
        if (sign * num < INT_MIN) return INT_MIN;

        i++;
    }

    return sign * num;
}
~~~

# Submission Review
## Approach
- **Technique**: Iterative state processing (linear scan).
- **Optimality**: Optimal. The solution processes the string in a single pass ($O(N)$) and uses constant extra space.

## Complexity
- **Time Complexity**: $O(N)$, where $N$ is the length of the string.
- **Space Complexity**: $O(1)$, as it uses a fixed number of integer variables.

## Efficiency Feedback
- **Runtime**: High efficiency. It correctly stops processing at the first non-digit character and avoids unnecessary string copying.
- **Potential Issues**: 
    - The check `sign * num > INT_MAX` is performed after updating `num`. While this handles overflow, a more robust way to prevent overflow before it occurs is to check if `num > (INT_MAX - digit) / 10`. 
    - The current logic works because `num` is a `long`, which is typically 64-bit on most modern systems, preventing an actual overflow before the comparison. However, if the platform's `long` is 32-bit, this logic would fail.

## Code Quality
- **Readability**: Good. The logic flows linearly and is easy to follow.
- **Structure**: Good. It effectively handles whitespace, sign detection, and numeric conversion in discrete steps.
- **Naming**: Good. Variable names (`i`, `sign`, `num`) are standard for this type of utility function.
- **Improvements**:
    - **Safety**: Use `long long` for `num` to ensure it exceeds the 32-bit `INT_MAX/MIN` range regardless of the platform's `long` size.
    - **Edge Cases**: The code does not explicitly handle the case where the input string `s` is empty (`""`) or consists only of whitespace (e.g., `"  "`). If `s` ends at `s[i] == '\0'`, the loop `s[i] >= '0' && s[i] <= '9'` will terminate correctly, but it is safer to check for `s[i] != '\0'` explicitly.
    - **Redundancy**: The condition `if (sign * num > INT_MAX)` can be simplified to `if (num > INT_MAX)` if `sign` is positive, avoiding multiplication overhead inside the loop.

---
---


# Question Revision
### Revision Report: String to Integer (atoi)

**Pattern:** State Machine / Iterative Parsing

**Brute Force:**
Iterate through the string, store all characters in a list, filter for valid numeric characters, and attempt to parse the entire substring into a 64-bit integer before checking overflow boundaries.

**Optimal Approach:**
Single-pass scan using four logical flags: `sign`, `base` (multiplier), `result` (accumulator), and `index`. Skip leading whitespaces, detect the sign, and process digits while checking for overflow/underflow against `INT_MAX` and `INT_MIN` *before* each multiplication/addition step. 
*   **Time Complexity:** $O(n)$, where $n$ is the length of the string.
*   **Space Complexity:** $O(1)$.

**The 'Aha' Moment:**
When a problem requires processing a sequence with strict validity rules and early-exit conditions (like overflow or non-numeric characters), treat it as a stream of tokens that dictates a transition between "waiting for start" and "processing digits" states.

**Summary:** 
Always validate the result *before* performing an operation that could cause overflow to maintain clean, robust boundary handling.

---
