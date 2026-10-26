---
title: "Map of Highest Peak"
slug: map-of-highest-peak
date: "2026-10-20"
---

# My Solution
~~~java
class Solution {
    public int[][] updateMatrix(int[][] mat) {
        int row = mat.length;
        int col = mat[0].length;
        Queue<int[]> q = new LinkedList<>();
        int[][] dis = new int[row][col];
        for(int i=0;i<row;i++){
            for(int j=0;j<col;j++){
                if(mat[i][j]==0){
                    q.offer(new int[]{i,j});
                }
                else{
                    dis[i][j] = -1;
                }
            }
        }
        int[][] direc = {{0,1},{0,-1},{1,0},{-1,0}};
        while(!q.isEmpty()){
            int[] curr = q.poll();
            for(int[] dir: direc){
                int r = curr[0]+dir[0];
                int c = curr[1]+dir[1];
                if(r>=0 && r<row && c>=0 && c<col && dis[r][c]==-1){
                    dis[r][c]= dis[curr[0]][curr[1]]+1;
                    q.offer(new int[]{r,c});
                }
            }
        }
        return dis;
    }
}
~~~

# Submission Review
## Approach
- **Technique**: Multi-source Breadth-First Search (BFS).
- **Optimality**: Optimal. BFS is the standard approach for finding the shortest path in an unweighted grid. Starting from all source cells (`0`s) simultaneously ensures that the first time a cell is reached, it is via the shortest path.

## Complexity
- **Time Complexity**: $O(R \times C)$, where $R$ is the number of rows and $C$ is the number of columns. Each cell is visited at most once.
- **Space Complexity**: $O(R \times C)$ to store the `dis` matrix and the `Queue` in the worst case (where most cells are `0`).

## Efficiency Feedback
- **Runtime**: The implementation is efficient.
- **Memory**: Using `int[]` inside the `Queue` creates many small objects, which increases GC pressure. For extreme optimization, one could encode coordinates into a single integer (`i * col + j`).
- **Edge Cases**: The code correctly handles grids with all `0`s or all `1`s (though the problem constraints typically guarantee at least one `0`).

## Code Quality
- **Readability**: Good. The logic is linear and follows standard BFS patterns.
- **Structure**: Good. Initialization is separated from the traversal logic.
- **Naming**: Moderate. `dis` is a common shorthand for distance, but `dist` or `distance` would be clearer. `direc` should be `directions`.
- **Concrete Improvements**:
    - **Imports**: The code is missing necessary imports (`java.util.*`).
    - **Consistency**: The use of `dis[r][c] == -1` as a "visited" flag is clever and saves an extra `boolean[][] visited` array.
    - **Variable naming**: Use `rows` and `cols` (plural) instead of `row` and `col` to avoid confusion between the count and a specific index.

---

# Question Revision
# Revision Report: Map of Highest Peak

- **Pattern:** Multi-Source Breadth-First Search (BFS)
- **Brute Force:** For every cell, perform a separate BFS to find the shortest distance to the nearest water cell. This would result in an inefficient $O((R \times C)^2)$ time complexity.
- **Optimal Approach:** 
    - Initialize a queue with all water cells (`1`) and set their height to `0`. 
    - Initialize all land cells (`0`) to a special value (e.g., `-1`) to mark them as unvisited.
    - Perform a level-order BFS: for each cell popped, visit its neighbors. If a neighbor is unvisited, set its height to `current_height + 1` and add it to the queue.
    - **Time Complexity:** $O(R \times C)$ — each cell is visited once.
    - **Space Complexity:** $O(R \times C)$ — to store the queue in the worst case.
- **The 'Aha' Moment:** The requirement to find the "minimum distance to any water cell" for multiple points simultaneously is a classic signal for Multi-Source BFS.
- **Summary:** Treat all water cells as starting points in a single BFS to propagate height outwards layer by layer.

---