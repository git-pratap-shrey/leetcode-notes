---
title: "Rotting Oranges"
slug: rotting-oranges
date: "2026-10-28"
---

# My Solution
~~~cpp
class Solution {
public:
    int orangesRotting(vector<vector<int>>& grid) {
        int n=grid.size();
        int m=grid[0].size();
        int f=0;
        queue<pair<int,int>>q;
        for(int i=0;i<n;i++){
            for(int j=0;j<m;j++){
                if(grid[i][j]==2)
                q.push({i,j});
                else if(grid[i][j]==1)
                f++;
            }
        }
        int dr[]={-1,1,0,0};
        int dc[]={0,0,-1,1};
        int min=0;

        while(!q.empty()&& f>0){
            int qsize=q.size();
            int change=0;
            for(int i=0;i<qsize;i++){
                auto[r,c]=q.front();
                q.pop();
                for(int j=0;j<4;j++){
                    int nr=r+dr[j];
                    int nc=c+dc[j];
                    if (nr>=0&&nr<n&&
                        nc >=0&&nc<m&&
                        grid[nr][nc]== 1){
                            grid[nr][nc]=2;
                            q.push({nr,nc});
                            f--;
                            change=1;
                        }
                }
            }
            if(change)
            min++;
        }
        return f==0?min:-1;
    }
};
~~~

# Submission Review
## Approach
- **Technique:** Breadth-First Search (BFS).
- **Optimality:** Optimal. BFS is the standard approach for shortest path/time problems in unweighted grids to ensure all nodes at distance $d$ are processed before $d+1$.

## Complexity
- **Time Complexity:** $O(N \times M)$, where $N$ and $M$ are grid dimensions. Each cell is visited and processed at most once.
- **Space Complexity:** $O(N \times M)$ in the worst case where all oranges are rotting and stored in the queue.

## Efficiency Feedback
- **Performance:** The implementation is efficient. Using a `change` flag inside the `while` loop prevents the `min` timer from incrementing on the final layer of the BFS where no new oranges are infected.
- **Optimization:** The use of `auto [r, c] = q.front();` (structured bindings) is efficient and modern (C++17).

## Code Quality
- **Readability:** Moderate. The logic is clear, but the lack of spacing around operators (e.g., `n=grid.size()`, `nc>=0&&nc<m`) makes it slightly cramped.
- **Structure:** Good. The flow is logical: initialization $\rightarrow$ BFS $\rightarrow$ final check.
- **Naming:** Poor. 
    - `f` is used for the count of fresh oranges; `freshOranges` would be clearer.
    - `min` is used for the elapsed time; `minutes` or `time` would be appropriate.
    - `qsize` is acceptable, but `n` and `m` for dimensions are generic (though common in competitive programming).
- **Concrete Improvements:**
    - Replace `f` and `min` with descriptive variable names.
    - Add consistent whitespace around operators for better legibility.
    - Use `const int` for `dr` and `dc` arrays.

---

# Question Revision
# Revision Report: Rotting Oranges

- **Pattern:** Breadth-First Search (BFS) / Multi-Source BFS.
- **Brute Force:** Repeatedly scan the entire grid and mark adjacent fresh oranges as rotten until no more changes occur. This would lead to an inefficient $O(\text{rows}^2 \times \text{cols}^2)$ time complexity.
- **Optimal Approach:** 
    - **Logic:** Initialize a queue with all coordinates of initially rotten oranges. Process the queue level-by-level (representing each minute). For every rotten orange, infect its 4-directional neighbors if they are fresh. Track the total number of fresh oranges initially and decrement the count as they rot. If the final fresh count is 0, return the time elapsed; otherwise, return -1.
    - **Time Complexity:** $O(R \times C)$ where $R$ is rows and $C$ is columns; each cell is visited at most once.
    - **Space Complexity:** $O(R \times C)$ to store the queue in the worst case (all oranges rotten).
- **The 'Aha' Moment:** The problem asks for the *minimum time* for a process to spread simultaneously from *multiple starting points*, which is the classic signature of Multi-Source BFS.
- **Summary:** Use Multi-Source BFS to simulate simultaneous spreading across a grid to find the shortest time to reach all targets.

---