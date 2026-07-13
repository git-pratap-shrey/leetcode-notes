---
title: "Sequential Digits"
slug: sequential-digits
date: "2026-07-13"
---

# My Solution
~~~cpp
class Solution {
public:
    bool isdigit(int temp,int i){
        if (temp==0)return true;
        int c=temp%10;
        if(c+1==i){
            return true;
        }
        return false;
    }
    void SD(int idx,int temp,vector<int>&res,int low,int high){
        if(low<=temp && temp<=high){
            res.push_back(temp);
        }
        if(high<temp){
            return;
        }
        for(int i=idx;i<=9;i++){
            if(isdigit(temp,i)){
                temp=temp*10+i;
                SD(i+1,temp,res,low,high);
                temp=(temp-i)/10;
            }
        }
    }
    vector<int> sequentialDigits(int low, int high) {
        vector<int>res;
        SD(1,0,res,low,high);
        sort(res.begin(),res.end());
        return res;
    }
};
~~~

# Submission Review
## Approach
- **Technique**: Backtracking / Depth-First Search (DFS).
- **Optimality**: Suboptimal. While the search space is small (there are only 45 possible sequential numbers), the current implementation uses unnecessary backtracking and manual state management that can be simplified.

## Complexity
- **Time Complexity**: $O(1)$ (effectively constant, as there are at most 45 sequential numbers). However, the recursive approach explores unnecessary branches that don't lead to valid numbers.
- **Space Complexity**: $O(1)$ (recursion stack depth is at most 10).

## Efficiency Feedback
- **Redundant Logic**: The `isdigit` function and the recursive backtracking are overkill for a problem with such a small, predictable search space.
- **Sorting**: The `sort()` call is unnecessary because the recursive generation order (if implemented by digit length) naturally produces sorted output.
- **State Management**: The manual `temp = (temp - i) / 10` backtracking is error-prone and less performant than passing values by value or using a simpler iterative approach.

## Code Quality
- **Readability**: Moderate. The recursive logic is slightly obscured by the manual state mutation.
- **Structure**: Moderate. The code handles logic within the `SD` function correctly but in a verbose manner.
- **Naming**: Moderate. `SD` is non-descriptive; `generateSequential` would be better.
- **Concrete Improvements**:
    - **Iterative approach**: Since sequential numbers are limited, you can simply iterate through all lengths (2 to 9) and all start digits (1 to 9 - length + 1) to generate them directly.
    - **Remove `isdigit`**: It is redundant. You can ensure the sequential property by simply checking if the last digit added is less than 9 before appending `lastDigit + 1`.
    - **Eliminate `sort`**: Generate numbers in order of their length to ensure they are already sorted.

### Suggested Simplified Logic:
```cpp
vector<int> sequentialDigits(int low, int high) {
    vector<int> res;
    for (int length = 2; length <= 9; ++length) {
        for (int start = 1; start <= 10 - length; ++start) {
            int num = 0;
            for (int i = 0; i < length; ++i) {
                num = num * 10 + (start + i);
            }
            if (num >= low && num <= high) res.push_back(num);
        }
    }
    return res;
}
```
This approach eliminates recursion, sorting, and manual state backtracking, resulting in significantly cleaner code.

---

# Question Revision
### Revision Report: Sequential Digits

**Pattern:** Sliding Window / Precomputation (Generation)

**Brute Force:**
Iterate through all possible starting digits (1-9) and lengths (2-9), building strings and checking if they fall within the range `[low, high]`. 

**Optimal Approach:**
Since the total number of sequential digits is mathematically constrained (there are only 36 possible sequential numbers ranging from 12 to 123456789), pre-generate all valid numbers, sort them, and filter those within `[low, high]`.
*   **Time Complexity:** $O(1)$ (The search space is constant, max 36 iterations).
*   **Space Complexity:** $O(1)$ (Storing the constant number of results).

**The 'Aha' Moment:**
When the constraints on the output set are extremely small and finite, generating the entire solution space is more efficient than checking every number in the range `[low, high]`.

**Summary:**
When the problem size is strictly bounded by a small constant, map the entire valid search space rather than iterating through input ranges.

---