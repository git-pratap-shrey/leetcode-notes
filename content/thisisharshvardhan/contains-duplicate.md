---
title: "Contains Duplicate"
slug: contains-duplicate
date: "2026-08-04"
---

# My Solution
~~~

~~~

# Submission Review
Please provide the code you would like me to analyze. The code section in your request is currently empty.

---

# Question Revision
### Contains Duplicate

**Pattern:** Hashing

**Brute Force:** 
Use nested loops to compare every element with every other element. 
- Time: $O(n^2)$
- Space: $O(1)$

**Optimal Approach:** 
Iterate through the array while inserting elements into a Hash Set. If an element is already present in the set, a duplicate exists.
- Time: $O(n)$
- Space: $O(n)$

**The 'Aha' Moment:** 
The requirement to check for "existence" of a previous value in linear time is a textbook signal for a Hash Set.

**Summary:** 
Trade space for time by using a set to track visited elements in a single pass.

---