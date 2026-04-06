---
title: "Find First and Last Position of Element in Sorted Array"
slug: find-first-and-last-position-of-element-in-sorted-array
date: "2026-04-01"

---
---

# My Solution
~~~c

int* searchRange(int* nums, int numsSize, int target, int* returnSize) {
    *returnSize=2;
    int* arr = (int*)malloc(2 * sizeof(int));
    arr[0]=-1;
    arr[1]=-1;
    int low=0;
    int high=numsSize-1;
    int mid;

    //for first occurance
    while(low<=high){
        mid=(low+high)/2;
        if(nums[mid]==target){
            arr[0]=mid;
            arr[1]=mid;
            high=mid-1;

        }
        else if(nums[mid]>target){
            high=mid-1;
        }
        else{
            low=mid+1;
        }


    }
    low=0;
    high=numsSize-1;

    //for last occurance
    while(low<=high){
        mid=(low+high)/2;
        if(nums[mid]==target){
            if(arr[0]==-1){
                arr[0]=mid;
            }
            
            arr[1]=mid;
            low=mid+1;

        }
        else if(nums[mid]>target){
            high=mid-1;
        }
        else{
            low=mid+1;
        }

    }

    return arr;
    
}
~~~

# Submission Review
## Approach
*   **Technique**: Binary search.
*   **Optimal**: Yes, it performs two separate passes of binary search to find the lower and upper bounds of the target, achieving the required $O(\log n)$ time complexity.

## Complexity
*   **Time Complexity**: $O(\log n)$, where $n$ is the size of the array. Two independent binary searches are performed.
*   **Space Complexity**: $O(1)$ auxiliary space (excluding the returned array of size 2).

## Efficiency Feedback
*   **Redundancy**: The second loop contains an unnecessary check: `if(arr[0] == -1)`. Since the first loop successfully finds the lower bound (or fails to find it), the second loop's logic to find the upper bound is independent and does not require checking the state of `arr[0]`.
*   **Integer Overflow**: The expression `mid = (low + high) / 2` can overflow if `low + high` exceeds `INT_MAX`. Use `mid = low + (high - low) / 2` to prevent this.

## Code Quality
*   **Readability**: Good. The intent of each loop is clearly marked with comments.
*   **Structure**: Moderate. The logic is duplicated across two loops. This could be refactored into a helper function (e.g., `findBound(int* nums, int size, int target, bool isFirst)`) to improve maintainability.
*   **Naming**: Good. Variables like `low`, `high`, and `mid` follow standard conventions for binary search.
*   **Concrete Improvements**:
    *   **Overflow Safety**: Change `mid = (low + high) / 2` to `low + (high - low) / 2`.
    *   **Cleanup**: Remove the `if(arr[0] == -1)` check inside the second loop.
    *   **Robustness**: In a production environment, ensure that `returnSize` is handled correctly; while setting it to 2 is correct here, it is better practice to initialize it before potential error returns.

---
---


# Question Revision
### Revision Report: Find First and Last Position of Element in Sorted Array

**Pattern:** Binary Search (Modified)

**Brute Force:** 
Linear scan through the array to identify the first occurrence and continue until the element changes or the array ends.
*   **Time Complexity:** $O(n)$
*   **Space Complexity:** $O(1)$

**Optimal Approach:** 
Perform two separate binary searches: one to find the *leftmost* index by continuing to search the left half even after finding the target, and another to find the *rightmost* index by continuing to search the right half.
*   **Time Complexity:** $O(\log n)$
*   **Space Complexity:** $O(1)$

**The 'Aha' Moment:** 
The "sorted" constraint combined with a request for logarithmic performance is a clear signal to modify binary search boundaries rather than terminating upon the first match.

**Summary:** 
When asked to find boundaries in a sorted array, execute two distinct binary searches that shrink the search space toward the left and right extremes respectively.

---
