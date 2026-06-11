---
title: "Decode String"
slug: decode-string
date: "2026-06-11"
---

# My Solution
~~~

~~~

# Submission Review
No code was provided in the `Code:` section. Please provide the implementation you would like me to analyze.

---

# Question Revision
### Decode String

**Pattern:** Stack / Recursion

**Brute Force:** 
Repeatedly find the innermost `[...]` pair, decode it, replace the substring in the original string, and repeat until no brackets remain.

**Optimal Approach:**
Use two stacks (one for `counts` and one for `current_strings`) to track the state of nested expressions.
1. Iterate through the string:
   - **Digit:** Build the multi-digit number.
   - **`[`**: Push the current accumulated string and the current number onto their respective stacks; reset both.
   - **`]`**: Pop the count and the previous string. Append the current string (repeated `count` times) to the previous string.
   - **Character:** Append to the current accumulated string.
- **Time Complexity:** $O(n)$ where $n$ is the length of the decoded string.
- **Space Complexity:** $O(n)$ to store the stacks and the result.

**The 'Aha' Moment:** 
Nested brackets indicate a Last-In-First-Out (LIFO) structure, which is the signature of a Stack.

**Summary:** 
Use a stack to save the current context (string and multiplier) before diving into a nested bracket, then pop to reconstruct the string from the inside out.

---