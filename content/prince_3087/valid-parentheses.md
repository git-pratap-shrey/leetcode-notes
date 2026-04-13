---
title: "Valid Parentheses"
slug: valid-parentheses
date: "2026-04-13"

---
---

# My Solution
~~~cpp
class Solution {
public:
    bool isValid(string s) {
        stack<char>st;
        for(int i=0;i<s.size();i++){
            if(s[i]=='('|| s[i]=='{'||s[i]=='['){
                st.push(s[i]);
                continue;
            }
            if(st.empty()){
                return false;
            }
            if(s[i]==')'&&st.top()=='('){
                st.pop();
                continue;
            }
            else if(s[i]==')'&&st.top()!='('){
                return false;
            }
            if(s[i]=='}'&&st.top()=='{'){
                st.pop();
                continue;
            }
            else if(s[i]=='}'&&st.top()!='{'){
                return false;
            }
            if(s[i]==']'&&st.top()=='['){
                st.pop();
                continue;
            }
            else if(s[i]==']'&&st.top()!='['){
                return false;
            }
        }
        if(!st.empty()){
            return false;
        }
        return true;
    }
};
~~~

# Submission Review
## Approach
*   **Technique:** Stack-based greedy matching.
*   **Optimality:** Optimal. It processes the string in a single linear pass and uses a stack to ensure Last-In-First-Out (LIFO) property for valid nesting.

## Complexity
*   **Time Complexity:** $O(n)$, where $n$ is the length of the string, as each character is pushed/popped at most once.
*   **Space Complexity:** $O(n)$ in the worst case (e.g., all opening brackets), where the stack stores $O(n)$ elements.

## Efficiency Feedback
*   **Performance:** High. The usage of `std::stack` is standard and performant for this constraint.
*   **Optimizations:** The current `if-else` chain is verbose. You could optimize by using a hash map (or a switch statement) to map closing brackets to their corresponding opening brackets, which would significantly reduce the code length and improve branch predictability.

## Code Quality
*   **Readability:** Moderate. The logic is clear but repetitive due to the manual checking of each bracket type.
*   **Structure:** Moderate. The `continue` statements are functional but make the flow harder to follow.
*   **Naming:** Good. `st` is a common, acceptable shorthand for a stack.
*   **Concrete Improvements:**
    *   **Refactor conditional logic:** Use a map or a helper function to match pairs.
    *   **Early return:** The final `if(!st.empty())` can be simplified to `return st.empty();`.
    *   **Looping:** Use a range-based `for` loop (`for (char c : s)`) to improve readability and avoid index management.

**Suggested Refactoring:**
```cpp
bool isValid(string s) {
    stack<char> st;
    unordered_map<char, char> map = {{')', '('}, {'}', '{'}, {']', '['}};
    
    for (char c : s) {
        if (map.count(c)) {
            if (st.empty() || st.top() != map[c]) return false;
            st.pop();
        } else {
            st.push(c);
        }
    }
    return st.empty();
}
```

---
---


# Question Revision
### Revision Report: Valid Parentheses

**Pattern:** Stack

**Brute Force:**
Iteratively remove adjacent matching pairs (e.g., `"()"`, `"[]"`, `"{}"`) from the string until no more pairs exist. If the string is empty, it is valid.
*   **Time:** $O(n^2)$ due to repeated scanning and string resizing.
*   **Space:** $O(n)$ to store the string copy.

**Optimal Approach:**
Use a stack to track opening brackets. When a closing bracket is encountered, pop the top of the stack and verify it matches the current closing bracket type.
*   **Logic:** Push opening brackets onto the stack. For closing brackets, if the stack is empty or the popped element doesn't match the current closing bracket, return `false`. Return `true` if the stack is empty after the full traversal.
*   **Time Complexity:** $O(n)$ to traverse the string once.
*   **Space Complexity:** $O(n)$ in the worst case (e.g., all opening brackets).

**The 'Aha' Moment:**
The need to match the *most recently seen* opening bracket with the *current* closing bracket creates a Last-In-First-Out (LIFO) dependency, which is the definition of a stack.

**Summary:**
Whenever you need to track nested structures or ensure the last-opened item is the first one closed, always reach for a stack.

---
