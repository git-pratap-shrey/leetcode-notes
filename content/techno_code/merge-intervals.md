---
title: "Merge Intervals"
slug: merge-intervals
date: "2026-04-16"
---

# My Solution
~~~cpp
class Solution {
public:
    vector<vector<int>> merge(vector<vector<int>>& intervals) {
        int n=intervals.size();
        vector<vector<int>>ans;
        sort(intervals.begin(), intervals.end());
        for(int i=0;i<n;i++){
            if(ans.empty() ||  intervals[i][0]> ans.back()[1]){
                ans.push_back(intervals[i]);
            }
            else{
                ans.back()[1]= max(ans.back()[1],intervals[i][1]);
            }
        }
        return ans;
    }
};
~~~

# Submission Review
## Approach
- **Technique**: Sorting followed by a linear scan (Greedy).
- **Optimality**: Optimal. Sorting by start time is the standard and most efficient way to solve the merge intervals problem, as it ensures that only the most recently added interval in the result set needs to be checked for overlaps.

## Complexity
- **Time Complexity**: $O(n \log n)$, where $n$ is the number of intervals. The sorting step dominates the complexity; the subsequent linear scan takes $O(n)$.
- **Space Complexity**: $O(n)$ (or $O(\log n)$ ignoring output space). The space is used to store the result vector `ans` and the internal stack space used by `std::sort`.

## Efficiency Feedback
- The runtime is optimal for the given constraints.
- **Memory**: Memory usage is minimal. Using `ans.back()` avoids unnecessary indexing or temporary variables.

## Code Quality
- **Readability**: Good. The logic is concise and follows the standard pattern for this problem.
- **Structure**: Good. The flow is linear and easy to follow.
- **Naming**: Moderate. While `n` and `ans` are acceptable in competitive programming, `merged` or `result` would be more descriptive than `ans`.
- **Improvements**: 
    - The code is already very lean. No significant improvements are needed for correctness or performance. 
    - Minor C++ stylistic point: `intervals.size()` returns `size_t`; using `int n` might trigger signed/unsigned comparison warnings on some compilers.

---

# Question Revision
### Merge Intervals

**Pattern:** Sorting / Greedy

**Brute Force:** Compare every interval with every other interval repeatedly to find overlaps, merging them until no further changes occur.
*   **Complexity:** $O(n^2)$

**Optimal Approach:** 
1. Sort intervals by their start time.
2. Initialize a `merged` list with the first interval.
3. Iterate through the remaining intervals:
    * If the current interval's start $\le$ the last merged interval's end, they overlap $\rightarrow$ update the last merged interval's end to $\max(\text{last end}, \text{current end})$.
    * Otherwise, there is no overlap $\rightarrow$ append the current interval to the `merged` list.

**Complexity:**
*   **Time:** $O(n \log n)$ (dominated by sorting)
*   **Space:** $O(n)$ or $O(\log n)$ (depending on sorting implementation)

**The 'Aha' Moment:** Overlapping intervals can only be detected in a single linear pass if they are first processed in chronological order.

**Summary:** Sort by start time, then merge overlapping intervals by extending the boundary of the current interval.

---