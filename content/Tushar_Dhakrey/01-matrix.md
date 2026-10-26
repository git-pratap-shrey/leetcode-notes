---
title: "01 Matrix"
slug: 01-matrix
date: "2026-10-20"
---

# My Solution
~~~java
class Solution {
    public int orangesRotting(int[][] grid) {
        int row = grid.length;
        int col = grid[0].length;
        Queue<int[]> q = new LinkedList<>();
        int fresh = 0;
        int min = 0;
        for(int i=0;i<row;i++){
            for(int j=0;j<col;j++){
                if(grid[i][j]==2){
                    q.offer(new int[]{i,j});
                }
                else if(grid[i][j]==1){
                    fresh++;
                }
            }
        }
        int[][] direc = {{0,1},{0,-1},{1,0},{-1,0}};
        while(!q.isEmpty() && fresh>0){
            int size = q.size();
            for(int i=0;i<size;i++){
                int[] curr = q.poll();
                for(int[] dir: direc){
                    int r = curr[0]+dir[0];
                    int c = curr[1]+dir[1];
                    if(r>=0 && r<row && c>=0 && c<col && grid[r][c]==1){
                        grid[r][c]=2;
                        fresh--;
                        q.offer(new int[]{r,c});
                    }
                }
            }
            min++;
        }
        return fresh==0 ? min:-1;
    }
}
~~~

# Submission Review
## Approach
- **Technique**: Multi-source Breadth-First Search (BFS).
- **Optimality**: Optimal. BFS is the standard approach for finding the shortest time/distance in an unweighted grid.

## Complexity
- **Time Complexity**: $O(R \times C)$ where $R$ is the number of rows and $C$ is the number of columns. Each cell is visited at most once.
- **Space Complexity**: $O(R \times C)$. In the worst case (all rotten oranges), the queue stores all cells.

## Efficiency Feedback
- **Runtime**: Efficient. The use of a `fresh` counter allows the algorithm to terminate immediately once all fresh oranges are processed, avoiding an unnecessary final level of BFS.
- **Memory**: Standard for BFS. No significant bottlenecks detected.

## Code Quality
- **Readability**: Good. The logic is straightforward and follows standard BFS patterns.
- **Structure**: Good. The initialization phase is clearly separated from the processing loop.
- **Naming**: Moderate. `min` is a slightly misleading name for a variable tracking elapsed time/minutes; `minutes` or `time` would be more descriptive.
- **Improvements**:
    - **Imports**: The code is missing necessary imports (`java.util.*`), though this is common in platform-specific submissions.
    - **Constants**: The direction array `direc` could be declared as `static final` to avoid re-allocation on every method call.

---

# Question Revision
# Revision Report: 01 Matrix

- **Pattern**: Multi-Source Breadth-First Search (BFS).
- **Brute Force**: Perform a standard BFS starting from every single `0` cell independently to find the shortest distance to all other cells. This would result in redundant traversals and a time complexity of $O((m \times n)^2)$.
- **Optimal Approach**: 
    - **Logic**: Initialize a queue with all `0` cells simultaneously and set their distance to `0`. Mark all `1` cells as unvisited (or infinity). Perform a single BFS traversal; since BFS explores layer-by-layer, the first time the algorithm reaches a `1` cell, it is guaranteed to be via the shortest path from *any* `0`.
    - **Time Complexity**: $O(m \times n)$ — each cell is visited once.
    - **Space Complexity**: $O(m \times n)$ — to store the distance matrix and the queue.
- **The 'Aha' Moment**: When the problem asks for the "shortest distance" to "any" of multiple target sources, it is a signal to use Multi-Source BFS.
- **Summary**: Start BFS from all zeros simultaneously to propagate the shortest distance to all ones in a single pass.

---