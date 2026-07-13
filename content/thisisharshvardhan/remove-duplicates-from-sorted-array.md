---
title: "Remove Duplicates from Sorted Array"
slug: remove-duplicates-from-sorted-array
date: "2026-06-02"
---

# My Solution
~~~

~~~

# Submission Review
## Approach
- **Technique**: Two-pointer approach.
- **Optimality**: Optimal. It processes the array in a single linear scan and modifies the input in-place, meeting the problem's typical constraints for time and space.

## Complexity
- **Time Complexity**: $O(n)$, where $n$ is the length of the array. Each element is visited exactly once.
- **Space Complexity**: $O(1)$. No additional data structures are used regardless of input size.

## Efficiency Feedback
- The solution is highly efficient. Since the array is already sorted, the single-pass comparison is the theoretical lower bound for time complexity.
- No meaningful optimizations are possible.

## Code Quality
- **Readability**: Good. The logic is concise and follows standard patterns for this problem.
- **Structure**: Good. Minimalist and focused.
- **Naming**: Moderate. While `i` and `j` are conventional for loop indices in competitive programming, names like `uniqueIdx` and `scanIdx` would improve clarity in a professional codebase.
- **Improvements**: None required for correctness or performance.

---

# Question Revision
### Remove Duplicates from Sorted Array

**Pattern:** Two Pointers

**Brute Force:** Use a Hash Set to identify unique elements, then overwrite the original array with these values.  
*Time: $O(n)$, Space: $O(n)$*

**Optimal Approach:** Use a `slow` pointer to track the position of the last unique element and a `fast` pointer to scan the array. Whenever `nums[fast]` differs from `nums[slow]`, increment `slow` and update its value to `nums[fast]`.
* Time: $O(n)$
* Space: $O(1)$

**The 'Aha' Moment:** The "sorted" property guarantees that all duplicate elements are contiguous, allowing a single pass with two pointers.

**Summary:** Maintain a unique-element boundary with a slow pointer while a fast pointer scouts for the next distinct value.

---