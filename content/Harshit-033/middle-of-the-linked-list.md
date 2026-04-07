---
title: "Middle of the Linked List"
slug: middle-of-the-linked-list
date: "2026-04-06"

---
---

# My Solution
~~~c
/**
 * Definition for singly-linked list.
 * struct ListNode {
 *     int val;
 *     struct ListNode *next;
 * };
 */
struct ListNode* middleNode(struct ListNode* head) {
    struct ListNode* slow=head;
    struct ListNode* fast=head;
    while(fast!=NULL && fast->next!=NULL){
        slow=slow->next;
        fast=fast->next->next;
        
    }

    return slow;
    
    
}
~~~

# Submission Review
## Approach
- **Technique:** Two-pointer technique (Tortoise and Hare).
- **Optimality:** Optimal. It finds the middle node in a single pass without requiring extra space for storage (like an array or counter).

## Complexity
- **Time Complexity:** $O(n)$, where $n$ is the number of nodes in the linked list. The `fast` pointer traverses the list once.
- **Space Complexity:** $O(1)$, as only two pointers are used regardless of input size.

## Efficiency Feedback
- **Runtime/Memory:** Highly efficient. It is the standard approach for this problem.
- **Optimizations:** No further optimizations are necessary.

## Code Quality
- **Readability:** Good. The logic is standard, concise, and easy to follow.
- **Structure:** Good. Minimal boilerplate; fits the idiomatic C approach for linked list manipulation.
- **Naming:** Good. `slow` and `fast` are standard, industry-recognized names for this specific algorithm.
- **Improvements:**
    - The code is functionally complete.
    - Minor: The trailing empty lines could be removed for cleaner formatting.
    - Safety: Since the problem constraints (typically found on platforms like LeetCode) guarantee a non-empty list, the code is safe. If the list could be `NULL`, the current implementation handles it correctly by returning `NULL`.

---
---


# Question Revision
### Revision Report: Middle of the Linked List

**Pattern:** Two Pointers (Slow and Fast)

**Brute Force:**
1. Traverse the list once to count the total nodes ($n$).
2. Traverse a second time up to $n/2$ to reach the middle node.
*   **Time Complexity:** $O(n)$ (two passes)
*   **Space Complexity:** $O(1)$

**Optimal Approach:**
Initialize two pointers, `slow` and `fast`, at the head. In each iteration, move `slow` one step and `fast` two steps. When `fast` reaches the end (or null), `slow` will be exactly at the middle.
*   **Time Complexity:** $O(n)$ (single pass)
*   **Space Complexity:** $O(1)$

**The 'Aha' Moment:**
Whenever a problem requires finding a relative position (like the middle or $k$-th element) in a list without knowing its length upfront, two pointers moving at different speeds will naturally solve it in a single pass.

**Summary:** 
Use the "Tortoise and Hare" strategy when you need to find a destination based on traversal speed rather than index count.

---
