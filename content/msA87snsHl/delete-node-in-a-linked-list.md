---
title: "Delete Node in a Linked List"
slug: delete-node-in-a-linked-list
date: "2026-10-05"
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
- **Technique**: Value Overwriting. Since the head of the list is not provided, the code simulates the deletion of the current node by copying the data from the next node into the current node and then bypassing the next node.
- **Optimality**: Optimal. This is the only way to "delete" a node when only a pointer to that specific node is provided and it is guaranteed not to be the tail.

## Complexity
- **Time Complexity**: $O(1)$ - Only constant-time assignments are performed.
- **Space Complexity**: $O(1)$ - No additional memory is allocated.

## Efficiency Feedback
- The solution is maximally efficient in both time and space. No further optimizations are possible.

## Code Quality
- **Readability**: Good. The logic is straightforward and concise.
- **Structure**: Good. Follows standard method implementation.
- **Naming**: Good. Uses the provided class and method names correctly.
- **Improvements**: No concrete improvements needed for this specific problem constraint.

---

# Question Revision
# Revision Report: Delete Node in a Linked List

- **Pattern**: Linked List Manipulation (Node Value Substitution)
- **Brute Force**: Traverse the list from the head to find the node *immediately preceding* the target node, update its `next` pointer to skip the target, and then delete the target.
- **Optimal Approach**: Since we only have access to the node to be deleted (and not the head), we cannot change the pointer of the previous node. Instead, we copy the value of the *next* node into the *current* node and then delete the next node by skipping it.
    - **Time Complexity**: $O(1)$
    - **Space Complexity**: $O(1)$
- **The 'Aha' Moment**: When you are given access to the node to be deleted but **not the head** of the list, you cannot "reach back" to the previous node, so you must shift the identity of the next node backward.
- **Summary**: To delete a node without the head, mimic the deletion by copying the next node's value and skipping the next node.

---