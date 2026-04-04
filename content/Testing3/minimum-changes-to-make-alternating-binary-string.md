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
*   **Technique:** Single-pass iteration counting mismatches against two potential target patterns ("0101..." and "1010...").
*   **Optimality:** Optimal. It visits each character exactly once and uses constant extra space.

## Complexity
*   **Time Complexity:** $O(N)$, where $N$ is the length of the string.
*   **Space Complexity:** $O(1)$, as it only uses two integer counters.

## Efficiency Feedback
*   **Performance:** Excellent. The logic is as efficient as possible for this problem, avoiding unnecessary string creation or multi-pass traversals.
*   **Optimizations:** The solution is already at the theoretical lower bound for time and space complexity. No further optimizations are required.

## Code Quality
*   **Readability:** Good. The logic is clear and follows standard conventions.
*   **Structure:** Good. The single loop handles both target patterns simultaneously, which is clean.
*   **Naming:** Moderate. `start0` and `start1` are slightly ambiguous.
    *   *Refinement:* Renaming these to `opsStartingWith0` and `opsStartingWith1` would make the intent immediately obvious to other developers.
*   **Improvements:** 
    *   The condition `if (i % 2 == 0)` inside the loop is correct. 
    *   You could theoretically simplify the logic: `start1` is simply `s.length() - start0`. While this saves one variable, it does not change the complexity class and might slightly hurt readability. Keep it as is for clarity.

---
---


# Question Revision
### Revision Report: Minimum Changes To Make Alternating Binary String

**Pattern:** Greedy / Mathematical Construction

**Brute Force:** 
Generate all possible alternating strings of length $n$ (starting with '0' or '1') and compare each character position with the input string to count mismatches. This involves generating two candidate strings and performing $O(n)$ comparisons for each.

**Optimal Approach:**
Observe that there are only two possible alternating patterns: 
1. Starting with '0': `0101...`
2. Starting with '1': `1010...`
If you count the number of mismatches for the first pattern ($count_0$), the mismatches for the second pattern ($count_1$) is simply $n - count_0$. Iterate through the string once, count mismatches against one pattern, and return $\min(count_0, n - count_0)$.
*   **Time Complexity:** $O(n)$
*   **Space Complexity:** $O(1)$

**The 'Aha' Moment:**
The problem asks for an alternating string, and since there are only two possible configurations for a given length, you don't need a complex algorithm—you only need to calculate the cost to match one pattern and derive the other mathematically.

**Summary:**
When a problem asks for an alternating sequence, remember that only two patterns exist, allowing you to compute the result for one and subtract it from the total length for the other.

---
