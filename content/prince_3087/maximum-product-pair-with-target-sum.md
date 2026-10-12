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
        int n = nums.size();
        int maxproduct=INT_MIN;
        vector<int>ans = {-1,-1};
        for(int i=0;i<n;i++){
            for(int j=0;j<n;j++){
                if(i!=j && nums[i]+nums[j]==target && nums[i]>nums[j]){
                    int product = nums[i]*nums[j];
                    if(product>maxproduct){
                        maxproduct=product;
                        ans={i,j};
                    }
                }
            }
        }
        return ans;
        
        
    }
};
~~~

# Submission Review
## Approach
- **Technique**: Brute Force (Nested Loops).
- **Optimality**: Not optimal. It checks every possible pair in the array, whereas a Hash Map or Two-Pointer approach (if sorted) could solve this in linear time.

## Complexity
- **Time Complexity**: $O(n^2)$ where $n$ is the size of `nums`.
- **Space Complexity**: $O(1)$ (excluding the output vector).
- **Bottleneck**: The nested loop structure causes quadratic growth, making it inefficient for large input sizes.

## Efficiency Feedback
- **Runtime**: High due to $O(n^2)$ complexity.
- **Optimizations**: 
    - Use a **Hash Map** to store seen numbers and their indices. For each element $x$, check if `target - x` exists in the map. This would reduce time complexity to $O(n)$.
    - The current `if(nums[i] > nums[j])` condition is an arbitrary constraint not mentioned in the problem name; if the goal is simply the maximum product, this might skip valid pairs where `nums[i] == nums[j]`.

## Code Quality
- **Readability**: Moderate. The logic is simple, but lack of spacing around operators (`maxproduct=product`) makes it feel cramped.
- **Structure**: Good. Basic implementation is clear.
- **Naming**: Moderate. `maxproduct` should follow camelCase (`maxProduct`) for consistency with `maxProductPair`.
- **Concrete Improvements**:
    - Change `int maxproduct` to `long long` to prevent integer overflow during multiplication.
    - Use `std::max` instead of manual `if` blocks for updating the product.
    - Fix the nested loop start index: `for(int j = i + 1; j < n; j++)` to avoid checking the same pair twice and remove the `i != j` check.

---

# Question Revision
# Revision Report: Maximum Product Pair With Target Sum

- **Pattern:** Two Pointers (Sorted Array) / Hash Map.
- **Brute Force:** Iterate through all possible pairs $(i, j)$ using nested loops, check if $nums[i] + nums[j] == target$, and track the maximum product found.
- **Optimal Approach:** 
    - Sort the array first. 
    - Initialize two pointers: `left` at the start and `right` at the end.
    - While `left < right`:
        - If `sum == target`, calculate product, update max, and move both pointers.
        - If `sum < target`, increment `left` to increase the sum.
        - If `sum > target`, decrement `right` to decrease the sum.
    - **Complexity:** Time: $O(n \log n)$ due to sorting; Space: $O(1)$ or $O(\log n)$ depending on sort implementation.
- **The 'Aha' Moment:** Whenever you need to find a pair that satisfies a specific sum in a linear dataset, think "Two Pointers" (if sorted) or "Hash Map" (if unsorted).
- **Summary:** Use the Two Pointer technique on a sorted array to efficiently converge on a target sum while maximizing the product of the pair.

---