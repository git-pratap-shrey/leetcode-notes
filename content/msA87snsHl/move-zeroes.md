---
title: "Move Zeroes"
slug: move-zeroes
date: "2026-06-20"
---

# My Solution
~~~java
class Solution {
    public void moveZeroes(int[] nums) {
       
        int insertPos = 0;

        for (int i = 0; i < nums.length; i++) {
            if (nums[i] != 0) {
                int temp = nums[i];
                nums[i] = nums[insertPos];
                nums[insertPos] = temp;

                insertPos++;
            }
        }
    }
}
    


~~~

# Submission Review
## Approach
- **Technique**: Two-pointer approach using a swap mechanism.
- **Optimality**: Optimal. It processes the array in a single pass and modifies it in-place without requiring extra space.

## Complexity
- **Time Complexity**: $O(n)$, where $n$ is the length of the array. Each element is visited exactly once.
- **Space Complexity**: $O(1)$. No additional data structures are used regardless of input size.

## Efficiency Feedback
- The runtime and memory usage are minimal.
- **Minor Observation**: The code performs a swap even when `i == insertPos` (i.e., when no zeros have been encountered yet). While this does not change the asymptotic complexity, adding a check `if (i != insertPos)` would prevent redundant writes to the same memory location.

## Code Quality
- **Readability**: Good. The logic is straightforward and easy to follow.
- **Structure**: Good. The method is concise and adheres to standard Java conventions.
- **Naming**: Good. `insertPos` clearly indicates the target index for the next non-zero element.
- **Improvements**: None required; the implementation is clean and efficient.

---

# Question Revision
### Move Zeroes

**Pattern:** Two Pointers (Read/Write)

**Brute Force:** Create a temporary array, iterate through the original to copy all non-zero elements, then fill the remaining slots with zeroes and copy back to the original.

**Optimal Approach:** Use a `slow` pointer to track the position of the next non-zero element. Iterate through the array with a `fast` pointer; whenever a non-zero value is encountered, swap the values at `slow` and `fast`, then increment `slow`.
- **Time Complexity:** $O(n)$
- **Space Complexity:** $O(1)$

**The 'Aha' Moment:** The requirement to maintain relative order while modifying the array in-place signals a need to "compress" non-zero elements forward using a slow-fast pointer strategy.

**Summary:** Maintain a pointer for the next available non-zero slot and swap elements to push all zeroes to the end.

---