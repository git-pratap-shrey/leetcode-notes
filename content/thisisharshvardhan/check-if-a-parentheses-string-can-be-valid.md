---
title: "Check if a Parentheses String Can Be Valid"
slug: check-if-a-parentheses-string-can-be-valid
date: "2026-10-05"
---

# My Solution
~~~cpp
class Solution {
public:
    
    
    bool canBeValid(string s, string locked) {
        if(s.size()%2==1)return false;
        int n=s.size();
        int open=0;
        for(int i=0;i<n;i++){
            if(locked[i]=='0')open++;
            else if(s[i]=='(') open++;
            else open--;
            if(open<0) return false;
        }
        int close=0;
    for(int i=n-1;i>=0;i--){
            if(locked[i]=='0')close++;
            else if(s[i]==')') close++;
            else close--;
            if(close<0) return false;
        }
        return true;
           
        }
    };
    

~~~

# Submission Review
## Approach
- **Technique**: Two-pass Greedy (Balance Checking).
- **Optimality**: Optimal. The solution checks for validity from both ends to ensure that neither open nor closed parentheses are "unmatchable" given the flexible characters (`locked[i] == '0'`).

## Complexity
- **Time Complexity**: $O(n)$, where $n$ is the length of the string. The code performs two linear passes over the input.
- **Space Complexity**: $O(1)$, as it only uses a few integer variables regardless of input size.

## Efficiency Feedback
- **Runtime**: Highly efficient. It avoids complex data structures (like stacks) in favor of simple counters.
- **Memory**: Minimal memory footprint.
- **Optimization**: The `s.size() % 2 == 1` early exit is a correct and efficient optimization since a valid parentheses string must have an even length.

## Code Quality
- **Readability**: Moderate. The logic is clear, but the lack of consistent spacing and indentation makes it slightly harder to scan.
- **Structure**: Good. The logic is separated into two distinct phases (forward pass and backward pass).
- **Naming**: Moderate. `open` and `close` are descriptive, though `balance` might be more accurate as they represent the cumulative count of available brackets.
- **Concrete Improvements**:
    - Improve indentation for the second `for` loop.
    - Add spaces around operators (e.g., `if (s.size() % 2 == 1)`) for better readability.
    - Remove redundant empty lines at the top of the function.

---

# Question Revision
# Revision Report: Check if a Parentheses String Can Be Valid

### Pattern
**Two-Pass Greedy / Balance Tracking**

### Brute Force
Try every possible replacement for each `locked` character (where `unlocked` can be either `(` or `)`). Since there are $2^k$ combinations for $k$ unlocked characters, the complexity is exponential $O(2^n)$, which is infeasible for $n=10^5$.

### Optimal Approach
Perform two linear scans to ensure the string doesn't violate parentheses rules from either direction:
1. **Forward Pass:** Treat all unlocked characters as `(`. Ensure the count of closing brackets `)` never exceeds the total available opening brackets.
2. **Backward Pass:** Treat all unlocked characters as `)`. Ensure the count of opening brackets `(` never exceeds the total available closing brackets.
3. **Final Check:** The length of the string must be even.

**Complexity:**
- **Time:** $O(n)$ — Two linear traversals.
- **Space:** $O(1)$ — Only integer counters are used.

### The 'Aha' Moment
The presence of a "flexible" character (unlocked) suggests that as long as we have "credits" (unlocked slots), we can offset an imbalance, but the total count must still be valid from both ends.

### Summary
To handle flexible parentheses, verify that the closing count never exceeds the potential opening count (left-to-right) and vice versa (right-to-left).

---