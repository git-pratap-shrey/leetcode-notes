---
title: "Count Nodes Equal to Average of Subtree"
slug: count-nodes-equal-to-average-of-subtree
date: "2026-08-19"
---

# My Solution
~~~cpp
class Solution {
public:
    int sumOfTheDigitsOfHarshadNumber(int x) {
        int sum=0;
        int temp=x;
        while(x){
            int r=x%10;
            sum+=r;
            x=x/10;
        }
        if(temp % sum == 0)return sum;
        else return -1;
    }
};
~~~

# Submission Review
## Approach
*   **Technique:** The code implements a simple digit-sum calculation and modulo arithmetic.
*   **Optimal:** **No.** This solution does not solve the stated problem ("Count Nodes Equal to Average of Subtree"). It appears to be a solution for a completely different problem ("Harshad Number").

## Complexity
*   **Time Complexity:** $O(\log_{10} x)$ per call, as it iterates through the digits of the input number.
*   **Space Complexity:** $O(1)$.

## Efficiency Feedback
*   The implementation of the digit sum logic is efficient and standard. However, because it addresses the wrong problem, it is irrelevant to the requirement of traversing a tree structure.

## Code Quality
*   **Readability:** Moderate. The code is clear, but the logic is incorrectly mapped to the task.
*   **Structure:** Poor. It fails to handle the input structure (Tree/Nodes) required for the problem "Count Nodes Equal to Average of Subtree."
*   **Naming:** Poor. The function name `sumOfTheDigitsOfHarshadNumber` correctly describes the logic inside but completely ignores the intended problem.
*   **Concrete Improvements:** 
    *   To solve "Count Nodes Equal to Average of Subtree," you must implement a Depth First Search (DFS) that returns a pair or structure containing `{sum, count}` for each subtree.
    *   Compare the computed average (`sum / count`) with `node->val` and update a global counter.
    *   Discard the existing `HarshadNumber` logic entirely as it is unrelated to tree traversal.

---

# Question Revision
### Revision Report: Count Nodes Equal to Average of Subtree

**Pattern:** Tree Post-Order Traversal (Bottom-Up DFS)

**Brute Force:**
For every node, perform a separate traversal to calculate the sum and count of all nodes in its subtree, then compare the average to the node's value. 
*   **Time Complexity:** $O(n^2)$
*   **Space Complexity:** $O(h)$ (recursion stack)

**Optimal Approach:**
Use a post-order traversal to return a tuple `(sum, count)` from each child to the parent. This allows each node to compute its subtree’s total sum and node count in constant time by adding the results of its children, checking the condition, and passing the updated values up the tree.
*   **Time Complexity:** $O(n)$
*   **Space Complexity:** $O(h)$ (where $h$ is the height of the tree)

**The 'Aha' Moment:**
When a problem requires subtree-wide aggregate data (like sums or counts) to validate a property at each node, calculating that data bottom-up during a single post-order traversal avoids redundant work.

**Summary:**
When you need subtree aggregates to make a decision at each node, stop re-calculating from scratch and pass the computed statistics up the recursion stack.

---