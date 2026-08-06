---
title: "Detect Capital"
slug: detect-capital
date: "2026-08-01"
---

# My Solution
~~~

~~~

# Submission Review
## Approach
- **Technique**: Built-in string method validation.
- **Optimality**: Optimal. The solution directly checks the three valid capitalization rules defined by the problem using Python's native string utilities.

## Complexity
- **Time Complexity**: $O(N)$, where $N$ is the length of the word. In the worst case, the code performs three linear scans of the string.
- **Space Complexity**: $O(N)$ in Python, specifically due to the slicing operation `word[1:]`, which creates a new string copy.

## Efficiency Feedback
- The runtime is efficient as it leverages optimized C-implementation of `.isupper()` and `.islower()`.
- **Minor Optimization**: To achieve $O(1)$ auxiliary space, one could avoid slicing by using a loop or checking indices, though for standard competitive programming constraints on "words," the current approach is acceptable.

## Code Quality
- **Readability**: Good. The logic is explicit and mirrors the problem requirements.
- **Structure**: Good. Simple conditional flow.
- **Naming**: Good. Uses the provided method signature.
- **Concrete Improvements**: 
    - The logic can be condensed into a single boolean expression for brevity:
      ```python
      return word.isupper() or word.islower() or (word[0].isupper() and word[1:].islower())
      ```

---

# Question Revision
### Detect Capital

**Pattern:** String Validation / Counting

**Brute Force:** Iterate through the string three separate times to check if it satisfies each rule (all upper, all lower, or first-letter-only upper) individually.

**Optimal Approach:** 
Count the total number of uppercase characters in the string.
- If `count == 0`: All lowercase $\rightarrow$ True.
- If `count == n`: All uppercase $\rightarrow$ True.
- If `count == 1` and `word[0]` is uppercase: Only first letter uppercase $\rightarrow$ True.
- Otherwise $\rightarrow$ False.

**Complexity:**
- Time: $O(n)$
- Space: $O(1)$

**The 'Aha' Moment:** The validity of the word depends entirely on the *total count* of uppercase letters and whether the first letter is one of them.

**Summary:** A word is valid if capitals are either absent, omnipresent, or strictly limited to the first index.

---