---
title: "Reorder List"
slug: reorder-list

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
    public void reorderList(ListNode head) {
        if(head == null || head.next == null){
            return;
        }
        ListNode mid = middleNode(head);
        ListNode hs = reverseList(mid);
        ListNode hf = head;
        while(hf!=null && hs!=null){
            ListNode temp = hf.next;
            hf.next = hs;
            hf = temp;
            temp = hs.next;
            hs.next = hf;
            hs = temp;
        }
        if(hf!=null){
            hf.next = null;
        }
        
    }
    public ListNode middleNode(ListNode head) {
        ListNode f = head;
        ListNode s = head;
        while(f!=null && f.next!=null){
            f = f.next.next;
            s = s.next;
        }
        return s;
    }
     public ListNode reverseList(ListNode head) {
        ListNode prev = null;
        ListNode curr = head;
        ListNode next = null;
        while(curr!=null){
            next = curr.next;
            curr.next = prev;
            prev = curr;
            curr = next;
        }
        return prev;
    }
}
~~~

# Submission Review
## Approach
*   **Technique:** Two-pointer technique for list partitioning, linked list reversal, and in-place pointer manipulation (merging).
*   **Optimality:** Optimal. It achieves the reordering in $O(N)$ time and $O(1)$ extra space by modifying the existing nodes' `next` pointers.

## Complexity
*   **Time Complexity:** $O(N)$, where $N$ is the number of nodes. The list is traversed a constant number of times (finding the middle, reversing the half, and merging).
*   **Space Complexity:** $O(1)$, as it operates in-place without using extra data structures.

## Efficiency Feedback
*   **Runtime:** Highly efficient as it avoids the $O(N)$ auxiliary space required by array-based or stack-based approaches.
*   **Optimization:** The `middleNode` implementation returns the middle element, which correctly includes the start of the second half for reversal. The logic is tight and handles the pointer updates efficiently.

## Code Quality
*   **Readability:** Good. The helper methods are distinct and follow standard algorithmic patterns.
*   **Structure:** Good. Modular design with helper functions `middleNode` and `reverseList` keeps the main logic clean.
*   **Naming:** Moderate. Abbreviations like `hf`, `hs`, `f`, `s` are standard in competitive programming but could be more descriptive (e.g., `firstHalf`, `secondHalf`, `fast`, `slow`) for professional production code.
*   **Concrete Improvements:**
    *   In `middleNode`, the current implementation returns the actual middle node. If the list is even, it returns the second middle. This is correct for the logic used, but ensure the `reverseList` logic correctly cuts the first half from the second half if needed.
    *   The `if(hf != null)` check at the end is a safe guard, but depending on the list length, it might be redundant; it is good practice to keep it for safety.
    *   Consider adding comments briefly explaining the `while` merge loop, as pointer-shuffling logic can be error-prone to maintain.

---
---


# Question Revision
### Revision Report: Reorder List

**Pattern:** Linked List Manipulation (Fast/Slow Pointers + Reversal)

**Brute Force:**
Store nodes in an array/list, then use two pointers (start and end) to reconstruct the list by alternating elements.
*   **Time:** $O(n)$
*   **Space:** $O(n)$

**Optimal Approach:**
1.  **Split:** Use the Fast/Slow pointer technique to find the midpoint and split the list into two halves.
2.  **Reverse:** Reverse the second half of the list in-place.
3.  **Merge:** Interleave nodes from the first half and the reversed second half using a pointer-based merge.
*   **Time:** $O(n)$
*   **Space:** $O(1)$

**The 'Aha' Moment:**
When a problem requires interleaving two halves of a sequence in reverse order, splitting the list and reversing the second half transforms an abstract manipulation task into a standard merging task.

**Summary:**
To reorder a list, treat the second half as a separate entity: find the middle, reverse the tail, and weave them together.

---
