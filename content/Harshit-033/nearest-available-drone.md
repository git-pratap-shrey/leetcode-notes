---
title: "Nearest Available Drone"
slug: nearest-available-drone
date: "2026-08-16"
---

# My Solution
~~~cpp
class Solution {
public:
    int nearestDrone(vector<vector<int>>& drones, vector<int>& target) {
        int ind=-1;
        
        int temp=INT_MAX;
        for(int i=0;i<drones.size();i++){
            int dist=abs(drones[i][0]-target[0])+abs(drones[i][1]-target[1]);
            if(dist<=drones[i][2]){
                if(dist<temp){
                    temp=dist;
                    ind=i;
                }
            }
        }
        return ind;
        
    }
};
~~~

# Submission Review
## Approach
*   **Technique:** Linear scan (Greedy search).
*   **Optimality:** Optimal. Since all drones must be checked to determine which meets the criteria and is closest, the $O(N)$ approach is necessary.

## Complexity
*   **Time Complexity:** $O(N)$, where $N$ is the number of drones, as the algorithm iterates through the list once.
*   **Space Complexity:** $O(1)$, as it only uses a constant amount of extra space for tracking variables.

## Efficiency Feedback
*   **Runtime:** Highly efficient. Accessing `drones[i]` and performing basic arithmetic is negligible.
*   **Optimizations:**
    *   The use of `abs()` is correct for Manhattan distance.
    *   The `if(dist <= drones[i][2])` condition correctly handles the "available" constraint.
    *   No meaningful further optimization is possible in a standard array-based search.

## Code Quality
*   **Readability:** Good. The logic is straightforward and easy to follow.
*   **Structure:** Good. Simple, functional approach that avoids unnecessary overhead.
*   **Naming:** Moderate. `temp` and `ind` are generic. `minDist` and `nearestDroneIndex` would be more descriptive.
*   **Concrete Improvements:**
    *   **Tie-breaking:** The problem statement didn't specify, but if there's a tie in distance, this code keeps the *first* found index. If a specific tie-breaking rule exists, it should be clarified.
    *   **Input Validation:** Consider checking if `drones` is empty before loop execution (though the current loop condition handles this implicitly).
    *   **Variable Scope:** The `int dist` calculation could be kept as `long long` if there were concerns about integer overflow, though for coordinate geometry problems, `int` is usually sufficient unless coordinates are extremely large.

---

# Question Revision
### Revision Report: Nearest Available Drone

**Pattern:** Breadth-First Search (BFS) / Multi-Source Shortest Path

**Brute Force:** 
For each drone location, perform a separate BFS or compute the Manhattan distance to the target, resulting in $O(D \times (R \times C))$ where $D$ is the number of drones and $R \times C$ is the grid size.

**Optimal Approach:**
Initialize a queue with *all* drone coordinates simultaneously, marking them as visited, and perform a single BFS starting from these multiple sources until the target is reached.
*   **Time Complexity:** $O(R \times C)$ – Each cell is visited at most once.
*   **Space Complexity:** $O(R \times C)$ – To store the distance matrix/visited states and the queue.

**The 'Aha' Moment:**
When the problem asks for the "nearest" source among "multiple" potential starting points, treating all sources as a collective starting frontier in a single BFS traversal effectively computes the shortest distance from *any* source to the destination.

**Summary:** 
To find the shortest distance from multiple sources to a destination, enqueue all sources at once and run a single BFS instead of running individual searches.

---