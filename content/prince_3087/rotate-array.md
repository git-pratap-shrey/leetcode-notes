---
title: "Rotate Array"
slug: rotate-array
date: "2026-09-01"
---

# My Solution
~~~cpp
class Solution {
public:
    void rotate(vector<int>& nums, int k) {
        vector<int>temp(nums.size());
        for(int i=0;i<nums.size();i++){
            temp[(i+k)%nums.size()]=nums[i];
        }
        nums=temp;
    }
};
~~~

# Submission Review
## Approach
- **Technique:** Auxiliary array mapping. 
- **Optimality:** Suboptimal. While the logic is correct for rotation, it uses $O(N)$ extra space, whereas the problem can be solved in-place with $O(1)$ space using reversal algorithms or cyclic replacements.

## Complexity
- **Time Complexity:** $O(N)$, where $N$ is the size of the array. Each element is visited once.
- **Space Complexity:** $O(N)$ to store the `temp` vector.

## Efficiency Feedback
- **Bottleneck:** The creation and assignment of `vector<int> temp(nums.size())` causes unnecessary memory allocation.
- **Optimization:** Use the **Triple Reversal** algorithm:
  1. Reverse the entire array.
  2. Reverse the first `k % n` elements.
  3. Reverse the remaining `n - k % n` elements.
  This achieves $O(1)$ auxiliary space complexity.

## Code Quality
- **Readability:** Good. The logic is straightforward and easy to follow.
- **Structure:** Good. The code is concise and fits well within the class structure.
- **Naming:** Moderate. `temp` is acceptable, but `nums` and `k` follow standard competitive programming conventions.
- **Concrete Improvements:**
  - Handle the case where `k > nums.size()` by performing `k %= nums.size()` at the beginning to avoid redundant work.
  - To optimize for memory, replace the current approach with:
    ```cpp
    k %= nums.size();
    reverse(nums.begin(), nums.end());
    reverse(nums.begin(), nums.begin() + k);
    reverse(nums.begin() + k, nums.end());
    ```

---

# Question Revision
### Revision Report: Rotate Array

**Pattern:** Array Reversal / In-place Manipulation

**Brute Force:** 
Rotate the array by one position $k$ times.
*   **Time Complexity:** $O(n \times k)$
*   **Space Complexity:** $O(1)$

**Optimal Approach:**
1. Reverse the entire array.
2. Reverse the first $k$ elements.
3. Reverse the remaining $n-k$ elements.
*   **Time Complexity:** $O(n)$
*   **Space Complexity:** $O(1)$

**The 'Aha' Moment:** 
When you need to perform a cyclic shift without extra space, treat the array as two concatenated segments $(A, B)$ that must be rearranged into $(B, A)$ using the property $(A^R B^R)^R = BA$.

**Summary:** 
To rotate an array in-place, reverse the whole sequence, then reverse the two individual segments created by the partition point.

---