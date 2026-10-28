---
title: "Max Area of Island"
slug: max-area-of-island
date: "2026-10-28"
---

# My Solution
~~~cpp
class Solution {
public:
        int dfs(vector<vector<int>>& grid,int r,int c){
            int n=grid.size();
            int m=grid[0].size();
            if(r<0||r>=n||c<0||c>=m)
            return 0;
            if(grid[r][c]==0)
            return 0;
            grid[r][c] = 0; 

          int area = 1;

          area += dfs(grid, r - 1, c);
          area += dfs(grid, r + 1, c);
          area += dfs(grid, r, c - 1);
          area += dfs(grid, r, c + 1);

        return area;
        }
    int maxAreaOfIsland(vector<vector<int>>& grid) {
        int n=grid.size();
        int m=grid[0].size();
        int marea=0;
        for(int i=0;i<n;i++){
            for(int j=0;j<m;j++){
                if(grid[i][j]==1){
                   int area= dfs(grid,i,j);
                   marea=max(marea,area);
                }
            }
        }
        return marea;
    }
};
~~~

# Submission Review
## Approach
- **Technique**: Depth First Search (DFS) with in-place modification of the input grid to track visited cells (sinking the island).
- **Optimality**: Optimal. Every cell is visited at most once, and the search covers all connected components.

## Complexity
- **Time Complexity**: $O(N \times M)$, where $N$ is the number of rows and $M$ is the number of columns. Each cell is processed once.
- **Space Complexity**: $O(N \times M)$ in the worst case (a grid full of 1s), due to the recursion stack depth.

## Efficiency Feedback
- **Runtime**: The runtime is optimal for this problem.
- **Memory**: The memory usage is dominated by the recursion stack. Using an iterative BFS or an explicit stack could avoid `StackOverflow` on extremely large grids, though for standard competitive programming limits, this DFS is sufficient.
- **Optimization**: The repeated calls to `grid.size()` and `grid[0].size()` inside the `dfs` function can be avoided by passing $N$ and $M$ as arguments or making them member variables.

## Code Quality
- **Readability**: Good. The logic is straightforward and follows standard DFS patterns.
- **Structure**: Good. Separation of the traversal logic (`dfs`) and the grid iteration (`maxAreaOfIsland`) is clear.
- **Naming**: Moderate. `marea` (max area) is slightly cryptic; `maxArea` would be more standard. `n` and `m` are acceptable for dimensions in this context.
- **Improvements**:
    - Consistency: Indentation is inconsistent (e.g., the `int area = 1;` block is indented differently than the `if` statements).
    - Redundancy: `int n=grid.size(); int m=grid[0].size();` is redefined inside the `dfs` function on every recursive call; this should be moved outside or passed as parameters.

---

# Question Revision
# Revision Report: Max Area of Island

- **Pattern:** Graph Traversal (DFS/BFS) / Connected Components.
- **Brute Force:** Iterate through every cell; for every `1` found, start a search to find all connected `1`s. Without marking visited cells, this would result in redundant checks and exponential time complexity.
- **Optimal Approach:** 
    - **Logic:** Iterate through the grid. When a `1` is encountered, initiate a **Depth First Search (DFS)** to explore all four cardinal directions. To avoid infinite loops and double-counting, "sink" the island by flipping visited `1`s to `0`s (or use a `visited` set). Track the size of the current island and maintain a global maximum.
    - **Time Complexity:** $O(R \times C)$ where $R$ is rows and $C$ is columns; each cell is visited once.
    - **Space Complexity:** $O(R \times C)$ in the worst case for the recursion stack (e.g., the entire grid is one island).
- **The 'Aha' Moment:** The requirement to find the size of "connected" regions in a 2D grid is a classic signal for finding connected components using DFS or BFS.
- **Summary:** Use DFS to traverse connected 1s, marking them as visited to find the largest cluster size.

---