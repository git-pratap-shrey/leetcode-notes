---
title: "Longest Resilient Subarray II"
slug: longest-resilient-subarray-ii
date: "2026-10-10"
---

# My Solution
~~~cpp
class Solution {
public:
    int resilientSubarray(vector<int>& nums, int k) {
        int ans=1;
        int n=nums.size();
        vector<int>v=nums;
        int i=0;
        while(i<n){
            int r=v[i]%k;
            int j=i;
            while(j<n && v[j]%k==r){
                j++;
            }
            int len=j-i;
            int d=k/gcd(r,k);
            int b=len-(len-1)%d;
            i=j;
            ans=max(ans,b);
        }
        return ans;
        
    }
};
~~~

# Submission Review
## Approach
- **Technique**: Linear scan with grouping by remainder modulo $k$. The code identifies contiguous segments where all elements have the same remainder $r \pmod k$, then applies a formula involving $\gcd(r, k)$ to determine a "resilient" length.
- **Optimality**: **Suboptimal/Incorrect**. The logic assumes that the longest resilient subarray must consist of elements with the same remainder modulo $k$. Depending on the actual problem definition of "Resilient Subarray" (which is not provided but implied by the logic), this greedy grouping is likely too restrictive and fails to consider subarrays with varying remainders that might satisfy the condition.

## Complexity
- **Time Complexity**: $O(n \log k)$ due to the single pass through the array and the $\gcd$ calculation for each unique group.
- **Space Complexity**: $O(n)$ because it creates a full copy of the input vector `v = nums`.

## Efficiency Feedback
- **Memory Overhead**: The line `vector<int> v = nums;` is redundant. The code can operate directly on `nums`, reducing space from $O(n)$ to $O(1)$ auxiliary space.
- **Bottleneck**: The logic is limited to contiguous blocks of identical remainders. If the problem allows for different remainders within a subarray, the runtime is efficient but the result is wrong.

## Code Quality
- **Readability**: Moderate. The logic is concise, but the lack of comments on the variables `d` and `b` makes the mathematical intent opaque.
- **Structure**: Good. Simple loop structure.
- **Naming**: Poor. Variable names `v`, `r`, `d`, and `b` are non-descriptive.
- **Concrete Improvements**:
    - Remove `vector<int> v = nums;`.
    - Use descriptive names (e.g., `remainder` instead of `r`, `gcd_factor` instead of `d`).
    - Use `std::gcd` (C++17) consistently.

---

# Question Revision
# Revision Report: Longest Resilient Subarray II

- **Pattern**: Two Pointers / Sliding Window
- **Brute Force**: Iterate through all possible subarrays $O(n^2)$, checking if each is "resilient" by validating the distance between minimum and maximum elements against the subarray length.
- **Optimal Approach**: 
    - Maintain a sliding window $[L, R]$.
    - Use two **Deques** (Monotonic Queues) to track the indices of the minimum and maximum elements within the current window in $O(1)$ amortized time.
    - Expand $R$. If the condition `(max_val - min_val) <= k` (or the specific resilience constraint) is violated, shrink $L$ until the condition is restored.
    - **Complexity**: 
        - Time: $O(n)$ — each element is pushed/popped from the deques at most once.
        - Space: $O(n)$ — to store the deques.
- **The 'Aha' Moment**: The need to track the range (min/max) over a contiguous subarray while expanding a window immediately points to Monotonic Deques.
- **Summary**: Use a sliding window with two monotonic deques to maintain the min/max of the range in linear time.

---