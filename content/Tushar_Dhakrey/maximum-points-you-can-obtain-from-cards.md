---
title: "Maximum Points You Can Obtain from Cards"
slug: maximum-points-you-can-obtain-from-cards
date: "2026-11-06"
---

# My Solution
~~~java
class Solution {
    public int maxScore(int[] nums, int k) {
        int n = nums.length;
        int sum = 0;
        for(int i=0;i<k;i++){
            sum += nums[i];
        }
        int max = sum;
        for(int i=k-1;i>=0;i--){
            sum -= nums[i];
            sum += nums[n-k+i];
            max = Math.max(max,sum);
        }
        return max;
    }
}
~~~

# Submission Review
<thought>*   Problem: Maximum Points You Can Obtain from Cards.
    *   Input: `nums` (array of integers), `k` (number of cards to take from either end).
    *   Logic provided:
        1.  Initialize `sum` with the first `k` elements.
        2.  `max = sum`.
        3.  Iterate from `i = k-1` down to `0`.
        4.  Subtract `nums[i]` (moving the left boundary of the prefix window) and add `nums[n-k+i]` (expanding the right boundary of the suffix window).
        5.  Update `max`.
        6.  Return `max`.

    *   Wait, let's trace the loop carefully.
    *   `k` elements are taken.
    *   Start: $k$ elements from the left.
    *   Loop $i = k-1$ down to $0$:
        *   $i=k-1$: `sum = sum - nums[k-1] + nums[n-k + (k-1)]` $\rightarrow$ `sum = sum - nums[k-1] + nums[n-1]`. (Now $k-1$ from left, $1$ from right).
        *   $i=k-2$: `sum = sum - nums[k-2] + nums[n-2]`. (Now $k-2$ from left, $2$ from right).
        *   ...
        *   $i=0$: `sum = sum - nums[0] + nums[n-k]`. (Now $0$ from left, $k$ from right).
    *   This correctly explores all combinations of taking $x$ from left and $k-x$ from right.

    *   Approach: Sliding window / Two-pointer approach.
    *   Optimality: Yes, it is optimal. It visits each necessary element once.
    *   Time Complexity: $O(k)$. The first loop runs $k$ times, the second loop runs $k$ times.
    *   Space Complexity: $O(1)$. Only a few integer variables are used.

    *   Runtime: Very efficient.
    *   Memory: Minimal.

    *   Readability: Good. The logic is simple.
    *   Structure: Good. Single method.
    *   Naming: `sum` and `max` are acceptable for competitive programming, though `currentSum` and `maxScore` would be more descriptive.

    *   Check boundaries: If $k=n$, the loop still works. If $k=0$, it works.
    *   Check potential overflow: `nums[i]` are usually small enough that `sum` (int) won't overflow if the problem constraints allow, but for very large arrays/values, `long` might be needed. However, based on the provided code, it's standard for this specific LeetCode problem.</thought>## Approach
- **Technique**: Sliding Window / Two-Pointer approach.
- **Optimality**: Optimal. The solution evaluates all possible combinations of taking $x$ elements from the left and $k-x$ elements from the right in linear time relative to $k$.

## Complexity
- **Time Complexity**: $O(k)$ — The first loop runs $k$ times to initialize the prefix sum, and the second loop runs $k$ times to slide the window.
- **Space Complexity**: $O(1)$ — Only a constant amount of extra space is used for variables.

## Efficiency Feedback
- **Performance**: The runtime and memory usage are minimal.
- **Observation**: The solution avoids calculating the total array sum and subtracting the middle window (an alternative $O(n)$ approach), making it more efficient when $k \ll n$.

## Code Quality
- **Readability**: Good. The logic is concise and easy to follow.
- **Structure**: Good. The flow is linear and logical.
- **Naming**: Moderate. While `sum` and `max` are clear in context, `currentScore` and `maxScore` would be more descriptive.
- **Concrete Improvements**: 
    - The variable `max` could be renamed to `maxScore` to avoid confusion with the `Math.max` method (though Java handles this fine).
    - No functional improvements are needed as the logic is already optimal.

---

# Question Revision
<thought>
*   Problem: Maximum Points You Can Obtain from Cards.
*   Constraint: Can take $k$ cards from either the beginning or the end of the array.
*   Goal: Maximize points.
*   Role: Senior DSA Trainer.
*   Format: Markdown summary.
*   Requirements: Pattern, Brute Force, Optimal Approach (Logic + Complexity), 'Aha' Moment (one sentence), Summary (one sentence). No introductory pleasantries.

    *   Input: `cardPoints` array, `k` (number of cards to take).
    *   Observation: Taking $k$ cards from the ends means leaving $n - k$ contiguous cards in the middle.
    *   Goal Shift: To maximize the sum of $k$ elements at the ends, we must minimize the sum of the $n - k$ consecutive elements remaining in the middle.

    *   *Pattern:* Sliding Window / Prefix Sum.
    *   *Brute Force:* Recursion or checking every combination of $i$ cards from left and $k-i$ cards from right.
    *   *Optimal:* Fixed-size sliding window of size $n-k$. Calculate total sum, subtract the minimum window sum.
    *   *Complexity:* $O(n)$ time, $O(1)$ space.
    *   *Aha Moment:* "Picking from both ends" is equivalent to "leaving a contiguous block in the middle."

    *   Pattern: Sliding Window.
    *   Brute Force: Try all possible combinations of taking $i$ cards from the left and $(k-i)$ cards from the right.
    *   Optimal Approach: Instead of maximizing the ends, minimize the sum of the $n-k$ contiguous cards left in the middle using a sliding window.
    *   Complexity: Time $O(n)$, Space $O(1)$.
    *   Aha Moment: The key is realizing that removing $k$ elements from the ends is exactly the same as leaving a contiguous subarray of size $n-k$.
    *   Summary: Maximize ends by minimizing the remaining middle sliding window.</thought>### Revision Report: Maximum Points You Can Obtain from Cards

- **Pattern**: Sliding Window
- **Brute Force**: Iterate through all possible combinations of taking $i$ cards from the left and $k-i$ cards from the right ($0 \le i \le k$), calculating the sum for each.
- **Optimal Approach**: 
    - Instead of maximizing the sum of $k$ elements at the ends, minimize the sum of the $n-k$ contiguous elements remaining in the middle.
    - Use a fixed-size sliding window of length $n-k$ to find the minimum subarray sum.
    - Result = `Total Sum` - `Minimum Window Sum`.
    - **Time Complexity**: $O(n)$
    - **Space Complexity**: $O(1)$
- **The 'Aha' Moment**: The constraint of picking elements from both ends implies that the elements *not* picked must form a single contiguous subarray.
- **Summary**: Maximize the sum of the ends by minimizing the sum of the internal sliding window of size $n-k$.

---