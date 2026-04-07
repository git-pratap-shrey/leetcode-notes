---
title: "Reverse Letters Then Special Characters in a String"
slug: reverse-letters-then-special-characters-in-a-string
date: "2026-02-19"

---
---

# My Solution
~~~cpp
class Solution {
public:
    string reverseByType(string s) {
        vector<char>ans;
        vector<char>ap;
        for(int i=0;i<s.size();i++){
            if(s[i]>='a'&&s[i]<='z'){
                ans.push_back(s[i]);
            }
            else{
                ap.push_back(s[i]);
            }
        }
        reverse(ans.begin(),ans.end());
        reverse(ap.begin(),ap.end());
        string w="";
        int m=0,n=0;
        for(int i=0;i<s.size();i++){
           if(s[i]>='a'&&s[i]<='z'){
                w+=ans[m++];
            }
            else{
                w+=ap[n++];
            }
        }
        return w;
    }
};
~~~

# Submission Review
## Approach
*   **Technique:** Two-pass categorization and reversal using auxiliary storage. 
*   **Optimality:** Suboptimal. The logic correctly separates and reverses characters but performs unnecessary passes and uses redundant memory allocation.

## Complexity
*   **Time Complexity:** $O(N)$, where $N$ is the string length. The solution iterates through the string three times.
*   **Space Complexity:** $O(N)$. It creates two vectors to store all characters of the string and one additional result string.

## Efficiency Feedback
*   **Memory Overhead:** The use of `vector<char>` to store characters and then a separate `string` result is redundant. You are effectively storing the string three times in memory.
*   **Performance Bottleneck:** The string concatenation `w += ...` inside the loop can cause reallocations. While amortized $O(1)$, it is better to reserve space or pre-allocate the result string `string w(s.size(), ' ');`.
*   **Optimization:** A two-pointer approach (start and end) would allow you to reverse in-place (or with one output string) in $O(N)$ time and $O(1)$ extra space (excluding the output).

## Code Quality
*   **Readability:** Moderate. The logic is easy to follow but verbose.
*   **Structure:** Moderate. Splitting the logic into separate vectors is clear but inefficient.
*   **Naming:** Poor. Variables `ans`, `ap`, `w`, `m`, and `n` are non-descriptive. Use names like `letters`, `specials`, `result`, etc.
*   **Concrete Improvements:**
    1.  **In-place approach:** Use two pointers (`left` and `right`) to swap elements directly in the string if you only needed to reverse the whole thing. Since you need to reverse only specific subsets, pre-calculate the final positions or use a single result string and fill it using two pointers (one at the beginning of the letters group, one at the end).
    2.  **Naming:** Rename `ans` to `letters` and `ap` to `specials`.
    3.  **Pre-allocation:** Use `w.resize(s.size())` to avoid repeated allocations during string concatenation.
    4.  **Conditionals:** `std::isalpha()` is more idiomatic and robust than checking `s[i] >= 'a' && s[i] <= 'z'`.

---
---


# Question Revision
### Revision Report: Reverse Only Letters

**Pattern:** Two Pointers

**Brute Force:** 
Extract all alphabetic characters into a separate stack, then iterate through the string again, popping from the stack whenever a letter is encountered and keeping special characters in their original positions.
*   **Time:** $O(n)$
*   **Space:** $O(n)$

**Optimal Approach:**
Use two pointers (`left` starting at 0, `right` starting at $n-1$). Move both pointers toward the center, skipping non-alphabetic characters. Swap the characters at `left` and `right` only when both point to letters.
*   **Time:** $O(n)$
*   **Space:** $O(1)$ (in-place modification)

**The 'Aha' Moment:** 
When a problem requires modifying elements while maintaining the relative positions of "ignored" items, a two-pointer approach moving inward allows for efficient, in-place swapping without auxiliary storage.

**Summary:** 
Whenever you need to rearrange elements while preserving the indices of specific non-target characters, use two pointers to skip and swap in a single pass.

---
