---
title: "Trionic Array II"
slug: trionic-array-ii

---
---

# My Solution
~~~java
class Solution {

    public long maxSumTrionic(int[] nums) {
        int n = nums.length;
        long ans = Long.MIN_VALUE;

        for (int i = 0; i < n; i++) {
            int j = i + 1;
            long res = 0;

            // first segment: increasing segment
            while (j < n && nums[j - 1] < nums[j]) {
                j++;
            }
            int p = j - 1;

            if (p == i) {
                continue;
            }

            // second segment: decreasing segment
            res += nums[p] + nums[p - 1];
            while (j < n && nums[j - 1] > nums[j]) {
                res += nums[j];
                j++;
            }
            int q = j - 1;

            if (q == p || q == n - 1 || (j < n && nums[j] <= nums[q])) {
                i = q;
                continue;
            }

            // third segment: increasing segment
            res += nums[q + 1];

            // find the maximum sum of the third segment
            long maxSum = 0;
            long sum = 0;
            for (int k = q + 2; k < n && nums[k] > nums[k - 1]; k++) {
                sum += nums[k];
                maxSum = Math.max(maxSum, sum);
            }
            res += maxSum;

            // find the maximum sum of the first segment
            maxSum = 0;
            sum = 0;
            for (int k = p - 2; k >= i; k--) {
                sum += nums[k];
                maxSum = Math.max(maxSum, sum);
            }
            res += maxSum;

            // update answer
            ans = Math.max(ans, res);
            i = q - 1;
        }

        return ans;
    }
}
~~~

# Submission Review
## Approach
*   **Technique:** Greedy traversal with segmented scanning (Three-phase pattern matching).
*   **Optimal:** Likely suboptimal. The approach iterates through potential Trionic patterns manually, but the nested loops for calculating the `maxSum` of the first and third segments inside the main loop suggest an $O(N^2)$ worst-case complexity if many patterns overlap or trigger re-scanning.

## Complexity
*   **Time Complexity:** $O(N^2)$ in the worst case (where $N$ is the length of `nums`), due to the nested loops finding prefix/suffix sums within the main scanning loop.
*   **Space Complexity:** $O(1)$, as it uses only a few primitive variables.

## Efficiency Feedback
*   **Bottleneck:** The manual scanning (`while` loops) and the inner `for` loops that re-calculate sums for the first and third segments cause redundant work.
*   **Optimization:** This problem could likely be solved in $O(N)$ using **Prefix Sums** or **Dynamic Programming** to pre-calculate the maximum increasing/decreasing segment sums ending/starting at any index. This would eliminate the inner loops entirely.

## Code Quality
*   **Readability:** Moderate. The logic is segmented well with comments, but the deep nesting and manual index manipulation (`i`, `j`, `p`, `q`) make it difficult to trace the state transitions.
*   **Structure:** Poor. The `i = q - 1` assignment inside the loop makes the control flow non-linear and hard to reason about compared to a standard iteration.
*   **Naming:** Moderate. Variables like `p` and `q` are generic and do not clearly describe their role as boundaries of the Trionic array segments.

### Concrete Improvements
1.  **Pre-computation:** Compute arrays `incPrefix[i]` and `decSuffix[i]` to store the best increasing/decreasing sums. This converts the $O(N^2)$ segment sum calculations into $O(1)$ lookups.
2.  **Simplify Control Flow:** Avoid manually modifying the loop counter `i` inside the loop if possible, or extract the segment-finding logic into helper functions to improve readability.
3.  **Boundary Checks:** Ensure the logic explicitly handles edge cases (e.g., $N < 5$ for a Trionic sequence) to prevent potential `ArrayIndexOutOfBoundsException` errors during index decrements (`p-2`) or increments.

---
---


# Question Revision
### Revision Report: Trionic Array II

**Pattern:** Sliding Window (Variable Size)

**Brute Force:** Generate all possible subarrays using two nested loops and validate the "Trionic" condition for each, resulting in $O(n^2)$ time complexity.

**Optimal Approach:** Use a two-pointer sliding window to maintain a valid window of elements. Expand the `right` pointer to include new elements and increment the `left` pointer to shrink the window when the condition is violated.
*   **Time Complexity:** $O(n)$, as each element is visited at most twice.
*   **Space Complexity:** $O(1)$ (assuming a fixed-size hash map or frequency array).

**The 'Aha' Moment:** The requirement to find the longest subarray that satisfies a constraint while maintaining a contiguous range is a classic signal to use a sliding window instead of re-scanning subarrays.

**Summary:** Whenever a problem asks for the longest or shortest contiguous subarray meeting a criteria, think "sliding window" to move from $O(n^2)$ to $O(n)$.

---
