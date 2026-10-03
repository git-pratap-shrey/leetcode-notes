---
title: "String Matching in an Array"
slug: string-matching-in-an-array
date: "2026-09-07"
---

# My Solution
~~~cpp
class Solution {
public:
    vector<string> stringMatching(vector<string>& words) {
        vector<string> ans;

        for (int i = 0; i < words.size(); i++) {
            for (int j = 0; j < words.size(); j++) {
                if (i != j && words[j].find(words[i]) != string::npos) {
                    ans.push_back(words[i]);
                    break;
                }
            }
        }

        return ans;
    }
};
~~~

# Submission Review
## Approach
- **Technique**: Brute-force nested iteration with string searching.
- **Optimality**: Suboptimal. It checks every pair of strings regardless of their lengths. Since a string can only be a substring of another string longer than itself, sorting by length or filtering by size would reduce unnecessary comparisons.

## Complexity
- **Time Complexity**: $O(N^2 \cdot M^2)$, where $N$ is the number of words and $M$ is the maximum length of a word. The nested loops are $O(N^2)$ and `std::string::find` (typically implemented as a naive search) is $O(M^2)$ in the worst case.
- **Space Complexity**: $O(1)$ auxiliary space beyond the memory required for the result vector.

## Efficiency Feedback
- **Bottleneck**: The inner loop executes $N^2$ times. Many iterations are wasted checking if a longer string is a substring of a shorter one, which is logically impossible.
- **Optimization**: Sort the input strings by length in descending order. This allows for more strategic pruning or the use of a Aho-Corasick automaton if the constraints were significantly larger.

## Code Quality
- **Readability**: Good. The logic is straightforward and easy to follow.
- **Structure**: Good. The logic is contained within a single method as required.
- **Naming**: Good. Variable names (`ans`, `words`) are clear and standard.
- **Improvements**:
    - Use `const auto& word : words` in a range-based for loop to avoid repeated indexing and potential copies.
    - Use `std::string_view` (C++17) to avoid overhead if the strings were larger, though not necessary for typical competitive programming constraints of this problem.

---

# Question Revision
# Revision Report: String Matching in an Array

- **Pattern**: String Search / Brute Force Search
- **Brute Force**: Iterate through every pair of strings $(s1, s2)$ in the array. Use a built-in `contains()` or `indexOf()` method to check if $s1$ is a substring of $s2$.
- **Optimal Approach**: 
    - Sort the strings by length in descending order.
    - Use a **Trie** (Prefix Tree) or a **Hash Set** of all possible substrings for each word to check existence.
    - However, given the constraints (small $N$ and short string lengths), the optimized Brute Force (nested loop with `contains`) is typically sufficient and most practical.
    - **Complexity**: 
        - Time: $O(n^2 \cdot m^2)$ where $n$ is the number of strings and $m$ is the maximum length of a string.
        - Space: $O(1)$ or $O(n)$ depending on the result storage.
- **The 'Aha' Moment**: When the constraints are small (e.g., $n \le 100$), a nested loop checking `s1.contains(s2)` is the most efficient implementation path.
- **Summary**: Iterate through all pairs and use the built-in substring check to find if one string exists within another.

---