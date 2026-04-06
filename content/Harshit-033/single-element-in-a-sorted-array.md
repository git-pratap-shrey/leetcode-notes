---
title: "Single Element in a Sorted Array"
slug: single-element-in-a-sorted-array
date: "2026-04-02"

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
*   **Technique:** Binary Search on the index space to find the single element.
*   **Optimality:** Optimal. It leverages the sorted property and pair-wise structure to achieve $O(\log n)$ time complexity.

## Complexity
*   **Time Complexity:** $O(\log n)$, where $n$ is the size of the array. The search space is halved in each iteration.
*   **Space Complexity:** $O(1)$, as only a constant amount of extra space is used.

## Efficiency Feedback
*   **Runtime:** The implementation is highly efficient. The early exit conditions for boundaries handle edge cases cleanly without entering the loop, minimizing overhead.
*   **Optimization:** The parity check logic is correct. No further algorithmic improvements are necessary.

## Code Quality
*   **Readability:** Good. The logic is straightforward and easy to follow.
*   **Structure:** Good. The separation between boundary checks and the binary search loop is clear.
*   **Naming:** Moderate. `nums`, `left`, `right`, and `mid` are standard for competitive programming, though `mid` could be declared inside the loop scope to limit variable lifetime.
*   **Improvements:**
    *   **Overflow:** `mid = (left + right) / 2` can technically overflow for very large arrays. Use `mid = left + (right - left) / 2` to ensure safety.
    *   **Variable Scope:** Move the `int mid` declaration inside the `while` loop for better encapsulation.
    *   **Redundant code:** The condition `mid%2!=0` and `mid%2==0` can be simplified by checking the parity of the index where the pair starts; however, the current implementation is correct as written.

---
---


# Question Revision
### Revision Report: Single Element in a Sorted Array

**Pattern:** Binary Search (Index Manipulation)

**Brute Force:** Traverse the array and check if `arr[i] != arr[i-1]` and `arr[i] != arr[i+1]` using an $O(n)$ linear scan, or use XOR to find the unique element in $O(n)$.

**Optimal Approach:**
*   **Logic:** Leverage the property that before the single element, the first occurrence of every pair is at an even index; after it, the first occurrence shifts to an odd index. By checking the parity of the index and comparing `arr[mid]` with its neighbor, we can decide whether to move left or right.
*   **Time Complexity:** $O(\log n)$
*   **Space Complexity:** $O(1)$

**The 'Aha' Moment:** The combination of a sorted array and the requirement for $O(\log n)$ time is a definitive signal to use Binary Search, even when the data isn't a direct search for a specific value.

**Summary:** In a sorted array where pairs are "offset" by a single element, use Binary Search on index parity to identify the point where the pairing pattern breaks.

---
