---
title: "Search in Rotated Sorted Array II"
slug: search-in-rotated-sorted-array-ii

---
---

# My Solution
~~~c
bool search(int* nums, int numsSize, int target) {
    int mid;
    int low=0;
    int high=numsSize-1;
    while(low<=high){
        mid=(low+high)/2;
        if(nums[mid]==target) return true;

        if(nums[low]==nums[mid] && nums[mid]==nums[high]){
            low=low+1;
            high=high-1;
        }

        else if(nums[low]<=nums[mid]){
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

    return false;
    
}
~~~

# Submission Review
## Approach
- **Technique**: Modified Binary Search.
- **Optimality**: Optimal. Handling duplicates in a rotated sorted array requires an $O(n)$ worst-case scenario, which this implementation handles correctly by shrinking the search space when `nums[low] == nums[mid] == nums[high]`.

## Complexity
- **Time Complexity**: Average case $O(\log n)$, worst case $O(n)$ (when many elements are equal).
- **Space Complexity**: $O(1)$ as it uses a constant amount of extra space.
- **Bottleneck**: The linear scan case `nums[low] == nums[mid] == nums[high]` causes the worst-case degradation.

## Efficiency Feedback
- The logic is efficient for the given constraints.
- **Note**: The mid calculation `mid = (low + high) / 2` is safe from overflow in C because `low + high` will not exceed the range of a signed 32-bit integer given typical competitive programming array size limits. However, `low + (high - low) / 2` is generally considered best practice to prevent potential overflow in extreme cases.

## Code Quality
- **Readability**: Good. The logic is clear and follows standard binary search patterns.
- **Structure**: Good. The conditional branching effectively partitions the search space.
- **Naming**: Good. Standard conventions (`low`, `high`, `mid`) are used.
- **Concrete Improvements**:
    - Consider using `low + (high - low) / 2` for `mid` to be pedantically safe.
    - The use of `else if` and `else` blocks is correct, but the code could be slightly cleaned up by grouping the `nums[low] == nums[mid] == nums[high]` condition as a primary `if` at the start of the loop iteration to emphasize that it is a special case for ambiguity resolution.

---
---


# Question Revision
### Revision Report: Search in Rotated Sorted Array II

**Pattern:** Binary Search (Modified)

**Brute Force:** Perform a linear scan to check every element for the target.
*   **Time:** $O(n)$
*   **Space:** $O(1)$

**Optimal Approach:** 
Utilize binary search with a condition to identify the sorted half. Because duplicates exist, when `nums[left] == nums[mid] == nums[right]`, you cannot determine which side is sorted; in this case, shrink the search space by incrementing `left` and decrementing `right`. Otherwise, perform standard binary search by comparing `target` against the sorted boundary.
*   **Time:** $O(n)$ worst-case (due to duplicates), $O(\log n)$ average-case.
*   **Space:** $O(1)$

**The 'Aha' Moment:** The presence of duplicates destroys the guarantee that at least one half of the array is strictly monotonic, requiring a linear shrinking step ($O(n)$ worst-case) when the ambiguity arises.

**Summary:** When binary searching a rotated array with duplicates, if the edges and midpoint are identical, you must shrink your search window manually before deciding which half to discard.

---
