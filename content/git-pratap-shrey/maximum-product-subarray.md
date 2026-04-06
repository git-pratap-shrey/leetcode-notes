---
title: "Maximum Product Subarray"
slug: maximum-product-subarray
date: "2026-03-31"

---
---

# My Solution
~~~cpp
class Solution {
public:
    int maxProduct(vector<int>& nums) {
        int currMax = nums[0];
        int currMin = nums[0];
        int ans = nums[0];

        for (int i = 1; i < nums.size(); i++) {
            int num = nums[i];

            if (num < 0) {
                swap(currMax, currMin);
            }

            currMax = max(num, currMax * num);
            currMin = min(num, currMin * num);

            ans = max(ans, currMax);
        }

        return ans;
    }
};
~~~

# Submission Review
## Approach
*   **Technique:** Dynamic Programming (Kadane's algorithm variant).
*   **Optimality:** Optimal. It tracks both the maximum and minimum products ending at the current index to handle negative numbers, which effectively flips the sign of the products. This is an $O(n)$ time and $O(1)$ space solution.

## Complexity
*   **Time Complexity:** $O(n)$, where $n$ is the size of the input array. The array is traversed exactly once.
*   **Space Complexity:** $O(1)$, as it only uses a constant amount of extra space for tracking variables (`currMax`, `currMin`, `ans`).

## Efficiency Feedback
*   The logic is highly efficient; there are no unnecessary allocations or redundant operations.
*   The use of `std::swap` when `num < 0` is a clever, idiomatic way to manage the state transition without needing additional branches to track signs.

## Code Quality
*   **Readability:** Good. The logic is concise and follows the standard pattern for this problem.
*   **Structure:** Good. The loop properly handles the initialization using the first element and iterates through the rest of the array.
*   **Naming:** Good. `currMax`, `currMin`, and `ans` clearly convey their roles.
*   **Improvements:**
    *   **Input Handling:** While the constraints for this problem usually guarantee `nums.size() >= 1`, adding a check for an empty vector would be safer in production code.
    *   **Integer Overflow:** The problem statement typically uses `int`. If the product exceeds the range of a 32-bit integer, this code will overflow. Consider using `long long` for the internal calculation if the constraints allow for larger products.

---
---


# Question Revision
### Revision Report: Maximum Product Subarray

**Pattern:** Dynamic Programming (State Tracking)

**Brute Force:** 
Calculate the product of every possible subarray using nested loops.
*   **Time:** $O(n^2)$
*   **Space:** $O(1)$

**Optimal Approach:**
Maintain both a `max_so_far` and `min_so_far` at each index. Because a negative number multiplied by a negative minimum can result in a new maximum, we swap these values when encountering a negative multiplier.
*   **Time:** $O(n)$
*   **Space:** $O(1)$

**The 'Aha' Moment:**
The existence of negative numbers means the current maximum can be derived from either the previous maximum or the previous minimum, necessitating the tracking of both extremes.

**Summary:**
When maximizing a product with negative values, always track both the running maximum and the running minimum to capture potential sign-flip inversions.

---
