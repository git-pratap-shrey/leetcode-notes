---
title: "Decode String"
slug: decode-string
date: "2026-06-11"
---

# My Solution
~~~

~~~

# Submission Review
No code was provided in the `Code:` section. Please provide the implementation you would like me to review.

---

# Question Revision
### Decode String

**Pattern:** Stack / Recursion

**Brute Force:**
Repeatedly scan the string for the innermost bracket pair `[...]`, decode that segment, replace it in the original string, and repeat until no brackets remain.

**Optimal Approach:**
Use two stacks: one for the multipliers (`countStack`) and one for the strings being built (`stringStack`).
1. Iterate through the string:
   - **Digit:** Build the full number (handle multi-digit integers).
   - **`[`**: Push the current multiplier and the current string context onto their respective stacks; reset both.
   - **`]`**: Pop the multiplier $k$ and the previous string. Append the current string repeated $k$ times to the previous string.
   - **Character**: Append to the current string.
2. Return the final string.

- **Time Complexity:** $O(n)$, where $n$ is the length of the decoded string.
- **Space Complexity:** $O(n)$ to store the stacks and the output.

**The 'Aha' Moment:**
The presence of nested structures where the innermost element must be resolved first is a classic indicator of a LIFO (Last-In, First-Out) stack pattern.

**Summary:**
Use stacks to save the current string state and multiplier whenever entering a nested bracket, then pop and expand when exiting.

---