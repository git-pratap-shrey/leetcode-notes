---
title: "Delete the Middle Node of a Linked List"
slug: delete-the-middle-node-of-a-linked-list
date: "2026-10-11"
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
        ListNode slow = head , fast = head , last = null;
        if(head==null || head.next == null) return null;
        while(fast!=null && fast.next!=null){
            last = slow;
            slow = slow.next;
            fast = fast.next.next;
        }
        last.next = slow.next;
        return head;
    }
}
~~~

# Submission Review
## Approach
- **Technique**: Two-pointer technique (Slow and Fast pointers) to locate the middle node while maintaining a reference to the node immediately preceding the middle.
- **Optimality**: Optimal. This approach finds the middle in a single pass without requiring the list length to be calculated beforehand.

## Complexity
- **Time Complexity**: $O(n)$, where $n$ is the number of nodes in the linked list. The list is traversed once.
- **Space Complexity**: $O(1)$. Only a constant amount of extra space is used for pointer references.

## Efficiency Feedback
- The solution is highly efficient. 
- Memory usage is minimal as it modifies the list in place.
- The edge case for a single-node list is handled correctly at the start.

## Code Quality
- **Readability**: Moderate. The logic is clear, but the variable initialization line (`ListNode slow = head , fast = head , last = null;`) is slightly cluttered.
- **Structure**: Good. The edge case handling is placed correctly before the loop.
- **Naming**: Good. `slow`, `fast`, and `last` accurately describe the purpose of the pointers.
- **Concrete Improvements**: 
    - Use separate lines for variable declarations to follow standard Java style guides.
    - Add spaces around operators (e.g., `head == null` instead of `head==null`) to improve visual clarity.

---

# Question Revision
# Revision Report: Delete the Middle Node of a Linked List

### Pattern
**Two Pointers (Fast & Slow)**

### Brute Force
1. Traverse the entire list to count the total number of nodes $N$.
2. Traverse the list a second time to reach the $(N/2)^{th}$ node.
3. Update the pointer of the $(N/2 - 1)^{th}$ node to skip the middle node.

### Optimal Approach
Use a **Fast and Slow pointer** strategy to find the middle in a single pass:
1. Initialize `slow` and `fast` pointers at the head.
2. Move `fast` two steps and `slow` one step. By the time `fast` reaches the end, `slow` will be at the middle.
3. To delete the node, maintain a `prev` pointer tracking the node immediately before `slow`.
4. Set `prev.next = slow.next` to bypass the middle node.

**Complexity:**
- **Time:** $O(n)$ — Single traversal of the list.
- **Space:** $O(1)$ — Only a few pointer variables used.

### The 'Aha' Moment
Whenever a problem requires finding a specific relative position (like the middle or a cycle) in a linked list without knowing the total length, the **Fast & Slow pointer** pattern is the primary candidate.

### Summary
Use a fast pointer (2x speed) to push a slow pointer (1x speed) to the exact middle of the list in one pass.

---