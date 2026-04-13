---
title: "Pacific Atlantic Water Flow"
slug: pacific-atlantic-water-flow
date: "2026-04-13"

---
---

# My Solution
~~~cpp
class Solution {
public:
    vector<vector<int>> pacificAtlantic(vector<vector<int>>& heights) {
        vector<vector<int>> result;
        vector<vector<bool>> pacific(heights.size(), vector<bool>(heights[0].size()));
        vector<vector<bool>> atlantic(heights.size(), vector<bool>(heights[0].size()));

        vector<vector<bool>> visited(heights.size(), vector<bool>(heights[0].size()));
        queue<pair<int, int>> q;

        int i, j;
        for(j = 0, i = 0 ; j < heights[0].size(); j++){
            visited[i][j] = true;
            pacific[i][j] = true;
            q.push({i, j});
        }

        for(i = 1, j = 0; i < heights.size(); i++){
            visited[i][j] = true;
            pacific[i][j] = true;
            q.push({i, j});
        }

        
        while(!q.empty()){
            i = q.front().first;
            j = q.front().second;
            q.pop();

            if(i+1 < heights.size() && !visited[i+1][j] && heights[i+1][j] >= heights[i][j]){
                visited[i+1][j] = true;
                pacific[i+1][j] = true;
                q.push({i+1, j});
            }
            if(i-1 >= 0 && !visited[i-1][j] && heights[i-1][j] >= heights[i][j]){
                visited[i-1][j] = true;
                pacific[i-1][j] = true;
                q.push({i-1, j});
            }
            if(j+1 < heights[0].size() && !visited[i][j+1] && heights[i][j+1] >= heights[i][j]){
                visited[i][j+1] = true;
                pacific[i][j+1] = true;
                q.push({i, j+1});
            }
            if(j-1 >= 0 && !visited[i][j-1] && heights[i][j-1] >= heights[i][j]){
                visited[i][j-1] = true;
                pacific[i][j-1] = true;
                q.push({i, j-1});
            }
        }

        visited = vector<vector<bool>>(heights.size(), vector<bool>(heights[0].size()));

        for(j = 0, i = heights.size() - 1 ; j < heights[0].size(); j++){
            visited[i][j] = true;
            atlantic[i][j] = true;
            q.push({i, j});
        }

        for(i = heights.size() - 2, j = heights[0].size() - 1; i >= 0; i--){
            visited[i][j] = true;
            atlantic[i][j] = true;
            q.push({i, j});
        }

        while(!q.empty()){
            i = q.front().first;
            j = q.front().second;
            q.pop();

            if(i+1 < heights.size() && !visited[i+1][j] && heights[i+1][j] >= heights[i][j]){
                visited[i+1][j] = true;
                atlantic[i+1][j] = true;
                q.push({i+1, j});
            }
            if(i-1 >= 0 && !visited[i-1][j] && heights[i-1][j] >= heights[i][j]){
                visited[i-1][j] = true;
                atlantic[i-1][j] = true;
                q.push({i-1, j});
            }
            if(j+1 < heights[0].size() && !visited[i][j+1] && heights[i][j+1] >= heights[i][j]){
                visited[i][j+1] = true;
                atlantic[i][j+1] = true;
                q.push({i, j+1});
            }
            if(j-1 >= 0 && !visited[i][j-1] && heights[i][j-1] >= heights[i][j]){
                visited[i][j-1] = true;
                atlantic[i][j-1] = true;
                q.push({i, j-1});
            }
        }       

        for(i = 0; i < heights.size(); i++){
            for(j = 0; j < heights[0].size(); j++){
                if(atlantic[i][j] && pacific[i][j]){
                    result.push_back({i, j});
                }
            }
        }

        return result;
    }
};
~~~

# Submission Review
## Approach
*   **Technique:** Breadth-First Search (BFS) starting from the boundaries of the grid.
*   **Optimality:** Optimal. The algorithm effectively reverses the flow direction (uphill) to find all cells reachable from both the Pacific and Atlantic oceans.

## Complexity
*   **Time Complexity:** $O(M \times N)$, where $M$ is the number of rows and $N$ is the number of columns. Every cell is visited at most twice (once for each ocean traversal).
*   **Space Complexity:** $O(M \times N)$ to store the `pacific`, `atlantic`, and `visited` matrices and the queue.

## Efficiency Feedback
*   **Efficiency:** The runtime is efficient as it uses linear passes. 
*   **Memory:** The `visited` matrix is reallocated and reused, which is good. However, you can optimize space by using the `pacific` and `atlantic` matrices themselves as the "visited" trackers (if a cell is `true` in the specific ocean matrix, it is already visited for that traversal), eliminating the need for the redundant `visited` matrix entirely.
*   **Redundancy:** The logic inside the two BFS loops is identical. This could be refactored into a helper function to improve maintainability and reduce code duplication.

## Code Quality
*   **Readability:** Moderate. The logic is clear, but the significant amount of duplicated code for the second BFS makes it harder to scan.
*   **Structure:** Moderate. The monolithic structure within `pacificAtlantic` makes it lengthy. Using a helper function `bfs(ocean_matrix)` would clean this up significantly.
*   **Naming:** Good. `pacific`, `atlantic`, and `visited` clearly describe their purpose.
*   **Concrete Improvements:**
    1.  **Refactor:** Create a `void bfs(vector<vector<bool>>& ocean, ...)` function to encapsulate the traversal logic.
    2.  **Space:** Remove the `visited` vector. Use `ocean[i][j]` to check if a node has been visited during the specific traversal.
    3.  **Initialization:** The boundary loop initialization is slightly verbose; ensure it cleanly covers all edges without overlapping corners (though the logic currently handles overlaps safely).

---
---


# Question Revision
### Revision Report: Pacific Atlantic Water Flow

**Pattern:** Multi-Source Breadth-First Search (BFS) / Depth-First Search (DFS)

**Brute Force:**
For every cell $(i, j)$ in the $M \times N$ grid, perform a DFS to determine if water can reach both the Pacific (top/left) and Atlantic (bottom/right) oceans. 
*   **Complexity:** $O((M \times N)^2)$

**Optimal Approach:**
Instead of starting from every cell, perform two separate traversals (DFS/BFS) starting from the ocean boundaries inward. One traversal finds all cells reachable from the Pacific, and the other finds all cells reachable from the Atlantic. The intersection of these two sets of reachable cells is the result.
*   **Time Complexity:** $O(M \times N)$
*   **Space Complexity:** $O(M \times N)$

**The 'Aha' Moment:**
When a problem asks to find points that satisfy two separate reachability conditions, reverse the perspective by starting at the targets and moving "uphill" to mark all reachable nodes.

**Summary:**
To find intersections of reachability, start from the boundaries and work backward—if you can flow "up" from the ocean, you can flow "down" to it.

---
