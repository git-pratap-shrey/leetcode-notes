---
title: "Sort List"
slug: sort-list
date: "2026-06-14"
---

# My Solution
~~~

~~~

# Submission Review
Please provide the code you would like me to review. You did not include the source code in your message.

Once you provide the code, I will analyze it based on your requested criteria:

## Approach
* Identify the technique used (e.g., Merge Sort, Quick Sort, etc.).
* Evaluate optimality.

## Complexity
* Time Complexity.
* Space Complexity.
* Bottleneck analysis.

## Efficiency Feedback
* Runtime/memory assessment.
* Concrete optimization suggestions.

## Code Quality
* Readability, Structure, and Naming assessments with specific improvement recommendations.

---

# Question Revision
### Revision Report: Sort List

**Pattern:** Divide and Conquer (Merge Sort)

**Brute Force:** 
Extract the values into an array, sort the array using a built-in library ($O(n \log n)$ time, $O(n)$ space), and overwrite the linked list nodes.

**Optimal Approach:** 
Use the **Merge Sort** algorithm specifically adapted for linked lists. 
1. Use **Fast and Slow Pointers** to find the midpoint and split the list into two halves.
2. Recursively sort each half.
3. Merge the two sorted lists using a dummy node.
*   **Time Complexity:** $O(n \log n)$
*   **Space Complexity:** $O(\log n)$ (due to recursive call stack space)

**The 'Aha' Moment:** 
The requirement for $O(n \log n)$ time and $O(1)$ auxiliary space (ignoring recursion) in a linked list structure is a classic signal to use Merge Sort, as it avoids the $O(n)$ space overhead of QuickSort or array-based sorting.

**Summary:** 
Merge sort is the native choice for linked lists because you can split nodes by pointer manipulation and merge them without extra arrays.

---