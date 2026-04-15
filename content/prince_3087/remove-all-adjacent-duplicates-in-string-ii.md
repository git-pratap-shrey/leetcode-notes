---
title: "Remove All Adjacent Duplicates in String II"
slug: remove-all-adjacent-duplicates-in-string-ii
date: "2026-04-15"
---

# My Solution
~~~cpp
class Solution {
public:
    string removeDuplicates(string s, int k) {
        int n = s.size();
        stack<pair<char,int>>st;
        for(int i=0;i<n;i++){
            if(!st.empty() && st.top().first==s[i]){
                st.top().second++;
                if(st.top().second == k){
                    st.pop();
                }
            }
           else{
            st.push({s[i],1});
            
           }
           
        }
        string res = "";
        while(!st.empty()){
            pair<char,int>p = st.top();
            st.pop();
            while(p.second--){
                res.push_back(p.first);
            }
           
        }
        reverse(res.begin(),res.end());
        return res;
        
    }
};
~~~

# Submission Review
## Approach
- **Technique**: Stack-based counting. The solution uses a stack of pairs `(character, current_count)` to track consecutive identical characters and remove them once the count reaches $k$.
- **Optimality**: Optimal. This approach ensures each character is processed a constant number of times, avoiding the $O(n^2)$ complexity of repeatedly scanning and erasing from a string.

## Complexity
- **Time Complexity**: $O(n)$, where $n$ is the length of the string. Each character is pushed and popped from the stack at most once.
- **Space Complexity**: $O(n)$ to store the stack and the final result string in the worst case (where no characters are removed).

## Efficiency Feedback
- **Runtime**: The logic is efficient. However, the final step involves popping from a stack into a string and then reversing the string, which adds a small constant overhead.
- **Optimization**: Instead of `std::stack<pair<char, int>>`, using a `std::vector<pair<char, int>>` would allow direct construction of the result string from the bottom of the stack, eliminating the need for `std::reverse`.

## Code Quality
- **Readability**: Good. The logic is clear and follows a standard pattern for this problem type.
- **Structure**: Good. The separation between the processing phase and the result construction phase is distinct.
- **Naming**: Moderate. Variable names like `st`, `p`, and `res` are common in competitive programming but are not descriptive.
- **Concrete Improvements**:
    - Replace `std::stack` with `std::vector` to avoid `std::reverse`.
    - Use `res.reserve(n)` to prevent multiple reallocations of the result string.
    - The `while(p.second--)` loop can be replaced by the `std::string` constructor: `res.append(p.second, p.first)`.

---

# Question Revision
### Remove All Adjacent Duplicates in String II

**Pattern:** Stack (Frequency Tracking)

**Brute Force:** 
Repeatedly scan the string for any sequence of $k$ identical characters, remove them using string slicing, and restart the scan from the beginning until no more sequences exist.
- **Time:** $O(n^2 / k)$
- **Space:** $O(n)$

**Optimal Approach:**
Use a stack to store pairs of `[character, count]`. As you iterate through the string:
1. If the current character matches the character at the top of the stack, increment its count.
2. If the count reaches $k$, pop that element from the stack.
3. If it doesn't match, push a new pair `[char, 1]` onto the stack.
4. Finally, reconstruct the string by multiplying the remaining characters by their respective counts.

- **Time:** $O(n)$
- **Space:** $O(n)$

**The 'Aha' Moment:** 
The requirement to re-evaluate the string after a removal indicates that a deletion can "bridge" two previously separated segments, which is the classic signal for a Stack.

**Summary:** 
Maintain a stack of `(char, count)` pairs and pop the entry immediately when the count reaches $k$.

---