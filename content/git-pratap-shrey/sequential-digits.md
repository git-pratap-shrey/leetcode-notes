---
title: "Sequential Digits"
slug: sequential-digits
date: "2026-07-13"
---

# My Solution
~~~cpp
class Solution {
public:
    int count_digits(int num){
        int count = 0;
        while(num > 0){
            num /= 10;
            count++;
        }

        return count;
    }

    void add_digits(int digits, int low, int high, vector<int>& answer){
        int digit;
        int power;
        for(int i = 1; i <= 10 - digits; i++){
            digit = 0;
            for(int j = i; j < i+digits; j++){
                digit *= 10;
                digit += j;
                // cout<<digit<<" ";
            }

            if(digit >= low && digit <= high){
                // cout<<digit<<" ";
                answer.push_back(digit);
            }

        }
    }

    vector<int> sequentialDigits(int low, int high) {
        int low_digits = count_digits(low);
        int high_digits = count_digits(high);

        vector<int> answer; 

        while(low_digits <= high_digits){
            add_digits(low_digits, low, high,answer);
            low_digits++;
        }

        return answer;

    }
};
~~~

# Submission Review
## Approach
- **Technique**: Brute-force generation of all possible sequential numbers. Instead of iterating through the range `[low, high]`, the code iterates through all possible digit lengths (from the length of `low` to the length of `high`) and generates sequential candidates.
- **Optimality**: Optimal. The total number of sequential digits across all possible lengths is very small (at most 8 candidates per length, for lengths 2 through 9), making this approach significantly more efficient than range scanning.

## Complexity
- **Time Complexity**: $O(1)$. The number of iterations is bounded by a constant (maximum 9 possible lengths, each with maximum 8 candidates).
- **Space Complexity**: $O(1)$ auxiliary space, excluding the space required for the output vector.

## Efficiency Feedback
- **Runtime**: Extremely low due to the small search space of sequential numbers.
- **Optimization**: The `int power` variable inside `add_digits` is declared but never used; removing it would clean up the code.

## Code Quality
- **Readability**: Good. The logic is straightforward and easy to follow.
- **Structure**: Good. The logic is properly decomposed into helper functions (`count_digits`, `add_digits`).
- **Naming**: Good. Variable names like `low_digits` and `sequentialDigits` clearly describe their purpose.
- **Improvements**: 
    - Remove the unused `int power;` declaration.
    - Remove commented-out `cout` statements.
    - `count_digits` would return `0` for `num = 0`, which might cause logic issues if `low` is `0`, though sequential digits typically start from `12`.

---

# Question Revision
### Sequential Digits

**Pattern:** Simulation / Combinatorial Generation

**Brute Force:** Iterate through every integer from $1$ to $n$ and verify if digits are sequential.
- **Complexity:** $O(n \log n)$

**Optimal Approach:** Instead of searching, generate all possible sequential numbers. Since sequential digits are defined by a starting digit (1-9) and a length (2-10), there are only 45 possible sequential numbers in total. Iterate through all possible start positions and lengths, convert them to integers, and collect those $\le n$.
- **Time Complexity:** $O(1)$ (The number of sequential combinations is constant and independent of $n$).
- **Space Complexity:** $O(1)$

**The 'Aha' Moment:** The search space of "sequential digits" is so small (fixed maximum) that generating all possibilities is trivial compared to iterating up to $n$.

**Summary:** Generate the tiny, finite set of all valid sequential numbers rather than iterating through the range $[1, n]$.

---