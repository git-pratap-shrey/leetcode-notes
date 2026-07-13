---
title: "Kth Smallest Number in Multiplication Table"
slug: kth-smallest-number-in-multiplication-table
date: "2026-06-09"
---

# My Solution
~~~

~~~

# Submission Review
Please provide the code and the language you would like me to analyze. The **Language** and **Code** fields in your request were left blank, so there is currently no implementation to review.

---

# Question Revision
### Kth Smallest Number in Multiplication Table

**Pattern:** Binary Search on Answer

**Brute Force:** Generate all $m \times n$ products, store them in an array, sort the array, and return the $k$-th element. 
- Time: $O(mn \log(mn))$
- Space: $O(mn)$

**Optimal Approach:**
- **Logic:** Perform binary search on the value range $[1, m \times n]$. For a candidate value `mid`, count how many numbers in the table are $\le mid$. Since each row $i$ consists of multiples ($i, 2i, 3i \dots$), the count of elements $\le mid$ in row $i$ is $\min(n, \lfloor mid/i \rfloor)$. If the total count $\ge k$, `mid` is a potential answer; search the left half. Otherwise, search the right half.
- **Time:** $O(m \log(m \cdot n))$
- **Space:** $O(1)$

**The 'Aha' Moment:** The search space of possible product values is sorted, but the matrix is too large to materialize, signaling a need to binary search the *result* rather than the *index*.

**Summary:** Use binary search on the value range and a row-by-row counting trick to find the $k$-th smallest element without constructing the table.

---