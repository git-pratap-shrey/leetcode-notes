---
title: "Letter Combinations of a Phone Number"
slug: letter-combinations-of-a-phone-number
date: "2026-06-29"

---

# My Solution
~~~
class
 Solution {
public:
    vector<string> letterCombinations(string digits) {

        if(digits.empty()) return {};

        vector<string> ans;
        vector<string> mp={
            "", "", "abc", "def", "ghi",
            "jkl", "mno", "pqrs", "tuv", "wxyz"
        };

        string cur;

        function<void(int)> dfs=[&](int i){

            if(i==digits.size()){
                ans.push_back(cur);
                return;
            }

            string s=mp[digits[i]-'0'];

            for(char c:s){
                cur.push_back(c);
                dfs(i+1);
                cur.pop_back();
            }
        };

        dfs(0);

        return ans;
    }
};
~~~

# Submission Review

## Approach

- **Technique:** Backtracking (DFS).
- **Optimality:** Optimal. Since the problem requires generating all possible combinations, an exponential time complexity is unavoidable.

## Complexity

- **Time Complexity:** $O(4^N \cdot N)$, where $N$ is the length of the input string. There are at most $4^N$ combinations, and each takes $O(N)$ time to be copied into the result vector.
- **Space Complexity:** $O(N)$. The recursion depth is $N$, and the temporary string `cur` stores at most $N$ characters. (Excluding the output vector).

## Efficiency Feedback

- **Memory/Runtime:** The solution is efficient. Using `push_back` and `pop_back` on a single `cur` string avoids repeated string allocations that would occur if strings were passed by value.
- **Optimization:** `ans.reserve()` could be used to prevent multiple reallocations of the result vector, though the total size would need to be pre-calculated based on the digits provided.

## Code Quality

- **Readability:** Good. The logic is straightforward and follows standard backtracking patterns.
- **Structure:** Good. The use of a lambda function for DFS keeps the logic encapsulated within the primary method.
- **Naming:** Moderate. `mp` is a bit generic; `digitMap` would be more descriptive. `ans` and `cur` are acceptable in a competitive programming context but vague for production.
- **Improvement:** Replace `std::function` with a private helper method to avoid the small overhead associated with `std::function` type erasure.

---

# Question Revision

#

## Letter Combinations of a Phone Number

**Pattern:** Backtracking / DFS

**Brute Force:** 
Use nested loops for every possible digit. However, since the input length is dynamic, this is impractical and naturally evolves into a recursive approach.

**Optimal Approach:** 
Map digits to letters using a hash map. Use a recursive function to build a combination: pick a letter for the current digit, move to the next digit, and backtrack by removing the letter once that path is fully explored.
- **Time Complexity:** $O(4^n \cdot n)$ — where $n$ is the number of digits; in the worst case (digits 7 and 9), there are 4 choices per digit, and each combination takes $O(n)$ to construct.
- **Space Complexity:** $O(n)$ — for the recursion stack depth.

**The 'Aha' Moment:** 
The requirement to "generate all combinations" from a set of choices at each step signals a decision tree that must be traversed via backtracking.

**Summary:** 
Treat the digit string as a path in a decision tree and use backtracking to explore every possible letter branch.

---
