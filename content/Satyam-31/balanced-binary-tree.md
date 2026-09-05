---
title: "Balanced Binary Tree"
slug: balanced-binary-tree
date: "2026-08-21"
---

# My Solution
~~~cpp
class Solution {
public:
    int lengthOfLastWord(string s) {
        int i=s.size()-1;
        while(i>=0&&s[i]==' ') i--;
        int count=0;
        while(i>=0&&s[i]!=' ') {
            count++;
            i--;
        }
        return count;
    }
};
~~~

# Submission Review
## Approach
*   **Technique:** Two-pointer/Linear scan.
*   **Optimal:** Yes. The approach traverses the string once from back to front, which is the most efficient way to solve this problem.

## Complexity
*   **Time Complexity:** $O(N)$, where $N$ is the length of the string, as the pointers visit each character at most once.
*   **Space Complexity:** $O(1)$, as it uses a constant amount of extra space.

## Efficiency Feedback
*   **Performance:** The runtime is optimal. 
*   **Optimization:** The logic is as efficient as possible for this problem. No meaningful optimizations are required.

## Code Quality
*   **Readability:** Good. The logic is straightforward and easy to follow.
*   **Structure:** Good. The logic is well-contained within a single function.
*   **Naming:** Moderate. The parameter name `s` is acceptable in competitive programming, but `count` could be more descriptive (e.g., `lastWordLength`).
*   **Note:** The class name `Solution` and the function name `lengthOfLastWord` do not match the provided problem description (Balanced Binary Tree). This appears to be a mismatch between the provided problem title and the actual implementation code.

## Concrete Improvements
*   **Input Handling:** The logic correctly handles trailing spaces, which is a common edge case for this problem.
*   **Naming:** Rename `count` to `length` to better reflect its purpose.
*   **Consistency:** Ensure the function signature and class naming align with the intended problem statement requirements.

---

# Question Revision
### Revision Report: Balanced Binary Tree

**Pattern:** Depth-First Search (DFS) / Post-order Traversal

**Brute Force:**
For every node, calculate the height of the left and right subtrees. If the difference between heights is $>1$ at any node, return false. This results in repeated height calculations for the same nodes, leading to $O(n^2)$ time complexity.

**Optimal Approach:**
Use a bottom-up DFS. Each recursive call returns the height of the subtree if it is balanced, or a sentinel value (e.g., $-1$) if it is unbalanced. By checking the balance condition as the recursion unwinds, we visit each node exactly once.
*   **Time Complexity:** $O(n)$
*   **Space Complexity:** $O(h)$, where $h$ is the height of the tree (for the recursion stack).

**The 'Aha' Moment:**
When the validity of a parent node depends entirely on the pre-computed results of its children, post-order traversal allows you to propagate state upward without redundant re-calculations.

**Summary:**
Don't re-calculate subtree heights from the top down; bubble the height up from the leaves to turn an $O(n^2)$ search into a single $O(n)$ pass.

---