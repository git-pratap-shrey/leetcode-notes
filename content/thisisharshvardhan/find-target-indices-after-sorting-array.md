---
title: "Find Target Indices After Sorting Array"
slug: find-target-indices-after-sorting-array
date: "2026-10-19"
---

# My Solution
~~~cpp
class Solution {
public:
    vector<int> targetIndices(vector<int>& nums, int target) {
        int n=nums.size();
        sort(nums.begin(),nums.end());
        vector<int>res;
        for(int i=0;i<n;i++){
            if(nums[i]==target)
        res.push_back(i);
        }
        return res;
    }
};
~~~

# Submission Review
## Approach
- **Technique:** Sorting followed by a linear scan.
- **Optimality:** Suboptimal. The problem can be solved in $O(n)$ time by simply counting the occurrences of the target and the number of elements smaller than the target, avoiding a full sort.

## Complexity
- **Time Complexity:** $O(n \log n)$ due to `std::sort`.
- **Space Complexity:** $O(1)$ or $O(\log n)$ auxiliary space depending on the sort implementation (excluding the space required for the output vector).

## Efficiency Feedback
- **Bottleneck:** The sorting step is the primary bottleneck.
- **Optimization:** Instead of sorting, maintain two counters: `count` (how many times `target` appears) and `smaller` (how many elements are less than `target`). The indices would then be `smaller, smaller + 1, ..., smaller + count - 1`. This would reduce time complexity to $O(n)$.

## Code Quality
- **Readability:** Moderate. The logic is simple, but the indentation for the `if` statement block is missing, which hinders clarity.
- **Structure:** Good. The function follows the expected signature and logic flow.
- **Naming:** Good. `nums`, `target`, and `res` are standard and descriptive for this context.
- **Concrete Improvements:** 
    - Fix indentation for the `res.push_back(i);` line.
    - Use `const vector<int>& nums` if the input doesn't need to be mutated (though `sort` requires mutation, reinforcing the need for the counting approach).

---

# Question Revision
# Revision Report: Find Target Indices After Sorting Array

- **Pattern:** Sorting / Counting
- **Brute Force:** Sort the array using a built-in sorting algorithm and then iterate through the sorted array to collect all indices where the element equals the target.
- **Optimal Approach:** 
    - **Logic:** Since we only need the indices of a specific `target` after sorting, we don't need to sort the entire array. Simply count how many numbers in the array are *smaller* than the target (this determines the starting index) and how many times the *target* itself appears (this determines the range of indices).
    - **Time Complexity:** $O(n)$ — a single pass through the array.
    - **Space Complexity:** $O(1)$ — excluding the output list.
- **The 'Aha' Moment:** Realizing that the final position of an element in a sorted array depends solely on the count of elements smaller than it.
- **Summary:** To find indices of a target after sorting, just count the elements smaller than the target to find the start, then count the occurrences of the target.

---