---
title: "Odd Even Linked List"
slug: odd-even-linked-list
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
struct ListNode* oddEvenList(struct ListNode* head) {
    if(head==NULL || head->next==NULL) return head;

    struct ListNode* a=head;
    struct ListNode* b=head->next;
    struct ListNode* c=b->next;
    struct ListNode* x=b;

    if(head->next->next==NULL) return head;

    while(b->next!=NULL){
        a->next=b->next;
        b->next=c->next;
        c->next=x;
        if(b->next==NULL) break;
        b=b->next;
        a=c;
        c=b->next;
    }

    return head;
    
}
~~~

# Submission Review
## Approach
*   **Technique:** In-place pointer manipulation (Three-pointer sliding window).
*   **Optimal:** No. The logic is overly complex and fragile. It attempts to weave the lists by re-inserting nodes into the odd/even chains, which is less efficient and harder to maintain than the standard "two-chain separation" approach.

## Complexity
*   **Time Complexity:** $O(N)$, where $N$ is the number of nodes. Every node is visited once.
*   **Space Complexity:** $O(1)$, as only a constant number of pointers are used.

## Efficiency Feedback
*   **Runtime:** The algorithm performs unnecessary pointer swaps inside the loop. The logic `c->next = x` inside the loop causes the "even" chain to be repeatedly re-attached to the list.
*   **Optimization:** A much simpler approach is to maintain two separate heads (`oddHead`, `evenHead`) and two tail pointers. Iterate once, appending odd nodes to the odd tail and even nodes to the even tail, then connect `oddTail->next = evenHead` at the end. This eliminates the need for complex swapping logic.

## Code Quality
*   **Readability:** **Poor**. The variable names (`a`, `b`, `c`, `x`) are non-descriptive, making it difficult to track the state of the pointers (which are intended to represent `odd`, `even`, and `next` nodes).
*   **Structure:** **Moderate**. It handles edge cases (`NULL`, short lists) early, which is good, but the loop structure is brittle.
*   **Naming:** **Poor**. Single-letter identifiers do not convey their purpose in a list-processing context.
*   **Concrete Improvements:**
    *   Rename variables to `odd`, `even`, `evenHead`, and `curr`.
    *   Use the standard pattern:
        ```c
        struct ListNode* odd = head;
        struct ListNode* even = head->next;
        struct ListNode* evenHead = even;
        while (even && even->next) {
            odd->next = even->next;
            odd = odd->next;
            even->next = odd->next;
            even = even->next;
        }
        odd->next = evenHead;
        ```
    *   This eliminates the need for the `if(head->next->next==NULL)` check and the complex `c->next = x` logic.

---
---


# Question Revision
### Revision Report: Odd Even Linked List

**Pattern:** Two Pointers / In-place Link Manipulation

**Brute Force:** 
Extract all node values into an auxiliary array, sort them into odd-indexed and even-indexed positions, then overwrite the linked list values.
*   **Time:** $O(n)$
*   **Space:** $O(n)$

**Optimal Approach:**
Use two pointers (`odd` and `even`) to track the heads of two separate chains. Iterate through the list, re-linking `odd.next` to `odd.next.next` and `even.next` to `even.next.next`. Finally, append the `even` head to the tail of the `odd` list.
*   **Time:** $O(n)$
*   **Space:** $O(1)$

**The 'Aha' Moment:**
When a problem asks to rearrange nodes based on their relative index (parity) without requiring new node allocation, think of "de-interleaving" a single list into two distinct paths and merging them at the end.

**Summary:**
Maintain two separate pointers tracking the odd and even chains, re-linking their `.next` references until the end, then join the two chains.

---
