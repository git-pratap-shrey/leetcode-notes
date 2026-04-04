---
title: "Reverse Linked List II"
slug: reverse-linked-list-ii

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
    public ListNode reverseBetween(ListNode head, int left, int right) {
        if(left == right){
            return head;
        }
        ListNode prev = null;
        ListNode current = head;
        for(int i=0;current!=null && i<left-1;i++){
            prev = current;
            current= current.next;
        }
        ListNode last = prev;
        ListNode newend = current;
        ListNode next = current.next;
        for(int i=0;current!=null && i<right-left+1;i++){
            current.next = prev;
            prev = current;
            current = next;
            if(next!=null){
                next = next.next;
            }
        }
        if(last!=null){
            last.next = prev;
        }
        else{
            head = prev;
        }
        newend.next = current;
        return head;
    }
}
~~~

# Submission Review
## Approach
*   **Technique:** In-place iterative pointer manipulation.
*   **Optimality:** Optimal. It performs a single pass over the required segment of the list using $O(1)$ extra space.

## Complexity
*   **Time Complexity:** $O(N)$, where $N$ is the number of nodes in the linked list. We traverse the list at most once.
*   **Space Complexity:** $O(1)$, as only a constant number of pointers are used for tracking state.

## Efficiency Feedback
*   **Performance:** The implementation is highly efficient. It minimizes node visits and performs only necessary pointer reassignments.
*   **Potential Improvement:** The `current != null` check in the second `for` loop is technically redundant if the problem constraints guarantee that `right` is always within the bounds of the list (which is typical for LeetCode constraints), but it serves as a good safety measure against null pointer exceptions.

## Code Quality
*   **Readability:** Good. The logic is straightforward, though the block of code inside the second loop is dense.
*   **Structure:** Good. The separation between finding the starting point and performing the reversal is logical.
*   **Naming:** Moderate. `newend` is slightly confusing; `sublistHead` or `segmentStart` would better describe its role as the node that becomes the tail of the reversed section.
*   **Concrete Improvements:**
    *   **Commentary:** Add a brief comment explaining the role of `last` (node before the reversed segment) and `newend` (the node that becomes the tail of the reversed segment).
    *   **Loop readability:** The `if (next != null)` check inside the loop is correct, but can be simplified by observing that the final assignment `current = next` handles the progression naturally.
    *   **Guard Clauses:** The initial `if(left == right)` is a good practice for early exits.

---
---


# Question Revision
### Revision Report: Reverse Linked List II

**Pattern:** In-place Pointer Manipulation / Dummy Node

**Brute Force:** 
Convert the linked list into an array, reverse the sub-section $[left, right]$ using two pointers, and reconstruct the linked list.
*   **Time:** $O(n)$
*   **Space:** $O(n)$

**Optimal Approach:** 
1. Use a **dummy node** to handle edge cases (e.g., reversing starting at the head).
2. Traverse to the node immediately *before* the `left` position.
3. Use a "curr/next" pointer swap technique to move the `next` node to the front of the reversed sub-section repeatedly for `right - left` times.
*   **Time:** $O(n)$
*   **Space:** $O(1)$

**The 'Aha' Moment:** 
When a problem asks to reverse a specific segment *in-place* rather than the whole list, recognize that keeping the "pre-reversal" node as an anchor allows you to stitch the list back together once the sub-section is flipped.

**Summary:** 
Use a dummy node and a fixed anchor pointer to perform a sliding-window reversal that keeps the list structure intact.

---
