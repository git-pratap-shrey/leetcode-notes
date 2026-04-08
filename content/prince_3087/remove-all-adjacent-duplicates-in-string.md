---
title: "Remove All Adjacent Duplicates In String"
slug: remove-all-adjacent-duplicates-in-string
date: "2026-04-07"

---
---

# My Solution
~~~cpp
class Solution {
public:
    string removeDuplicates(string s) {
        
        stack<char>st;
        string res;
        for(int i=0;i<s.size();i++){
            if(st.empty()){
                st.push(s[i]);
                continue;
            }
            if(st.top()==s[i]){
                st.pop();
                continue;
            }
            st.push(s[i]);
        }
        while(!st.empty()){
            res.push_back(st.top());
            st.pop();
        }
        reverse(res.begin(),res.end());
        return res;
    }
};
~~~

# Submission Review
## Approach
*   **Technique:** Stack-based greedy approach.
*   **Optimality:** Optimal in terms of logic, but implementation can be improved. Using a `std::string` as a stack (via `push_back` and `pop_back`) is more idiomatic and efficient than using `std::stack<char>` and reversing the result.

## Complexity
*   **Time Complexity:** $O(N)$, where $N$ is the length of the string. We iterate through the string once and perform stack operations.
*   **Space Complexity:** $O(N)$ for the stack storage.

## Efficiency Feedback
*   **Bottleneck:** The current implementation incurs an extra pass due to the `while` loop to empty the stack into a string, followed by a `reverse` operation.
*   **Optimization:** Using `std::string` directly as a stack eliminates the need for the `std::stack` container and the final reversal:
    ```cpp
    string res;
    for (char c : s) {
        if (!res.empty() && res.back() == c) res.pop_back();
        else res.push_back(c);
    }
    return res;
    ```
    This reduces the overhead of memory allocations and secondary container management.

## Code Quality
*   **Readability:** Good. The logic is easy to follow.
*   **Structure:** Moderate. The use of `continue` statements is functional but makes the flow slightly jumpy compared to a simple `if-else` structure.
*   **Naming:** Good. `st` and `res` are standard conventions for this type of problem.
*   **Improvements:**
    *   Avoid the `std::stack` if you are targeting C++ string manipulation; `std::string` provides `back()` and `pop_back()` which function identically to stack operations.
    *   Use range-based `for` loops (`for (char c : s)`) to improve readability and prevent index-out-of-bounds risks.

---
---


# Question Revision
### Revision Report: Remove All Adjacent Duplicates In String

**Pattern:** Stack

**Brute Force:**
Repeatedly scan the string for any adjacent duplicate pair (`str[i] == str[i+1]`), remove them, and restart the search from the beginning. 
*   **Time Complexity:** $O(n^2)$ (due to repeated shifting of elements).
*   **Space Complexity:** $O(n)$ (creating new strings or modifying in-place).

**Optimal Approach:**
Use a stack to keep track of processed characters. Iterate through the string: if the current character matches the stack's top, pop the stack (a duplicate pair is found); otherwise, push the current character onto the stack. Finally, join the stack elements to form the result.
*   **Time Complexity:** $O(n)$ (each character is pushed and popped at most once).
*   **Space Complexity:** $O(n)$ (to store the stack).

**The 'Aha' Moment:**
When the problem involves processing elements where the "most recently added" item dictates the next possible match or cancellation, a Stack is the natural data structure to maintain state.

**Summary:** 
Treat the sequence like a game of matching pairs where the latest arrival must be compared against the previous survivor.

---
