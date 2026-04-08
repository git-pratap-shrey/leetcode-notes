---
title: "Container With Most Water"
slug: container-with-most-water
date: "2026-04-08"

---
---

# My Solution
~~~c
int maxArea(int* height, int heightSize) {
    int left=0;
    int right=heightSize-1;
    int max=0;
    int prod;

    while(left<right){
        if(height[left]<height[right]){
            prod=height[left]*(right-left);
            left++;
        }
        else{
            prod=height[right]*(right-left);
            right--;
        }
        max=(prod>max)?prod:max;
    }

    return max;

    
}
~~~

# Submission Review
## Approach
*   **Technique:** Two-pointer approach.
*   **Optimality:** Optimal. It effectively prunes the search space by always discarding the shorter vertical line, which is guaranteed to yield the maximum possible area for that specific width.

## Complexity
*   **Time Complexity:** $O(n)$, where $n$ is `heightSize`. The pointers move towards each other, visiting each element at most once.
*   **Space Complexity:** $O(1)$, as it uses a fixed amount of extra space regardless of input size.

## Efficiency Feedback
*   **Runtime/Memory:** Excellent. The solution performs the minimum number of operations required to solve the problem and does not allocate any additional memory.
*   **Optimizations:** None needed. The logic is as lean as it can get.

## Code Quality
*   **Readability:** Good. The logic is clear and follows the standard two-pointer pattern.
*   **Structure:** Good. The control flow is concise and handles the edge cases (like `left < right`) correctly.
*   **Naming:** Moderate. `prod` is slightly ambiguous; `area` would be more descriptive of what is being calculated.
*   **Concrete Improvements:**
    *   Change `prod` to `currentArea` for better clarity.
    *   The `prod` variable declaration inside the loop is fine in C99, but moving it closer to its use or renaming it improves readability.
    *   The solution is robust for the given constraints.

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
Initialize pointers at both ends of the array. Calculate the area, then move the pointer pointing to the **shorter line** inward, as moving the longer line can only decrease the width without any possibility of increasing the height.
*   **Time Complexity:** $O(n)$
*   **Space Complexity:** $O(1)$

**The 'Aha' Moment:**
When the area is constrained by the shorter of two lines, moving the pointer at the taller line is always suboptimal because it can only decrease the width while the height remains capped by the existing shorter line.

**Summary:**
Always shrink the search space by discarding the limiting factor (the shorter height) to preserve the possibility of finding a larger area.

---
