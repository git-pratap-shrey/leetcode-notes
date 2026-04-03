---
title: "House Robber II"
slug: house-robber-ii

---
---

# My Solution
~~~cpp
class Solution {
public:
    int rob(vector<int>& nums) {

        if(nums.size() == 1){
            return nums[0];
        }
        if(nums.size() == 2){
            return max(nums[0], nums[1]);
        }

        int prev1 = nums[0];
        int prev2 = 0;
        int currentFrom1;

        for(int i = 1; i < nums.size() - 1; i++){
            if(prev2 + nums[i] >= prev1){
                currentFrom1 = prev2 + nums[i];
            }
            else{
                currentFrom1 = prev1;
            }

            prev2 = prev1;
            prev1 = currentFrom1;
        }


        prev1 = nums[1];
        prev2 = 0;
        int currentFrom2;

        for(int i = 2; i < nums.size(); i++){
            if(prev2 + nums[i] >= prev1){
                currentFrom2 = prev2 + nums[i];
            }
            else{
                currentFrom2 = prev1;
            }
            prev2 = prev1;
            prev1 = currentFrom2;
        }

        return max(currentFrom1, currentFrom2);
    }
};


~~~

# Submission Review
## Approach
*   **Technique:** Dynamic Programming (Space-Optimized).
*   **Optimal:** Yes. The problem is split into two linear "House Robber I" cases: robbing houses $[0, n-2]$ and $[1, n-1]$. This handles the circular constraint correctly.

## Complexity
*   **Time Complexity:** $O(n)$, as it iterates through the array twice.
*   **Space Complexity:** $O(1)$, as it only uses a few integer variables regardless of input size.

## Efficiency Feedback
*   **Performance:** Excellent. The logic avoids extra arrays/vectors, minimizing cache misses and memory allocation overhead.
*   **Optimization:** The manual `if/else` logic to calculate the max can be replaced with `std::max()`, which may allow the compiler to use conditional move instructions (`cmov`), improving performance by reducing branch mispredictions.

## Code Quality
*   **Readability:** Moderate. The code effectively duplicates the logic for the two passes, which is functional but repetitive.
*   **Structure:** Moderate. Wrapping the core DP logic into a helper function (lambda or private method) would eliminate code duplication and improve maintainability.
*   **Naming:** Good. Variable names like `prev1`, `prev2`, and `currentFrom1` are clear enough given the context.
*   **Concrete Improvements:**
    *   Refactor the DP logic into a private helper function: `int robLinear(vector<int>& nums, int start, int end)`.
    *   Use `std::max(prev1, prev2 + nums[i])` instead of the manual `if/else` block.
    *   **Edge Case:** The current logic assumes `nums.size() > 2` for the loops. While your initial `if` blocks handle size 1 and 2, verify if the loop logic holds for the general case if the constraints allow `size == 0`.

### Suggested Refactoring:
```cpp
int robHelper(vector<int>& nums, int start, int end) {
    int prev1 = 0, prev2 = 0;
    for (int i = start; i <= end; ++i) {
        int temp = prev1;
        prev1 = max(prev1, prev2 + nums[i]);
        prev2 = temp;
    }
    return prev1;
}

// Inside rob():
return max(robHelper(nums, 0, nums.size() - 2), robHelper(nums, 1, nums.size() - 1));
```

---
---


# Question Revision
### Revision Report: House Robber II

**Pattern:** Dynamic Programming (DP) with Range Constraints

**Brute Force:** 
Generate all possible non-adjacent subsets of houses, excluding combinations that include both the first and last house due to the circular constraint. 
*   **Complexity:** $O(2^n)$ time.

**Optimal Approach:**
Since the first and last houses are adjacent (circular), you cannot rob both. Split the problem into two linear "House Robber I" scenarios:
1.  Rob houses from index `0` to `n-2`.
2.  Rob houses from index `1` to `n-1`.
Take the `max` of these two linear DP results.
*   **Time Complexity:** $O(n)$
*   **Space Complexity:** $O(1)$ (using two variables to track previous maxes instead of an array).

**The 'Aha' Moment:**
The circular constraint is simply a boundary condition that forces you to break the problem into two linear sub-problems by choosing to either exclude the first house or the last house.

**Summary:**
When a circular dependency exists, decompose the problem into two overlapping linear ranges that ignore the conflicting endpoints.

---
