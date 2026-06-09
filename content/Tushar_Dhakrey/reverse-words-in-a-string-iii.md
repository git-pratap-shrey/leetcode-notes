---
title: "Reverse Words in a String III"
slug: reverse-words-in-a-string-iii
date: "2026-06-09"
---

# My Solution
~~~

~~~

# Submission Review
Please provide the source code you would like me to analyze. The **Code** section of your request is currently empty, and per the system instructions, I cannot analyze generic theory or hallucinate an implementation.

---

# Question Revision
### Reverse Words in a String III

**Pattern:** Two Pointers / String Manipulation

**Brute Force:** Split the string into an array of words, reverse each string element using a built-in reverse function, and join them back together with spaces.

**Optimal Approach:**
1. Convert the string into a mutable character array.
2. Use a pointer to track the `start` of a word.
3. Iterate through the array; when a space or the end of the string is encountered, treat the range `[start, current_index - 1]` as a word.
4. Use two pointers to swap characters from the ends of that word moving inward until they meet.
5. Update `start` to `current_index + 1` and repeat.

- **Time Complexity:** $O(n)$ — Each character is visited a constant number of times.
- **Space Complexity:** $O(n)$ — Required to store the mutable character array/result string.

**The 'Aha' Moment:** The requirement to reverse segments (words) independently while preserving the overall sequence signals a need to identify boundaries and perform in-place swaps.

**Summary:** Identify word boundaries via spaces and reverse the characters within each boundary using two pointers.

---