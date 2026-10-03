---
title: "Find Minimum in Rotated Sorted Array"
slug: find-minimum-in-rotated-sorted-array
date: "2026-10-02"
---

# My Solution
~~~cpp
class Solution {
public:
    int searchInsert(vector<int> &nums, int target)  {
        int low = 0 ,high = nums.size()-1 , result = nums.size();
        while(low<=high){
            int mid = (low+high)/2;
            if(nums[mid] == target){
                result = mid;
                break;
            }
            else if(nums[mid]<target){
                low = mid+1;

            }
            else{
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
- **Technique:** Binary Search.
- **Correctness:** **Incorrect.** The provided code implements `searchInsert` (finding the insertion index of a target in a sorted array), but the problem asks to "Find Minimum in Rotated Sorted Array." The logic completely ignores the rotation property and the goal of finding the minimum element.

## Complexity
- **Time Complexity:** $O(\log N)$
- **Space Complexity:** $O(1)$
- **Bottleneck:** While the complexity is optimal for binary search, the algorithm solves the wrong problem.

## Efficiency Feedback
- The runtime is efficient for the wrong task. To solve the actual problem (Find Minimum in Rotated Sorted Array), the binary search must compare `nums[mid]` with `nums[high]` to determine which half is sorted and contains the pivot.

## Code Quality
- **Readability:** Poor. The function name `searchInsert` contradicts the problem goal.
- **Structure:** Moderate. Standard binary search structure is followed.
- **Naming:** Poor. `searchInsert` and `target` are irrelevant to finding a minimum element.
- **Improvements:**
    1. Rename the function to `findMin`.
    2. Remove the `target` parameter.
    3. Rewrite the logic to compare `nums[mid]` with the right boundary to shrink the search space toward the minimum element.
    4. Use `int mid = low + (high - low) / 2;` to prevent potential integer overflow.

---

# Question Revision
# Revision Report: Find Minimum in Rotated Sorted Array

- **Pattern:** Binary Search (Modified)
- **Brute Force:** Linear scan through the array to find the smallest element.
    - **Time:** $O(n)$ | **Space:** $O(1)$
- **Optimal Approach:** 
    - Use binary search to narrow down the search space.
    - Compare `nums[mid]` with `nums[right]`.
    - If `nums[mid] > nums[right]`, the minimum must be in the **right** half (the rotation point is there).
    - If `nums[mid] < nums[right]`, the minimum is either `mid` or to the **left**.
    - **Time:** $O(\log n)$ | **Space:** $O(1)$
- **The 'Aha' Moment:** The phrase "Sorted Array" combined with a search for a specific element/pivot almost always signals Binary Search, even if the array is rotated.
- **Summary:** Compare the middle element to the right boundary to determine which half contains the inflection point.

---