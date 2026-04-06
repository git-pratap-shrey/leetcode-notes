---
title: "Decode Ways"
slug: decode-ways
date: "2026-03-31"

---
---

# My Solution
~~~cpp
class Solution {
public:
    int numDecodings(string s) {
        int prev2 = 1;
        int prev1 = 1;

        if(s[s.size() - 1] == '0'){prev1 = 0;}

        int current = prev1;

        for(int i = s.size() - 2; i >= 0; i--){
            // cout<<s[i]<<" ";
            if(s[i] == '0'){current = 0;}
            else{
                current = prev1;
                if((s[i]-'0') * 10 + (s[i+1]-'0') <= 26){
                    current += prev2;
                }
            }
            // cout<<current<<endl;

            prev2 = prev1;
            prev1 = current;
        } 

        return prev1;
    }
};
~~~

# Submission Review
## Approach
- **Technique:** Dynamic Programming (iterative, space-optimized).
- **Optimality:** Optimal. It uses $O(1)$ auxiliary space and a single $O(N)$ pass, which is the theoretical lower bound for this problem.

## Complexity
- **Time Complexity:** $O(N)$, where $N$ is the length of the string, as it performs a single right-to-left traversal.
- **Space Complexity:** $O(1)$, as it only stores two integer variables to track state.

## Efficiency Feedback
- **Runtime:** Highly efficient; avoids recursion depth issues and unnecessary memory allocations.
- **Memory:** Excellent; minimal stack/heap footprint.
- **Specific Optimization:** The logic handles the '0' edge case correctly by resetting the accumulator, preventing invalid paths (e.g., "30", "00").

## Code Quality
- **Readability:** Good. The logic is straightforward to follow.
- **Structure:** Good. Using `prev1` and `prev2` is standard practice for space-optimized DP.
- **Naming:** Moderate. `prev1` and `prev2` are functional but slightly ambiguous regarding their relationship to indices `i+1` and `i+2`. Renaming them to `next` and `nextNext` (or similar) might improve clarity.
- **Concrete Improvements:**
    - **Edge Case:** The solution assumes `s.size() > 0`. If an empty string is passed, `s.size() - 1` will underflow the `size_t` (unsigned), leading to undefined behavior. Add a guard clause: `if (s.empty()) return 0;`.
    - **Safety:** Accessing `s[i+1]` is safe because the loop only runs if `s.size() >= 2` (or logic implicitly handles the base case), but an explicit check for empty strings would make the code robust.
    - **Clarity:** The condition `(s[i]-'0') * 10 + (s[i+1]-'0') <= 26` is correct, but can be written more cleanly as `stoi(s.substr(i, 2)) <= 26` (though `substr` introduces a minor overhead) or simply `s.substr(i, 2) <= "26"`. Given the current performance, your arithmetic approach is faster.

---
---


# Question Revision
### Revision Report: Decode Ways

**Pattern:** Dynamic Programming (Memoization or Tabulation)

**Brute Force:**
Recursively explore all possible character groupings by picking 1-digit or 2-digit substrings and validating if they fall within the 'A'-'Z' (1-26) range. This results in $O(2^n)$ complexity due to overlapping subproblems.

**Optimal Approach:**
Build an array `dp` where `dp[i]` represents the number of ways to decode the prefix of length `i`. 
- If `s[i-1]` is valid (1-9), add `dp[i-1]`.
- If `s[i-2...i-1]` forms a valid number (10-26), add `dp[i-2]`.
- **Complexity:** Time $O(n)$, Space $O(n)$ (can be optimized to $O(1)$ by storing only the last two results).

**The 'Aha' Moment:**
When a problem asks for the *total number of ways* to partition a sequence where each decision (1-digit vs 2-digits) depends only on the immediate previous state, it is a classic indicator that you are dealing with a climbing-stairs variant disguised as a string problem.

**Summary:**
Whenever you face a decoding problem with branching choices, treat it as a constrained path-counting problem where the valid "jumps" are defined by the alphabet's numeric range.

---
