---
title: "Remove All Adjacent Duplicates In String"
slug: remove-all-adjacent-duplicates-in-string
date: "2026-10-19"
---

# My Solution
~~~java
class Solution {
    public String removeDuplicates(String s) {
        int n = s.length();
        Stack<Character> st = new Stack<>();
        for(int i=n-1;i>=0;i--){
            char ch = s.charAt(i);
            if(!st.isEmpty() && st.peek()==ch){
                st.pop();
            }
            else{
                st.push(ch);
            }
        }
        StringBuilder ans = new StringBuilder();
        while(!st.isEmpty()){
            ans.append(st.pop());
        }
        return ans.toString();
    }
}
~~~

# Submission Review
## Approach
- **Technique**: Stack-based simulation.
- **Optimality**: Optimal in terms of asymptotic complexity. It processes the string in a single pass and uses a stack to track unmatched characters.

## Complexity
- **Time Complexity**: $O(n)$, where $n$ is the length of the string. Each character is pushed and popped at most once.
- **Space Complexity**: $O(n)$ to store the stack and the final string builder.

## Efficiency Feedback
- **Runtime**: The logic is efficient, but using `java.util.Stack` is slightly slower than using `Deque` (e.g., `ArrayDeque`) because `Stack` is synchronized.
- **Memory**: The solution iterates from the end of the string (`n-1` down to `0`) to avoid reversing the final result, which is a clever way to maintain the correct order when popping from the stack.
- **Optimization**: To further reduce overhead, a `char[]` array could be used as a manual stack to avoid object wrapping of `Character`.

## Code Quality
- **Readability**: Good. The logic is straightforward and easy to follow.
- **Structure**: Good. The separation between the processing loop and the result construction is clear.
- **Naming**: Good. Variable names like `st`, `ch`, and `ans` are standard for competitive programming, though `st` could be `stack` for better clarity.
- **Improvements**: 
    - Replace `Stack<Character>` with `ArrayDeque<Character>` for better performance.
    - Consider using a two-pointer approach on a `char[]` to achieve $O(1)$ additional space (excluding the output string).

---

# Question Revision
# Revision Report: Remove All Adjacent Duplicates In String

### Pattern
**Stack** (LIFO)

### Brute Force
Iterate through the string and search for any two identical adjacent characters. If found, delete them using string slicing and restart the scan from the beginning of the string.
- **Complexity:** $O(n^2)$ due to repeated scans and string reconstructions.

### Optimal Approach
Use a stack to keep track of the characters processed. For each character in the string:
1. If the stack is not empty and the top element matches the current character, **pop** the stack (annihilate the pair).
2. Otherwise, **push** the current character onto the stack.
3. Convert the final stack back into a string.

- **Time Complexity:** $O(n)$ — Each character is pushed and popped at most once.
- **Space Complexity:** $O(n)$ — In the worst case (no duplicates), the stack stores the entire string.

### The 'Aha' Moment
The requirement to remove duplicates *recursively* (where removing one pair creates a new adjacent pair) signals a need for a Stack to "remember" the previous character.

### Summary
Use a stack to match and eliminate pairs in a single pass, treating the stack top as the "active" boundary.

---