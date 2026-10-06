---
title: "Minimum Add to Make Parentheses Valid"
slug: minimum-add-to-make-parentheses-valid
date: "2026-10-06"
---

# My Solution
~~~java
class Solution {
    public int minAddToMakeValid(String s) {
        int open = 0;
        int moves = 0;
        for(char c:s.toCharArray()){
            if(c=='('){
                open++;
            }
            else{
                if(open>0){
                    open--;
                }
                else{
                    moves++;
                }
            }
        }
        moves += open;
        return moves;
    }
}
~~~

# Submission Review
## Approach
- **Technique**: Greedy / Counter-based tracking.
- **Optimality**: Optimal. The solution tracks unmatched opening parentheses and counts required additions for unmatched closing parentheses in a single pass.

## Complexity
- **Time Complexity**: $O(n)$, where $n$ is the length of the string. Each character is visited once.
- **Space Complexity**: $O(n)$ in the current implementation due to `s.toCharArray()`, which creates a new character array.

## Efficiency Feedback
- **Memory Bottleneck**: Using `s.toCharArray()` allocates additional memory proportional to the input size. 
- **Optimization**: Use `s.charAt(i)` within a standard `for` loop to reduce space complexity to $O(1)$ auxiliary space.

## Code Quality
- **Readability**: Good. The logic is straightforward and easy to follow.
- **Structure**: Good. The flow is linear and appropriate for the problem.
- **Naming**: Moderate. `moves` is slightly ambiguous; `additions` or `mismatchedClosed` would more accurately describe what the variable tracks.
- **Improvements**: 
    - Replace `s.toCharArray()` with `s.charAt()` for better memory efficiency.
    - Consider renaming `moves` to `additions` to align with the problem's goal.

---

# Question Revision
# Revision Report: Minimum Add to Make Parentheses Valid

- **Pattern:** Stack / Greedy (Balance Tracking)
- **Brute Force:** Generate all possible combinations of adding parentheses at every possible index until the string becomes valid, then find the minimum length added. (Exponential complexity).
- **Optimal Approach:** 
    - Use two counters: `open_needed` (to track unmatched closing brackets) and `balance` (to track current open brackets).
    - Iterate through the string: 
        - If `(`, increment `balance`.
        - If `)`, decrement `balance`. If `balance` becomes negative, it means we have an unmatched `)`, so increment `open_needed` and reset `balance` to 0.
    - The final result is `open_needed + balance`.
    - **Complexity:** Time: $O(n)$ | Space: $O(1)$
- **The 'Aha' Moment:** The problem asks for the minimum additions to balance a linear sequence, which is a classic signal to track "net balance" or use a stack to pair elements.
- **Summary:** Track unmatched closing brackets immediately and add the remaining unmatched opening brackets at the end.

---