---
title: "Append Characters to String to Make Subsequence"
slug: append-characters-to-string-to-make-subsequence
date: "2026-08-25"
---

# My Solution
~~~cpp
class Solution {
public:
    vector<string> largestString(vector<int>& nums) {
        vector<string> answer;

        for(int num : nums){
            int i = 25;
            int temp = 1 << 26;
            string answerString = "";
            
            if(temp & num){
                // cout<<"y"<<endl;
                answerString.push_back('z');
                answerString.push_back('z');
            }
            
            while(i >= 0){
                temp = 1 << i;
                // cout<<temp<<endl;

                if(temp & num){
                    answerString.push_back('a' + i);
                }
                i--;
            }
            answer.push_back(answerString);
            // cout<<answerString<<endl;
        }
        return answer;
    }
};
~~~

# Submission Review
## Approach
*   **Technique:** Bit manipulation to reconstruct strings from bitmasks.
*   **Optimal:** The provided code does not solve the problem "Append Characters to String to Make Subsequence." It appears to be an attempt at a completely different problem involving bitwise representation of characters. Based on the provided code, the logic is **incorrect** for the stated problem title.

## Complexity
*   **Time Complexity:** $O(N \times K)$, where $N$ is the number of elements in `nums` and $K$ is the constant bit-width (26). 
*   **Space Complexity:** $O(N \times L)$, where $L$ is the average length of the generated strings.

## Efficiency Feedback
*   The use of `1 << i` inside a loop is standard, but the `temp` variable logic is redundant. `(num >> i) & 1` is a more idiomatic and safer way to check bits in C++.
*   The repeated string concatenation (`push_back`) is acceptable for short strings, but `reserve()` should be used if the string length is known to prevent multiple reallocations.

## Code Quality
*   **Readability:** Moderate. The logic is clear, but the purpose is confusing due to the mismatch with the problem title.
*   **Structure:** Poor. The code performs unnecessary bitwise operations that do not relate to standard "Longest Subsequence" or "Append Character" logic.
*   **Naming:** Poor. The function name `largestString` and parameter `nums` do not accurately describe the logic being performed.
*   **Improvements:**
    *   **Logic:** Re-evaluate the algorithm entirely. The "Append Characters to String to Make Subsequence" problem typically requires a **Two-Pointer** approach, comparing characters of `s` and `t` sequentially.
    *   **Bitwise Idiom:** Use `if ((num >> i) & 1)` instead of `temp = 1 << i; if (temp & num)`.
    *   **Cleanup:** Remove commented-out code (`// cout...`) before finalizing the solution.

---

# Question Revision
### Revision Report: Append Characters to String to Make Subsequence

**Pattern:** Two Pointers (Greedy)

**Brute Force:**
Generate all possible subsequences of the source string `s` and check against the target string `t`. This is computationally infeasible, typically resulting in exponential $O(2^n)$ complexity.

**Optimal Approach:**
Initialize a pointer `i` for `s` and `j` for `t`. Iterate through `s`; whenever `s[i] == t[j]`, increment both pointers. The number of characters to append is the remaining length of `t` from the final position of `j`.
*   **Time Complexity:** $O(n)$, where $n$ is the length of `s`.
*   **Space Complexity:** $O(1)$, as we only store two integer pointers.

**The 'Aha' Moment:**
The problem asks for a *subsequence* (not substring), which implies order must be preserved without requiring characters to be contiguous, signaling that a linear scan with a greedy pointer match is sufficient.

**Summary:**
When tasked with finding a subsequence, use a greedy pointer to traverse the target string only when a match is found in the source string.

---