---
title: "Minimum Operations to Sort a String"
slug: minimum-operations-to-sort-a-string
date: "2026-10-21"
---

# My Solution
~~~cpp
class Solution {
public:
    vector<int> targetIndices(vector<int>& nums, int target) {
        int n = nums.size();
        vector<int>ans;
        sort(nums.begin(),nums.end());
        for (int i =0 ;i<n;i++){
            if(nums[i]==target){
                ans.push_back(i);
            }
        }
        return ans;
    }
};
~~~

# Submission Review
## Approach
- **Technique**: Sorting followed by a linear scan.
- **Optimality**: Suboptimal. The problem can be solved in $O(n)$ by counting elements smaller than the target and the occurrences of the target, without sorting the entire array.

## Complexity
- **Time Complexity**: $O(n \log n)$ due to `std::sort`.
- **Space Complexity**: $O(n)$ or $O(\log n)$ depending on the sort implementation, plus $O(k)$ for the result vector (where $k$ is the frequency of the target).
- **Bottleneck**: The sorting step is unnecessary for finding the indices of a specific value in a sorted version of the array.

## Efficiency Feedback
- **Runtime**: Higher than necessary because of the $O(n \log n)$ sort. 
- **Optimization**: Replace sorting with two counters:
    1. Count how many elements are strictly less than `target` (this gives the starting index).
    2. Count how many elements are equal to `target` (this gives the number of indices to add).

## Code Quality
- **Readability**: Good. The logic is straightforward and easy to follow.
- **Structure**: Good. Standard competitive programming structure.
- **Naming**: Moderate. `ans` is generic; `indices` would be more descriptive.
- **Improvements**: 
    - Use `std::vector::reserve()` if the number of targets is known to avoid multiple reallocations.
    - Implement the linear counting approach to reduce time complexity to $O(n)$.

---

# Question Revision
# Revision Report: Minimum Operations to Sort a String

- **Pattern:** Greedy / Two Pointers
- **Brute Force:** Generate all possible permutations of the string and calculate the minimum number of character moves required to reach the sorted version. This would result in an impractical $O(n!)$ complexity.
- **Optimal Approach:** 
    - **Logic:** To sort the string with minimum operations, we need to find the **Longest Non-Decreasing Subsequence (LNDS)** that is already in place. Any character not part of this subsequence must be moved. However, since we can move characters to *any* position, the problem simplifies to finding the longest subsequence that is already sorted. The answer is `Total Length - Length of Longest Non-Decreasing Subsequence`.
    - **Time Complexity:** $O(n \log n)$ using binary search (Patience Sorting) or $O(n^2)$ using basic DP.
    - **Space Complexity:** $O(n)$ to store the subsequence.
- **The 'Aha' Moment:** The phrase "minimum operations to sort" combined with the ability to move any character suggests that we should maximize the number of characters that *stay put*.
- **Summary:** The minimum moves to sort a sequence is the total length minus the length of its Longest Non-Decreasing Subsequence.

---