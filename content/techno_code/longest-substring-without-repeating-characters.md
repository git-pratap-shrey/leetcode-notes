---
title: "Longest Substring Without Repeating Characters"
slug: longest-substring-without-repeating-characters
date: "2026-06-09"
---

# My Solution
~~~

~~~

# Submission Review
No code was provided for analysis. Please provide the implementation you would like me to review.

---

# Question Revision
### Longest Substring Without Repeating Characters

**Pattern:** Sliding Window (Dynamic)

**Brute Force:** 
Check every possible substring, verify if it contains unique characters using a set, and track the maximum length.  
**Complexity:** $O(n^3)$

**Optimal Approach:** 
Use two pointers (`left`, `right`) and a hash map to store the last seen index of each character. Expand `right` to grow the window; if a duplicate is encountered, jump `left` to $\max(\text{left}, \text{map}[char] + 1)$ to exclude the previous occurrence.
- **Time Complexity:** $O(n)$
- **Space Complexity:** $O(\min(m, n))$, where $m$ is the size of the character set.

**The 'Aha' Moment:** 
The combination of "substring" (contiguous) and a "uniqueness" constraint indicates a sliding window where the left boundary must shift based on the last seen position of a duplicate.

**Summary:** 
Use a hash map to track character indices and slide the left pointer forward whenever a duplicate is encountered to maintain a unique window.

---