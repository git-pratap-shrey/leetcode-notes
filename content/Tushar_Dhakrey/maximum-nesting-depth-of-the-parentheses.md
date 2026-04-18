---
title: "Maximum Nesting Depth of the Parentheses"
slug: maximum-nesting-depth-of-the-parentheses
date: "2026-04-18"
---

# My Solution
~~~java
class Solution {
    public int maxDepth(String s) {
        int count=0;
        int max = 0;
        for(char ch: s.toCharArray()){
            if(ch=='('){
                count++;
                max = Math.max(max,count);
            }
            else if(ch==')'){
                count--;
            }
        }
        return max;
    }
}
~~~

# Submission Review
## Approach
- **Technique**: Single-pass linear scan using a counter to track current nesting depth.
- **Optimality**: Optimal. The problem requires inspecting each character at least once, making $O(N)$ the theoretical lower bound.

## Complexity
- **Time Complexity**: $O(N)$, where $N$ is the length of the string.
- **Space Complexity**: $O(N)$. The use of `s.toCharArray()` allocates a new character array of size $N$.

## Efficiency Feedback
- **Memory Bottleneck**: The space complexity is $O(N)$ due to `s.toCharArray()`. This can be reduced to $O(1)$ by using `s.charAt(i)` within a standard `for` loop to avoid duplicating the string in memory.

## Code Quality
- **Readability**: Good. The logic is straightforward and easy to follow.
- **Structure**: Good. The method is concise and handles the task in a single block.
- **Naming**: Moderate. While `count` and `max` are understandable in this context, more descriptive names like `currentDepth` and `maxDepth` would improve clarity.
- **Improvements**:
    - Replace `s.toCharArray()` with `s.charAt(i)` to optimize space.
    - Rename variables for better semantic meaning.

---

# Question Revision
### Maximum Nesting Depth of the Parentheses

**Pattern:** Counting / Stack Simulation

**Brute Force:** Use an actual `Stack` to push `(` and pop on `)`, recording the maximum size the stack reaches during the process.

**Optimal Approach:** Use a single integer counter to track the current depth. Increment for every `(` and decrement for every `)`. Store the maximum value the counter reaches.
- **Time Complexity:** $O(n)$
- **Space Complexity:** $O(1)$

**The 'Aha' Moment:** Because there is only one type of bracket and no requirement to track indices, a counter is a mathematically equivalent, space-efficient replacement for a stack.

**Summary:** Track current nesting depth with a counter and capture its peak value.

---