---
title: "Binary Watch"
slug: binary-watch

---
---

# My Solution
~~~java
class Solution {

    public List<String> readBinaryWatch(int turnedOn) {
        List<String> ans = new ArrayList<String>();
        for (int h = 0; h < 12; ++h) {
            for (int m = 0; m < 60; ++m) {
                if (Integer.bitCount(h) + Integer.bitCount(m) == turnedOn) {
                    ans.add(h + ":" + (m < 10 ? "0" : "") + m);
                }
            }
        }
        return ans;
    }
}
~~~

# Submission Review
## Approach
*   **Technique:** Brute-force simulation. The code iterates through all possible combinations of valid hours (0-11) and minutes (0-59).
*   **Optimality:** Optimal. Since the search space is fixed and extremely small ($12 \times 60 = 720$ iterations), this approach is highly efficient and essentially constant time.

## Complexity
*   **Time Complexity:** $O(1)$ (specifically $12 \times 60$ iterations).
*   **Space Complexity:** $O(1)$ (the output list size is bounded by the constant number of valid time combinations).

## Efficiency Feedback
*   The use of `Integer.bitCount()` is highly efficient as it typically compiles to a single hardware instruction (POPCNT) or a very fast bit-manipulation sequence.
*   No further optimizations are necessary given the fixed, small constraint space.

## Code Quality
*   **Readability:** Good. The logic is straightforward and easy to follow.
*   **Structure:** Good. Clean separation of iteration and formatting logic.
*   **Naming:** Good. Variables `h`, `m`, and `ans` are standard and appropriate for this context.
*   **Improvements:** The solution is concise and idiomatic for Java. No significant improvements are required.

---
---


# Question Revision
### Revision Report: Binary Watch (LeetCode #401)

**Pattern:** Backtracking / Bit Manipulation / Exhaustive Search

**Brute Force:**
Iterate through all possible hours ($0–11$) and minutes ($0–59$). Count the set bits (population count) for both; if the sum matches the input `turnedOn`, add the time string to the result.

**Optimal Approach:**
Since the state space is extremely small ($12 \times 60 = 720$ total combinations), iterating through all valid times is effectively $O(1)$. 
*   **Logic:** Use `Integer.bitCount()` to check if the total bits in `(hour << 6) | minute` equal `turnedOn`.
*   **Time Complexity:** $O(1)$ (constant search space).
*   **Space Complexity:** $O(1)$ (limited to the fixed result set size).

**The 'Aha' Moment:**
When the total search space is trivially small and fixed, a brute-force iteration over all possible outputs is not just acceptable—it is the most efficient and readable solution.

**Summary:** 
Don't over-engineer complex backtracking or recursion when the entire problem domain is small enough to fit inside a single loop.

---
