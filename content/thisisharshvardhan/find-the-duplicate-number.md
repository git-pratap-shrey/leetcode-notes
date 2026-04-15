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
- **Optimality:** Optimal. It finds the duplicate in linear time without modifying the input array and using constant extra space, which satisfies the typical constraints of this problem.

## Complexity
- **Time Complexity:** $O(n)$ — The first phase (finding the meeting point) and the second phase (finding the entrance to the cycle) both traverse at most $n$ elements.
- **Space Complexity:** $O(1)$ — Only two integer variables (`slow`, `fast`) are used regardless of input size.

## Efficiency Feedback
- **Runtime:** Highly efficient. It avoids the overhead of hash maps or sorting.
- **Memory:** Minimal footprint.

## Code Quality
- **Readability:** Moderate. The logic is clear to those familiar with the algorithm, but the lack of whitespace and comments makes it dense.
- **Structure:** Good. The separation between the cycle detection phase and the cycle entrance phase is logically sound.
- **Naming:** Good. `slow` and `fast` are industry-standard names for this specific algorithm.
- **Concrete Improvements:**
    - Remove the double semicolon (`;;`) after the first `while` loop.
    - Add consistent indentation and spacing around operators (e.g., `slow = nums[slow]`) for better legibility.
    - The initialization `int slow = nums[0]` and `int fast = nums[0]` is correct, but since the `do-while` loop immediately advances them, it is functionally equivalent to starting them at the same point.

---

# Question Revision
### Find the Duplicate Number

**Pattern:** Floyd's Cycle-Finding Algorithm (Tortoise and Hare)

**Brute Force:** Sort the array and check for adjacent identical elements, or use a Frequency Map/Hash Set to track seen numbers.
*   **Complexity:** Time $O(n \log n)$ (sorting) or $O(n)$ (set); Space $O(1)$ (sorting) or $O(n)$ (set).

**Optimal Approach:** Treat the array as a linked list where `index i` points to `value array[i]`. Because a duplicate exists and values are within the range $[1, n]$, a cycle is guaranteed.
1.  **Phase 1:** Move `slow` one step and `fast` two steps until they collide inside the cycle.
2.  **Phase 2:** Reset `slow` to the start. Move both pointers one step at a time; the point where they meet is the entrance to the cycle, which is the duplicate number.
*   **Time Complexity:** $O(n)$
*   **Space Complexity:** $O(1)$

**The 'Aha' Moment:** The constraint that values are between $1$ and $n$ in an array of size $n+1$ means the array can be modeled as a directed graph where a duplicate value is a node with two incoming edges, inevitably creating a cycle.

**Summary:** Treat the array as a linked list and find the entrance of the cycle using two pointers.

---