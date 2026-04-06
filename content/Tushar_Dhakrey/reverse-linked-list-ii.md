---
title: "Reverse Linked List II"
slug: reverse-linked-list-ii
date: "2026-04-04"

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
    public ListNode reverseBetween(ListNode head, int left, int right) {
        if(left == right){
            return head;
        }
        ListNode prev = null;
        ListNode current = head;
        for(int i=0;current!=null && i<left-1;i++){
            prev = current;
            current= current.next;
        }
        ListNode last = prev;
        ListNode newend = current;
        ListNode next = current.next;
        for(int i=0;current!=null && i<right-left+1;i++){
            current.next = prev;
            prev = current;
            current = next;
            if(next!=null){
                next = next.next;
            }
        }
        if(last!=null){
            last.next = prev;
        }
        else{
            head = prev;
        }
        newend.next = current;
        return head;
    }
}
~~~

# Submission Review
## Approach
* **Technique**: Iterative pointer manipulation (in-place reversal).
* **Optimality**: Optimal. The solution performs a single pass over the relevant segment of the linked list.

## Complexity
* **Time Complexity**: $O(N)$, where $N$ is the number of nodes in the list. The list is traversed once to locate the start and once more to reverse the sub-segment.
* **Space Complexity**: $O(1)$, as it only uses a constant number of pointers regardless of input size.

## Efficiency Feedback
* The approach is highly efficient. It avoids extra memory allocation and minimizes overhead by performing the reversal in a single loop after reaching the `left` position.
* The conditional checks (e.g., `if(next != null)`) correctly handle boundary conditions such as the end of the list.

## Code Quality
* **Readability**: Good. The logic follows a standard "find-then-reverse" pattern.
* **Structure**: Good. The separation between locating the start of the reversal and the actual reversal logic is clear.
* **Naming**: Moderate. Variable names like `newend` and `last` are slightly ambiguous; `subListTail` and `preSubList` would be more descriptive.
* **Concrete Improvements**:
    * **Dummy Node**: Introducing a dummy node at the start (`dummy.next = head`) would eliminate the `if(last != null)` check, simplifying the logic for cases where `left == 1` (reversing from the head).
    * **Conditionals**: The `if(next != null)` inside the second loop is necessary, but could be cleaner by ensuring loop invariants are maintained more strictly.
    * **Edge Cases**: The current implementation handles `left == right` correctly, and the `if(last != null)` block correctly handles updates when the head of the list is included in the reversal range.

---
---


# Question Revision
### Revision Report: Reverse Linked List II

**Pattern:** In-place Linked List Manipulation (Dummy Node + Pointers)

**Brute Force:**
Extract node values into an array, reverse the sub-segment $[m, n]$, and rewrite the values back into the list.
*   **Time:** $O(n)$
*   **Space:** $O(n)$

**Optimal Approach:**
1. Use a **dummy node** to handle edge cases where the head of the list changes.
2. Iterate to the node at position `m-1` (the "prev" node).
3. Perform a standard iterative reversal for $n-m$ steps, connecting the `prev` node to the new head of the sub-segment and the tail to the remaining list.
*   **Time:** $O(n)$
*   **Space:** $O(1)$

**The 'Aha' Moment:**
When the problem requires reversing a specific range within a linked list rather than the entire list, recognize it as a "surgical" pointer manipulation task that requires tracking the node immediately *before* the start of the reversal.

**Summary:**
Always use a dummy node to anchor the list and treat the sub-segment reversal as a localized operation that stitches the "before," "reversed middle," and "after" sections back together.

---
