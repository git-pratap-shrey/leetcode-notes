---
title: "Elevator Requests I"
slug: elevator-requests-i
date: "2026-08-15"
---

# My Solution
~~~cpp
class Solution {
public:
    int elevatorRequests(int n, vector<int>& requests) {
        int curfloor = 0;
        int time = 0;
        for(int i=0 ; i<requests.size();i++){
            time += abs(curfloor - requests[i]);
            curfloor = requests[i];
        }
        return time;
        
    }
};
~~~

# Submission Review
## Approach
*   **Technique:** Greedy/Simulation.
*   **Optimality:** Optimal. The problem asks for the total distance traveled by an elevator visiting a sequence of floors in a fixed order. Since the elevator must visit them sequentially, summing the absolute differences between consecutive floors is the only possible path.

## Complexity
*   **Time Complexity:** $O(N)$, where $N$ is the number of requests. The solution iterates through the input vector exactly once.
*   **Space Complexity:** $O(1)$, as it uses only a constant amount of extra space beyond the input.

## Efficiency Feedback
*   **Runtime:** Highly efficient; it performs the minimum possible work to calculate the total travel distance.
*   **Memory:** Highly efficient; it uses only two integer variables.
*   **Optimization:** No meaningful optimizations possible for this specific algorithmic approach.

## Code Quality
*   **Readability:** Good. The logic is clear and follows standard procedural flow.
*   **Structure:** Good. The function is concise and fits the requirements of the task.
*   **Naming:** Moderate. `curfloor` is acceptable, but `currentFloor` (camelCase) is generally preferred in C++ codebases to match standard naming conventions.
*   **Concrete Improvements:**
    *   **Input Const-Correctness:** Change `vector<int>& requests` to `const vector<int>& requests` to signify that the input data is not being modified.
    *   **Range-based for loop:** Since index manipulation is not required, use `for (int floor : requests)` for cleaner, more modern C++ syntax.
    *   **Return Type:** If the input constraints allow for very large values, consider if `long long` is necessary for `time` to prevent integer overflow.

---

# Question Revision
### Revision Report: Elevator Requests I

**Pattern:** Greedy / Interval Scheduling

**Brute Force:**
Simulate every possible subset of requests and check for conflicts (e.g., overlapping intervals or sequence constraints), typically resulting in $O(2^n)$ or $O(n!)$ complexity.

**Optimal Approach:**
1. Sort the requests based on their target floor (end times).
2. Iterate through the sorted requests and greedily accept the request that finishes earliest, provided it doesn't conflict with the current state of the elevator.
3. This maintains a running count of serviced requests by always picking the next non-overlapping interval.
* **Time Complexity:** $O(n \log n)$ due to sorting.
* **Space Complexity:** $O(1)$ or $O(n)$ depending on the storage of the sorted list.

**The 'Aha' Moment:**
When a problem asks to maximize the number of items (requests) that can fit into a constrained resource (elevator capacity/time), it is a classic indicator that a greedy sorting strategy will outperform complex DP.

**Summary:**
Always sort by the end time and pick greedily to solve "maximum count" scheduling problems in $O(n \log n)$.

---