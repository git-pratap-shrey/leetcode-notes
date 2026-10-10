---
title: "Remove Outermost Parentheses"
slug: remove-outermost-parentheses
date: "2026-10-08"
---

# My Solution
~~~cpp
class Solution {
public:
    string removeOuterParentheses(string s) {
        int count=0;
        string ans="";
        for (int i=0;i<s.length();i++) {
            if (s[i] == '(') {
                if (count > 0) ans.push_back(s[i]);
                count++;
            } else { 
                count--;
                if (count > 0) ans.push_back(s[i]);
            }
        }

        return ans;
    }
};
~~~

# Submission Review
## Approach
- **Technique:** Linear scan using a balance counter to track nesting levels.
- **Optimality:** Optimal. The problem requires visiting every character once, and the counter approach correctly identifies outer parentheses by checking if the balance is non-zero before adding to the result.

## Complexity
- **Time Complexity:** $O(n)$, where $n$ is the length of the string. The code performs a single pass.
- **Space Complexity:** $O(n)$ to store the resulting string.

## Efficiency Feedback
- **Runtime:** Low. The logic is minimal with no heavy operations.
- **Optimization:** `ans.reserve(s.length())` could be used to prevent multiple reallocations of the result string as it grows.

## Code Quality
- **Readability:** Good. The logic is straightforward and easy to follow.
- **Structure:** Good. Simple loop structure with clear conditional branching.
- **Naming:** Moderate. `ans` and `count` are acceptable but generic; `result` and `balance` would be more descriptive.
- **Concrete Improvements:**
    - Use `const string& s` in the function signature (already provided by LeetCode) and ensure `s.length()` is stored in a variable or compared against `size_t` to avoid signed/unsigned comparison warnings.
    - Use `ans += s[i]` or `ans.push_back(s[i])` consistently.

---

# Question Revision
# Revision Report: Remove Outermost Parentheses

- **Pattern**: Counter-based Tracking (Stack Simulation).
- **Brute Force**: Use an explicit `Stack` to push and pop indices of matching parentheses, identify the outermost pairs by tracking the depth, and slice the string to remove those indices.
- **Optimal Approach**: Use an integer `opened` counter to track the nesting depth. 
    - Iterate through the string: 
        - If `char == '('`, only add to the result if `opened > 0` (meaning it's not an outermost bracket), then increment `opened`.
        - If `char == ')'`, decrement `opened` first; only add to the result if `opened > 0` (meaning it's not an outermost bracket).
    - **Time Complexity**: $O(n)$ where $n$ is the length of the string.
    - **Space Complexity**: $O(n)$ to store the result string.
- **The 'Aha' Moment**: The requirement to strip "outermost" layers implies that any parenthesis at depth 0 is a boundary and should be ignored.
- **Summary**: Use a counter to track nesting depth and only append characters that exist at a depth greater than zero.

---