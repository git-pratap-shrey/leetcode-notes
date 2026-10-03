---
title: "Maximum Equal Adjacent Pairs After at Most One Replacement"
slug: maximum-equal-adjacent-pairs-after-at-most-one-replacement
date: "2026-09-27"
---

# My Solution
~~~cpp
/**
 * Definition for singly-linked list.
 * struct ListNode {
 *     int val;
 *     ListNode *next;
 *     ListNode() : val(0), next(nullptr) {}
 *     ListNode(int x) : val(x), next(nullptr) {}
 *     ListNode(int x, ListNode *next) : val(x), next(next) {}
 * };
 */
class Solution {
public:
   ListNode* addTwoNumbers(ListNode* l1, ListNode* l2) {
      ListNode* dummy = new ListNode(0);
      ListNode* curr = dummy;

      int carry = 0;

      while (l1 != NULL || l2 != NULL || carry != 0) {
         int sum = carry;

          if (l1 != NULL) {
             sum += l1->val;
              l1 = l1->next;
      }

        if (l2 != NULL) {
             sum += l2->val;
             l2 = l2->next;
         }
         carry = sum / 10;
          int digit = sum % 10;

          curr->next = new ListNode(digit);
           curr = curr->next;
      }

       return dummy->next;
  }
};


~~~

# Submission Review
## Approach
- **Technique**: Simulation of manual addition (Two-pointer traversal of linked lists).
- **Optimality**: Optimal. The algorithm processes each node once and uses the minimum required space for the result.
- **Crucial Note**: The provided code solves **"Add Two Numbers"**, completely ignoring the requested problem **"Maximum Equal Adjacent Pairs After at Most One Replacement"**.

## Complexity
- **Time Complexity**: $O(\max(N, M))$, where $N$ and $M$ are the lengths of the two linked lists.
- **Space Complexity**: $O(\max(N, M))$ to store the result list.

## Efficiency Feedback
- The runtime and memory usage are optimal for this specific problem logic.
- **Minor Optimization**: One could reuse the existing nodes of `l1` or `l2` to store the result to achieve $O(1)$ auxiliary space, though this is typically not required unless specified.

## Code Quality
- **Readability**: Moderate. Indentation is inconsistent (e.g., the `if (l1 != NULL)` block and the `while` loop closing braces).
- **Structure**: Good. The use of a dummy head simplifies linked list construction.
- **Naming**: Good. Variable names (`dummy`, `curr`, `carry`) are standard and descriptive.
- **Concrete Improvements**:
    - Fix indentation for consistency.
    - Use `nullptr` instead of `NULL` for modern C++ standards.
    - Ensure the solution matches the problem statement provided in the prompt.

---

# Question Revision
# Revision Report: Maximum Equal Adjacent Pairs After at Most One Replacement

- **Pattern:** Greedy / Case Analysis (Linear Scan)
- **Brute Force:** Iterate through every possible index $i$ and every possible replacement value (from the set of existing numbers), then recount all adjacent pairs. This would result in $O(n^2)$ or $O(n \cdot \text{unique elements})$.
- **Optimal Approach:** 
    - **Logic:** 
        1. Calculate the current number of adjacent pairs without any changes.
        2. Scan the array to find the maximum potential *gain* from changing one element $A[i]$.
        3. For each $A[i]$, the potential gain is: `(new pairs created with A[i-1] and A[i+1]) - (old pairs lost with A[i-1] and A[i+1])`.
        4. To maximize the gain, $A[i]$ should be changed to either $A[i-1]$ or $A[i+1]$.
    - **Complexity:** 
        - Time: $O(n)$ — Single pass to count current pairs and one pass to evaluate gains.
        - Space: $O(1)$ — Only a few variables to track counts and maximums.
- **The 'Aha' Moment:** The "at most one replacement" constraint implies a local change, meaning only the immediate neighbors of the modified element are affected.
- **Summary:** Evaluate the local net gain (new pairs minus lost pairs) for every element by tentatively changing it to match its neighbors.

---