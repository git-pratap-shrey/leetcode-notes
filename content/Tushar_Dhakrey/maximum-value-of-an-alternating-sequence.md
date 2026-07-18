---
title: "Maximum Value of an Alternating Sequence"
slug: maximum-value-of-an-alternating-sequence
date: "2026-07-18"
---

# My Solution
~~~java
class Solution {
    public long maximumValue(int n, int s, int m) {
        int peaks = 0;
        if(n==1){
            return s;
        }
        else{
            peaks = n/2;
        }
        long ans = 1L*s+m;
        ans += 1L*(peaks-1)*(m-1);
        return ans;
    }
}
~~~

# Submission Review
## Approach
*   **Technique:** Greedy construction.
*   **Optimal:** No. The solution assumes a fixed pattern (alternating between $s$ and $m$) without considering the constraints of the sequence construction or the actual mathematical requirement for a "Maximum Value" (which usually implies a specific arrangement of numbers). The code treats the result as a simple linear formula based on $n/2$ without validating if the sequence logic holds.

## Complexity
*   **Time Complexity:** $O(1)$.
*   **Space Complexity:** $O(1)$.

## Efficiency Feedback
*   The logic is extremely sparse. It assumes a fixed outcome based on $n$, $s$, and $m$ without iterating or performing any algorithmic logic. 
*   Because the problem context (likely a variation of alternating sum sequences) usually involves specific constraints on array properties (like adjacent elements or bounds), a simple formula `s + (n/2 - 1) * (m - 1) + m` is almost certainly missing edge cases or failing to account for the actual constraints of the sequence.

## Code Quality
*   **Readability:** Moderate. The code is short, but the logic behind the formula `1L*(peaks-1)*(m-1)` is opaque and lacks comments explaining the derivation.
*   **Structure:** Poor. It uses an `if-else` block where a ternary operator would suffice, and the logic is monolithic inside one method.
*   **Naming:** Moderate. `peaks` is a misleading variable name; `n/2` represents a count of operations or slots, not necessarily mathematical "peaks."
*   **Improvements:** 
    *   The variable `peaks` should be renamed to something descriptive like `count`.
    *   Include documentation or a comment explaining the mathematical derivation of the formula.
    *   Verify the formula against small test cases ($n=2, 3, 4$); the current implementation likely fails to handle parity differences correctly.

---

# Question Revision
### Revision Report: Maximum Alternating Subsequence Sum

**Pattern:** Dynamic Programming (State Machine)

**Brute Force:** 
Generate all possible subsequences, calculate the alternating sum for each, and track the global maximum.
*   **Complexity:** $O(2^n)$ time, $O(n)$ space.

**Optimal Approach:**
Maintain two states as you iterate through the array: `even` (the max sum ending on an addition index) and `odd` (the max sum ending on a subtraction index). 
*   `even = max(even, odd + num)`
*   `odd = max(odd, even - num)`
*   **Time Complexity:** $O(n)$
*   **Space Complexity:** $O(1)$

**The 'Aha' Moment:**
The requirement for an "alternating" sequence implies that the optimal choice for any number depends only on the parity of the index of the previously chosen number, reducing a complex combinatorial problem to two tracked states.

**Summary:**
When a problem asks for an alternating sequence sum, track the two possible states (add vs. subtract) and update them greedily at each step.

---