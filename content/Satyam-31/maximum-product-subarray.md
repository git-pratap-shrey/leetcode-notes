---
title: "Maximum Product Subarray"
slug: maximum-product-subarray
date: "2026-04-08"

---
---

# My Solution
~~~cpp
class Solution {
public:
    int maxProduct(vector<int>& nums) {
        int maxp = nums[0], minp = nums[0], ans = nums[0];

        for(int i = 1; i < nums.size(); i++){
            if(nums[i] < 0){
                swap(maxp, minp);
            }

            maxp = max(nums[i], maxp * nums[i]);
            minp = min(nums[i], minp * nums[i]);

            ans = max(ans, maxp);   
        }

        return ans;
    }
};
~~~

# Submission Review
## Approach
*   **Technique:** Greedy/Dynamic Programming (Tracking local min and max).
*   **Optimality:** Optimal. It performs a single pass through the array, maintaining only the necessary state variables ($O(1)$ extra space).

## Complexity
*   **Time Complexity:** $O(n)$, where $n$ is the size of `nums`. Every element is visited exactly once.
*   **Space Complexity:** $O(1)$, as only three integer variables are used regardless of input size.

## Efficiency Feedback
*   **Runtime:** Highly efficient. The algorithm avoids extra memory allocations and avoids the $O(n^2)$ overhead of a nested loop approach.
*   **Potential Bottlenecks:** None. The use of `std::swap` and primitive operations is as efficient as possible for this logic.

## Code Quality
*   **Readability:** Good. The logic is concise and follows a standard pattern for the "Maximum Product Subarray" problem.
*   **Structure:** Good. The initialization and loop structure correctly handle edge cases (like arrays with a single element).
*   **Naming:** Good. `maxp`, `minp`, and `ans` are standard and convey their purpose effectively within this context.
*   **Concrete Improvements:**
    *   **Input Validation:** While the problem constraints typically imply non-empty vectors, adding a check for `nums.empty()` (though not strictly required by most competitive programming judges) would make the function more robust.
    *   **Integer Overflow:** Be aware that for very large arrays or specific constraints, `maxp * nums[i]` could overflow `int`. Depending on problem constraints, using `long long` for the product variables might be safer.

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
Track both the `max_so_far` and `min_so_far` at each index. Because a negative number multiplied by a minimum (most negative) product can result in a new maximum, swapping these values when encountering a negative number allows us to carry forward both extreme potentials.
*   **Time:** $O(n)$
*   **Space:** $O(1)$

**The 'Aha' Moment:** 
The presence of negative numbers turns the "maximum" problem into a dual-tracking problem because the smallest negative value has the potential to become the largest positive value upon another multiplication.

**Summary:** 
When products involve negative numbers, maintain both a `current_min` and `current_max` because the smallest value can become the largest with a single sign flip.

---
