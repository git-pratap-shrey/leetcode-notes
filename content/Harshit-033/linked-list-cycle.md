---
title: "Linked List Cycle"
slug: linked-list-cycle
date: "2026-04-10"

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
bool hasCycle(struct ListNode *head) {

    struct ListNode* slow=head;
    struct ListNode* fast=head;

    while(fast!=NULL && fast->next!=NULL){
        slow=slow->next;
        fast=fast->next->next;
        if(slow==fast) return true;

        
    }

    return false;
    
}
~~~

# Submission Review
## Approach
*   **Technique:** Floyd's Cycle-Finding Algorithm (Tortoise and Hare).
*   **Optimality:** Optimal. It is the standard approach for cycle detection in a linked list, achieving the best possible time complexity with minimal space.

## Complexity
*   **Time Complexity:** $O(N)$, where $N$ is the number of nodes in the linked list. In the worst case, the fast pointer traverses the list twice.
*   **Space Complexity:** $O(1)$, as it only uses two auxiliary pointers regardless of input size.

## Efficiency Feedback
*   **Efficiency:** Excellent. The solution performs no redundant operations and terminates as soon as a cycle is detected or the end of the list is reached.
*   **Optimizations:** None required. This is the most efficient possible implementation.

## Code Quality
*   **Readability:** Good. The logic is concise and follows standard idiomatic patterns for this algorithm.
*   **Structure:** Good. The `while` loop condition correctly handles both empty lists and lists without cycles by checking `fast` and `fast->next` before traversal.
*   **Naming:** Good. `slow` and `fast` are the industry-standard names for this algorithm, making the intent immediately clear.
*   **Concrete Improvements:** None. The code is production-ready for its context.

---
---


# Question Revision
### Revision Report: Linked List Cycle

**Pattern:** Two Pointers (Floyd’s Cycle-Finding Algorithm)

**Brute Force:**
Store each visited `Node` object in a `HashSet`. If you encounter a node already present in the set, a cycle exists.
*   **Time:** $O(n)$
*   **Space:** $O(n)$

**Optimal Approach:**
Use two pointers moving at different speeds: a `slow` pointer (1 step) and a `fast` pointer (2 steps). If the `fast` pointer reaches the end (`null`), there is no cycle; if it meets the `slow` pointer, a cycle is confirmed.
*   **Time:** $O(n)$
*   **Space:** $O(1)$

**The 'Aha' Moment:**
Whenever a problem involves a sequence or data structure where nodes could potentially point back to a previous element, the "different speeds" approach effectively detects circular dependency without extra memory.

**Summary:**
Use two pointers at different speeds to detect cycles in constant space, because the faster pointer will eventually lap the slower one if a loop exists.

---
