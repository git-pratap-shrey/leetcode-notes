---
title: "Lowest Common Ancestor of a Binary Tree"
slug: lowest-common-ancestor-of-a-binary-tree
date: "2026-09-13"
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
- **Technique:** Brute-force nested loop with string searching.
- **Optimality:** Not optimal. It performs a redundant $O(N^2)$ comparison of all word pairs.
- **Critical Error:** The code provided does **not** solve the "Lowest Common Ancestor of a Binary Tree" problem; it solves a "String Matching in Array" problem.

## Complexity
- **Time Complexity:** $O(N^2 \cdot L^2)$, where $N$ is the number of words and $L$ is the average length of a string (due to `find` operations inside nested loops).
- **Space Complexity:** $O(S)$ to store the result, where $S$ is the total size of the matching strings.

## Efficiency Feedback
- **Bottleneck:** The nested loop checks every string against every other string. 
- **Optimization:** Sorting the strings by length first could allow for skipping checks (a longer string cannot be a substring of a shorter one).

## Code Quality
- **Readability:** Good. The logic is simple and easy to follow.
- **Structure:** Good. It follows standard C++ patterns for this specific task.
- **Naming:** Good. Variable names (`ans`, `words`) are clear.
- **Concrete Improvements:** 
    - The solution is completely irrelevant to the problem stated in the prompt ("Lowest Common Ancestor of a Binary Tree").
    - For the actual code provided: use `const string&` or avoid repeated indexing to slightly improve performance.

---

# Question Revision
# Revision Report: Lowest Common Ancestor of a Binary Tree

- **Pattern:** Post-order Tree Traversal (Bottom-Up Recursion)
- **Brute Force:** Store the path from the root to each target node in two separate lists. Compare the lists element-by-element until they diverge; the last common element is the LCA.
- **Optimal Approach:** Use a recursive DFS. For every node:
    1. If the node is `null` or matches either target node, return the node itself.
    2. Recursively search the left and right subtrees.
    3. If both left and right calls return non-null values, the current node is the LCA.
    4. If only one call is non-null, propagate that non-null value upwards (the target is located in that subtree).
    - **Time Complexity:** $O(n)$ where $n$ is the number of nodes.
    - **Space Complexity:** $O(h)$ where $h$ is the height of the tree (recursion stack).
- **The 'Aha' Moment:** The need to make a decision at a parent node based on information gathered from both its children signals a bottom-up (post-order) approach.
- **Summary:** Use post-order traversal to bubble up target nodes; the first node that sees targets in both subtrees is the LCA.

---