---
title: "Single Element in a Sorted Array"
slug: single-element-in-a-sorted-array

---
---

# My Solution
~~~c
int singleNonDuplicate(int* nums, int numsSize) {
    if(numsSize==1){
        return nums[0];
    }
    if(nums[0]!=nums[1]){
        return nums[0];
    }
    if(nums[numsSize-1]!=nums[numsSize-2]){
        return nums[numsSize-1];
    }

    int left=1;
    int right=numsSize-2;
    int mid;
    while(left<=right){
        mid=(left+right)/2;
        if(nums[mid]!=nums[mid-1] && nums[mid]!=nums[mid+1]){
            return nums[mid];
        }

        

        if((nums[mid]==nums[mid+1] && mid%2!=0) || (nums[mid]==nums[mid-1] && mid%2==0)){
            right=mid-1;

        }
        else{
            left=mid+1;
        }

    }
    return 0;
}
~~~

# Submission Review
## Approach
*   **Technique:** Binary Search on the index space.
*   **Optimality:** Optimal. It achieves $O(\log N)$ time complexity by leveraging the property that the single element shifts the parity of duplicate pairs.

## Complexity
*   **Time Complexity:** $O(\log N)$, where $N$ is `numsSize`.
*   **Space Complexity:** $O(1)$, as it uses a constant amount of extra space.

## Efficiency Feedback
*   **Performance:** Excellent. The logic avoids unnecessary comparisons and discards half the search space each iteration.
*   **Safety:** The initial boundary checks (`nums[0]` and `nums[numsSize-1]`) are efficient, allowing the main `while` loop to operate without complex index bounds handling for `mid-1` and `mid+1`.

## Code Quality
*   **Readability:** Good. The logic flow is straightforward and easy to follow.
*   **Structure:** Good. The separation of base cases and the main binary search loop is clean.
*   **Naming:** Moderate. `left`, `right`, and `mid` are standard; `nums` is standard.
*   **Concrete Improvements:**
    *   **Integer Overflow:** `mid = (left + right) / 2` can technically overflow for very large arrays. Use `mid = left + (right - left) / 2` instead.
    *   **Style:** The empty lines inside the `while` loop are unnecessary and disrupt readability.
    *   **Logic Refinement:** The condition `(nums[mid]==nums[mid+1] && mid%2!=0) || (nums[mid]==nums[mid-1] && mid%2==0)` can be simplified. In a properly paired sorted array, the first element of a pair always appears at an even index. If `nums[mid] == nums[mid+1]`, then `mid` must be even for the single element to be to the right; otherwise, it is to the left.

---
---


# Question Revision
### Revision Report: Single Element in a Sorted Array

**Pattern:** Binary Search (Index Manipulation)

**Brute Force:** 
Iterate through the array checking adjacent elements or use XOR to find the unique value.
*   **Time:** $O(n)$
*   **Space:** $O(1)$

**Optimal Approach:** 
Exploit the sorted property and the parity of indices. In a pair-aligned array, the first occurrence of a pair is at an even index and the second is at an odd index. By performing a binary search, compare `mid` with its neighbor; if they are equal, the "single element" must be in the side where the parity breaks (the side where the pattern of even/odd indexing is disrupted).
*   **Time:** $O(\log n)$
*   **Space:** $O(1)$

**The 'Aha' Moment:** 
The problem provides a sorted array and asks for logarithmic time, which acts as a neon sign that a binary search—specifically one comparing parity instead of direct values—is required.

**Summary:** 
When searching for a disruption in a pattern within a sorted array, use binary search to compare elements against their neighbors to determine which half is logically inconsistent.

---
