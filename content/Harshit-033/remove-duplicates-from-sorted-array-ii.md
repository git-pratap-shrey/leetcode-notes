---
title: "Remove Duplicates from Sorted Array II"
slug: remove-duplicates-from-sorted-array-ii
date: "2026-10-06"
---

# My Solution
~~~cpp
class Solution {
public:
    int removeDuplicates(vector<int>& nums) {
        int k = 0;

        for (int x : nums) {
            if (k < 2 || x != nums[k - 2]) {
                nums[k] = x;
                k++;
            }
        }

        return k;
    }
};
~~~

# Submission Review
## Approach
- **Technique**: Two-pointer approach (read pointer via range-based for loop, write pointer `k`).
- **Optimality**: Optimal. It processes the array in a single pass and modifies it in-place, which is the most efficient way to handle this constraint.

## Complexity
- **Time Complexity**: $O(n)$, where $n$ is the number of elements in `nums`. Each element is visited exactly once.
- **Space Complexity**: $O(1)$, as no extra data structures are used regardless of input size.

## Efficiency Feedback
- **Runtime**: Minimal. The condition `k < 2 || x != nums[k - 2]` effectively leverages the sorted property to allow up to two occurrences without needing a separate counter variable.
- **Memory**: Minimal. In-place modification ensures no auxiliary memory is allocated.

## Code Quality
- **Readability**: Good. The logic is concise and uses a modern C++ range-based loop.
- **Structure**: Good. The implementation is lean and avoids unnecessary boilerplate.
- **Naming**: Moderate. While `k` is standard for "count" in LeetCode-style problems, a name like `writeIndex` would be more descriptive.
- **Improvements**: No functional improvements needed. For absolute strictness in C++ performance, `nums.reserve()` is not applicable here as the size is fixed, and the current implementation is already optimal.

---

# Question Revision
# Revision Report: Remove Duplicates from Sorted Array II

- **Pattern:** Two Pointers (Slow & Fast)
- **Brute Force:** Use a Hash Map to count occurrences of each number, then iterate through the map to overwrite the original array with elements that appeared $\le 2$ times.
- **Optimal Approach:** 
    - Maintain a `slow` pointer representing the index where the next valid element should be placed.
    - Iterate through the array with a `fast` pointer.
    - An element is kept if it is different from the element two positions behind the current `slow` pointer (`nums[fast] != nums[slow - 2]`).
    - Since the array is sorted, this automatically ensures no more than two duplicates are kept.
    - **Time Complexity:** $O(n)$
    - **Space Complexity:** $O(1)$
- **The 'Aha' Moment:** The "Sorted" property combined with a limit on duplicates means I only need to compare the current element with the element placed $k$ positions ago.
- **Summary:** Use a slow pointer to build the result in-place by checking if the current element exceeds the allowed duplicate limit relative to the slow pointer's position.

---