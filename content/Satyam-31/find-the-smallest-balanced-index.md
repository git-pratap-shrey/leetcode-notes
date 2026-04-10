---
title: "Find the Smallest Balanced Index"
slug: find-the-smallest-balanced-index
date: "2026-04-09"

---
---

# My Solution
~~~cpp
class Solution {
public:
    int smallestBalancedIndex(vector<int>& nums) {
        long long lsum = 0;
        for (int x : nums) lsum += x;

        long long rprod = 1;
        for (int i = nums.size() - 1; i >= 0; --i) {
            lsum -= nums[i];  
            if (lsum == rprod)  
                return i;
            if (rprod > lsum / nums[i])  
                break;

            rprod *= nums[i];  
        }

        return -1;
    }
};
~~~

# Submission Review
## Approach
*   **Technique:** Iterative calculation using prefix/suffix logic. The algorithm maintains a running sum of elements to the left (by subtracting from a total sum) and a running product of elements to the right.
*   **Optimality:** Optimal. It traverses the array once ($O(N)$), which is the theoretical lower bound.

## Complexity
*   **Time Complexity:** $O(N)$, where $N$ is the size of the array. Only two passes are performed.
*   **Space Complexity:** $O(1)$, as it uses only a few variables to store the sum and product.

## Efficiency Feedback
*   **Runtime:** Very efficient. The loop terminates early if the product exceeds the sum, preventing potential overflow and unnecessary iterations.
*   **Overflow Handling:** The check `if (rprod > lsum / nums[i])` is an excellent way to prevent integer overflow for the product calculation, ensuring the solution remains robust for large inputs without needing `__int128`.

## Code Quality
*   **Readability:** Good. The logic is concise and easy to follow.
*   **Structure:** Good. The use of a single loop to calculate suffix products and decrement the "left sum" is clever.
*   **Naming:** Moderate. `lsum` and `rprod` are descriptive enough for competitive programming, though `total_sum` or `suffix_product` would be slightly more professional.
*   **Improvements:**
    *   **Edge Case:** The logic assumes `nums[i] > 0`. If the array contains `0` or negative numbers, the overflow check `rprod > lsum / nums[i]` might trigger incorrect behavior due to division by zero or sign changes. If the constraints allow non-positive integers, you must handle those explicitly.
    *   **Initialization:** The code assumes the index $i$ corresponds to the split point where elements to the left sum to elements to the right product. Ensure the problem definition matches this specific partition (e.g., whether the index itself is included in the sum or product).

---
---


# Question Revision
### Revision Report: Find the Smallest Balanced Index

**Pattern:** Prefix Sums / Cumulative Frequency

**Brute Force:** 
For every index `i`, iterate through all elements to the left and right to compute sums.
*   **Time Complexity:** $O(n^2)$
*   **Space Complexity:** $O(1)$

**Optimal Approach:** 
1. Pre-calculate the `totalSum` of the array.
2. Iterate through the array while maintaining a `leftSum`.
3. At each index `i`, the `rightSum` is calculated as `totalSum - leftSum - arr[i]`.
4. If `leftSum == rightSum`, return `i`.
*   **Time Complexity:** $O(n)$
*   **Space Complexity:** $O(1)$

**The 'Aha' Moment:** 
Whenever you need to compare the properties of a subarray split at an arbitrary point, pre-calculating the total sum allows you to derive the right-hand side in constant time by subtracting the current prefix from the total.

**Summary:** 
Use a running prefix sum and a pre-calculated total to trade $O(n)$ space or time for $O(1)$ lookups when partition-based comparisons are required.

---
