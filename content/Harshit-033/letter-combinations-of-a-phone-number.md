---
title: "Letter Combinations of a Phone Number"
slug: letter-combinations-of-a-phone-number
date: "2026-08-13"
---

# My Solution
~~~cpp
class Solution {
public:
    vector<string> key={"","","abc","def","ghi","jkl","mno","pqrs","tuv","wxyz"};
    vector<string> ans;

    void solve(string s,string a,int ind){
        if(a.size()==s.size()){
            ans.push_back(a);
            return;
        }

        int n=s[ind]-'0';

        for(int i=0;i<key[n].size();i++){
            solve(s,a+key[n][i],ind+1);
        }
    }

    vector<string> letterCombinations(string digits) {
        if(digits.size()==0)
            return {};

        solve(digits,"",0);
        return ans;
    }
};
~~~

# Submission Review
## Approach
*   **Technique:** Backtracking (recursive depth-first search).
*   **Optimality:** Optimal. The problem requires generating all possible combinations, which necessitates an exponential time complexity approach.

## Complexity
*   **Time Complexity:** $O(4^N \cdot N)$, where $N$ is the length of `digits`. In the worst case (e.g., digits '7' or '9'), each digit maps to 4 letters, leading to $4^N$ combinations, with each taking $O(N)$ time to construct.
*   **Space Complexity:** $O(N)$ for the recursion stack depth.

## Efficiency Feedback
*   **String Concatenation:** The code passes `a+key[n][i]` by value. This creates a new string object at each recursive step, which is slightly inefficient. 
*   **Optimization:** Pass a single `string&` (buffer) by reference and use `push_back` and `pop_back` to maintain state. This reduces memory allocations and copying overhead.
*   **Global State:** Storing `ans` and `key` as class members is fine for LeetCode's multi-test case execution, but consider clearing `ans` explicitly or using local variables passed by reference if the object is reused across multiple calls to `letterCombinations`.

## Code Quality
*   **Readability:** Good. The logic is concise and easy to follow.
*   **Structure:** Moderate. Relying on class-member variables for state tracking is common in competitive programming but less clean than passing references through the recursion helper.
*   **Naming:** Moderate. `s`, `a`, `ind`, `n` are generic. More descriptive names like `digits`, `currentCombination`, `index`, and `digitValue` would improve clarity.
*   **Concrete Improvements:**
    *   Initialize `ans` locally and pass it to the helper function to avoid side effects from lingering member state.
    *   Use `const` for parameters that do not change (e.g., `const string& digits`).
    *   Use backtracking (add char, recurse, remove char) instead of string concatenation to optimize performance.

```cpp
// Suggested optimization:
void solve(const string& digits, string& current, int index, vector<string>& result) {
    if (index == digits.size()) {
        result.push_back(current);
        return;
    }
    const string& letters = key[digits[index] - '0'];
    for (char c : letters) {
        current.push_back(c);
        solve(digits, current, index + 1, result);
        current.pop_back(); // Backtrack
    }
}
```

---

# Question Revision
### Revision Report: Letter Combinations of a Phone Number

**Pattern:** Backtracking (or Iterative BFS/DFS)

**Brute Force:**
Use $N$ nested loops, where $N$ is the length of the input string. This is impossible to implement because $N$ is variable, leading to an attempt at recursive calls without pruning, often resulting in redundant state exploration.

**Optimal Approach:**
Use **Backtracking** to build combinations by traversing the mapping of digits to characters. At each depth (digit), iterate through the corresponding letters and recurse until the string length matches the input.
*   **Time Complexity:** $O(3^N \times 4^M)$, where $N$ is the number of digits mapping to 3 letters and $M$ is the number of digits mapping to 4 letters.
*   **Space Complexity:** $O(N + M)$ to store the recursion stack depth.

**The 'Aha' Moment:**
When a problem asks for "all possible combinations" of a variable set of choices, the structure is inherently a decision tree that necessitates backtracking.

**Summary:**
Whenever you need to generate all permutations or combinations based on multiple choices per step, think of it as traversing a tree where each level represents a digit and each branch represents a character.

---