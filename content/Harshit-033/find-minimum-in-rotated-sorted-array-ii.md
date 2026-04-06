---
title: "Find Minimum in Rotated Sorted Array II"
slug: find-minimum-in-rotated-sorted-array-ii
date: "2026-04-03"

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

        if(nums[low]==nums[mid] && nums[mid]==nums[high]){
            low++;
            high--;
        }        
        else if(nums[low]<=nums[mid]){
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
*   **Technique:** Modified Binary Search.
*   **Correctness:** Partially incorrect. While the logic attempts to handle duplicates by shrinking the search space (`low++`, `high--`), the condition `min=(nums[mid]<min)?nums[mid]:min;` inside the loop is redundant/misleading, and the `if/else` logic is fragile for finding the absolute minimum in all edge cases. Specifically, discarding the `mid` element in the `nums[low] <= nums[mid]` branch is unsafe when `nums[low] == nums[mid]`.

## Complexity
*   **Time Complexity:** $O(N)$ in the worst case (e.g., all elements are identical), $O(\log N)$ on average.
*   **Space Complexity:** $O(1)$.
*   **Bottleneck:** The $O(N)$ worst-case occurs because the algorithm must linearly shrink the search space when `nums[low] == nums[mid] == nums[high]`.

## Efficiency Feedback
*   **Redundant Operations:** Updating `min` inside the loop is unnecessary if the binary search is structured correctly to converge on the smallest element.
*   **Logic Flaw:** When `nums[low] <= nums[mid]`, setting `low = mid + 1` assumes the minimum cannot be at `mid`. This holds only if the array is not rotated or if `nums[low] < nums[mid]`. With duplicates, this is risky. 

## Code Quality
*   **Readability:** Moderate. The logic is cluttered by the manual `min` tracking.
*   **Structure:** Moderate. The `if/else if/else` block is standard for this problem, but the conditions are slightly overlapping.
*   **Naming:** Good (standard variable names `low`, `high`, `mid`).
*   **Concrete Improvements:**
    1.  **Refactor the search:** Instead of tracking `min` manually, narrow the search space to the inflection point.
    2.  **Simplify duplicates:** When `nums[mid] == nums[high]`, simply perform `high--` rather than incrementing `low` as well, to avoid skipping potential minimums prematurely.
    3.  **Refined Logic:**
        ```c
        while (low < high) {
            mid = low + (high - low) / 2;
            if (nums[mid] > nums[high]) low = mid + 1;
            else if (nums[mid] < nums[high]) high = mid;
            else high--; // Safe to reduce high when equal
        }
        return nums[low];
        ```
    4.  **Avoid overflow:** Use `mid = low + (high - low) / 2` instead of `(low + high) / 2` to prevent integer overflow.

---
---


# Question Revision
### Revision Report: Find Minimum in Rotated Sorted Array II

**Pattern:** Binary Search (Modified)

**Brute Force:** Linear scan of the array to find the minimum element.
*   **Time Complexity:** $O(n)$
*   **Space Complexity:** $O(1)$

**Optimal Approach:** Binary Search with duplicate handling.
Compare `nums[mid]` with `nums[right]`:
1. If `nums[mid] > nums[right]`, the minimum is in the right half.
2. If `nums[mid] < nums[right]`, the minimum is in the left half (including `mid`).
3. If `nums[mid] == nums[right]`, we cannot determine the side, so decrement `right` by 1 to safely shrink the search space.
*   **Time Complexity:** $O(n)$ worst-case (due to duplicates), $O(\log n)$ average.
*   **Space Complexity:** $O(1)$

**The 'Aha' Moment:** The presence of duplicates destroys the $O(\log n)$ guarantee because `nums[mid] == nums[right]` makes it impossible to discard half the search space, forcing a linear reduction of the boundary.

**Summary:** When duplicates exist in a rotated sorted array, use binary search but shrink the search space linearly (`right--`) whenever `nums[mid]` equals `nums[right]`.

---
