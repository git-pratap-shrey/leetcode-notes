---
title: "Minimum Add to Make Parentheses Valid"
slug: minimum-add-to-make-parentheses-valid
date: "2026-10-06"
---

# My Solution
~~~cpp
class Solution {
public:
    int minAddToMakeValid(string s) {
        int n=s.size();
        stack<char>st;
        for(int i=0;i<n;i++){
            if(!st.empty() && st.top()=='(' && s[i]==')'){
                st.pop();
            }
            else st.push(s[i]);
        }
        return st.size();
    }
};
~~~

# Submission Review
## Approach
- **Technique:** Stack-based matching. The code pushes characters onto a stack and pops them whenever a matching pair `()` is formed.
- **Optimality:** Correct, but not memory-optimal. The logic correctly identifies unmatched parentheses, but a stack is unnecessary for this specific problem.

## Complexity
- **Time Complexity:** $O(n)$, where $n$ is the length of the string. The string is traversed once.
- **Space Complexity:** $O(n)$. In the worst case (e.g., all `(((` or all `)))`), the stack stores all $n$ characters.

## Efficiency Feedback
- **Memory Bottleneck:** Using `std::stack<char>` incurs overhead for dynamic memory allocation and stores characters explicitly.
- **Optimization:** This can be reduced to $O(1)$ space by using two integer counters: one for unmatched open parentheses and one for unmatched closing parentheses.

## Code Quality
- **Readability:** Good. The logic is straightforward and easy to follow.
- **Structure:** Good. The implementation is concise and correctly encapsulated within the class method.
- **Naming:** Moderate. `st` is a common shorthand for stack, but `s` and `n` are generic (though acceptable in competitive programming contexts).
- **Concrete Improvements:** 
    - Replace `std::stack` with two `int` variables to eliminate $O(n)$ space.
    - Use a range-based for loop (`for (char c : s)`) instead of index-based iteration for cleaner syntax.

---

# Question Revision
# Revision Report: Minimum Add to Make Parentheses Valid

- **Pattern**: Stack / Greedy Counter
- **Brute Force**: Generate all possible combinations of adding parentheses at every possible index and check each for validity using a stack. This leads to exponential time complexity.
- **Optimal Approach**: 
    - Maintain two counters: `open_needed` (to track unmatched `(`) and `closed_needed` (to track unmatched `)`).
    - Traverse the string:
        - If `(`, increment `open_needed`.
        - If `)`, check if there is an available `(` to pair with. If yes, decrement `open_needed`; if no, increment `closed_needed`.
    - The result is the sum of `open_needed + closed_needed`.
    - **Time Complexity**: $O(n)$
    - **Space Complexity**: $O(1)$
- **The 'Aha' Moment**: When I see "valid parentheses" and need to count "missing" pairs, I should track the balance of open brackets and count how many closing brackets appear without a partner.
- **Summary**: Track unmatched open and closed parentheses separately using counters to find the total additions required for balance.

---