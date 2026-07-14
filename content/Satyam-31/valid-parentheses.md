---
title: "Valid Parentheses"
slug: valid-parentheses
date: "2026-06-17"
---

# My Solution
~~~cpp
class Solution {
public:
    bool isValid(string s) {
        stack<char> st;

for(char c : s){
    if(c=='(' || c=='{' || c=='['){
        st.push(c);
    }
    else{
        if(st.empty()) return false;

        char top = st.top();

        if((c==')' && top!='(') ||
           (c=='}' && top!='{') ||
           (c==']' && top!='['))
            return false;

        st.pop();
    }
}

       return st.empty();
    }
};
~~~

# Submission Review
## Approach
- **Technique**: Stack (LIFO).
- **Optimality**: Optimal. A stack is the standard and most efficient way to ensure that the last opened bracket is the first one closed.

## Complexity
- **Time Complexity**: $O(n)$, where $n$ is the length of the string. Each character is pushed and popped at most once.
- **Space Complexity**: $O(n)$, as the stack may store all characters in the worst case (e.g., a string consisting only of opening brackets).

## Efficiency Feedback
- The solution is highly efficient.
- **Minor Optimization**: While not necessary for this problem, using a `std::vector` or a fixed-size array as a stack can sometimes reduce the overhead associated with `std::deque` (the default underlying container for `std::stack`).

## Code Quality
- **Readability**: Moderate. The logic is clear, but the indentation is inconsistent (specifically inside the `for` loop and before the final `return`), which hinders visual flow.
- **Structure**: Good. The logic follows a clean "push opening / validate and pop closing" pattern.
- **Naming**: Good. `st` and `c` are acceptable in a competitive programming context.
- **Concrete Improvements**:
    - **Indentation**: Fix the indentation of the loop body and the final return statement.
    - **Mapping**: Use a `std::unordered_map<char, char>` to store bracket pairs. This would replace the repetitive `if` conditions with a single lookup, making the code more scalable if more bracket types were added.

---

# Question Revision
### Valid Parentheses

**Pattern:** Stack

**Brute Force:** Iteratively search for and remove adjacent matching pairs (e.g., `()`, `[]`, `{}`) until the string is empty or no more pairs exist. 
- Time: $O(n^2)$
- Space: $O(n)$

**Optimal Approach:** Use a stack to store opening brackets. When a closing bracket is encountered, pop the top element from the stack and verify it is the corresponding opening type. If the stack is empty upon encountering a closing bracket or the types mismatch, the string is invalid.
- Time Complexity: $O(n)$
- Space Complexity: $O(n)$

**The 'Aha' Moment:** The requirement to match the *most recent* unmatched opening bracket implies a Last-In, First-Out (LIFO) dependency.

**Summary:** Use a stack to ensure every closing bracket matches the most recently opened one to validate nested symmetry.

---