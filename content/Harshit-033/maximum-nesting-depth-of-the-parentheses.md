---
title: "Maximum Nesting Depth of the Parentheses"
slug: maximum-nesting-depth-of-the-parentheses
date: "2026-04-08"

---
---

# My Solution
~~~c
int maxDepth(char* s) {
    int max=0;
    int len=strlen(s);
    int count=0;
    for(int i=0;i<len;i++){
        if(s[i]=='('){
            count++;
        }
        else if(s[i]==')'){
            count--;
        }
        else{
            continue;
        }

        max=(count>max)?count:max;
    }

    return max;
}
~~~

# Submission Review
## Approach
*   **Technique:** Greedy traversal using a counter to track the current nesting level.
*   **Optimality:** Optimal. It performs a single linear scan of the input string, which is necessary to determine the depth.

## Complexity
*   **Time Complexity:** $O(N)$, where $N$ is the length of the string, as it visits each character exactly once.
*   **Space Complexity:** $O(1)$, as it uses a fixed amount of auxiliary space regardless of input size.

## Efficiency Feedback
*   **Efficiency:** High. The solution is efficient as it avoids redundant operations.
*   **Optimization:** The `strlen(s)` function is called outside the loop, which is good. However, if the string is very long, `strlen` itself iterates through the string. If the input allows, consider processing the string character by character until the null terminator (`\0`) is reached to avoid the initial $O(N)$ pass of `strlen`.

## Code Quality
*   **Readability:** Good. The logic is straightforward and easy to follow.
*   **Structure:** Good. The logic is contained within a clean loop.
*   **Naming:** Moderate. `max` and `count` are descriptive enough, but `max` is also a common name for a standard library function (or macro), which can lead to conflicts or confusion. Using `max_depth` and `current_depth` would be more professional.
*   **Improvements:** 
    *   Avoid using `max` as a variable name to prevent shadowing or conflicts.
    *   Include `<string.h>` for `strlen`.
    *   The `else { continue; }` block is redundant and can be removed.
    *   **Refined Loop:**
        ```c
        int current_depth = 0;
        int max_depth = 0;
        for (int i = 0; s[i] != '\0'; i++) {
            if (s[i] == '(') {
                current_depth++;
                if (current_depth > max_depth) max_depth = current_depth;
            } else if (s[i] == ')') {
                current_depth--;
            }
        }
        return max_depth;
        ```

---
---


# Question Revision
### Revision Report: Maximum Nesting Depth of the Parentheses

**Pattern:** Stack / Greedy Counter

**Brute Force:** 
Use a stack to push `(` and pop on `)`. Track the maximum stack size reached during the iteration.
*   **Time:** $O(n)$
*   **Space:** $O(n)$

**Optimal Approach:** 
Since we only care about the depth, replace the stack with a simple integer counter. Increment when encountering `(` and decrement when encountering `)`. Track the global maximum value of the counter.
*   **Time:** $O(n)$
*   **Space:** $O(1)$

**The 'Aha' Moment:** 
The problem asks for depth rather than validity, signaling that we don't need to store the actual characters—only the running balance of open parentheses.

**Summary:** 
When tracking nesting depth, a simple counter is always more space-efficient than a stack because you only need to know the current level, not the history of the elements.

---
