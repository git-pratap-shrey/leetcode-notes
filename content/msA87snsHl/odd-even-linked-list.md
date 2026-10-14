---
title: "Odd Even Linked List"
slug: odd-even-linked-list
date: "2026-10-06"
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
        if(head==null || head.next==null) return head; 
        ListNode odd = head;
        ListNode even = head.next;
        ListNode link = head.next;
        while(even!=null && even.next!=null){
            odd.next = odd.next.next;
            even.next = even.next.next;
            odd = odd.next;
            even = even.next;
        }
        odd.next = link;
        return head;        
    }
}
~~~

# Submission Review
## Approach
- **Technique**: Two-pointer technique (odd and even pointers) to decouple the list into two separate chains and then append the even chain to the end of the odd chain.
- **Optimality**: Optimal. It processes the list in a single pass and uses constant extra space.

## Complexity
- **Time Complexity**: $O(N)$, where $N$ is the number of nodes in the linked list. Each node is visited exactly once.
- **Space Complexity**: $O(1)$. Only a few pointer references are maintained regardless of input size.

## Efficiency Feedback
- **Runtime**: Optimal. The solution minimizes traversals and operations.
- **Memory**: Optimal. No auxiliary data structures are used; the list is modified in-place.

## Code Quality
- **Readability**: Good. The logic is straightforward and follows the standard linked list manipulation pattern.
- **Structure**: Good. Edge cases (null or single-node lists) are handled correctly at the start.
- **Naming**: Moderate. While `odd` and `even` are clear, `link` is slightly vague; `evenHead` would be more descriptive as it stores the start of the even list.
- **Improvements**: 
    - Use more descriptive naming for the `link` variable (e.g., `evenHead`).
    - Ensure consistent spacing around operators (e.g., `head == null` instead of `head==null`) for better PEP/Style Guide adherence.

---

# Question Revision
# Revision Report: Odd Even Linked List

- **Pattern:** Two Pointers (Multi-pointer traversal)
- **Brute Force:** Traverse the list and store all values in an array. Separate the odd-indexed values and even-indexed values into two lists, then concatenate them.
- **Optimal Approach:** 
    - Maintain two separate chains: an `odd` pointer and an `even` pointer.
    - Use a `headEven` reference to remember the start of the even chain.
    - Iteratively link `odd.next` to `odd.next.next` and `even.next` to `even.next.next`.
    - After reaching the end, attach the `headEven` chain to the end of the `odd` chain.
    - **Time Complexity:** $O(n)$ — single pass through the list.
    - **Space Complexity:** $O(1)$ — rearrangement is done in-place.
- **The 'Aha' Moment:** The requirement to group nodes based on their **positional index** rather than their **value** suggests maintaining two parallel traversal paths.
- **Summary:** Use two pointers to decouple the list into two independent chains (odd and even) and stitch them together at the end.

---