---
title: "Container With Most Water"
slug: container-with-most-water
date: "2026-06-21"
---

# My Solution
~~~java
class Solution {
    public int maxArea(int[] height) {
        int i = 0;
        int j = height.length - 1;
        int max = 0;

        while (i < j) {
            int h = Math.min(height[i], height[j]);
            int width = j - i;

            max = Math.max(max, h * width);

            if (height[i] < height[j]) {
                i++;
            } else {
                j--;
            }
        }

        return max;
    }
}
~~~

# Submission Review
## Approach
- **Technique**: Two-Pointer approach.
- **Optimality**: Optimal. The algorithm eliminates the shorter wall at each step, as keeping it cannot possibly increase the area given the decreasing width.

## Complexity
- **Time Complexity**: $O(n)$, where $n$ is the length of the `height` array. Each element is visited at most once.
- **Space Complexity**: $O(1)$, as it only uses a constant amount of extra space regardless of input size.

## Efficiency Feedback
- The implementation is highly efficient.
- The use of `Math.min` and `Math.max` is standard; for extreme performance tuning in a competitive environment, manual `if` checks or ternary operators can be slightly faster in some JVM versions, but it is negligible here.

## Code Quality
- **Readability**: Good. The logic is straightforward and follows a standard pattern.
- **Structure**: Good. The loop and condition flow are logical and concise.
- **Naming**: Good. `i`, `j`, `max`, `h`, and `width` are appropriate for a short algorithmic implementation.
- **Improvements**: None needed; the code is clean and idiomatic.

---

# Question Revision
### Container With Most Water

**Pattern:** Two Pointers

**Brute Force:** Use nested loops to calculate the area for every possible pair of lines, keeping track of the maximum.
- Time: $O(n^2)$
- Space: $O(1)$

**Optimal Approach:** Place pointers at the start and end of the array. Calculate the current area, then move the pointer pointing to the **shorter** line inward. Since the area is limited by the shorter wall, moving the taller wall only decreases width without any possibility of increasing height.
- Time: $O(n)$
- Space: $O(1)$

**The 'Aha' Moment:** The area is bottlenecked by the shorter wall, so only by replacing that shorter wall can we potentially find a height increase that outweighs the loss in width.

**Summary:** Maximize area by using two pointers and always shifting the limiting (shorter) boundary inward.

---