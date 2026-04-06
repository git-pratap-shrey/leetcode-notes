---
title: "Linked List Cycle"
slug: linked-list-cycle
date: "2026-04-01"

---
---

# My Solution
~~~java
/**
 * Definition for singly-linked list.
 * class ListNode {
 *     int val;
 *     ListNode next;
 *     ListNode(int x) {
 *         val = x;
 *         next = null;
 *     }
 * }
 */
public class Solution {
    public boolean hasCycle(ListNode head) {
        ListNode fast = head;
        ListNode slow = head;
        while(fast!= null && fast.next!= null){
            fast = fast.next.next;
            slow = slow.next;
            if(fast == slow){
                return true;
            }
        }
        return false;
    }
}
~~~

# Submission Review
## Approach
*   **Technique:** Floyd’s Cycle-Finding Algorithm (Tortoise and Hare).
*   **Optimality:** Optimal. It is the standard, most space-efficient way to detect a cycle in a linked list.

## Complexity
*   **Time Complexity:** $O(n)$, where $n$ is the number of nodes in the linked list. The fast pointer traverses the list at most twice.
*   **Space Complexity:** $O(1)$, as it only uses two pointer references regardless of input size.

## Efficiency Feedback
*   **Performance:** Excellent. It minimizes memory overhead by avoiding hash sets or extra data structures.
*   **Edge Cases:** Handles `null` heads and single-node lists (no cycles) correctly via the `while` loop condition.

## Code Quality
*   **Readability:** Good. The logic is concise and follows standard idiomatic patterns for this algorithm.
*   **Structure:** Good. The implementation is self-contained within the method.
*   **Naming:** Good. `fast` and `slow` are standard, descriptive names for this specific algorithm.
*   **Improvements:** 
    *   The code is idiomatic and functionally perfect for competitive programming. No changes are required.

---
---


# Question Revision
### Revision Report: Linked List Cycle

**Pattern:** Two Pointers (Tortoise and Hare)

**Brute Force:** 
Store every visited node in a `HashSet`. If you encounter a node already present in the set, a cycle exists.
*   **Time Complexity:** $O(n)$
*   **Space Complexity:** $O(n)$

**Optimal Approach:** 
Use two pointers moving at different speeds (slow moves 1 step, fast moves 2 steps). If there is a cycle, the fast pointer will eventually "lap" the slow pointer and they will point to the same node. If the fast pointer reaches `null`, there is no cycle.
*   **Time Complexity:** $O(n)$
*   **Space Complexity:** $O(1)$

**The 'Aha' Moment:** 
Whenever a problem involves detecting a loop or finding a meeting point in a sequence, a fast/slow pointer setup allows you to solve it in constant space by exploiting the relative velocity between them.

**Summary:**
Use the Tortoise and Hare algorithm to detect cycles in linked structures without using extra memory.

---
