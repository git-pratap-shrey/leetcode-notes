---
title: "Squares of a Sorted Array"
slug: squares-of-a-sorted-array
date: "2026-05-31"
---

# My Solution
~~~c
/**
 * Note: The returned array must be malloced, assume caller calls free().
 */
 int compare(const void *a, const void *b) {
    return (*(int*)a - *(int*)b);
}
int* sortedSquares(int* nums, int numsSize, int* returnSize) {
    *returnSize=numsSize;
    for(int i=0;i<numsSize;i++){
        nums[i]=nums[i]*nums[i];
    }
    

    qsort(nums,numsSize,sizeof(int),compare);

    return nums;
    
}
~~~

# Submission Review
## Approach
- **Technique**: In-place transformation followed by a standard library sort (`qsort`).
- **Optimality**: **Not optimal**. The input array is already sorted; a two-pointer approach could achieve the result in linear time. Furthermore, the solution violates the memory allocation requirements.

## Complexity
- **Time Complexity**: $O(n \log n)$ due to the `qsort` call.
- **Space Complexity**: $O(1)$ additional space beyond the sorting algorithm's stack, but it fails the problem's requirement to return a `malloc`ed array.

## Efficiency Feedback
- **Bottleneck**: The $O(n \log n)$ sorting step is unnecessary. Since the input is sorted, the largest squares are guaranteed to be at either the far left (most negative) or far right (most positive) ends.
- **Optimization**: Use two pointers (one at index `0`, one at `numsSize - 1`) to fill a new array from right to left in $O(n)$ time.

## Code Quality
- **Readability**: Good. The logic is straightforward and easy to follow.
- **Structure**: **Poor**. The code modifies the input array `nums` in place and returns it. The function comment explicitly states: *"The returned array must be malloced, assume caller calls free()."* Returning the input pointer will cause a runtime error (segmentation fault) when the caller attempts to `free()` the returned pointer.
- **Naming**: Good. Variable names follow standard conventions.

**Concrete Improvements**:
1. **Fix Memory Bug**: Allocate a new array using `int* result = malloc(numsSize * sizeof(int));` and populate that instead of modifying `nums`.
2. **Algorithmic Shift**: Replace `qsort` with a two-pointer strategy to reduce time complexity to $O(n)$.
3. **Overflow Warning**: While not an issue for standard competitive programming constraints for this specific problem, `nums[i]*nums[i]` can overflow `int` if the input values are very large.

---

# Question Revision
### Squares of a Sorted Array

**Pattern:** Two Pointers

**Brute Force:** Square every element in the array and then sort the result. 
- Time: $O(n \log n)$
- Space: $O(n)$ or $O(1)$ (depending on sort implementation)

**Optimal Approach:** Since the array is sorted, the largest squared values must reside at the extreme ends (the most negative or most positive numbers). Use two pointers—one at the start and one at the end—compare their squares, place the larger value at the end of a new result array, and move the corresponding pointer inward.
- Time: $O(n)$
- Space: $O(n)$

**The 'Aha' Moment:** The largest possible squares are guaranteed to be at the boundaries of the sorted input due to negative numbers.

**Summary:** Use two pointers to pick the larger square from the ends and fill the result array from back to front.

---