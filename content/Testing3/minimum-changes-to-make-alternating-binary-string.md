---
title: "Minimum Changes To Make Alternating Binary String"
slug: minimum-changes-to-make-alternating-binary-string

---
---

# My Solution
~~~java
class Solution {
    public int minOperations(String s) {
        int start0 = 0;
        int start1 = 0;
        
        for (int i = 0; i < s.length(); i++) {
            if (i % 2 == 0) {
                if (s.charAt(i) == '0') {
                    start1++;
                } else {
                    start0++;
                }
            } else {
                if (s.charAt(i) == '1') {
                    start1++;
                } else {
                    start0++;
                }
            }
        }
        
        return Math.min(start0, start1);
    }
}
~~~

# Submission Review
## Approach
*   **Technique:** Single-pass greedy counting.
*   **Optimality:** Optimal. The code calculates the operations required for the two possible alternating patterns ("0101..." and "1010...") simultaneously in one traversal.

## Complexity
*   **Time Complexity:** $O(n)$, where $n$ is the length of the string, as it performs a single iteration.
*   **Space Complexity:** $O(1)$, using only two integer counters regardless of input size.

## Efficiency Feedback
*   **High Efficiency:** The logic is minimal and avoids extra memory allocation (e.g., no string building or auxiliary arrays). 
*   **Optimization:** The solution is already at the theoretical lower bound for time and space. No further algorithmic improvements are possible.

## Code Quality
*   **Readability:** Good. The logic is straightforward and easy to follow.
*   **Structure:** Good. The single-loop structure is clean and efficient.
*   **Naming:** Moderate. `start0` and `start1` are descriptive enough, but `opsForStart0` and `opsForStart1` would be slightly more explicit regarding their purpose.
*   **Concrete Improvements:**
    *   The `if-else` blocks could be simplified by observing that for a pattern starting with '0', the expected character at index `i` is `(i % 2 == 0) ? '0' : '1'`. You could compare `s.charAt(i)` against this expected value to condense the logic. However, the current approach is arguably more readable for beginners.

---
---


# Question Revision
### Revision Report: Minimum Changes to Make Alternating Binary String

**Pattern:** Greedy / Iteration

**Brute Force:** 
Generate all possible alternating strings of length $n$ (starting with '0' or '1') and compare each character position with the input string $s$ to count differences. $O(n^2)$ if generating strings, or $O(n)$ if counting differences via iteration.

**Optimal Approach:**
Observe that there are only two possible alternating patterns: 
1. Starting with '0': `010101...`
2. Starting with '1': `10101...`
Since a character at index `i` in an alternating string is determined by `i % 2`, we iterate through $s$ once, counting how many characters deviate from pattern #1. The cost for pattern #2 is simply $n - (\text{count of pattern #1})$.
*   **Time Complexity:** $O(n)$
*   **Space Complexity:** $O(1)$

**The 'Aha' Moment:**
The problem constraints imply the target state is strictly rigid, meaning every bit at an even index must match the starting bit, and every bit at an odd index must be its flip.

**Summary:** 
Whenever a problem requires transforming a sequence into one of two fixed target states, calculate the cost for one and derive the other as $n - \text{cost}$.

---
