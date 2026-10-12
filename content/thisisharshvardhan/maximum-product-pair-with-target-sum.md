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
        int maxi=INT_MIN;
        int a=-1;
        int b=-1;
        for(int i=0;i<n;i++){
            for(int j=0;j<n;j++){
                if(i!=j && (nums[i]+nums[j]==target) && (nums[i]>nums[j])){
                     if(nums[i] * nums[j]>maxi){
                        maxi=nums[i] * nums[j];
                        a=i;
                        b=j;
                    }
                
            }}
        }
        return {a,b};
    }
};
~~~

# Submission Review
## Approach
- **Technique**: Brute-force nested loop (Exhaustive Search).
- **Optimality**: Not optimal. It checks all possible pairs $O(N^2)$, whereas a hash map or two-pointer approach (if sorted) could reduce this to $O(N)$.

## Complexity
- **Time Complexity**: $O(N^2)$ where $N$ is the size of the input vector.
- **Space Complexity**: $O(1)$ auxiliary space (excluding the output vector).
- **Bottleneck**: The nested loop iterates through the entire array for every element, regardless of whether a valid pair has already been found or could be found more efficiently.

## Efficiency Feedback
- **Redundant Iterations**: The inner loop starts from `0` and uses `i != j`, meaning every pair $(i, j)$ is checked twice (once as $(i, j)$ and once as $(j, i)$).
- **Optimization**: 
    - Use a `std::unordered_map` to store visited numbers and their indices to find the complement (`target - nums[i]`) in $O(1)$ time.
    - If using the current approach, starting the inner loop at `j = i + 1` would halve the number of iterations.

## Code Quality
- **Readability**: Moderate. The logic is simple, but indentation is slightly inconsistent.
- **Structure**: Poor. The condition `nums[i] > nums[j]` is used to avoid duplicate pairs, but this fails if the two numbers forming the max product are equal (e.g., `nums = [5, 5], target = 10`), as the condition will never be true.
- **Naming**: Poor. `a` and `b` are non-descriptive; `firstIndex` and `secondIndex` would be clearer.
- **Concrete Improvements**:
    - Remove `nums[i] > nums[j]` to handle cases where elements in the pair are identical.
    - Change inner loop to `for(int j = i + 1; j < n; j++)` to eliminate the `i != j` check and reduce iterations.
    - Use `long long` for the product calculation to prevent integer overflow if `nums[i] * nums[j]` exceeds $2^{31}-1$.

---

# Question Revision
# Revision Report: Maximum Product Pair With Target Sum

- **Pattern**: Two Pointers / Complementary Search
- **Brute Force**: Iterate through every possible pair $(i, j)$ using nested loops. Check if $nums[i] + nums[j] == target$, and if so, track the maximum product. 
    - **Complexity**: Time: $O(n^2)$, Space: $O(1)$.
- **Optimal Approach**: Sort the array first. Initialize two pointers: one at the start (`left`) and one at the end (`right`). While `left < right`:
    1. If $sum == target$, calculate product, update max, and move both pointers.
    2. If $sum < target$, move `left` forward to increase the sum.
    3. If $sum > target$, move `right` backward to decrease the sum.
    - **Complexity**: Time: $O(n \log n)$ due to sorting, Space: $O(1)$ or $O(n)$ depending on sorting implementation.
- **The 'Aha' Moment**: The requirement to find a pair based on a specific sum in a numerical array is a classic signal for the Two Pointers technique on a sorted range.
- **Summary**: Sort the array and use two pointers to converge on the target sum while tracking the maximum product.

---