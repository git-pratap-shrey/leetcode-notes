---
title: "Linked List Cycle II"
slug: linked-list-cycle-ii
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
    public ListNode detectCycle(ListNode head) {
        if(head==null || head.next==null) return null;
        ListNode slow = head , fast = head;
        while(fast!=null && fast.next!=null){
            slow = slow.next;
            fast = fast.next.next;
            if(slow==fast){
                slow = head;
                while(slow!=fast){
                    slow = slow.next;
                    fast = fast.next;
                }
                return slow;
            }
        }
        return null;
    }
}
~~~

# Submission Review
## Approach
- **Technique**: Floyd's Cycle-Finding Algorithm (Tortoise and Hare) with a second phase to locate the cycle entry point.
- **Optimality**: Optimal. This is the standard most efficient approach for detecting the start of a cycle in a linked list without extra space.

## Complexity
- **Time Complexity**: $O(n)$, where $n$ is the number of nodes in the linked list. In the worst case, the pointers traverse the list a constant number of times.
- **Space Complexity**: $O(1)$. Only two pointer variables (`slow` and `fast`) are used regardless of input size.

## Efficiency Feedback
- **Runtime**: The implementation is highly efficient. The early exit check `if(head==null || head.next==null)` avoids unnecessary loop initialization for trivial cases.
- **Memory**: Minimal memory footprint; no auxiliary data structures (like a HashSet) are used.

## Code Quality
- **Readability**: Good. The logic follows the standard algorithm implementation, making it easy for other engineers to recognize.
- **Structure**: Good. The flow is logical: null check $\rightarrow$ cycle detection $\rightarrow$ entry point location $\rightarrow$ return.
- **Naming**: Good. `slow` and `fast` are industry-standard names for this specific algorithm.
- **Improvements**:
    - Minor: Consistent spacing around operators (e.g., `head == null` instead of `head==null`) would improve adherence to standard Java style guides.

---

# Question Revision
# Revision Report: Linked List Cycle II

- **Pattern**: Two Pointers (Floyd's Cycle-Finding Algorithm / Tortoise and Hare)
- **Brute Force**: Use a Hash Set to store every visited node. If you encounter a node already in the set, that node is the start of the cycle. 
    - *Complexity*: $O(n)$ time, $O(n)$ space.
- **Optimal Approach**: 
    1. **Phase 1**: Use a `slow` pointer (1 step) and a `fast` pointer (2 steps). If they meet, a cycle exists.
    2. **Phase 2**: Reset one pointer to the `head` and keep the other at the meeting point. Move both at the same speed (1 step). The node where they meet again is the entrance to the cycle.
    - *Complexity*: $O(n)$ time, $O(1)$ space.
- **The 'Aha' Moment**: When a problem asks for the *start* of a cycle in a linked list without using extra space, it's a trigger for Floyd's Two-Pointer algorithm.
- **Summary**: Detect the cycle with fast/slow pointers, then reset one to head and move both at speed 1 to find the entrance.

---