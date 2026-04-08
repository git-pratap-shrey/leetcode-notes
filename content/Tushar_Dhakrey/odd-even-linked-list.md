---
title: "Odd Even Linked List"
slug: odd-even-linked-list
date: "2026-04-08"

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
    public ListNode oddEvenList(ListNode head) {
        if(head==null || head.next==null){
            return head;
        }
        ListNode evenhead = null , eventail = null;
        ListNode oddhead = null , oddtail = null;
        ListNode current = head;
        int index = 1;
        while(current!=null){
            if(index%2==0){
                if(evenhead==null){
                    eventail = current;
                    evenhead = current;
                }
                else{
                    eventail.next = current ;
                    eventail = current;
                }
            }
            else{
                if(oddhead==null){
                    oddtail = current;
                    oddhead = current;
                }
                else{
                    oddtail.next = current;
                    oddtail = current;
                }
            }
            current = current.next;
            index++;
        }
        if(evenhead==null) return oddhead;
        if(oddhead==null) return evenhead;
        oddtail.next = evenhead;
        eventail.next = null;
        return oddhead;
    }
}
~~~

# Submission Review
## Approach
*   **Technique:** Iterative traversal using pointer partitioning. The code maintains two separate linked lists (odd and even) and merges them at the end.
*   **Optimal:** No. While $O(N)$ time is optimal, the implementation uses an unnecessary `index` counter and modulo operation, and creates redundant null checks inside the loop. The standard optimal approach performs this in-place by re-linking pointers (`curr = curr.next.next`) without needing an index variable.

## Complexity
*   **Time Complexity:** $O(N)$, where $N$ is the number of nodes in the linked list.
*   **Space Complexity:** $O(1)$, as it only uses a constant number of auxiliary pointers.

## Efficiency Feedback
*   **Bottleneck:** The `index % 2` check and the repeated conditional logic inside the `while` loop add constant-time overhead.
*   **Optimization:** You can eliminate the `index` variable entirely. By iterating with two pointers (one starting at `head` and one at `head.next`) and leaping by two nodes each time, you can bypass the conditional parity checks, resulting in cleaner and faster code.

## Code Quality
*   **Readability:** Moderate. The logic is clear but verbose.
*   **Structure:** Moderate. The use of four separate pointers (`oddhead`, `oddtail`, `evenhead`, `eventail`) is slightly excessive compared to the standard two-pointer approach.
*   **Naming:** Good. The variable names clearly describe their purpose.
*   **Concrete Improvements:**
    *   Remove the `index` variable.
    *   Refactor to use a structure like `ListNode odd = head; ListNode even = head.next; ListNode evenHead = even;`.
    *   Iterate using `while (even != null && even.next != null) { odd.next = even.next; odd = odd.next; even.next = odd.next; even = even.next; }`.
    *   This reduces the code footprint significantly and eliminates branch mispredictions inside the loop.

---
---


# Question Revision
### Revision Report: Odd Even Linked List

**Pattern:** Two-Pointer (In-place Re-linking)

**Brute Force:**
Create two separate lists (one for odd nodes, one for even nodes) by iterating through the original list, then append the head of the even list to the tail of the odd list. 
*   **Time:** $O(n)$
*   **Space:** $O(n)$ (due to storing new nodes/lists)

**Optimal Approach:**
Maintain two pointers, `odd` and `even`, starting at the first and second nodes respectively. Maintain a reference to the `evenHead`. Iterate through the list by skipping one node at a time (`odd.next = odd.next.next`), updating pointers, and finally connecting the tail of the odd list to the `evenHead`.
*   **Time:** $O(n)$
*   **Space:** $O(1)$

**The 'Aha' Moment:**
When the problem requires rearranging nodes based on their index (parity) rather than their values, treat the linked list as two interleaved sub-lists that can be unzipped and rejoined in a single pass.

**Summary:** 
Use two pointers to track the start of interleaved sequences, unlinking and re-linking them in place to achieve constant space complexity.

---
