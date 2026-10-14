---
title: "Middle of the Linked List"
slug: middle-of-the-linked-list
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
    public ListNode middleNode(ListNode head) {
        if(head==null || head.next==null) return head;
        ListNode fast = head;
        ListNode slow = head;
        while(fast!=null && fast.next!=null){
            slow = slow.next;
            fast = fast.next.next;
        }
        return slow;
    }
}
~~~

# Submission Review
## Approach
- **Technique**: Two-Pointer technique (Slow and Fast pointers).
- **Optimality**: Optimal. This is the standard one-pass approach to find the middle of a linked list.

## Complexity
- **Time Complexity**: $O(n)$, where $n$ is the number of nodes in the list. The fast pointer traverses the list once.
- **Space Complexity**: $O(1)$. Only two pointer variables are used regardless of input size.

## Efficiency Feedback
- The runtime and memory usage are minimal. 
- The initial `if(head==null || head.next==null)` check is a safe guard, though the `while` loop conditions already handle these cases correctly, making the explicit check slightly redundant but harmless.

## Code Quality
- **Readability**: Good. The logic is straightforward and follows standard patterns.
- **Structure**: Good. The flow is linear and concise.
- **Naming**: Good. `fast` and `slow` are industry-standard names for this specific algorithm.

**Concrete Improvements**:
- Remove the redundant `if(head==null || head.next==null)` check to streamline the code; the `while` loop handles lists of size 0, 1, and 2 perfectly.

---

# Question Revision
# Revision Report: Middle of the Linked List

- **Pattern:** Two Pointers (Fast & Slow)
- **Brute Force:** Traverse the entire list once to count the total number of nodes ($N$), then traverse a second time to stop at the $\lfloor N/2 \rfloor$ position.
- **Optimal Approach:** 
    - Initialize two pointers, `slow` and `fast`, both at the head.
    - Move `slow` by one step and `fast` by two steps per iteration.
    - When `fast` reaches the end (or the last node), `slow` will be exactly at the middle.
    - **Time Complexity:** $O(n)$
    - **Space Complexity:** $O(1)$
- **The 'Aha' Moment:** Whenever a problem asks for a specific relative position (middle, $k$-th from end, or cycle detection) in a linked list, the Fast & Slow pointer pattern is the primary candidate.
- **Summary:** Use a fast pointer (2x speed) and a slow pointer (1x speed) to find the midpoint in a single pass.

---