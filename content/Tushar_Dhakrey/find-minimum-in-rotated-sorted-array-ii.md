---
title: "Find Minimum in Rotated Sorted Array II"
slug: find-minimum-in-rotated-sorted-array-ii
date: "2026-10-14"
---

# My Solution
~~~java
class Solution {
    public int findMin(int[] nums) {
        int min = Integer.MAX_VALUE;
        for(int i=0;i<nums.length;i++){
            if(nums[i]<min){
                min = nums[i];
            }
        }
        return min;
    }
}
~~~

# Submission Review
## Approach
- **Technique:** Linear Scan.
- **Optimality:** Not optimal. The problem is a variation of binary search; while a linear scan is correct for any array, it fails to leverage the "rotated sorted" property.

## Complexity
- **Time Complexity:** $O(n)$, where $n$ is the length of the array.
- **Space Complexity:** $O(1)$.
- **Bottleneck:** The solution iterates through every element of the array regardless of the sorting/rotation, whereas a modified binary search could achieve $O(\log n)$ in the average case.

## Efficiency Feedback
- **Runtime:** High for large inputs compared to the intended binary search approach.
- **Optimization:** Implement a binary search algorithm. Because the array contains duplicates (indicated by "II" in the problem title), the worst-case complexity remains $O(n)$ for arrays with identical elements, but the average case improves to $O(\log n)$.

## Code Quality
- **Readability:** Good. The logic is trivial and easy to follow.
- **Structure:** Good. It follows standard Java method structure.
- **Naming:** Good. `min` and `nums` are appropriate identifiers.
- **Improvements:** 
    - Initialize `min` to `nums[0]` instead of `Integer.MAX_VALUE` to handle edge cases or avoid unnecessary constant comparisons.
    - Use an enhanced for-loop (`for (int num : nums)`) for cleaner syntax.

---

# Question Revision
# Revision Report: Find Minimum in Rotated Sorted Array II

- **Pattern**: Binary Search (Modified)
- **Brute Force**: Linearly scan the entire array to find the minimum element.
    - **Complexity**: $O(n)$ time, $O(1)$ space.
- **Optimal Approach**: 
    - Use two pointers (`left`, `right`) and calculate `mid`.
    - If `nums[mid] > nums[right]`, the minimum must be in the right half (`left = mid + 1`).
    - If `nums[mid] < nums[right]`, the minimum is at `mid` or to the left (`right = mid`).
    - **Crucial Case**: If `nums[mid] == nums[right]`, we cannot determine which side to pick due to duplicates. Shrink the search space by decrementing the boundary: `right--`.
    - **Complexity**: 
        - Average Time: $O(\log n)$
        - Worst Case Time: $O(n)$ (when all elements are the same)
        - Space: $O(1)$
- **The 'Aha' Moment**: The presence of duplicates makes the standard binary search ambiguous, requiring a linear shrink (`right--`) when boundaries are equal.
- **Summary**: Use binary search to find the pivot, but decrement the right pointer linearly when duplicates create ambiguity.

---