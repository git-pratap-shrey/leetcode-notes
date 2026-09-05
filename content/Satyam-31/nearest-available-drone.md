---
title: "Nearest Available Drone"
slug: nearest-available-drone
date: "2026-08-16"
---

# My Solution
~~~cpp
class Solution {
public:
    bool isPowerOfThree(int n) {
        if(n<=0){
            return false;
        }
        while(n%3==0){
            n=n/3;
        }
        return n==1;
    }
};
~~~

# Submission Review
## Approach
*   **Technique:** Iterative division (trial division).
*   **Optimality:** Optimal for standard integer constraints. While an $O(1)$ mathematical approach exists (using the maximum power of 3 that fits in a 32-bit integer), this iterative approach is highly efficient given the logarithmic reduction of $n$.

## Complexity
*   **Time Complexity:** $O(\log_3 n)$. The loop runs once for every power of 3 in the prime factorization of $n$.
*   **Space Complexity:** $O(1)$.

## Efficiency Feedback
*   **Performance:** Excellent. The loop terminates very quickly (at most 19 iterations for a 32-bit signed integer, as $3^{19} < 2^{31}-1 < 3^{20}$). 
*   **Optimization:** If the problem constraints were extremely tight or called inside a massive hot loop, you could replace the loop with `return n > 0 && 1162261467 % n == 0;`, where `1162261467` is $3^{19}$.

## Code Quality
*   **Readability:** Good. The logic is straightforward and idiomatic.
*   **Structure:** Good. The handle for $n \le 0$ is correct and concise.
*   **Naming:** Good. Function name adheres to standard naming conventions.
*   **Improvements:** 
    *   The `if(n<=0)` check is necessary, but the logic could be slightly condensed.
    *   Consider marking the function `const` or `static` if the class context allows it, as it does not rely on object state.

```cpp
// Refined version for brevity
class Solution {
public:
    bool isPowerOfThree(int n) {
        if (n <= 0) return false;
        while (n % 3 == 0) n /= 3;
        return n == 1;
    }
};
```

---

# Question Revision
### Revision Report: Nearest Available Drone

**Pattern:** Breadth-First Search (BFS) / Multi-Source Shortest Path

**Brute Force:** 
For every target point, iterate through all drone positions to calculate the distance, keeping track of the global minimum. 
*   **Complexity:** $O(D \cdot T)$, where $D$ is the number of drones and $T$ is the number of targets.

**Optimal Approach:** 
Treat every drone location as a starting node in a single multi-source BFS. Initialize the queue with all drone coordinates and a distance of 0. As you traverse the grid, the first time you visit any target cell, you are guaranteed to have reached it via the shortest path from the nearest drone.
*   **Time Complexity:** $O(R \cdot C)$, where $R$ and $C$ are the grid dimensions (each cell visited once).
*   **Space Complexity:** $O(R \cdot C)$ to store the visited/distance state.

**The 'Aha' Moment:** 
When a problem asks for the *nearest* source to *multiple* destinations in a grid, pushing all possible sources into the queue at once transforms the search from "one-to-one" to "many-to-all" in a single pass.

**Summary:** 
When you need the distance from the closest of many sources, initialize your BFS queue with all sources simultaneously to find the shortest path to all targets in one sweep.

---