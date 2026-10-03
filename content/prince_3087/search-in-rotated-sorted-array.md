---
title: "Search in Rotated Sorted Array"
slug: search-in-rotated-sorted-array
date: "2026-10-03"
---

# My Solution
~~~cpp
class Solution {
public:
    int findMin(vector<int>& nums) {
        int n = nums.size();
        int result = -1;
        int low = 0 ; int high = n-1;
        while(low<=high){
            int guess = (low+high)/2;
            if(nums[guess]>nums[n-1]){
                low=guess+1;
            }
            else if(nums[guess]<nums[n-1]){
                result = nums[guess];
                high = guess-1;
            }
            else if(low == high){
                result = nums[guess];
                high = guess -1;
            }
        }
        return result;
        
    }
};
~~~

# Submission Review
## Approach
- **Technique**: Binary Search.
- **Optimality**: Suboptimal/Incorrect. The logic attempts to find the minimum element in a rotated sorted array, but the problem requested is "Search in Rotated Sorted Array" (which typically requires finding a specific target value). Even for "Find Minimum," the handling of duplicate values or arrays with size 1 is fragile.

## Complexity
- **Time Complexity**: $O(\log n)$
- **Space Complexity**: $O(1)$

## Efficiency Feedback
- **Logic Error**: The code implements `findMin` instead of searching for a target value.
- **Integer Overflow**: `(low + high) / 2` can overflow for very large arrays; `low + (high - low) / 2` is preferred.
- **Edge Case**: The `else if (low == high)` block is redundant as the `while(low <= high)` and other conditions already cover the convergence of pointers.

## Code Quality
- **Readability**: Poor. The method name `findMin` contradicts the problem title "Search in Rotated Sorted Array."
- **Structure**: Moderate. Standard binary search loop, but the conditional branches are slightly disorganized.
- **Naming**: Moderate. `guess` is an unconventional name for `mid`.
- **Improvements**:
    1. **Correct the Problem**: If the goal is to search for a target, the logic must be rewritten to compare `nums[mid]` with `target` and determine which half is sorted.
    2. **Refine Conditions**: Simplify the `if/else` logic to handle the pivot point more cleanly.
    3. **Return Type**: `result` is initialized to -1, which could be a valid element in the array, leading to ambiguity.

---

# Question Revision
# Revision Report: Search in Rotated Sorted Array

- **Pattern:** Modified Binary Search
- **Brute Force:** Iterate through the entire array linearly to find the target.
    - **Time Complexity:** $O(n)$
    - **Space Complexity:** $O(1)$
- **Optimal Approach:** 
    Perform a binary search. In any rotated sorted array, at least one half (left or right) must be sorted. 
    1. Determine which half is sorted by comparing `nums[left]` with `nums[mid]`.
    2. Check if the `target` lies within the range of that sorted half.
    3. If it does, narrow the search to that half; otherwise, search the other (rotated) half.
    - **Time Complexity:** $O(\log n)$
    - **Space Complexity:** $O(1)$
- **The 'Aha' Moment:** The array is "sorted" (albeit rotated), and we need a search efficiency better than $O(n)$, which immediately points to Binary Search.
- **Summary:** Use binary search by identifying which half is monotonically increasing to decide where to discard the search space.

---