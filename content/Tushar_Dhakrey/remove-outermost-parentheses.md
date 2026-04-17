---
title: "Remove Outermost Parentheses"
slug: remove-outermost-parentheses
date: "2026-04-17"
---

# My Solution
~~~java
class Solution {
    public String removeOuterParentheses(String s) {
        StringBuilder sb = new StringBuilder();
        int level = 0;
        for(char ch: s.toCharArray()){
            if(ch=='('){
                if(level > 0) sb.append(ch);
                level++;
            }
            else if(ch==')'){
                level--;
                if(level>0) sb.append(ch);
            }
        }
        return sb.toString();
    }
}
~~~

# Submission Review
## Approach
- **Technique**: Linear scan using a counter (`level`) to track nesting depth.
- **Optimality**: Optimal. The solution processes each character once and uses the minimum necessary state to identify outermost parentheses.

## Complexity
- **Time Complexity**: $O(n)$, where $n$ is the length of the string.
- **Space Complexity**: $O(n)$ to store the resulting string in the `StringBuilder`.

## Efficiency Feedback
- **Performance**: The runtime and memory usage are minimal.
- **Optimization**: Replacing `s.toCharArray()` with a standard `for` loop using `s.charAt(i)` would avoid the allocation of a temporary character array, reducing auxiliary space from $O(n)$ to $O(1)$ (excluding the output buffer).

## Code Quality
- **Readability**: Good. The logic is straightforward and easy to follow.
- **Structure**: Good. The flow is linear and concise.
- **Naming**: Good. `sb` and `level` are appropriate for this context.
- **Improvements**: None required for the logic; the implementation is clean and correct.

---

# Question Revision
### Remove Outermost Parentheses

**Pattern:** String Parsing / Balance Counter

**Brute Force:** Use a stack to identify the start and end indices of each "primitive" valid parentheses string, then slice the inner portion (from $i+1$ to $j-1$) and concatenate the results.

**Optimal Approach:** 
Maintain an `opened` counter to track nesting depth. 
- Append `(` to the result only if `opened > 0` (it is not the start of a primitive).
- Append `)` to the result only if `opened > 1` (it is not the end of a primitive).
- Increment `opened` for `(` and decrement for `)`.

- **Time Complexity:** $O(n)$
- **Space Complexity:** $O(n)$ (to store the result string)

**The 'Aha' Moment:** A parenthesis is "outermost" if and only if the balance is $0$ when encountering `(` or $1$ when encountering `)`.

**Summary:** Use a balance counter to filter out characters that occur at the $0 \to 1$ and $1 \to 0$ transitions.

---