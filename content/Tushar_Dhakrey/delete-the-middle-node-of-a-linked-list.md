---
title: "Delete the Middle Node of a Linked List"
slug: delete-the-middle-node-of-a-linked-list
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
    public ListNode deleteMiddle(ListNode head) {
        if(head==null ||head.next==null){
            return null;
        }
        ListNode slow = head;
        ListNode fast = head;
        ListNode prev = null;
        while(fast!=null && fast.next!=null){
            fast = fast.next.next;
            prev = slow;
            slow = slow.next;
        }
        prev.next = slow.next;
        return head;
    }
}
~~~

# Submission Review
## Approach
- **Technique**: Two-pointer approach (Slow and Fast pointers).
- **Optimality**: Optimal. It finds the middle node in a single pass without needing to pre-calculate the length of the list.

## Complexity
- **Time Complexity**: $O(N)$, where $N$ is the number of nodes in the linked list.
- **Space Complexity**: $O(1)$, as only a few pointer variables are used regardless of input size.

## Efficiency Feedback
- The solution is highly efficient. It minimizes traversals and avoids additional data structures.
- **Minor Optimization**: Instead of using a `prev` pointer, one could start the `fast` pointer one step ahead (`fast = head.next.next`) or use a dummy node to simplify the logic, though the current implementation is already performant.

## Code Quality
- **Readability**: Moderate. The logic is clear, but the lack of spacing around operators (e.g., `head==null`, `fast!=null`) and after commas makes it feel cramped.
- **Structure**: Good. It handles the edge case (single node or null) correctly at the start.
- **Naming**: Good. `slow`, `fast`, and `prev` are standard conventions for this algorithm.

**Concrete Improvements:**
- Apply standard Java formatting: use spaces around operators (`head == null`) and after commas for better readability.
- The `if(head==null)` check is technically redundant based on the problem constraints usually associated with this task (where $N \ge 1$), but it is safe to keep.

---

# Question Revision
# Revision Report: Delete the Middle Node of a Linked List

- **Pattern**: Two Pointers (Fast & Slow)
- **Brute Force**: Traverse the entire list once to count total nodes ($N$), then traverse again to the $\lfloor N/2 \rfloor$ node and delete the next one.
- **Optimal Approach**: Use a `slow` and `fast` pointer starting at the head. For every step `slow` takes, `fast` takes two. By the time `fast` reaches the end, `slow` is exactly at the middle. To delete the node, maintain a `prev` pointer trailing `slow` to bridge the gap.
    - **Time Complexity**: $O(n)$
    - **Space Complexity**: $O(1)$
- **The 'Aha' Moment**: Any problem requiring the "middle" or "k-th from end" of a linked list without knowing the length upfront is a signal for the Two-Pointer technique.
- **Summary**: Use a slow/fast pointer pair to locate the middle in one pass and a trailing pointer to rewire the links.

---