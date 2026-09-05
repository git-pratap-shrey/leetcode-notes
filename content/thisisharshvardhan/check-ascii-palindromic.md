---
title: "Check ASCII Palindromic"
slug: check-ascii-palindromic
date: "2026-08-24"
---

# My Solution
~~~cpp
class Solution {
public:
    vector<int> resultArray(vector<int>& nums) {
        int n = nums.size();
        vector<int> arr1, arr2;
        arr1.push_back(nums[0]);
        arr2.push_back(nums[1]);
        for (int i = 2; i < n; i++) {
            if (arr1.back() > arr2.back()) {
                arr1.push_back(nums[i]);
            } else {
                arr2.push_back(nums[i]);
            }
        }
        arr1.insert(arr1.end(), arr2.begin(), arr2.end());
        return arr1;
    }
};
~~~

# Submission Review
## Approach
* **Technique:** Greedy simulation using two vectors to maintain the "last element" property.
* **Optimality:** Suboptimal. The logic fails to satisfy the problem requirement of placing `nums[i]` into the array whose last element is *strictly greater* than `nums[i]`. Specifically, it does not handle cases where `nums[i]` could be placed in either array, nor does it efficiently handle the binary search requirement if the arrays are large and sorted.

## Complexity
* **Time Complexity:** $O(N \log N)$ if using `std::upper_bound` correctly, but the provided code is $O(N)$ due to simple `back()` comparison. However, the logic is flawed.
* **Space Complexity:** $O(N)$ to store the result.

## Efficiency Feedback
* **Bottleneck:** The comparison `arr1.back() > arr2.back()` is logically incorrect for the intended problem (likely "Result Array After Adding Elements" from LeetCode 3067 or similar variants). You must compare `nums[i]` against `arr1.back()` and `arr2.back()` using binary search (e.g., `upper_bound`) to determine the correct placement.
* **Efficiency:** `arr1.insert` with `arr2` is $O(N)$, which is fine, but the overall greedy choice is insufficient to guarantee the correct result based on typical competitive programming constraints for this problem type.

## Code Quality
* **Readability:** Good. The code is concise and easy to follow.
* **Structure:** Moderate. It separates the two arrays but lacks the necessary conditional logic to handle cases where both `arr1` and `arr2` satisfy the condition.
* **Naming:** Good. `arr1` and `arr2` are clear enough for this specific logic.
* **Concrete Improvements:**
    * Use `std::upper_bound` on both arrays to find the insertion point.
    * Handle the edge case where `nums[i]` is smaller than the last elements of both arrays (typically, push to the array with the smaller `back()` value or follow the problem-specific tie-breaking rule).
    * Pre-allocate vector memory using `reserve()` to prevent multiple reallocations during `push_back`.

---

# Question Revision
### Revision Report: Check ASCII Palindromic

**Pattern:** Two Pointers

**Brute Force:** 
Generate the reverse of the string and compare it to the original. This requires creating a new string, resulting in $O(n)$ time and $O(n)$ space complexity.

**Optimal Approach:**
Initialize two pointers at both ends of the string. Compare the characters at each pointer; if they match, move the pointers toward the center. If they mismatch, it is not a palindrome.
*   **Time Complexity:** $O(n)$
*   **Space Complexity:** $O(1)$

**The 'Aha' Moment:**
When a problem asks to verify symmetry from both ends toward the middle, using pointers moving in opposite directions eliminates the need for auxiliary storage.

**Summary:**
Use two pointers for palindrome checks to turn an $O(n)$ space operation into an $O(1)$ space operation.

---