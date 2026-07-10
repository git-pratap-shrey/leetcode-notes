---
title: "Is Subsequence"
slug: is-subsequence
date: "2026-06-10"

---

# My Solution
~~~
class
 Solution {
public:
    bool isSubsequence(string s, string t) {
        int i = 0;
        int j = 0;

        for(int i = 0; i < s.size(); i++){
            if(j >= t.size()){
                return false;
            }
            while(s[i] != t[j]){
                if(j >= t.size()){
                    return false;
                }
                j++;
            }
            j++;
        }

        return true;
    }
};
~~~

# Submission Review

## Approach

- **Technique**: Two-pointer approach.
- **Optimality**: Optimal. It traverses both strings at most once.

## Complexity

- **Time Complexity**: $O(T)$, where $T$ is the length of string `t`.
- **Space Complexity**: $O(1)$.

## Efficiency Feedback

- **Runtime**: The logic is efficient, but the implementation contains a critical bug regarding bounds checking.
- **Critical Bug**: In the `while(s[i] != t[j])` loop, the code accesses `t[j]` **before** checking if `j >= t.size()`. If `j` reaches the end of the string, this results in an out-of-bounds memory access (Undefined Behavior).

## Code Quality

- **Readability**: Moderate. The logic is straightforward, but the shadowing of variables is confusing.
- **Structure**: Poor.
    - **Variable Shadowing**: `int i` is declared outside the loop and then redeclared inside the `for` loop header.
    - **Redundant Checks**: The `if(j >= t.size())` check is repeated twice (once before the `while` and once inside).
- **Naming**: Good. `s`, `t`, `i`, and `j` are standard for this specific problem.

#

## Concrete Improvements
1. **Fix Bounds Check**: Move the boundary check into the `while` condition: `while(j < t.size() && s[i] != t[j])`.
2. **Remove Shadowing**: Delete the `int i = 0;` declaration outside the loop.
3. **Simplify Logic**: A cleaner way to implement this is a single `while` loop checking both pointers:
   ```cpp
   int i = 0, j = 0;
   while (i < s.size() && j < t.size()) {
       if (s[i] == t[j]) i++;
       j++;
   }
   return i == s.size();
   ```

---

# Question Revision

#

## Is Subsequence

**Pattern:** Two Pointers

**Brute Force:** 
Recursive exploration of all possible character deletions in string `t` to see if any resulting string matches `s`. This leads to exponential time complexity.

**Optimal Approach:** 
Initialize two pointers at the start of `s` and `t`. Traverse `t` linearly; whenever the characters at both pointers match, advance the pointer for `s`. Always advance the pointer for `t`. If the `s` pointer reaches the end of the string, `s` is a subsequence.
- **Time Complexity:** $O(n)$, where $n$ is the length of the target string `t`.
- **Space Complexity:** $O(1)$.

**The 'Aha' Moment:** 
The requirement to maintain the relative order of characters while skipping unnecessary elements points directly to a linear scan with two pointers.

**Summary:** 
Iterate through the target string and advance the source pointer only when a match is found.

---
