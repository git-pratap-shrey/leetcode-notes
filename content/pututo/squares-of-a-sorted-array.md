---
title: "Squares of a Sorted Array"
slug: squares-of-a-sorted-array
date: "2026-06-03"
---

# My Solution
~~~

~~~

# Submission Review
Please provide the code you would like me to analyze. The **Language** and **Code** sections of your request are currently empty. Once provided, I will analyze it according to the required structure.

---

# Question Revision
### Squares of a Sorted Array

**Pattern:** Two Pointers

**Brute Force:** 
Square every element in the array, then apply a standard sorting algorithm to the result.
- **Time:** $O(n \log n)$
- **Space:** $O(1)$ or $O(n)$ depending on the sort implementation.

**Optimal Approach:**
Since the input is sorted, the largest squares must reside at the extreme ends (most negative or most positive). Initialize two pointers at the start and end of the array. Compare the squares of the values at these pointers, place the larger one at the end of a new result array, and move the pointer inward.
- **Time:** $O(n)$
- **Space:** $O(n)$ (to store the output)

**The 'Aha' Moment:** 
The sorted nature of the input means the maximum possible squared values are guaranteed to be at the boundaries.

**Summary:** 
Use two pointers to pluck the largest squares from the ends of the array and fill the result from back to front.

---