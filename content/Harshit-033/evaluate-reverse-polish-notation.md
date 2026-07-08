---
title: "Evaluate Reverse Polish Notation"
slug: evaluate-reverse-polish-notation
date: "2026-06-18"
---

# My Solution
~~~cpp
class Solution {
public:
    int solve(int a, int b, char c){
        switch (c){
            case '+':
                return a+b;
                break;
            case '/':
                return b/a;
                break;
            case '*':
                return a*b;
                break;
            case '-':
                return b-a;
                break;

            default:
                return 0;
        }
    }

    int evalRPN(vector<string>& tokens) {

        stack<int> s;

        int len=tokens.size();
        for(int i=0;i<=len-1;i++){
        if(tokens[i] == "+" || tokens[i] == "-" || tokens[i] == "*" || tokens[i] == "/"){
                int a=s.top();
                s.pop();
                int b=s.top();
                s.pop();
                int sum=solve(a,b,tokens[i][0]);
                s.push(sum);
                
            }
            else{
                int num=stoi(tokens[i]);
                s.push(num);
            }
        }
        return s.top();
        
    }
};
~~~

# Submission Review
## Approach
- **Technique**: Stack-based evaluation.
- **Optimality**: Optimal. Using a stack is the standard and most efficient way to evaluate postfix expressions.

## Complexity
- **Time Complexity**: $O(N)$, where $N$ is the number of tokens. Each token is pushed and popped from the stack at most once.
- **Space Complexity**: $O(N)$ in the worst case (e.g., a long sequence of numbers followed by operators).

## Efficiency Feedback
- **Performance**: The implementation is efficient. The use of `stoi` for conversion and a `switch` statement for operation dispatching is appropriate for the constraints.
- **Optimization**: There are no significant bottlenecks. Minimal overhead is introduced by `std::string` comparisons.

## Code Quality
- **Readability**: Moderate. The logic is clear, but indentation is inconsistent (e.g., the `if` block and `for` loop).
- **Structure**: Good. The logic for performing the arithmetic is decoupled into a helper function (`solve`).
- **Naming**: Poor. The variable `sum` in `evalRPN` is used to store the result of subtraction, multiplication, and division, which is semantically incorrect.
- **Concrete Improvements**:
    - **Naming**: Rename `sum` to `result`.
    - **Formatting**: Fix indentation for better maintainability.
    - **Redundancy**: Remove `break` statements after `return` in the `switch` block, as they are unreachable.
    - **Safety**: While not required for competitive programming unless specified, the code does not handle potential integer overflow for `a * b` or division by zero.

---

# Question Revision
### Evaluate Reverse Polish Notation

**Pattern:** Stack

**Brute Force:** 
Repeatedly scan the array for the first occurrence of an operator, evaluate it using the two preceding numbers, and replace those three elements with the result. This requires $O(n^2)$ time due to repeated scans and array shifts.

**Optimal Approach:** 
Iterate through the tokens once. Push operands onto a stack. When an operator is encountered, pop the two most recent operands, perform the calculation, and push the result back onto the stack. The final remaining value is the result.
- **Time Complexity:** $O(n)$
- **Space Complexity:** $O(n)$

**The 'Aha' Moment:** 
The fact that operands always precede their operator means we need a Last-In-First-Out (LIFO) structure to retrieve the most recent values.

**Summary:** Use a stack to defer operand evaluation until an operator is encountered.

---