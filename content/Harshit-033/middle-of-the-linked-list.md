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
- **Technique**: Two-pointer approach (Tortoise and Hare).
- **Optimality**: Optimal. It finds the middle node in a single pass without needing to calculate the length of the list first.

## Complexity
- **Time Complexity**: $O(N)$, where $N$ is the number of nodes in the linked list. Each node is visited at most once by the fast pointer.
- **Space Complexity**: $O(1)$. It uses only two additional pointers regardless of the input size.

## Efficiency Feedback
- **Runtime**: Extremely efficient. The fast pointer traverses the list at double speed, terminating the loop in $N/2$ iterations.
- **Memory**: Minimal. No auxiliary data structures are used, and no extra memory is allocated on the heap.

## Code Quality
- **Readability**: Good. The logic is concise and follows the standard idiomatic solution for this problem.
- **Structure**: Good. The function is compact and handles both even and odd-length lists correctly due to the `fast != NULL && fast->next != NULL` condition.
- **Naming**: Good. `slow` and `fast` are descriptive and standard for this algorithm.
- **Improvements**: 
    - The code contains some unnecessary trailing whitespace and empty lines at the end of the function which could be cleaned up.
    - Consistency: Ensure spaces around operators (e.g., `slow = head`) to match standard C style guides, though this is a minor aesthetic point.

---
---


# Question Revision
### Revision Report: Middle of the Linked List

**Pattern:** Two Pointers (Fast & Slow)

**Brute Force:**
Traverse the list once to count the total number of nodes ($n$), then traverse a second time to reach the index $\lfloor n/2 \rfloor$.
*   **Time Complexity:** $O(n)$
*   **Space Complexity:** $O(1)$

**Optimal Approach:**
Initialize two pointers (`slow` and `fast`) at the head. Move `slow` by one step and `fast` by two steps in each iteration. When `fast` reaches the end (or null), `slow` will be at the middle node.
*   **Time Complexity:** $O(n)$
*   **Space Complexity:** $O(1)$

**The 'Aha' Moment:**
Any problem requiring you to find a specific relative position in a sequence without knowing the total length beforehand is a primary candidate for the multi-speed pointer technique.

**Summary:**
When you need to find the midpoint of a linked structure, use a fast pointer moving at twice the speed of a slow pointer so the slow pointer lands exactly at the center when the fast pointer reaches the finish.

---
