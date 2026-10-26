---
title: "Container With Most Water"
slug: container-with-most-water
date: "2026-10-26"
---

# My Solution
~~~cpp
class Solution {
public:
    int maxArea(vector<int>& height) {
        int lp = 0;
        int rp = height.size() - 1;
        int maxW = 0;
        while (lp < rp) {
            int width = rp-lp;
            int ht=min(height[lp],height[rp]);
            int area = width*ht;
            maxW =max(maxW,area);
            height[lp]<height[rp]?lp++:rp--;
        }
        return maxW;
    }
};
~~~

# Submission Review
## Approach
- **Technique**: Two-pointer approach.
- **Optimality**: Optimal. It explores all potentially larger areas by narrowing the window based on the limiting factor (the shorter line), ensuring no better solution is skipped.

## Complexity
- **Time Complexity**: $O(n)$, where $n$ is the size of the `height` vector. The array is traversed once.
- **Space Complexity**: $O(1)$, as it only uses a few integer variables regardless of input size.

## Efficiency Feedback
- **Runtime**: Very efficient.
- **Memory**: Minimal overhead.
- **Observation**: The use of `std::min` and `std::max` is appropriate here; no further micro-optimizations are needed for this problem.

## Code Quality
- **Readability**: Moderate. The logic is clear, but the lack of spacing around operators (e.g., `rp-lp`) and the condensed ternary operator make it slightly cramped.
- **Structure**: Good. The loop condition and pointer movement are correctly implemented.
- **Naming**: Moderate. `lp` and `rp` are acceptable for "left pointer" and "right pointer," but `maxW` is slightly misleading as it stores the maximum **Area**, not the maximum **Width**.
- **Improvements**:
    - Rename `maxW` to `maxArea`.
    - Add consistent spacing around operators for better legibility (e.g., `int width = rp - lp;`).

---

# Question Revision
# Revision Report: Container With Most Water

- **Pattern:** Two Pointers
- **Brute Force:** Use nested loops to calculate the area for every possible pair of vertical lines and keep track of the maximum area found.
- **Optimal Approach:** 
    - Initialize two pointers at the extreme ends of the array.
    - Calculate the area using the shorter of the two lines as the height: $\text{Area} = \min(height[left], height[right]) \times (right - left)$.
    - Move the pointer pointing to the **shorter line** inward, as keeping it can never produce a larger area regardless of the other pointer's position.
    - **Time Complexity:** $O(n)$
    - **Space Complexity:** $O(1)$
- **The 'Aha' Moment:** The area is limited by the shorter wall, so the only way to potentially increase the area while the width decreases is to replace the current limiting height.
- **Summary:** Use two pointers and always shrink the window by moving the shorter wall to seek a taller boundary.

---