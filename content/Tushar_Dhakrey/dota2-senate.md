---
title: "Dota2 Senate"
slug: dota2-senate
date: "2026-10-21"
---

# My Solution
~~~java
class Solution {
    public int[][] highestPeak(int[][] isWater) {
        int row = isWater.length;
        int col = isWater[0].length;
        Queue<int[]> q = new LinkedList<>();
        int[][] dis = new int[row][col];
        for(int i=0;i<row;i++){
            for(int j=0;j<col;j++){
                if(isWater[i][j]==1){
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
- **Optimality**: Optimal. BFS is the standard approach for finding the shortest path in an unweighted grid from multiple sources simultaneously.

## Complexity
- **Time Complexity**: $O(R \times C)$, where $R$ is the number of rows and $C$ is the number of columns. Each cell is visited at most once.
- **Space Complexity**: $O(R \times C)$. This includes the `dis` array and the queue, which in the worst case (all water) stores all cells.

## Efficiency Feedback
- **Runtime**: Efficient. The use of a queue ensures linear time complexity relative to the input size.
- **Memory**: Standard for this problem.
- **Optimization**: Replacing `int[]` in the queue with a single integer (e.g., `r * col + c`) would reduce object allocation overhead and memory fragmentation, though not required for passing constraints.

## Code Quality
- **Readability**: Good. The logic is straightforward and follows standard BFS patterns.
- **Structure**: Good. The initialization phase is clearly separated from the traversal phase.
- **Naming**: Moderate. 
    - `dis` is acceptable for distance.
    - `direc` is acceptable for directions.
    - **Critical Note**: The class method name `highestPeak` and parameter `isWater` indicate the code is solving the **"Map of Highest Peak"** problem, but the prompt labels the problem as **"Dota2 Senate"**. The code is entirely unrelated to the Dota2 Senate problem.
- **Improvements**: 
    - Import statements (`java.util.*`) are missing from the snippet.
    - Explicitly initialize `dis[i][j] = 0` for water cells (though Java defaults to 0, explicit assignment improves clarity).

---

# Question Revision
# Revision Report: Dota2 Senate

- **Pattern**: Queue / Simulation
- **Brute Force**: Repeatedly scan the string from left to right. For each active senator, look ahead to find the first available opponent to ban. Remove both from the sequence and restart the scan until only one party remains.
- **Optimal Approach**: 
    - Use two separate queues to store the indices of the 'R' and 'D' senators.
    - Compare the front of both queues: the senator with the smaller index acts first and bans the opponent.
    - The winner is then re-added to the end of their own queue to act again in the next round, but their index is incremented by $n$ (the total number of senators) to maintain chronological order.
    - **Time Complexity**: $O(n)$ — each senator is processed a finite number of times.
    - **Space Complexity**: $O(n)$ — to store the indices in queues.
- **The 'Aha' Moment**: The requirement for "round-robin" turns and the ability for a senator to act again in the future suggests a Queue where elements are recycled.
- **Summary**: Use two queues to track indices and re-queue the winner with an offset to simulate rounds of banning.

---