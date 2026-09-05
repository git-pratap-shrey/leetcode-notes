---
title: "Leaf-Similar Trees"
slug: leaf-similar-trees
date: "2026-08-19"
---

# My Solution
~~~cpp
class Solution {
public:
    vector<int> resultArray(vector<int>& nums) {
        vector<int>arr1;
        vector<int>arr2;
        vector<int>result;
        arr1.push_back(nums[0]);
        arr2.push_back(nums[1]);
        int i=2;
        while(i<nums.size()) {
            if(arr1.back()>arr2.back()) {
                arr1.push_back(nums[i]);}
            else {
                arr2.push_back(nums[i]);}
            i++;
        }
        for(int m=0;m<arr1.size();m++) {
            result.push_back(arr1[m]);
        }
        for(int m=0;m<arr2.size();m++) {
            result.push_back(arr2[m]);
        }
        return result;
    }
};
~~~

# Submission Review
## Approach
*   **Technique:** Greedy simulation using two vectors.
*   **Correctness:** This code **does not solve the "Leaf-Similar Trees" problem**. It appears to be an attempt at "Distribute Elements Into Two Arrays I" (LeetCode 3069). As a solution for "Leaf-Similar Trees," it is entirely incorrect. 

## Complexity
*   **Time Complexity:** $O(N)$, where $N$ is the number of elements in `nums`.
*   **Space Complexity:** $O(N)$ to store the elements in two auxiliary vectors.
*   **Optimality:** Optimal for the "Distribute Elements Into Two Arrays" problem, but irrelevant to the stated problem.

## Efficiency Feedback
*   The use of `vector::back()` and `push_back()` is efficient ($O(1)$ amortized).
*   The final concatenation could be slightly improved using `insert` with iterators, though it remains $O(N)$.
*   **Memory:** The auxiliary vectors `arr1` and `arr2` could be pre-allocated using `reserve(nums.size() / 2)` to avoid multiple reallocations during `push_back`.

## Code Quality
*   **Readability:** Moderate. The logic is straightforward, but the code lacks comments.
*   **Structure:** Good. The logic follows a standard linear scan.
*   **Naming:** Poor. `arr1`, `arr2`, and `m` are generic and provide no context regarding the data's purpose.
*   **Concrete Improvements:**
    *   **Mismatch:** Address the fact that the code does not match the problem name provided.
    *   **Indexing:** Use a range-based for loop (e.g., `for (int i = 2; i < nums.size(); ++i)`) instead of a `while` loop with an external index increment to prevent potential off-by-one errors.
    *   **Pre-allocation:** Use `arr1.reserve(nums.size())` to reduce memory reallocations.

---

# Question Revision
### Revision Report: Leaf-Similar Trees

**Pattern:** Depth-First Search (DFS) / Tree Traversal

**Brute Force:**
Extract all leaves from both trees into two separate lists by traversing each tree completely, then compare the lists for equality.
*   **Time:** $O(T_1 + T_2)$ where $T$ is the total number of nodes in each tree.
*   **Space:** $O(L_1 + L_2)$ to store the leaf sequences.

**Optimal Approach:**
Use a generator (or an iterator) to yield leaves one by one. Compare leaves lazily; if you find a mismatch, terminate immediately without traversing the remaining parts of the trees.
*   **Time:** $O(T_1 + T_2)$ worst case; $O(1)$ best case (if first leaves differ).
*   **Space:** $O(H_1 + H_2)$ where $H$ is the height of the trees, used by the recursion stack.

**The 'Aha' Moment:**
When a problem asks to compare sequences derived from a structure, generating them lazily allows for early exit, transforming a full-traversal requirement into a short-circuiting comparison.

**Summary:**
Don't pre-calculate the entire leaf sequence if you can compare elements lazily using iterative DFS generators to save both time and memory.

---