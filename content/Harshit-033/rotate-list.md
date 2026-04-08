---
title: "Rotate List"
slug: rotate-list
date: "2026-04-08"

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
struct ListNode* rotateRight(struct ListNode* head, int k) {
    struct ListNode* temp=head;
    if(head==NULL) return 0;
    int len=1;
    while(temp->next!=NULL){
            temp=temp->next;
            len++;
    }

    k=k%len;
    if(k==0) return head;
    k=len-k;
    
    struct ListNode* temp2=head;

    while(k>1){
        temp2=temp2->next;
        k--;
    }
    temp->next=head;
    head=temp2->next;
    temp2->next=NULL;


    return head;

    
}
~~~

# Submission Review
## Approach
*   **Technique:** Linked List manipulation (Circularization).
*   **Optimal:** Yes. The approach correctly calculates the length, handles the rotation offset via modulo, and performs a single pass to re-link the list.

## Complexity
*   **Time Complexity:** $O(N)$, where $N$ is the number of nodes. The algorithm performs one full traversal to find the tail and length, and a second partial traversal to find the new split point.
*   **Space Complexity:** $O(1)$, as it operates in-place using only pointer variables.

## Efficiency Feedback
*   **High Efficiency:** The logic is memory-efficient and avoids unnecessary data copying.
*   **Edge Case Handling:** The code correctly handles an empty list and cases where $k$ is a multiple of list length (`k % len == 0`).

## Code Quality
*   **Readability:** Good. The logic flow is straightforward and easy to follow.
*   **Structure:** Good. The function follows a clear linear path of operations.
*   **Naming:** Moderate. `temp` and `temp2` are generic; `tail` and `new_tail` would be more descriptive.
*   **Improvements:**
    *   **Return value:** The line `if(head==NULL) return 0;` should ideally return `NULL` for consistency with the return type, rather than an integer `0`.
    *   **Robustness:** While not explicitly required for competitive programming, adding a check for `head->next == NULL` immediately after the null check can save an unnecessary `len` calculation for single-node lists.
    *   **Documentation:** The variable `k` is reused for two different purposes (the initial rotation amount and the target index for the new tail). While not a bug, it makes the code slightly harder to debug; consider using a separate variable like `steps_to_new_tail`.

---
---


# Question Revision
### Revision Report: Rotate List

**Pattern:** Linked List / Cycle Detection

**Brute Force:** 
Iterate through the list to find the tail and length $k$. For each rotation, remove the last node and insert it at the head.
*   **Time Complexity:** $O(n \times k)$
*   **Space Complexity:** $O(1)$

**Optimal Approach:**
1. Calculate the length $n$ of the list and convert it into a **circular linked list** by connecting the tail to the head.
2. Determine the effective rotation $k = k \pmod n$. 
3. The new tail is at position $(n - k - 1)$ from the head. Move to that node, break the circle, and set the new head as the next node.
*   **Time Complexity:** $O(n)$
*   **Space Complexity:** $O(1)$

**The 'Aha' Moment:**
When a list operation involves wrapping around the end, treating the linked list as a circular structure by connecting the tail to the head eliminates the need for complex boundary tracking.

**Summary:** 
Convert the list into a ring to turn rotation into a simple "cut-and-relink" operation at the $(n - k)$ position.

---
