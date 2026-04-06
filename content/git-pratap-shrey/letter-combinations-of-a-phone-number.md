---
title: "Letter Combinations of a Phone Number"
slug: letter-combinations-of-a-phone-number
date: "2026-03-29"

---
---

# My Solution
~~~cpp
class Solution {
public:
    void fn(const vector<string>& mapping, vector<string>& answer, string& digits,
            string& currCombination, int start) {

        if (currCombination.size() == digits.size()) {
            answer.push_back(currCombination);
            return;
        }

        for (auto c : mapping[(digits[start] - '0') - 2]) {
            currCombination.push_back(c);
            fn(mapping, answer, digits, currCombination, start + 1);
            currCombination.pop_back();
        }

        return;
    }
    vector<string> letterCombinations(string digits) {
        const vector<string> mapping = {"abc", "def",  "ghi", "jkl",
                                        "mno", "pqrs", "tuv", "wxyz"};
        vector<string> answer;
        string currCombination;

        fn(mapping, answer, digits, currCombination, 0);

        return answer;
    }
};
~~~

# Submission Review
## Approach
*   **Technique:** Backtracking (recursive depth-first search).
*   **Optimality:** Optimal. The problem requires generating all possible combinations, which is an $O(3^N \cdot 4^M)$ operation, where $N$ and $M$ are the counts of digits mapping to 3 and 4 letters, respectively. The solution explores the state space tree once without redundant computations.

## Complexity
*   **Time Complexity:** $O(3^N \cdot 4^M)$, where $N+M$ is the length of the input string. This is the lower bound as it matches the number of output combinations.
*   **Space Complexity:** $O(N+M)$ for the recursion stack and the `currCombination` string storage (excluding the space for the final `answer` vector).

## Efficiency Feedback
*   **Strengths:** The use of `pop_back()` and pass-by-reference for `currCombination` avoids unnecessary string copying, making this approach memory-efficient.
*   **Minor Optimization:** The base case check `currCombination.size() == digits.size()` is redundant because the recursion depth is explicitly controlled by the `start` index and the `digits.size()` limit. You can safely trigger the base case when `start == digits.size()`.
*   **Input Edge Case:** The code does not explicitly handle an empty string input. While it works correctly (returns an empty vector), adding an early return `if (digits.empty()) return {};` would save a function call.

## Code Quality
*   **Readability:** Good. The logic is straightforward and standard for backtracking problems.
*   **Structure:** Good. The separation of the recursive helper `fn` from the main logic is clear.
*   **Naming:** Moderate. `fn` is non-descriptive; a name like `backtrack` or `generateCombinations` would better reflect the intent.
*   **Improvements:**
    *   Mark `mapping` as `static const` or define it outside the function to avoid re-initializing it on every function call (though the compiler may optimize this).
    *   Use `size_t` for the `start` parameter to match the type of `digits.size()`.
    *   Remove the unnecessary `return;` at the end of the `fn` function.

---
---


# Question Revision
### Revision Report: Letter Combinations of a Phone Number

**Pattern:** Backtracking / Depth-First Search (DFS)

**Brute Force:** 
Nested loops for each digit (e.g., three nested loops for a 3-digit string). This fails because the number of loops must be dynamic based on the input length.

**Optimal Approach:**
Use a recursive backtracking function to build the string character by character. At each depth (index in input string), iterate through the mapped letters for that digit and recurse until the string length equals the input length.
*   **Time Complexity:** $O(3^N \times 4^M)$, where $N$ is the number of digits with 3 letters and $M$ is the number of digits with 4 letters.
*   **Space Complexity:** $O(N + M)$ for the recursion stack depth.

**The 'Aha' Moment:**
When a problem asks for "all possible combinations" of a variable number of sets, it is a clear indicator to use recursion to explore the search tree.

**Summary:** 
Whenever the number of nested loops required is unknown at compile-time, swap them for a recursive backtracking function.

---
