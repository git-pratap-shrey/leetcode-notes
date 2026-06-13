---
title: "Decode String"
slug: decode-string
date: "2026-06-13"
---

# My Solution
~~~

~~~

# Submission Review
Please provide the code implementation you would like me to analyze. The `Code:` section in your request is currently empty, and per the system instructions, I cannot analyze generic theory or hallucinate a solution.

---

# Question Revision
### Decode String

**Pattern:** Stack / Recursion

**Brute Force:** Attempting to solve via simple string replacement or regex without handling nesting, which fails for cases like `3[a2[c]]`.

**Optimal Approach:** 
Use two stacks: one for `counts` (multipliers) and one for `strings` (context). 
1. Iterate through the string:
    - **Digit:** Build the multi-digit number.
    - **`[`**: Push the current number and the current string to their respective stacks; reset both.
    - **`]`**: Pop the multiplier and the previous string. Append the current string repeated $N$ times to the previous string.
    - **Character:** Append to the current string.
2. Return the final constructed string.

- **Time Complexity:** $O(n)$ where $n$ is the length of the decoded string.
- **Space Complexity:** $O(n)$ to store the stacks and the result.

**The 'Aha' Moment:** The nested brackets `[...]` create a LIFO (Last-In, First-Out) dependency, where the innermost expression must be resolved before the outer one.

**Summary:** Use a stack to preserve the multiplier and the prefix string whenever entering a nested bracket.

---