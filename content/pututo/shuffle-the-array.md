---
title: "Shuffle the Array"
slug: shuffle-the-array
date: "2026-06-07"
---

# My Solution
~~~

~~~

# Submission Review
Please provide the code you would like me to analyze. The code section in your request was empty.

---

# Question Revision
### Revision Report: Shuffle the Array

**Pattern:** Two Pointers / Simulation

**Brute Force:**
Create a new array and use a loop to manually pick elements from the first half and second half based on the index $i$, placing them at $2i$ and $2i+1$.

**Optimal Approach:**
Maintain two pointers: `p1` at index $0$ (start of the first half) and `p2` at index $n$ (start of the second half). Iterate until all elements are processed, alternating between appending the value at `p1` and `p2` to the result array.
- **Time Complexity:** $O(n)$
- **Space Complexity:** $O(n)$ (for the output array)

**The 'Aha' Moment:**
The input is structured as two contiguous blocks of equal size that need to be interleaved, signaling a dual-pointer traversal.

**Summary:**
Interleave elements from the first and second halves of the array by iterating through both segments simultaneously.

---