--- title: "Evaluate Reverse Polish Notation" slug: evaluate-reverse-polish-notation date: "2026-06-18" ---  # My Solution ~~~class Solution {
public:
    int evalRPN(vector<string>& tokens) {

        stack<int> st;

        for(int i = 0; i < tokens.size(); i++) {

            if(tokens[i] != "+" &&
               tokens[i] != "-" &&
               tokens[i] != "*" &&
               tokens[i] != "/") {

                st.push(stoi(tokens[i]));
            }
            else {

                int a = st.top();
                st.pop();

                int b = st.top();
                st.pop();

                if(tokens[i] == "+")
                    st.push(b + a);

                else if(tokens[i] == "-")
                    st.push(b - a);

                else if(tokens[i] == "*")
                    st.push(b * a);

                else
                    st.push(b / a);
            }
        }

        return st.top();
    }
}; - cpp~~~  # Submission Review ## Approach
- **Technique**: Stack-based simulation.
- **Optimality**: Optimal. RPN evaluation requires a stack to maintain the order of operands, and this implementation processes each token exactly once.

## Complexity
- **Time Complexity**: $O(N)$, where $N$ is the number of tokens. Each token is pushed and popped from the stack at most once.
- **Space Complexity**: $O(N)$ in the worst case (e.g., an expression where all operands appear before any operators).

## Efficiency Feedback
- The runtime is optimal for this problem.
- **Potential Optimization**: Using a `std::vector` as a stack (with `push_back` and `pop_back`) can sometimes be slightly faster than `std::stack` due to reduced overhead, though the difference is negligible here.

## Code Quality
- **Readability**: Good. The logic is clear and follows the standard RPN algorithm.
- **Structure**: Good. The separation between operand handling and operator logic is distinct.
- **Naming**: Moderate. `st` is a common shorthand for stack, but `operandStack` would be more descriptive. `a` and `b` are acceptable for binary operation operands.
- **Concrete Improvements**:
    - **Operand Order**: The code correctly handles non-commutative operations (`b - a` and `b / a`), which is a common pitfall.
    - **Operator Checking**: The `if` condition checking for operators is repetitive. A `switch` statement is not possible with `std::string`, but a small mapping or a helper function `isOperator(string s)` would clean up the main loop.
    - **Edge Cases**: The code assumes the input is always valid per problem constraints; otherwise, `st.top()` and `stoi()` could throw exceptions.  ---  # Question Revision ### Evaluate Reverse Polish Notation

**Pattern:** Stack (LIFO)

**Brute Force:** Repeatedly scan the array for the first occurrence of an operator, evaluate it with the two preceding numbers, replace that triplet with the result, and repeat until one value remains.

**Optimal Approach:** 
Iterate through the tokens linearly. If a token is a number, push it onto the stack. If it is an operator, pop the two most recent numbers, perform the operation, and push the result back onto the stack. The final remaining value is the answer.

- **Time Complexity:** $O(n)$
- **Space Complexity:** $O(n)$

**The 'Aha' Moment:** The requirement to apply operators to the *most recently* seen operands is a direct signal for a Last-In-First-Out (LIFO) stack structure.

**Summary:** Use a stack to buffer operands and resolve them immediately upon encountering an operator.  ---