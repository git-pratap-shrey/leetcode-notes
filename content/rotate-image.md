### Revision Report: Rotate Image

**Pattern:** In-place Matrix Manipulation (Layer-by-Layer / Transpose & Reflect)

**Brute Force:**
Create a secondary $N \times N$ matrix. Map each element at `matrix[i][j]` to the new position `matrix[j][n - 1 - i]`. 
*   **Complexity:** Time $O(n^2)$, Space $O(n^2)$.

**Optimal Approach:**
Perform the rotation in two distinct geometric steps to achieve $O(1)$ extra space:
1.  **Transpose:** Swap `matrix[i][j]` with `matrix[j][i]` (reflect over the main diagonal).
2.  **Reflect:** Reverse each row (swap `matrix[i][j]` with `matrix[i][n - 1 - j]`).
*   **Complexity:** Time $O(n^2)$, Space $O(1)$.

**The 'Aha' Moment:**
When a matrix transformation involves a fixed rotation (90°), realizing that a combination of standard matrix operations (transpose + reflection) achieves the target state eliminates the need for complex index arithmetic.

**Summary:**
To rotate a matrix in-place, transpose it first, then mirror each row horizontally.
