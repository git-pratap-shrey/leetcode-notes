---
title: "Find First and Last Position of Element in Sorted Array"
slug: find-first-and-last-position-of-element-in-sorted-array
date: "2026-04-20"
---

# My Solution
~~~cpp
class Solution {
public:
    int findFirst(vector<int>& nums, int target) {
        int low = 0, high = nums.size() - 1;
        int ans = -1;

        while (low <= high) {
            int mid = low + (high - low) / 2;

            if (nums[mid] == target) {
                ans = mid;
                high = mid - 1; // move left
            } 
            else if (nums[mid] < target) {
                low = mid + 1;
            } 
            else {
                high = mid - 1;
            }
        }
        return ans;
    }

    int findLast(vector<int>& nums, int target) {
        int low = 0, high = nums.size() - 1;
        int ans = -1;

        while (low <= high) {
            int mid = low + (high - low) / 2;

            if (nums[mid] == target) {
                ans = mid;
                low = mid + 1; // move right
            } 
            else if (nums[mid] < target) {
                low = mid + 1;
            } 
            else {
                high = mid - 1;
            }
        }
        return ans;
    }

    vector<int> searchRange(vector<int>& nums, int target) {
        int first = findFirst(nums, target);
        int last = findLast(nums, target);
        return {first, last};
    }
};
~~~

# Submission Review
## Approach
- **Technique**: Binary Search. The solution implements two separate binary search passes: one to find the leftmost (first) occurrence and one to find the rightmost (last) occurrence of the target.
- **Optimality**: Optimal. Binary search is the most efficient way to search a sorted array.

## Complexity
- **Time Complexity**: $O(\log N)$, where $N$ is the size of the input array. Each binary search takes $O(\log N)$, and they are executed sequentially.
- **Space Complexity**: $O(1)$ auxiliary space (excluding the output vector).

## Efficiency Feedback
- The runtime is optimal.
- The memory footprint is minimal.
- **Potential optimization**: While the current approach is $O(\log N)$, you could reduce the number of binary searches in cases where the target is not found. If `findFirst` returns `-1`, `findLast` can be skipped entirely.

## Code Quality
- **Readability**: Good. The logic is clear, and the flow is easy to follow.
- **Structure**: Moderate. The code contains significant duplication between `findFirst` and `findLast`. These could be merged into a single helper function (e.g., `findBound(vector<int>& nums, int target, bool isFirst)`).
- **Naming**: Good. Variable and function names accurately describe their purpose.
- **Concrete Improvement**: 
    - Use a boolean flag in a single helper function to handle both boundaries.
    - Add a check in `searchRange`: `if (first == -1) return {-1, -1};` to avoid the second unnecessary search.

---

# Question Revision
### Revision Report: Find First and Last Position of Element in Sorted Array

**Pattern:** Binary Search (Boundary Search)

**Brute Force:** 
Linear scan through the array to find the first occurrence and another scan (or continuing the first) to find the last. 
- Time: $O(n)$
- Space: $O(1)$

**Optimal Approach:**
Perform two separate binary searches: one to find the leftmost index and one for the rightmost index. Instead of returning immediately when `nums[mid] == target`, continue shrinking the search space toward the desired boundary (left for first position, right for last position).
- Time: $O(\log n)$
- Space: $O(1)$

**The 'Aha' Moment:** 
The combination of a "sorted array" and a requirement for $O(\log n)$ time complexity explicitly mandates Binary Search.

**Summary:** 
Execute two modified binary searches to independently pin the leftmost and rightmost boundaries of the target value.

---