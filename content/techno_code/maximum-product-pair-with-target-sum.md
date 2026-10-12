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
        int n=nums.size();
        int ans=INT_MIN;
        int z=-1;
        int k=-1;
        vector<int>p;
        for(int i=0;i<n;i++){
            for(int j=0;j<n;j++){
                if(nums[i]>nums[j] && nums[i]+nums[j]==target && i!=j){
                    if(nums[i]*nums[j]>ans){
                        ans=nums[i]*nums[j];
                        z=i;
                        k=j;
                    }
                }
            }
        }
        p.push_back(z);
        p.push_back(k);
        return p;
    }
};
~~~

# Submission Review
## Approach
- **Technique**: Brute-force nested loops to check every possible pair.
- **Optimality**: Not optimal. A hash map or two-pointer approach (if sorted) would reduce the time complexity from quadratic to linear.

## Complexity
- **Time Complexity**: $O(n^2)$ due to the nested for-loops iterating over the input vector.
- **Space Complexity**: $O(1)$ (excluding the space for the returned vector).
- **Bottleneck**: The double loop redundantly checks pairs and iterates through the entire array for every element.

## Efficiency Feedback
- **Redundancy**: The inner loop starts from `0` and uses `i != j` and `nums[i] > nums[j]`. Starting the inner loop from `i + 1` would remove these checks and halve the number of iterations.
- **Overflow Risk**: `nums[i] * nums[j]` is stored in an `int` (`ans`). If the input values are large, this will cause an integer overflow.
- **Optimization**: Using a `std::unordered_map` to store visited numbers would allow finding the complement (`target - nums[i]`) in $O(1)$ time, bringing total complexity to $O(n)$.

## Code Quality
- **Readability**: Moderate. The logic is straightforward, but variable names are cryptic.
- **Structure**: Poor. The code lacks handling for cases where no pair is found (it will return `[-1, -1]`), and it uses a vector `p` where a simple `{z, k}` initializer list would suffice.
- **Naming**: Poor. `z`, `k`, and `p` are non-descriptive. `z` and `k` should be `index1` and `index2`; `p` should be `result`.
- **Improvements**:
    - Change `int ans` to `long long` to prevent overflow.
    - Use `vector<int>{z, k}` as the return statement.
    - Implement a check to handle scenarios where no pair sums to the target.

---

# Question Revision
# Revision Report: Maximum Product Pair With Target Sum

### Pattern
**Two Pointers** (Sorted Array)

### Brute Force
Iterate through every possible pair $(i, j)$ using nested loops, check if their sum equals the target, and track the maximum product found.
- **Time:** $O(n^2)$
- **Space:** $O(1)$

### Optimal Approach
1. **Sort** the input array (if not already sorted).
2. Initialize two pointers: `left` at the start and `right` at the end of the array.
3. While `left < right`:
   - If `sum == target`: Calculate product, update `max_product`, and move both pointers inward.
   - If `sum < target`: Increment `left` to increase the sum.
   - If `sum > target`: Decrement `right` to decrease the sum.
- **Time:** $O(n \log n)$ (due to sorting) or $O(n)$ if pre-sorted.
- **Space:** $O(1)$ or $O(\log n)$ depending on the sorting implementation.

### The 'Aha' Moment
The requirement to find a specific **sum** in a numeric array is a classic trigger for the Two Pointers technique to avoid nested loops.

### Summary
Use two pointers on a sorted array to find target sums in linear time, then maximize the product of those pairs.

---