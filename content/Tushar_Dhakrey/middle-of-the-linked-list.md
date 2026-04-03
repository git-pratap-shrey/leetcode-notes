---
title: "Middle of the Linked List"
slug: middle-of-the-linked-list

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
    public ListNode middleNode(ListNode head) {
        ListNode f = head;
        ListNode s = head;
        while(f!=null && f.next!=null){
            f = f.next.next;
            s = s.next;
        }
        return s;
    }
}
~~~

# Submission Review
## Approach
*   **Technique:** Two-pointer approach (Tortoise and Hare).
*   **Optimality:** Optimal. It traverses the list exactly once without requiring extra memory.

## Complexity
*   **Time Complexity:** $O(N)$, where $N$ is the number of nodes in the linked list. The fast pointer traverses the list once.
*   **Space Complexity:** $O(1)$, as it only uses two pointer variables regardless of list size.

## Efficiency Feedback
*   The solution is highly efficient. It avoids storing nodes in an array or list, minimizing both memory allocation and garbage collection overhead.
*   The logic correctly handles both even and odd length lists per the standard problem requirements (returning the second middle node for even lengths).

## Code Quality
*   **Readability:** Moderate. While the logic is standard, the variable names `f` and `s` are overly brief.
*   **Structure:** Good. The loop condition correctly manages null pointers for both single-step and double-step traversal.
*   **Naming:** Poor. Use descriptive names like `fast` and `slow` instead of `f` and `s` to improve maintainability and clarity.
*   **Concrete Improvements:** 
    *   Rename `f` to `fast` and `s` to `slow`.
    *   Add a simple null check/guard clause at the start if you want to be defensive (though the current logic handles `head == null` correctly by returning `null`).

```java
public ListNode middleNode(ListNode head) {
    ListNode slow = head;
    ListNode fast = head;
    while (fast != null && fast.next != null) {
        fast = fast.next.next;
        slow = slow.next;
    }
    return slow;
}
```

---
---


# Question Revision
### Revision Report: Middle of the Linked List

**Pattern:** Two Pointers (Fast & Slow)

**Brute Force:** Traverse the list once to count total nodes ($N$), then traverse a second time to reach the $N/2$ position.
*   **Time:** $O(n)$
*   **Space:** $O(1)$

**Optimal Approach:** Use two pointers starting at the head. Move the `fast` pointer twice as fast as the `slow` pointer. When `fast` reaches the end of the list, `slow` will be exactly at the midpoint.
*   **Time:** $O(n)$
*   **Space:** $O(1)$

**The 'Aha' Moment:** Whenever a problem involves finding a specific relative position (like the middle or $k$-th element) in a singly linked list without knowing its length upfront, a "runner" technique allows you to compute the result in a single pass.

**Summary:** Move two pointers at different speeds, and let the speed differential handle the distance calculation for you.

---
