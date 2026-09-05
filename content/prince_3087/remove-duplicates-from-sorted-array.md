---
title: "Remove Duplicates from Sorted Array"
slug: remove-duplicates-from-sorted-array
date: "2026-08-16"
---

# My Solution
~~~cpp
class Solution {
public:
    int removeDuplicates(vector<int>& nums) {
        int unique = 1;
        int i=0 , j=1;
        while(j<nums.size()){
            if(nums[j]==nums[j-1]){
                j++;
                continue;
            }
            else{
                nums[i+1]=nums[j];
                i++;
                j++;
                unique++;
            }
        }
        return unique;
        
    }
};
~~~

# Submission Review
## Approach
- **Technique:** Two-pointer technique (specifically a "slow" and "fast" runner approach).
- **Optimality:** Optimal. It performs an in-place modification of the array in a single pass without requiring auxiliary space.

## Complexity
- **Time Complexity:** $O(N)$, where $N$ is the size of the input vector. The array is traversed exactly once.
- **Space Complexity:** $O(1)$, as the algorithm uses constant extra space regardless of input size.

## Efficiency Feedback
- **Runtime:** The current implementation is efficient.
- **Redundancy:** The `unique` counter is technically redundant because the pointer `i` effectively tracks the index of the last unique element. The length can simply be returned as `i + 1`.
- **Logic:** The `continue` statement is unnecessary; an `if-else` block is sufficient.

## Code Quality
- **Readability:** Good. The logic is straightforward and easy to follow.
- **Structure:** Moderate. The use of both a counter (`unique`) and two pointers (`i`, `j`) makes the code slightly more verbose than necessary.
- **Naming:** Moderate. `i` and `j` are standard, but `i` could be more descriptively named (e.g., `writeIdx`).
- **Concrete Improvements:** 
    - Remove the `unique` variable.
    - Simplify the `while` loop to eliminate the `continue` keyword.
    - Handle the edge case `if (nums.empty()) return 0;` to ensure robustness.

**Refactored Suggestion:**
```cpp
int removeDuplicates(vector<int>& nums) {
    if (nums.empty()) return 0;
    int writeIdx = 0;
    for (int readIdx = 1; readIdx < nums.size(); ++readIdx) {
        if (nums[readIdx] != nums[writeIdx]) {
            nums[++writeIdx] = nums[readIdx];
        }
    }
    return writeIdx + 1;
}
```

---

# Question Revision
### Revision Report: Remove Duplicates from Sorted Array

**Pattern:** Two Pointers (In-place)

**Brute Force:**
Create a temporary array or use a hash set to track seen elements, then copy unique elements back into the original array. This requires extra space, violating the $O(1)$ constraint.

**Optimal Approach:**
Use two pointers: a `read` pointer to iterate through the array and a `write` pointer to track the position of the last unique element found. Since the array is sorted, duplicates are guaranteed to be adjacent; move the `write` pointer only when `nums[read] != nums[write]`.
*   **Time Complexity:** $O(n)$
*   **Space Complexity:** $O(1)$

**The 'Aha' Moment:**
The requirement to modify the array "in-place" while maintaining sorted order is the definitive signal to use two pointers to overwrite redundant data without extra memory.

**Summary:**
When asked to remove duplicates from a sorted structure in-place, use a fast pointer to scan and a slow pointer to track the boundary of unique elements.

---