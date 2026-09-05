---
title: "Delete Node in a Linked List"
slug: delete-node-in-a-linked-list
date: "2026-08-25"
---

# My Solution
~~~java
/**
 * Definition for singly-linked list.
 * public class ListNode {
 *     int val;
 *     ListNode next;
 *     ListNode(int x) { val = x; }
 * }
 */
class Solution {
    public void deleteNode(ListNode node) {
        node.val = node.next.val;
        node.next = node.next.next;
	}
}
~~~

# Submission Review
## Approach
* **Technique:** Linked List node manipulation (value overwriting).
* **Optimality:** Optimal. Since you do not have access to the head of the list, this "copy-forward" approach is the standard $O(1)$ method to remove a node by bypassing its successor.

## Complexity
* **Time Complexity:** $O(1)$. Direct assignment of values and pointers.
* **Space Complexity:** $O(1)$. No additional data structures used.

## Efficiency Feedback
* The solution is as efficient as possible for a singly linked list where only the target node is provided.
* No memory allocation or traversal is involved, minimizing overhead.

## Code Quality
* **Readability:** Good. The logic is concise and follows standard idiomatic patterns for this specific problem.
* **Structure:** Good. The method is self-contained and handles the logic correctly given the problem constraints (assuming the node to be deleted is not the tail).
* **Naming:** Good. `node` is descriptive enough for this context.
* **Concrete Improvements:** 
    * Add a defensive check for `node == null || node.next == null` if the problem constraints do not guarantee the node is not the tail. As per the standard LeetCode problem constraints, the current implementation is sufficient, but in production code, safety checks are preferred.

---

# Question Revision
### Revision Report: Delete Node in a Linked List

**Pattern:** Pointer Manipulation / Node Value Swapping

**Brute Force:** 
Traverse the list from the `head` to find the node *before* the target node, then update its `next` pointer to skip the target node.
*   **Time:** $O(n)$
*   **Space:** $O(1)$

**Optimal Approach:**
Since you are given the node to be deleted (but not the head), copy the value of the *next* node into the current node and then update the current node's `next` pointer to skip the next node (effectively deleting it).
*   **Time:** $O(1)$
*   **Space:** $O(1)$

**The 'Aha' Moment:**
When you don't have access to the `head` of a linked list, you cannot traverse to find the predecessor, so you must "cheat" by changing the current node's identity to match its successor and deleting the successor instead.

**Summary:**
If you can't reach the predecessor, overwrite the current node with the successor's data and excise the successor.

---