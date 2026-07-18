---
title: "Minimum Adjacent Swaps to Partition Array"
slug: minimum-adjacent-swaps-to-partition-array
date: "2026-07-18"
---

# My Solution
~~~cpp
class Solution {
public:
    int minAdjacentSwaps(vector<int>& nums, int a, int b) {

            const long long MOD = 1000000007;
            long long low = 0, mid = 0, high = 0, ans = 0;

            for (int x : nums) {
                if (x < a) {
                    ans = (ans + mid + high) % MOD;
                    low++;
                } else if (x <= b) {
                    ans = (ans + high) % MOD;
                    mid++;
                } else {
                    high++;
                }
            }

            return ans;
        
    }
};
~~~

# Submission Review
## Approach
*   **Technique:** Greedy counting/Single-pass counting. The code calculates the number of adjacent swaps required to partition an array into three segments (elements $< a$, $a \le x \le b$, and elements $> b$) by counting inversions between segments.
*   **Optimal:** Yes. This is an $O(N)$ approach, which is the theoretical lower bound for this problem.

## Complexity
*   **Time Complexity:** $O(N)$, where $N$ is the number of elements in `nums`. The algorithm iterates through the vector exactly once.
*   **Space Complexity:** $O(1)$, as it only uses a fixed number of counter variables.

## Efficiency Feedback
*   **Runtime:** Excellent. The single-pass approach is optimal for large inputs.
*   **Memory:** Excellent. The $O(1)$ auxiliary space is optimal.
*   **Note on Logic:** The use of `long long` and `MOD` implies this problem might involve a variation where the swap count can be very large. If the problem asks for the *exact* integer count without modulo (common in standard swap-distance problems), the `MOD` might be an incorrect constraint imposed by the user or an external requirement. Ensure the problem specifically requests the result modulo $10^9 + 7$.

## Code Quality
*   **Readability:** Good. The logic is concise and the intent is clear.
*   **Structure:** Good. The loop structure is standard and clean.
*   **Naming:** Moderate. `low`, `mid`, `high` effectively represent the counts of elements in the three partitions, though `low_count`, `mid_count`, and `high_count` would be more explicit.
*   **Concrete Improvements:**
    *   **Redundant Variables:** `mid` is initialized but not used in the `if (x < a)` block logic (only `mid` *value* is added, but the variable isn't needed for the logic itself). Actually, `mid` is used correctly to track the count of the middle segment to facilitate the swaps for elements $> b$.
    *   **Variable Scope:** The constant `MOD` is defined inside the function; if this were part of a larger class, it could be a `static constexpr`.
    *   **Algorithm Verification:** Ensure the problem definition of "partition" maintains relative order. This approach assumes you only need to swap elements to reach the sorted segment order; it ignores the relative order *within* the segments themselves, which is correct for the minimum adjacent swap problem to partition into segments.

---

# Question Revision
### Revision Report: Minimum Adjacent Swaps

**Pattern:** Greedy + Array Transformation (Inversion Counting)

**Brute Force:** 
Generate all possible permutations of the array, verify if the condition is met (e.g., $k$ elements satisfy a parity property), and track the minimum number of adjacent swaps.
*   **Complexity:** $O(n! \cdot n)$ time, $O(n)$ space.

**Optimal Approach:**
Observe that the minimum number of adjacent swaps to transform one permutation into another is equivalent to the number of **inversions** required to reach the target configuration. Identify the indices of the elements that satisfy the partition criteria and greedily map them to the first $k$ positions (or required target indices) using the relative order. Calculate the sum of distance differences between current and target indices.
*   **Complexity:** $O(n \log n)$ time (using Fenwick Tree or Merge Sort for inversions), $O(n)$ space.

**The 'Aha' Moment:**
When the problem involves "adjacent swaps" and a specific target order, it is always a hidden inversion counting problem solvable by calculating the displacement of elements relative to their required target positions.

**Summary:** 
Minimum adjacent swaps to reach a configuration is always the sum of distances between current and target indices, solvable by greedily matching elements while maintaining relative order.

---