---
title: "Generate Parentheses"
slug: generate-parentheses
date: "2026-04-09"
---

# My Solution
~~~cpp
class Solution {
public:
    void set(vector<string>& ans,string &s,int n,int m){
        if(m+n==0){
            ans.push_back(s);
            return;
        }
        if(n>0){
            s.push_back('(');
            set(ans,s,n-1,m);
            s.pop_back();
        }
        if(m>0 && n<m ){
            s.push_back(')');
            set(ans,s,n,m-1);
            s.pop_back();
        }
    }
    vector<string> generateParenthesis(int n) {
        vector<string> ans;
        string s;
        set(ans,s,n,n);
        return ans;
    }
};
~~~

# Submission Review
## Approach
- **Technique**: Backtracking (Recursive exploration of a state space).
- **Optimality**: Optimal. It generates only valid combinations by maintaining counts of remaining open and closed parentheses, avoiding the need to generate all permutations and validate them.

## Complexity
- **Time Complexity**: $O(\frac{4^n}{\sqrt{n}})$ — proportional to the $n$-th Catalan number $C_n$, as each valid sequence is visited exactly once.
- **Space Complexity**: $O(n)$ — excluding the output list, the recursion depth and the string `s` both scale linearly with $n$.

## Efficiency Feedback
- **Memory/Runtime**: High efficiency due to passing the result vector and the current string by reference, preventing unnecessary object copies during recursion.
- **Optimization**: Using `s.push_back()` and `s.pop_back()` is the most efficient way to handle the backtracking string in C++.

## Code Quality
- **Readability**: Moderate. The logic is clear, but the function name `set` is highly ambiguous and conflicts with the naming convention of the C++ Standard Template Library (`std::set`).
- **Structure**: Good. The separation between the driver function and the recursive helper is standard.
- **Naming**: Poor.
    - `set`: Does not describe the action (suggested: `backtrack` or `generate`).
    - `n` and `m`: Vague (suggested: `openRemaining` and `closeRemaining`).
    - `s`: Generic (suggested: `current`).
- **Concrete Improvements**: Rename the helper function `set` to avoid confusion with `std::set` and use descriptive variable names to improve maintainability.

---

# Question Revision
### Generate Parentheses

**Pattern:** Backtracking

**Brute Force:** Generate all $2^{2n}$ possible combinations of parentheses and use a stack-based validator to filter out invalid sequences.

**Optimal Approach:** 
Use recursion to build the string incrementally. Maintain counts of `open` and `closed` parentheses used:
1. Add `(` if `open < n`.
2. Add `)` if `closed < open`.
3. Base case: when `string.length == 2 * n`, add the result to the list.

*   **Time Complexity:** $O(\frac{4^n}{\sqrt{n}})$ — bounded by the $n$-th Catalan number.
*   **Space Complexity:** $O(n)$ — maximum depth of the recursion stack.

**The 'Aha' Moment:** A string is only valid if, at any point during construction, the number of closing brackets never exceeds the number of opening brackets.

**Summary:** Build the string incrementally using backtracking, ensuring you only add a closing bracket when there is an unmatched opening bracket available.

---