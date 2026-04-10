---
title: "Rotting Oranges"
slug: rotting-oranges
date: "2026-04-10"

---
---

# My Solution
~~~cpp
class Solution {
public:
    int bfs(vector<vector<int>>& grid, queue<pair<int, int>> &q){
        int size = q.size();
        int i, j;

        for(int _ = 0; _ < size; _++){
            i = q.front().first;
            j = q.front().second;
            // cout<<i<<" "<<j<<endl;
            q.pop();

            if(j+1 < grid[0].size() && grid[i][j+1] == 1){
                grid[i][j+1] = 2;
                q.push({i,j+1});
            }
            if(j-1 >= 0 && grid[i][j-1] == 1){
                grid[i][j-1] = 2;
                q.push({i,j-1});
            }
            if(i+1 < grid.size() && grid[i+1][j] == 1){
                grid[i+1][j] = 2;
                q.push({i+1,j});
            }
            if(i-1 >= 0 && grid[i-1][j] == 1){
                grid[i-1][j] = 2;
                q.push({i-1,j});
            }
        }

        if(!q.empty()){
            return 1 + bfs(grid, q);
        }
        return 0;
    }

    int orangesRotting(vector<vector<int>>& grid) {
        queue<pair<int, int>> q;
        
        for(int i = 0; i < grid.size(); i++){
            for(int j = 0; j < grid[0].size(); j++){
                if(grid[i][j] == 2){
                    q.push({i, j});
                }
            }
        }
        int answer = bfs(grid, q);
        
        for(int i = 0; i < grid.size(); i++){
            for(int j = 0; j < grid[0].size(); j++){
                if(grid[i][j] == 1){
                    return -1;
                }
            }
        }

        return answer; 
    }
};
~~~

# Submission Review
## Approach
*   **Technique:** Breadth-First Search (BFS) using recursion to process level-by-level updates.
*   **Optimality:** Optimal in terms of algorithmic logic (BFS is the standard approach), but the recursive implementation is unnecessary and risky for large grid sizes.

## Complexity
*   **Time Complexity:** $O(R \times C)$, where $R$ is rows and $C$ is columns. Each cell is visited at most once.
*   **Space Complexity:** $O(R \times C)$ for the queue in the worst case (all oranges rotting simultaneously). The recursion depth adds $O(\text{max\_dist})$ to the stack, where $\text{max\_dist}$ is the length of the longest path of rotting.

## Efficiency Feedback
*   **Bottleneck:** The recursion is unnecessary. In extreme cases, deep recursion can lead to a stack overflow, although the maximum grid size in standard competitive programming constraints usually keeps this within limits.
*   **Optimization:** Convert the recursion into an iterative `while(!q.empty())` loop. This avoids stack overhead and is idiomatic for BFS.

## Code Quality
*   **Readability:** Good. The logic for boundary checks is clear and explicit.
*   **Structure:** Moderate. The separation of `bfs` and `orangesRotting` is logical, but the recursion creates an unconventional control flow.
*   **Naming:** Good. Variable names like `i`, `j`, `grid`, and `q` are standard in competitive programming.
*   **Concrete Improvements:**
    *   **Remove recursion:** Use an iterative loop. This allows you to track the `time` variable locally and increment it once per queue level iteration, rather than returning values through recursive calls.
    *   **Direction Arrays:** Instead of four separate `if` blocks, use direction arrays: `int dx[] = {0, 0, 1, -1}; int dy[] = {1, -1, 0, 0};`. This reduces code duplication and minimizes the chance of typos (e.g., checking `j` vs `i` in indices).
    *   **Early Exit:** Currently, the code traverses the entire grid at the end to check for remaining fresh oranges. You can optimize this by keeping a count of fresh oranges at the start and decrementing it every time one rots. If the count reaches zero, you can return immediately.

---
---


# Question Revision
### Revision Report: Rotting Oranges

**Pattern:** Multi-Source Breadth-First Search (BFS)

**Brute Force:**
Repeatedly iterate through the grid to rot neighbors of currently rotten oranges until no more changes occur. 
*   **Time:** $O((rc)^2)$ where $r$ is rows and $c$ is columns.
*   **Space:** $O(1)$ (ignoring recursion stack/grid mutation).

**Optimal Approach:**
Initialize a queue with all initially rotten oranges. Perform BFS level-by-level, tracking time by incrementing a counter for each layer of the queue. If any fresh oranges remain after the queue is empty, return -1.
*   **Time:** $O(r \times c)$ — each cell is visited at most once.
*   **Space:** $O(r \times c)$ — to store the queue in the worst case where all oranges are rotten.

**The 'Aha' Moment:**
When a problem asks for the *minimum time* to propagate a state across a grid from multiple starting points, it is a clear indicator to use multi-source BFS.

**Summary:**
Treat all initial sources as a single starting layer in a BFS queue to calculate the shortest path for state propagation across the entire grid.

---
