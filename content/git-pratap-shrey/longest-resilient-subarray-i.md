---
title: "Longest Resilient Subarray I"
slug: longest-resilient-subarray-i
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

        // vector<int> prefix;
        // int sum = 0;
        // for(auto n : nums){
        //     sum += n;
        //     prefix.push_back(sum);
        // }

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

        // cout<<max_len<<endl;
        return max_len;
    }
};
~~~

# Submission Review
## Approach
- **Technique:** Two-pointer / Sliding window. The code attempts to find contiguous segments of identical elements (after taking modulo $k$) and checks a specific condition.
- **Optimality:** **Not Optimal / Incorrect.** The logic only considers subarrays consisting of the *same* element value. The problem definition for "resilient" typically involves the sum of the subarray, and this code ignores any subarray containing diverse elements. Additionally, the `while` loop contains a logic error that leads to an infinite loop.

## Complexity
- **Time Complexity:** $O(N)$ (intended), but currently $\infty$ due to an infinite loop.
- **Space Complexity:** $O(1)$ beyond the input array (since the input array is modified in place).

## Efficiency Feedback
- **Critical Bug:** The `while` loop will hang. If `nums[j] != nums[i]`, the code executes `i = j`, but it **does not increment `j`**. Since `j` remains the same and `nums[j]` still does not equal the new `nums[i]` (which is the same value), the loop never progresses.
- **Logic Flaw:** The condition `(nums[i] * curr_len) % k == nums[i]` only checks if a subarray of identical elements is resilient. It fails to account for subarrays with different elements that could satisfy the resilience condition.

## Code Quality
- **Readability:** Moderate. The logic is simple, but the commented-out prefix sum code suggests an unfinished thought process.
- **Structure:** Poor. The loop logic is broken (missing increment), and the final check outside the loop is a redundant attempt to handle the tail of the array.
- **Naming:** Good. `max_len`, `curr_len`, `i`, and `j` are standard for this type of problem.
- **Improvements:** 
    1. Fix the `while` loop to ensure `j` always increments.
    2. Implement a proper sliding window or prefix sum + hash map approach to handle subarrays with varying elements.
    3. Remove dead/commented code.

---

# Question Revision
# Revision Report: Longest Resilient Subarray I

- **Pattern:** Two Pointers / Sliding Window
- **Brute Force:** Iterate through all possible subarrays $(i, j)$, check if each is "resilient" by scanning all elements within that range, and track the maximum length.
- **Optimal Approach:** 
    - Use a sliding window defined by two pointers (`left`, `right`).
    - Expand `right` to include elements.
    - If the "resilient" condition is violated (e.g., an element exceeds a specific threshold or a property is lost), shrink the window from the `left` until the condition is restored.
    - **Time Complexity:** $O(n)$ as each pointer traverses the array once.
    - **Space Complexity:** $O(1)$ as only a few variables are used to track indices and length.
- **The 'Aha' Moment:** The requirement to find the "longest subarray" combined with a condition that remains valid as you shrink the window signals a Sliding Window pattern.
- **Summary:** Expand the window to find the maximum length and shrink it from the left the moment the resiliency condition is broken.

---