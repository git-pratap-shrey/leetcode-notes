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
        int c=0;
        int curr=0;
        for(int x:requests){
            c+=abs(curr-x);
            curr=x;
        }
        return c;
    }
};
~~~

# Submission Review
## Approach
*   **Technique:** Greedy/Simulation.
*   **Optimality:** Optimal. The problem describes a simple path traversal where the total distance is the sum of absolute differences between consecutive floors.

## Complexity
*   **Time Complexity:** $O(N)$, where $N$ is the number of requests, as it iterates through the vector once.
*   **Space Complexity:** $O(1)$, as it uses a constant amount of extra space.

## Efficiency Feedback
*   **Performance:** The code is highly efficient. It performs the minimum required operations to calculate the displacement.
*   **Memory:** No unnecessary allocations are made. The use of `int` is appropriate for standard floor constraints, though one should ensure `c` does not overflow if the number of requests or floor distances are extremely large (consider `long long` for `c` if constraints suggest it).

## Code Quality
*   **Readability:** Good. The logic is straightforward and easy to follow.
*   **Structure:** Good. It is encapsulated within a class and uses a clean range-based for loop.
*   **Naming:** Moderate. The variable `c` is non-descriptive; `total_distance` or `travel_cost` would be more professional. `curr` is acceptable, though `current_floor` would improve clarity.
*   **Concrete Improvements:** 
    *   Use `long long` for the return type and the accumulator variable `c` to prevent potential integer overflow in large-scale scenarios.
    *   Add `const` to the `requests` reference in the signature to enforce read-only access: `const vector<int>& requests`.

---

# Question Revision
### Revision Report: Elevator Requests I

**Pattern:** Greedy / Interval Scheduling

**Brute Force:** 
Simulate every possible subset of requests to find the maximum count of non-overlapping intervals. This involves checking $2^n$ combinations, resulting in $O(2^n)$ time complexity.

**Optimal Approach:** 
Sort the requests by their finish times. Iterate through the sorted list, always picking the next request that starts at or after the finish time of the last accepted request.
*   **Time Complexity:** $O(n \log n)$ due to sorting.
*   **Space Complexity:** $O(1)$ (or $O(n)$ depending on sort implementation).

**The 'Aha' Moment:** 
Whenever you need to maximize the number of independent tasks that share a common resource (the elevator), sorting by the finish time ensures you leave the maximum possible room for subsequent requests.

**Summary:** 
To maximize interval density, always sort by end times and pick the earliest finishing task to "free up" the resource as soon as possible.

---