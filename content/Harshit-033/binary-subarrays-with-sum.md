---
title: "Binary Subarrays With Sum"
slug: binary-subarrays-with-sum
date: "2026-04-16"
---

# My Solution
~~~cpp
class Solution {
public:
    int subsum(vector<int>& nums, int goal){
        if(goal<0) return 0;
        int left=0;
        int right=0;
        int count=0;
        int sum=0;
        while(right<nums.size()){
            sum+=nums[right];

            while(sum>goal){
                sum-=nums[left];
                left++;
            }

            count=count+(right-left+1);
            right++;
        }

        return count;
    }

    int numSubarraysWithSum(vector<int>& nums, int goal) {
        return subsum(nums,goal)-subsum(nums,goal-1);
        
    }
};
~~~

# Submission Review
## Approach
- **Technique**: Sliding Window (Two Pointers).
- **Logic**: The solution uses a helper function `subsum` to calculate the number of subarrays with a sum **at most** `goal`. The exact count for `goal` is derived using the principle: $\text{count}(\text{sum} = \text{goal}) = \text{count}(\text{sum} \le \text{goal}) - \text{count}(\text{sum} \le \text{goal} - 1)$.
- **Optimality**: Optimal. This approach avoids the $O(N^2)$ brute force and the $O(N)$ space requirement of a Hash Map (Prefix Sum) approach.

## Complexity
- **Time Complexity**: $O(N)$, where $N$ is the size of `nums`. Each element is visited at most twice (once by `right`, once by `left`) per `subsum` call.
- **Space Complexity**: $O(1)$. Only a few integer variables are used regardless of input size.

## Efficiency Feedback
- **Runtime**: Highly efficient. The sliding window ensures linear time.
- **Memory**: Minimal overhead.
- **Optimizations**: No meaningful optimizations are needed as the asymptotic complexity is already optimal.

## Code Quality
- **Readability**: Good. The logic is concise and easy to follow.
- **Structure**: Good. Separating the "at most" logic into a helper function prevents code duplication.
- **Naming**: Moderate. `subsum` is somewhat ambiguous; a name like `countAtMost` would more clearly describe the function's purpose.
- **Improvements**: 
    - Change `right < nums.size()` to `right < (int)nums.size()` or use `size_t` for indices to avoid signed/unsigned comparison warnings.
    - Use `count += (right - left + 1)` instead of `count = count + ...` for standard C++ idiom.

---

# Question Revision
### Binary Subarrays With Sum

**Pattern:** Sliding Window (Two Pointers)

**Brute Force:** Iterate through all possible subarray start and end indices, calculating the sum for each.  
**Complexity:** Time: $O(n^2)$, Space: $O(1)$.

**Optimal Approach:** 
Calculate the number of subarrays with a sum *exactly* equal to `goal` by subtracting the count of subarrays with sum $\le \text{goal} - 1$ from the count of subarrays with sum $\le \text{goal}$. A helper function `atMost(k)` uses a sliding window to maintain a running sum; whenever the sum exceeds $k$, the left pointer shrinks the window. The number of subarrays ending at the right pointer is `right - left + 1`.

**Complexity:** 
- Time: $O(n)$ (two passes over the array).
- Space: $O(1)$.

**The 'Aha' Moment:** Since the array contains only non-negative integers, the prefix sum is monotonic, allowing a sliding window to efficiently count "at most" constraints.

**Summary:** Find the exact sum by calculating the difference between two "at most" sliding window results.

---