---
title: "Find Peak Element"
slug: find-peak-element
date: "2026-04-03"

---
---

# My Solution
~~~c
int findPeakElement(int* nums, int numsSize) {
    if(numsSize==1){
        return 0;
    }
    if(nums[0]>nums[1]){
        return 0;
    }
    if(nums[numsSize-1]>nums[numsSize-2]){
        return numsSize-1;
    }
    
    int mid;
    int low=1;
    int high=numsSize-2;

    while(low<=high){
        mid=(low+high)/2;
        if(nums[mid]>nums[mid-1] && nums[mid]>nums[mid+1]) return mid;

        if(nums[mid]>nums[mid-1]){
            low=mid+1;
        }
        else if(nums[mid]>nums[mid+1]){
            high=mid-1;
        }
        else if(nums[mid+1]>nums[mid-1]){
            low=mid+1;
        }
        else{
            high=mid-1;
        }
    }

    return 0;
    

    
}
~~~

# Submission Review
## Approach
*   **Technique:** Binary Search.
*   **Optimality:** Optimal. It effectively leverages the property that an ascending slope must eventually lead to a peak, achieving $O(\log n)$ time complexity.

## Complexity
*   **Time Complexity:** $O(\log n)$, where $n$ is the number of elements. Each iteration halves the search space.
*   **Space Complexity:** $O(1)$, as it uses only a few integer variables regardless of input size.

## Efficiency Feedback
*   **Runtime:** High efficiency. The logic correctly narrows down the search space based on the local gradient.
*   **Optimization:** The `else if` chains are slightly redundant. Since you know a peak must exist if `nums[mid] < nums[mid+1]`, you can simplify the logic to just two branches: if `nums[mid] < nums[mid+1]`, move `low` to `mid + 1`, otherwise move `high` to `mid`.

## Code Quality
*   **Readability:** Moderate. The logic inside the `while` loop is a bit verbose, making the core decision-making process harder to parse at a glance.
*   **Structure:** Good. Edge cases for the start and end of the array are handled correctly before entering the loop.
*   **Naming:** Good. Variable names (`low`, `high`, `mid`) follow standard binary search conventions.
*   **Concrete Improvements:**
    *   **Overflow Protection:** Use `mid = low + (high - low) / 2` instead of `(low + high) / 2` to prevent potential integer overflow for extremely large arrays.
    *   **Simplification:** The four-way `if-else` block can be collapsed:
        ```c
        if (nums[mid] < nums[mid + 1]) {
            low = mid + 1;
        } else {
            high = mid; // Can include mid in the search space
        }
        ```
    *   **Dead Code:** The final `return 0;` is unreachable given the problem constraints (a peak always exists), but it is fine to keep for compiler safety.

---
---


# Question Revision
### Revision Report: Find Peak Element

**Pattern:** Binary Search (on index space)

**Brute Force:** Linear scan to find the first element where `nums[i] > nums[i+1]`.
*   **Time:** $O(n)$
*   **Space:** $O(1)$

**Optimal Approach:** Use binary search to compare `mid` with `mid + 1`. If `nums[mid] < nums[mid + 1]`, a peak must exist to the right (ascending slope); otherwise, a peak exists at or to the left.
*   **Time:** $O(\log n)$
*   **Space:** $O(1)$

**The 'Aha' Moment:** The problem guarantees that `nums[-1]` and `nums[n]` are negative infinity, implying that if you move in the direction of an increasing neighbor, you are guaranteed to eventually hit a peak.

**Summary:** Whenever you are asked to find a local extremum in an unsorted array where you only need to compare local neighbors, treat the array as a slope and use binary search to climb toward the peak.

---
