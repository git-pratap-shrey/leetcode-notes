---
title: "Rotate List"
slug: rotate-list
date: "2026-04-07"

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
    public ListNode rotateRight(ListNode head, int k) {
        if(k<=0 || head==null || head.next==null){
            return head;
        }
        int length = 1;
        ListNode last = head;
        while(last.next != null){
            last = last.next;
            length++;
        }
        last.next = head;
        int rotations = k % length;
        int skip = length - rotations;
        ListNode newend = head;
        for(int i=0;i<skip-1;i++){
            newend = newend.next;
        }
        head = newend.next;
        newend.next = null;
        return head;

    }
}
~~~

# Submission Review
## Approach
*   **Technique:** Linked List manipulation using a cyclic pointer approach.
*   **Optimality:** Optimal. It transforms the list into a circular linked list to find the new tail/head in one pass after calculating the length.

## Complexity
*   **Time Complexity:** $O(N)$, where $N$ is the number of nodes in the list. The code traverses the list once to find the length/tail, and moves $N - (k \mod N)$ steps to find the new break point.
*   **Space Complexity:** $O(1)$, as it performs in-place pointer manipulation.

## Efficiency Feedback
*   The approach is highly efficient. Converting the list to a cycle (`last.next = head`) avoids the need for a secondary traversal or an auxiliary data structure.
*   The logic correctly handles the modulo operation (`k % length`), which is necessary for cases where $k \ge N$.

## Code Quality
*   **Readability:** Good. The logic flow is linear and easy to follow.
*   **Structure:** Good. Early return conditions correctly handle edge cases (empty list, single node, or $k=0$).
*   **Naming:** Moderate. `newend` is descriptive, but `last` could be renamed to `tail` to better match Linked List terminology.
*   **Concrete Improvements:**
    *   **Edge Case Safety:** While the code handles $k=0$, it does not explicitly handle the case where `k % length == 0`. However, the current logic handles it gracefully (the rotation effectively does nothing), so no change is strictly required. 
    *   **Conciseness:** The variable `rotations` is used only once in `skip`. You could calculate `int skip = length - (k % length);` directly for brevity.

---
---


# Question Revision
### Revision Report: Rotate List

**Pattern:** Linked List Manipulation (Cyclic adjustment)

**Brute Force:** 
Rotate the list $k$ times by moving the tail to the head for each step. 
*   **Time:** $O(k \cdot n)$
*   **Space:** $O(1)$

**Optimal Approach:**
1.  **Close the loop:** Traverse the list to find the length ($n$) and connect the tail to the head to form a circle.
2.  **Calculate offset:** The new tail position is at $n - (k \pmod n)$ steps from the start.
3.  **Break the loop:** Advance to the new tail, save the head of the new list, and set the `next` pointer of the new tail to `null`.
*   **Time:** $O(n)$
*   **Space:** $O(1)$

**The 'Aha' Moment:**
When $k$ can be larger than the list length $n$, the problem is essentially asking for a cyclic shift, which is mathematically simplified by calculating $k \pmod n$ and treating the list as a ring.

**Summary:**
Convert the linear list into a ring to bypass length constraints, then break the link at the exact index determined by the modulo operator.

---
