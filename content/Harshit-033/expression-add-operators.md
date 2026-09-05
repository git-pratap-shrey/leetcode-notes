---
title: "Expression Add Operators"
slug: expression-add-operators
date: "2026-08-25"
---

# My Solution
~~~cpp
class Solution {
public:
    vector<string> ans;
    string temp;
    void calc(string num, int target, string temp, long long val,long long prev,int ind){
        if(ind==num.size()){
            if(val==target){
            ans.push_back(temp);
            
        }
        return;

        }
        long long curr=0;
        string s="";

        
        for(int i=ind;i<num.size();i++){
            if(i>ind && num[ind]=='0'){
                break;
            }
            curr=curr*10+(num[i]-'0');
            s+=num[i];
            if(ind==0){
                calc(num,target,s,curr,curr,i+1);
            }
            else{
                calc(num,target,temp+"+"+s,val+curr,curr,i+1);
                calc(num,target,temp+"-"+s,val-curr,-curr,i+1);
                calc(num, target, temp+"*"+s,val-prev+prev*curr,prev*curr,i+1);
            }

        }
    }
    vector<string> addOperators(string num, int target) {
        calc(num,target,"",0,0,0);
        return ans;
        

    }
};
~~~

# Submission Review
## Approach
*   **Technique:** Backtracking (Recursive DFS).
*   **Optimality:** Optimal. The algorithm correctly handles operator precedence (specifically multiplication) by tracking the `prev` operand, which is the standard approach for this problem.

## Complexity
*   **Time Complexity:** $O(4^N)$, where $N$ is the length of the string `num`. At each position, we have 4 choices (addition, subtraction, multiplication, or continuing the current number).
*   **Space Complexity:** $O(N)$ due to the recursion stack depth.

## Efficiency Feedback
*   **Runtime:** High string concatenation overhead. `temp + "+" + s` creates multiple temporary string objects at each recursive step. 
*   **Optimization:** Pass a `std::string` by reference or use a `std::string` buffer (using `push_back`/`pop_back` or `substr` manipulation) to avoid frequent allocations.
*   **Optimization:** The `long long` logic for `val` and `prev` is correct and necessary to prevent overflow during calculations.

## Code Quality
*   **Readability:** Moderate. The recursion logic is standard, but string concatenations clutter the recursive calls.
*   **Structure:** Moderate. The logic is encapsulated well in the `calc` method, but global variables (`ans`) should ideally be passed by reference or maintained as local helper function arguments to improve thread safety and clean design.
*   **Naming:** Moderate. `calc`, `s`, `ind`, and `val` are somewhat cryptic. More descriptive names like `backtrack`, `currentPath`, `index`, and `currentResult` would improve clarity.
*   **Concrete Improvements:**
    1.  **Avoid String Concatenation:** Pass the running expression as a mutable reference and use `push_back`/`pop_back` (or `resize`) to manage the string state during backtracking.
    2.  **Move `ans` inside `addOperators`:** Pass `ans` by reference to `calc` to avoid reliance on member variables.
    3.  **Input Validation:** The current code implicitly handles `num` length, but ensure it handles empty string constraints if required by the problem environment.

---

# Question Revision
### Revision Report: Expression Add Operators

**Pattern:** Backtracking / Depth-First Search (DFS)

**Brute Force:**
Iterate through all possible placements of the three operators (`+`, `-`, `*`) and the "no-op" (concatenation) between every digit. For a string of length $n$, this results in $O(4^n)$ complexity, exploring every branch of the expression tree.

**Optimal Approach:**
Use DFS to build the expression digit by digit. To handle the precedence of multiplication ($*$) without using an explicit stack or recursion-heavy parsing, carry two values: the `current_eval` (result so far) and the `last_operand` (the value added/subtracted in the previous step). If the operator is `*`, subtract the `last_operand` from `current_eval` and add `(last_operand * current_val)` to correct the math.

*   **Time Complexity:** $O(4^n)$ (This is the theoretical bound as we must explore all operator combinations).
*   **Space Complexity:** $O(n)$ (Recursion stack depth).

**The 'Aha' Moment:**
When an expression requires operator precedence (specifically multiplication before addition), tracking the "previous operand" allows you to "undo" the last arithmetic operation to apply the higher-precedence operator retroactively in constant time.

**Summary:**
Treat multiplication as a rollback operation on the previous term to maintain the running total without re-evaluating the entire string.

---