---
title: "Split Array Largest Sum"
slug: split-array-largest-sum
date: "2026-04-05"

---
---

# My Solution
~~~c
int comp(int* nums, int numsSize,int mid,int k){
    int count=1;
    int temp=mid;
    for(int i=0;i<numsSize;i++){
        
        if(mid<nums[i]){
            return k+1;
        }
        if(temp>=nums[i]){
            temp=temp-nums[i];
        }
        else{
            count++;
            temp=mid-nums[i];
        }


    }
    return count;
}

int splitArray(int* nums, int numsSize, int k) {

    int low=0;
    int high=0;
    for(int i=0;i<numsSize;i++){
        high=high+nums[i];
        low=(nums[i]>low)?nums[i]:low;
    }
    
    int ans=high;
    int count=0;
    int mid;
    while(low<=high){
        mid=(low+high)/2;
        

        count=comp(nums,numsSize,mid,k);

        if(count<=k){
            ans=mid;
            high=mid-1;
            
        }
        else{
            low=mid+1;
        }
    }

    return ans;


}
~~~

# Submission Review
## Approach
- **Technique:** Binary search on the answer space.
- **Optimality:** Optimal. The problem is a classic application of binary search where the search space is `[max(nums), sum(nums)]`.

## Complexity
- **Time Complexity:** $O(N \log(\sum nums))$, where $N$ is `numsSize`. The binary search runs $\log(\sum nums)$ iterations, and the `comp` function performs an $O(N)$ linear scan.
- **Space Complexity:** $O(1)$, as it uses a constant amount of extra space.

## Efficiency Feedback
- The logic is efficient and correctly identifies the lower bound (largest single element) and upper bound (sum of all elements).
- **Optimization:** In `comp`, the check `if(mid < nums[i])` is redundant if `low` is correctly initialized to `max(nums)`. Removing this check slightly reduces operations inside the hot loop.

## Code Quality
- **Readability:** Good. The logic is standard and easy to follow.
- **Structure:** Good. Separation of concerns between the binary search and the feasibility check (`comp`) is clear.
- **Naming:** Moderate. `comp` is a bit ambiguous; a name like `canSplit` or `isFeasible` would be more descriptive.
- **Improvements:**
    - **Integer Overflow:** In `splitArray`, `high` is calculated as `high = high + nums[i]`. If the array contains many large integers, this could overflow a 32-bit signed `int`. Use `long long` for the `high` bound and the `mid` variable calculation.
    - **Mid calculation:** Use `mid = low + (high - low) / 2` to prevent potential overflow during the addition of `low` and `high`.
    - **Variable initialization:** The variable `count` is initialized outside the loop in `splitArray`, but it is immediately overwritten by the function call. This is unnecessary.

---
---


# Question Revision
### Revision Report: Split Array Largest Sum

**Pattern:** Binary Search on Answer / Greedy

**Brute Force:** 
Generate all possible partitions of the array into $m$ subarrays using recursion and track the maximum sum for each configuration, then take the minimum of those maximums.  
*Complexity:* $O(n^m)$

**Optimal Approach:**
Binary search on the possible range of the answer: $[max(nums), sum(nums)]$. For a given `mid`, use a greedy helper function to check if the array can be partitioned into $\le m$ subarrays such that no subarray sum exceeds `mid`.  
*Complexity:* Time $O(n \cdot \log(\sum nums))$, Space $O(1)$

**The 'Aha' Moment:**
When you are asked to minimize a maximum value across partitioned segments, the answer is monotonic, allowing you to binary search the result space rather than the array indices.

**Summary:** 
Whenever a problem asks to "minimize the maximum" of grouped elements, binary search the range of possible sums and use a greedy validator to check feasibility.

---
