---
title: "Maximum Value of an Alternating Sequence"
slug: maximum-value-of-an-alternating-sequence
date: "2026-07-18"
---

# My Solution
~~~cpp
class Solution {
public:
    long long maximumValue(int n, int s, int m) {
        if(n == 1){
            return s;
        }
        long long int answer = s;
        if((n-1) % 2 == 0){
            answer += (((n-1)/2) * (long long)(m-1)) + 1;
        }
        else{
            answer += ((((n-1)/2) * (long long)(m-1)) + m);
        }
        return answer;
    }
};
~~~

# Submission Review
## Approach
*   **Technique:** Greedy construction.
*   **Optimality:** Optimal. The logic relies on alternating between adding the maximum possible value ($m$) and subtracting the minimum possible value ($1$) to maximize the sum, provided $n > 1$.

## Complexity
*   **Time Complexity:** $O(1)$. The solution uses simple arithmetic operations.
*   **Space Complexity:** $O(1)$.

## Efficiency Feedback
*   The solution is highly efficient as it avoids iteration and uses direct mathematical formulas.
*   No further optimizations are possible.

## Code Quality
*   **Readability:** Good. The logic is straightforward and easy to follow.
*   **Structure:** Good. Simple conditional branching based on the parity of $n$.
*   **Naming:** Moderate. The variable `answer` is clear, but the logic inside the `if/else` block could be more expressive (e.g., using comments to explain why we add $m$ vs $1$).
*   **Concrete Improvements:**
    *   The `long long int` type can be simplified to `long long`.
    *   The arithmetic can be slightly simplified: `(n-1)/2` is common to both branches; the difference depends only on whether `(n-1)` is odd or even, which maps to adding either $1$ or $m$.
    *   Example simplification:
        ```cpp
        long long pairs = (n - 1) / 2;
        long long answer = s + pairs * (m - 1) + ((n - 1) % 2 == 0 ? 1 : m);
        ```

---

# Question Revision
### Revision Report: Maximum Alternating Subsequence Sum

**Pattern:** Dynamic Programming (State Machine)

**Brute Force:** Generate all possible subsequences using recursion, calculating the alternating sum for each, and returning the maximum. 
*   **Complexity:** $O(2^n)$ time, $O(n)$ space (recursion stack).

**Optimal Approach:** Use two variables to track the maximum alternating sum ending at the current index: `even` (sum ending with an addition) and `odd` (sum ending with a subtraction). For each number $x$:
*   `new_even = max(even, odd + x)`
*   `new_odd = max(odd, even - x)`
*   **Complexity:** $O(n)$ time, $O(1)$ space.

**The 'Aha' Moment:** The problem asks to optimize a process with two alternating states, which is a classic signal to use DP to track the "best result so far" for each state rather than exploring all paths.

**Summary:** Whenever a problem requires alternating between adding and subtracting elements to maximize a total, treat it as a state machine where you track the local maximum for each state transition.

---