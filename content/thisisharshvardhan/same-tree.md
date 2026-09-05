---
title: "Same Tree"
slug: same-tree
date: "2026-09-04"
---

# My Solution
~~~cpp
class Solution {
public:
    int minBishopMoves(vector<int>& source, vector<int>& target) {
        if((((source[0]+source[1])%2==0)&&((target[0]+target[1])%2==0))||(((source[0]+source[1])%2!=0)&&((target[0]+target[1])%2!=0))){
            int sum=source[0]+source[1];
            int ans=target[0]+target[1];
            if(sum==ans||(source[0]-source[1]==target[0]-target[1])){
                return 1;
            }
            else{
                return 2;
            }
        }
        else{
            return -1;
        }
    }
};
~~~

# Submission Review
## Approach
*   **Technique:** Greedy/Geometric logic based on the parity of square coordinates (checkerboard coloring).
*   **Optimal:** Yes. A bishop on a standard chessboard can move to any square of the same color in at most two moves. If the target is on a different color, it is unreachable.

## Complexity
*   **Time Complexity:** $O(1)$.
*   **Space Complexity:** $O(1)$.

## Efficiency Feedback
*   The code is highly efficient as it uses simple arithmetic checks. 
*   **Observation:** The problem title provided ("Same Tree") does not match the logic, which is clearly for a "Bishop Moves" problem. Assuming the code logic is intended for a Bishop problem, it is correct.

## Code Quality
*   **Readability:** Poor. The nested `if` conditions are unnecessarily complex and difficult to follow.
*   **Structure:** Moderate. The parity check could be abstracted or simplified using the absolute difference of coordinates.
*   **Naming:** Moderate. `sum` and `ans` are vague; `sourceSum` and `targetSum` would be more descriptive.

### Concrete Improvements
1.  **Simplify Parity Check:** Use `(source[0] + source[1]) % 2 != (target[0] + target[1]) % 2` to return `-1` early.
2.  **Use `abs()`:** Use `abs(source[0] - target[0]) == abs(source[1] - target[1])` to check if the target is on the same diagonal.
3.  **Refactored Logic Example:**
```cpp
int minBishopMoves(vector<int>& s, vector<int>& t) {
    if ((s[0] + s[1]) % 2 != (t[0] + t[1]) % 2) return -1;
    if (s[0] + s[1] == t[0] + t[1] || (s[0] - s[1] == t[0] - t[1])) return 1;
    return 2;
}
```
*   This version removes deep nesting, improves readability, and maintains the same performance.

---

# Question Revision
### Revision Report: Same Tree

**Pattern:** Tree Traversal (DFS/BFS)

**Brute Force:** 
Serialize both trees into arrays (including `null` placeholders) and compare the arrays for equality. 
*   **Time:** $O(n + m)$
*   **Space:** $O(n + m)$

**Optimal Approach:** 
Use a recursive Depth-First Search (DFS) to compare nodes in tandem.
1.  If both nodes are `null`, return `true`.
2.  If one is `null` or values mismatch, return `false`.
3.  Recurse on both left children AND both right children simultaneously.
*   **Time:** $O(n)$ where $n$ is the number of nodes in the smaller tree.
*   **Space:** $O(h)$ where $h$ is the height of the tree (call stack).

**The 'Aha' Moment:** 
The problem asks to compare two structures simultaneously, which mirrors the recursive call stack: if the subtrees match the definition of "same," then the parent nodes matching is the only remaining condition.

**Summary:** 
Compare trees by traversing both in parallel and failing fast the moment a value or structural mismatch is encountered.

---