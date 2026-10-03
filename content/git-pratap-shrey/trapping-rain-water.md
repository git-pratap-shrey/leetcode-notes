---
title: "Trapping Rain Water"
slug: trapping-rain-water
date: "2026-09-30"
---

# My Solution
~~~cpp
class Solution {
public:
    vector<int> rearrangeArray(vector<int>& nums) {
        map<int, int> mp;
        for(int num : nums){
            mp[num]++;
        }

        vector<int> ans;
        while(mp.size()){
            for(auto it = mp.begin(); it != mp.end();){
                ans.push_back(it->first);
                it->second--;

                if(!it->second){
                    it = mp.erase(it);
                }
                else{
                    it++;
                }
            }
        }

        return ans;
    }
};
~~~

# Submission Review
## Approach
- **Technique:** Frequency mapping using a `std::map` (sorted) and iterative distribution.
- **Correctness:** **Incorrect.** The provided code does not solve the "Trapping Rain Water" problem; it implements a logic to rearrange elements of an array by cycling through unique values.
- **Optimality:** Not applicable as the code solves a different, unspecified problem.

## Complexity
- **Time Complexity:** $O(N \cdot \text{unique\_elements})$ in the worst case (e.g., many duplicates of a few elements), but since `std::map` operations are $O(\log U)$, the overall complexity is roughly $O(N \log U)$ where $U$ is the number of unique elements.
- **Space Complexity:** $O(N)$ to store the map and the result vector.

## Efficiency Feedback
- **Bottleneck:** Using `std::map` introduces logarithmic overhead for every insertion and lookup. If the goal was simply frequency counting without sorted keys, `std::unordered_map` would be faster.
- **Erasure:** Erasing elements from a map during iteration is handled correctly via the iterator return value, but the overall strategy of repeated passes over the map is inefficient for large datasets.

## Code Quality
- **Readability:** Moderate. The logic is easy to follow, but the lack of comments makes the intent unclear.
- **Structure:** Good. The loop and iterator management are handled safely.
- **Naming:** Poor. `rearrangeArray` and `ans` are generic. More importantly, the function name and logic have no relation to the "Trapping Rain Water" problem.
- **Concrete Improvements:** 
    1. **Align Solution with Problem:** The code must be entirely rewritten to address "Trapping Rain Water" (which typically requires a two-pointer approach or a monotonic stack).
    2. **Data Structure:** Replace `std::map` with `std::unordered_map` if sorted order is not required.

---

# Question Revision
# Revision Report: Trapping Rain Water

- **Pattern:** Two Pointers
- **Brute Force:** For every element, scan the entire left side and right side to find the maximum heights. The water trapped at the current index is $\min(\text{max\_left}, \text{max\_right}) - \text{height}[i]$.
- **Optimal Approach:** 
    - Use two pointers (`left` at 0, `right` at $n-1$) and two variables to track `left_max` and `right_max`.
    - Move the pointer pointing to the smaller height inward. 
    - Since the water level is limited by the **shorter wall**, if `height[left] < height[right]`, we know the bottleneck is on the left; we update `left_max` and calculate water based on it, regardless of what's in the middle.
    - **Time Complexity:** $O(n)$
    - **Space Complexity:** $O(1)$
- **The 'Aha' Moment:** The amount of water at any point is determined by the *shorter* of the two boundaries, allowing us to process the array from both ends inward.
- **Summary:** Use two pointers to track the limiting boundary from both ends to calculate trapped water in a single pass.

---