---
title: "Defanging an IP Address"
slug: defanging-an-ip-address
date: "2026-07-29"
---

# My Solution
~~~

~~~

# Submission Review
Please provide the code you would like me to analyze. The `Code` section in your request was empty, and per my instructions, I cannot hallucinate an implementation or provide generic theory without a specific solution to review.

---

# Question Revision
### Defanging an IP Address

**Pattern:** String Manipulation

**Brute Force:** 
Iterate through the input string character by character. If the character is a dot, append `[.]` to a result string; otherwise, append the character itself.

**Optimal Approach:** 
Utilize the language's built-in `replace` method or a `StringBuilder` (in Java/C#) to handle the substitution efficiently and avoid the overhead of immutable string concatenation.
- **Time Complexity:** $O(n)$
- **Space Complexity:** $O(n)$

**The 'Aha' Moment:** 
The problem requires a literal 1-to-1 character substitution, signaling a standard string replacement operation.

**Summary:** 
Replace all occurrences of `.` with `[.]` using the most efficient built-in string replacement utility.

---