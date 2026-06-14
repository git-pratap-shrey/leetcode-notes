---
title: "Sort List"
slug: sort-list
date: "2026-06-14"
---

# My Solution
~~~

~~~

# Submission Review
No code was provided for analysis. Please provide the implementation to proceed with the review.

---

# Question Revision
### Sort List

**Pattern:** Divide and Conquer (Merge Sort)

**Brute Force:** Extract all node values into an array, sort the array using a built-in sorting algorithm, and write the values back into the linked list nodes.
*   **Time:** $O(n \log n)$
*   **Space:** $O(n)$

**Optimal Approach:** Implement **Merge Sort** directly on the linked list to avoid extra space for values.
1.  **Split:** Use a slow and fast pointer to find the midpoint of the list.
2.  **Divide:** Sever the connection at the midpoint to create two independent sub-lists.
3.  **Conquer:** Recursively call the sort function on both halves.
4.  **Merge:** Use a dummy head node to merge the two sorted sub-lists into a single sorted list.

*   **Time Complexity:** $O(n \log n)$
*   **Space Complexity:** $O(\log n)$ (due to the recursive call stack)

**The 'Aha' Moment:** The requirement for $O(n \log n)$ time on a data structure without random access (linked list) strongly signals Merge Sort over Quick Sort or Heap Sort.

**Summary:** Recursively bisect the list using slow/fast pointers and merge the sorted halves to achieve optimal time complexity.

---