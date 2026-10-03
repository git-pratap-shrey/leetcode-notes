---
title: "Peak Index in a Mountain Array"
slug: peak-index-in-a-mountain-array
date: "2026-09-27"
---

# My Solution
~~~cpp
class Solution {
public:

int firstsearch(vector<int>&nums , int target){
            int low =0 , high = nums.size()-1 , first =-1;
            while(low<=high){
                int mid= (low+high)/2;
                if(nums[mid]>target){
                    high = mid-1;
                }
                else if(nums[mid]<target){
                    low = mid+1;
                }
                else{
                    first = mid;
                    high = mid-1; 
                }
            }
            return first;
}
int secondsearch(vector<int>&nums , int target){
            int low = 0 , high = nums.size()-1 , second = -1;
            while(low<=high){
                int mid = (low+high)/2;
                if(nums[mid]>target){
                    high = mid-1;
                }
                else if(nums[mid]<target){
                    low = mid+1;
                }
                else{
                    second = mid;
                    low = mid+1;
                }

            }
            return second;
}
vector<int> searchRange(vector<int>& nums, int target) {
        return {firstsearch(nums,target), secondsearch(nums,target)};

        
    }
};
~~~

# Submission Review
## Approach
- **Technique:** The code implements two binary search functions (`firstsearch` and `secondsearch`) to find the first and last occurrences of a target value in a sorted array.
- **Optimality:** **Incorrect.** The code solves the "Find First and Last Position of Element in Sorted Array" problem, **not** the "Peak Index in a Mountain Array" problem. It fails to find the peak of a mountain array.

## Complexity
- **Time Complexity:** $O(\log N)$ - Performs two binary searches.
- **Space Complexity:** $O(1)$ - Uses constant extra space.

## Efficiency Feedback
- While the binary search logic for finding ranges is efficient, it is irrelevant to the assigned problem (Peak Index).
- For a mountain array peak search, only one binary search is required to find the index $i$ where `nums[i] > nums[i+1]`.

## Code Quality
- **Readability:** Moderate. The logic is clear, but the code is solving the wrong problem.
- **Structure:** Poor. The `searchRange` function is the entry point, but the problem requested a peak index (usually returning a single `int`), whereas this returns a `vector<int>`.
- **Naming:** Moderate. `firstsearch` and `secondsearch` are descriptive, but `nums` and `target` are generic.
- **Concrete Improvements:**
    1. **Logic:** Completely rewrite the logic to compare `nums[mid]` with `nums[mid + 1]` to determine if the peak is to the left or right.
    2. **Integer Overflow:** Use `int mid = low + (high - low) / 2;` instead of `(low + high) / 2` to prevent potential overflow with large arrays.
    3. **Return Type:** Change return type from `vector<int>` to `int`.

---

# Question Revision
# Revision Report: Peak Index in a Mountain Array

- **Pattern**: Binary Search (Modified)
- **Brute Force**: Linearly scan the array from left to right until `arr[i] > arr[i + 1]` is no longer true. The index `i` is the peak.
- **Optimal Approach**: 
    - Use binary search to find the peak. 
    - If `arr[mid] < arr[mid + 1]`, you are on the ascending slope; the peak must be to the right (`left = mid + 1`).
    - Otherwise, you are on the descending slope or at the peak; the peak must be at or to the left of `mid` (`right = mid`).
    - **Time Complexity**: $O(\log n)$
    - **Space Complexity**: $O(1)$
- **The 'Aha' Moment**: The array is "sorted" in two directions (increasing then decreasing), allowing me to discard half the search space by comparing an element with its neighbor.
- **Summary**: Use binary search to locate the inflection point where the slope changes from positive to negative.

---