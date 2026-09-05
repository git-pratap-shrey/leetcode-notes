---
title: "Elevator Requests I"
slug: elevator-requests-i
date: "2026-08-15"
---

# My Solution
~~~cpp
class Solution {
public:
    int elevatorRequests(int n, vector<int>& r) {
        int flour=0;
        int sum=0;
        for(int i=0;i<r.size();i++){
            sum+=abs(flour-r[i]);
            flour=r[i];
        }
        return sum;
        
    }
};
~~~

# Submission Review
## Approach
*   **Technique:** Greedy simulation (linear traversal).
*   **Optimality:** Optimal. The problem requires calculating the total distance traveled by an elevator visiting floors in a fixed sequence, which is simply the sum of absolute differences between consecutive floors.

## Complexity
*   **Time Complexity:** $O(N)$, where $N$ is the number of requests. The algorithm iterates through the vector exactly once.
*   **Space Complexity:** $O(1)$, as it uses a constant amount of extra space regardless of input size.

## Efficiency Feedback
*   The implementation is highly efficient. It avoids unnecessary data structures or redundant calculations.
*   No meaningful optimizations are possible, as the problem inherently requires $O(N)$ time to process all requests.

## Code Quality
*   **Readability:** Good. The logic is straightforward and easy to follow.
*   **Structure:** Good. The method is encapsulated properly within the `Solution` class.
*   **Naming:** Moderate. `flour` is a misspelling of `floor`. Renaming this variable would improve clarity.
*   **Improvements:**
    *   Correct the typo: `flour` $\rightarrow$ `current_floor`.
    *   Consider using `long long` for the `sum` variable if the constraints on the number of requests or floor heights could cause an integer overflow in a production environment (though standard for competitive programming, it is a safe practice).
    *   The parameter `n` is unused; it should be removed or marked to avoid compiler warnings.

```cpp
// Suggested refactoring:
class Solution {
public:
    int elevatorRequests(int /*n*/, const vector<int>& r) {
        int current_floor = 0;
        int total_distance = 0;
        for (int target_floor : r) {
            total_distance += std::abs(current_floor - target_floor);
            current_floor = target_floor;
        }
        return total_distance;
    }
};
```

---

# Question Revision
### Revision Report: Elevator Requests I

**Pattern:** Greedy / Interval Scheduling

**Brute Force:** 
Simulate every possible stopping sequence by evaluating all subsets of requests, leading to $O(2^n)$ complexity, which fails for large datasets.

**Optimal Approach:**
Sort requests by their target floor (or time/direction). Iterate through the sorted list, maintaining a `current_floor` pointer. Accept a request only if it is reachable without backtracking or if it aligns with the current direction.
*   **Time Complexity:** $O(n \log n)$ due to sorting.
*   **Space Complexity:** $O(1)$ (if sorting in-place) or $O(n)$ for storage.

**The 'Aha' Moment:**
When the problem asks for a sequence that minimizes travel distance or maximizes throughput, it is a sign that sorting by destination and greedily picking the next valid request will outperform exhaustive search.

**Summary:** 
Sort by constraints, then greedily pick the next valid state to avoid the combinatorial explosion of pathfinding.

---