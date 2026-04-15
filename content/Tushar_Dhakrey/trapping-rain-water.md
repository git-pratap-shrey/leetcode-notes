---
title: "Trapping Rain Water"
slug: trapping-rain-water
date: "2026-04-14"
---

# My Solution
~~~java
class Solution {
    public int trap(int[] height) {
        int lmax=0;
        int rmax = 0;
        int total = 0;
        int l = 0;
        int r = height.length-1;
        while(l<r){
            if(height[l]<=height[r]){
                if(lmax>height[l]){
                    total += lmax - height[l];
                }
                else{
                    lmax = height[l];
                }
                l = l+1;
            }
            else{
                if(rmax>height[r]){
                    total += rmax - height[r];
                }
                else{
                    rmax = height[r];
                }
                r = r-1;
            }
        }
        return total;
    }
}
~~~

# Submission Review
## Approach
- **Technique**: Two-pointer approach.
- **Optimality**: Optimal. It calculates the trapped water in a single pass without requiring auxiliary arrays for prefix/suffix maximums.

## Complexity
- **Time Complexity**: $O(n)$, where $n$ is the length of the `height` array. Each element is visited exactly once.
- **Space Complexity**: $O(1)$. Only a constant amount of extra space is used for pointers and accumulators.

## Efficiency Feedback
- The solution is highly efficient.
- By comparing `height[l]` and `height[r]`, the algorithm ensures that the smaller side always determines the water level, eliminating the need for a second pass or extra memory.

## Code Quality
- **Readability**: Good. The logic is clean and easy to follow.
- **Structure**: Good. The `while` loop and conditional branches are correctly implemented.
- **Naming**: Moderate. While `l`, `r`, `lmax`, and `rmax` are common in competitive programming, using `left`, `right`, `leftMax`, and `rightMax` would improve clarity.
- **Concrete Improvements**:
    - Use `l++` and `r--` instead of `l = l + 1` and `r = r - 1` for standard Java idiomatic style.
    - Use `Math.max()` to simplify the `if-else` blocks for updating maximums, though the current approach is slightly more performant by avoiding function calls.

---

# Question Revision
### Trapping Rain Water

**Pattern:** Two Pointers

**Brute Force:** For every element, scan the entire array to find the maximum height to its left and right; water trapped at that index is $\min(\text{left\_max}, \text{right\_max}) - \text{height}$.

**Optimal Approach:** Initialize two pointers at the ends of the array. Move the pointer pointing to the shorter bar inward, updating the respective boundary maximum and adding the difference between that maximum and the current height to the total.
- **Time Complexity:** $O(n)$
- **Space Complexity:** $O(1)$

**The 'Aha' Moment:** The water level is constrained by the *shorter* of the two tallest boundaries, so you only need to track the smaller of the two running maximums.

**Summary:** Calculate water trapped by moving pointers inward and adding the gap between the current height and the limiting boundary maximum.

---