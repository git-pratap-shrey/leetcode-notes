---
title: "Repeated Substring Pattern"
slug: repeated-substring-pattern
date: "2026-06-10"
---

# My Solution
~~~

~~~

# Submission Review
## Approach
- **Technique**: Brute-force divisor check. The algorithm iterates through all possible substring lengths $i$ from $1$ to $n/2$. If $i$ is a divisor of the total length $n$, it verifies if the prefix of length $i$ repeated $n/i$ times equals the original string.
- **Optimality**: Suboptimal. While it passes for typical constraints, it is less efficient than the KMP-based prefix function approach or the string doubling trick, both of which run in linear time.

## Complexity
- **Time Complexity**: $O(d(n) \cdot n)$, where $d(n)$ is the number of divisors of $n$. The loop runs $n/2$ times, but the $O(n)$ string construction and comparison only occur when $i$ is a divisor.
- **Space Complexity**: $O(n)$ to allocate the temporary string created by `s[:i] * (n // i)`.

## Efficiency Feedback
- **Bottleneck**: The string multiplication and comparison `s[:i] * (n // i) == s` create a new string of length $n$ in memory for every divisor, which is inefficient for very large strings.
- **Optimization**: Use the "String Doubling" property: if $s$ is periodic, $s$ will be found within $(s + s)$ starting at some index other than $0$ or $n$. Implementation: `return (s + s)[1:-1].find(s) != -1`. This reduces complexity to $O(n)$.

## Code Quality
- **Readability**: Good. The logic is straightforward and easy to follow.
- **Structure**: Good. The method is concise and correctly handles the boundary condition ($n // 2 + 1$).
- **Naming**: Good. Variable names `s`, `n`, and `i` are standard and appropriate for this context.
- **Improvements**: No concrete improvements needed for this specific logic, though the algorithm itself can be replaced by a more efficient one.

---

# Question Revision
### Revision Report: Repeated Substring Pattern

**Pattern:** String Manipulation / KMP (Prefix Function)

**Brute Force:** 
Iterate through all possible substring lengths $L$ that are divisors of $n$ (where $L < n$). For each $L$, check if the substring $s[0 \dots L-1]$ repeated $n/L$ times reconstructs the original string.
- **Time:** $O(n \sqrt{n})$ or $O(n \cdot \text{divisors of } n)$
- **Space:** $O(n)$

**Optimal Approach (String Doubling):**
Concatenate the string with itself ($s + s$), then remove the first and last characters of this new string. If the original string $s$ can still be found as a substring within this modified result, $s$ is composed of a repeated pattern.
- **Time:** $O(n)$
- **Space:** $O(n)$

**The 'Aha' Moment:** 
If a string is periodic, shifting it by its smallest period results in the original string, meaning $s$ must reappear within $s+s$ before the second full copy begins.

**Summary:** 
A string is periodic if it is a substring of $(s + s)[1:-1]$.

---