---
title: "Sequential Digits"
slug: sequential-digits
date: "2026-07-13"
---

# My Solution
~~~cpp
class Solution {
public:
    vector<int> sequentialDigits(int low,int high) {
        vector<int> ans;

        for(int len=2;len<=9;len++) {

            for(int start=1;start<=10-len;start++) {

                int num=0;
                for(int i=0;i<len;i++) {
                    num=num*10+start+i; }
                if(num>=low && num<=high) {
                    ans.push_back(num);
             }
            }
        }

        return ans;
    }
};
~~~

# Submission Review
## Approach
- **Technique**: Iterative Generation. The code pre-generates all possible sequential digits by iterating through all possible lengths (2 to 9) and all possible starting digits (1 to $10 - \text{length}$), then filters them against the `low` and `high` boundaries.
- **Optimality**: Optimal. Since there are only 36 possible sequential digits in total across all integer ranges, generating them is significantly more efficient than iterating through every number between `low` and `high`.

## Complexity
- **Time Complexity**: $O(1)$. The loops run for a constant number of iterations (a maximum of 36 combinations) regardless of the input values of `low` and `high`.
- **Space Complexity**: $O(1)$. The space used for calculation is constant; the output vector size is capped at 36.

## Efficiency Feedback
- **Runtime/Memory**: Extremely low. The approach avoids redundant calculations and unnecessary iterations over the input range.
- **Optimizations**: No meaningful optimizations are required. One could theoretically break the `len` loop early if the smallest sequential number of that length exceeds `high`, but the current constant-time overhead is negligible.

## Code Quality
- **Readability**: Good. The logic is transparent and easy to follow.
- **Structure**: Good. The nested loop structure logically mirrors the properties of sequential digits (length $\rightarrow$ start digit $\rightarrow$ construction).
- **Naming**: Good. Variable names like `len`, `start`, and `num` are descriptive and appropriate for the context.
- **Improvements**: 
    - Minor formatting: Adding consistent spacing around operators (e.g., `len <= 9` instead of `len<=9`) would improve visual clarity.
    - The inner loop `num = num * 10 + start + i` is a clean way to construct the integer.

---

# Question Revision
### Sequential Digits

**Pattern:** Enumeration / Generation

**Brute Force:** Iterate through every integer from `low` to `high` and verify if each digit is exactly one greater than the previous digit.

**Optimal Approach:** 
Instead of searching the range, generate all possible sequential digit strings (starting digits 1-9, lengths 2-9). Convert these strings to integers and collect those that fall within the $[low, high]$ interval.
- **Time Complexity:** $O(1)$ (The total number of sequential digit integers is constant and small).
- **Space Complexity:** $O(1)$ (The result set is bounded by a small constant).

**The 'Aha' Moment:** The definition of "sequential digits" is so restrictive that it's faster to generate all possible candidates globally than to iterate through the input range.

**Summary:** Don't search the range; generate the candidates.

---