---
title: "Score of Parentheses"
slug: score-of-parentheses
date: "2026-10-05"
---

# My Solution
~~~cpp
class Solution {
public:
    int scoreOfParentheses(string s) {
        stack<int> st;
        st.push(0);
        for(char c:s){
            if(c=='('){
                st.push(0);}
            else
            { int x=st.top();
                st.pop();
                int val;
                if(x==0)
                    val=1;
                else
                    val=2*x;
                st.top()+=val;
            }
        }
        return st.top();
    }
};
~~~

# Submission Review
## Approach
- **Technique**: Stack-based simulation. The stack maintains the current score at different nesting levels.
- **Optimality**: Optimal. It processes the string in a single pass and handles nesting linearly.

## Complexity
- **Time Complexity**: $O(n)$, where $n$ is the length of the string. Each character is pushed and popped from the stack at most once.
- **Space Complexity**: $O(n)$ in the worst case (e.g., deeply nested parentheses like `(((( ))))`).

## Efficiency Feedback
- The logic is efficient. 
- **Potential Optimization**: Since the problem can also be solved by counting the depth of open parentheses and adding $2^{depth}$ for every `()`, the space complexity could be reduced to $O(1)$ if only the current depth is tracked. However, the stack approach is a standard and robust implementation for this problem.

## Code Quality
- **Readability**: Moderate. The logic is clear, but the lack of whitespace and inconsistent indentation make it slightly harder to scan.
- **Structure**: Good. The flow is linear and handles the base cases (empty nesting vs. nested scores) correctly.
- **Naming**: Poor. Variable names like `st`, `x`, and `val` are generic. While acceptable in competitive programming, `scoreStack` or `currentScore` would be more descriptive.

**Concrete Improvements**:
1. Add consistent indentation for the `if/else` blocks.
2. Rename `x` to `innerScore` to clarify that it represents the value calculated inside the parentheses being closed.
3. Replace `st.top() += val;` with a more explicit update for clarity.

---

# Question Revision
# Revision Report: Score of Parentheses

### Pattern
**Stack / Mathematical Depth Tracking**

### Brute Force
**Recursive Simulation:**
Find the innermost matching parentheses, calculate their score (1), replace the pair with the score value, and repeat the process outward until the string is fully reduced.
- **Time Complexity:** $O(n^2)$ due to repeated string scanning/manipulation.

### Optimal Approach
**Depth-Based Counting:**
Instead of calculating scores as we go, we track the current nesting depth. A score is only added when we encounter a leaf node `()` (the smallest unit). The value added is $2^{\text{depth}}$.
1. Initialize `score = 0` and `depth = 0`.
2. Iterate through the string:
   - If `(`: Increment `depth`.
   - If `)`: Decrement `depth`.
   - If the current `)` forms a pair `()` (previous char was `(`): Add $2^{\text{depth}}$ to the total score.
- **Time Complexity:** $O(n)$
- **Space Complexity:** $O(1)$ (if using depth counter) or $O(n)$ (if using a stack).

### The 'Aha' Moment
The score doubles with every level of nesting, suggesting that the total is simply the sum of $2^{\text{depth}}$ for every core `()` pair.

### Summary
Calculate the total score by summing $2^{\text{depth}}$ for every innermost `()` pair encountered.

---