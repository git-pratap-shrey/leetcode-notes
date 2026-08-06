---
title: "Count Valid Prefixes"
slug: count-valid-prefixes
date: "2026-08-01"
---

# My Solution
~~~

~~~

# Submission Review
Please provide the **Language** and the **Code** you would like me to analyze. I cannot perform a review without the implementation.

---

# Question Revision
### Count Valid Prefixes

**Pattern:** Bitmasking

**Brute Force:**
Iterate through every prefix, calculate character frequencies using a hash map, and count how many characters have odd frequencies. If the count is $\le 1$, the prefix is valid.
- **Time:** $O(n \cdot \Sigma)$ where $\Sigma$ is alphabet size.
- **Space:** $O(\Sigma)$.

**Optimal Approach:**
Use a 26-bit integer (`mask`) where the $i$-th bit represents the parity of the $i$-th character (0 for even, 1 for odd). As you traverse the string, XOR the mask with `(1 << char_index)`. A prefix is valid if the mask has at most one bit set.
- **Logic:** Check if `mask == 0` (all even) or `(mask & (mask - 1)) == 0` (exactly one odd).
- **Time:** $O(n)$
- **Space:** $O(1)$

**The 'Aha' Moment:**
The ability to rearrange a string into a palindrome depends solely on whether at most one character has an odd frequency, which maps perfectly to bit parity.

**Summary:**
Track character parity using a bitmask and validate palindromic permutations by checking for $\le 1$ set bit.

---