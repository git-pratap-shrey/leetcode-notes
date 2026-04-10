---
title: "Reverse Nodes in k-Group"
slug: reverse-nodes-in-k-group
date: "2026-04-10"

---
---

# My Solution
~~~c
struct ListNode* getk(struct ListNode* head1, int k) {
    struct ListNode* temp = head1;
    while (k > 1) {
        if (temp == NULL || temp->next == NULL)
            return NULL;
        temp = temp->next;
        k--;
    }
    return temp;
}

struct ListNode* reversenode(struct ListNode* head1, struct ListNode* knode,
                             struct ListNode* knext) {
    struct ListNode* prev = knext;
    struct ListNode* curr = head1;
    struct ListNode* temp;

    while (curr != knext) {
        temp = curr->next;
        curr->next = prev;
        prev = curr;
        curr = temp;
    }

    return prev;
}

struct ListNode* reverseKGroup(struct ListNode* head, int k) {
    if (k == 1 || head == NULL)
        return head;

    struct ListNode* head1 = head;
    struct ListNode* knode;
    struct ListNode* knext;
    struct ListNode* prev = NULL;
    int i = 1;

    while (true) {
        knode = getk(head1, k);
        if (knode == NULL)
            break;

        knext = knode->next;
        struct ListNode* result;

        result = reversenode(head1, knode, knext);

        if (i == 1) {
            head = result;
            i = 0;
        } else {
            prev->next = result;
        }

        prev = head1;
        head1 = knext;
    }

    return head;
}
~~~

# Submission Review
## Approach
*   **Technique:** Iterative pointer manipulation (in-place linked list reversal).
*   **Optimality:** Optimal. The algorithm processes each node a constant number of times (traversing to find $k$ and reversing segments), achieving $O(N)$ time and $O(1)$ auxiliary space.

## Complexity
*   **Time Complexity:** $O(N)$, where $N$ is the number of nodes in the list. Each node is visited twice at most.
*   **Space Complexity:** $O(1)$, as it uses a constant amount of extra space for pointers regardless of input size.

## Efficiency Feedback
*   **Performance:** The current implementation is efficient. It correctly links segments by passing the "next" node (`knext`) as the initial `prev` pointer to `reversenode`, which avoids extra list traversal after the reversal.
*   **Minor Improvement:** The variable `i` is used as a flag for the first group. This could be simplified by using a dummy head node to handle the first group consistently with subsequent groups, eliminating the conditional `if (i == 1)` branch inside the loop.

## Code Quality
*   **Readability:** Good. The logic is segmented into logical helper functions.
*   **Structure:** Moderate. The `while (true)` loop combined with a break condition is acceptable, but using a dummy head would make the structure cleaner.
*   **Naming:** Moderate. `head1` and `knode` are descriptive enough, but `knext` is a bit ambiguous; `nextGroupStart` would be more precise.
*   **Concrete Improvements:**
    1.  **Dummy Node:** Initialize `struct ListNode dummy; dummy.next = head;`. Keep a `prevTail` pointer starting at `&dummy`. This removes the `i` flag and the special case for the head of the list.
    2.  **Safety:** `getk` is robust, but the `while(true)` approach assumes well-formed lists; current checks are sufficient.
    3.  **Variable Scope:** The `reversenode` function signature takes `knode`, but never uses it. It can be removed to clean up the function interface.

---
---


# Question Revision
### Revision Report: Reverse Nodes in k-Group

**Pattern:** Linked List Manipulation / Dummy Node + Pointer Reversal

**Brute Force:**
Identify groups of size $k$ by traversing the list, store nodes in an array, reverse the array elements, and re-link the nodes.
*   **Time Complexity:** $O(n)$
*   **Space Complexity:** $O(k)$ (or $O(n)$ if storing all nodes)

**Optimal Approach:**
Use a **dummy head** to simplify edge cases. Calculate the list length first, then use a `prev` pointer to track the tail of the last processed group and a `curr` pointer to reverse the next $k$ nodes in place by adjusting `next` pointers.
*   **Time Complexity:** $O(n)$ (Each node is visited twice: once for length, once for reversal)
*   **Space Complexity:** $O(1)$

**The 'Aha' Moment:**
When the problem constraints require processing "chunks" of a linked list with a fixed size and re-linking them, treat each chunk as an isolated sub-problem requiring a `prev`, `curr`, and `next` pointer sequence to perform an in-place reversal.

**Summary:**
Always count the nodes first to validate if a full $k$-group exists, then use a `dummy` node and iterative pointer swapping to maintain connection integrity between reversed segments.

---
