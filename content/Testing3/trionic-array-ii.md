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
*   **Technique:** Greedy traversal with look-ahead simulation. The solution attempts to identify "peaks" (an increasing sequence followed by a decreasing sequence) and then adds an adjacent increasing sequence.
*   **Optimality:** Suboptimal. The logic attempts a local greedy search for trionic shapes but uses nested loops and redundant re-scanning, which may miss global maxima or perform unnecessary work.

## Complexity
*   **Time Complexity:** $O(N^2)$ in the worst case. While the outer loop index `i` skips forward, the two internal `for` loops (scanning backwards from `p` and forwards from `q`) can re-scan segments multiple times if not perfectly handled by the jump logic.
*   **Space Complexity:** $O(1)$, as it only uses auxiliary primitive variables.

## Efficiency Feedback
*   **Bottleneck:** The nested loops to find `maxSum` for the first and third segments are redundant. These prefix/suffix sums could be precomputed in $O(N)$ using a sliding window or dynamic programming, reducing the overall complexity to $O(N)$.
*   **Logic Issue:** The use of `i = q - 1` and `i = q` creates a risk of infinite loops or skipped indices if the input array structure is unconventional (e.g., flat plateaus or specific edge cases).

## Code Quality
*   **Readability:** Moderate. The segmentation logic is split into clear phases, but the nested loop index manipulation is difficult to follow.
*   **Structure:** Poor. The logic is heavily dependent on index state management (`i`, `j`, `p`, `q`), which makes the code fragile and prone to off-by-one errors.
*   **Naming:** Moderate. Variables like `p`, `q`, and `res` are standard in competitive programming but lack descriptive meaning regarding the state they represent (e.g., `peakIndex`, `troughIndex`).

## Concrete Improvements
1.  **Precomputation:** Use prefix sums for increasing segments to get range sums in $O(1)$.
2.  **State Management:** Instead of manual index jumping, consider a single pass to identify all local peaks and troughs and store them in a list. Then iterate over the list to calculate the max trionic sum.
3.  **Refactoring:** Replace the nested loops with functional logic or precomputed arrays to eliminate the $O(N^2)$ potential.
4.  **Edge Cases:** Add explicit checks for arrays where $N < 3$, as the current logic relies on specific indices `p-2` and `q+2` which could cause `ArrayIndexOutOfBoundsException` if not guarded by `n`.

---
---


# Question Revision
### Revision Report: Trionic Array II

**Pattern:** Sliding Window (Variable Size)

**Brute Force:** Nested loops to check every possible subarray sum, resulting in $O(n^2)$ time complexity.

**Optimal Approach:** Use two pointers (`left`, `right`) to maintain a running window sum. Expand `right` to include elements until the target is met, then increment `left` to shrink the window while updating the result.
*   **Time Complexity:** $O(n)$ — Each element is visited at most twice.
*   **Space Complexity:** $O(1)$ — Only constant extra space for pointers and variables.

**The 'Aha' Moment:** The requirement to find a contiguous subarray meeting a constraint in a linear array is a classic signal to use a sliding window instead of brute-force iteration.

**Summary:** When asked for an optimal contiguous subarray solution, maintain a window that expands to find the target and shrinks to minimize the footprint.

---
