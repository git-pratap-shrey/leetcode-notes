---
title: "Remove All Adjacent Duplicates In String"
slug: remove-all-adjacent-duplicates-in-string
date: "2026-10-21"
---

# My Solution
~~~cpp

class Solution {
public:
    string removeDuplicates(string s) {
        string st;
        for (char c: s) {
            if (!st.empty()&&st.back() ==c) {
                st.pop_back();
            } else {
                st.push_back(c);
            }
        }

        return st;
    }
};

~~~

# Submission Review
## Approach
- **Technique:** Stack-based simulation. The code uses a `std::string` as a stack to keep track of characters and remove pairs of adjacent duplicates.
- **Optimality:** Optimal. Each character is processed at most twice (one push, one pop), and no further reductions are possible without iterating through the string.

## Complexity
- **Time Complexity:** $O(n)$, where $n$ is the length of the string $s$. Each character is visited once.
- **Space Complexity:** $O(n)$ in the worst case (where no duplicates exist), to store the result.

## Efficiency Feedback
- **Runtime/Memory:** Low. Using `std::string` as the stack is more memory-efficient than using `std::stack<char>` because it avoids the overhead of an underlying container and allows returning the result directly without reconstructing the string.
- **Optimization:** No meaningful optimizations are required for this problem.

## Code Quality
- **Readability:** Good. The logic is straightforward and follows standard patterns for this problem.
- **Structure:** Good. The loop and conditional checks are clean.
- **Naming:** Moderate. `st` is used as a variable name; while it implies "stack" or "string," a name like `result` or `res` would be more descriptive of its purpose.
- **Improvements:**
    - Add a space between `!st.empty()` and `&&` for better PEP/Style Guide compliance.
    - Consider `s.reserve(s.size())` if $n$ is extremely large to avoid multiple reallocations of the result string.

---

# Question Revision
# Revision Report: Remove All Adjacent Duplicates In String

### Pattern
**Stack** (or Two Pointers simulating a stack)

### Brute Force
Iteratively scan the string from left to right. Whenever a pair of adjacent duplicates is found, delete them and restart the scan from the beginning of the string until no more duplicates exist.
- **Complexity:** $O(n^2)$ due to repeated scanning and string reconstructions.

### Optimal Approach
Use a **Stack** to track characters. Iterate through the string: if the current character matches the character at the top of the stack, pop the stack (cancel them out); otherwise, push the current character onto the stack. The remaining stack contents form the final string.
- **Time Complexity:** $O(n)$ — each character is pushed and popped at most once.
- **Space Complexity:** $O(n)$ — to store the resulting string/stack.

### The 'Aha' Moment
The requirement to "remove duplicates" that may **create new adjacent duplicates** after deletion is a classic signal for a Stack (Last-In, First-Out) behavior.

### Summary
Use a stack to cancel out pairs in a single pass, treating the process like a "matching" game.

---