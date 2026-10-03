---
title: "Find First and Last Position of Element in Sorted Array"
slug: find-first-and-last-position-of-element-in-sorted-array
date: "2026-09-27"
---

# My Solution
~~~cpp
class Solution {
public:
    int search(vector<int>& nums, int target) {
        int low = 0;
        int high = nums.size()-1;
        int result = -1;
        while(low<=high){
            int mid  = (low+high)/2;
            if(nums[mid]==target){
                result = mid;
                return result;
            }
            else if(nums[mid]<target){
                low = mid+1;

            }
            else{
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
- **Optimality**: **Not Optimal**. The problem asks for the *first and last* position (a range), but the provided code implements a standard binary search that returns only the *first index encountered* during the search process. It fails to locate the boundaries of the target element.

## Complexity
- **Time Complexity**: $O(\log n)$
- **Space Complexity**: $O(1)$
- **Bottleneck**: The logic is fundamentally incomplete for the specific problem requirements (it returns a single integer instead of a pair/range).

## Efficiency Feedback
- **Runtime**: The runtime for a single search is efficient, but since the code returns as soon as `nums[mid] == target`, it does not perform the necessary additional searches to find the start and end indices.
- **Potential Bug**: `int mid = (low + high) / 2;` is prone to integer overflow if `low` and `high` are very large. Use `low + (high - low) / 2`.

## Code Quality
- **Readability**: Moderate. The logic is clean, but it solves the wrong problem (Search in Sorted Array vs. Find First and Last Position).
- **Structure**: Poor. The function signature `int search` does not match the expected return type for this specific problem (which typically requires a `vector<int>` containing two indices).
- **Naming**: Good. Variables `low`, `high`, and `mid` are standard for binary search.

**Concrete Improvements**:
1. **Change Return Type**: Change `int` to `vector<int>`.
2. **Implement Two-Pass Binary Search**: Create a helper function to find the leftmost boundary and call it again (or use a separate logic) to find the rightmost boundary.
3. **Prevent Overflow**: Update the `mid` calculation to `low + (high - low) / 2`.

---

# Question Revision
# Revision Report: Find First and Last Position of Element in Sorted Array

- **Pattern:** Binary Search (Modified)

- **Brute Force:** Iterate through the array linearly. Mark the index of the first occurrence of the target and update the index for every subsequent occurrence until the target is no longer found.
  - **Complexity:** Time: $O(n)$ | Space: $O(1)$

- **Optimal Approach:** Run two separate binary searches. One search is modified to continue searching the left half even after finding the target (to find the leftmost boundary), and the other to continue searching the right half (to find the rightmost boundary).
  - **Complexity:** Time: $O(\log n)$ | Space: $O(1)$

- **The 'Aha' Moment:** The keywords **"Sorted Array"** and **"Position"** combined with a requirement for efficiency strongly signal Binary Search, while the need for a "range" implies searching for boundaries rather than a single element.

- **Summary:** Use two binary searches to find the leftmost and rightmost boundaries of the target value in a sorted array.

---