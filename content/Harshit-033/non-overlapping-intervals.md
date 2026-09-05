---
title: "Non-overlapping Intervals"
slug: non-overlapping-intervals
date: "2026-08-11"
---

# My Solution
~~~cpp
class Solution {
public:
    int eraseOverlapIntervals(vector<vector<int>>& intervals) {
        sort(intervals.begin(), intervals.end(), [](auto& a, auto& b) {
            return a[1] < b[1];
        });
        int count=0;
        int last_time=intervals[0][1];
        for(int i=1;i<intervals.size();i++){
            if(intervals[i][0]<last_time){
                count++;
                continue;
            }
            last_time=intervals[i][1];
        }
        return count;
        
    }
};
~~~

# Submission Review
## Approach
*   **Technique**: Greedy algorithm based on Earliest Finish Time.
*   **Optimality**: Optimal. Selecting intervals that finish earliest leaves the maximum room for subsequent intervals, which is the standard strategy for the Interval Scheduling problem.

## Complexity
*   **Time Complexity**: $O(N \log N)$ due to the sorting step, where $N$ is the number of intervals. The subsequent linear scan is $O(N)$.
*   **Space Complexity**: $O(1)$ auxiliary space (ignoring the space required for the sort stack, which is $O(\log N)$).

## Efficiency Feedback
*   **Efficiency**: Highly efficient. The solution is near the theoretical lower bound for this problem.
*   **Edge Cases**: The current implementation lacks a check for an empty input vector (`intervals.empty()`). Accessing `intervals[0]` on an empty vector will cause a runtime error (segmentation fault).

## Code Quality
*   **Readability**: Good. The intent is clear and follows the standard greedy pattern.
*   **Structure**: Good. The logic is concise.
*   **Naming**: Moderate. While `count` and `last_time` are acceptable, `last_end_time` would be more descriptive.
*   **Concrete Improvements**:
    *   **Safety**: Add an early exit condition: `if (intervals.empty()) return 0;`.
    *   **Modern C++**: Pass `intervals` by `const reference` if the function signature allowed it, though for competitive programming, the current signature is standard.
    *   **Style**: Ensure consistent spacing around operators (e.g., `count++` vs `int count = 0`).

---

# Question Revision
### Revision Report: Non-overlapping Intervals

**Pattern:** Greedy (Interval Scheduling)

**Brute Force:** 
Generate all possible subsets of intervals, check if each subset is non-overlapping, and track the maximum size. This results in $O(2^n)$ time complexity.

**Optimal Approach:**
1. Sort intervals by their **end times** in ascending order.
2. Initialize `count = 0` (to track removals) and `end = -∞`.
3. Iterate through intervals: if the start time is less than `end`, increment `count` (overlap detected); otherwise, update `end` to the current interval's end.
4. **Complexity:** Time $O(n \log n)$ due to sorting; Space $O(1)$ or $O(n)$ depending on the sort implementation.

**The 'Aha' Moment:**
When minimizing removals to resolve overlaps, always prioritize the interval that finishes earliest to leave the maximum possible "room" for subsequent intervals.

**Summary:**
To maximize the number of non-overlapping intervals, always greedily pick the one that ends soonest.

---