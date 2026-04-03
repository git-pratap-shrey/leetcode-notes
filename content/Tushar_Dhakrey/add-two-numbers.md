---
title: "Add Two Numbers"
slug: add-two-numbers

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
    public ListNode addTwoNumbers(ListNode l1, ListNode l2) {
        ListNode dummy = new ListNode();
        ListNode temp = dummy;
        int carry = 0;
        while(l1!=null || l2!=null || carry!=0){
            int sum =0 ;
            if(l1!=null){
                sum += l1.val;
                l1 = l1.next;
            }
            if(l2!=null){
                sum += l2.val;
                l2 = l2.next;
            }
            sum += carry;
            carry = sum/10;
            ListNode node = new ListNode(sum%10);
            temp.next = node;
            temp = temp.next;
        }
        return dummy.next;
    }
}
~~~

# Submission Review
## Approach
* **Technique:** Iterative simulation (single-pass addition).
* **Optimality:** Optimal. The algorithm processes each node exactly once, which is the theoretical lower bound for this problem.

## Complexity
* **Time Complexity:** $O(\max(N, M))$, where $N$ and $M$ are the lengths of the two linked lists.
* **Space Complexity:** $O(\max(N, M))$ to store the resulting linked list (excluding the input).

## Efficiency Feedback
* The implementation is highly efficient. It avoids unnecessary traversals or temporary data structures (like converting to `int` or `long`), which would fail for numbers exceeding standard integer limits.
* The use of a `dummy` node is a standard, efficient pattern to handle the head of the result list without additional conditional logic.

## Code Quality
* **Readability:** Good. The logic is clean and follows standard linked-list traversal patterns.
* **Structure:** Good. The while-loop condition `l1 != null || l2 != null || carry != 0` elegantly handles cases where the lists have different lengths or a carry exists after the final digits.
* **Naming:** Good. Variable names (`dummy`, `temp`, `carry`) are idiomatic and descriptive.

### Concrete Improvements
* **Memory Optimization:** While the current space complexity is $O(\max(N, M))$, if you were permitted to modify the input lists, you could reuse the nodes of the longer list to reduce auxiliary space to $O(1)$. However, the current approach is safer and better practice as it leaves input data structures immutable.
* **Code Compactness:** The `if` statements could be slightly simplified, but they are already quite clear. No refactoring is necessary for performance.

---
---


# Question Revision
### Revision Report: Add Two Numbers

**Pattern:** Linked List Traversal / Simulation

**Brute Force:** Convert both linked lists to integers, sum them, and reconstruct a new linked list. This fails for large inputs due to integer overflow constraints.

**Optimal Approach:** Traverse both lists simultaneously, adding corresponding digits along with a `carry` variable. Create new nodes for the result list as you iterate.
*   **Time Complexity:** $O(\max(n, m))$, where $n$ and $m$ are the lengths of the two lists.
*   **Space Complexity:** $O(\max(n, m))$ to store the resulting list.

**The 'Aha' Moment:** The fact that digits are stored in reverse order perfectly aligns with how primary school addition works—starting from the least significant digit (head of the list) and carrying over to the next.

**Summary:** Treat linked lists as digit streams and perform manual addition by maintaining a `carry` pointer until all nodes and the final carry are exhausted.

---
