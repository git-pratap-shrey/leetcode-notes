---
title: "Reverse Linked List"
slug: reverse-linked-list
date: "2026-10-08"
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
        if(head==null || head.next==null){
            return head;
        }
        ListNode newHead = reverseList(head.next);
        ListNode front = head.next;
        front.next = head;
        head.next = null;
        return newHead;
    }
}
~~~

# Submission Review
## Approach
- **Technique:** Recursive approach.
- **Optimality:** Suboptimal in terms of space. While it achieves the correct result, an iterative approach would avoid the overhead of the call stack.

## Complexity
- **Time Complexity:** $O(n)$, where $n$ is the number of nodes in the list. Each node is visited once.
- **Space Complexity:** $O(n)$ due to the recursion stack depth.

## Efficiency Feedback
- **Bottleneck:** The space complexity is the primary weakness. For very long linked lists, this solution risks a `StackOverflowError`.
- **Optimization:** Convert the recursion to an iterative loop using three pointers (`prev`, `curr`, `next`) to reduce space complexity to $O(1)$.

## Code Quality
- **Readability:** Good. The logic is concise and follows the standard recursive pattern for this problem.
- **Structure:** Good. The base cases are handled correctly.
- **Naming:** Moderate. `front` is slightly ambiguous; `currentNode` or `nextNode` would be more descriptive, though it functions correctly in context.
- **Improvements:**
    - Add consistent spacing around operators (e.g., `head == null` instead of `head==null`) to adhere to Java coding standards.

---

# Question Revision
# Revision Report: Reverse Linked List

- **Pattern**: Two Pointers (Iterative) / Recursion
- **Brute Force**: Copy the linked list values into an array/stack, reverse the array, and rebuild a new linked list.
- **Optimal Approach**: 
    - **Logic**: Use three pointers (`prev`, `curr`, `next`) to reverse the node directions in-place. While traversing, store the next node, flip the current node's pointer to point to the previous node, then move `prev` and `curr` one step forward.
    - **Time Complexity**: $O(n)$
    - **Space Complexity**: $O(1)$
- **The 'Aha' Moment**: The requirement to reverse the order of a singly linked list without extra space implies the need to mutate pointers in a single pass.
- **Summary**: Flip the `next` pointer of each node to its predecessor while maintaining a reference to the original next node to avoid losing the list.

---