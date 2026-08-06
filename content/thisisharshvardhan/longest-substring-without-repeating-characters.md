---
title: "Longest Substring Without Repeating Characters"
slug: longest-substring-without-repeating-characters
date: "2026-08-05"
---

# My Solution
~~~

~~~

# Submission Review
Please provide the code you would like me to analyze. There was no code included in your request.

---

# Question Revision
### Longest Substring Without Repeating Characters

**Pattern:** Sliding Window (Dynamic)

**Brute Force:** Generate all possible substrings, use a hash set to check for uniqueness in each, and track the maximum length.
- **Time:** $O(n^3)$
- **Space:** $O(min(n, m))$

**Optimal Approach:** Use two pointers (`left`, `right`) and a hash map to store the last seen index of each character. As the `right` pointer expands, if a duplicate is found, jump the `left` pointer to `max(left, map[char] + 1)` to maintain a window of unique characters.
- **Time:** $O(n)$
- **Space:** $O(min(m, n))$ where $m$ is the size of the character set.

**The 'Aha' Moment:** The requirement for a "contiguous substring" combined with a "uniqueness constraint" signals that a sliding window can efficiently prune the search space.

**Summary:** Expand the window with a right pointer and jump the left pointer to bypass the last seen occurrence of a repeating character.

---