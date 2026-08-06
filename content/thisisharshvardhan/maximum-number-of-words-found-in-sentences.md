---
title: "Maximum Number of Words Found in Sentences"
slug: maximum-number-of-words-found-in-sentences
date: "2026-08-03"
---

# My Solution
~~~

~~~

# Submission Review
No code was provided for analysis. Please provide the implementation you would like me to review.

---

# Question Revision
### Maximum Number of Words Found in Sentences

**Pattern**: String Manipulation / Array Traversal

**Brute Force**: Split each sentence into a list of words using a delimiter (space) and track the maximum length of these lists.

**Optimal Approach**: Iterate through each sentence and count the number of space characters. The number of words is `spaces + 1`.
- **Time Complexity**: $O(n \cdot m)$ where $n$ is the number of sentences and $m$ is the average sentence length.
- **Space Complexity**: $O(1)$ as we only maintain a few integer counters.

**The 'Aha' Moment**: Realizing that counting the delimiters (spaces) is computationally cheaper than allocating memory to split the string into a list.

**Summary**: Find the maximum number of spaces across all strings and add one.

---