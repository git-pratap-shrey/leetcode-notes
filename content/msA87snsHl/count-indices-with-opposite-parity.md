---
title: "Count Indices With Opposite Parity"
slug: count-indices-with-opposite-parity
date: "2026-07-07"
---

# My Solution
~~~java
class Solution {
    public int[] countOppositeParity(int[] nums) {
        int count = 0;
        for (int i = 0; i < nums.length; i++) {
            if (i == nums.length - 1) {
                nums[i] = 0;
            }
            if (nums[i] % 2 == 0) {

                count = 0;
                for (int j = i + 1; j < nums.length; j++) {
                    if (nums[j] % 2 != 0) {
                        count++;
                    }
                }
                nums[i] = count;

            } else {

                count = 0;
                for (int j = i + 1; j < nums.length; j++) {
                    if (nums[j] % 2 == 0) {
                        count++;
                    }
                }
                nums[i] = count;

            }
        }
        return nums;
    }
}
~~~

# Submission Review
## Approach
*   **Technique:** Brute-force nested iteration.
*   **Optimal:** No. The solution recalculates the count of opposite parity elements for every index using an inner loop, resulting in redundant work.

## Complexity
*   **Time Complexity:** $O(N^2)$, where $N$ is the length of `nums`. The outer loop runs $N$ times, and the inner loop runs up to $N$ times for each element.
*   **Space Complexity:** $O(1)$ (in-place modification).
*   **Bottleneck:** The nested loop structure makes it quadratically expensive. This can be optimized to $O(N)$ using a single pass (counting total even/odd numbers) or a suffix sum/prefix count approach.

## Efficiency Feedback
*   **Redundancy:** The code performs $N^2/2$ operations. For large input arrays (e.g., $N > 10^4$), this will result in Time Limit Exceeded (TLE).
*   **Optimization:** 
    1. Count total even and total odd numbers in one $O(N)$ pass.
    2. Iterate through the array once more: if the current element is even, the result is the count of odds seen *so far* (or total odds minus odds seen so far); update the count as you traverse. This reduces the problem to $O(N)$.

## Code Quality
*   **Readability:** Moderate. Logic is clear, but the implementation is verbose.
*   **Structure:** Poor. The logic is unnecessarily split into two identical code blocks inside an `if-else` statement. 
*   **Naming:** Good. `count` and `nums` are descriptive enough for this scope.
*   **Concrete Improvements:**
    *   **Logic Simplification:** Use a single loop to pre-calculate total odd/even counts. 
    *   **Bug/Logic Error:** The condition `if (i == nums.length - 1) { nums[i] = 0; }` is effectively redundant and overridden by the subsequent `if-else` blocks, which set `nums[i]` based on the inner loop.
    *   **DRY Principle:** Refactor the parity check logic to avoid duplicating the loop block.

---

# Question Revision
### Revision Report: Count Indices With Opposite Parity

**Pattern:** Iterative Traversal / Parity Checking

**Brute Force:**
Iterate through every possible pair $(i, j)$ using nested loops, checking the condition `(i < j) && (nums[i] % 2 != nums[j] % 2) && (abs(i - j) == k)`.
*   **Time Complexity:** $O(n^2)$
*   **Space Complexity:** $O(1)$

**Optimal Approach:**
Since the distance condition $|i - j| = k$ implies that for any index $j$, we only ever care about the index $i = j - k$, we can reduce the problem to a single pass. For each index $i$ starting from $k$, check if the parity of `nums[i]` differs from `nums[i - k]`.
*   **Time Complexity:** $O(n)$
*   **Space Complexity:** $O(1)$

**The 'Aha' Moment:**
When the problem defines a rigid relationship between two indices (like a fixed distance $k$), it transforms a nested search into a direct look-up of the element $k$ steps prior.

**Summary:**
Fixed-distance constraints eliminate the need for nested loops, turning range-based searches into constant-time lookups at `i - k`.

---