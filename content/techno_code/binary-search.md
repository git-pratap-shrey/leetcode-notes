---
title: "Binary Search"
slug: binary-search
date: "2026-04-19"
---

# My Solution
~~~cpp
class Solution {
public:
    int search(vector<int>& nums, int target) {
        int n=nums.size();
        int low=0;
        int high=n-1;
        while(low<=high){
            int mid=low+ (high-low)/2;
            if(nums[mid]==target) return mid;
            else if (nums[mid]>target) high=mid-1;
            else low=mid+1;
        }
        return -1;
    }
};
~~~

# Submission Review
## Approach
- **Technique**: Iterative Binary Search.
- **Optimality**: Optimal. It reduces the search space by half in each iteration, which is the most efficient way to search a sorted array.

## Complexity
- **Time Complexity**: $O(\log n)$, where $n$ is the size of the input vector.
- **Space Complexity**: $O(1)$, as it uses a constant amount of extra space regardless of input size.

## Efficiency Feedback
- The implementation is highly efficient.
- **Good Practice**: The use of `mid = low + (high - low) / 2` instead of `(low + high) / 2` correctly prevents potential integer overflow when `low` and `high` are very large.

## Code Quality
- **Readability**: Good. The logic is clear and follows standard binary search conventions.
- **Structure**: Good. The loop conditions and boundary updates are correct, preventing infinite loops.
- **Naming**: Moderate. While `low` and `high` are acceptable, `left` and `right` are more common in this context. Variable `n` is standard for size.
- **Improvements**: No functional improvements needed. The code is concise and correct.

---

# Question Revision
### Binary Search Revision Report

**Pattern:** Binary Search

**Brute Force:**
Iterate through the array linearly from index $0$ to $n-1$, checking if each element matches the target.
- Time: $O(n)$
- Space: $O(1)$

**Optimal Approach:**
Maintain two pointers, `left` and `right`, bounding the search space. Calculate the `mid` index; if `nums[mid]` equals the target, return the index. If the target is smaller, discard the right half by setting `right = mid - 1`; otherwise, discard the left half by setting `left = mid + 1`. Repeat until the target is found or pointers cross.
- Time: $O(\log n)$
- Space: $O(1)$

**The 'Aha' Moment:**
The problem explicitly states the input array is **sorted**.

**Summary:**
Efficiently locate an element in a sorted collection by repeatedly halving the search interval.

---