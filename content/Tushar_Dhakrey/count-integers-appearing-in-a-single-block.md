---
title: "Count Integers Appearing in a Single Block"
slug: count-integers-appearing-in-a-single-block
date: "2026-08-30"
---

# My Solution
~~~java
class Solution {
    public int countSpecialIntegers(int[] nums) {
        HashSet<Integer> seen = new HashSet<>();
        HashSet<Integer> notspe = new HashSet<>();
        for(int i=0;i<nums.length;i++){
            if(i==0 || nums[i]!=nums[i-1]){
                if(seen.contains(nums[i])){
                    notspe.add(nums[i]);
                }
                seen.add(nums[i]);
            }
        }
        return seen.size()-notspe.size();
    }
}
~~~

# Submission Review
## Approach
*   **Technique:** Iterative tracking using HashSets to identify unique values that appear in only one contiguous block.
*   **Optimal:** Yes. The approach correctly identifies numbers that appear in more than one distinct block and subtracts them from the total count of unique integers.

## Complexity
*   **Time Complexity:** $O(N)$, where $N$ is the length of the input array. Each element is visited exactly once, and HashSet operations (add/contains) are $O(1)$ on average.
*   **Space Complexity:** $O(U)$, where $U$ is the number of unique integers in the array, as the `seen` and `notspe` sets store these values.

## Efficiency Feedback
*   The logic is efficient. The runtime is dominated by a single pass over the array.
*   Memory usage is optimal for the current approach, as you must track which elements have been seen previously to determine if they reappear in a later block.

## Code Quality
*   **Readability:** Good. The logic is straightforward and easy to follow.
*   **Structure:** Good. The single-pass loop is clean and handles the block-boundary condition correctly.
*   **Naming:** Moderate. `notspe` is an opaque abbreviation for "not special"; `repeatedElements` would be more descriptive.
*   **Concrete Improvements:**
    *   **Variable Naming:** Rename `notspe` to `repeatedElements`.
    *   **Micro-optimization:** The `if (i == 0 || nums[i] != nums[i - 1])` check is correct. However, if the array is very large, using `HashSet` can have high overhead due to boxing `int` to `Integer`. If the constraints on `nums[i]` values are small and known, a `boolean[]` or `int[]` frequency array could be faster. If the values are large (e.g., $10^9$), the `HashSet` approach is necessary.
    *   **Safety:** The code assumes `nums` is not null. Adding a null check at the start would be defensive best practice.

---

# Question Revision
### Revision Report: Count Integers Appearing in a Single Block

**Pattern:** Sliding Window / Linear Scan

**Brute Force:**
Iterate through every possible subarray, count frequencies for each, and verify if the subarray contains only a single distinct integer. 
*Complexity:* $O(n^2)$ time, $O(1)$ space.

**Optimal Approach:**
Traverse the array once while maintaining a pointer to the start of the current block. Whenever the current element differs from the previous one, the previous block is complete; calculate its length ($length = end - start$) and reset the pointer. 
*Complexity:* $O(n)$ time, $O(1)$ space.

**The 'Aha' Moment:**
When the problem asks to process contiguous segments sharing a common property, a single pass tracking the boundaries of those segments is more efficient than nested iteration.

**Summary:**
Whenever you need to process contiguous segments of identical values, simply track the start and end indices of each block in a single linear pass.

---