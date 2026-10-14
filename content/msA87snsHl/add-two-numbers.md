---
title: "Add Two Numbers"
slug: add-two-numbers
date: "2026-10-05"
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
    public ListNode addTwoNumbers(ListNode l1, ListNode l2) {
        ListNode temp1 = l1;
        ListNode temp2 = l2;
        ListNode dummy = new ListNode(-1);
        ListNode current = dummy;
        int carry = 0;
        while(temp1!=null || temp2!=null){
            int sum = carry;
            if(temp1!=null) sum += temp1.val;
            if(temp2!=null) sum += temp2.val;
            ListNode node = new ListNode(sum%10);
            carry = sum/10;
            current.next = node;
            current = current.next;
            if(temp1!=null) temp1 = temp1.next;
            if(temp2!=null) temp2 = temp2.next;
        }
        if(carry!=0){
            ListNode node = new ListNode(carry);
            current.next = node;
        }
        return dummy.next;
    }
}
~~~

# Submission Review
## Approach
- **Technique**: Iterative simulation of elementary addition (digit-by-digit) using a dummy head node for the resulting linked list.
- **Optimality**: Optimal. The algorithm processes each node of the input lists exactly once.

## Complexity
- **Time Complexity**: $O(\max(N, M))$, where $N$ and $M$ are the lengths of the two linked lists.
- **Space Complexity**: $O(\max(N, M))$, to store the resulting sum list.

## Efficiency Feedback
- **Runtime/Memory**: The performance is optimal for this problem.
- **Optimizations**: No meaningful algorithmic optimizations exist; the current approach is the standard optimal solution.

## Code Quality
- **Readability**: Good. The logic is straightforward and follows the standard pattern for linked list problems.
- **Structure**: Good. The use of a `dummy` node correctly simplifies the edge case of initializing the head of the result list.
- **Naming**: Moderate. `temp1` and `temp2` are generic; `curr1` and `curr2` or simply reusing `l1` and `l2` (since they are local references) would be more idiomatic.
- **Concrete Improvements**:
    - The variables `temp1` and `temp2` are redundant; the method parameters `l1` and `l2` can be iterated directly.
    - The line `ListNode node = new ListNode(sum%10);` can be simplified by passing the value directly into `current.next = new ListNode(sum % 10);`.

---

# Question Revision
# Revision Report: Add Two Numbers

- **Pattern:** Linked List Simulation (Elementary Math)
- **Brute Force:** Convert both linked lists into integers, sum them, and convert the resulting sum back into a linked list. (Inefficient due to potential integer overflow for very long lists).
- **Optimal Approach:** 
    - Traverse both lists simultaneously using a `while` loop.
    - Maintain a `carry` variable to handle sums $\ge 10$.
    - Create a new linked list using a `dummy` head to simplify the attachment of new nodes.
    - **Time Complexity:** $O(\max(m, n))$, where $m$ and $n$ are the lengths of the two lists.
    - **Space Complexity:** $O(\max(m, n))$, to store the resulting sum list.
- **The 'Aha' Moment:** The "digits stored in reverse order" hint tells me I can process the lists from head to tail and carry values forward exactly like manual addition.
- **Summary:** Use a dummy head and a carry variable to simulate digit-by-digit addition while traversing two linked lists.

---