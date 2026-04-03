---
title: "Merge Intervals"
slug: merge-intervals

---
---

# My Solution
~~~cpp
class Solution {
public:
    vector<vector<int>> merge(vector<vector<int>>& intervals) {
        vector<vector<int>>res;
         sort(intervals.begin(),intervals.end());
        int start1 =intervals[0][0];
        int end1 = intervals[0][1];
        for(int i=1;i<intervals.size();i++){
            int start2 = intervals[i][0];
            int end2 = intervals[i][1];
            if(end1>=start2){
                start1 =start1;;
                end1 = max(end1,end2);
               
            }
            else{
                res.push_back({start1,end1});
                start1 = start2;
                end1 = end2;
            }
            

        }
        res.push_back({start1,end1});
        return res;
        
    }
};
~~~

# Submission Review
## Approach
*   **Technique:** Greedy approach using sorting.
*   **Optimality:** Optimal. Sorting ensures that intervals are processed linearly, allowing for a single-pass merge.

## Complexity
*   **Time Complexity:** $O(N \log N)$ due to the sorting step, where $N$ is the number of intervals. The subsequent linear scan is $O(N)$.
*   **Space Complexity:** $O(N)$ to store the result vector (or $O(\log N)$ depending on the sort implementation's auxiliary space).

## Efficiency Feedback
*   **Edge Case Vulnerability:** The solution will crash (segmentation fault) if `intervals` is empty because it accesses `intervals[0]` without a size check.
*   **Optimization:** The line `start1 = start1;;` is redundant and contains a double semicolon. The logic is otherwise efficient as it avoids unnecessary copies by passing by reference.

## Code Quality
*   **Readability:** Moderate. The logic is clear, but the lack of an initial empty-check makes the code fragile.
*   **Structure:** Good. The loop-based merging logic is standard and effective.
*   **Naming:** Moderate. `start1`, `end1`, `start2`, `end2` are descriptive enough, but could be cleaner (e.g., `currentStart`, `currentEnd`).
*   **Concrete Improvements:**
    *   **Add Guard Clause:** Add `if (intervals.empty()) return {};` at the start to handle empty inputs.
    *   **Minor Cleanup:** Remove the redundant `start1 = start1;;`.
    *   **Reserve Memory:** `res.reserve(intervals.size());` would prevent multiple reallocations of the result vector.

```cpp
// Suggested fix for robustness:
if (intervals.empty()) return {};
vector<vector<int>> res;
res.reserve(intervals.size());
// ... rest of logic
```

---
---


# Question Revision
### Merge Intervals

**Pattern:** Sorting + Greedy

**Brute Force:** Compare every interval with every other interval to check for overlaps, merging as necessary.
*   **Time Complexity:** $O(n^2)$
*   **Space Complexity:** $O(n)$ (for the output array)

**Optimal Approach:** 
1. Sort the intervals by their start times.
2. Iterate through the sorted list, maintaining a `current_interval`. 
3. If the next interval's start time is $\le$ the `current_interval`'s end time, merge them by updating the `current_interval`'s end to `max(current_end, next_end)`. Otherwise, push the `current_interval` and move to the next.
*   **Time Complexity:** $O(n \log n)$ due to sorting.
*   **Space Complexity:** $O(n)$ or $O(1)$ depending on whether the output space is counted.

**The 'Aha' Moment:** Whenever a problem involves overlapping ranges or segments, sorting by the start coordinate collapses the complexity by ensuring you only ever need to compare the "current" interval with the immediate next one.

**Summary:** Sort by start time to linearize the timeline, allowing you to merge overlapping segments in a single pass.

---
