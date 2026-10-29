---
title: "Surrounded Regions"
slug: surrounded-regions
date: "2026-10-29"
---

# My Solution
~~~cpp
class Solution {
public:
        void dfs(vector<vector<char>>& board, int r, int c) {
        int n = board.size();
        int m = board[0].size();

        if (r<0||r>=n||c<0||c>=m)
            return;

        if (board[r][c]!= 'O')
            return;

        board[r][c]='S'; 

        dfs(board,r - 1,c);
        dfs(board,r + 1,c);
        dfs(board,r,c - 1);
        dfs(board,r,c + 1);
    }

    void solve(vector<vector<char>>& board) {
        int n=board.size();
        int m=board[0].size();
        for(int i=0;i<n;i++){
            if(board[i][0]=='O')
            dfs(board,i,0);
            if(board[i][m-1]=='O')
            dfs(board,i,m-1);
        }
        for(int i=0;i<m;i++){
            if(board[0][i]=='O')
            dfs(board,0,i);
            if(board[n-1][i]=='O')
            dfs(board,n-1,i);
        }
        for (int i = 0; i < n; i++) {
            for (int j = 0; j < m; j++) {
                if (board[i][j] == 'O')
                    board[i][j] = 'X';
                else if (board[i][j] == 'S')
                    board[i][j] = 'O';
            }
        }
    }
};
~~~

# Submission Review
## Approach
- **Technique**: Boundary-based Depth First Search (DFS) with marker transformation.
- **Optimality**: Optimal. The approach correctly identifies all 'O's connected to the boundary (which cannot be surrounded) and marks them to be preserved, then flips the remaining 'O's.

## Complexity
- **Time Complexity**: $O(N \times M)$, where $N$ is the number of rows and $M$ is the number of columns. Every cell is visited at most a constant number of times.
- **Space Complexity**: $O(N \times M)$ in the worst case due to the recursion stack (e.g., a grid full of 'O's).

## Efficiency Feedback
- **Runtime**: Efficient. The use of an in-place marker ('S') avoids the need for an auxiliary `visited` array.
- **Memory**: The recursion depth could lead to a stack overflow on very large, narrow grids. Switching to an iterative BFS or using a manual stack could mitigate this, though DFS is standard for this problem.

## Code Quality
- **Readability**: Moderate. The logic is clear, but the lack of consistent spacing (e.g., `if(board[i][0]=='O')`) makes it slightly cramped.
- **Structure**: Good. The separation between the traversal logic (`dfs`) and the coordination logic (`solve`) is appropriate.
- **Naming**: Moderate. `n` and `m` are standard for dimensions, but `r` and `c` are used in `dfs` while `i` and `j` are used in `solve`; consistency would be better.
- **Concrete Improvements**:
    - Add a check for empty input `if (board.empty()) return;` to avoid potential crashes on `board[0].size()`.
    - Improve formatting/whitespace around operators and control flow statements for better readability.
    - Use `const int` or `size_t` for dimensions to avoid signed/unsigned comparison warnings.

---

# Question Revision
# Revision Report: Surrounded Regions

- **Pattern:** Graph Traversal (DFS/BFS) / Boundary-Condition Traversal.
- **Brute Force:** Iterate through every cell; if it is 'O', start a traversal to see if any reachable 'O' touches the boundary. If it doesn't, flip the entire connected component to 'X'. (Inefficient due to repeated traversals of the same components).
- **Optimal Approach:** 
    - **Logic:** Instead of finding surrounded regions, identify **unsurroundable** regions. 
        1. Start DFS/BFS from all 'O's located on the **four boundaries** of the grid.
        2. Mark these boundary-connected 'O's with a temporary placeholder (e.g., '#').
        3. Iterate through the entire grid: flip remaining 'O's (which are surrounded) to 'X', and flip '#' back to 'O'.
    - **Complexity:** 
        - Time: $O(M \times N)$ where $M$ is rows and $N$ is columns.
        - Space: $O(M \times N)$ for the recursion stack/queue in the worst case.
- **The 'Aha' Moment:** When a problem asks to remove "surrounded" elements, it is often easier to identify the "un-surroundable" ones by starting from the edges.
- **Summary:** Protect boundary-connected 'O's first, then flip everything else.

---