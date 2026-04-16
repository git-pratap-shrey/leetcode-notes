---
title: "Remove K Digits"
slug: remove-k-digits
date: "2026-04-16"
---

# My Solution
~~~java
class Solution {
    public String removeKdigits(String num, int k) {
        Stack<Character> st = new Stack<>();
        for(int i=0;i<num.length();i++){
            char digit = num.charAt(i);
            while(!st.isEmpty() && k>0 && st.peek()>digit){
                st.pop();
                k--;
            }
            st.push(digit);
        }
        while(k>0){
            st.pop();
            k--;
        }
        if(st.isEmpty()) return "0";
        StringBuilder res = new StringBuilder();
        while(!st.isEmpty()){
            res.append(st.pop());
        }
        while(res.length()>0 && res.charAt(res.length()-1)=='0'){
            res.deleteCharAt(res.length()-1);
        } 
        res.reverse();
        if(res.isEmpty()) return "0";
        return res.toString();
    }
}
~~~

# Submission Review
## Approach
- **Technique**: Monotonic Stack.
- **Optimality**: Optimal. The greedy approach of removing the first digit that is larger than its successor ensures the smallest lexicographical result.

## Complexity
- **Time Complexity**: $O(N)$, where $N$ is the length of the input string. Each character is pushed and popped from the stack at most once.
- **Space Complexity**: $O(N)$ to store the digits in the stack and the final `StringBuilder`.

## Efficiency Feedback
- **Stack Implementation**: `java.util.Stack` is synchronized and generally slower. Using `ArrayDeque` or using the `StringBuilder` itself as a stack would be more performant.
- **String Construction**: The current process involves popping from the stack into a `StringBuilder`, deleting trailing zeros, and then reversing. This is efficient, though using a `Deque` or a `char[]` array would allow for a direct left-to-right build.

## Code Quality
- **Readability**: Good. The logic follows the standard monotonic stack pattern and is easy to trace.
- **Structure**: Good. The edge cases (remaining $k > 0$, leading zeros, and empty result) are handled sequentially.
- **Naming**: Moderate. `st` and `res` are acceptable for competitive programming but should be `stack` and `result` in a production environment.
- **Concrete Improvements**:
    - Replace `Stack<Character>` with `Deque<Character> stack = new ArrayDeque<>()` to avoid synchronization overhead.
    - Use a `StringBuilder` directly as a stack (using `append` and `deleteCharAt(len - 1)`) to eliminate the need for the final `reverse()` call.

---

# Question Revision
### Remove K Digits

**Pattern:** Monotonic Stack

**Brute Force:** Generate all possible combinations of removing $k$ digits, convert each result to an integer, and return the minimum.

**Optimal Approach:**
- Use a stack to maintain digits in non-decreasing order.
- Iterate through the string: while the current digit is smaller than the stack's top and $k > 0$, pop the stack and decrement $k$.
- Push the current digit onto the stack.
- If $k > 0$ remains after the loop, pop from the end of the stack.
- Construct the string from the stack, stripping leading zeros.
- **Time Complexity:** $O(n)$
- **Space Complexity:** $O(n)$

**The 'Aha' Moment:** To minimize a number, you must remove the leftmost digit that is larger than its immediate successor (the first "peak").

**Summary:** Use a monotonic increasing stack to greedily discard peaks from left to right to ensure the smallest digits occupy the highest place values.

---