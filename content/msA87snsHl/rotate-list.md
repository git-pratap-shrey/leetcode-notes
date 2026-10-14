---
title: "Rotate List"
slug: rotate-list
date: "2026-10-14"
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
    public ListNode rotateRight(ListNode head, int k) {
        if(head==null || head.next==null) return head;
        ListNode tail = head;
        int length = 1;
        while(tail.next!=null){
            length++;
            tail = tail.next;
        }
        if(k%length==0) return head;
        tail.next = head;
        k = k%length;
        ListNode temp = head;
        while(temp!=null){
            length--;
            if(length==k){
                head = temp.next;
                temp.next = null;
            }
            temp = temp.next;
        }
        return head;
    }
}
~~~

# Submission Review
## Approach
- **Technique**: Two-pass traversal. First, it calculates length and transforms the list into a circular linked list. Second, it finds the new break point based on $k \pmod{\text{length}}$.
- **Optimality**: Optimal. The problem requires knowing the length to handle $k > \text{length}$, necessitating at least one full traversal.

## Complexity
- **Time Complexity**: $O(N)$, where $N$ is the number of nodes. The code traverses the list twice (once to find length, once to find the break point).
- **Space Complexity**: $O(1)$. Only a few pointer variables are used regardless of input size.

## Efficiency Feedback
- **Runtime**: Efficient. The use of `k % length` correctly handles large values of $k$.
- **Optimization**: The second loop logic is slightly convoluted. Instead of decrementing `length` and checking `if(length == k)`, it could simply iterate to the node at position `(length - k % length - 1)`.

## Code Quality
- **Readability**: Moderate. The logic in the second `while` loop is unintuitive because it reuses the `length` variable as a counter, making the break condition `length == k` harder to follow at a glance.
- **Structure**: Good. Handles edge cases (null head, single node, $k$ as a multiple of length) early.
- **Naming**: Good. `tail`, `head`, and `temp` are standard for linked list problems.
- **Improvements**:
    - Avoid reusing the `length` variable in the second loop to maintain clarity.
    - Explicitly calculate the number of steps to the new tail: `int stepsToNewTail = length - (k % length) - 1`.

---

# Question Revision
# Revision Report: Rotate List

- **Pattern**: Linked List Manipulation (Cycle/Circular)
- **Brute Force**: Create a new list and manually copy elements starting from the new head, or perform the rotation $k$ times individually by moving the head one step at a time.
- **Optimal Approach**: 
    1. **Connect the Tail to Head**: Traverse to the end of the list to find the length $n$ and link the tail node back to the head, creating a circular list.
    2. **Calculate Offset**: Since rotating by $k$ is the same as rotating by $k \pmod n$, the new tail is located at position $(n - (k \pmod n) - 1)$ from the start.
    3. **Break the Cycle**: Move to the new tail, save the next node as the new head, and set the new tail's `.next` to `null`.
    - **Time Complexity**: $O(n)$ (one pass to find length, one pass to find the break point).
    - **Space Complexity**: $O(1)$.
- **The 'Aha' Moment**: The requirement to "rotate" a linear structure suggests that treating the list as a circle momentarily simplifies the movement of the head and tail.
- **Summary**: Turn the list into a circle, find the new break point using $(n - k \pmod n)$, and snap the link.

---