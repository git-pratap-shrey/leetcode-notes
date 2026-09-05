---
title: "Univalued Binary Tree"
slug: univalued-binary-tree
date: "2026-08-19"
---

# My Solution
~~~cpp
class Solution {
public:
    bool isPalindromic(string s) {
        string bin="";
        for(char c:s){
            int x=c;
            for(int i=7;i>=0;i--){
                if((x&(1<<i))!=0)bin+='1';
                else bin+='0';
            }
        }
        string rev=bin;
        reverse(rev.begin(),rev.end());
        return bin==rev;
    }
};
~~~

# Submission Review
## Approach
*   **Technique:** The code performs string-to-binary conversion followed by a palindrome check.
*   **Optimality:** **Not Optimal.** The problem title provided ("Univalued Binary Tree") is completely unrelated to the logic implemented, which appears to be a generic string palindrome checker using bit manipulation. Furthermore, the implementation is unnecessarily memory-intensive.

## Complexity
*   **Time Complexity:** $O(N)$, where $N$ is the number of characters in the string, as it processes each bit.
*   **Space Complexity:** $O(N)$, as it creates a new string `bin` of length $8N$.

## Efficiency Feedback
*   **Bottleneck:** The approach creates an explicit `bin` string representing bits. This uses $8 \times$ the memory of the input string and performs unnecessary allocations.
*   **Optimization:** If the intent is to check for palindromic properties, bit manipulation should be done in-place or via index arithmetic instead of constructing a new string. 

## Code Quality
*   **Readability:** **Poor.** The logic does not match the problem title ("Univalued Binary Tree"), creating significant confusion.
*   **Structure:** **Poor.** The function `isPalindromic` lacks a clear purpose relative to the context of a "Univalued Binary Tree" problem (which typically requires a recursive tree traversal).
*   **Naming:** **Poor.** The function name is misleading if the intention was tree-based validation.
*   **Concrete Improvements:** 
    *   **Context Mismatch:** If the task is indeed "Univalued Binary Tree," remove this code entirely. A solution for that problem should be a recursive function traversing the tree and comparing `node->val` with `root->val`.
    *   **Memory Efficiency:** If string processing is required, avoid `string bin = ""` and use direct access/indexing to compare characters from both ends to achieve $O(1)$ auxiliary space.

---

# Question Revision
### Revision Report: Univalued Binary Tree

**Pattern:** Tree Traversal (DFS/BFS)

**Brute Force:**
Collect all node values into an array using a full traversal, then check if all elements in the array are equal to the root's value.
*   **Time Complexity:** $O(n)$
*   **Space Complexity:** $O(n)$

**Optimal Approach:**
Perform a recursive Depth-First Search (DFS) starting from the root. For every node, return `false` if its value differs from the parent's value (or the root's value). Short-circuit the traversal immediately upon finding a mismatch.
*   **Time Complexity:** $O(n)$ (worst case: must visit every node)
*   **Space Complexity:** $O(h)$ where $h$ is the height of the tree (recursion stack).

**The 'Aha' Moment:**
The constraint that every node must match the *same* value allows you to treat the root's value as a global constant, enabling a simple comparison check at each step without needing to track state.

**Summary:**
When asked to verify a property across an entire tree, use DFS to short-circuit the moment the condition is violated.

---