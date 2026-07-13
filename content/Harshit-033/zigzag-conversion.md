---
title: "Zigzag Conversion"
slug: zigzag-conversion
date: "2026-05-27"
---

# My Solution
~~~

~~~

# Submission Review
No code was provided in the `Code:` section. Please provide the implementation you would like me to review. 

If you provide the code, I will analyze it using the following structure:

## Approach
- [Technique used]
- [Optimality analysis]

## Complexity
- Time Complexity: [O(n)]
- Space Complexity: [O(n)]
- [Bottleneck explanation if applicable]

## Efficiency Feedback
- [Observations on runtime/memory]
- [Specific optimization suggestions]

## Code Quality
- Readability: [Rating + Reason]
- Structure: [Rating + Reason]
- Naming: [Rating + Reason]
- [Concrete improvements]

---

# Question Revision
### Zigzag Conversion

**Pattern:** Simulation / String Manipulation

**Brute Force:** 
Create a 2D grid of size `numRows` $\times$ `s.length()`. Manually calculate the $(r, c)$ coordinates for every character to place it in the grid, then iterate through the grid row-by-row to collect characters.

**Optimal Approach:** 
Use an array of `numRows` strings (or string builders) to represent each row. Iterate through the input string, appending the current character to the active row. Maintain a `currentRow` index and a `direction` flag (down/up) that flips whenever `currentRow` hits $0$ or `numRows - 1`. Finally, join all row strings into one.

*   **Time Complexity:** $O(n)$ where $n$ is the length of the string.
*   **Space Complexity:** $O(n)$ to store the characters in the row buffers.

**The 'Aha' Moment:** 
The zigzag pattern is actually just a sequence of row indices that oscillates between $0$ and $numRows - 1$.

**Summary:** 
Simulate the row traversal using a direction toggle and concatenate the resulting row-based strings.

---