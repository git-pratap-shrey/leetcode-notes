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
*   **Technique:** Brute-force simulation. 
*   **Optimality:** Optimal. Given the small, fixed constraints (12 hours, 60 minutes), checking every possible state is the most efficient and readable approach.

## Complexity
*   **Time Complexity:** $O(1)$ constant time (exactly $12 \times 60 = 720$ iterations).
*   **Space Complexity:** $O(1)$ constant space (storing a maximum of 720 strings).

## Efficiency Feedback
*   The approach is highly efficient for the given domain. Using `Integer.bitCount()` leverages intrinsic CPU instructions (POPCNT), making the inner check extremely fast.

## Code Quality
*   **Readability:** Good. The logic is concise and follows standard idiomatic Java.
*   **Structure:** Good. The nested loop structure cleanly represents the problem domain.
*   **Naming:** Good. `h`, `m`, and `ans` are standard, readable shorthand for this context.
*   **Concrete Improvements:** 
    *   Initialize the `ArrayList` with an initial capacity (e.g., `new ArrayList<>(16)`) to slightly reduce overhead, though this is negligible for such a small set.
    *   Consider using `String.format("%d:%02d", h, m)` for cleaner string construction, though manual concatenation (as written) is technically faster due to avoiding regex/formatting overhead in the `Formatter` class. Given the performance requirement is already satisfied, the current manual concatenation is acceptable.

---
---


# Question Revision
### Revision Report: Binary Watch

**Pattern:** Backtracking / Bit Manipulation

**Brute Force:**
Iterate through all possible combinations of hours (0–11) and minutes (0–59). For each pair, count the number of set bits (`1`s) using built-in methods (e.g., `bit_count()`) and verify if the sum matches the input `n`.

**Optimal Approach:**
Since the state space is fixed and small (10 LEDs, $2^{10} = 1024$ total combinations), we iterate through all possible values ($0 \le h < 12$, $0 \le m < 60$). 
*   **Time Complexity:** $O(1)$ (constant state space of 1024 checks).
*   **Space Complexity:** $O(1)$ (storing the results).

**The 'Aha' Moment:**
The constraint of a fixed, tiny input space ($n \le 10$) signals that brute-force simulation is not just an option, but the most efficient approach compared to complex combinatorial algorithms.

**Summary:**
When the problem space is small and finite, don't over-engineer—simple iteration over the entire state space is the fastest and cleanest solution.

---
