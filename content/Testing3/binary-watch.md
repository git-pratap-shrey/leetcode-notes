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
*   **Technique:** Brute-force simulation. The code iterates through all possible combinations of valid hours (0–11) and minutes (0–59) and checks if the total number of set bits matches the input.
*   **Optimality:** Optimal. Given the small, fixed search space ($12 \times 60 = 720$ iterations), this approach is highly efficient and clearer than backtracking or bit manipulation techniques.

## Complexity
*   **Time Complexity:** $O(1)$. While there is a nested loop, the number of iterations is constant (720).
*   **Space Complexity:** $O(1)$. The output list size is bounded by a small constant (max possible valid times), independent of any variable input size.

## Efficiency Feedback
*   **Runtime:** The performance is excellent. `Integer.bitCount()` is a highly optimized intrinsic (typically mapping to a single CPU instruction like `POPCNT`), making this approach nearly instantaneous.
*   **Memory:** Negligible. 

## Code Quality
*   **Readability:** Good. The logic is straightforward and avoids unnecessary complexity.
*   **Structure:** Good. The double-loop structure clearly maps to the domain (hours and minutes).
*   **Naming:** Good. Variable names `h`, `m`, and `ans` are standard for competitive programming within this scope.
*   **Improvements:** 
    *   The code is already idiomatic. If you wanted to avoid manual string concatenation for performance, you could use a `StringBuilder`, but for only 720 iterations, it is unnecessary. 
    *   The solution is clean and production-ready for its intended purpose.

---
---


# Question Revision
### Problem: Binary Watch

**Pattern:** Backtracking / Bit Manipulation / Brute Force

**Brute Force:** Iterate through all possible hours (0–11) and minutes (0–59). Convert each to their binary representation (popcount) and check if the total count of set bits equals the input $n$.

**Optimal Approach:** Since the total search space is extremely small (12 hours × 60 minutes = 720 states), brute force is the intended $O(1)$ solution.
*   **Time Complexity:** $O(1)$ (Fixed upper bound of 720 iterations).
*   **Space Complexity:** $O(1)$ (Fixed output buffer).

**The 'Aha' Moment:** The extremely small, fixed constraints (max 10 LEDs total) signal that iterating through all possible valid time states is more efficient than designing a complex combinatorial algorithm.

**Summary:** When the total state space is tiny and fixed, brute force is the most readable and optimal solution.

---
