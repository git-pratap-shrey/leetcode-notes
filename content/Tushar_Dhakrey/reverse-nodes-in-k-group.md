---
title: "Reverse Nodes in k-Group"
slug: reverse-nodes-in-k-group
date: "2026-04-06"

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
    public ListNode reverseKGroup(ListNode head, int k) {
        if(k<=1 || head==null){
            return head;
        }
        ListNode prev = null;
        ListNode current = head;
        while(true){
            ListNode temp = current;
            int count = 0;
            while(temp != null && count<k){
                temp = temp.next;
                count++;
            }
            if(count<k){
                if(prev!=null){
                    prev.next = current;
                }
                break;
            }
            ListNode last = prev;
            ListNode newend = current;
            ListNode next = current.next;
            for(int i=0;current != null && i<k;i++){
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
            if(current==null){
                break;
            }
            prev = newend;
        }
        return head;
    }
}
~~~

# Submission Review
## Approach
*   **Technique:** Iterative pointer manipulation (In-place linked list reversal).
*   **Optimality:** Optimal. The algorithm processes each node a constant number of times (once to count, once to reverse, once to relink), which is $O(n)$. It operates in $O(1)$ extra space.

## Complexity
*   **Time Complexity:** $O(n)$, where $n$ is the number of nodes in the list. Each node is visited a constant number of times.
*   **Space Complexity:** $O(1)$, as it only uses a few pointer variables regardless of the input size.

## Efficiency Feedback
*   The logic is efficient. The use of a look-ahead pointer (`temp`) to verify if $k$ nodes exist before reversing prevents unnecessary backtracking or partial reversals.
*   The code avoids recursion, preventing stack overflow issues on very large lists.

## Code Quality
*   **Readability:** Moderate. The logic is dense and relies on multiple pointer updates (`prev`, `current`, `next`, `newend`) which are difficult to trace without comments or a debugger.
*   **Structure:** Good. The loop-based structure correctly handles the head-case (where `last == null`) and the termination condition.
*   **Naming:** Moderate. Variable names like `newend` are slightly ambiguous (it represents the "tail" of the reversed segment). `last` is essentially the "tail of the previous group."
*   **Improvements:** 
    *   The `if(next != null)` check inside the `for` loop is redundant if the logic is structured to cache the next node correctly at the start of the reversal.
    *   Extracting the "reverse sub-segment" logic into a small helper method could significantly improve readability and reduce the complexity of the main loop.
    *   The code `if(prev != null) { prev.next = current; }` inside the `if(count < k)` block is logically sound, but could be clearer if documented as "linking the remainder to the end of the last reversed group."

---
---


# Question Revision
### Revision Report: Reverse Nodes in k-Group

**Pattern:** Linked List Manipulation (Dummy Node + Iterative Reversal)

**Brute Force:**
Identify groups of size $k$ by traversing the list, store references to nodes in an array, reverse the pointers within that subset, and manually relink the segments. 
*   **Time:** $O(n)$
*   **Space:** $O(k)$ (storing nodes) or $O(n)$ if cloning.

**Optimal Approach:**
Use a "Dummy Node" to handle head changes and a "k-group counter" to detect full segments. For each group:
1. Verify if $k$ nodes exist (to avoid reversing trailing segments).
2. Use three pointers (`prev`, `curr`, `next`) to perform a standard in-place reversal of the sub-segment.
3. Update the `tail` of the previous group to point to the new `head` of the reversed segment.
*   **Time:** $O(n)$ (each node visited a constant number of times).
*   **Space:** $O(1)$ (in-place pointer manipulation).

**The 'Aha' Moment:**
When a problem requires maintaining the relative order of segments while reversing elements *within* those segments, you must treat the "grouping" as a two-step process: validate segment existence first, then decouple and reverse.

**Summary:** 
Use a dummy node and a "look-ahead" counter to validate group size before performing in-place pointer reversal, ensuring you link the `previous` segment's tail to the current segment's new head.

---
