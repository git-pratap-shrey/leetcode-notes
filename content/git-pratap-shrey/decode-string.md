---
title: "Decode String"
slug: decode-string
date: "2026-07-19"
---

# My Solution
~~~cpp
class Solution {
public:
    string decodeString(string s) {
        stack<int> counts;
        stack<string> prevStrings;

        string curr = "";
        int num = 0;

        for (char c : s) {
            if (isdigit(c)) {
                num *= 10;
                num += (c - '0');
            }
            else if (c == '[') {
                counts.push(num);
                prevStrings.push(curr);

                num = 0;
                curr = "";
            }
            else if (c == ']') {
                int k = counts.top();
                counts.pop();

                string temp = prevStrings.top();
                prevStrings.pop();

                while (k--) {
                    temp += curr;
                }

                curr = temp;
            }
            else {
                curr += c;
            }
        }

        return curr;
    }
};
~~~

# Submission Review
## Approach
- **Technique**: Two-stack iterative approach (one for repeat counts, one for partially processed strings).
- **Optimality**: Optimal. It correctly handles nested structures in a single linear pass by maintaining state at each nesting level.

## Complexity
- **Time Complexity**: $O(N + M)$, where $N$ is the length of the encoded string and $M$ is the total length of the resulting decoded string. Each character is processed and appended at most a constant number of times.
- **Space Complexity**: $O(H + M)$, where $H$ is the maximum nesting depth of the brackets and $M$ is the space required for the strings stored in the stack.

## Efficiency Feedback
- **Runtime**: The current implementation is efficient for standard constraints. 
- **Optimization**: The `while(k--)` loop performs string concatenation via `temp += curr`. In C++, repeated string concatenation can trigger frequent reallocations. While generally acceptable, for extremely large output strings, `reserve()` could be used if the total length were predictable, though that is not trivial here due to nesting. 
- **Memory**: The stack stores copies of the current string (`prevStrings.push(curr)`), which is necessary for the logic but contributes to memory usage in deeply nested strings.

## Code Quality
- **Readability**: Good. The logic flow is intuitive and follows standard stack-based parsing patterns.
- **Structure**: Good. The separation of concerns between digits, brackets, and characters is clean and easy to follow.
- **Naming**: Good. Variable names (`counts`, `prevStrings`, `curr`, `num`) accurately reflect their purpose.

### Concrete Improvements
1. **Empty Check**: While standard competitive programming constraints usually guarantee well-formed inputs, adding a check or comment regarding the assumption of valid input (e.g., that `counts` and `prevStrings` are not popped when empty) is good practice.
2. **`isdigit` Safety**: `isdigit()` expects an `unsigned char` cast to prevent undefined behavior with negative `char` values. Use `isdigit(static_cast<unsigned char>(c))`.
3. **Const correctness**: The input string `s` could be passed as `const string&` to avoid unnecessary copies if the signature permitted (though the provided interface is fixed).

---

# Question Revision
### Revision Report: Decode String

**Pattern:** Stack (or Recursion)

**Brute Force:**
Recursively search for the innermost `[ ]` pair, decode it, replace the substring in the original string, and repeat until no brackets remain. This is inefficient due to repeated string scanning and modifications ($O(n^2)$ or worse).

**Optimal Approach:**
Use a **Stack** to track nested structures. Maintain two stacks: one for repeat counts (`int`) and one for the current built strings (`StringBuilder`). When encountering a digit, parse the full number; when encountering `[`, push the current state to the stacks; when encountering `]`, pop the state to append the repeated substring to the previous context.
*   **Time Complexity:** $O(n)$, where $n$ is the total length of the decoded string (we visit each character a constant number of times).
*   **Space Complexity:** $O(n)$ to store the stack frames and the output string.

**The 'Aha' Moment:**
The existence of nested brackets `[ ]` implies a Last-In, First-Out (LIFO) structure, which is the hallmark of stack-based processing.

**Summary:** 
Whenever you see nested structures like parentheses or brackets, treat the inner contents as a sub-problem that must be resolved before returning to the outer scope using a stack.

---