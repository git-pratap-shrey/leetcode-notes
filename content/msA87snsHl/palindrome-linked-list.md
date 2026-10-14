---
title: "Palindrome Linked List"
slug: palindrome-linked-list
date: "2026-10-08"
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
    public ListNode reverse(ListNode head){
        if(head == null || head.next == null) return head;
        ListNode newHead = reverse(head.next);
        ListNode front = head.next;
        front.next = head;
        head.next = null;
        return newHead;
    }
    public boolean isPalindrome(ListNode head) {
        ListNode fast =  head;
        ListNode slow = head;
        if(head==null || head.next==null) return true;
        while(fast.next!=null && fast.next.next!=null){
            slow = slow.next;
            fast = fast.next.next;
        }
        ListNode first = head;
        ListNode second = reverse(slow.next);
        while(second!=null){
            if(first.val!=second.val) {
                reverse(slow.next);   
                return false;
            }
            first = first.next;
            second = second.next;
        }
        reverse(slow.next);
        return true;

    }
}
~~~

# Submission Review
## Approach
- **Technique**: Two-pointer technique (Fast & Slow) to find the middle, followed by a recursive reverse of the second half of the list.
- **Optimality**: Optimal. It achieves the best possible time complexity and can be done in $O(1)$ extra space (though this specific implementation uses recursion).

## Complexity
- **Time Complexity**: $O(n)$ — The list is traversed a constant number of times (finding middle, reversing, and comparing).
- **Space Complexity**: $O(n)$ — While the logic aims for constant space, the `reverse` function is implemented **recursively**, adding $O(n)$ to the call stack. An iterative reverse would reduce this to $O(1)$.

## Efficiency Feedback
- **Bottleneck**: The recursive `reverse` method is the primary inefficiency. For very large linked lists, this will trigger a `StackOverflowError`.
- **Redundancy**: The code calls `reverse(slow.next)` inside the loop upon finding a mismatch and again at the end. Since `slow.next` was already modified by the first reverse, calling `reverse` on the same pointer again without updating the reference to the new head of the reversed segment is logically unstable (though it attempts to restore the list).

## Code Quality
- **Readability**: Moderate. The logic is clear, but the restoration of the list after a `false` return is cluttered.
- **Structure**: Moderate. The helper method is well-separated, but the restoration logic is duplicated.
- **Naming**: Good. `fast`, `slow`, `first`, and `second` are standard for this problem.

### Concrete Improvements
1. **Iterative Reverse**: Replace the recursive `reverse` method with a `while` loop to achieve true $O(1)$ space complexity.
2. **Restoration Logic**: Move `reverse(slow.next)` to a `finally` block or a single exit point to avoid duplicating the restoration call inside the `if` block and at the end of the method.
3. **Bug Alert**: In the `if(first.val!=second.val)` block, `reverse(slow.next)` is called. However, after the first reversal, `slow.next` no longer points to the head of the reversed segment; it points to the tail. This means the "restoration" reverse will not behave as intended.

---

# Question Revision
# Revision Report: Palindrome Linked List

- **Pattern**: Two Pointers (Fast & Slow) + Linked List Reversal.
- **Brute Force**: Traverse the linked list and copy all values into an array. Use a two-pointer approach on the array to check for a palindrome.
- **Optimal Approach**: 
    1. **Find Middle**: Use a fast/slow pointer pair to locate the center of the list.
    2. **Reverse**: Reverse the second half of the linked list in-place.
    3. **Compare**: Compare the first half and the reversed second half node by node.
    4. **Restore (Optional)**: Reverse the second half back to maintain the original list structure.
    - **Time Complexity**: $O(n)$
    - **Space Complexity**: $O(1)$
- **The 'Aha' Moment**: To check for a palindrome without extra space, I must be able to traverse the list from the end toward the beginning, which requires reversing the second half.
- **Summary**: Find the middle, reverse the second half, and compare it to the first.

---