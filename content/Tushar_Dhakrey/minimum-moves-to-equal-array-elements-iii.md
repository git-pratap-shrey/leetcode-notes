---
title: "Minimum Moves to Equal Array Elements III"
slug: minimum-moves-to-equal-array-elements-iii
date: "2026-11-03"
---

# My Solution
~~~java
class Solution {
    public int minMoves(int[] nums) {
        int n = nums.length;
        int max = 0;
        for(int i=0;i<n;i++){
            max = Math.max(max,nums[i]);
        }
        int i=0;
        int move = 0;
        while(i<n){
            while(nums[i]!=max){
                nums[i]++;
                move++;
            }
            i++;
        }
        return move;
    }
}
~~~

# Submission Review
## Approach
- **Technique**: Iterative simulation. The code finds the maximum element in the array and then increments every other element one by one until they match that maximum.
- **Optimality**: **Suboptimal**. While the logic is correct, simulating the increments individually is inefficient. The number of moves for any element `nums[i]` is simply `max - nums[i]`.

## Complexity
- **Time Complexity**: $O(n \times \text{max\_diff})$, where $n$ is the array length and $\text{max\_diff}$ is the difference between the maximum and minimum element. In the worst case (e.g., `[1, 10^9]`), this will lead to a **Time Limit Exceeded (TLE)**.
- **Space Complexity**: $O(1)$.

## Efficiency Feedback
- **Bottleneck**: The nested `while` loop `while(nums[i]!=max)` performs redundant additions. 
- **Optimization**: Replace the inner loop and the `move++` statement with a single subtraction and addition: `move += (max - nums[i]);`. This would reduce the time complexity to a linear $O(n)$.

## Code Quality
- **Readability**: Good. The logic is straightforward and easy to follow.
- **Structure**: Good. The flow is logical (find max $\rightarrow$ calculate moves).
- **Naming**: Moderate. `move` should be `moves` (plural) to reflect that it is a counter.
- **Concrete Improvements**:
    - Replace the nested `while` loop with `move += max - nums[i]`.
    - Use an enhanced for-loop (`for (int num : nums)`) for both the max search and the move calculation to improve conciseness.
    - Ensure `move` is a `long` if the problem constraints allow the total moves to exceed $2^{31}-1$ (though for this specific LeetCode problem, `int` is usually sufficient).

---

# Question Revision
### Revision Report: Minimum Moves to Equal Array Elements III

- **Pattern**: Greedy / Sorting
- **Brute Force**: Try all possible target values from $\min(nums)$ to $\max(nums)$ and calculate total moves for each. Complexity: $O(n \cdot \text{range})$.
- **Optimal Approach**: 
    1. Sort the array.
    2. To minimize moves, the target value must be the **median** (or any value between the two middle elements if $n$ is even).
    3. Calculate the sum of absolute differences between each element and the median: $\sum |nums[i] - \text{median}|$.
    - **Time Complexity**: $O(n \log n)$ due to sorting.
    - **Space Complexity**: $O(1)$ or $O(n)$ depending on the sorting implementation.
- **The 'Aha' Moment**: The problem asks to minimize the sum of absolute differences, which is the mathematical definition of the **L1 Norm**, minimized at the median.
- **Summary**: To minimize total absolute distance to a single point, always move all elements toward the median.

---