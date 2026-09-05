---
title: "Elevator Requests I"
slug: elevator-requests-i
date: "2026-08-17"
---

# My Solution
~~~cpp
class Solution {
public:
    int elevatorRequests(int n, vector<int>& requests) {
        int ans=requests[0];
        for(int i=1;i<requests.size();i++){
            ans=ans+abs(requests[i]-requests[i-1]);
        }
        return ans;
    }
};
~~~

# Submission Review
## Approach
- **Technique:** Simple simulation/iteration. It calculates the Manhattan distance between consecutive points in the `requests` sequence, starting from floor 0.
- **Optimality:** Optimal. The problem requires visiting requests in the given order, necessitating a linear traversal.

## Complexity
- **Time Complexity:** $O(R)$, where $R$ is the number of requests.
- **Space Complexity:** $O(1)$, as it only uses a single integer to accumulate the distance.

## Efficiency Feedback
- The solution is highly efficient in both time and memory.
- **Potential Issue:** The code does not handle the case where `requests` is empty, which would cause a runtime error (segmentation fault) at `requests[0]`.

## Code Quality
- **Readability:** Good. The logic is straightforward and easy to follow.
- **Structure:** Good.
- **Naming:** Moderate. `ans` is generic; `totalDistance` would be more descriptive. The parameter `n` is unused, which can trigger compiler warnings.
- **Improvements:** 
    - Add a check for `requests.empty()`.
    - Remove the unused parameter `n` if the API allows, or mark it as unused.
    - Use `long long` for `ans` if the number of requests or floor heights are large enough to cause an integer overflow.

---

# Question Revision
### Elevator Requests I

**Pattern:** Simulation + Sorting (SCAN Algorithm)

**Brute Force:** 
Process requests in the order they are received. This leads to inefficient "yo-yoing" (oscillating between distant floors), maximizing total travel distance.

**Optimal Approach:** 
Implement the SCAN algorithm to minimize directional changes:
1. Split requests into two lists: `above` (floors > current) and `below` (floors < current).
2. Sort `above` in ascending order and `below` in descending order.
3. Process all requests in the current direction of travel until the list is empty.
4. Switch direction and process the remaining list.

*   **Time Complexity:** $O(n \log n)$ due to sorting.
*   **Space Complexity:** $O(n)$ to store separated request lists.

**The 'Aha' Moment:** 
The requirement to minimize distance while moving on a 1D axis indicates that processing requests in spatial order (sorting) is superior to processing them in temporal order.

**Summary:** 
Sort requests by distance and direction to process all stops in one trajectory before reversing.

---