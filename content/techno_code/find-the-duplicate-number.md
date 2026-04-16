---
title: "Find the Duplicate Number"
slug: find-the-duplicate-number
date: "2026-04-10"
---

# My Solution
~~~cpp
class Solution {
public:
    int findDuplicate(vector<int>& nums) {
       int slow=nums[0];
       int fast=nums[0];
       do{
        slow=nums[slow];
        fast=nums[nums[fast]];
       }while(slow!=fast);;

       slow=nums[0];
       while(slow!=fast){
        slow=nums[slow];
        fast=nums[fast];
       }
       return slow;

    }
};
~~~

# Submission Review
## Approach
- **Technique:** Floyd's Cycle-Finding Algorithm (Tortoise and Hare).
- **Optimality:** Optimal. It finds the duplicate in linear time and constant space without modifying the input array.

## Complexity
- **Time Complexity:** $O(n)$
- **Space Complexity:** $O(1)$

## Efficiency Feedback
- The implementation is highly efficient as it avoids extra memory allocation and minimizes operations per iteration.
- No meaningful optimizations are available for this approach.

## Code Quality
- **Readability:** Moderate. The logic is standard, but the lack of spacing around operators and inside blocks makes it feel cramped.
- **Structure:** Good. The two-phase cycle detection is implemented cleanly.
- **Naming:** Good. `slow` and `fast` are the conventional names for this algorithm.
- **Improvements:** 
    - Remove the double semicolon (`;;`) after the `do-while` loop.
    - Add consistent whitespace around operators (e.g., `int slow = nums[0];` instead of `int slow=nums[0];`) to improve legibility.
    - Add a comment explaining the two phases (Detection and Entrance Finding) for better maintainability.

---

# Question Revision
### Revision Report: Find the Duplicate Number

**Pattern:** Cycle Detection (Floyd's Tortoise and Hare)

**Brute Force:**
Sort the array and check for adjacent identical elements, or use a Hash Set to track seen numbers.
*   **Time:** $O(n \log n)$ or $O(n)$
*   **Space:** $O(1)$ (if sorting is allowed) or $O(n)$

**Optimal Approach:**
Treat the array as a linked list where the value at `index` is the pointer to the next `index`. Since a duplicate exists, a cycle is guaranteed.
1.  **Phase 1:** Use a `slow` pointer (1 step) and `fast` pointer (2 steps) until they meet inside the cycle.
2.  **Phase 2:** Reset `slow` to the start (index 0); move both `slow` and `fast` one step at a time. The point where they meet is the duplicate number.

*   **Time:** $O(n)$
*   **Space:** $O(1)$

**The 'Aha' Moment:**
The constraint that values are between $1$ and $n$ within an array of size $n+1$ means every value can be treated as a valid index, mapping the array into a directed graph.

**Summary:**
Treat array indices as pointers to detect the entrance of a cycle using two pointers.

---