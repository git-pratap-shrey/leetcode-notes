---
title: "Sum of Integers with Maximum Digit Range"
slug: sum-of-integers-with-maximum-digit-range
date: "2026-07-05"

---

# My Solution
~~~
class
 Solution {
public:
    int digitrange(int num){
        if(num==0) return 0;
        int mi=9,mx=0;
        while(num>0){
            int d=num%10;
            mi=min(mi,d);
            mx=max(mx,d);
            num/=10;
        }
        return mx-mi;
    }
    int maxDigitRange(vector<int>& nums) {
        int r=0;
        for(int x:nums){
            r=max(r,digitrange(x));
        }
        int ans=0;
        for(int x:nums){
            if(digitrange(x)==r){
                ans+=x;
            }
        }
        return ans;
    }
};
~~~

# Submission Review

## Approach

- **Technique**: Two-pass iterative approach using a helper function for digit extraction.
- **Optimality**: Optimal. Finding the global maximum range requires inspecting every element, and summing the elements requires a second pass (or tracking the sum during the first pass).

## Complexity

- **Time Complexity**: $O(N \cdot D)$, where $N$ is the number of elements and $D$ is the maximum number of digits in an integer (constant for 32-bit integers, max $\approx 10$).
- **Space Complexity**: $O(1)$ auxiliary space.

## Efficiency Feedback

- **Redundant Computation**: The code calls `digitrange(x)` twice for elements that match the maximum range. While the cost is low, it is inefficient.
- **Optimization**: One could maintain a running sum and the current maximum range in a single pass. If a new higher range is found, reset the sum to the current element; if a range equals the current maximum, add the element to the sum.

## Code Quality

- **Readability**: Moderate. The logic is clear, but the lack of descriptive naming hinders immediate understanding.
- **Structure**: Good. The helper function separates the digit logic from the accumulation logic.
- **Naming**: Poor. 
    - `r` $\rightarrow$ `maxRange`
    - `mi`/`mx` $\rightarrow$ `minDigit`/`maxDigit`
    - `x` $\rightarrow$ `num`
    - `digitrange` $\rightarrow$ `getDigitRange` (should follow camelCase or snake_case consistently).
- **Concrete Improvement**: The `if(num==0) return 0;` check is correct, but the loop `while(num > 0)` fails for negative integers. If the input can contain negative numbers, `abs(num)` should be used.

---

# Question Revision

#

## Revision Report: Sum of Integers with Maximum Digit Range

**Pattern:** Digit DP

**Brute Force:** 
Iterate from $low$ to $high$, calculate the difference between the maximum and minimum digits for each number, and maintain a running sum for the highest difference encountered.
- **Time:** $O((high - low) \cdot \log_{10}(high))$
- **Space:** $O(1)$

**Optimal Approach:** 
Use Digit DP to count and sum numbers based on their digit properties. Define the state as `(index, tight_constraint, min_digit, max_digit, is_leading_zero)`. 
1. Determine the maximum possible digit range $R \in [9, 0]$ that exists in the range $[low, high]$ by iterating downwards.
2. Once the maximum $R$ is identified, perform a second Digit DP pass to calculate the sum of all numbers where $(\text{max\_digit} - \text{min\_digit}) = R$.
3. Use the formula $\text{sum} = \sum (\text{digit} \cdot 10^{\text{pos}} \cdot \text{count\_of\_suffixes})$ to aggregate the total.

- **Time:** $O(D \cdot 10 \cdot 10 \cdot 2 \cdot 2)$, where $D$ is the number of digits ($\approx \log_{10}(high)$).
- **Space:** $O(D)$ for the memoization table.

**The 'Aha' Moment:** 
Whenever a problem asks for a sum or count of numbers in a range $[low, high]$ based on properties of their individual digits, Digit DP is the required pattern.

**Summary:** 
Use Digit DP to track the min/max digits during number construction to isolate and sum integers with the largest digit spread.

---
