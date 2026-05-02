---
title: "Median of Two Sorted Arrays"
slug: median-of-two-sorted-arrays
date: "2026-05-01"
---

# My Solution
~~~cpp
class Solution {
public:
    double findMedianSortedArrays(vector<int>& nums1, vector<int>& nums2) {
        
        // Always binary search on smaller array
        if (nums1.size() > nums2.size()) 
            return findMedianSortedArrays(nums2, nums1);

        int n1 = nums1.size();
        int n2 = nums2.size();

        int low = 0, high = n1;

        while (low <= high) {
            int cut1 = (low + high) / 2;
            int cut2 = (n1 + n2 + 1) / 2 - cut1;

            int left1  = (cut1 == 0) ? INT_MIN : nums1[cut1 - 1];
            int left2  = (cut2 == 0) ? INT_MIN : nums2[cut2 - 1];
            int right1 = (cut1 == n1) ? INT_MAX : nums1[cut1];
            int right2 = (cut2 == n2) ? INT_MAX : nums2[cut2];

            // Correct partition
            if (left1 <= right2 && left2 <= right1) {

                // Odd length
                if ((n1 + n2) % 2 == 1)
                    return max(left1, left2);

                // Even length
                return (max(left1, left2) + min(right1, right2)) / 2.0;
            }

            // Move left
            else if (left1 > right2) {
                high = cut1 - 1;
            }

            // Move right
            else {
                low = cut1 + 1;
            }
        }

        return 0.0; // won't reach here
    }
};
~~~

# Submission Review
## Approach
- **Technique**: Binary search on the partition point of the smaller array.
- **Optimality**: Optimal. It achieves the logarithmic time complexity required for this problem by leveraging the sorted property of both arrays.

## Complexity
- **Time Complexity**: $O(\log(\min(n_1, n_2)))$, where $n_1$ and $n_2$ are the lengths of the two arrays.
- **Space Complexity**: $O(1)$. The recursive call for swapping arrays happens at most once and does not scale with input size.

## Efficiency Feedback
- **Runtime**: Highly efficient. Performing the search on the smaller array minimizes the number of iterations.
- **Memory**: Minimal overhead. 
- **Observation**: The use of `INT_MIN` and `INT_MAX` effectively handles edge cases where the partition falls at the very beginning or end of an array, avoiding complex boundary checks.

## Code Quality
- **Readability**: Good. The logic flow is linear and comments clearly mark the purpose of each block (e.g., "Correct partition", "Odd length").
- **Structure**: Good. The initial check to ensure `nums1` is the smaller array simplifies the subsequent indexing logic.
- **Naming**: Moderate. While `cut1`, `left1`, etc., are acceptable in a competitive programming context, names like `partition1` or `maxLeft1` would be more descriptive in a production environment.
- **Improvements**: 
    - Use `low + (high - low) / 2` instead of `(low + high) / 2` to prevent potential integer overflow for extremely large array sizes.
    - The final `return 0.0;` is logically unreachable but necessary for the compiler; adding a comment or throwing an exception would be more explicit.

---

# Question Revision
### Median of Two Sorted Arrays

**Pattern:** Binary Search (Partitioning)

**Brute Force:** 
Merge both sorted arrays into one combined sorted array using two pointers, then return the middle element(s).
- **Time:** $O(m+n)$
- **Space:** $O(m+n)$

**Optimal Approach:**
Perform binary search on the **smaller** array to find a partition point $i$. Calculate the corresponding partition $j$ in the larger array such that the total elements on the left side equal the total elements on the right. Ensure the max of the left partitions is $\le$ the min of the right partitions across both arrays.
- **Time:** $O(\log(\min(m, n)))$
- **Space:** $O(1)$

**The 'Aha' Moment:**
The $O(\log(m+n))$ constraint combined with sorted arrays signals binary search, but instead of searching for a value, you are searching for the ideal split point that balances the two arrays.

**Summary:**
Binary search the smaller array to find a partition where all elements to the left are smaller than or equal to all elements to the right across both arrays.

---