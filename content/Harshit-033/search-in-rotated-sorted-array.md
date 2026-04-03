---
title: "Search in Rotated Sorted Array"
slug: search-in-rotated-sorted-array

---
---

# My Solution
~~~c
int search(int* nums, int numsSize, int target) {

    int mid;
    int low=0;
    int high=numsSize-1;
    while(low<=high){
        mid=(low+high)/2;
        if(nums[mid]==target) return mid;

        if(nums[low]<=nums[mid]){
            if(nums[low] <= target && target <= nums[mid]){
                high=mid-1;
            }
            else{
                low=mid+1;
            }

        }
        else{
            if(nums[mid] <= target && target <= nums[high]){
                low=mid+1;
            }
            else{
                high=mid-1;
            }

        }
    }

    return -1;
    
}
~~~

# Submission Review
## Approach
*   **Technique:** Binary Search.
*   **Optimality:** Optimal. The algorithm correctly leverages the property that at least one half of a rotated sorted array is always sorted, achieving $O(\log n)$ time complexity.

## Complexity
*   **Time Complexity:** $O(\log n)$, where $n$ is the size of the array.
*   **Space Complexity:** $O(1)$, as it uses a constant amount of extra space.

## Efficiency Feedback
*   **Integer Overflow:** The line `mid = (low + high) / 2;` can overflow if `low + high` exceeds `INT_MAX`. Use `mid = low + (high - low) / 2;` to be safe.
*   **Branching:** The logic is clean and minimizes unnecessary checks. It correctly identifies the sorted half before performing the range check.

## Code Quality
*   **Readability:** Good. The logic flow is standard and easy to follow.
*   **Structure:** Good. The use of a `while` loop with standard bounds (`low <= high`) is correct for this search problem.
*   **Naming:** Good. `low`, `high`, `mid`, and `target` follow standard conventions for binary search.
*   **Concrete Improvements:**
    *   **Overflow Protection:** Change the `mid` calculation to `low + (high - low) / 2`.
    *   **Style:** Consider adding consistent spacing around operators (e.g., `mid = (low + high) / 2` instead of `mid=(low+high)/2`) to adhere to standard C style guides. 
    *   **Consistency:** The code assumes `numsSize` is valid; adding a guard clause (e.g., `if (numsSize == 0) return -1;`) is good practice, though not strictly required if the constraints guarantee non-empty input.

---
---


# Question Revision
### Revision Report: Search in Rotated Sorted Array

**Pattern:** Modified Binary Search

**Brute Force:** Linear scan through the array to find the target.
*   **Time:** $O(n)$
*   **Space:** $O(1)$

**Optimal Approach:**
Since the array is partially sorted, at any given midpoint, at least one half of the array must be perfectly sorted. 
1. Determine which half is sorted by comparing `nums[low]` with `nums[mid]`.
2. Check if the target lies within the range of the sorted half.
3. If it does, narrow the search to that half; otherwise, discard it and search the other.
*   **Time:** $O(\log n)$
*   **Space:** $O(1)$

**The 'Aha' Moment:**
The problem implies a "sorted" structure that has been disrupted, which is a classic signal that you can still use binary search by identifying the contiguous sorted segment at each step.

**Summary:** Whenever you see a sorted array that has been rotated, remember that binary search remains valid because at least one half of your search space is always guaranteed to be monotonic.

---
