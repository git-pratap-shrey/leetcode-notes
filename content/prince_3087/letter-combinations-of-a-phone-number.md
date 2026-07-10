---
title: "Letter Combinations of a Phone Number"
slug: letter-combinations-of-a-phone-number
date: "2026-06-25"

---

# My Solution
~~~
class
 Solution {
public:
    unordered_map<char,string>f{
        {'2', "abc"},
        {'3', "def"},
        {'4', "ghi"},
        {'5', "jkl"},
        {'6', "mno"},
        {'7', "pqrs"},
        {'8', "tuv"},
        {'9', "wxyz"}
    };
    void fun(string & digits , int n ,int idx , string & temp , vector<string>&res){

        if(idx==n){
            res.push_back(temp);
            return;
        }
        string keypad = f[digits[idx]];
        for(int j =0;j<keypad.size();j++){
            temp.push_back(keypad[j]);
            fun(digits,n,idx+1,temp,res);
            temp.pop_back();
        }
        

    }
    vector<string> letterCombinations(string digits) {
        int n = digits.size();
        int idx = 0;
        string temp = "";
        vector<string>res;
        fun(digits,n,idx,temp,res);
        return res;
        
    }
};
~~~

# Submission Review

## Approach

- **Technique**: Backtracking (DFS). The code recursively explores all possible character combinations mapped to the input digits.
- **Optimality**: Optimal in terms of algorithmic strategy, as all combinations must be generated. However, it contains a logical bug regarding empty input.

## Complexity

- **Time Complexity**: $O(4^N \cdot N)$, where $N$ is the length of the input string. There are at most $4^N$ combinations, and each takes $O(N)$ to be copied into the result vector.
- **Space Complexity**: $O(N)$. The recursion depth is $N$, and the `temp` string consumes $O(N)$ space.

## Efficiency Feedback

- **Bottleneck**: The use of `unordered_map<char, string>` introduces unnecessary hashing overhead. Since the keys are a small, contiguous range of characters ('2'-'9'), a fixed-size array or `vector<string>` would provide faster $O(1)$ access.
- **Bug**: If `digits` is empty, the function returns `[""]` instead of `[]`. The base case `if(idx == n)` is triggered immediately when $n=0$, pushing an empty string into the result.

## Code Quality

- **Readability**: Moderate. The logic is straightforward, but the naming is cryptic.
- **Structure**: Moderate. The helper function is separated, but it lacks a guard clause for the empty input edge case in the main function.
- **Naming**: Poor. `fun` and `f` are non-descriptive names. `fun` should be `backtrack` or `generateCombinations`, and `f` should be `digitMap`.

#

## Concrete Improvements
1. **Fix Edge Case**: Add `if (digits.empty()) return {};` at the start of `letterCombinations`.
2. **Optimize Mapping**: Replace `unordered_map` with `string mapping[] = {"", "", "abc", "def", ...};` to allow indexing by `digits[idx] - '0'`.
3. **Rename Variables**: Rename `f` $\rightarrow$ `digitMap` and `fun` $\rightarrow$ `backtrack`.

---

# Question Revision

#

## Letter Combinations of a Phone Number

**Pattern:** Backtracking / DFS

**Brute Force:**
Using nested loops to iterate through letter sets. This is impractical because the number of digits (and thus the depth of nesting) is variable.

**Optimal Approach:**
Map digits to their corresponding letters. Use a recursive backtracking function to build combinations:
1. Pick a letter for the current digit.
2. Recurse to the next digit.
3. Once the combination length equals the input length, add it to the result.
4. Pop the letter (backtrack) to explore the next possible letter for that position.

- **Time Complexity:** $O(4^n \cdot n)$ where $n$ is the length of the input string (max 4 letters per digit, $n$ to build each string).
- **Space Complexity:** $O(n)$ for the recursion stack depth.

**The 'Aha' Moment:**
The requirement to "return all possible combinations" from a variable number of choice sets signifies a decision tree, which is the core signal for backtracking.

**Summary:**
Map digits to letters and use backtracking to explore every path in the decision tree.

---
