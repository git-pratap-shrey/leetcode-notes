---
title: "Generate Parentheses"
slug: generate-parentheses
date: "2026-10-05"
---

# My Solution
~~~cpp
class Solution {
public:
vector<string> ans;

   void solve(string s,int o,int c,int n){
    if(s.size()==n*2){
        ans.push_back(s);
        return;
    }
     if(o<n){
        solve(s+'(',o+1,c,n);
     }
     if(c<o){
        solve(s+')',o,c+1,n);
     }
   }
    vector<string> generateParenthesis(int n) {
        solve("",0,0,n);
        return ans;
    }
};
~~~

# Submission Review
## Approach
- **Technique:** Backtracking (Recursive DFS).
- **Optimality:** Optimal. The problem requires generating all valid combinations, and this approach visits only valid states by enforcing the constraints $o < n$ and $c < o$.

## Complexity
- **Time Complexity:** $O(\frac{4^n}{\sqrt{n}})$. This corresponds to the $n$-th Catalan number, which describes the number of valid parentheses combinations.
- **Space Complexity:** $O(n)$. Excluding the output list, the recursion stack depth is $2n$.

## Efficiency Feedback
- **Bottleneck:** The current implementation uses string concatenation (`s + '('`), which creates a new string object at every recursive call.
- **Optimization:** Use a `string` passed by reference and `push_back()`/`pop_back()` to mutate a single buffer. This reduces memory allocations and improves runtime.

## Code Quality
- **Readability:** Moderate. The logic is clear, but the lack of spacing and consistent indentation makes it feel cramped.
- **Structure:** Moderate. Using a global/member variable `ans` is common in competitive programming but less ideal for reusability/thread-safety.
- **Naming:** Poor. Variable names `s`, `o`, `c`, and `ans` are overly terse. `open_count`, `close_count`, and `result` would be more descriptive.

**Concrete Improvements:**
1. Pass `ans` as a reference to the `solve` function instead of using a class member.
2. Replace string concatenation with `s.push_back()` and `s.pop_back()` to avoid $O(N)$ string copying per call.
3. Apply standard indentation and spacing for better maintainability.

---

# Question Revision
# Revision Report: Generate Parentheses

- **Pattern**: Backtracking (Recursive State-Space Search)
- **Brute Force**: Generate all $2^{2n}$ possible strings of length $2n$ consisting of `(` and `)`, then validate each one using a stack or counter to check for balance.
- **Optimal Approach**: 
    - Use recursion to build the string incrementally.
    - Maintain two counters: `open` (count of `(` used) and `close` (count of `)` used).
    - **Rule 1**: You can add a `(` if `open < n`.
    - **Rule 2**: You can add a `)` if `close < open` (ensures the string remains valid).
    - **Complexity**: 
        - **Time**: $O(\frac{4^n}{\sqrt{n}})$ — Specifically, the $n$-th Catalan number $C_n$, which describes the number of valid combinations.
        - **Space**: $O(n)$ — The maximum depth of the recursion stack.
- **The 'Aha' Moment**: The requirement to generate "all possible" valid combinations indicates a search space that can be pruned by maintaining a balance constraint.
- **Summary**: Use backtracking with two counters to ensure `open < n` and `close < open` at every step.

---