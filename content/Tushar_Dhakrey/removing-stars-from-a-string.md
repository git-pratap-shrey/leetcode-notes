--- title: "Removing Stars From a String" slug: removing-stars-from-a-string date: "2026-06-29" ---  # My Solution ~~~class Solution {
    public String removeStars(String s) {
        Stack<Character> st = new Stack<>();
        for(char ch : s.toCharArray()){
            if(ch=='*'){
                if(!st.isEmpty()){
                    st.pop();
                }
            }
            else{
                st.push(ch);
            }
        }
        StringBuilder sb = new StringBuilder();
        for(char ch : st){
            sb.append(ch);
        }
        return sb.toString();
    }
} - java~~~  # Submission Review ## Approach
- **Technique**: Stack-based simulation.
- **Optimality**: Optimal in terms of asymptotic time and space complexity. It correctly processes the string in a single pass, removing the most recent character whenever a star is encountered.

## Complexity
- **Time Complexity**: $O(n)$, where $n$ is the length of the string. The code iterates through the input string once and then iterates through the stack once to build the final result.
- **Space Complexity**: $O(n)$ to store the characters in the `Stack` and the `StringBuilder`.

## Efficiency Feedback
- **Overhead**: `java.util.Stack` is synchronized (inherits from `Vector`), which introduces unnecessary locking overhead for single-threaded execution.
- **Memory Allocation**: `s.toCharArray()` creates a complete copy of the input string as a character array, increasing memory consumption.
- **Optimization**: The solution could be optimized by using a `StringBuilder` directly as a stack (using `append()` and `deleteCharAt(sb.length() - 1)`). This would eliminate the need for the `Stack` object and the final conversion loop.

## Code Quality
- **Readability**: Good. The logic is straightforward and easy to follow.
- **Structure**: Good. The flow is linear and logical.
- **Naming**: Moderate. Variable names like `st`, `ch`, and `sb` are common in competitive programming but are overly terse for production code.
- **Improvements**: 
    - Replace `Stack<Character>` with `ArrayDeque<Character>` or a `StringBuilder` for better performance.
    - Use `s.charAt(i)` in a for-loop instead of `s.toCharArray()` to save space.  ---  # Question Revision ### Removing Stars From a String

**Pattern:** Stack (LIFO)

**Brute Force:** 
Iteratively search for the first occurrence of `*`, remove it and the preceding character via string slicing, and repeat until no stars remain. 
**Complexity:** $O(n^2)$ due to repeated string reconstruction.

**Optimal Approach:** 
Traverse the string once. If the current character is not a `*`, append it to a list (acting as a stack). If it is a `*`, pop the last element from the list. Finally, join the list into a string.
- **Time Complexity:** $O(n)$
- **Space Complexity:** $O(n)$

**The 'Aha' Moment:** 
The requirement to remove the *closest* character to the left indicates a Last-In, First-Out (LIFO) dependency.

**Summary:** 
Use a stack to track characters and pop the top element every time a star is encountered.  ---