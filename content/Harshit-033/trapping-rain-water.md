---
title: "Trapping Rain Water"
slug: trapping-rain-water
date: "2026-04-12"

---
---

# My Solution
~~~cpp
class Solution {
public:
    int trap(vector<int>& height) {
        int ans=0;
        int len=height.size();
        int l=0;
        int lm=height[0];
        int r=len-1;
        int rm=height[len-1];

        while(l<=r){
            if(height[l]<=height[r]){
                lm=(height[l]>lm)?height[l]:lm;
                ans=ans+(lm-height[l]);
                l++;
            }
            else{
                rm=(height[r]>rm)?height[r]:rm;
                ans=ans+(rm-height[r]);
                r--;
            }
        }
        return ans;
        
    }
};
~~~

# Submission Review
## Approach
*   **Technique:** Two-pointer approach.
*   **Optimality:** Optimal. It achieves the theoretical limit of $O(n)$ time and $O(1)$ extra space by processing the array from both ends and maintaining prefix/suffix maximums on the fly.

## Complexity
*   **Time Complexity:** $O(n)$, where $n$ is the number of elements in `height`. Each element is visited exactly once.
*   **Space Complexity:** $O(1)$, as it only uses a constant number of integer variables.

## Efficiency Feedback
*   The solution is highly efficient. It avoids the $O(n)$ extra space required by the standard dynamic programming approach (which pre-calculates left/right max arrays).
*   **Note:** If `height` is empty, `height[0]` and `height[len-1]` will cause an out-of-bounds access. While many competitive programming platforms guarantee $n \ge 1$, adding a guard clause `if (height.empty()) return 0;` is safer.

## Code Quality
*   **Readability:** Good. The logic is concise and follows a standard pattern.
*   **Structure:** Good. The two-pointer loop handles all cases without redundant conditions.
*   **Naming:** Moderate. Abbreviations like `lm` (left maximum), `rm` (right maximum), and `ans` are acceptable in competitive programming, but `leftMax`, `rightMax`, and `trappedWater` would improve maintainability in a production setting.
*   **Concrete Improvements:**
    *   Add a check for empty input to prevent undefined behavior.
    *   Replace ternary operators with `std::max` for better idiomatic readability: 
        `lm = std::max(lm, height[l]);` instead of `lm = (height[l] > lm) ? height[l] : lm;`.
    *   The loop condition `l <= r` is correct, but since `l` and `r` eventually meet at the same element, the logic still holds (the difference will be 0).

---
---


# Question Revision
### Trapping Rain Water Revision Report

**Pattern:** Two Pointers (or Monotonic Stack)

**Brute Force:** 
For each element, find the maximum height to its left and the maximum height to its right. The water trapped at that index is `min(left_max, right_max) - height[index]`.
*   **Time:** $O(n^2)$
*   **Space:** $O(1)$

**Optimal Approach:**
Use two pointers (`left` and `right`) starting at both ends of the array. Maintain `left_max` and `right_max`. Always move the pointer pointing to the smaller maximum, as the water level at that side is guaranteed by the current side's maximum.
*   **Time:** $O(n)$
*   **Space:** $O(1)$

**The 'Aha' Moment:**
When the amount of trapped water at an index depends solely on the *minimum* of the two maximums found on either side, shrinking the search space from the side with the smaller boundary allows you to calculate the capacity in a single pass without needing precomputed arrays.

**Summary:** 
Water depth is limited by the shorter of the two flanking walls, so always process the "bottleneck" side first by moving the pointer with the smaller current maximum.

---
