---
title: "Detect Capital"
slug: detect-capital
date: "2026-07-22"
---

# My Solution
~~~

~~~

# Submission Review
## Approach
- **Technique:** Built-in String Methods. The solution checks the three valid capitalization rules using Python's `isupper()` and `islower()` methods.
- **Optimality:** Optimal. The problem requires checking the state of every character at least once, making linear time complexity the theoretical minimum.

## Complexity
- **Time Complexity:** $O(N)$, where $N$ is the length of the word. In the worst case, the string is scanned up to three times.
- **Space Complexity:** $O(N)$ in the worst case due to the string slice `word[1:]`, which creates a new string copy in Python.

## Efficiency Feedback
- **Runtime:** Low. The use of optimized C-based built-in methods is faster than manual loop iteration in Python.
- **Memory:** The slicing operation `word[1:]` creates a copy of the string. While $O(N)$, this could be reduced to $O(1)$ by using a loop or a generator expression to check characters from index 1 onwards, though this would likely increase runtime.

## Code Quality
- **Readability:** Good. The logic maps directly to the problem requirements.
- **Structure:** Good. Simple conditional flow.
- **Naming:** Good. Follows standard conventions.
- **Improvements:**
    - The three conditions can be combined into a single return statement for conciseness:
      ```python
      return word.isupper() or word.islower() or (word[0].isupper() and word[1:].islower())
      ```

---

# Question Revision
### Detect Capital

**Pattern:** String Manipulation / Conditional Logic

**Brute Force:** 
Check three separate conditions using built-in string methods: `word.isupper()`, `word.islower()`, and `word.istitle()`.

**Optimal Approach:** 
Iterate through the string once and count the number of uppercase letters. The word is valid if:
1. Count equals the word length (All caps).
2. Count equals 0 (All lower).
3. Count equals 1 AND the first character is uppercase (Title case).

- **Time Complexity:** $O(n)$
- **Space Complexity:** $O(1)$

**The 'Aha' Moment:** 
The validity of the entire string is determined solely by the total count of uppercase letters and the case of the first character.

**Summary:** 
A string is valid if the uppercase count is either $0$, $n$, or $1$ (provided the first letter is the uppercase one).

---