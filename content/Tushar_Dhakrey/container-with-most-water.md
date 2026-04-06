---
title: "Container With Most Water"
slug: container-with-most-water
date: "2026-03-26"

---
---

# My Solution
~~~java
class Solution {
    public int maxArea(int[] height) {
        int left = 0;
        int right = height.length-1;
        int maxarea = Integer.MIN_VALUE;
        while(left<right){
            int h= Math.min(height[left],height[right]);
            int w = right - left;
            int area = h*w;
            maxarea = Math.max(maxarea,area);
            if(height[left]<height[right]){
                left++;
            }
            else{
                right--;
            }
        }
        return maxarea;
    }
}
~~~

# Submission Review
## Approach
- **Technique:** Two-pointer approach.
- **Optimality:** Optimal. It effectively reduces the search space by discarding the shorter line at each step, ensuring the maximum area is found in a single pass.

## Complexity
- **Time Complexity:** $O(n)$, where $n$ is the length of the `height` array, as the pointers traverse the array once.
- **Space Complexity:** $O(1)$, as it uses only a constant amount of extra space.

## Efficiency Feedback
- **Runtime:** High efficiency. The logic avoids the $O(n^2)$ brute-force approach.
- **Initialization:** Using `Integer.MIN_VALUE` is safe but unnecessary; initializing `maxarea` to `0` is sufficient since area is always non-negative.

## Code Quality
- **Readability:** Good. The logic is straightforward and easy to follow.
- **Structure:** Good. The loop condition and pointer updates correctly implement the greedy strategy.
- **Naming:** Good. Variable names (`left`, `right`, `maxarea`, `h`, `w`) are descriptive and standard.
- **Concrete Improvements:** 
    - Change `int maxarea = Integer.MIN_VALUE;` to `int maxarea = 0;`.
    - Minor: You could cache `height[left]` and `height[right]` into variables before the comparison logic to slightly improve readability, though the compiler likely optimizes this already.

---
---


# Question Revision
### Revision Report: Container With Most Water

**Pattern:** Two Pointers (Greedy)

**Brute Force:**
Iterate through every possible pair of lines $(i, j)$ to calculate the area $Area = \min(h[i], h[j]) \times (j - i)$ and track the maximum.
*   **Time Complexity:** $O(n^2)$
*   **Space Complexity:** $O(1)$

**Optimal Approach:**
Initialize pointers at both ends ($left=0, right=n-1$). Calculate the area and update the maximum. To maximize the container, move the pointer pointing to the shorter line inward, as moving the taller line inward could never yield a larger area regardless of the new width.
*   **Time Complexity:** $O(n)$
*   **Space Complexity:** $O(1)$

**The 'Aha' Moment:**
When you realize that moving the taller pointer inward is guaranteed to decrease the area (because both width and height decrease or stay the same), you see that the only way to potentially find a larger area is to discard the shorter line.

**Summary:** 
Always shrink the search space by discarding the limiting factor (the shorter height) to move toward a potentially larger area.

---
