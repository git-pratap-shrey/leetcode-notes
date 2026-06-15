---
title: "First Unique Character in a String"
slug: first-unique-character-in-a-string
date: "2026-06-08"
---

# My Solution
~~~

~~~

# Submission Review
It appears you did not provide the code for the "First Unique Character in a String" problem. Please paste the code, and I will be happy to provide a senior-level review based on your criteria.

***

**To get the best analysis, please ensure your code looks something like this (or is the version you wish to have reviewed):**

```python
def firstUniqChar(s: str) -> int:
    # Your code here
```

Once provided, I will analyze it based on:
1.  **Approach:** Is it using a Frequency Map (Hash Table) or an Array-based counter? Is it $O(N)$ or $O(N^2)$?
2.  **Complexity:** Time and space requirements.
3.  **Efficiency:** Optimization for memory (e.g., using a fixed-size array for 'a'-'z' vs. a dictionary).
4.  **Code Quality:** Style, naming conventions, and idiomatic correctness.

**Standing by for your code.**

---

# Question Revision
### Revision Report: First Unique Character in a String

**Pattern:** Frequency Counting / Hash Map

**Brute Force:**
For every character at index `i`, iterate through the rest of the string to check if it appears elsewhere. 
*   **Time:** $O(n^2)$
*   **Space:** $O(1)$ (ignoring input storage)

**Optimal Approach:**
1. Perform a first pass to populate a hash map (or fixed-size array of 26) with the frequency count of each character.
2. Perform a second pass over the string, checking the map for the first character with a frequency of exactly 1.
*   **Time:** $O(n)$ (two linear passes)
*   **Space:** $O(1)$ (the alphabet size is capped at 26, which is constant space)

**The 'Aha' Moment:**
When a problem asks for the *first* occurrence of an element based on a *global* property (like uniqueness across the entire string), you must decouple the counting phase from the verification phase using a frequency lookup table.

**Summary:** 
Use a two-pass frequency array whenever you need to identify an element based on its global occurrence count rather than its relative position.

---