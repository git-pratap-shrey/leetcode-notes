---
title: "Flood Fill"
slug: flood-fill
date: "2026-10-25"
---

# My Solution
~~~java
class Solution {
    public int[][] floodFill(int[][] image, int sr, int sc, int color) {
        dfs(image,sr,sc,image[sr][sc],color);
        return image;
    }
    void dfs(int[][] image,int i, int j, int orgcol, int newcol){
        if(i<0 || i>=image.length || j<0 || j>=image[0].length || image[i][j]==newcol || image[i][j]!=orgcol){
            return;
        }
        image[i][j] = newcol;
        dfs(image,i-1,j,orgcol,newcol);
        dfs(image,i,j+1,orgcol,newcol);
        dfs(image,i+1,j,orgcol,newcol);
        dfs(image,i,j-1,orgcol,newcol);
    }
}
~~~

# Submission Review
## Approach
- **Technique**: Depth-First Search (DFS) / Recursion.
- **Optimality**: Optimal. It visits each connected pixel of the starting color exactly once.

## Complexity
- **Time Complexity**: $O(N \times M)$, where $N$ is the number of rows and $M$ is the number of columns. In the worst case, every pixel is part of the fill.
- **Space Complexity**: $O(N \times M)$. The recursion stack can go as deep as the total number of pixels in the worst case (e.g., a snake-like image).

## Efficiency Feedback
- **Performance**: The solution is efficient.
- **Edge Case Handling**: The condition `image[i][j] == newcol` is critical. It prevents infinite recursion (stack overflow) in cases where the starting color is the same as the target color.

## Code Quality
- **Readability**: Good. The logic is straightforward and the base cases are clearly defined in a single `if` statement.
- **Structure**: Good. Separation of the entry method and the recursive helper method is appropriate.
- **Naming**: Moderate. While `sr`, `sc`, and `orgcol` are understandable in context, more descriptive names like `startRow`, `startCol`, and `originalColor` would be preferable.
- **Improvements**: 
    - No functional changes needed.
    - Minor style improvement: Use `final` for parameters that should not change.

---

# Question Revision
# Revision Report: Flood Fill

- **Pattern:** Graph Traversal (DFS/BFS)
- **Brute Force:** Iteratively scanning the entire grid multiple times to find adjacent pixels of the starting color and updating them until no more changes occur.
- **Optimal Approach:** 
    - **Logic:** Use Depth First Search (DFS) or Breadth First Search (BFS). Starting from the source pixel $(sr, sc)$, recursively visit all 4-directionally connected neighbors. If a neighbor has the same starting color and hasn't been changed to the new color, update it and recurse. 
    - **Important Edge Case:** If the `newColor` is the same as the original color, return the image immediately to avoid an infinite loop.
    - **Time Complexity:** $O(N)$ where $N$ is the total number of pixels in the image.
    - **Space Complexity:** $O(N)$ for the recursion stack (DFS) or queue (BFS) in the worst case.
- **The 'Aha' Moment:** The requirement to "spread" a value to all connected components of the same type is the classic signature of a Graph Traversal problem.
- **Summary:** Treat the grid as a graph where adjacent pixels of the same color are connected nodes and use DFS to paint the connected component.

---