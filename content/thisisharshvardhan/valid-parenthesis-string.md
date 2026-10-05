---
title: "Valid Parenthesis String"
slug: valid-parenthesis-string
date: "2026-10-05"
---

# My Solution
~~~cpp
class Solution {
public:
    bool checkValidString(string s) {
       int n=s.size();
        int open=0;
        for(int i=0;i<n;i++){
            if(s[i]=='*')open++;
            else if(s[i]=='(') open++;
            else open--;
            if(open<0) return false;
        }
        int close=0;
    for(int i=n-1;i>=0;i--){
            if(s[i]=='*')close++;
            else if(s[i]==')') close++;
            else close--;
            if(close<0) return false;
        }
        return true;
    }
};
~~~

# Submission Review
## Approach
- **Technique**: Two-pass Greedy. The first pass ensures there are enough open brackets/wildcards to cover closing brackets from left to right. The second pass ensures there are enough closing brackets/wildcards to cover open brackets from right to left.
- **Optimality**: Optimal. It solves the problem in linear time and constant space.

## Complexity
- **Time Complexity**: $O(n)$, where $n$ is the length of the string. The string is traversed exactly twice.
- **Space Complexity**: $O(1)$. Only two integer counters are used regardless of input size.

## Efficiency Feedback
- The runtime and memory usage are minimal.
- **Optimization**: The solution could be implemented in a single pass by maintaining a range (min/max) of possible open bracket counts, but the current two-pass approach is equally efficient in terms of big-O complexity and often easier to reason about.

## Code Quality
- **Readability**: Moderate. The logic is clear, but the lack of consistent indentation and spacing makes it slightly harder to scan.
- **Structure**: Good. The separation of the two passes is logical.
- **Naming**: Moderate. `open` and `close` are descriptive, but `close` in the second loop actually tracks the balance of closing-capable characters, which is slightly confusing.
- **Concrete Improvements**:
    - Fix indentation for the `int close=0;` line and the second `for` loop.
    - Add consistent spacing around operators (e.g., `i < n` instead of `i<n`).
    - Consider using `const string& s` in the function signature if it weren't already provided by the LeetCode template to avoid unnecessary copies (though here it is passed by value in the snippet provided).

---

# Question Revision
# Revision Report: Valid Parenthesis String

- **Pattern:** Greedy / Range Tracking (Two-Pointer Variation)
- **Brute Force:** Use recursion or backtracking to explore every possible replacement of `*` as `(`, `)`, or an empty string. Complexity: $O(3^n)$.
- **Optimal Approach:** 
    - Maintain a range of possible open parenthesis counts: `low` (minimum possible `(`) and `high` (maximum possible `(`).
    - Iterate through the string:
        - If `(`: Increment both `low` and `high`.
        - If `)`: Decrement both `low` and `high`.
        - If `*`: Decrement `low` (treated as `)`) and increment `high` (treated as `(`).
    - **Constraints:** If `high < 0`, the string is invalid. If `low < 0`, reset `low = 0` because we cannot have negative open parentheses.
    - **Final Check:** Valid if `low == 0`.
    - **Complexity:** Time: $O(n)$ | Space: $O(1)$.
- **The 'Aha' Moment:** The `*` character creates a *range* of possibilities rather than a single state, suggesting we track the minimum and maximum possible balance.
- **Summary:** Track the minimum and maximum possible open-parentheses counts to handle the flexibility of the wildcard.

---