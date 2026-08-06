---
title: "Jewels and Stones"
slug: jewels-and-stones
date: "2026-07-23"
---

# My Solution
~~~

~~~

# Submission Review
No code was provided for analysis. Please provide the source code and the language used to proceed with the review.

---

# Question Revision
### Jewels and Stones

**Pattern:** Hashing / Set

**Brute Force:** 
Nested loop: For every character in `stones`, iterate through the entire `jewels` string to check for a match.
* Time: $O(J \cdot S)$
* Space: $O(1)$

**Optimal Approach:** 
Store all characters of `jewels` in a Hash Set. Iterate through `stones` once, checking if each character exists in the set.
* Time: $O(J + S)$
* Space: $O(J)$ (or $O(1)$ since the alphabet size is capped)

**The 'Aha' Moment:** 
The requirement to repeatedly check if an element belongs to a specific "allowed" group signals that a Set should be used to trade space for $O(1)$ lookup time.

**Summary:** 
Use a Set to convert a linear membership search into a constant-time lookup.

---