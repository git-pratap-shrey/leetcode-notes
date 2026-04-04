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
*   **Technique:** Two-pointer approach to find the middle, followed by reversing the second half of the linked list to check for symmetry.
*   **Status:** Optimal. This is the standard $O(N)$ time and $O(1)$ space approach. It correctly restores the list structure by re-reversing the second half.

## Complexity
*   **Time Complexity:** $O(N)$, where $N$ is the number of nodes. The list is traversed a constant number of times (finding middle, reversing, comparing, re-reversing).
*   **Space Complexity:** $O(1)$, as it operates in-place without auxiliary data structures.

## Efficiency Feedback
*   **Performance:** The code is highly efficient. Memory usage is minimal as it only uses a few pointer variables. 
*   **Optimization:** The approach is already at the theoretical lower bound for this problem.

## Code Quality
*   **Readability:** Moderate. The logic is sound, but the code lacks comments explaining the restoration step (re-reversing).
*   **Structure:** Good. The helper methods (`middleNode`, `reverseList`) follow a clean separation of concerns.
*   **Naming:** Moderate. `f` and `s` (for fast/slow) are standard, but `headsecond` and `rereverse` are slightly ambiguous.
*   **Improvements:**
    *   **Logic edge case:** The logic `if(head==null || headsecond==null)` is technically correct for the loop termination, but could be cleaner by simply returning `head == null || headsecond == null` inside a return statement.
    *   **Naming:** Rename `f` and `s` to `fast` and `slow` for better maintainability.
    *   **Readability:** Explicitly name the reversed head variable `reversedHead` to distinguish it from the original list parts. 
    *   **Robustness:** Consider adding a null check for `head` at the start, though the current logic handles single-node lists correctly.

---
---


# Question Revision
### Revision Report: Palindrome Linked List

**Pattern:** Fast & Slow Pointers / In-place Reversal

**Brute Force:** 
Convert the linked list into an array or list and check for a palindrome using two pointers from the ends. 
*   **Time:** $O(n)$
*   **Space:** $O(n)$

**Optimal Approach:**
1. Use a **Fast & Slow pointer** approach to find the middle of the list.
2. Reverse the second half of the list in-place.
3. Compare the first half and the reversed second half node-by-node.
4. (Optional) Reverse the second half back to restore the original list.
*   **Time:** $O(n)$
*   **Space:** $O(1)$

**The 'Aha' Moment:**
When a problem requires checking for symmetry or order properties in a linked list without using extra space, you must split the list in half and manipulate the pointers of the second segment.

**Summary:**
To check for a palindrome in $O(1)$ space, treat the linked list as two separate segments by reversing the tail half and comparing it against the head.

---
