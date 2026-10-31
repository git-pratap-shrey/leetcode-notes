---
title: "01 Matrix"
slug: 01-matrix
date: "2026-10-31"
---

# My Solution
~~~cpp
class Solution {
public:
    vector<vector<int>> updateMatrix(vector<vector<int>>& mat) {
        int n=mat.size();
        int m=mat[0].size();
        vector<vector<int>>dist(n,vector<int>(m,-1));
          queue<pair<int,int>> q;
        for(int i=0;i<n;i++){
            for(int j=0;j<m;j++){
                if(mat[i][j]==0){
                    q.push({i,j});
                    dist[i][j]=0;
                }
            }
        }
       int dr[]={-1, 1, 0, 0};
        int dc[]={0, 0, -1, 1};

        while(!q.empty()) {
            int r=q.front().first;
            int c=q.front().second;
            q.pop();

            for(int k = 0; k < 4; k++) {
                int nr =r+dr[k];
                int nc =c+dc[k];

                if(nr>=0 && nr<n &&
                   nc>=0 && nc<m &&
                   dist[nr][nc]== -1) {

                    dist[nr][nc] = dist[r][c] + 1;
                    q.push({nr, nc});
                }
            }
        }

        return dist;
    }
};
~~~

# Submission Review
## Approach
- **Technique:** Multi-source Breadth-First Search (BFS).
- **Optimality:** Optimal. BFS is the standard approach for finding the shortest path in an unweighted grid. Starting from all `0` cells simultaneously ensures that the first time a `1` cell is visited, it is via the shortest possible path.

## Complexity
- **Time Complexity:** $O(N \times M)$, where $N$ is the number of rows and $M$ is the number of columns. Each cell is pushed and popped from the queue exactly once.
- **Space Complexity:** $O(N \times M)$ to store the `dist` matrix and the queue in the worst case (where all cells are `0`).

## Efficiency Feedback
- **Runtime:** Efficient. The use of direction arrays (`dr`, `dc`) avoids redundant conditional logic inside the loop.
- **Memory:** The solution uses an auxiliary `dist` matrix. Since the problem allows returning a new matrix, this is standard. To save space, one could theoretically modify the input `mat` (if it were converted to a larger integer type) to track distance, but that would sacrifice clarity and potentially violate constraints.

## Code Quality
- **Readability:** Good. The logic is linear and follows standard BFS patterns.
- **Structure:** Good. Initialization, queue seeding, and traversal are clearly separated.
- **Naming:** Moderate. While `n`, `m`, `r`, `c`, `nr`, `nc` are common in competitive programming, more descriptive names (e.g., `rows`, `cols`, `currRow`, `nextRow`) would improve maintainability in a production environment.
- **Improvements:** 
    - Consistent indentation: The indentation of `queue<pair<int,int>> q;` and the direction arrays is slightly inconsistent.
    - Use `const` or `constexpr` for direction arrays to ensure they are read-only.

---

# Question Revision
# Revision Report: 01 Matrix

- **Pattern**: Multi-Source BFS (Breadth-First Search)
- **Brute Force**: Run a standard BFS starting from every single `0` cell independently to find the shortest distance to all `1`s. This results in redundant work and a complexity of $O((M \times N)^2)$.
- **Optimal Approach**: 
    - **Logic**: Instead of multiple BFS runs, initialize a queue with **all** `0` cells simultaneously. Treat all `0`s as the "starting frontier." Perform a single BFS traversal; the first time the search reaches a `1`, that path is guaranteed to be the shortest distance.
    - **Time Complexity**: $O(M \times N)$ — each cell is visited once.
    - **Space Complexity**: $O(M \times N)$ — to store the distance matrix and the queue.
- **The 'Aha' Moment**: When you need the shortest distance from *any* source (multiple `0`s) to all targets, you start the BFS from all sources simultaneously.
- **Summary**: Use Multi-Source BFS to propagate distance from all zeros outward in concentric ripples.

---