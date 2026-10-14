---
title: "Remove Nth Node From End of List"
slug: remove-nth-node-from-end-of-list
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
    public ListNode removeNthFromEnd(ListNode head, int n) {
        ListNode fast = head;
        for(int i = 0 ; i < n ; i++){
            fast = fast.next;
        }
        if(fast==null){
            head = head.next;
            return head;
        }
        ListNode slow = head;
        while(fast.next!=null){
            slow = slow.next;
            fast = fast.next;
        }
        slow.next = slow.next.next;;
        return head;
    }
}
~~~

# Submission Review
## Approach
- **Technique:** Two-pointer (Fast and Slow pointers).
- **Optimality:** Optimal. It solves the problem in a single pass without needing to calculate the total length of the list first.

## Complexity
- **Time Complexity:** $O(L)$, where $L$ is the length of the linked list. Each node is visited at most once.
- **Space Complexity:** $O(1)$. Only a few pointer variables are used regardless of input size.

## Efficiency Feedback
- The implementation is highly efficient.
- The edge case where the head needs to be removed (`fast == null`) is handled correctly and efficiently before the second loop begins.

## Code Quality
- **Readability:** Good. The logic is straightforward and follows the standard two-pointer pattern.
- **Structure:** Good. The flow handles the edge case first, then the general case.
- **Naming:** Good. `fast` and `slow` are standard conventions for this algorithm.
- **Concrete Improvements:**
    - **Syntax:** There is a double semicolon (`;;`) on the line `slow.next = slow.next.next;;`. This is a minor typo and should be cleaned up.
    - **Robustness:** While not required by most competitive programming constraints, adding a null check for `head` at the start would make the code more production-ready.

---

# Question Revision
# Revision Report: Remove Nth Node From End of List

- **Pattern:** Two Pointers (Fast & Slow) / Sliding Window.
- **Brute Force:** Perform two passes. First pass: calculate the total length $L$ of the list. Second pass: traverse to the $(L - N)^{th}$ node and remove the next node.
- **Optimal Approach:** 
    - Use two pointers (`fast` and `slow`) and a `dummy` node pointing to the head.
    - Advance `fast` $N + 1$ steps ahead of `slow`.
    - Move both pointers simultaneously until `fast` reaches `null`.
    - Since the gap is maintained, `slow` will now point to the node **immediately before** the one to be deleted.
    - **Time Complexity:** $O(n)$ — Single pass traversal.
    - **Space Complexity:** $O(1)$ — Constant extra space.
- **The 'Aha' Moment:** The requirement to find a position relative to the *end* of a singly linked list (where you cannot traverse backward) signals the need for a fixed-distance gap between two pointers.
- **Summary:** Maintain a gap of $N$ nodes between two pointers to identify the target node in a single pass.

---