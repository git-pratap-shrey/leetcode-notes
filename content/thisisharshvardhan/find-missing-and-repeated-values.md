---
title: "Find Missing and Repeated Values"
slug: find-missing-and-repeated-values
date: "2026-04-10"
---

# My Solution
~~~

~~~

# Submission Review
No code was provided in your request. Please provide the code snippet and the language you would like me to analyze.

---

# Question Revision
### Revision Report: Find Missing and Repeated Values

**Pattern:** Frequency Tracking / Mathematical Summation

**Brute Force:** 
Flatten the grid into a list, sort it, and iterate through to find the duplicate (adjacent identical elements) and the missing value (gap in sequence).
- Time: $O(n^2 \log n)$
- Space: $O(n^2)$

**Optimal Approach:** 
Use a frequency array of size $n^2 + 1$ to count occurrences of each number while traversing the grid. A second pass through the frequency array identifies the index with value `2` (repeated) and `0` (missing).
- Time: $O(n^2)$
- Space: $O(n^2)$
*(Note: For $O(1)$ space, use the difference between the actual sum/sum-of-squares and the expected sum/sum-of-squares of $1 \dots n^2$ to solve for the two variables algebraically.)*

**The 'Aha' Moment:** 
When a problem provides a fixed range of expected values $[1, N]$ and mentions exactly one duplicate and one missing element, it is a signal to use either a frequency map or mathematical sum differences.

**Summary:** 
Map the occurrences of all elements in the grid to find which number is over-represented and which is absent.

---