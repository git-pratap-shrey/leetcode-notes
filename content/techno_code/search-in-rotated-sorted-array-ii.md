---
title: "Search in Rotated Sorted Array II"
slug: search-in-rotated-sorted-array-ii
date: "2026-04-22"
---

# My Solution
~~~cpp
class Solution {
public:
    bool search(vector<int>& nums, int target) {
        int low = 0, high = nums.size() - 1;

        while (low <= high) {
            int mid = low + (high - low) / 2;

            if (nums[mid] == target) return true;

            // Handle duplicates
            if (nums[low] == nums[mid] && nums[mid] == nums[high]) {
                low++;
                high--;
            }
            // Left part sorted
            else if (nums[low] <= nums[mid]) {
                if (nums[low] <= target && target < nums[mid]) {
                    high = mid - 1;
                } else {
                    low = mid + 1;
                }
            }
            // Right part sorted
            else {
                if (nums[mid] < target && target <= nums[high]) {
                    low = mid + 1;
                } else {
                    high = mid - 1;
                }
            }
        }
        return false;
    }
};
~~~

# Submission Review
## Approach
- **Technique**: Modified Binary Search.
- **Optimality**: Optimal. Since the array contains duplicates, it is impossible to determine which half is sorted if `nums[low] == nums[mid] == nums[high]`, forcing a linear reduction of the search space in the worst case.

## Complexity
- **Time Complexity**: 
    - **Average/Best Case**: $O(\log n)$ when elements are distinct or duplicates do not coincide with boundaries.
    - **Worst Case**: $O(n)$ when most elements are identical (e.g., `[1, 1, 1, 2, 1, 1, 1]`), reducing the range by only 2 elements per iteration.
- **Space Complexity**: $O(1)$ as it uses only a constant amount of extra space.

## Efficiency Feedback
- The implementation is efficient for the given constraints.
- The use of `low + (high - low) / 2` correctly prevents potential integer overflow.
- The duplicate handling logic (`low++; high--;`) is the standard way to handle the ambiguity in Rotated Sorted Array II.

## Code Quality
- **Readability**: Good. Logic is clear and follows standard binary search patterns.
- **Structure**: Good. Proper use of `if-else if-else` blocks to partition the search logic.
- **Naming**: Good. `low`, `high`, and `mid` are conventional and appropriate.
- **Improvements**: None needed; the code is concise and correct.

---

# Question Revision
### Search in Rotated Sorted Array II

**Pattern:** Modified Binary Search

**Brute Force:** Linear scan through the entire array to find the target.  
Time: $O(n)$ | Space: $O(1)$

**Optimal Approach:** 
Use binary search to identify which half of the array is monotonically sorted. 
1. If `nums[mid] == target`, return `true`.
2. **Handle Duplicates:** If `nums[left] == nums[mid] == nums[right]`, we cannot determine which side is sorted; increment `left` and decrement `right` to shrink the search space.
3. **Left Side Sorted:** If `nums[left] <= nums[mid]`, check if the target lies within the range `[left, mid]`.
4. **Right Side Sorted:** Otherwise, check if the target lies within the range `[mid, right]`.

**Complexity:**
*   **Time:** Average $O(\log n)$, Worst $O(n)$ (when most elements are duplicates).
*   **Space:** $O(1)$.

**The 'Aha' Moment:** The presence of duplicates means `nums[left] == nums[mid]` doesn't guarantee the left side is sorted, requiring a linear shrink of boundaries to break the ambiguity.

**Summary:** Perform binary search on the sorted half, but shrink boundaries linearly when duplicates mask the sorted side.

---