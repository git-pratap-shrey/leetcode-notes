---
title: "Maximize Sum of Squares of Digits"
slug: maximize-sum-of-squares-of-digits
date: "2026-10-14"
---

# My Solution
~~~cpp
/*class Solution {
public:
    string maxSumOfSquares(int num, int sum) {

        string t="";
        if(sum>num*9) return t;
        while(num--){
            if(sum<9){
                t=t+to_string(sum);
                sum=0;
                continue;
            }
            t=t+'9';
            sum=sum-9;

            
        }
        return t;
        
    }
};*/


class Solution {
public:
    string maxSumOfSquares(int num, int sum) {
        string t = "";

        if (sum > num * 9) return t;

        while (num--) {
            int digit = min(9, sum);
            t += to_string(digit);
            sum -= digit;
        }

        return t;
    }
};

~~~

# Submission Review
## Approach
- **Technique**: Greedy. The algorithm attempts to place the largest possible digit (`9`) as far left as possible to maximize the sum of squares (since $a^2 + b^2 < (a+1)^2 + (b-1)^2$ for $a < b$).
- **Optimality**: **Suboptimal**. The greedy choice is incorrect. To maximize the sum of squares, one should maximize the difference between digits (pushing values toward $9$ and $0$). This code fills digits from left to right, but it does not guarantee the most skewed distribution possible for all cases (though for this specific problem, the primary goal is getting as many $9$s as possible). 
- **Correction**: While the provided code produces a valid string with the correct sum, it doesn't explicitly handle the case where `sum` is small; however, the `min(9, sum)` logic effectively handles the distribution.

## Complexity
- **Time Complexity**: $O(num)$. The loop runs exactly `num` times.
- **Space Complexity**: $O(num)$ to store the resulting string.

## Efficiency Feedback
- **Runtime**: The use of `to_string(digit)` inside a loop is slightly inefficient as it involves function calls and string allocations for a single character.
- **Optimization**: Since `digit` is always $0-9$, use `t += (char)('0' + digit);` to avoid `to_string` overhead.

## Code Quality
- **Readability**: Good. The logic is straightforward and easy to follow.
- **Structure**: Good. The redundant commented-out block should be removed in a production environment, but the active class is clean.
- **Naming**: Moderate. `t` is a vague variable name; `result` or `res` would be more descriptive.
- **Concrete Improvements**:
    1. Replace `to_string(digit)` with character arithmetic.
    2. Use `std::string(num, '0')` or `reserve(num)` to prevent multiple reallocations during string concatenation.

---

# Question Revision
# Revision Report: Maximize Sum of Squares of Digits

- **Pattern:** Greedy / Digit Manipulation
- **Brute Force:** Iterate through all possible numbers from $1$ to $n$ and calculate the sum of squares of their digits to find the maximum.
- **Optimal Approach:** 
    - To maximize the sum of squares, we want as many `9`s as possible. 
    - Compare two candidates: 
        1. The number $n$ itself.
        2. A number formed by changing one digit to its predecessor (e.g., $d \to d-1$) and making all subsequent digits `9` (e.g., $432 \to 399$).
    - Iterate through each digit position from left to right, applying this "borrow" logic to generate potential candidates, and track the maximum sum of squares.
    - **Time Complexity:** $O(\log_{10} n)$ (proportional to the number of digits).
    - **Space Complexity:** $O(1)$ (excluding space for the result).
- **The 'Aha' Moment:** The fact that $9^2$ is significantly larger than any other digit's square suggests that maximizing the count of $9$s is more beneficial than keeping the original leading digits.
- **Summary:** Trade one unit from a higher-place digit to turn all following digits into $9$s to maximize the total sum of squares.

---