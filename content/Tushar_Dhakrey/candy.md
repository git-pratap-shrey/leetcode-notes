---
title: "Candy"
slug: candy

---
---

# My Solution
~~~java
class Solution {
    public int candy(int[] ratings) {
        int i = 1;
        int n = ratings.length;
        int sum = n;
        while(i<n){
            if(ratings[i]==ratings[i-1]){
                i++;
                continue;
            }
            int peak =0;
            while(i<n && ratings[i]>ratings[i-1]){
                peak += 1;
                sum += peak;
                i++;
            }
            int down = 0;
            while(i<n && ratings[i]<ratings[i-1]){
                down += 1;
                sum += down;
                i++;
            }
            sum -= Math.min(peak,down);
        }
        return sum;
    }
}
~~~

# Submission Review
## Approach
*   **Technique**: Greedy (One-pass slope analysis).
*   **Optimal**: Yes. This approach computes the result in a single pass by identifying increasing and decreasing sequences ("mountains"), which is the optimal $O(n)$ strategy.

## Complexity
*   **Time Complexity**: $O(n)$. Each element in the array is visited a constant number of times.
*   **Space Complexity**: $O(1)$. It uses only a few variables for tracking state, excluding the input array.

## Efficiency Feedback
*   **High Efficiency**: The solution is highly efficient as it avoids the extra $O(n)$ space required by the standard two-pass (left-to-right/right-to-left) approach.
*   **Logic**: The `sum -= Math.min(peak, down)` logic is a clever way to handle the peak element, which is counted in both the increasing and decreasing slopes. 

## Code Quality
*   **Readability**: Moderate. The nested `while` loops are efficient but slightly harder to trace compared to the standard two-pass approach.
*   **Structure**: Good. The logic cleanly separates ascending and descending segments.
*   **Naming**: Moderate. Variables like `peak` and `down` are descriptive enough, but the purpose of `sum = n` (initializing each child with at least 1 candy) could be documented for clarity.
*   **Concrete Improvements**: 
    *   The `if(ratings[i]==ratings[i-1])` block is unnecessary. If the ratings are equal, the `while` loops for `peak` and `down` would naturally fail immediately, and `i` would increment. 
    *   Adding comments to explain the mathematical adjustment at the peak would improve maintainability for junior developers.
    *   Consider using a `for` loop or a more explicit `while` structure to ensure the `i++` increment doesn't accidentally lead to off-by-one errors in edge cases (though it is correct here).

---
---


# Question Revision
### Revision Report: Candy (LeetCode 135)

**Pattern:** Two-Pass Greedy

**Brute Force:**
Iterate through the ratings repeatedly, incrementing a candy count for children with higher ratings than neighbors until no more changes are needed.
*   **Time:** $O(n^2)$
*   **Space:** $O(n)$

**Optimal Approach:**
Perform two passes to satisfy both neighbors independently:
1.  **Left-to-Right:** Ensure if `ratings[i] > ratings[i-1]`, then `candies[i] = candies[i-1] + 1`.
2.  **Right-to-Left:** Ensure if `ratings[i] > ratings[i+1]`, then `candies[i] = max(candies[i], candies[i+1] + 1)`.
*   **Time:** $O(n)$
*   **Space:** $O(n)$

**The 'Aha' Moment:**
When a problem requires satisfying local constraints that propagate in opposite directions (left-neighbor vs. right-neighbor), process them in two separate linear passes to decouple the dependencies.

**Summary:** 
Satisfy left-to-right requirements, then right-to-left, and take the maximum to respect both constraints simultaneously.

---
