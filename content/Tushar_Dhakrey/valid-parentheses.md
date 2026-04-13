---
title: "Valid Parentheses"
slug: valid-parentheses
date: "2026-04-12"

---
---

# My Solution
~~~java
class Solution {
    public boolean isValid(String s) {
        Stack<Character> st = new Stack<>();
        for(char ch : s.toCharArray()){
            if(ch=='('||ch=='['||ch=='{'){
                st.push(ch);
            }else{
                if(st.isEmpty()) return false;
                char top = st.pop();

                if((ch=='}'&& top=='{') || (ch==']'&& top=='[') || (ch==')'&& top=='('))
                continue;
                else{
                    return false;
                }
            }
        }
        return st.isEmpty();

    }
}
~~~

# Submission Review
## Approach
*   **Technique:** Stack-based greedy approach.
*   **Optimality:** Optimal. It processes the string in a single pass, ensuring that every closing bracket matches the most recently opened one (LIFO property).

## Complexity
*   **Time Complexity:** $O(n)$, where $n$ is the length of the string, as each character is pushed and popped at most once.
*   **Space Complexity:** $O(n)$ in the worst case (e.g., a string of all opening brackets).

## Efficiency Feedback
*   **Data Structure:** The use of `java.util.Stack` is slightly inefficient because it is a legacy class that is synchronized. For competitive programming, `java.util.ArrayDeque` is preferred as it is faster and provides the same stack interface.
*   **Performance:** The runtime is dominated by character traversal and stack operations, which are already as efficient as possible.

## Code Quality
*   **Readability:** Good. The logic flow is straightforward and easy to follow.
*   **Structure:** Good. Early returns for invalid cases keep the code clean.
*   **Naming:** Good. `st` and `ch` are standard, readable shorthand.
*   **Concrete Improvements:**
    *   Replace `Stack<Character>` with `Deque<Character> stack = new ArrayDeque<>();` for better performance.
    *   To further improve speed and remove the nested `if` logic, you could push the *expected* closing character onto the stack when an opening character is encountered. This simplifies the mismatch check to a single `pop() != ch` comparison.
    *   The `else` block after the `if` contains a redundant `else` (the `return false` can be placed directly after the `if` logic).

---
---


# Question Revision
### Revision Report: Valid Parentheses

**Pattern:** Stack

**Brute Force:**
Iteratively replace all adjacent matching pairs (e.g., `"()"` or `"[]"`) with an empty string until no pairs remain. If the final string is empty, it is valid.
*   **Complexity:** $O(n^2)$ time, $O(n)$ space.

**Optimal Approach:**
Use a stack to track opening brackets. Iterate through the string: push opening brackets onto the stack; if a closing bracket appears, check if the top of the stack matches the corresponding type.
*   **Time Complexity:** $O(n)$ — single pass through the string.
*   **Space Complexity:** $O(n)$ — stack may grow to the size of the input in the worst case (e.g., `"((((("`).

**The 'Aha' Moment:**
The requirement to match the most recently opened bracket with the next closing bracket maps perfectly to the Last-In-First-Out (LIFO) property of a stack.

**Summary:**
Whenever you need to match nested components or track the "most recent" state, use a stack to process them in reverse order.

---
