---
title: "Delete the Middle Node of a Linked List"
slug: delete-the-middle-node-of-a-linked-list
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
struct ListNode* deleteMiddle(struct ListNode* head) {
    if(head==NULL) return head;
    if(head->next==NULL){
        head=NULL;
        return head;
    }
    
    struct ListNode* slow=head->next;
    struct ListNode* fast=head->next->next;
    struct ListNode* temp=head;

    while(fast!=NULL && fast->next!=NULL){
        slow=slow->next;
        fast=fast->next->next;
        temp=temp->next;
    }

    temp->next=slow->next;
    slow->next=NULL;
    free(slow);

    return head;

}
~~~

# Submission Review
## Approach
*   **Technique:** Two-pointer (slow/fast) approach to identify the middle node.
*   **Optimality:** Optimal. It performs a single pass through the list ($O(N)$) and uses constant extra space ($O(1)$).

## Complexity
*   **Time Complexity:** $O(N)$, where $N$ is the number of nodes in the linked list. The loop traverses approximately $N/2$ nodes.
*   **Space Complexity:** $O(1)$, as it only uses a fixed number of pointers regardless of input size.

## Efficiency Feedback
*   **Memory Management:** Correctly uses `free(slow)` to prevent memory leaks, which is critical in C environments.
*   **Logic:** The initialization of `slow` to `head->next` and `fast` to `head->next->next` correctly offsets the pointers to land `slow` exactly on the middle node (for cases with length $\ge 2$).

## Code Quality
*   **Readability:** Good. The logic is clear and follows standard pointer manipulation patterns.
*   **Structure:** Good. Handles edge cases (null list, single-node list) upfront.
*   **Naming:** Moderate. `temp` is vague; `prev` or `slow_prev` would better describe its role as the node preceding the one to be deleted.
*   **Concrete Improvements:** 
    *   **Style:** Instead of manually setting `head = NULL` inside the `head->next == NULL` block, you could simply `free(head)` to ensure consistent memory management.
    *   **Safety:** The `if (head == NULL)` check is good, but `if (head->next == NULL)` could be combined with the later pointer arithmetic if preferred, though keeping them separate as-is is perfectly acceptable for readability. 
    *   **Refinement:** The current implementation manually sets `slow->next = NULL` before freeing `slow`. While safe, this is redundant as `slow` is being deallocated anyway. The critical operation is updating `temp->next` to bypass `slow`.

---
---


# Question Revision
### Revision Report: Delete the Middle Node of a Linked List

**Pattern:** Fast and Slow Pointers (Tortoise and Hare)

**Brute Force:**
1. Traverse the entire list once to count the total nodes ($n$).
2. Calculate the middle index as $n // 2$.
3. Traverse the list a second time to reach the node at index $(n // 2) - 1$.
4. Update the `next` pointer of that node to skip the middle node.
*   **Time:** $O(n)$
*   **Space:** $O(1)$

**Optimal Approach:**
1. Use a `slow` pointer (moves 1 step) and a `fast` pointer (moves 2 steps).
2. Maintain a `prev` pointer to track the node immediately before `slow`.
3. When `fast` reaches the end, `slow` will be at the middle.
4. Perform `prev.next = slow.next` to remove the node.
*   **Time:** $O(n)$
*   **Space:** $O(1)$

**The 'Aha' Moment:**
When a problem requires locating a position relative to the end of a list without knowing its total length, dual pointers moving at different speeds allow you to find that target in a single pass.

**Summary:** 
Use the Fast and Slow pointer pattern whenever you need to find the "middle" or perform an operation relative to the end of a linked list in a single traversal.

---
