---
title: "Word Search"
slug: word-search
date: "2026-09-30"
---

# My Solution
~~~java
class Solution {
    public int[] runningSum(int[] nums) {
        int n = nums.length;
        int[] ans = new int[n];
        ans[0] = nums[0];
        for(int i=1;i<n;i++){
            ans[i] = ans[i-1]+nums[i];
        }
        return ans;
    }
}
~~~

# Submission Review
## Approach
- **Technique**: Prefix Sum.
- **Optimality**: Optimal. The problem requires visiting each element once to calculate the cumulative sum.

## Complexity
- **Time Complexity**: $O(n)$, where $n$ is the length of the input array.
- **Space Complexity**: $O(n)$ to store the resulting `ans` array.

## Efficiency Feedback
- **Memory**: The current implementation uses $O(n)$ extra space. If the problem allows modifying the input array, space complexity could be reduced to $O(1)$ by updating `nums` in-place.
- **Runtime**: Minimal overhead; the single-pass linear scan is the most efficient approach.

## Code Quality
- **Readability**: Good. The logic is straightforward and easy to follow.
- **Structure**: Good. The loop correctly starts at index 1 to avoid `ArrayIndexOutOfBoundsException`.
- **Naming**: Moderate. While `ans` is common in competitive programming, `prefixSum` or `result` would be more descriptive.
- **Improvements**:
    - Use in-place modification if original data preservation is not required.
    - Add a check for empty input (`nums == null || nums.length == 0`) to prevent runtime errors on empty arrays.

---

# Question Revision
# Revision Report: Word Search

- **Pattern**: Backtracking (DFS on a 2D Grid)
- **Brute Force**: Try every possible starting cell in the grid. From each cell, explore all 4 cardinal directions recursively to match the word, marking visited cells to avoid reusing them, and backtracking (unmarking) if a path fails.
- **Optimal Approach**: 
    - **Logic**: Use a DFS function that takes current coordinates `(r, c)` and the current `index` of the word being matched. If `index` reaches the word length, return `true`. Mark the current cell as visited (e.g., using a special character like `#`) to avoid cycles, recurse into neighbors, and then restore the original character (backtrack) to allow other paths to use that cell.
    - **Time Complexity**: $O(N \cdot M \cdot 3^L)$, where $N \cdot M$ is the grid size and $L$ is the word length (3 directions to explore at each step after the first).
    - **Space Complexity**: $O(L)$ for the recursion stack depth.
- **The 'Aha' Moment**: The need to explore all possible paths to find a specific sequence while needing to "undo" a choice if it leads to a dead end signals Backtracking.
- **Summary**: Use DFS to explore paths and remember to mark/unmark visited cells to allow for exhaustive search across the grid.

---