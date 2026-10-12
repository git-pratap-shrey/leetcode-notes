---
title: "Longest Resilient Subarray I"
slug: longest-resilient-subarray-i
date: "2026-10-10"
---

# My Solution
~~~cpp
class Solution {
public:
    int resilientSubarray(vector<int>& nums, int k) {
        int n=nums.size();
        int l=0;
        int r=0;
        int sum=0;
        int ans=1;
        while(r<n){
            if(r>0 && nums[r]%k != nums[r-1]%k){
                l=r;
                sum=0;
            }
            sum+=nums[r];
            if(sum%k == nums[l]%k){
                ans=max(ans,r-l+1);
            }
            r++;
        }
        return ans;
        
    }
};
~~~

# Submission Review
## Approach
- **Technique:** Two-pointer / Sliding Window.
- **Optimality:** **Suboptimal/Incorrect.** The logic assumes that a "resilient subarray" must consist of elements with the same remainder modulo $k$ (`nums[r]%k != nums[r-1]%k`). If the problem definition allows elements with different remainders as long as the sum condition is met, this approach fails by resetting the window too aggressively.

## Complexity
- **Time Complexity:** $O(n)$, where $n$ is the size of the input vector. The array is traversed once.
- **Space Complexity:** $O(1)$, as it only uses a few integer variables.

## Efficiency Feedback
- **Runtime:** The linear pass is efficient, but the logic is likely logically flawed for the general case of this problem.
- **Memory:** Memory usage is minimal and optimal.

## Code Quality
- **Readability:** Moderate. The logic is simple, but the lack of comments explaining the condition `sum%k == nums[l]%k` makes it hard to verify correctness without a formal specification.
- **Structure:** Good. Standard single-pass loop structure.
- **Naming:** Moderate. `l` and `r` are standard for pointers, but `sum` is slightly misleading as it represents a prefix sum within a window rather than a global total.
- **Improvements:**
    - Use `long long` for `sum` to prevent integer overflow if `nums` contains large values and $n$ is large.
    - Remove the `r > 0` check by initializing `r` and handling the first element outside the loop or refining the condition.

---

# Question Revision
# Revision Report: Longest Resilient Subarray I

- **Pattern**: Sliding Window (Two Pointers)
- **Brute Force**: Iterate through all possible subarrays $(i, j)$, check if each subarray satisfies the "resilient" condition by scanning its elements, and keep track of the maximum length.
- **Optimal Approach**: 
    - Maintain a window `[left, right]`. 
    - Expand `right` to include elements.
    - If the condition is violated (e.g., the number of elements exceeding a threshold or a specific property is lost), shrink the window from the `left` until the condition is restored.
    - **Time Complexity**: $O(n)$ — each element is visited by the two pointers at most twice.
    - **Space Complexity**: $O(1)$ or $O(k)$ depending on whether a frequency map/set is used to track the window state.
- **The 'Aha' Moment**: The requirement to find the "longest subarray" combined with a condition that remains monotonic (adding elements never makes a non-resilient array resilient) signals a Sliding Window.
- **Summary**: Use a sliding window to expand the range and shrink the left boundary whenever the resilience constraint is breached.

---