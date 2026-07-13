---
title: "Sum of Integers with Maximum Digit Range"
slug: sum-of-integers-with-maximum-digit-range
date: "2026-07-06"
---

# My Solution
~~~
class Solution {
public:
    int maxDigitRange(vector<int>& nums) {
        vector<int>dr(nums.size());
        for(int i=0;i<nums.size();i++){
            int lar=INT_MIN;
            int small=INT_MAX;
            int r=0;
            int z=nums[i];
            while(z>0){
                r=z%10;
                z/=10;
                lar=max(lar,r);
                small=min(small,r);
            }
            dr[i]=lar-small;
        }
        int sum=0;
        int k=*max_element(dr.begin(),dr.end());
        for(int i=0;i<nums.size();i++){
            if(dr[i]==k){
                sum+=nums[i];
            }
        }
        return sum;
    }
};
~~~  # Submission Review 

## Approach
- **Technique**: Linear scan with digit extraction.
- **Optimality**: Time complexity is optimal, but space complexity is suboptimal. The logic can be implemented in a single pass without storing intermediate ranges.

## Complexity
- **Time Complexity**: $O(N \cdot D)$, where $N$ is the number of elements and $D$ is the maximum number of digits (constant for 32-bit integers).
- **Space Complexity**: $O(N)$ to store the `dr` vector. This is suboptimal as it can be reduced to $O(1)$.

## Efficiency Feedback
- **Memory Bottleneck**: The `vector<int> dr` is unnecessary. You can maintain a `maxRange` and a `currentSum` variable, updating the sum whenever a new maximum range is found or the current maximum is matched.
- **Integer Overflow**: The `sum` variable is an `int`. Depending on the constraints of `nums`, summing multiple large integers may lead to overflow; `long long` would be safer.

## Code Quality
- **Readability**: Moderate. The logic is straightforward, but the variable naming is cryptic.
- **Structure**: Moderate. The solution uses three separate passes over the data (calculate ranges $\to$ find max $\to$ sum elements).
- **Naming**: Poor. Variables like `lar`, `small`, `z`, `r`, and `dr` lack descriptive meaning.
- **Correctness Issues**:
    - **Zero Handling**: If `nums[i]` is `0`, the `while(z > 0)` loop never executes. `lar` and `small` remain `INT_MIN` and `INT_MAX`, causing an integer overflow/underflow when calculating `dr[i] = lar - small`.
    - **Negative Numbers**: The `while(z > 0)` condition ignores negative numbers entirely.

#

## Concrete Improvements
1. **Single Pass**: 
   ```cpp
   if (currentRange > maxRange) {
       maxRange = currentRange;
       sum = num;
   } else if (currentRange == maxRange) {
       sum += num;
   }
   ```
2. **Robust Digit Extraction**: Use `abs(num)` and handle the `0` case explicitly to avoid initialization errors.
3. **Naming**: Rename `lar` $\to$ `maxDigit`, `small` $\to$ `minDigit`, `dr` $\to$ `digitRanges`.

---

# Question Revision #

## Revision Report: Sum of Integers with Maximum Digit Range

**Pattern:** Digit Dynamic Programming (Digit DP)

**Brute Force:** 
Iterate through every integer from $L$ to $R$, extract digits to find the `max(digit) - min(digit)`, and accumulate the sum of those that hit the maximum possible range (typically 9).
- **Complexity:** $O(R \cdot \log_{10} R)$ — infeasible for large ranges (e.g., $10^{18}$).

**Optimal Approach:**
Use Digit DP to count and sum numbers that satisfy the digit range condition. Define a recursive function with memoization: `dp(index, tight, leading_zeros, min_digit, max_digit)`.
1. **State:** Track the current digit position, whether the number is constrained by the upper bound (`tight`), if we are currently placing `leading_zeros`, and the current `min`/`max` digits encountered.
2. **Transitions:** For each possible digit (0-9), update the `min_digit` and `max_digit`.
3. **Summation:** To compute the sum, track both the **count** of valid numbers and the **sum** of their prefixes: $\text{new\_sum} = (\text{current\_digit} \times 10^{\text{remaining\_pos}} \times \text{count\_of\_suffixes}) + \text{sum\_of\_suffixes}$.
- **Time Complexity:** $O(\log_{10}(R) \cdot 10 \cdot 10)$ — essentially constant relative to the magnitude of $R$.
- **Space Complexity:** $O(\log_{10}(R) \cdot 10 \cdot 10)$ for the memoization table.

**The 'Aha' Moment:** 
Whenever a problem asks for a sum or count of integers in a range $[L, R]$ based on properties of their digits, it is a signal to use Digit DP.

**Summary:** 
Use Digit DP to track `min` and `max` digit states across positions to efficiently sum numbers in a large range.

---
