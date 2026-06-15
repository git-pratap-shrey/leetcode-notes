---
title: "Permutation in String"
slug: permutation-in-string
date: "2026-06-09"
---

# My Solution
~~~

~~~

# Submission Review
Please provide the code you would like me to analyze. I am ready to review your solution for *Permutation in String* once you paste it below.

---

# Question Revision
### Revision Report: Permutation in String

**Pattern:** Sliding Window (Fixed-size)

**Brute Force:** Generate all permutations of the target string $s1$ and check if each exists as a substring in $s2$.
*   **Complexity:** $O(n! \cdot m)$, where $n$ is the length of $s1$ and $m$ is the length of $s2$.

**Optimal Approach:** Use a fixed-size sliding window of length $n$ on $s2$. Maintain a frequency map (or array of size 26) of characters in $s1$ and the current window, comparing them to verify a match.
*   **Time Complexity:** $O(m)$, as we traverse $s2$ once with constant-time window updates.
*   **Space Complexity:** $O(1)$, since the frequency array size is bounded by the alphabet (26).

**The 'Aha' Moment:** The requirement to find a "permutation" of a fixed-length string within another string is a signal that you only care about character counts, not order, which is the hallmark of a fixed-window frequency comparison.

**Summary:** Whenever you need to find an unordered match of a specific length, maintain a frequency count and slide it across the input to compare states in $O(1)$ per step.

---