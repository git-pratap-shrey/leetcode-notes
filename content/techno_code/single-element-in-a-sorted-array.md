---
title: "Single Element in a Sorted Array"
slug: single-element-in-a-sorted-array
date: "2026-04-24"
---

# My Solution
~~~cpp
class Solution {
public:
    int singleNonDuplicate(vector<int>& nums) {
        int low = 0, high = nums.size() - 1;

        while (low < high) {
            int mid = low + (high - low) / 2;

            // make mid even
            if (mid % 2 == 1) mid--;

            // check pair
            if (nums[mid] == nums[mid + 1]) {
                low = mid + 2;  // single is on right
            } else {
                high = mid;     // single is on left (including mid)
            }
        }

        return nums[low];
    }
};
~~~

# Submission Review
## Approach
- **Technique**: Binary Search on index parity.
- **Optimality**: Optimal. The solution achieves logarithmic time complexity by exploiting the sorted property and the fact that pairs should start at even indices.

## Complexity
- **Time Complexity**: $O(\log n)$ — The search space is halved in each iteration.
- **Space Complexity**: $O(1)$ — Only a few integer variables are used regardless of input size.

## Efficiency Feedback
- **Runtime**: Extremely efficient due to the $O(\log n)$ complexity.
- **Memory**: Minimal memory footprint.
- **Optimization**: The use of `mid--` to normalize the index to an even number is a clever way to simplify the pair-checking logic, avoiding complex XOR operations or multiple conditional branches.

## Code Quality
- **Readability**: Good. The logic is straightforward and the comments clearly explain the intent of the index manipulation and the binary search movement.
- **Structure**: Good. Follows standard binary search patterns.
- **Naming**: Good. `low`, `high`, and `mid` are standard conventions for this algorithm.
- **Improvements**:
    - None required for correctness or efficiency.
    - For absolute robustness in different environments, `nums.size()` returns `size_t` (unsigned), but since it is assigned to `int`, it is safe as long as the array size does not exceed `INT_MAX`.

---

# Question Revision
### Revision Report: Single Element in a Sorted Array

**Pattern:** Binary Search

**Brute Force:** 
Iterate through the array and XOR all elements together; the remaining value is the single element.
*   **Time:** $O(n)$
*   **Space:** $O(1)$

**Optimal Approach:**
Perform a Binary Search on the indices. For any element at an even index `i`, its pair should be at `i + 1`. If `nums[i] == nums[i + 1]`, the single element must be to the right of these two. If the condition fails, the single element is at or to the left of `i`.
*   **Time:** $O(\log n)$
*   **Space:** $O(1)$

**The 'Aha' Moment:** 
The requirement for $O(\log n)$ time in a sorted array, combined with the "paired" nature of the elements, signals that we can use index parity (even/odd) to determine which half of the array contains the anomaly.

**Summary:** 
Use binary search to find the first index where the `(even, odd)` pair symmetry is broken.

---