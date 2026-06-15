---
title: "Longest Substring Without Repeating Characters"
slug: longest-substring-without-repeating-characters
date: "2026-06-09"
---

# My Solution
~~~

~~~

# Submission Review
Please provide the code you would like me to analyze. I am ready to evaluate it according to your strict criteria once it is provided.

---

# Question Revision
### Revision Report: Longest Substring Without Repeating Characters

**Pattern:** Sliding Window (with Hash Map/Set)

**Brute Force:**
Iterate through all possible substrings using two nested loops, verify if each contains unique characters using a set, and track the maximum length. 
*   **Time Complexity:** $O(n^2)$ or $O(n^3)$ depending on uniqueness check implementation.
*   **Space Complexity:** $O(\min(n, m))$ where $m$ is the size of the charset.

**Optimal Approach:**
Use a sliding window defined by two pointers (`left`, `right`). Maintain a hash map to store the last seen index of each character. As you expand `right`, if a duplicate is found within the current window, jump the `left` pointer to `max(left, last_seen_index + 1)`.
*   **Time Complexity:** $O(n)$ — Each character is visited at most twice.
*   **Space Complexity:** $O(\min(n, m))$ — To store the character indices.

**The 'Aha' Moment:**
When a problem asks for the "longest" subarray or substring satisfying a constraint, a sliding window is almost always the optimal way to avoid re-scanning elements.

**Summary:**
Whenever you need to track a dynamic range of elements that satisfies a uniqueness or sum constraint, shrink the window from the left the moment the constraint is violated.

---