---
title: "Palindrome Linked List"
slug: palindrome-linked-list

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
    public boolean isPalindrome(ListNode head) {
        ListNode mid = middleNode(head);
        ListNode headsecond = reverseList(mid);
        ListNode rereverse = headsecond;
        while(head!=null && headsecond!=null){
            if(head.val != headsecond.val){
                break;
            }
            head = head.next;
            headsecond = headsecond.next;
        }
        reverseList(rereverse);
        if(head==null || headsecond==null){
            return true;
        }
        return false;

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
- **Technique:** Two-pointer technique for finding the middle node, followed by in-place linked list reversal.
- **Optimality:** Optimal. It achieves $O(n)$ time and $O(1)$ space by modifying the input list structure and restoring it before returning.

## Complexity
- **Time Complexity:** $O(n)$, where $n$ is the number of nodes in the list. The list is traversed a constant number of times (finding middle, reversing, comparing, and re-reversing).
- **Space Complexity:** $O(1)$, as the solution uses only a few pointers regardless of input size.

## Efficiency Feedback
- The implementation is highly efficient. By re-reversing the second half before returning, it preserves the integrity of the original linked list, which is a best practice in production-level code.

## Code Quality
- **Readability:** Good. The logic is standard and follows well-known patterns for linked list problems.
- **Structure:** Good. Modularized helper functions (`middleNode`, `reverseList`) improve maintainability.
- **Naming:** Moderate. `f` (fast), `s` (slow), and `headsecond` are somewhat descriptive, but `f` and `s` could be renamed to `fast` and `slow` for better clarity.
- **Concrete Improvements:**
    - The final conditional `if(head==null || headsecond==null)` is technically correct, but comparing against the state of the traversal is cleaner if checked inside the loop or explicitly verifying the pointers matched.
    - Adding brief Javadoc or comments explaining that the list is mutated and restored would improve the professional quality of the code.

---
---


# Question Revision
### Revision Report: Palindrome Linked List

**Pattern:** Fast & Slow Pointers + In-place Reversal

**Brute Force:**
Convert the linked list into an array ($O(n)$ space), then use two pointers starting at both ends of the array to check for symmetry.

**Optimal Approach:**
1. Use **Fast & Slow pointers** to find the midpoint of the linked list.
2. **Reverse** the second half of the linked list in-place.
3. Compare the first half and the reversed second half node-by-node.
4. (Optional) Restore the list by reversing the second half again.
*   **Time Complexity:** $O(n)$
*   **Space Complexity:** $O(1)$

**The 'Aha' Moment:**
When a problem requires comparing elements from opposite ends of a linear structure but provides a singly linked list, the combination of finding the midpoint and reversing half the list is the standard technique to achieve $O(1)$ space.

**Summary:**
To check for palindromes in a linked list without using extra space, split the list in half, reverse the second portion, and verify symmetry.

---
