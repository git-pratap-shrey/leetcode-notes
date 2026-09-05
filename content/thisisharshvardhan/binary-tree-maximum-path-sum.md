---
title: "Binary Tree Maximum Path Sum"
slug: binary-tree-maximum-path-sum
date: "2026-09-04"
---

# My Solution
~~~cpp
class Solution {
public:
    bool isPalindromic(string s) {
        string temp="";
        for(char ch:s){
            int num=(int)ch;
            temp+=bitset<8>(num).to_string();
        }
        int i=0;
        int j=temp.size()-1;
        while(i<j){
            if(temp[i]!=temp[j]){
                return false;
            }
            i++;
            j--;
        }
        return true;
    }
};
~~~

# Submission Review
## Approach
*   **Technique:** The code implements a string-to-binary conversion followed by a two-pointer palindrome check.
*   **Optimal:** **No.** This code is completely irrelevant to the "Binary Tree Maximum Path Sum" problem. It solves a string-based palindrome check, not a tree-based path summation problem.

## Complexity
*   **Time Complexity:** $O(N \times 8)$, where $N$ is the length of the string, due to bitset conversion and string concatenation.
*   **Space Complexity:** $O(N \times 8)$ to store the binary string representation.

## Efficiency Feedback
*   **Bottleneck:** String concatenation (`temp += ...`) inside a loop leads to frequent reallocations, making it inefficient for large inputs.
*   **Optimization:** If the intent was to check for palindromes, using a bitset container or integer bitwise operations without converting to a `std::string` would be significantly faster and more memory-efficient.

## Code Quality
*   **Readability:** **Poor.** The implementation uses unnecessary conversions (character to binary string).
*   **Structure:** **Poor.** The class name `Solution` and the function `isPalindromic` do not align with the stated problem (Binary Tree Maximum Path Sum).
*   **Naming:** **Moderate.** The function name is descriptive, but the logic inside is unnecessarily complex for a standard palindrome check.
*   **Concrete Improvements:** 
    *   Delete this code entirely as it does not address the Binary Tree Maximum Path Sum problem.
    *   For the actual problem, implement a recursive Depth First Search (DFS) that tracks the maximum path sum passing through each node while returning the maximum gain a branch can provide to its parent.

---

# Question Revision
### Revision Report: Binary Tree Maximum Path Sum

**Pattern:** Post-order Traversal (Bottom-up Recursion)

**Brute Force:**
Calculate the maximum path sum starting at every possible node by exploring all sub-paths in both directions. This leads to redundant calculations and $O(n^2)$ complexity due to repeated tree traversals.

**Optimal Approach:**
Use a recursive helper function that returns the maximum "gain" a subtree can contribute to its parent (the node value + the larger of its two children's max gains). During each node visit, calculate the local path sum (`left_gain + right_gain + node.val`) and update a global maximum variable if this path is the largest found so far.
*   **Time Complexity:** $O(n)$, where $n$ is the number of nodes (each node visited once).
*   **Space Complexity:** $O(h)$, where $h$ is the height of the tree (recursion stack).

**The 'Aha' Moment:**
When a problem requires evaluating an optimal value that depends on results from sub-components where "paths" can branch at every node, a post-order traversal allows you to bubble up local solutions while updating a global state.

**Summary:**
Always treat the tree as a series of local "V-shapes" where each node decides whether to extend a path from its child or complete a path through itself.

---