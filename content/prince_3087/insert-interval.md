---
title: "Insert Interval"
slug: insert-interval

---
---

# My Solution
~~~cpp
class Solution {
public:
    vector<vector<int>> insert(vector<vector<int>>& intervals, vector<int>& newInterval) {
        vector<vector<int>>sortintervals;
        int insert = 1;
        for(int i=0;i<intervals.size();i++){
            int start = intervals[i][0];
            if(insert==1 && start>=newInterval[0]){
                sortintervals.push_back(newInterval);
                insert =0;
            }
            sortintervals.push_back(intervals[i]);
        }
        if(insert==1){
            sortintervals.push_back(newInterval);
        }
    
        vector<vector<int>>res;
        int start1 = sortintervals[0][0];
        int end1 = sortintervals[0][1];
        for(int j=1;j<sortintervals.size();j++){
            int start2 = sortintervals[j][0];
            int end2 = sortintervals[j][1];
            if(end1>=start2){
                start1=start1;
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
*   **Technique:** Two-pass approach. First, the code inserts the `newInterval` into the sorted list by iterating through the original vector. Second, it performs a linear scan to merge overlapping intervals.
*   **Optimality:** Suboptimal. While the logic is correct, it can be implemented in a single pass ($O(N)$) without creating an intermediate `sortintervals` vector.

## Complexity
*   **Time Complexity:** $O(N)$, where $N$ is the number of intervals. It iterates through the input once and the intermediate vector once.
*   **Space Complexity:** $O(N)$, as it allocates `sortintervals` to store the inserted interval.

## Efficiency Feedback
*   **Bottleneck:** The creation of the `sortintervals` vector causes unnecessary memory allocation and an extra iteration. 
*   **Optimization:** You can merge intervals on the fly as you iterate:
    1. Add all intervals ending before `newInterval` starts.
    2. Merge all intervals that overlap with `newInterval`.
    3. Add all intervals starting after `newInterval` ends.

## Code Quality
*   **Readability:** Moderate. The logic is easy to follow, but the two-pass approach makes it unnecessarily verbose.
*   **Structure:** Moderate. The use of a boolean flag (`insert`) is functional, but the post-loop checks for `insert == 1` and the final `res.push_back` outside the loop are common patterns that could be cleaner.
*   **Naming:** Moderate. `start1`, `end1`, `start2`, `end2` are descriptive enough, but `sortintervals` is slightly misleading since it is a merge-ready list, not necessarily a sorted one (though it is sorted here).
*   **Improvements:**
    *   **Edge Case:** The current code will crash on an empty input `intervals` because it accesses `sortintervals[0]` immediately. Add a check `if (intervals.empty()) return {newInterval};`.
    *   **Logic Simplification:** Eliminate the `sortintervals` vector entirely. Perform the merge logic within the primary loop.
    *   **Redundant code:** `start1 = start1;` is a no-op and should be removed.

---
---


# Question Revision
### Revision Report: Insert Interval

**Pattern:** Linear Scan / Greedy

**Brute Force:**
1. Append the new interval to the existing list.
2. Sort the entire list by start times ($O(n \log n)$).
3. Iterate and merge overlapping intervals ($O(n)$).
*   **Complexity:** $O(n \log n)$ time, $O(n)$ space.

**Optimal Approach:**
1. **Segment 1:** Add all intervals ending before the new interval starts.
2. **Segment 2:** Iterate through overlapping intervals, updating the `newInterval` boundaries (`start = min(start, interval.start)`, `end = max(end, interval.end)`), then add the merged result.
3. **Segment 3:** Add all remaining intervals starting after the new interval ends.
*   **Complexity:** $O(n)$ time, $O(n)$ space (for the output array).

**The 'Aha' Moment:**
The problem provides a pre-sorted list, which is a massive hint that you can process the intervals in a single linear pass by categorizing them into "before," "overlapping," and "after" segments.

**Summary:**
Process pre-sorted intervals by greedily merging the "overlapping" middle section and appending the "before" and "after" segments untouched.

---
