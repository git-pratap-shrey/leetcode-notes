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
- **Technique:** Two-pointer placement. The code uses two indices (`pos` and `neg`) to place positive and negative integers into their respective interleaved positions in a pre-allocated result vector.
- **Optimality:** Optimal. It processes the input in a single pass and uses the minimum necessary space to store the result.

## Complexity
- **Time Complexity:** $O(n)$, where $n$ is the number of elements in `nums`. Each element is visited exactly once.
- **Space Complexity:** $O(n)$ to store the output array.

## Efficiency Feedback
- **Runtime:** Extremely efficient due to linear time complexity and minimal overhead.
- **Memory:** Optimal for this problem, as a new array is required for the rearranged elements.

## Code Quality
- **Readability:** Good. The logic is straightforward and easy to follow.
- **Structure:** Good. The function is compact and handles the logic within a single loop.
- **Naming:** Good. Variable names `pos`, `neg`, and `ans` clearly convey their purpose.
- **Improvements:** No significant improvements needed. The code is clean and performant.

---

# Question Revision
### Rearrange Array Elements by Sign

**Pattern:** Two Pointers (Index Tracking)

**Brute Force:** 
Separate positive and negative integers into two distinct lists, then merge them back into a final array by alternating between the two lists.

**Optimal Approach:** 
Initialize a result array of size $n$. Maintain two pointers: `posIndex = 0` and `negIndex = 1`. Iterate through the input array; if an element is positive, place it at `posIndex` and increment by 2; if negative, place it at `negIndex` and increment by 2.
- **Time Complexity:** $O(n)$
- **Space Complexity:** $O(n)$

**The 'Aha' Moment:** 
The requirement to preserve relative order while alternating signs suggests filling a new array using two independent pointers for even and odd indices.

**Summary:** 
Use two separate pointers starting at 0 and 1 to populate a result array in a single pass.

---