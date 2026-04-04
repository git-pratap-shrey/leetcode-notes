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
*   **Optimality:** Optimal. The problem requires checking two specific patterns ("0101..." and "1010..."). Since any character at index `i` must be either the pattern character or the complement, counting the mismatches for both patterns in one pass is the most efficient approach ($O(N)$).

## Complexity
*   **Time Complexity:** $O(N)$, where $N$ is the length of the string, as it traverses the string exactly once.
*   **Space Complexity:** $O(1)$, as it only uses two integer counters regardless of input size.

## Efficiency Feedback
*   **Performance:** The runtime is as low as possible for this problem. No memory allocations occur inside the loop, making it highly efficient.
*   **Optimization:** The logic is already optimal. No further algorithmic improvements are possible.

## Code Quality
*   **Readability:** Good. The logic is straightforward and easy to follow.
*   **Structure:** Good. The use of a single loop to maintain two counters simultaneously is clean.
*   **Naming:** Good. `start0` and `start1` clearly denote the target starting characters for the two alternating patterns.
*   **Concrete Improvements:**
    *   **Minor refinement:** You can simplify the conditional logic. For instance, `if (i % 2 == (s.charAt(i) - '0'))` indicates a mismatch for the `0101...` pattern, which could reduce nested `if-else` blocks, though this is purely stylistic.
    *   **Final return:** Since `start0 + start1` will always equal the length of the string ($N$), one could technically compute `start0` and return `Math.min(start0, s.length() - start0)`, though your current implementation is equally performant and arguably clearer.

---
---


# Question Revision
### Revision Report: Minimum Changes to Make Alternating Binary String

**Pattern:** Greedy / Mathematical Observation

**Brute Force:** 
Generate every possible alternating string of length $n$ starting with '0' or '1' and compare them against the input string, counting mismatches. This results in $O(n^2)$ complexity due to string construction or redundant iterations.

**Optimal Approach:**
Since there are only two valid alternating patterns (starting with '0' or '1'), you only need to count the mismatches for both patterns in a single pass. If the number of mismatches for the '0'-start pattern is $k$, the mismatches for the '1'-start pattern is $n - k$. Return $\min(k, n - k)$.
*   **Time Complexity:** $O(n)$
*   **Space Complexity:** $O(1)$

**The 'Aha' Moment:**
Realizing that the two possible target strings are perfect inverses of each other means the cost of transforming into one is the complement of the cost of transforming into the other.

**Summary:**
When an alternating pattern is restricted to two possible states, calculate the cost for one and subtract it from the total length to find the other instantly.

---
