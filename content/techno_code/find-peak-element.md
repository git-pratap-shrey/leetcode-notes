---
title: "Find Peak Element"
slug: find-peak-element
date: "2026-04-24"
---

# My Solution
~~~cpp
class Solution {
public:
    int findPeakElement(vector<int>& nums) {
        int low = 0, high = nums.size() - 1;

        while (low < high) {
            int mid = low + (high - low) / 2;

            if (nums[mid] < nums[mid + 1]) {
                low = mid + 1;   // move right
            } else {
                high = mid;      // move left (including mid)
            }
        }

        return low; // or high (both same)
    }
};
~~~

# Submission Review
## Approach
- **Technique**: Binary Search.
- **Optimality**: Optimal. The algorithm leverages the property that if `nums[mid] < nums[mid + 1]`, an upward slope exists, guaranteeing a peak to the right. Otherwise, a peak must exist at `mid` or to the left. This reduces the search space logarithmically.

## Complexity
- **Time Complexity**: $O(\log n)$, where $n$ is the size of the input vector.
- **Space Complexity**: $O(1)$, as it uses a constant amount of extra space.

## Efficiency Feedback
- **Runtime**: Optimal for this problem.
- **Memory**: Minimal usage.
- **Observation**: The use of `mid = low + (high - low) / 2` correctly prevents potential integer overflow compared to `(low + high) / 2`.

## Code Quality
- **Readability**: Good. The logic is concise and the comments clearly indicate the direction of the search.
- **Structure**: Good. The loop condition `low < high` and the boundary updates are handled correctly to avoid infinite loops.
- **Naming**: Good. Standard naming conventions for binary search (`low`, `high`, `mid`) are used.
- **Improvements**: None. The implementation is a textbook example of an efficient binary search for this problem.

---

# Question Revision
### Find Peak Element

**Pattern:** Binary Search

**Brute Force:** 
Iterate through the array linearly and return the first index $i$ where `nums[i] > nums[i + 1]`. 
- Time: $O(n)$
- Space: $O(1)$

**Optimal Approach:** 
Perform a binary search by comparing the middle element with its right neighbor. If `nums[mid] < nums[mid + 1]`, you are on an upward slope, guaranteeing a peak exists to the right. Otherwise, a peak must exist to the left (including `mid`).
- Time: $O(\log n)$
- Space: $O(1)$

**The 'Aha' Moment:** 
The $O(\log n)$ requirement on an unsorted array signals binary search, made possible because any upward slope must eventually peak or terminate at the boundary.

**Summary:** 
Always move in the direction of the increasing slope to guarantee finding a local maximum.

---