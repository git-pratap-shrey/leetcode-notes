---
title: "Make The String Great"
slug: make-the-string-great
date: "2026-04-15"
---

# My Solution
~~~cpp
class Solution {
public:
    string makeGood(string s) {
        stack<char>st;
        for(int i=0;i<s.size();i++){
           if(st.empty()){
            st.push(s[i]);
            continue;
           }
           if(!st.empty() && abs(st.top()-s[i])==32){
            st.pop();
            continue;
           }
           else{
            st.push(s[i]);
           }
        


        }
        string res = "";
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
- **Technique**: Stack-based simulation. It uses a stack to keep track of characters and removes pairs that satisfy the "bad" condition (same letter, different case) in a single pass.
- **Optimality**: Optimal. Each character is pushed and popped at most once.

## Complexity
- **Time Complexity**: $O(n)$, where $n$ is the length of the string. The algorithm performs one linear scan of the input and one linear scan to reconstruct the result.
- **Space Complexity**: $O(n)$ to store the stack and the final result string.

## Efficiency Feedback
- **Redundancy**: The check `if(!st.empty())` inside the loop is redundant because the preceding `if(st.empty())` block uses `continue`, ensuring the stack is never empty when it reaches the second condition.
- **Allocation**: Using `std::stack<char>` followed by `std::reverse` is slightly less efficient than using a `std::string` as a stack. A `std::string` allows using `push_back()` and `pop_back()`, eliminating the need for a separate stack object and the final reversal step.

## Code Quality
- **Readability**: Moderate. The logic is clear, but indentation is inconsistent (especially inside the loop).
- **Structure**: Moderate. The logic is straightforward, though the `continue` statements make the flow slightly jumpy.
- **Naming**: Good. `st` and `res` are standard abbreviations for stack and result.
- **Concrete Improvements**:
    1. Use `std::string` instead of `std::stack<char>` to avoid the `reverse()` call.
    2. Fix indentation for better maintainability.
    3. Remove the redundant `!st.empty()` check.
    4. Use `const string& s` in the function signature (though not applicable here as it's a LeetCode-style signature) to avoid unnecessary copying.

---

# Question Revision
### Make The String Great

**Pattern:** Stack

**Brute Force:** 
Repeatedly scan the string and remove the first encountered adjacent case-opposite pair using string slicing. Repeat this process until no such pairs remain.
- **Complexity:** $O(n^2)$

**Optimal Approach:**
Iterate through the string and maintain a stack of characters. For each character, check if the stack is non-empty and if the current character and the stack's top are the same letter but have opposite casing (e.g., `abs(char1 - char2) == 32` in ASCII). If they match, pop the stack; otherwise, push the current character.
- **Time Complexity:** $O(n)$
- **Space Complexity:** $O(n)$

**The 'Aha' Moment:** 
The fact that removing a pair can make two previously separated characters adjacent indicates a LIFO (Last-In, First-Out) dependency.

**Summary:** 
Use a stack to cancel out adjacent case-opposite pairs in a single pass.

---