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
        int maxp=INT_MIN;
        vector<int> ans={-1,-1};
        for(int i=0;i<nums.size()-1;i++){
            for(int j=i+1;j<nums.size();j++){
                if(nums[i]+nums[j]==target && nums[i]!=nums[j]){
                    if(nums[i]*nums[j]>maxp){
                        maxp=nums[i]*nums[j];
                        if(nums[i]>nums[j]){
                            ans[0]=i;
                              ans[1]=j;
                            
                        }
                        else{
                            ans[0]=j;
                              ans[1]=i;
                            
                        }
                        
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
- **Technique**: Brute-force nested loop (Exhaustive Search).
- **Optimality**: Not optimal. The solution checks every possible pair, whereas a hash map or two-pointer approach (on sorted data) could find pairs summing to a target more efficiently.

## Complexity
- **Time Complexity**: $O(N^2)$, where $N$ is the size of `nums`.
- **Space Complexity**: $O(1)$ (excluding the output vector).
- **Bottleneck**: The nested loop structure ensures every combination is visited, leading to quadratic growth.

## Efficiency Feedback
- **Runtime**: High for large input sizes. 
- **Optimizations**: 
    - Use a `std::unordered_map` to store visited numbers. While iterating, check if `target - nums[i]` exists in the map. This would reduce time complexity to $O(N)$.
    - The condition `nums[i] != nums[j]` may be logically incorrect depending on the problem constraints (if two different indices have the same value, they should typically be allowed).

## Code Quality
- **Readability**: Moderate. The logic is straightforward, but the indentation is inconsistent.
- **Structure**: Moderate. The nested `if` blocks are deep, making the flow harder to follow.
- **Naming**: Poor. `maxp` is vague; `ans` is generic.
- **Concrete Improvements**:
    - **Integer Overflow**: `nums[i] * nums[j]` can easily overflow a 32-bit `int`. Use `long long` for the product calculation and `maxp`.
    - **Index Logic**: The current logic assigns `ans[0]` and `ans[1]` based on the *values* of the elements (`nums[i] > nums[j]`), but stores the *indices*. This creates a confusing dependency between value magnitude and index ordering.
    - **Initialization**: `ans` is initialized to `{-1, -1}`, which is a good way to handle "not found" cases.

---

# Question Revision
# Revision Report: Maximum Product Pair With Target Sum

### Pattern
**Two Pointers** (on a sorted array)

### Brute Force
Iterate through all possible pairs $(i, j)$ using nested loops, check if their sum equals the target, and maintain a global maximum for the product.
- **Complexity:** $O(n^2)$ time, $O(1)$ space.

### Optimal Approach
1. **Sort** the input array.
2. Initialize two pointers: `left` at the start and `right` at the end.
3. While `left < right`:
    - If `sum == target`: Calculate product, update `max_product`, and move both pointers inward.
    - If `sum < target`: Increment `left` to increase the sum.
    - If `sum > target`: Decrement `right` to decrease the sum.
- **Complexity:** $O(n \log n)$ time (due to sorting), $O(1)$ space.

### The 'Aha' Moment
The requirement to find a pair with a **specific sum** in a numeric set is the classic trigger for the Two Pointers pattern.

### Summary
Sort the array and use two pointers to converge on the target sum, updating the maximum product whenever a valid pair is found.

---