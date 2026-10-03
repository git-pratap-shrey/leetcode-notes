---
title: "Final Value of Variable After Performing Operations"
slug: final-value-of-variable-after-performing-operations
date: "2026-10-02"
---

# My Solution
~~~cpp
class Solution {
public:
    int finalValueAfterOperations(vector<string>& operations) {
        int X = 0;

        for (auto &op : operations) {
            if (op[1] == '+')
                X++;
            else
                X--;
        }

        return X;
    }
};
~~~

# Submission Review
## Approach
- **Technique**: Single-pass simulation.
- **Optimality**: Optimal. The problem requires processing every operation exactly once to determine the final value.

## Complexity
- **Time Complexity**: $O(n)$, where $n$ is the number of operations. Each operation is checked once via index access.
- **Space Complexity**: $O(1)$ extra space.

## Efficiency Feedback
- **Runtime**: High efficiency. Accessing the character at index 1 (`op[1]`) is the most performant way to distinguish between increment and decrement operations, as it avoids full string comparisons.
- **Memory**: Minimal footprint.

## Code Quality
- **Readability**: Good. The logic is transparent and concise.
- **Structure**: Good.
- **Naming**: Moderate. `X` is generic, though it mirrors the variable name often used in problem statements.
- **Improvements**: 
    - Change `auto &op` to `const auto &op` to explicitly indicate the input strings are not being modified.

---

# Question Revision
### Final Value of Variable After Performing Operations

**Pattern**: Simulation / String Parsing

**Brute Force**: Iterate through the array of operations and use string comparison (e.g., `if op == "++X" or op == "X++"`) to increment or decrement a counter.

**Optimal Approach**: Iterate through the operations and check only the character at index 1 of each string. If it is `'+'`, increment the counter; otherwise, decrement it.
- **Time Complexity**: $O(n)$
- **Space Complexity**: $O(1)$

**The 'Aha' Moment**: The position of the variable `X` is irrelevant; only the operator character at the center of the string determines the action.

**Summary**: Use a single pass to increment or decrement a variable based on the presence of `+` or `-` in each operation string.

---