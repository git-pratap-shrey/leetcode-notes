---
title: "Find Minimum in Rotated Sorted Array"
slug: find-minimum-in-rotated-sorted-array
date: "2026-04-23"
---

# My Solution
~~~cpp
class Solution {
public:
    int findMin(vector<int>& nums) {
        int low = 0, high = nums.size() - 1;

        while (low < high) {
            int mid = low + (high - low) / 2;

            if (nums[mid] > nums[high]) {
                // minimum is in right half
                low = mid + 1;
            } else {
                // minimum is in left half (including mid)
                high = mid;
            }
        }
        return nums[low];
    }
};
~~~

# Submission Review
## Approach
- **Technique:** Binary Search.
- **Optimality:** Optimal. It leverages the sorted property of the rotated array to reduce the search space logarithmically.

## Complexity
- **Time Complexity:** $O(\log n)$ — The search range is halved in each iteration.
- **Space Complexity:** $O(1)$ — Only a constant amount of extra space is used for pointers.

## Efficiency Feedback
- **Runtime:** High efficiency. The use of `low + (high - low) / 2` prevents potential integer overflow.
- **Memory:** Minimal. No auxiliary data structures are used.

## Code Quality
- **Readability:** Good. The logic is straightforward, and comments clearly explain the movement of pointers.
- **Structure:** Good. The implementation is concise and follows standard binary search patterns.
- **Naming:** Good. `low`, `high`, and `mid` are standard conventions for binary search.
- **Improvements:** No significant improvements needed; the code is idiomatic and correct.

---

# Question Revision
### Find Minimum in Rotated Sorted Array

**Pattern:** Binary Search

**Brute Force:** Iterate through the entire array linearly to find the minimum element.
- **Time:** $O(n)$
- **Space:** $O(1)$

**Optimal Approach:** Use a modified binary search to find the "inflection point." Compare the middle element (`nums[mid]`) with the rightmost element (`nums[right]`). If `nums[mid] > nums[right]`, the minimum must be in the right half; otherwise, it is in the left half (including `mid`).
- **Time:** $O(\log n)$
- **Space:** $O(1)$

**The 'Aha' Moment:** The property of being "sorted" (even if rotated) combined with a search for a single unique element is the primary trigger for Binary Search.

**Summary:** Compare `mid` to `right` to determine which half contains the inflection point and discard the other.

---