---
title: "Sort Characters By Frequency"
slug: sort-characters-by-frequency
date: "2026-06-07"
---

# My Solution
~~~

~~~

# Submission Review
It appears you haven't provided the code for the "Sort Characters By Frequency" problem. Please paste the code, and I will provide the requested analysis immediately.

---

# Question Revision
### Revision Report: Sort Characters By Frequency

**Pattern:** Frequency Map + Bucket Sort (or Priority Queue)

**Brute Force:**
1. Count character frequencies using a hash map.
2. Store character-count pairs in a list and sort the list based on counts ($O(n \log n)$).
3. Reconstruct the string based on sorted pairs.

**Optimal Approach:**
1. Use a hash map to count character frequencies ($O(n)$).
2. Create an array of buckets where the index represents the frequency (max frequency is the string length).
3. Place characters into buckets corresponding to their frequency ($O(n)$).
4. Iterate from the end of the bucket array (highest frequency) to the start, appending characters to the result.
*   **Time Complexity:** $O(n)$
*   **Space Complexity:** $O(n)$

**The 'Aha' Moment:**
When a problem asks to order elements based on their occurrence count rather than their natural value, the frequency is essentially a fixed-range index, making Bucket Sort the most efficient alternative to comparison-based sorting.

**Summary:**
Whenever you need to sort by frequency and the possible frequencies are bounded by the input length, use a Bucket Sort approach to achieve linear time complexity.

---