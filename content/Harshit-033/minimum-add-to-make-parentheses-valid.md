---
title: "Minimum Add to Make Parentheses Valid"
slug: minimum-add-to-make-parentheses-valid
date: "2026-04-14"
---

# My Solution
~~~cpp
class Solution {
public:

    

    int minAddToMakeValid(string s) {

        int count=0;
        int counts=0;

        for(int i=0;i<s.size();i++){
            if(s[i]=='('){
                count++;
            }
            else{
                if(count==0){
                    counts++;
                }
                else{
                    count--;
                }
            }
        }

        return abs(count)+abs(counts);
        
    }
};
~~~

# Submission Review
## Approach
- **Technique**: Greedy approach using two counters to track unmatched opening and closing parentheses.
- **Optimality**: Optimal. It solves the problem in a single pass with minimal space.

## Complexity
- **Time Complexity**: $O(n)$, where $n$ is the length of the string.
- **Space Complexity**: $O(1)$, as it only uses two integer variables regardless of input size.

## Efficiency Feedback
- The solution is highly efficient in both time and memory.
- **Minor Optimization**: The `abs()` calls in the return statement are redundant because `count` and `counts` can never be negative based on the logic.

## Code Quality
- **Readability**: Moderate. The logic is simple, but the variable names are ambiguous.
- **Structure**: Good. The loop is clean and straightforward.
- **Naming**: Poor. `count` and `counts` are too similar and do not describe their purpose. Better names would be `openNeeded` and `closeNeeded` (or `balance` and `unmatchedClose`).
- **Improvements**:
    - Rename `count` $\rightarrow$ `openUnmatched`.
    - Rename `counts` $\rightarrow$ `closeUnmatched`.
    - Remove `abs()` from the return statement.
    - Use `const auto& c : s` (range-based for loop) for cleaner syntax.

---

# Question Revision
### Minimum Add to Make Parentheses Valid

**Pattern:** Greedy / Stack (Simplified to Counters)

**Brute Force:** 
Recursively attempt to insert `(` or `)` at every possible index and check for validity, leading to exponential time complexity $O(2^n)$.

**Optimal Approach:** 
Maintain two counters: `open_needed` (balance of unmatched `(`) and `additions` (count of `)` that have no preceding `(`). 
1. Iterate through the string:
   - If `(`, increment `open_needed`.
   - If `)`, and `open_needed > 0`, decrement `open_needed` (pair found).
   - If `)`, and `open_needed == 0`, increment `additions` (missing an opening bracket).
2. Total result is `additions + open_needed`.

- **Time Complexity:** $O(n)$
- **Space Complexity:** $O(1)$

**The 'Aha' Moment:** 
The minimum number of insertions is simply the sum of all unmatched closing parentheses and all remaining unmatched opening parentheses.

**Summary:** 
Track the net balance of parentheses and count how many times the balance drops below zero.

---