---
title: "Concatenation of Array"
slug: concatenation-of-array
date: "2026-07-28"
---

# My Solution
~~~

~~~

# Submission Review
Please provide the code you would like me to analyze. The `Code` section of your request is currently empty.

---

# Question Revision
### Concatenation of Array

**Pattern:** Array Manipulation

**Brute Force:** 
Use a built-in concatenation method (e.g., `nums + nums` in Python or `concat()` in JS) to append the array to itself.

**Optimal Approach:** 
Initialize a result array of size $2n$. Iterate through the input array once, assigning the value at index $i$ to both position $i$ and position $i + n$ in the result array.
- **Time Complexity:** $O(n)$
- **Space Complexity:** $O(n)$ (to store the output)

**The 'Aha' Moment:** 
The requirement for a result of length $2n$ with repeated values indicates a direct index mapping: $ans[i] = ans[i+n]$.

**Summary:** 
Pre-allocate an array of size $2n$ and populate indices $i$ and $i+n$ simultaneously in one pass.

---