---
title: "Isomorphic Strings"
slug: isomorphic-strings
date: "2026-05-07"
---

# My Solution
~~~

~~~

# Submission Review
## Approach
- **Technique**: Two-way mapping using Hash Maps (Dictionaries).
- **Optimality**: Optimal. It ensures a bijective (one-to-one) mapping between characters of the two strings in a single pass.

## Complexity
- **Time Complexity**: $O(N)$, where $N$ is the length of the strings. Each character is visited once.
- **Space Complexity**: $O(K)$, where $K$ is the size of the character set (alphabet). In the worst case, it stores every unique character from both strings.

## Efficiency Feedback
- The runtime and memory usage are minimal.
- The use of two dictionaries prevents the need for secondary checks (like searching values in a dictionary), maintaining linear time complexity.

## Code Quality
- **Readability**: Good. The logic is straightforward and easy to follow.
- **Structure**: Good. Handles the edge case of mismatched lengths immediately.
- **Naming**: Moderate. `mapST` and `mapTS` are functional, though `s_to_t` and `t_to_s` would be more idiomatic.
- **Concrete Improvements**:
    - Use `zip(s, t)` in the loop to avoid indexing overhead: `for char_s, char_t in zip(s, t):`.
    - The `if len(s) != len(t)` check is technically redundant for most LeetCode-style "Isomorphic Strings" constraints (where lengths are guaranteed equal), but it is good practice for production code.

---

# Question Revision
### Isomorphic Strings

**Pattern:** Hash Map (Bijection)

**Brute Force:** For every character in `s`, search the remainder of the string to ensure every instance of that character maps to the same character in `t`, and vice versa.

**Optimal Approach:** 
Maintain two hash maps to track the mapping from `s` to `t` and `t` to `s` simultaneously. As you iterate through the strings, verify that if a character has been mapped previously, it still maps to the same counterpart. If it hasn't been mapped, ensure the target character isn't already mapped to something else.

- **Time Complexity:** $O(n)$
- **Space Complexity:** $O(1)$ (The character set size is fixed/constant, e.g., 256 ASCII).

**The 'Aha' Moment:** The requirement for a one-to-one mapping indicates a bijection, meaning you must validate the relationship in both directions to prevent two different characters from mapping to the same target.

**Summary:** Use two maps to ensure a strict 1:1 relationship between characters of both strings.

---