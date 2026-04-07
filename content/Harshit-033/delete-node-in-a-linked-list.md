---
title: "Delete Node in a Linked List"
slug: delete-node-in-a-linked-list
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
void deleteNode(struct ListNode* node) {
    while(node->next->next!=NULL){
        node->val=node->next->val;
        node=node->next;
    }
    node->val=node->next->val;
    free(node->next);
    node->next=NULL;
    
}
~~~

# Submission Review
## Approach
*   **Technique:** Iterative value-shifting (copying values forward until the second-to-last node).
*   **Optimal:** No. The standard optimal approach for this problem is an $O(1)$ operation that simply copies the value of the *next* node into the current node and skips the next node (`node->val = node->next->val; node->next = node->next->next;`).

## Complexity
*   **Time Complexity:** $O(N)$, where $N$ is the distance from the target node to the end of the list.
*   **Space Complexity:** $O(1)$.
*   **Bottleneck:** The solution traverses the remainder of the list to shift values, whereas the problem constraints (which usually imply you aren't given the head) are specifically designed to allow an $O(1)$ pointer reassignment.

## Efficiency Feedback
*   **Performance:** The current approach performs unnecessary memory writes and traversals.
*   **Safety:** The `free(node->next)` call is technically undefined behavior in the context of typical LeetCode-style platform environments, as the memory for the nodes is usually managed by the caller (the test runner). You should never `free` nodes unless you explicitly allocated them.

## Code Quality
*   **Readability:** Moderate. The logic is easy to follow but unnecessarily complex.
*   **Structure:** Poor. The code performs unnecessary `free` calls and uses an iterative loop for a task that requires a single assignment.
*   **Naming:** Good. `node` follows standard conventions.
*   **Concrete Improvements:**
    *   Remove the `while` loop entirely.
    *   Replace the entire body with these two lines:
        ```c
        struct ListNode* temp = node->next;
        node->val = temp->val;
        node->next = temp->next;
        ```
    *   Do not call `free()` unless specified by the problem memory model.

---
---


# Question Revision
### Revision Report: Delete Node in a Linked List

**Pattern:** Linked List Mutation (Node Value Manipulation)

**Brute Force:**
Traverse from the `head` to find the node previous to the target, update the `next` pointer to skip the target, and handle the case where the target is the head.
*   **Time Complexity:** $O(n)$
*   **Space Complexity:** $O(1)$

**Optimal Approach:**
Since you do not have access to the `head` of the list, copy the value of the `next` node into the current node and update the current node’s `next` pointer to skip the successor. 
*   **Time Complexity:** $O(1)$
*   **Space Complexity:** $O(1)$

**The 'Aha' Moment:**
When the problem provides a reference to the node to be deleted but denies you access to the `head` of the list, you must realize you are being asked to "fake" the deletion by overwriting the node's identity rather than re-linking the list from the start.

**Summary:**
If you cannot traverse the list to find the predecessor, overwrite the current node with the successor's data and skip the successor instead.

---
