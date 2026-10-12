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
        vector<int>a={-1,-1};
        for(int i=0;i<n;i++){
            for(int j=0;j<n;j++){
                if(i!=j&&nums[i] + nums[j] == target
                        &&nums[i] > nums[j]){
                       int p=nums[i]*nums[j];
                    if(p>maxi){
                        maxi=p;
                        a={i,j};
                    }
                        }
            }
        }
        return a;
    }
};
~~~

# Submission Review
## Approach
- **Technique:** Brute-force nested loop (Exhaustive Search).
- **Optimality:** Not optimal. It checks every possible pair twice (permutations rather than combinations) and performs an $O(N^2)$ search where an $O(N)$ approach using a Hash Map is possible.

## Complexity
- **Time Complexity:** $O(N^2)$, where $N$ is the size of the `nums` vector.
- **Space Complexity:** $O(1)$ (excluding the output vector).
- **Bottleneck:** The nested loops iterate through all pairs regardless of whether the complementary value needed to reach the `target` has been seen.

## Efficiency Feedback
- **Redundant Iterations:** The inner loop starts from `0` instead of `i + 1`, meaning every pair is evaluated twice.
- **Inefficient Lookup:** Instead of a nested loop, a `std::unordered_map` could store the index of each number, allowing the code to find the complement (`target - nums[i]`) in constant time.
- **Integer Overflow:** The product `nums[i] * nums[j]` is stored in an `int`. If the input values are large, this will cause an integer overflow.

## Code Quality
- **Readability:** Moderate. The logic is simple, but indentation is inconsistent.
- **Structure:** Moderate. The use of `a={-1,-1}` as a sentinel value is standard for "not found" scenarios.
- **Naming:** Poor. Variable names `a`, `p`, and `maxi` are generic and lack descriptive meaning (e.g., `resultIndices`, `currentProduct`, `maxProduct`).
- **Concrete Improvements:**
    1. Change the inner loop to `for(int j = i + 1; j < n; j++)` to reduce iterations by half.
    2. Use `long long` for the product calculation to prevent overflow.
    3. Remove the `nums[i] > nums[j]` condition unless the problem specifically requires the indices to be returned in descending order of value; otherwise, it unnecessarily skips valid pairs where $nums[i] \le nums[j]$.

---

# Question Revision
# Revision Report: Maximum Product Pair With Target Sum

- **Pattern**: Two Pointers (Sorted Array)
- **Brute Force**: Use nested loops to check every possible pair $(i, j)$, verify if their sum equals the target, and maintain a running maximum of their product.
- **Optimal Approach**: 
    - Sort the array first.
    - Initialize two pointers: `left` at the start and `right` at the end.
    - While `left < right`:
        - If `sum == target`: calculate product, update max, and move both pointers inward.
        - If `sum < target`: increment `left` to increase the sum.
        - If `sum > target`: decrement `right` to decrease the sum.
    - **Time Complexity**: $O(n \log n)$ due to sorting.
    - **Space Complexity**: $O(1)$ or $O(n)$ depending on the sorting implementation.
- **The 'Aha' Moment**: The requirement to find a pair based on a specific sum in a numeric array is the classic trigger for the Two Pointers pattern.
- **Summary**: Sort the array and use two pointers to converge on the target sum, tracking the maximum product encountered.

---