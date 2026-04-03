---
title: "Remove Duplicates from Sorted List"
slug: remove-duplicates-from-sorted-list

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
    public ListNode deleteDuplicates(ListNode node) {

        if(node == null){
            return node;
        }
        ListNode head = node;
        while(node.next != null){
            if(node.val == node.next.val){
                node.next = node.next.next;
            }
            else{
                node = node.next;
            }
        }
        return head;
    }
}
~~~

# Submission Review
## Approach
*   **Technique**: Iterative traversal of a singly linked list.
*   **Optimality**: Optimal. Since the list is already sorted, duplicates are guaranteed to be adjacent. A single pass is the theoretical lower bound for this problem.

## Complexity
*   **Time Complexity**: $O(N)$, where $N$ is the number of nodes in the list, as each node is visited at most once.
*   **Space Complexity**: $O(1)$, as the solution performs the deletion in-place using only a constant amount of extra space (pointer manipulation).

## Efficiency Feedback
*   The logic is highly efficient. By modifying `node.next` directly when a duplicate is found, the algorithm avoids unnecessary allocations and maintains a single reference point.
*   The `if(node == null)` check correctly handles edge cases, ensuring no `NullPointerException` occurs.

## Code Quality
*   **Readability**: Good. The code is concise and the logic flows logically.
*   **Structure**: Good. The use of a `while` loop with an `if-else` branch effectively handles the skip logic.
*   **Naming**: Moderate. The parameter name `node` is acceptable, but `current` is standard practice in linked list problems to distinguish it from a general node or the `head`.
*   **Concrete Improvements**: 
    *   The variable name `node` could be renamed to `current` to better reflect its role as a traversal pointer.
    *   The `if(node == null)` block is fine, but checking `if (head == null || head.next == null)` at the start is a common pattern to exit early if the list is empty or has only one element (though your current logic handles the single-element case correctly regardless).

---
---


# Question Revision
### Revision Report: Remove Duplicates from Sorted List

**Pattern:** Linked List Traversal / Pointer Manipulation

**Brute Force:** Store values in a Hash Set to track seen elements while traversing, then reconstruct the list or re-link nodes.
*   **Time:** $O(n)$
*   **Space:** $O(n)$

**Optimal Approach:** Use a single pointer to traverse the list. Compare `current.val` with `current.next.val`. If they are equal, skip the next node by setting `current.next = current.next.next`. If not, advance the pointer.
*   **Time:** $O(n)$
*   **Space:** $O(1)$

**The 'Aha' Moment:** The "Sorted" constraint is the key hint that identical elements will always be adjacent, allowing you to identify and remove duplicates in a single pass without extra memory.

**Summary:** Whenever a list is sorted, you only need to compare the current node with its immediate neighbor to identify duplicates.

---
