---
title: "Linked List Cycle II"
slug: linked-list-cycle-ii
date: "2026-04-02"

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
    public int lengthcycle(ListNode head){
        ListNode fast = head;
        ListNode slow = head;
        while(fast!=null && fast.next!=null){
            fast = fast.next.next;
            slow = slow.next;
            if(fast == slow){
                ListNode temp = slow;
                int length = 0;
                do{
                    temp = temp.next;
                    length++;
                }while(temp != slow);
                return length;
            }
        }
        return 0;
    }
    public ListNode detectCycle(ListNode head) {
        int length = 0;
        ListNode fast = head;
        ListNode slow = head;
        while(fast!=null && fast.next!=null){
            fast = fast.next.next;
            slow = slow.next;
            if(fast == slow){
                length = lengthcycle(slow);
                break;
            }
        }
        if(length==0){
            return null;
        }
        ListNode f = head;
        ListNode s = head;
        while(length>0){
            s = s.next;
            length--;
        }
        while(f != s){
            f = f.next;
            s = s.next;
        }
        return s;

    }
}
~~~

# Submission Review
## Approach
- **Technique:** Floyd’s Cycle-Finding Algorithm (Tortoise and Hare) variant. 
- **Optimality:** Suboptimal. While it correctly identifies the cycle, the implementation uses two distinct passes to calculate the cycle length, effectively traversing parts of the list multiple times. The standard optimal approach uses the mathematical property that moving one pointer from `head` and another from the intersection point at the same speed will meet at the cycle entry point without needing the cycle length.

## Complexity
- **Time Complexity:** $O(N)$, where $N$ is the number of nodes. Despite the extra pass to find the length, the traversal remains linear.
- **Space Complexity:** $O(1)$, as it uses a constant amount of extra space.

## Efficiency Feedback
- **Redundancy:** The `lengthcycle` function is unnecessary. Calculating the cycle length adds an extra $O(K)$ traversal (where $K$ is the cycle length).
- **Optimization:** You can determine the entry point directly after the initial intersection by resetting one pointer to `head` and moving both pointers one step at a time until they meet.

## Code Quality
- **Readability:** Moderate. The logic is clear, but the implementation is more verbose than necessary.
- **Structure:** Moderate. The code is split into two functions, but the logic inside `detectCycle` repeats the cycle-detection traversal already performed inside `lengthcycle`.
- **Naming:** Moderate. `lengthcycle` is descriptive, but standard competitive programming naming conventions often prefer camelCase (`getCycleLength`). `f` and `s` in `detectCycle` are somewhat cryptic compared to `slow` and `fast`.

## Concrete Improvements
- Remove the `lengthcycle` method entirely.
- In `detectCycle`, once `fast == slow` is detected:
  1. Reset one pointer to `head`.
  2. Keep the other pointer at the intersection point.
  3. Move both one step at a time; the point where they meet is the start of the cycle.
- This simplification removes the need for the `length` variable and the `while(length > 0)` loop, making the code cleaner and faster.

---
---


# Question Revision
### Revision Report: Linked List Cycle II

**Pattern:** Two Pointers (Floyd’s Cycle-Finding Algorithm / Tortoise and Hare)

**Brute Force:**
Store each `ListNode` reference in a `HashSet`. Traverse the list; if you encounter a node already present in the set, that node is the start of the cycle.
*   **Time:** $O(n)$
*   **Space:** $O(n)$

**Optimal Approach:**
1.  **Phase 1:** Initialize `slow` and `fast` pointers at the head. Move `slow` by 1 and `fast` by 2. If they meet, a cycle exists.
2.  **Phase 2:** Reset one pointer to the head. Keep the other at the meeting point. Move both one step at a time; the point where they collide is the start of the cycle.
*   **Time:** $O(n)$
*   **Space:** $O(1)$

**The 'Aha' Moment:**
When the problem demands $O(1)$ space for cycle detection, you must use pointer-speed differentials to mathematically isolate the entry node without extra storage.

**Summary:**
When `slow` and `fast` pointers meet, resetting one to the head ensures they converge at the cycle's entrance after an equal number of steps.

---
