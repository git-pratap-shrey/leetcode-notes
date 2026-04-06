---
title: "Find Minimum in Rotated Sorted Array"
slug: find-minimum-in-rotated-sorted-array
date: "2026-04-02"

---
---

# My Solution
~~~c
int findMin(int* nums, int numsSize) {

    int mid;
    int low=0;
    int high=numsSize-1;
    int min=nums[0];
    while(low<=high){
        mid=(low+high)/2;
        min=(nums[mid]<min)?nums[mid]:min;

        
        if(nums[low]<=nums[mid]){
            min=(nums[low]<min)?nums[low]:min;
            low=mid+1;

        }
        else{
            high=mid-1;

        }
    }
    return min;
}
~~~

# Submission Review
## Approach
*   **Technique:** Binary Search.
*   **Optimality:** Suboptimal. The logic attempts to track `min` while performing a binary search, but the branching logic is flawed for the rotated sorted array property. It fails to correctly identify the pivot point where the rotation occurs.

## Complexity
*   **Time Complexity:** $O(\log n)$.
*   **Space Complexity:** $O(1)$.
*   **Bottleneck:** The conditional logic `if(nums[low] <= nums[mid])` combined with updating `min` inside the loop causes it to potentially skip the actual minimum or check unnecessary halves, making it logically incorrect for certain rotated inputs.

## Efficiency Feedback
*   The current implementation is logically incorrect. In a rotated sorted array, if `nums[mid] > nums[high]`, the minimum is in the right half; otherwise, it is in the left half (including `mid`).
*   The `min` tracking inside the loop is redundant if the binary search boundary conditions are handled correctly.

## Code Quality
*   **Readability:** Moderate. The code is concise but the logic is confusing.
*   **Structure:** Poor. The use of a `min` variable alongside binary search logic suggests a misunderstanding of how to locate the inflection point.
*   **Naming:** Good. `low`, `high`, `mid`, and `numsSize` are standard.

### Concrete Improvements
Replace the logic with the standard approach that identifies the pivot:

```c
int findMin(int* nums, int numsSize) {
    int low = 0, high = numsSize - 1;
    
    while (low < high) {
        int mid = low + (high - low) / 2;
        if (nums[mid] > nums[high]) {
            low = mid + 1;
        } else {
            high = mid;
        }
    }
    return nums[low];
}
```
**Key fixes:** 
1. Use `low < high` to prevent infinite loops and correctly converge on the minimum.
2. Compare `nums[mid]` against `nums[high]` to determine which side of the pivot the search should continue on.
3. Remove redundant `min` comparisons.

---
---


# Question Revision
### Revision Report: Find Minimum in Rotated Sorted Array

**Pattern:** Binary Search (Modified)

**Brute Force:** 
Iterate through the entire array to find the minimum element.
*   **Time:** $O(n)$
*   **Space:** $O(1)$

**Optimal Approach:**
Use Binary Search to identify the "inflection point" where the rotation occurs. Compare the middle element `mid` with the `right` boundary:
*   If `nums[mid] > nums[right]`, the minimum is in the right half (excluding `mid`).
*   If `nums[mid] <= nums[right]`, the minimum is in the left half (including `mid`).
*   **Time:** $O(\log n)$
*   **Space:** $O(1)$

**The 'Aha' Moment:**
Whenever you see a sorted array that has been rotated, the presence of two sorted subarrays creates a condition where one half is always "unsorted" relative to the other, making binary search applicable.

**Summary:**
In a rotated sorted array, if the middle element is greater than the rightmost element, the pivot (and thus the minimum) must exist to the right of the middle.

---
