---
title: "Rearrange Array Elements by Sign"
slug: rearrange-array-elements-by-sign
date: "2026-04-11"
---

# My Solution
~~~cpp
class Solution {
public:
    vector<int> rearrangeArray(vector<int>& nums) {
        int n=nums.size();
        vector<int> ans(n,0);
        int pos=0,neg=1;
        for(int i=0;i<n;i++){
            if(nums[i]<0){
                ans[neg]=nums[i];
                neg+=2;
            }
            else{
                ans[pos]=nums[i];
                pos+=2;
            }
        }
        return ans;
    }
};
~~~

# Submission Review
## Approach
- **Technique**: Two-pointer placement using a linear scan.
- **Optimality**: Optimal. The problem requires preserving relative order and alternating signs; a single pass with a pre-allocated result array is the most efficient way to achieve this.

## Complexity
- **Time Complexity**: $O(n)$ — The array is traversed exactly once.
- **Space Complexity**: $O(n)$ — A result vector of size $n$ is allocated to store the rearranged elements.

## Efficiency Feedback
- **Runtime/Memory**: Both are optimal. The use of a pre-allocated vector `ans(n, 0)` avoids multiple reallocations that would occur with `push_back`.
- **Optimizations**: No meaningful optimizations are possible as the time and space complexities are already at their theoretical lower bounds for this problem.

## Code Quality
- **Readability**: Good. The logic is straightforward and easy to follow.
- **Structure**: Good. The implementation is concise and logically partitioned.
- **Naming**: Good. `pos` and `neg` clearly indicate the indices for positive and negative numbers.
- **Improvements**: None. The code is clean and follows competitive programming best practices for this specific task.

---

# Question Revision
### Rearrange Array Elements by Sign

**Pattern:** Two Pointers

**Brute Force:** Separate positive and negative integers into two distinct lists, then interleave them into a final result array.

**Optimal Approach:** Initialize a result array of size $n$ and two pointers: `pos = 0` and `neg = 1`. Traverse the input array once; if the element is positive, place it at `pos` and increment `pos` by 2; if negative, place it at `neg` and increment `neg` by 2.

*   **Time Complexity:** $O(n)$
*   **Space Complexity:** $O(n)$

**The 'Aha' Moment:** The requirement to preserve relative order while alternating signs suggests a direct mapping into a pre-allocated array using interleaved indices.

**Summary:** Use two pointers starting at 0 and 1 to populate a new array by jumping in steps of 2.

---