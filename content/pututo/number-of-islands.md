---
title: "Number of Islands"
slug: number-of-islands
date: "2026-10-28"
---

# My Solution
~~~cpp
class Solution {
public: 
        void dfs(vector<vector<char>>& grid,int r,int c){
            int n=grid.size();
            int m=grid[0].size();
                if (r < 0 || r >= n || c < 0 || c >= m)
            return;

        if (grid[r][c] == '0')
            return;

        grid[r][c] = '0';

        dfs(grid, r - 1, c);
        dfs(grid, r + 1, c);
        dfs(grid, r, c - 1);
        dfs(grid, r, c + 1);
        }
    int numIslands(vector<vector<char>>& grid) {
        int n=grid.size();
        int m=grid[0].size();
        int count=0;
        for(int i=0;i<n;i++){
            for(int j=0;j<m;j++){
                if(grid[i][j]=='1'){
                    count++;
                    dfs(grid,i,j);
                }
                
            }
        }
        return count;
    }
};
~~~

# Submission Review
## Approach
- **Technique**: Depth-First Search (DFS) with in-place modification of the grid to mark visited cells.
- **Optimality**: Optimal. Every cell is visited at most once.

## Complexity
- **Time Complexity**: $O(N \times M)$, where $N$ is the number of rows and $M$ is the number of columns. Each cell is processed once.
- **Space Complexity**: $O(N \times M)$ in the worst case (e.g., the grid is entirely '1's), due to the recursion stack.

## Efficiency Feedback
- **Runtime**: The use of in-place modification (changing '1' to '0') avoids the need for an auxiliary `visited` matrix, reducing memory overhead.
- **Optimization**: To avoid repeated calls to `.size()` and indexing operations inside the `dfs` function, `n` and `m` could be passed as arguments or stored as class members, though the compiler likely optimizes this.

## Code Quality
- **Readability**: Moderate. The logic is clear, but the indentation is inconsistent (e.g., the `if` statement inside `dfs` and the `numIslands` loop).
- **Structure**: Good. The separation of the traversal logic (`dfs`) from the counting logic (`numIslands`) is appropriate.
- **Naming**: Good. Variable names (`r`, `c`, `n`, `m`, `count`) are standard for grid-based problems.
- **Improvements**: 
    - Fix indentation for professional standards.
    - The `n` and `m` declarations inside `dfs` are redundant since they are recalculated every time the function is called recursively. Move them to the `numIslands` scope or pass them as parameters.

---

# Question Revision
# Revision Report: Number of Islands

- **Pattern:** Graph Traversal (DFS/BFS) / Connected Components.
- **Brute Force:** Iterate through every cell; for every `'1'` found, start a search to find all connected land pieces, but without marking them as visited, leading to redundant processing of the same island multiple times.
- **Optimal Approach:** 
    - **Logic:** Iterate through the grid. When a `'1'` is encountered, increment the island count and trigger a **DFS** (or BFS) to "sink" the island by flipping all connected `'1'`s to `'0'`s (or marking them in a `visited` set). This ensures each cell is processed exactly once.
    - **Time Complexity:** $O(M \times N)$ where $M$ is rows and $N$ is columns.
    - **Space Complexity:** $O(M \times N)$ in the worst case (recursion stack for DFS or queue for BFS in a grid full of land).
- **The 'Aha' Moment:** The requirement to find "connected components" in a 2D grid is a classic signal for DFS/BFS traversal.
- **Summary:** Use DFS to traverse and "sink" each connected land mass encountered to count isolated islands.

---