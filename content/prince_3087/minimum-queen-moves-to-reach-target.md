---
title: "Minimum Queen Moves to Reach Target"
slug: minimum-queen-moves-to-reach-target
date: "2026-09-26"
---

# My Solution
~~~cpp
class Solution {
public:
    long long subArrayRanges(vector<int>& nums) {
        long long ans = 0;
        for(int i=0;i<nums.size();i++){
            int mini = nums[i];
            int maxi = nums[i];
            for(int m=i+1 ; m<nums.size();m++){
                mini = min(mini,nums[m]);
                maxi = max(maxi,nums[m]);
                ans = ans+(maxi-mini);
            }


        }
        return ans;
        
    }
};
~~~

# Submission Review
## Approach
- **Technique**: Brute-force nested iteration to evaluate every possible subarray.
- **Optimality**: **Not optimal**. The problem (Sum of Subarray Ranges) can be solved in $O(n)$ using a monotonic stack. This solution uses an $O(n^2)$ approach.
- **Correctness Note**: The provided code solves "Sum of Subarray Ranges," but the user prompt labels the problem as "Minimum Queen Moves to Reach Target." The code is completely unrelated to the prompt's title.

## Complexity
- **Time Complexity**: $O(n^2)$, where $n$ is the size of `nums`. Every pair $(i, m)$ is visited once.
- **Space Complexity**: $O(1)$, as it only uses a few scalar variables regardless of input size.
- **Bottleneck**: The nested loop structure ensures that as the input size grows (e.g., $n=10^5$), the number of operations reaches $10^{10}$, leading to a Time Limit Exceeded (TLE) error.

## Efficiency Feedback
- **Runtime**: High for large inputs due to quadratic complexity.
- **Optimization**: Use a monotonic stack to find the contribution of each element as the minimum and maximum for all subarrays it belongs to. This would reduce the complexity from $O(n^2)$ to $O(n)$.

## Code Quality
- **Readability**: Good. The logic is simple and easy to follow.
- **Structure**: Moderate. The indentation is slightly inconsistent, and there is an unnecessary blank line at the end of the loop.
- **Naming**: Moderate. `mini` and `maxi` are acceptable, but `m` is a non-standard name for an inner loop index (usually `j`).
- **Concrete Improvements**:
    - Use `size_t` or `int n = nums.size()` to avoid calling `.size()` repeatedly in loop conditions.
    - Fix indentation for the closing braces.
    - Align the logic with the actual problem title if this was intended for a "Queen Moves" problem.

---

# Question Revision
# Revision Report: Minimum Queen Moves to Reach Target

- **Pattern:** Mathematical / Coordinate Geometry
- **Brute Force:** Use Breadth-First Search (BFS) to explore all possible queen moves from the start coordinate to the target coordinate until the target is reached.
- **Optimal Approach:** 
    - A queen can move any number of squares horizontally, vertically, or diagonally.
    - If the queen is already at the target, the distance is **0**.
    - If the queen can reach the target in one move (same row, same column, or same diagonal $|r1 - r2| = |c1 - c2|$), the distance is **1**.
    - Otherwise, any target on the board can be reached in exactly **2** moves (e.g., move to the target's row, then move to the target's column).
    - **Complexity:** 
        - Time: $O(1)$
        - Space: $O(1)$
- **The 'Aha' Moment:** The queen's unrestricted movement range implies that any cell on a 2D plane is reachable in at most 2 moves.
- **Summary:** Check if coordinates are identical (0), aligned linearly/diagonally (1), or otherwise (2).

---