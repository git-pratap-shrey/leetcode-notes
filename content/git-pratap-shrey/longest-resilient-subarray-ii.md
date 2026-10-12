---
title: "Longest Resilient Subarray II"
slug: longest-resilient-subarray-ii
date: "2026-10-10"
---

# My Solution
~~~cpp
class Solution {
public:
    int resilientSubarray(vector<int>& nums, int k) {
        for(int i = 0; i < nums.size(); i++){
            nums[i] = nums[i] % k;
        }

        int i = 0;
        int j = 0;

        int max_len = 0, curr_len = 0;
        while(j < nums.size()){
            if(nums[j] == nums[i]){
                j++;
                curr_len = j - i;
                if((nums[i] * curr_len) % k == nums[i]){
                    max_len = max(max_len, curr_len);
                }
                continue;
            }
            i = j;
        }
        curr_len = j - i;
        if((nums[i] * curr_len) % k == nums[i]){
            max_len = max(max_len, curr_len);
        }

        return max_len;
    }
};
~~~

# Submission Review
## Approach
- **Technique**: Two-pointer / Sliding window. The code attempts to group contiguous elements with the same remainder modulo $k$ and check a condition based on the length of that group.
- **Optimality**: **Incorrect/Suboptimal**. The logic assumes the subarray must consist of identical values modulo $k$ to be "resilient," which is a restrictive assumption not derived from the problem (and likely mathematically incorrect for the general case of "resilient subarrays"). Additionally, the loop contains a critical flaw: if `nums[j] != nums[i]`, the code sets `i = j` but does not increment `j`, leading to an **infinite loop**.

## Complexity
- **Time Complexity**: $\mathcal{O}(N)$ in theory, but currently $\mathcal{O}(\infty)$ due to the infinite loop when `nums[j] != nums[i]`.
- **Space Complexity**: $\mathcal{O}(1)$ (excluding input storage), as it modifies the input array in place.

## Efficiency Feedback
- **Infinite Loop**: The `while` loop fails to increment `j` when the `if(nums[j] == nums[i])` condition is false.
- **Logic Flaw**: The code only checks contiguous blocks of identical remainders. If a resilient subarray can contain different values modulo $k$, this approach will fail to find it.
- **In-place Modification**: Modifying the input `nums` array is efficient for space but may be undesirable depending on API requirements.

## Code Quality
- **Readability**: Moderate. The logic is simple to follow, but the intent behind `(nums[i] * curr_len) % k == nums[i]` is opaque.
- **Structure**: Poor. The handling of the final window outside the loop is redundant; a properly structured `while` or `for` loop would handle this internally.
- **Naming**: Moderate. Variable names like `i`, `j`, `max_len` are standard for this pattern.

**Concrete Improvements**:
1. Fix the infinite loop by ensuring `j` increments in every iteration.
2. Replace the manual `while` loop with a `for` loop over `j` and an inner `while` to group identical elements.
3. Re-evaluate the mathematical condition for a "resilient subarray" to ensure it doesn't require elements to be identical modulo $k$.

---

# Question Revision
# Revision Report: Longest Resilient Subarray II

- **Pattern:** Sliding Window (Two Pointers) + Frequency Map.
- **Brute Force:** Iterate through all possible subarrays $O(n^2)$, and for each, check if it satisfies the "resilient" condition (e.g., frequency of the most frequent element $\le$ some threshold) in $O(n)$. Total Time: $O(n^3)$.
- **Optimal Approach:** 
    - Use a sliding window `[left, right]` to expand the subarray.
    - Maintain a frequency map of elements and a variable `maxFreq` to track the most frequent element in the current window.
    - If the current window violates the resilience condition, shrink the window from the `left` until the condition is met again.
    - **Time Complexity:** $O(n)$ — each pointer moves across the array at most once.
    - **Space Complexity:** $O(k)$ — where $k$ is the number of distinct elements in the window.
- **The 'Aha' Moment:** The problem asks for the "longest subarray" subject to a condition that remains valid or invalid as elements are added/removed, signaling a Sliding Window.
- **Summary:** Use a sliding window with a frequency map to dynamically track the most frequent element and maintain the resilience constraint.

---