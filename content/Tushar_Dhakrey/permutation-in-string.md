---
title: "Permutation in String"
slug: permutation-in-string
date: "2026-06-06"
---

# My Solution
~~~

~~~

# Submission Review
## Approach
- **Technique**: Sliding Window with Frequency Arrays.
- **Optimality**: Optimal. The solution uses a fixed-size window equal to the length of `s1` and maintains character counts to identify permutations.

## Complexity
- **Time Complexity**: $O(m \cdot \Sigma)$ where $m$ is the length of `s2` and $\Sigma$ is the alphabet size (26). Since $\Sigma$ is constant, this is effectively $O(m)$.
- **Space Complexity**: $O(\Sigma)$, which is $O(1)$ as it uses two fixed-size arrays of length 26.

## Efficiency Feedback
- **Runtime**: The performance is high due to the $O(m)$ linear scan.
- **Potential Optimization**: The internal loop that compares the two arrays (`for (int k = 0; k < 26; k++)`) runs on every slide. This could be optimized to $O(1)$ per slide by maintaining a `matches` counter (an integer tracking how many characters in the current window have the exact frequency as in `s1`), reducing the total complexity to $O(m)$. However, given $\Sigma=26$, the current overhead is negligible.

## Code Quality
- **Readability**: Good. The logic is straightforward and easy to follow.
- **Structure**: Moderate. The sliding window logic is nested inside the initial character frequency check loop. This creates an unconventional control flow where the `for (int i = 0; i < 26; i++)` loop acts as a conditional trigger to start the sliding process.
- **Naming**: Good. Variables like `s1Count` and `s2Count` clearly describe their purpose.

**Concrete Improvements**:
- Flatten the structure: Perform the initial window check, then use a separate `while` or `for` loop for sliding, rather than nesting the sliding logic inside the first alphabet comparison loop.
- Use `Arrays.equals(s1Count, s2Count)` instead of the manual `for (int k = 0; k < 26; k++)` loop for better conciseness.

---

# Question Revision
### Revision Report: Permutation in String

**Pattern:** Sliding Window + Frequency Map

**Brute Force:** 
Generate all possible permutations of `s1` and check if any occur as a substring within `s2`.
*   **Complexity:** $O(n! \cdot m)$ time, where $n = \text{len}(s1)$ and $m = \text{len}(s2)$.

**Optimal Approach:** 
Maintain a frequency array (size 26) for `s1` and a sliding window of size `len(s1)` across `s2`. As the window slides, update the window's frequency array by adding the new character and removing the trailing one. If the two frequency arrays are identical at any point, a permutation exists.
*   **Time Complexity:** $O(m)$ — we traverse `s2` once; comparing arrays of size 26 is $O(1)$.
*   **Space Complexity:** $O(1)$ — the frequency arrays are fixed at 26 elements regardless of input size.

**The 'Aha' Moment:** 
The word "permutation" signals that character counts must be identical, while "string" suggests a contiguous window.

**Summary:** 
Use a fixed-size sliding window and a character frequency array to detect if any substring of `s2` is an anagram of `s1`.

---