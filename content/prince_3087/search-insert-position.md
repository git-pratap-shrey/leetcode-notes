---
title: "Search Insert Position"
slug: search-insert-position
date: "2026-10-02"
---

# My Solution
~~~cpp
class Solution {
public:
    int peakIndexInMountainArray(vector<int>& arr) {
        
        int low =0 , high = arr.size()-1 , result =-1;
        while(low<=high){
            int mid = (low+high)/2;
            if(arr[mid]<arr[mid+1]){
                low=mid+1;
            }
            else if(arr[mid]>arr[mid+1]){
                result = mid;
                high = mid-1;
            }
        }
        return result;
    }
};
~~~

# Submission Review
## Approach
- **Technique**: Binary Search.
- **Optimality**: The approach is optimal for finding a peak in a mountain array ($O(\log n)$), but the implementation contains a critical logic error regarding the problem statement provided.
- **Critical Bug**: The code implements `peakIndexInMountainArray`, but the requested problem is `Search Insert Position`. The solution solves the wrong problem.

## Complexity
- **Time Complexity**: $O(\log n)$
- **Space Complexity**: $O(1)$

## Efficiency Feedback
- **Out-of-Bounds Risk**: The expression `arr[mid+1]` will cause a segmentation fault (runtime error) if `mid` is the last index of the array. While the binary search logic generally prevents this in mountain arrays, it is unsafe practice without an explicit boundary check.
- **Integer Overflow**: `int mid = (low + high) / 2;` can overflow if `low` and `high` are very large. Use `low + (high - low) / 2`.

## Code Quality
- **Readability**: Moderate. The logic is concise, but the mismatch between the class method name and the problem objective is confusing.
- **Structure**: Moderate. The `while` loop is standard, but the `result` variable is redundant as the loop could be structured to return `low` directly.
- **Naming**: Poor. The function name `peakIndexInMountainArray` does not match the problem "Search Insert Position".
- **Concrete Improvements**:
    1. Rewrite the logic to implement binary search for a target value (for "Search Insert Position") rather than searching for a peak element.
    2. Replace `(low + high) / 2` with `low + (high - low) / 2`.
    3. Add a check to ensure `mid + 1 < arr.size()` before accessing the index.

---

# Question Revision
# Revision Report: Search Insert Position

- **Pattern:** Binary Search
- **Brute Force:** Iterate through the array linearly. If the target is found, return the index; otherwise, return the index where the current element first exceeds the target.
- **Optimal Approach:**
    - Use two pointers (`left`, `right`) to maintain a search window.
    - Calculate `mid` and compare with `target`.
    - If `nums[mid] == target`, return `mid`.
    - If `nums[mid] < target`, move `left` to `mid + 1`.
    - If `nums[mid] > target`, move `right` to `mid - 1`.
    - If the loop terminates without a match, `left` will naturally point to the correct insertion index.
    - **Time Complexity:** $O(\log n)$
    - **Space Complexity:** $O(1)$
- **The 'Aha' Moment:** The problem specifies a **sorted array** and requires a search, which is the classic trigger for Binary Search.
- **Summary:** If the target isn't found in a Binary Search, the `left` pointer represents the correct insertion point.

---