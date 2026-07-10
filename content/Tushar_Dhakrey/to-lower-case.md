---
title: "To Lower Case"
slug: to-lower-case
date: "2026-07-07"

---

# My Solution
~~~
class
 Solution {
    public String toLowerCase(String s) {
        return s.toLowerCase();
    }
}
~~~

# Submission Review

## Approach

- **Technique**: Built-in API delegation.
- **Optimality**: Optimal. It leverages the Java Standard Library's highly optimized `String.toLowerCase()` method.

## Complexity

- **Time Complexity**: $O(n)$, where $n$ is the length of the string. Each character must be processed once.
- **Space Complexity**: $O(n)$. In Java, strings are immutable; a new string of length $n$ is allocated for the result.

## Efficiency Feedback

- **Runtime/Memory**: Minimal. The JVM handles the character mapping efficiently, and since a new string is required by the problem return type, the $O(n)$ space is unavoidable.

## Code Quality

- **Readability**: Good. The intent is immediate and clear.
- **Structure**: Good. Minimalist and correct.
- **Naming**: Good. Follows standard Java conventions.
- **Improvements**: None. For a competitive programming context, this is the most concise and reliable approach.

---

# Question Revision

#

## Revision Report: To Lower Case

**Pattern:** String Manipulation / ASCII Mapping

**Brute Force:** 
Use the built-in language method (e.g., `.toLowerCase()` in Java/JS) to handle the conversion.

**Optimal Approach:** 
Iterate through the string and check if each character falls within the ASCII range of 'A' (65) to 'Z' (90). If it does, add the offset of 32 (the distance between 'A' and 'a') to convert it to lowercase.
- **Time Complexity:** $O(n)$
- **Space Complexity:** $O(n)$ to store the resulting string.

**The 'Aha' Moment:** 
The fixed distance between uppercase and lowercase letters in the ASCII table allows for constant-time conversion via simple addition.

**Summary:** 
Convert uppercase characters to lowercase by adding 32 to their ASCII value.

---
