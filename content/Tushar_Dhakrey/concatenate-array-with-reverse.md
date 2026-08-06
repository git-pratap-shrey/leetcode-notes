---
title: "Concatenate Array With Reverse"
slug: concatenate-array-with-reverse
date: "2026-07-28"
---

# My Solution
~~~

~~~

# Submission Review
Please provide the code you would like me to analyze. The `Code:` section in your request was empty.

---

# Question Revision
### Revision Report: Concatenate Array With Reverse

**Pattern:** Array Manipulation

**Brute Force:** 
Create a shallow copy of the input array, reverse the copy using a built-in library function, and concatenate the two arrays.

**Optimal Approach:** 
Pre-allocate a result array of size $2n$. Populate the first half by iterating from $0$ to $n-1$ and the second half by iterating from $n-1$ down to $0$.
- **Time Complexity:** $O(n)$
- **Space Complexity:** $O(n)$

**The 'Aha' Moment:** 
The requirement to append a mirrored version of the input suggests a direct mapping between the original indices and a mirrored index in the second half of the result.

**Summary:** 
Create a $2n$ sized array and fill the second half by traversing the original input backwards.

---