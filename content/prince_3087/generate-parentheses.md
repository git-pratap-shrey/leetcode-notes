---
title: "Generate Parentheses"
slug: generate-parentheses
date: "2026-06-24"

---

# My Solution
~~~
class
 Solution {
public:
    void fun(int open , int close , string temp , vector<string>& ans , int n ){
        if(open ==n && close ==n){
            ans.push_back(temp);
            return;
        }
        if(open<n){
            temp.push_back('(');
            fun(open+1 , close , temp , ans , n);
            temp.pop_back();
        }
        if(close<open){
            temp.push_back(')');
            fun(open , close+1 , temp , ans , n);
            temp.pop_back();
        }
    }
    vector<string> generateParenthesis(int n) {
        vector<string> ans;
        fun( 0 , 0 , "" , ans , n );
        return ans;
        

        
    }
};
~~~

# Submission Review

## Approach

- **Technique**: Backtracking (Recursive Depth-First Search).
- **Optimality**: Optimal in terms of algorithmic logic. It explores only valid states by ensuring the number of closing parentheses never exceeds the number of opening ones.

## Complexity

- **Time Complexity**: $O(\frac{4^n}{\sqrt{n}})$ — The number of valid combinations is the $n$-th Catalan number, and each takes $O(n)$ to construct/copy.
- **Space Complexity**: $O(n)$ — The recursion depth is $2n$, and the `temp` string grows to length $2n$.

## Efficiency Feedback

- **Critical Inefficiency**: The `string temp` parameter is passed **by value**. This creates a new string copy at every recursive call, significantly increasing memory allocation and runtime.
- **Redundancy**: Because `temp` is passed by value, the `temp.pop_back()` calls are redundant; they modify a local copy that is discarded when the function returns.
- **Optimization**: Pass `temp` by reference (`string& temp`) to utilize the `push_back`/`pop_back` backtracking mechanism effectively.

## Code Quality

- **Readability**: Moderate. The logic is clear, but the naming is poor.
- **Structure**: Good. The separation of the helper function from the main interface is standard.
- **Naming**: Poor. `fun` is a non-descriptive name; `backtrack` or `generate` would be more appropriate.
- **Concrete Improvements**:
    1. Change `string temp` to `string& temp` in `fun`'s signature.
    2. Rename `fun` to something descriptive.
    3. Remove trailing whitespace and fix irregular indentation.

---

# Question Revision

#

## Generate Parentheses

**Pattern:** Backtracking

**Brute Force:** 
Generate all $2^{2n}$ possible permutations of $n$ open and $n$ closed parentheses, then iterate through each string to validate it using a stack or counter.

**Optimal Approach:** 
Use recursive backtracking to build the string incrementally, pruning invalid paths by enforcing two constraints:
1. **Add `(`**: Only if the count of open parentheses is less than $n$.
2. **Add `)`**: Only if the count of closed parentheses is less than the count of open parentheses.

- **Time Complexity:** $O(\frac{4^n}{\sqrt{n}})$ — proportional to the $n$-th Catalan number.
- **Space Complexity:** $O(n)$ — maximum depth of the recursion stack.

**The 'Aha' Moment:** 
The requirement to generate *all* combinations of a specific structure based on counting constraints signals a decision tree that can be pruned via backtracking.

**Summary:** 
Build the string recursively, adding `(` until $n$ is reached and `)` only when it maintains a valid balance.

---
