---
title: "Path Sum"
slug: path-sum
date: "2026-08-18"
---

# My Solution
~~~cpp
class Solution {
public:
    bool uniformArray(vector<int>& nums1) {
        int mn = nums1[0];
        bool hasOdd = false;
        for (int v : nums1) {
            if (v < mn) {
                mn = v;
            }
            if (v & 1) {
                hasOdd = true;
            }
        }
        if (mn & 1) {
            return true;
        }
        return !hasOdd;
    }
};
~~~

# Submission Review
## Approach
*   **Technique:** Iterative property checking.
*   **Optimal:** Yes. The logic checks if all elements can be made uniform based on parity rules (if the minimum is odd, all numbers can be made odd; if no numbers are odd, they remain even).

## Complexity
*   **Time Complexity:** $O(N)$, where $N$ is the size of `nums1`. The code performs a single pass over the array.
*   **Space Complexity:** $O(1)$, as it only uses a few integer/boolean variables regardless of input size.

## Efficiency Feedback
*   The runtime is optimal for the given task. 
*   **Optimization:** The loop could potentially terminate early if `hasOdd` is true AND `mn` is confirmed to be even, but given the current logic, the code must scan all elements to determine the global `mn`. No meaningful optimization is available.

## Code Quality
*   **Readability:** Good. The logic is straightforward and easy to follow.
*   **Structure:** Good. The function is concise and self-contained.
*   **Naming:** Moderate. `uniformArray` is somewhat ambiguous; `canMakeUniform` or `canEqualizeParity` would be more descriptive. `nums1` is generic and could be renamed to `nums`.
*   **Concrete Improvements:**
    *   Use `std::min_element` to find the minimum value instead of a manual loop to improve conciseness, though the manual loop is acceptable since you are already iterating for the `hasOdd` check.
    *   Consider `const vector<int>& nums` to avoid unnecessary copying (though here it is passed by reference, so it is already efficient).
    *   Input validation: The code assumes `nums1` is not empty (accesses `nums1[0]`). Add a check for `nums1.empty()` to prevent undefined behavior.

---

# Question Revision
### Revision Report: Path Sum

**Pattern:** Depth-First Search (DFS) / Recursion

**Brute Force:** 
Generate all possible paths from root to leaf, store them in a list, and check if the sum of any path equals the target. This requires $O(n)$ space just to store paths and multiple passes to traverse.

**Optimal Approach:** 
Use a recursive function that subtracts the current node's value from the `targetSum` as you traverse down. If you reach a leaf node (`left == null && right == null`) and the remaining `targetSum` equals the node's value, return `true`.
*   **Time Complexity:** $O(n)$, where $n$ is the number of nodes, as we visit each node exactly once.
*   **Space Complexity:** $O(h)$, where $h$ is the height of the tree (recursion stack depth). In the worst case (skewed tree), $O(n)$.

**The 'Aha' Moment:** 
The problem asks for a property that must be satisfied by a specific path from root to leaf, which is a classic signal that recursive state passing (carrying the remaining sum) is more efficient than collecting all paths.

**Summary:** 
Subtract the current node value from the target as you descend, and return `true` only if you hit a leaf with a remaining balance of zero.

---