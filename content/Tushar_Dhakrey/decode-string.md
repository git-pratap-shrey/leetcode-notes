---
title: "Decode String"
slug: decode-string
date: "2026-06-11"
---

# My Solution
~~~

~~~

# Submission Review
Please provide the code you would like me to analyze. The **Language** and **Code** sections of your request were empty. Once provided, I will analyze the solution according to the specified structure.

---

# Question Revision
### Decode String

**Pattern:** Stack / Recursion

**Brute Force:** Repeatedly search for the innermost brackets `[...]`, decode that specific segment, and replace it in the original string until no brackets remain.

**Optimal Approach:** 
Use two stacks: one for `counts` (repeat numbers) and one for `strings` (the characters accumulated before the bracket). 
1. Iterate through the string:
    - **Digit:** Build the full number (handle multi-digits).
    - **`[`:** Push the current accumulated string and current number onto their respective stacks; reset both.
    - **Character:** Append to the current working string.
    - **`]`:** Pop the count $k$ and the previous string. Append the current working string repeated $k$ times to the previous string.
- **Time Complexity:** $O(n)$ where $n$ is the length of the decoded string.
- **Space Complexity:** $O(n)$ to store the stacks and the result.

**The 'Aha' Moment:** The nested nature of the brackets `[...]` creates a Last-In, First-Out (LIFO) dependency, which is the signature of a Stack.

**Summary:** Use stacks to preserve the "outer" context (previous string and multiplier) while processing "inner" nested brackets.

---