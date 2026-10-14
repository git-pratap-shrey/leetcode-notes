---
title: "Linked List Cycle"
slug: linked-list-cycle
date: "2026-10-11"
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
        if(head == null|| head.next==null ) return false;
        ListNode slow = head , fast = head;
        while(fast!=null && fast.next!=null){
            slow = slow.next;
            fast = fast.next.next;
            if(slow==fast) return true;
        }
        return false;
    }
}
~~~

# Submission Review
## Approach
- **Technique**: Floyd's Cycle-Finding Algorithm (Two-Pointer/Tortoise and Hare).
- **Optimality**: Optimal. This is the standard approach for cycle detection in a linked list to achieve linear time and constant space.

## Complexity
- **Time Complexity**: $O(n)$, where $n$ is the number of nodes in the linked list.
- **Space Complexity**: $O(1)$, as only two pointer variables are used regardless of input size.

## Efficiency Feedback
- **Runtime/Memory**: High efficiency. The solution avoids extra data structures (like a HashSet), ensuring minimal memory overhead.
- **Optimizations**: No meaningful optimizations available for this approach.

## Code Quality
- **Readability**: Good. The logic is straightforward and follows the standard implementation of the algorithm.
- **Structure**: Good. Proper boundary checks are performed at the start and within the loop.
- **Naming**: Good. `slow` and `fast` are industry-standard names for this specific algorithm.
- **Improvements**: 
    - Minor: Add spaces around operators (e.g., `head == null || head.next == null`) to adhere to standard Java formatting guidelines.

---

# Question Revision
# Revision Report: Linked List Cycle

- **Pattern:** Two Pointers (Fast & Slow / Floyd's Cycle-Finding Algorithm)
- **Brute Force:** Traverse the list while storing every visited node's memory address in a Hash Set. If a node is encountered that already exists in the set, a cycle is detected.
- **Optimal Approach:** 
    - Initialize two pointers, `slow` and `fast`, at the head.
    - Move `slow` by one step and `fast` by two steps.
    - If the list has a cycle, the `fast` pointer will eventually "lap" the `slow` pointer and they will meet at the same node.
    - If `fast` reaches `null`, no cycle exists.
    - **Time Complexity:** $O(n)$
    - **Space Complexity:** $O(1)$
- **The 'Aha' Moment:** Whenever a problem asks to detect a loop or a cycle in a linked structure without using extra space, think "Fast & Slow pointers."
- **Summary:** If a cycle exists, a pointer moving twice as fast will inevitably collide with a pointer moving half as fast.

---