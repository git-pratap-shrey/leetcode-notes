---
title: "Generate Parentheses"
slug: generate-parentheses
date: "2026-10-02"
---

# My Solution
~~~java
class Solution {
    public List<String> generateParenthesis(int n) {
        List<String> ans = new ArrayList<>();
        backtrack(ans,n,0,0,"");
        return ans;
    }
    private void backtrack(List<String> ans,int n, int open ,int close , String curr){
        if(curr.length()==n*2){
            ans.add(curr);
            return;
        }
        if(open<n){
            backtrack(ans,n,open+1,close,curr+"(");
        }
        if(close<open){
            backtrack(ans,n,open,close+1,curr+")");
        }
    }
}
~~~

# Submission Review
## Approach
- **Technique**: Backtracking (Recursive exploration of the state space).
- **Optimality**: Optimal. It explores only valid combinations by maintaining constraints on the number of open and closed parentheses.

## Complexity
- **Time Complexity**: $O(\frac{4^n}{\sqrt{n}})$. This is the $n$-th Catalan number, which describes the number of valid parenthesis combinations.
- **Space Complexity**: $O(n)$. The recursion depth is $2n$, and the temporary string grows to $2n$. (Excluding the output list).

## Efficiency Feedback
- **String Concatenation**: The use of `curr + "("` creates a new `String` object at every recursive call. While acceptable for small $n$, using a `StringBuilder` would reduce memory allocation overhead and improve runtime.
- **Base Case**: The length check `curr.length() == n * 2` is correct and efficient.

## Code Quality
- **Readability**: Good. The logic is straightforward and follows standard backtracking patterns.
- **Structure**: Good. Logic is properly decoupled into a public wrapper and a private recursive helper.
- **Naming**: Moderate. `ans` and `curr` are common in competitive programming but `result` and `currentString` would be more professional. `open` and `close` are clear.
- **Concrete Improvements**:
    1. Replace `String curr` with `StringBuilder` to avoid repeated string allocations. If using `StringBuilder`, remember to backtrack by deleting the last character after the recursive call.
    2. Import missing classes (`java.util.*`) for the code to be compilable.

---

# Question Revision
# Revision Report: Generate Parentheses

- **Pattern:** Backtracking (Recursive State-Space Search)
- **Brute Force:** Generate all $2^{2n}$ possible sequences of open and closed parentheses and use a helper function to validate if each sequence is "well-formed."
- **Optimal Approach:** 
    - Use recursion to build the string character by character.
    - **Constraint 1:** You can add an opening parenthesis `(` if the count of open brackets is less than $n$.
    - **Constraint 2:** You can add a closing parenthesis `)` only if the count of closed brackets is less than the count of open brackets.
    - **Complexity:** 
        - **Time:** $O(\frac{4^n}{\sqrt{n}})$ — This is bounded by the $n$-th Catalan number.
        - **Space:** $O(n)$ — To store the recursion stack.
- **The 'Aha' Moment:** Whenever a problem asks to "generate all" combinations that must satisfy specific validity rules at every step, it is a signal for backtracking with pruning.
- **Summary:** Maintain counts of open and closed parentheses to build only valid strings recursively.

---