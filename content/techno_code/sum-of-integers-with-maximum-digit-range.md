---
title: "Sum of Integers with Maximum Digit Range"
slug: sum-of-integers-with-maximum-digit-range
date: "2026-07-06"

---

# My Solution
~~~
class
 Solution {
public:
    int maxDigitRange(vector<int>& nums) {
        int value=0,maximum=0,sum=0;
        vector <int> v;
        for(int i=0;i<nums.size();i++){
            int maxi=0, mini=9;

            if(nums[i]==0){
                maxi=mini=0;
            }
        int z=nums[i];
        while(z>0){
            int r=z%10;
            z=z/10;
            maxi=max(maxi,r);
            mini=min(mini,r);
        }
        v.push_back(maxi-mini);
        }
        
    
        maximum=*max_element(v.begin(),v.end());  

        for(int i=0;i<nums.size();i++){
        if(v[i]==maximum)
        sum+=nums[i];
        }
        return sum;
    }
};
~~~

# Submission Review

## Approach

- **Technique**: Iterative simulation. The code extracts digits of each number to calculate the range (maximum digit - minimum digit), identifies the global maximum range, and sums the numbers achieving that range.
- **Optimality**: The time complexity is optimal, but space complexity is suboptimal as it stores ranges for all elements in a separate vector.

## Complexity

- **Time Complexity**: $O(N \cdot \log_{10}(\text{max\_val}))$, where $N$ is the number of elements and $\log_{10}(\text{max\_val})$ is the number of digits in the largest integer.
- **Space Complexity**: $O(N)$ to store the range of every number in vector `v`. This could be reduced to $O(1)$ by tracking the maximum range and updating the sum dynamically.

## Efficiency Feedback

- **Memory Overhead**: The `vector<int> v` is unnecessary. You can maintain a `globalMaxRange` and a `currentSum`. If a new higher range is found, reset `currentSum` to the current number; if a range equal to `globalMaxRange` is found, add the number to `currentSum`.
- **Unused Variable**: The variable `int value` is declared but never used.
- **Integer Overflow**: The variable `sum` is an `int`. Depending on the problem constraints (e.g., $N=10^5$, elements$=10^9$), this will likely overflow. `long long` should be used for the sum.

## Code Quality

- **Readability**: Moderate. The logic is straightforward, but indentation is inconsistent (e.g., the `if(nums[i]==0)` block and the closing braces).
- **Structure**: Moderate. The process is split into three separate passes (calculate ranges $\rightarrow$ find max $\rightarrow$ sum), which is inefficient compared to a single or double pass.
- **Naming**: Poor. Variables `v`, `z`, and `r` are non-descriptive. `maxi` and `mini` are acceptable but could be `maxDigit` and `minDigit`.
- **Concrete Improvements**:
    1. Remove `vector<int> v` to achieve $O(1)$ space.
    2. Change `sum` to `long long`.
    3. Combine the range calculation and summation into a more streamlined logic to avoid multiple iterations over the input vector.
    4. Fix indentation for better maintainability.

---

# Question Revision

#

## Revision Report: Sum of Integers with Maximum Digit Range

**Pattern:** Digit DP (Dynamic Programming)

**Brute Force:** 
Iterate through every integer from $L$ to $R$, extract its digits to find the difference between the maximum and minimum digit, identify the global maximum difference across the range, and sum all integers achieving that difference. 
Complexity: $O((R-L) \cdot \log R)$

**Optimal Approach:**
1. **Find Max Range:** Use a Digit DP feasibility check (starting from range 9 down to 0) to determine the largest $k$ such that at least one integer in $[L, R]$ has $\max(\text{digit}) - \min(\text{digit}) = k$.
2. **Summation:** Use Digit DP to sum all integers in the range $[0, X]$ that satisfy the digit range $k$. The result is $f(R, k) - f(L-1, k)$.
3. **DP State:** `dp(index, tight_constraint, leading_zeros, min_digit, max_digit)`
   - `index`: Current digit position being processed.
   - `tight`: Boolean flag to restrict the digit choice based on the upper bound.
   - `leading_zeros`: Boolean to handle numbers with fewer digits than the maximum.
   - `min_digit`/`max_digit`: Track the current boundaries of digits used.
4. **Complexity:** 
   - **Time:** $O(\log_{10} R \cdot 10 \cdot 10)$ — since we iterate through digits and track min/max digit states (0-9).
   - **Space:** $O(\log_{10} R \cdot 10 \cdot 10)$ for the memoization table.

**The 'Aha' Moment:** 
Any problem asking for the sum or count of numbers in a range $[L, R]$ based on digit-specific properties is a signal for Digit DP.

**Summary:** 
First determine the maximum possible digit range $k$ present in $[L, R]$ using Digit DP, then perform a second Digit DP pass to sum all integers matching that range.

---
