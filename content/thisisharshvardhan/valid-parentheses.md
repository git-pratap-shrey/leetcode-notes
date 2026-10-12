---
title: "Valid Parentheses"
slug: valid-parentheses
date: "2026-10-12"
---

# My Solution
~~~cpp
class Solution {
public:
    bool isValid(string s) {
        stack<char>st;
        for(int i=0;i<s.size();i++){
            if(!st.empty() && ((s[i]==')' && st.top()=='(') || (s[i]=='}' && st.top()=='{')|| (s[i]==']' && st.top()=='[')))st.pop();
            else st.push(s[i]);
        }
        if(st.empty()) return true;
        else return false;
    }
};
~~~

# Submission Review
## Approach
- **Technique:** Stack-based simulation. It pushes opening brackets and pops them when a matching closing bracket is encountered.
- **Optimality:** Yes. This is the optimal approach for this problem as it ensures LIFO (Last-In-First-Out) matching of nested structures.

## Complexity
- **Time Complexity:** $O(n)$, where $n$ is the length of the string. Each character is pushed and popped at most once.
- **Space Complexity:** $O(n)$ in the worst case (e.g., a string consisting only of opening brackets).

## Efficiency Feedback
- The runtime and memory are optimal for the given problem.
- No significant bottlenecks identified.

## Code Quality
- **Readability:** Moderate. The core logic is crammed into a single long `if` statement, which reduces scanability.
- **Structure:** Good. The logic flow is linear and correct.
- **Naming:** Moderate. `st` is a common abbreviation for stack, but `s` for the input string is generic (though standard for LeetCode-style signatures).
- **Improvements:**
    - **Formatting:** Break the complex `if` condition into multiple lines or use a mapping (like a `std::unordered_map`) to match brackets to improve readability.
    - **Boolean Return:** Instead of `if(st.empty()) return true; else return false;`, simply use `return st.empty();`.
    - **Range-based Loop:** Use `for(char c : s)` instead of index-based iteration for cleaner C++ syntax.

---

# Question Revision
# Revision Report: Valid Parentheses

- **Pattern:** Stack (LIFO - Last In, First Out)
- **Brute Force:** Repeatedly search for and remove adjacent matching pairs (e.g., `()`, `[]`, `{}`) using string replacement until the string is empty or no more pairs exist.
- **Optimal Approach:** 
    - Iterate through the string. 
    - If a **opening bracket** is encountered, push it onto the stack.
    - If a **closing bracket** is encountered, pop the top of the stack and check if it matches the corresponding opening type. If the stack is empty or the pair doesn't match, it is invalid.
    - **Time Complexity:** $O(n)$ — Single pass through the string.
    - **Space Complexity:** $O(n)$ — In the worst case (e.g., `((((`), all characters are pushed onto the stack.
- **The 'Aha' Moment:** The need to match the *most recently opened* bracket with the *first available* closing bracket signals a Last-In, First-Out (LIFO) requirement.
- **Summary:** Use a stack to store opening brackets and pop them to validate against closing brackets in reverse order of appearance.

---