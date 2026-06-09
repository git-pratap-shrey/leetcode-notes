---
title: "Contains Duplicate"
slug: contains-duplicate
date: "2026-06-02"
---

# My Solution
~~~

~~~

# Submission Review
Please provide the code snippet you would like me to analyze. The `Code` section of your request is currently empty.

---

# Question Revision
### Contains Duplicate

**Pattern:** Hashing

**Brute Force:** Compare every element with every other element using nested loops.
- Time: $O(n^2)$
- Space: $O(1)$

**Optimal Approach:** Iterate through the array and insert elements into a Hash Set; if an element is already present in the set, return `true`.
- Time: $O(n)$
- Space: $O(n)$

**The 'Aha' Moment:** The requirement to detect if a value has been "seen" before points directly to a Hash Set for $O(1)$ average-time lookups.

**Summary:** Use a Set to track encountered elements for linear-time duplicate detection.

---