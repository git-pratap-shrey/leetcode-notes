---
title: "Palindrome Partitioning"
slug: palindrome-partitioning

---
---

# My Solution
~~~cpp
class Solution {
public:

    string is_palin(string s, int start, int end){
        string palindrome;
        int temp = end;
        while(start <= temp){
            if(s[start] != s[end]){
                return "";
            }
            palindrome.push_back(s[start]);
            start++;
            end--;
        }
        return palindrome;
    }
    void fn(string s, vector<vector<string>>& answer, vector<string>& currList,string& currString, int start){
        if(start == s.size()){
            answer.push_back(currList);
            return;
        }
        for(int i = start; i < s.size(); i++){
            currString = is_palin(s, start, i);
            if(currString != ""){
                // cout<<currString<<endl;
                currList.push_back(currString);
                fn(s, answer, currList, currString, i+1);
                currList.pop_back();
            }
        }
    }

    vector<vector<string>> partition(string s) {
        vector<vector<string>> answer;
        vector<string> currList;
        string currString;

        fn(s, answer, currList, currString, 0);

        return answer;
    }
};
~~~

# Submission Review
## Approach
*   **Technique:** Backtracking (recursive depth-first search) to explore all possible partition combinations.
*   **Optimality:** Suboptimal. While the backtracking structure is standard, the validation logic is inefficient. The helper function `is_palin` creates a new string object and performs unnecessary character comparisons by reconstructing the substring, which could be avoided.

## Complexity
*   **Time Complexity:** $O(N \cdot 2^N)$, where $N$ is the string length. In the worst case, there are $2^{N-1}$ partitions, and each requires $O(N)$ to validate and copy strings.
*   **Space Complexity:** $O(N)$ recursion stack depth and $O(N)$ for the `currList` storage.

## Efficiency Feedback
*   **Bottleneck:** The `is_palin` function is called repeatedly for the same substrings. Furthermore, creating a new `string` object inside every check adds heap allocation overhead.
*   **Optimizations:**
    *   **Precomputation:** Use a 2D DP table `dp[i][j]` to store whether the substring `s[i...j]` is a palindrome. This reduces palindrome validation to $O(1)$.
    *   **Avoid Reconstruction:** Do not build the `palindrome` string inside the checker; simply return a `bool` and extract the substring using `s.substr()` only when a valid partition is found.

## Code Quality
*   **Readability:** Moderate. The recursive flow is clear, but the mixing of the `currString` member variable with the helper function is confusing.
*   **Structure:** Poor. The `currString` parameter is passed by reference but is effectively a global state within the recursion, which is prone to side-effect bugs. It should be a local variable or removed entirely.
*   **Naming:** Moderate. `fn` is non-descriptive; `backtrack` or `findPartitions` would be standard.
*   **Concrete Improvements:**
    *   Change `is_palin` to return `bool`.
    *   Remove `currString` from the `fn` signature; use `string temp = s.substr(start, i - start + 1)` only when necessary.
    *   Pass `start` and `end` indices to a checker function that returns a `bool` without string copies.

---
---


# Question Revision
### Revision Report: Palindrome Partitioning

**Pattern:** Backtracking (Depth-First Search)

**Brute Force:** 
Generate all possible ways to slice the string into substrings ($2^{n-1}$ cuts), then check each resulting partition for palindrome properties. This leads to an exponential complexity of $O(n \cdot 2^n)$.

**Optimal Approach:** 
Use backtracking to explore partitions prefix by prefix. Maintain a helper function to verify if a substring `s[start:end]` is a palindrome. Optimization: Precompute a 2D boolean DP table where `isPal[i][j]` is true if `s[i...j]` is a palindrome.
*   **Time Complexity:** $O(n \cdot 2^n)$ in the worst case (e.g., "aaaaa"), as there are $2^{n-1}$ possible partitions and each palindrome check takes $O(n)$.
*   **Space Complexity:** $O(n)$ for the recursion stack depth.

**The 'Aha' Moment:**
When a problem asks to generate all possible combinations of valid structures (partitions) based on a specific property, it is a signal to explore the decision tree via backtracking.

**Summary:** 
Whenever you need to partition a sequence into sets that satisfy a specific condition, treat each split point as a decision node in a recursion tree.

---
