---
title: "Reverse Linked List"
slug: reverse-linked-list

---
---

# My Solution
~~~java
/**
 * Definition for singly-linked list.
 * public class ListNode {
 *     int val;
 *     ListNode next;
 *     ListNode() {}
 *     ListNode(int val) { this.val = val; }
 *     ListNode(int val, ListNode next) { this.val = val; this.next = next; }
 * }
 */
class Solution {
    public ListNode reverseList(ListNode head) {
        ListNode prev = null;
        ListNode curr = head;
        ListNode next = null;
        while(curr!=null){
            next = curr.next;
            curr.next = prev;
            prev = curr;
            curr = next;
        }
        return prev;
    }
}
~~~

# Submission Review
## Approach
- **Technique:** Iterative pointer manipulation.
- **Optimality:** Optimal. It traverses the list exactly once and modifies pointers in place without requiring extra auxiliary data structures.

## Complexity
- **Time Complexity:** $O(n)$, where $n$ is the number of nodes in the linked list, as we perform a single pass.
- **Space Complexity:** $O(1)$, as we only use a constant amount of extra space for pointers.

## Efficiency Feedback
- The implementation is highly efficient. It performs the minimum number of pointer assignments (3 per node) required to reverse the direction of the linked list. 
- No recursion overhead is incurred, preventing potential `StackOverflowError` on very large lists.

## Code Quality
- **Readability:** Good. The logic is standard and follows well-understood idiomatic patterns for reversing a linked list.
- **Structure:** Good. The loop condition (`curr != null`) correctly handles both empty lists and standard cases.
- **Naming:** Good. `prev`, `curr`, and `next` are standard and descriptive in the context of linked list manipulations.
- **Improvements:** The code is idiomatic and clean; no concrete functional changes are necessary.

---
---


# Question Revision
### Revision Report: Reverse Linked List

**Pattern:** Iterative Pointer Manipulation

**Brute Force:** 
Store all node values in an array, reverse the array, and overwrite the linked list values.
*   **Time:** $O(n)$
*   **Space:** $O(n)$

**Optimal Approach:**
Use three pointers (`prev`, `curr`, `next`) to reassign the `next` pointer of each node to its predecessor as you traverse the list.
*   **Logic:**
    1. Save `curr->next` in a temporary variable (`next`).
    2. Point `curr->next` to `prev`.
    3. Advance `prev` and `curr` forward.
*   **Time:** $O(n)$
*   **Space:** $O(1)$

**The 'Aha' Moment:**
When the problem requires changing the structural direction of a linear data structure without additional storage, think of maintaining a "sliding window" of three pointers to bridge the broken connections in real-time.

**Summary:**
Reverse a linked list by keeping track of the previous node to flip the `next` pointer before moving to the next node in the original sequence.

---
