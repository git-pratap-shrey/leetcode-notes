---
title: "Merge Sorted Array"
slug: merge-sorted-array
date: "2026-04-17"
---

# My Solution
~~~cpp
class Solution {
public:
    void merge(vector<int>& nums1, int m, vector<int>& nums2, int n) {
        int i = m - 1;       
        int j = n - 1;     
        int k = m + n - 1;    

        while(i >= 0 && j >= 0){
            if(nums1[i] > nums2[j]){
                nums1[k] = nums1[i];
                i--;
            } else {
                nums1[k] = nums2[j];
                j--;
            }
            k--;
        }

        //Nums2 still has elements
        while(j >= 0){
            nums1[k] = nums2[j];
            j--;
            k--;
        }
    }
};
~~~

# Submission Review
## Approach
- **Technique**: Two-pointer approach (backward traversal).
- **Optimality**: Optimal. It leverages the trailing empty space in `nums1` to merge the arrays in-place without requiring additional memory or shifting elements.

## Complexity
- **Time Complexity**: $O(m + n)$. Each element from both arrays is visited and placed exactly once.
- **Space Complexity**: $O(1)$. The operation is performed in-place.

## Efficiency Feedback
- The runtime and memory usage are minimal. 
- Starting from the end avoids the $O(m^2)$ overhead that would occur if elements were shifted forward during insertion.

## Code Quality
- **Readability**: Good. The logic is clean and easy to follow.
- **Structure**: Good. The separation between the primary comparison loop and the cleanup loop for `nums2` is correct.
- **Naming**: Moderate. While `i`, `j`, and `k` are common in competitive programming, descriptive names like `p1`, `p2`, and `writeIdx` would improve clarity.
- **Improvement**: The code is already concise; no significant structural improvements are necessary.

---

# Question Revision
### Merge Sorted Array

**Pattern:** Two Pointers (Backward)

**Brute Force:** 
Append `nums2` into the empty slots of `nums1` and call a sorting algorithm.
- **Time:** $O((n+m) \log(n+m))$
- **Space:** $O(1)$ or $O(n+m)$ depending on sorting implementation.

**Optimal Approach:** 
Initialize three pointers: one at the end of the initialized part of `nums1`, one at the end of `nums2`, and one at the very end of the `nums1` capacity. Compare values from the back and place the larger element at the current write position, moving pointers backward.
- **Time:** $O(n+m)$
- **Space:** $O(1)$

**The 'Aha' Moment:** 
The available empty space is at the end of `nums1`, meaning filling the array from back-to-front prevents overwriting elements before they are processed.

**Summary:** 
Merge from largest to smallest using three pointers to achieve in-place sorting without extra space.

---