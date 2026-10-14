---
title: "Maximize Sum of Squares of Digits"
slug: maximize-sum-of-squares-of-digits
date: "2026-10-14"
---

# My Solution
~~~cpp
class Solution {
public:
    string maxSumOfSquares(int num, int sum) {
        if (sum > 9 * num) {
            return "";
        }
        int r = sum % 9;
        string ans(sum / 9, '9');
        if (r > 0) {
            ans.push_back('0' + r);
        }
        ans.append(num - (int)ans.size(), '0');
        return ans;
    }
};
~~~

# Submission Review
## Approach
- **Technique:** Greedy. The solution attempts to maximize the sum of squares by placing as many '9's as possible, then the remainder, and filling the rest with '0's.
- **Correctness:** **Incorrect.** To maximize the sum of squares, the resulting string must be sorted in descending order (e.g., `99700` instead of `99007`). The current code appends the remainder `r` *after* the '9's and then appends '0's, which creates a valid number but fails the implicit requirement of returning the lexicographically largest string among those with the maximum sum of squares.

## Complexity
- **Time Complexity:** $O(\text{num})$, as it constructs a string of length `num`.
- **Space Complexity:** $O(\text{num})$ to store the result string.

## Efficiency Feedback
- The time and space complexity are optimal for the given problem constraints.
- Memory usage is low as it uses a single string buffer.

## Code Quality
- **Readability:** Moderate. The logic is concise, but the failure to sort the digits makes the output logically wrong for most competitive programming judges.
- **Structure:** Good. Simple linear flow.
- **Naming:** Good. `num`, `sum`, and `ans` are clear in context.
- **Concrete Improvements:**
    - **Fix Sorting:** The remainder `r` should be placed immediately after the '9's and before the '0's. Current logic: `99...9` $\rightarrow$ `r` $\rightarrow$ `00...0`. While the code does this, if `r` were placed at the end, it would be wrong. However, the current code actually produces `99r00`, which is the correct order. 
    - **Wait, Re-evaluating Correctness:** Upon closer inspection, `ans(sum / 9, '9')` creates the '9's, `ans.push_back('0' + r)` adds the remainder, and `ans.append(...)` adds the '0's. This actually produces the sequence in descending order. The solution is **Correct**.
    - **Type Safety:** Cast `ans.size()` to `int` is present, avoiding signed/unsigned comparison warnings.

---

# Question Revision
# Revision Report: Maximize Sum of Squares of Digits

- **Pattern**: Greedy / Mathematical Manipulation
- **Brute Force**: Try all possible ways to split the `num` into two integers $a$ and $b$ such that $a + b = num$, then calculate the sum of squares of digits for each pair.
- **Optimal Approach**: 
    - To maximize the sum of squares of digits, we want as many `9`s as possible in one of the numbers.
    - Construct the first number $a$ by taking as many `9`s as can fit without exceeding `num`. For example, if `num` is 100, we try `9`, `99`, etc.
    - Specifically, if $num$ has $k$ digits, test a number consisting of $(k-1)$ nines. 
    - Calculate the sum of squares of digits for the pair $(a, num - a)$.
    - **Complexity**: 
        - Time: $O(\log_{10}(\text{num}))$ — iterating through the digits of the number.
        - Space: $O(1)$.
- **The 'Aha' Moment**: The digit `9` contributes the maximum possible value ($9^2=81$) to the sum, so the goal is to maximize the count of `9`s in one of the addends.
- **Summary**: Maximize the sum of squares by creating a number consisting of as many `9`s as possible and subtracting it from the total.

---