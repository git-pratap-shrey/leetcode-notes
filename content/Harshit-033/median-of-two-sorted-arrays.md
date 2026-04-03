---
title: "Median of Two Sorted Arrays"
slug: median-of-two-sorted-arrays

---
---

# My Solution
~~~c
double findMedianSortedArrays(int* nums1, int m, int* nums2, int n) {
    
    int new_arr[m+n];
    int i = 0, j = 0, k = 0;
    int x = m + n;

    while (i < m && j < n) {
        if (nums1[i] <= nums2[j]) {
            new_arr[k++] = nums1[i++];
        } else {
            new_arr[k++] = nums2[j++];
        }
    }

    while (i < m) {
        new_arr[k++] = nums1[i++];
    }

    while (j < n) {
        new_arr[k++] = nums2[j++];
    }

   
    if (x % 2 != 0) {
        return new_arr[x / 2];
    } else {
        return (new_arr[x/2 - 1] + new_arr[x/2]) / 2.0;
    }
}
~~~

# Submission Review
## Approach
*   **Technique:** Two-pointer merging (Merge step of Merge Sort).
*   **Optimality:** Suboptimal. The standard approach for this problem is binary search (partitioning), which achieves logarithmic time complexity. This solution merges the arrays in linear time.

## Complexity
*   **Time Complexity:** $O(m + n)$, where $m$ and $n$ are the lengths of the two arrays.
*   **Space Complexity:** $O(m + n)$ due to the creation of `new_arr` to store the combined elements.

## Efficiency Feedback
*   **Bottleneck:** Memory allocation and copying of all elements are unnecessary. The problem can be solved with $O(1)$ auxiliary space if the median index is tracked without storing the merged result, or $O(\log(\min(m, n)))$ time complexity using binary search on the partition.
*   **Constraint Warning:** In environments with strict memory limits or extremely large arrays, allocating `new_arr` on the stack (VLA) may trigger a stack overflow.

## Code Quality
*   **Readability:** Good. The logic is straightforward and easy to follow.
*   **Structure:** Good. The logic flow is logical and standard for a merge operation.
*   **Naming:** Good. Variable names (`i`, `j`, `k`, `m`, `n`) are standard for array manipulation in C.
*   **Concrete Improvements:**
    *   **Memory:** Instead of creating a new array, track the current and previous element while iterating up to the median index to reduce space complexity to $O(1)$.
    *   **Safety:** C Variable Length Arrays (VLAs) like `new_arr[m+n]` are not standard in C++ and can be dangerous; consider `malloc` or using a fixed-size approach if strictly in C.
    *   **Integer Overflow:** While unlikely here, `(new_arr[x/2 - 1] + new_arr[x/2]) / 2.0` is generally safe, but `(a + b) / 2.0` can overflow if `a` and `b` are extremely large integers; cast to `double` before addition: `(double)new_arr[x/2 - 1] + new_arr[x/2]) / 2.0`.

---
---


# Question Revision
### Revision Report: Median of Two Sorted Arrays

**Pattern:** Binary Search (on partition index)

**Brute Force:** 
Merge both arrays into a single sorted array using a two-pointer approach ($O(m+n)$) and return the middle element(s).

**Optimal Approach:** 
Perform a binary search on the smaller array to find a partition point such that elements to the left are less than or equal to elements to the right. By partitioning both arrays simultaneously ($L_1 \le R_2$ and $L_2 \le R_1$), you isolate the median candidates in $O(\log(\min(m, n)))$ time and $O(1)$ space.

**The 'Aha' Moment:** 
The requirement for $O(\log(m+n))$ time complexity in a sorted structure is a definitive signal to abandon linear merging and instead binary search for the correct partition index.

**Summary:** 
When searching for a median in two sorted arrays, don't merge them; binary search for the partition point that creates a balanced, sorted left half.

---
