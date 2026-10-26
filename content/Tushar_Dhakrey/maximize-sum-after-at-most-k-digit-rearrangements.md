---
title: "Maximize Sum After At Most K Digit Rearrangements"
slug: maximize-sum-after-at-most-k-digit-rearrangements
date: "2026-10-25"
---

# My Solution
~~~java
class Solution {
    public long maximizeSum(int[] nums, int k) {
        int n = nums.length;
        long total = 0;
        long[] gain = new long[n];
        for(int i=0;i<n;i++){
            String s = String.valueOf(nums[i]);
            char[] arr = s.toCharArray();
            Arrays.sort(arr);
            StringBuilder sb = new StringBuilder(new String(arr));
            sb.reverse();
            long max = Long.parseLong(sb.toString());
            gain[i] = max-nums[i];
            total += nums[i];
        }
        Arrays.sort(gain);
        for(int i=n-1;i>=n-k;i--){
            if(gain[i]>0){
                total += gain[i];
            }
        }
        return total;
    }
}
~~~

# Submission Review
## Approach
- **Technique**: Greedy. The solution calculates the potential "gain" (maximum possible value minus current value) for each number, sorts these gains in descending order, and picks the top $k$ positive gains.
- **Optimality**: Optimal. Since each rearrangement is independent, picking the largest gains maximizes the total sum.

## Complexity
- **Time Complexity**: $O(N \cdot D \log D + N \log N)$, where $N$ is the length of `nums` and $D$ is the maximum number of digits in an integer.
    - Sorting digits for each number: $O(N \cdot D \log D)$.
    - Sorting the `gain` array: $O(N \log N)$.
- **Space Complexity**: $O(N)$ to store the `gain` array.

## Efficiency Feedback
- **String Overhead**: Converting integers to `String`, then `char[]`, then `StringBuilder`, and back to `Long` is computationally expensive. 
- **Optimization**: Use a frequency array (size 10) to count digits and reconstruct the maximum number mathematically to avoid object allocation and string parsing.
- **Boundary Risk**: The loop `for(int i=n-1; i>=n-k; i--)` will throw an `ArrayIndexOutOfBoundsException` if $k > n$. While problem constraints usually specify $k \le n$, a safer check would be `i >= 0`.

## Code Quality
- **Readability**: Good. The logic is linear and easy to follow.
- **Structure**: Moderate. Missing necessary imports (`java.util.*`), though implied in competitive programming contexts.
- **Naming**: Good. Variables like `gain` and `total` clearly describe their purpose.
- **Improvements**: 
    - Replace `StringBuilder.reverse()` logic with a numeric approach for performance.
    - Add a check for `k > n` to prevent crashes.
    - Use `long` consistently for calculations to prevent overflow before adding to `total`.

---

# Question Revision
# Revision Report: Maximize Sum After At Most K Digit Rearrangements

- **Pattern:** Greedy + Frequency Map (Counting)
- **Brute Force:** Try every possible permutation of digits for every single number in the array, then calculate the sum for each combination to find the maximum. This leads to factorial time complexity $O(N \cdot D!)$ where $D$ is the number of digits.
- **Optimal Approach:** 
    - **Logic:** To maximize the sum, we want the largest digits to be in the highest place values (e.g., $10^4$ instead of $10^0$). 
    - 1. Create a global frequency map (or array of size 10) to count the occurrences of every digit across *all* numbers.
    - 2. Calculate the total number of available slots for each power of 10 (e.g., if there are 5 numbers, there are 5 slots for $10^0$, 5 for $10^1$, etc.).
    - 3. Fill the highest place values first using the largest available digits from the frequency map.
    - 4. Stop when either all slots are filled or the total number of swaps exceeds $K$. Note: The problem asks for "at most $K$ rearrangements," but since we can move any digit to any position, we just need to ensure we don't exceed the total budget of digits.
    - **Complexity:** 
        - **Time:** $O(N \cdot D)$ where $N$ is the number of elements and $D$ is the max number of digits (constant 5 in this case).
        - **Space:** $O(1)$ as the digit map is always size 10.
- **The 'Aha' Moment:** The phrase "at most $K$ rearrangements" combined with "maximize sum" suggests that digits are a shared resource that should be redistributed from the least significant to most significant positions.
- **Summary:** Treat all digits across all numbers as a single pool and greedily place the largest digits in the highest available power-of-10 slots.

---