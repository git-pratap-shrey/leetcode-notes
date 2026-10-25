---
title: "Number of Islands"
slug: number-of-islands
date: "2026-10-25"
---

# My Solution
~~~java
class Solution {
    public int numIslands(char[][] grid) {
        int n= grid.length;
        int m = grid[0].length;
        int islands=0;
        boolean[][] vis = new boolean[n][m];
        for(int i=0;i<n;i++){
            for(int j=0;j<m;j++){
                if(grid[i][j]=='1' && !vis[i][j]){
                    dfs(i,j,grid,vis,n,m);
                    islands++;
                }
            }
        }
        return islands;
    }
    private void dfs(int i,int j,char[][] grid,boolean[][] vis,int n, int m){
        if(i<0 || j<0 || i>=n || j>=m || vis[i][j]==true || grid [i][j]!='1'){
            return;
        }
        vis[i][j]=true;
        dfs(i+1,j,grid,vis,n,m);
        dfs(i,j+1,grid,vis,n,m);
        dfs(i-1,j,grid,vis,n,m);
        dfs(i,j-1,grid,vis,n,m);
    }
}
~~~

# Submission Review
## Approach
- **Technique:** Depth-First Search (DFS) with a boolean `vis` array for tracking visited cells.
- **Optimality:** Optimal. The algorithm visits each cell at most once, which is the minimum required to solve the problem.

## Complexity
- **Time Complexity:** $O(N \times M)$, where $N$ is the number of rows and $M$ is the number of columns. Every cell is visited once.
- **Space Complexity:** $O(N \times M)$. This is due to the `vis` array and the recursion stack in the worst case (e.g., the entire grid is one island).

## Efficiency Feedback
- **Memory Overhead:** The `boolean[][] vis` array consumes extra $O(N \times M)$ space. 
- **Optimization:** If modifying the input is permitted, the space complexity could be reduced to $O(1)$ (excluding the recursion stack) by marking visited land cells directly in the `grid` (e.g., changing `'1'` to `'0'`).

## Code Quality
- **Readability:** Good. The logic is straightforward and follows standard DFS patterns.
- **Structure:** Good. The separation between the main loop and the helper `dfs` method is appropriate.
- **Naming:** Moderate. While `n`, `m`, `i`, and `j` are standard in competitive programming, `rows` and `cols` would be more descriptive than `n` and `m`.
- **Improvements:** 
    - Add a null or empty check for `grid` at the start to prevent `NullPointerException` or `ArrayIndexOutOfBoundsException` on `grid[0].length`.
    - Use `if (vis[i][j])` instead of `if (vis[i][j] == true)` for conciseness.

---

# Question Revision
# Revision Report: Number of Islands

- **Pattern:** Graph Traversal (DFS/BFS) / Connected Components.
- **Brute Force:** Iterate through every cell; whenever a `'1'` is found, start a search to find all connected `'1's`, but without marking them as visited, leading to redundant checks and potential infinite loops/exponential time.
- **Optimal Approach:** 
    - Iterate through the grid. When a `'1'` is encountered, increment the island count and trigger a **DFS** (or BFS) to sink the island.
    - **Sink Logic:** During traversal, change the current `'1'` to `'0'` (or use a `visited` set) to mark it as processed, then recursively visit all 4 adjacent neighbors.
    - **Complexity:** 
        - **Time:** $O(M \times N)$, where $M$ is rows and $N$ is columns; every cell is visited at most once.
        - **Space:** $O(M \times N)$ in the worst case (entire grid is one island) for the recursion stack or queue.
- **The 'Aha' Moment:** The requirement to find "connected" components in a 2D grid is a classic signal for DFS/BFS.
- **Summary:** Use DFS to "sink" an entire connected island of 1s whenever you encounter the first piece of land.

---