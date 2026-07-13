---
title: "String Compression"
slug: string-compression
date: "2026-06-12"
---

# My Solution
~~~

~~~

# Submission Review
Please provide the code you would like me to analyze. No code was included in your request.

---

# Question Revision
### String Compression

**Pattern:** Two Pointers (Read/Write)

**Brute Force:** 
Traverse the array to count consecutive characters and store the result in a separate temporary string or list. Copy the result back into the original array.
- **Time:** $O(n)$
- **Space:** $O(n)$

**Optimal Approach:**
Use a `read` pointer to iterate through the array and a `write` pointer to modify it in-place. For every group of identical characters:
1. Write the character at the `write` pointer.
2. Calculate the group length.
3. If length $> 1$, convert the count to characters and write them sequentially starting at `write + 1`.
4. Advance the `write` pointer by $1 + (\text{number of digits in count})$.

- **Time:** $O(n)$
- **Space:** $O(1)$

**The 'Aha' Moment:** 
The constraint to modify the array "in-place" while iterating signals the use of a Read/Write pointer pair to overwrite processed data.

**Summary:** 
Iterate with a read pointer to count character groups and overwrite the array using a write pointer to handle the character and its frequency.

---