---
title: "Maximum Product Subarray"
slug: maximum-product-subarray
date: "2026-04-18"
---

# My Solution
~~~cpp
class Solution {
public:
    int maxProduct(vector<int>& nums) {
        int n = nums.size();
        
        int maxProd = nums[0];
        int minProd = nums[0];
        int ans = nums[0];

        for (int i = 1; i < n; i++) {
            if (nums[i] < 0) {
                swap(maxProd, minProd);
            }

            maxProd = max(nums[i], maxProd * nums[i]);
            minProd = min(nums[i], minProd * nums[i]);

            ans = max(ans, maxProd);
        }

        return ans;
    }
};
~~~

# Submission Review
## Approach
- **Technique**: Dynamic Programming. It tracks both the maximum and minimum product ending at the current position to handle the sign-flip property of negative numbers.
- **Optimality**: Optimal. It solves the problem in a single pass without redundant calculations.

## Complexity
- **Time Complexity**: $O(n)$, where $n$ is the size of the input vector.
- **Space Complexity**: $O(1)$, as it only uses three integer variables regardless of input size.

## Efficiency Feedback
- **Runtime**: Highly efficient. The use of `std::swap` and `std::max`/`std::min` ensures minimal overhead per element.
- **Memory**: Optimal. No additional data structures are allocated.

## Code Quality
- **Readability**: Good. The logic is concise and follows the standard implementation for this problem.
- **Structure**: Good. The single-loop structure is clean and easy to follow.
- **Naming**: Good. Variable names (`maxProd`, `minProd`, `ans`) clearly describe their purpose.
- **Improvements**: No significant improvements needed; the implementation is idiomatic and correct.

---

# Question Revision
### Maximum Product Subarray

**Pattern:** Dynamic Programming (Kadane's Variation)

**Brute Force:**
Calculate the product of every possible contiguous subarray using nested loops.
- **Time:** $O(n^2)$
- **Space:** $O(1)$

**Optimal Approach:**
Maintain two variables, `max_so_far` and `min_so_far`, to track the maximum and minimum products ending at the current position. Since a negative number multiplied by another negative number becomes positive, the `min_so_far` can potentially become the new `max_so_far`. At each step, update both by comparing the current element, the product with the previous max, and the product with the previous min.
- **Time:** $O(n)$
- **Space:** $O(1)$

**The 'Aha' Moment:**
The potential for a large negative number to suddenly become a large positive number upon hitting another negative sign necessitates tracking the minimum product alongside the maximum.

**Summary:**
Track both the current maximum and minimum products to capture the "sign-flip" effect of negative integers.

---