---
title: "Candy"
slug: candy
date: "2026-09-30"
---

# My Solution
~~~cpp
/**
 * Definition for singly-linked list.
 * struct ListNode {
 *     int val;
 *     ListNode *next;
 *     ListNode(int x) : val(x), next(NULL) {}
 * };
 */
class Solution {
public:
    void deleteNode(ListNode* node) {
        node->val=node->next->val;
        node->next=node->next->next;
    }
};
~~~

# Submission Review
## Approach
- **Technique**: Value shifting. Instead of removing the node from the chain (which requires access to the previous node), the code copies the data from the next node into the current node and bypasses the next node.
- **Optimality**: Optimal for the specific constraint where only the node to be deleted is provided.

## Complexity
- **Time Complexity**: $O(1)$ - Performs a constant number of assignments.
- **Space Complexity**: $O(1)$ - No additional memory allocated.

## Efficiency Feedback
- The implementation is maximally efficient for the given problem constraints. No further optimizations are possible.

## Code Quality
- **Readability**: Good. The logic is concise and straightforward.
- **Structure**: Good.
- **Naming**: Good.
- **Improvements**: 
    - The code does not check if `node` or `node->next` is `NULL`. While typically guaranteed by problem constraints in this specific LeetCode problem, adding a null check would make the function more robust for production use.

---

# Question Revision
# Revision Report: Candy (LeetCode)

- **Pattern:** Greedy / Two-Pass Array
- **Brute Force:** Use a graph-based approach or iterative updates. Repeatedly scan the array and increment candies for any child who has a higher rating than their neighbor but doesn't have more candies, continuing until no more changes occur.
- **Optimal Approach:**
    - **Logic:** Split the problem into two independent constraints: (1) the child must have more candies than their left neighbor, and (2) the child must have more than their right neighbor.
        1. Initialize a `candies` array with 1s.
        2. **Left-to-Right Pass:** If `ratings[i] > ratings[i-1]`, set `candies[i] = candies[i-1] + 1`.
        3. **Right-to-Left Pass:** If `ratings[i] > ratings[i+1]`, set `candies[i] = max(candies[i], candies[i+1] + 1)`.
        4. Sum the `candies` array.
    - **Complexity:** Time: $O(n)$ | Space: $O(n)$ (or $O(1)$ if the output array is not counted).
- **The 'Aha' Moment:** The local dependency on both the left and right neighbors suggests that a single pass cannot satisfy both constraints simultaneously, necessitating two decoupled passes.
- **Summary:** Satisfy the left-neighbor constraint first, then the right-neighbor constraint using `max()` to preserve the first pass's requirements.

---