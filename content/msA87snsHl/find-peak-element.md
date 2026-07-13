---
title: "Find Peak Element"
slug: find-peak-element
date: "2026-07-10"
---

# My Solution
~~~java
class Solution {
    public int findPeakElement(int[] nums) {
        int left = 0;
        int right = nums.length-1;
        int mid = 0;

        if(nums.length == 1 ){
            return 0;
        }
        while (left <= right ){
            mid = left + (right - left)/2;
            if( mid == 0 ){
                if( nums[mid] > nums[mid + 1]){
                    return mid;
                }
                else {
                    return mid + 1;
                }
            }

            if( mid == nums.length - 1 ){
                if( nums[mid] > nums[mid - 1]){
                    return mid;
                }
                else{
                    return mid - 1;
                }
            }
            if ( nums[mid - 1] > nums[mid] ){
                right = mid - 1;
            }
            else if ( nums[mid + 1] > nums[mid] ){
                left = mid + 1;
            }
            else{
                return mid;
            }
        }
        return -1;
    }
}
~~~

# Submission Review
## Approach
*   **Technique**: Binary Search.
*   **Optimality**: Optimal. The approach correctly identifies the peak by moving towards the steeper neighbor, guaranteeing logarithmic time complexity.

## Complexity
*   **Time Complexity**: $O(\log n)$, where $n$ is the number of elements in the array.
*   **Space Complexity**: $O(1)$, as it uses a constant amount of extra space.

## Efficiency Feedback
*   **Runtime**: Highly efficient. 
*   **Redundancy**: The boundary checks (`mid == 0` and `mid == nums.length - 1`) inside the `while` loop are technically unnecessary if the binary search bounds and conditions are structured slightly differently (e.g., using `left < right` and comparing `mid` with `mid + 1`). However, the current implementation is correct and efficient enough.

## Code Quality
*   **Readability**: Good. The logic flow is straightforward and easy to follow.
*   **Structure**: Moderate. The edge-case handling (boundary conditions) inside the loop adds nesting that could be simplified by shrinking the search space more cleanly.
*   **Naming**: Good. Standard naming conventions (`left`, `right`, `mid`) are used appropriately for a binary search implementation.

### Concrete Improvements
*   **Simplify Loop Logic**: You can avoid the explicit `mid == 0` and `mid == nums.length - 1` checks by using `while (left < right)`. 
    *   Compare `nums[mid]` with `nums[mid + 1]`. 
    *   If `nums[mid] < nums[mid + 1]`, a peak must exist to the right, so `left = mid + 1`. 
    *   Otherwise, a peak exists at `mid` or to the left, so `right = mid`. 
    *   This eliminates the need for manual index checks and the final `-1` return.
*   **General**: The current code returns `mid + 1` or `mid - 1` when `mid` is at the boundary; while mathematically safe for the problem constraints, the simplified logic above is more idiomatic.

---

# Question Revision
### Revision Report: Find Peak Element

**Pattern:** Binary Search (on index space)

**Brute Force:** Linear scan to find the first element where `nums[i] > nums[i+1]`.  
*   **Time:** $O(n)$  
*   **Space:** $O(1)$

**Optimal Approach:** Perform Binary Search by comparing `nums[mid]` with `nums[mid + 1]`. If `nums[mid] < nums[mid + 1]`, a peak must exist to the right (the slope is increasing). Otherwise, a peak exists at or to the left of `mid`.  
*   **Time:** $O(\log n)$  
*   **Space:** $O(1)$

**The 'Aha' Moment:** The problem guarantees that `nums[i] != nums[i+1]` and implies boundary values are $-\infty$, turning the array into a series of slopes where a peak is guaranteed to exist wherever the gradient changes from positive to negative.

**Summary:** Whenever you need to find an element based on a local property (like "greater than neighbors") in an unsorted array, use binary search to "climb" toward the peak by following the direction of the local slope.

---