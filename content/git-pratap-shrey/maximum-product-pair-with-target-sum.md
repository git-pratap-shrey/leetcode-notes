---
title: "Maximum Product Pair With Target Sum"
slug: maximum-product-pair-with-target-sum
date: "2026-10-10"
---

# My Solution
~~~cpp
class Solution {
public:
    vector<int> maxProductPair(vector<int>& nums, int target) {
        // sort(nums.begin(), nums.end());
        int max_prod = INT_MIN;
        pair<int, int> ans = {-1, -1};
        
        for(int i = 0; i < nums.size(); i++){
            for(int j = 0; j < nums.size(); j++){
                if(i == j){
                    continue;
                }
                // cout<<i<<j<<(nums[i] + nums[j])<<endl;
                if(nums[i] < nums[j] && (nums[i] + nums[j] == target)){
                     if(max_prod < nums[i] * nums[j]){
                         max_prod = nums[i] * nums[j];
                         ans = {j, i};
                     }                   
                } 
            }
        }

        return {ans.first, ans.second};
    }
};
~~~

# Submission Review
## Approach
- **Technique**: Brute-force nested loop (Double iteration).
- **Optimality**: Not optimal. It checks all possible pairs $(i, j)$ regardless of whether they sum to the target, leading to redundant calculations.

## Complexity
- **Time Complexity**: $O(N^2)$, where $N$ is the size of `nums`.
- **Space Complexity**: $O(1)$ auxiliary space.
- **Bottleneck**: The nested loop iterates $N \times N$ times. This can be reduced to $O(N)$ using a Hash Map or $O(N \log N)$ using two pointers after sorting.

## Efficiency Feedback
- **Redundant Iterations**: The inner loop starts from `0` every time. Since pairs are symmetric, starting the inner loop from `i + 1` would halve the iterations and eliminate the need for `if(i == j)`.
- **Integer Overflow**: `nums[i] * nums[j]` is stored in an `int` (`max_prod`). If the input values are large, this will cause an integer overflow.
- **Unnecessary Logic**: The condition `nums[i] < nums[j]` is used to avoid duplicates, but it prevents the code from finding a pair where both numbers are equal (e.g., `target = 4`, `nums = {2, 2}`).

## Code Quality
- **Readability**: Moderate. Contains commented-out code (`sort`, `cout`) which should be removed in production.
- **Structure**: Moderate. The logic is simple, but the condition `nums[i] < nums[j]` introduces a logical bug regarding equal elements.
- **Naming**: Good. `max_prod`, `ans`, and `nums` are clear.

**Concrete Improvements**:
1. Change the inner loop to `for(int j = i + 1; j < nums.size(); j++)`.
2. Replace `nums[i] < nums[j]` with simple sum verification to handle cases where `nums[i] == nums[j]`.
3. Use `long long` for `max_prod` to prevent overflow.
4. Use a `std::unordered_map` to find the complement (`target - nums[i]`) in one pass for $O(N)$ complexity.

---

# Question Revision
# Revision Report: Maximum Product Pair With Target Sum

- **Pattern**: Two Pointers (on Sorted Array)
- **Brute Force**: Use nested loops to check every possible pair $(i, j)$, verify if their sum equals the target, and keep track of the maximum product found.
- **Optimal Approach**: 
    - Sort the array first.
    - Initialize two pointers: `left` at the start and `right` at the end.
    - While `left < right`:
        - If `sum == target`: Update max product and move both pointers.
        - If `sum < target`: Increment `left` to increase the sum.
        - If `sum > target`: Decrement `right` to decrease the sum.
    - **Complexity**: 
        - Time: $O(n \log n)$ due to sorting.
        - Space: $O(1)$ or $O(n)$ depending on the sorting implementation.
- **The 'Aha' Moment**: The requirement to find a pair with a specific sum in a numerical array is the classic trigger for the Two Pointers technique on a sorted sequence.
- **Summary**: Sort the array and use two pointers to converge on the target sum while maximizing the product.

---