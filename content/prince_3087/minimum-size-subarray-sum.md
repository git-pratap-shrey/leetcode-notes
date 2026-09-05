---
title: "Minimum Size Subarray Sum"
slug: minimum-size-subarray-sum
date: "2026-08-31"
---

# My Solution
~~~cpp
class Solution {
public:
    int minSubArrayLen(int target, vector<int>& nums) {
        int low = 0;
        int high = 0;
        int sum = 0;
        int result = INT_MAX;
        while(high<nums.size()){
            sum = sum + nums[high];
            while(sum>=target){
                int length = high-low+1;
                result = min(result,length);
                sum = sum - nums[low];
                low++;
            }
            high++;
        }
        if(result == INT_MAX ){
            return 0;
        }
        else{
            return result;
        }
        
    }
};
~~~

# Submission Review
## Approach
*   **Technique:** Two-pointer (Sliding Window).
*   **Optimality:** Optimal. The algorithm maintains a window that satisfies the condition and shrinks it from the left whenever possible, ensuring each element is visited at most twice (once by `high`, once by `low`).

## Complexity
*   **Time Complexity:** $O(N)$, where $N$ is the length of `nums`. Each element is added to and removed from the sum exactly once.
*   **Space Complexity:** $O(1)$, as it only uses a few integer variables.

## Efficiency Feedback
*   **Performance:** The runtime is as efficient as possible for this problem. No further algorithmic optimization is available.
*   **Edge Cases:** The logic correctly handles the case where no valid subarray exists by returning 0 via the `result == INT_MAX` check.

## Code Quality
*   **Readability:** Good. The logic is straightforward and follows standard sliding window patterns.
*   **Structure:** Good. Clean separation of window expansion and contraction.
*   **Naming:** Good. `low`, `high`, `target`, and `result` are standard, intuitive names.
*   **Concrete Improvements:**
    *   **Return statement:** The `if-else` block can be simplified to a single line: `return (result == INT_MAX) ? 0 : result;`.
    *   **Loop readability:** Using a `for` loop for `high` is idiomatic in C++ for this pattern (i.e., `for (int high = 0; high < nums.size(); ++high)`). This encapsulates the increment logic and makes the scope of `high` clearer.
    *   **Efficiency:** The current solution is sufficient, but in some edge cases involving massive sums, `sum` should technically be `long long` to prevent potential integer overflow, although the problem constraints usually keep this within `int` limits.

---

# Question Revision
### Revision Report: Minimum Size Subarray Sum

**Pattern:** Sliding Window (Two Pointers)

**Brute Force:** Use nested loops to check every possible subarray $[i, j]$, calculate the sum, and track the minimum length where sum $\ge$ target.
*   **Time Complexity:** $O(n^2)$
*   **Space Complexity:** $O(1)$

**Optimal Approach:** Use two pointers (`left`, `right`) to define a dynamic window. Expand `right` to increase the window sum; once the target is met, contract `left` to minimize the window size while maintaining the condition.
*   **Time Complexity:** $O(n)$ (Each element is visited by `left` and `right` at most once).
*   **Space Complexity:** $O(1)$

**The 'Aha' Moment:** The problem asks for a subarray with a constraint on *contiguous* elements and a *sum* value, which implies that as you grow the window, the sum monotonically increases, allowing you to discard elements from the left once the threshold is crossed.

**Summary:** Whenever a problem requires finding a contiguous subarray that meets a cumulative condition (sum, product, or frequency), use a sliding window to achieve linear time complexity.

---