---
title: "Check Good Integer"
slug: check-good-integer
date: "2026-06-14"
---

# My Solution
~~~

~~~

# Submission Review
## Approach
- **Technique**: Iterative linear scan. The code checks for adjacent duplicate characters in a string.
- **Optimality**: Optimal. Any algorithm must examine at least $N-1$ pairs of characters to guarantee no two adjacent elements are identical.

## Complexity
- **Time Complexity**: $O(T \times N)$, where $T$ is the number of test cases and $N$ is the length of the string.
- **Space Complexity**: $O(N)$ to store the input string.

## Efficiency Feedback
- **I/O Overhead**: The use of `std::endl` forces a buffer flush on every test case, which can lead to TLE (Time Limit Exceeded) in problems with a high volume of output. Replacing it with `'\n'` is recommended.
- **Fast I/O**: The code lacks `ios::sync_with_stdio(0); cin.tie(0);`, which is standard in competitive programming to reduce `cin`/`cout` latency.

## Code Quality
- **Readability**: Good. The logic is straightforward and easy to follow.
- **Structure**: Good. The logic is correctly encapsulated in a helper function (`isGood`).
- **Naming**: Good. Variable names are concise and appropriate for the context.
- **Improvements**:
    - Replace `endl` with `'\n'`.
    - Pass the string by constant reference (`const string& s`) in `isGood` to avoid unnecessary copying of the string object.

---

# Question Revision
### Revision Report: Check Good Integer

**Pattern**: String Validation / Uniqueness

**Brute Force**: Iterate through the entire string and store all characters in a set, then check if the set size is exactly 1.

**Optimal Approach**: Compare every character in the string to the first character. If any character differs, return `false` immediately.
- **Time Complexity**: $O(n)$
- **Space Complexity**: $O(1)$

**The 'Aha' Moment**: The requirement "all digits are the same" means the first digit is the only reference needed to validate the entire string.

**Summary**: A "good" integer is one where every character matches the first character.

---