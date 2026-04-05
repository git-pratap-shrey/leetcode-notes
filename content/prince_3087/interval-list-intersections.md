---
title: "Interval List Intersections"
slug: interval-list-intersections

---
---

# My Solution
~~~cpp
class Solution {
public:
    vector<vector<int>> intervalIntersection(vector<vector<int>>& firstList, vector<vector<int>>& secondList) {
        vector<vector<int>>res;
        int i=0,j=0;
        while(i<firstList.size()&& j<secondList.size()){
            int start1 = firstList[i][0];
            int end1 = firstList[i][1];
            int start2 = secondList[j][0];
            int end2= secondList[j][1];
            if(start1<=start2){
                if(end1>=start2){
                    int s = max(start1,start2);
                    int e = min(end1,end2);
                    res.push_back({s,e});
                }   
            }
            else{
                if(end2>=start1){
                    int s = max(start1,start2);
                    int e = min(end1,end2);
                    res.push_back({s,e});
                }

            }

            if( end1<end2){
                i++;
            }
            else{
                j++;
            }

            

        }
        return res;
        
    }
};
~~~

# Submission Review
## Approach
*   **Technique:** Two-pointer approach.
*   **Optimality:** Optimal. The algorithm processes each interval at most once, which is the theoretical lower bound for this problem.

## Complexity
*   **Time Complexity:** $O(N + M)$, where $N$ and $M$ are the sizes of `firstList` and `secondList`, respectively. Every iteration of the `while` loop advances at least one pointer.
*   **Space Complexity:** $O(K)$, where $K$ is the number of intersections, to store the result.

## Efficiency Feedback
*   The logic is highly efficient.
*   **Optimization:** The conditional `if/else` block inside the loop can be simplified. Since `max(start1, start2)` and `min(end1, end2)` are always calculated, you can compute the intersection regardless of which interval starts first. The condition `start <= end` is sufficient to determine if a valid intersection exists.

## Code Quality
*   **Readability:** Good. The logic is clean and easy to follow.
*   **Structure:** Good. The two-pointer iteration is standard for this type of problem.
*   **Naming:** Moderate. Variables like `s` and `e` are acceptable given the short scope, but `start` and `end` would be clearer.
*   **Concrete Improvements:**
    *   **Refactor logic:** You can unify the logic to avoid redundant `if/else` checks:
        ```cpp
        int start = max(firstList[i][0], secondList[j][0]);
        int end = min(firstList[i][1], secondList[j][1]);
        if (start <= end) {
            res.push_back({start, end});
        }
        ```
    *   **Reservation:** Since the result size can be estimated (at most $N+M$), `res.reserve(firstList.size() + secondList.size())` can slightly improve performance by reducing reallocations.

---
---


# Question Revision
### Revision Report: Interval List Intersections

**Pattern:** Two Pointers

**Brute Force:**
Compare every interval in List A against every interval in List B, checking for overlaps and calculating intersection bounds.
*   **Time:** $O(n \times m)$
*   **Space:** $O(k)$ (where $k$ is the number of intersections)

**Optimal Approach:**
Initialize two pointers at the start of both lists. At each step, identify the overlap by taking the `max` of the start times and the `min` of the end times. If the start is $\le$ end, record the intersection. Increment the pointer of the interval that ends earlier, as it cannot possibly intersect with any subsequent intervals in the other list.
*   **Time:** $O(n + m)$
*   **Space:** $O(k)$ (for the result list)

**The 'Aha' Moment:**
When two sorted lists are traversed, the interval ending earliest is "exhausted," allowing you to safely move to the next candidate without re-scanning.

**Summary:**
Always increment the pointer of the interval with the smaller end time to greedily exhaust possibilities and maintain $O(n+m)$ efficiency.

---
