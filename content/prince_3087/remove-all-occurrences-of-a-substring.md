---
title: "Remove All Occurrences of a Substring"
slug: remove-all-occurrences-of-a-substring

---
---

# My Solution
~~~cpp
class Solution {
public:
    string removeOccurrences(string s, string part) {
        while(s.find(part) != string::npos){
            s.erase(s.find(part), part.length());
        }
        return s;
    }
};
~~~

# Submission Review
## Approach
- **Technique:** Simulation using string search and erase.
- **Optimality:** Suboptimal. The algorithm repeatedly scans the string from the beginning and performs $O(N)$ string shifts for every removal, leading to redundant work.

## Complexity
- **Time Complexity:** $O(N \cdot M \cdot K)$, where $N$ is the length of `s`, $M$ is the length of `part`, and $K$ is the number of occurrences. In the worst case (e.g., `s = "aaaaa"`, `part = "aa"`), this approaches $O(N^2)$.
- **Space Complexity:** $O(1)$ additional space (modifying the input string in-place), though $O(N)$ if the underlying `std::string` reallocates.

## Efficiency Feedback
- **Bottleneck:** The `s.find()` and `s.erase()` methods both perform linear scans. Calling `s.find()` twice per iteration doubles the constant factor unnecessarily.
- **Optimization:** Use a `std::string` as a stack to simulate the process in $O(N)$ time. By pushing characters one by one and checking the end of the stack for the `part` suffix, you avoid rescanning the entire string. Alternatively, use KMP-based preprocessing to track match states.

## Code Quality
- **Readability:** Good; the logic is concise and easy to follow.
- **Structure:** Good; the logic is encapsulated correctly within the class method.
- **Naming:** Good; variable names `s` and `part` are clear in the context of the problem.
- **Improvements:** 
    - Cache the result of `s.find(part)` in a variable instead of calling it twice in the `while` loop.
    - Consider the stack-based approach for significantly better performance on large strings.

```cpp
// Optimization: Cache find result
while((size_t pos = s.find(part)) != string::npos){
    s.erase(pos, part.length());
}
```

---
---


# Question Revision
### Revision Report: Remove All Occurrences of a Substring

**Pattern:** Stack-based Simulation (or String Manipulation)

**Brute Force:**
Repeatedly use `string.replace()` or `indexOf()` to find and remove the target substring until it no longer exists.
*   **Time Complexity:** $O(n \cdot m)$ where $n$ is the string length and $m$ is the substring length.
*   **Space Complexity:** $O(n)$ for string creation.

**Optimal Approach:**
Use a **Stack** (or a `StringBuilder` acting as a stack) to build the result character by character. After pushing each character, check if the top $m$ elements of the stack match the target substring. If they do, pop them off.
*   **Time Complexity:** $O(n \cdot m)$—though $m$ is often treated as a small constant, the string comparison at each step is the bottleneck.
*   **Space Complexity:** $O(n)$ to store the result.

**The 'Aha' Moment:**
When a problem requires removing items that are dynamically created as a result of previous removals, a stack is the natural data structure to track the "current state" of the remaining string.

**Summary:**
Whenever an operation creates a new instance of the original pattern, use a stack to process the string in a single pass rather than re-scanning.

---
