---
title: "Flood Fill"
slug: flood-fill
date: "2026-10-28"
---

# My Solution
~~~cpp
class Solution {
public:
        void dfs(vector<vector<int>>& image,int r,int c,int oc,int nc){
            int n=image.size();
            int m=image[0].size();
            if (r < 0 || r >= n || c < 0 || c >= m)
            return;

        if (image[r][c] != oc)
            return;
        image[r][c] = nc;

        dfs(image,r - 1, c,oc,nc);
        dfs(image,r + 1, c,oc,nc);
        dfs(image,r, c - 1,oc,nc);
        dfs(image,r, c + 1,oc,nc);
        }
    vector<vector<int>> floodFill(vector<vector<int>>& image, int sr, int sc, int color) {
        int  oc=image[sr][sc];
        if(oc==color)
        return image;
        dfs(image, sr, sc, oc, color);
        return image;
    }
};
~~~

# Submission Review
## Approach
- **Technique**: Depth-First Search (DFS) via recursion.
- **Optimality**: Optimal. The algorithm visits each reachable pixel of the target color exactly once.

## Complexity
- **Time Complexity**: $O(N \times M)$, where $N$ and $M$ are dimensions of the image. In the worst case, every pixel is filled.
- **Space Complexity**: $O(N \times M)$. This is the worst-case recursion stack depth if the image is a single line or a snake-like path of the same color.

## Efficiency Feedback
- The runtime and memory usage are standard for this problem.
- **Critical Optimization**: The check `if(oc == color) return image;` in the `floodFill` function is crucial. Without it, the DFS would enter an infinite recursion loop (Stack Overflow) because it would keep revisiting the same pixel.

## Code Quality
- **Readability**: Moderate. The logic is clear, but indentation is inconsistent (e.g., the `if` block in `dfs` and the `floodFill` body).
- **Structure**: Good. The separation of the helper `dfs` function from the main interface is standard practice.
- **Naming**: Moderate. `oc` (original color) and `nc` (new color) are slightly cryptic; `oldColor` and `newColor` would be more descriptive.
- **Improvements**: 
    - Use `const` for variables that don't change (like `n` and `m` inside `dfs`).
    - Fix indentation to follow a consistent style guide for professional readability.

---

# Question Revision
# Revision Report: Flood Fill

- **Pattern**: Graph Traversal (DFS/BFS)
- **Brute Force**: Iterate through the entire grid and check every cell; however, since we only need to change connected components of the same color, a global scan is inefficient and does not naturally handle connectivity.
- **Optimal Approach**: 
    - **Logic**: Start from the source pixel $(sr, sc)$. Use a recursive DFS (or a queue-based BFS) to visit all adjacent pixels. If a neighbor has the same starting color as the source, change its color and recursively visit its neighbors. 
    - **Edge Case**: If the starting color is already the same as the replacement color, return immediately to avoid infinite recursion.
    - **Complexity**:
        - **Time**: $O(N \times M)$ where $N$ and $M$ are grid dimensions (each pixel is visited once).
        - **Space**: $O(N \times M)$ for the recursion stack in the worst case.
- **The 'Aha' Moment**: The requirement to change "connected" pixels of the same color is a classic signal for exploring a connected component in a graph.
- **Summary**: Use DFS to recursively propagate a color change to all adjacent pixels of the same original value.

---