---
title: "Search in Rotated Sorted Array"
slug: search-in-rotated-sorted-array
date: "2026-04-21"
---

# My Solution
~~~cpp
class Solution {
public:
    int search(vector<int>& nums, int target) {
        int low = 0, high = nums.size() - 1;

        while (low <= high) {
            int mid = low + (high - low) / 2;

            if (nums[mid] == target) return mid;

            // left half sorted
            if (nums[low] <= nums[mid]) {
                if (nums[low] <= target && target < nums[mid]) {
                    high = mid - 1;
                } else {
                    low = mid + 1;
                }
            }
            // right half sorted
            else {
                if (nums[mid] < target && target <= nums[high]) {
                    low = mid + 1;
                } else {
                    high = mid - 1;
                }
            }
        }
        return -1;
    }
};
~~~

# Submission Review
## Approach
- **Technique**: Modified Binary Search.
- **Optimality**: Optimal. It achieves the theoretical lower bound for searching in a sorted (but rotated) array by eliminating half of the search space in each iteration.

## Complexity
- **Time Complexity**: $O(\log n)$, where $n$ is the number of elements in `nums`.
- **Space Complexity**: $O(1)$, as it uses a constant amount of extra space.

## Efficiency Feedback
- **Runtime**: High efficiency. The use of `low + (high - low) / 2` correctly prevents potential integer overflow that would occur with `(low + high) / 2`.
- **Memory**: Minimal footprint; no auxiliary data structures are allocated.

## Code Quality
- **Readability**: Good. The logic is straightforward, and the comments clearly distinguish between the left and right sorted half checks.
- **Structure**: Good. The control flow is logical and follows standard binary search patterns.
- **Naming**: Good. Variables (`low`, `high`, `mid`, `target`) are standard for this algorithm.
- **Improvements**: None. The implementation is clean and follows best practices for this specific problem.

---

# Question Revision
### Search in Rotated Sorted Array

**Pattern:** Modified Binary Search

**Brute Force:** Linear scan through the array to find the target. 
- Time: $O(n)$
- Space: $O(1)$

**Optimal Approach:** Use Binary Search. Because the array was originally sorted, any midpoint split guarantees that at least one half (left or right) remains sorted. 
1. Identify which half is sorted by comparing `nums[low]` with `nums[mid]`.
2. Check if the target lies within the range of that sorted half.
3. If it does, narrow the search to that half; otherwise, search the other half.
- Time: $O(\log n)$
- Space: $O(1)$

**The 'Aha' Moment:** The property of "sorted" (even if rotated) combined with a search requirement indicates that you can still discard half the search space if you first identify which side is monotonically increasing.

**Summary:** Identify the sorted half of the current range to decide whether the target resides within its boundaries or in the rotated half.

---