---
title: "Reverse String Prefix"
slug: reverse-string-prefix
date: "2026-07-30"
---

# My Solution
~~~

~~~

# Submission Review
No code was provided for analysis. Please provide the implementation you would like me to review.

---

# Question Revision
### Reverse String Prefix

**Pattern:** String Manipulation / Two Pointers

**Brute Force:** 
Iterate through the string to find the last occurrence of `ch`, slice the prefix, reverse it using a built-in function, and concatenate it with the remaining suffix.

**Optimal Approach:**
1. Locate the last index $k$ of character `ch` (using `lastIndexOf` or a reverse scan).
2. If $k$ exists, convert the string to a mutable array.
3. Use two pointers (start at $0$, end at $k$) to swap elements moving inward until they meet.
4. Convert the array back to a string.

**Complexity:**
*   **Time:** $O(n)$ — One pass to find the index, one pass to reverse.
*   **Space:** $O(n)$ — To store the mutable character array.

**The 'Aha' Moment:** 
The phrase "Reverse... Prefix" signals a need to identify a specific boundary index and apply a symmetric swap pattern.

**Summary:** 
Find the last occurrence of the target character and reverse the substring from index $0$ to that position.

---