---
title: "Find All Anagrams in a String"
slug: find-all-anagrams-in-a-string
date: "2026-06-09"
---

# My Solution
~~~

~~~

# Submission Review
It appears you did not include the code snippet for the "Find All Anagrams in a String" problem. Please provide the code, and I will be happy to perform the review based on your criteria.

---

# Question Revision
### Revision Report: Find All Anagrams in a String

**Pattern:** Sliding Window (Fixed Size)

**Brute Force:**
Iterate through the string with a window of size $p$, sort the substring, and compare it with the sorted string $p$. 
*   **Complexity:** $O(n \cdot m \log m)$ where $n$ is the length of string $s$ and $m$ is the length of $p$.

**Optimal Approach:**
Use a fixed-size sliding window of length $m$. Maintain a frequency map (or array of size 26) of the characters in $p$ and the current window in $s$. As the window slides, increment the count of the incoming character and decrement the count of the outgoing character. A match is found if both frequency maps are identical. 
*   **Time Complexity:** $O(n)$ because we traverse the string once.
*   **Space Complexity:** $O(1)$ since the frequency array size is capped at 26 regardless of input size.

**The 'Aha' Moment:**
Whenever you are asked to find occurrences of a permutation within a larger string, the "fixed window size" and "character frequency" requirements immediately point to a sliding window over a frequency map.

**Summary:** 
When order doesn't matter but content does, maintain a sliding frequency map to track the "budget" of characters in your window.

---