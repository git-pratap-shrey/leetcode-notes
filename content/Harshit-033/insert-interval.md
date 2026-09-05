---
title: "Insert Interval"
slug: insert-interval
date: "2026-08-11"
---

# My Solution
~~~cpp
class Solution {
public:
    vector<vector<int>> insert(vector<vector<int>>& in, vector<int>& ni) {
        vector<vector<int>> result;
        int i=0;
        int len=in.size();
        while(i<len && in[i][1]<ni[0]){
            result.push_back(in[i]);
            i++;
        }
        while(i<len && in[i][0]<=ni[1]){
            ni[0]=min(ni[0],in[i][0]);
            ni[1]=max(ni[1],in[i][1]);
            i++;
        }
        result.push_back(ni);
        while(i<len ){
            result.push_back(in[i]);
            i++;
        }
        return result;
        
    }
};
~~~

# Submission Review
## Approach
*   **Technique:** Greedy linear scan.
*   **Optimality:** Optimal. The algorithm processes the intervals in a single pass (O(N)), which is the theoretical lower bound for this problem given the input is already sorted.

## Complexity
*   **Time Complexity:** $O(N)$, where $N$ is the number of intervals, as we iterate through the input list exactly once.
*   **Space Complexity:** $O(N)$ to store the resulting intervals.

## Efficiency Feedback
*   **Efficiency:** The implementation is highly efficient. It avoids unnecessary sorting and extra data structures.
*   **Minor Optimization:** In the third `while` loop, you can use `result.insert(result.end(), in.begin() + i, in.end());` to leverage vector batch insertion, which may be slightly faster for large $N$.

## Code Quality
*   **Readability:** Good. The logic flow is straightforward and maps well to the three phases of the problem (before, overlapping, after).
*   **Structure:** Good. The use of three distinct `while` loops clearly separates the stages of the merge process.
*   **Naming:** Moderate. Variable names like `in` (for intervals) and `ni` (for newInterval) are overly abbreviated. Using descriptive names like `intervals` and `newInterval` would improve clarity.
*   **Concrete Improvements:**
    *   **Input Validation:** The code assumes `in` is sorted and non-overlapping; while typical for this problem, explicitly mentioning or asserting this is good practice.
    *   **Style:** Change `in` to `intervals` and `ni` to `newInterval`.
    *   **Optimization:** Consider using `.reserve()` on the `result` vector to prevent reallocations: `result.reserve(in.size() + 1);`.

---

# Question Revision
### Revision Report: Insert Interval

**Pattern:** Linear Scan / Greedy

**Brute Force:** 
Insert the new interval into the existing list, sort all intervals by start time, and then merge overlapping intervals.
*   **Time Complexity:** $O(n \log n)$ due to sorting.
*   **Space Complexity:** $O(n)$ to store the result.

**Optimal Approach:** 
Since the input intervals are already sorted by start time, iterate through them in three distinct phases:
1.  **Before overlap:** Add all intervals that end before the new interval starts.
2.  **During overlap:** Merge the new interval with all overlapping intervals by updating its start to `min(start)` and its end to `max(end)`.
3.  **After overlap:** Add the merged interval and all remaining intervals that start after the new interval ends.
*   **Time Complexity:** $O(n)$ because we traverse the list exactly once.
*   **Space Complexity:** $O(n)$ to store the result list.

**The 'Aha' Moment:** 
The problem explicitly states the intervals are "sorted by start time," which signals that you can perform a single pass instead of re-sorting.

**Summary:** 
Process intervals in three stages—before, during, and after the overlap—to leverage the existing sorted order and avoid unnecessary sorting.

---