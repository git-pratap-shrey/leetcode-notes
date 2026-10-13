---
title: "Evaluate Reverse Polish Notation"
slug: evaluate-reverse-polish-notation
date: "2026-10-13"
---

# My Solution
~~~cpp
class Solution {
public:
    int evalRPN(vector<string>& tokens) {
        stack<int>st;
        for(string x : tokens){
            if(x != "+" && x != "-" && x != "*" && x != "/"){
              st.push(stoi(x));
            }
            else {
                int b=st.top();
                st.pop();
                int a=st.top();
                st.pop();

                if(x == "+") st.push(a + b);
            else if(x == "-") st.push(a - b);
            else if(x == "*") st.push(a * b);
            else if(x == "/") st.push(a / b);
            }
        }
         return st.top();
    }
};
~~~

# Submission Review
## Approach
- **Technique**: Stack-based evaluation. It uses a stack to store operands and pops them when an operator is encountered.
- **Optimality**: Optimal. This is the standard linear approach for evaluating Reverse Polish Notation.

## Complexity
- **Time Complexity**: $O(n)$, where $n$ is the number of tokens. Each token is pushed and popped from the stack at most once.
- **Space Complexity**: $O(n)$ in the worst case (e.g., a sequence of numbers followed by a sequence of operators).

## Efficiency Feedback
- **Runtime**: The use of `stoi` and `std::stack` is efficient enough for the given constraints.
- **Optimization**: Replacing `std::stack` with `std::vector` could slightly reduce overhead by avoiding the default `std::deque` container used by `std::stack`, but it is not necessary for this problem.

## Code Quality
- **Readability**: Moderate. The logic is clear, but the indentation is inconsistent (e.g., the `else` block and the final `return` statement).
- **Structure**: Good. The flow follows the logical requirements of the algorithm.
- **Naming**: Poor. `x` is used for the current token; a name like `token` would be more descriptive. `st` is common shorthand for stack, but `s` or `operandStack` is preferred in professional contexts.

**Concrete Improvements**:
1. **Formatting**: Fix the indentation of the `else` blocks and the final `return` statement for better maintainability.
2. **Input Handling**: While not required for LeetCode, adding checks for `st.empty()` before calling `st.top()` would make the code more robust against malformed RPN strings.
3. **Consistency**: Use consistent spacing around operators and braces.

---

# Question Revision
# Revision Report: Evaluate Reverse Polish Notation

- **Pattern**: Stack (LIFO)
- **Brute Force**: Not applicable. RPN is designed to be processed linearly; any approach that doesn't track operands would require multiple passes to find the innermost nested operation, effectively simulating a stack.
- **Optimal Approach**: 
    - Iterate through the tokens from left to right.
    - If the token is a number, push it onto the stack.
    - If the token is an operator, pop the last two elements from the stack, apply the operator (ensuring the second pop is the left operand), and push the result back.
    - The final remaining element in the stack is the result.
    - **Time Complexity**: $O(n)$ where $n$ is the number of tokens.
    - **Space Complexity**: $O(n)$ to store operands in the stack.
- **The 'Aha' Moment**: The "postfix" nature of the expression means operators always follow their operands, requiring a structure that remembers the most recent values seen.
- **Summary**: Use a stack to store operands and pop two whenever an operator is encountered.

---