---
title: "Merge Two Sorted Lists"
slug: merge-two-sorted-lists
date: "2026-10-14"
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
    public ListNode mergeTwoLists(ListNode list1, ListNode list2) {
        ListNode dummy = new ListNode(-1);
        ListNode temp = dummy;
        while(list1!=null && list2!=null){
            if(list1.val>list2.val){
                temp.next = list2;
                temp = list2;
                list2 = list2.next;
            }
            else {
                temp.next = list1;
                temp = list1;
                list1 = list1.next;
            }
        }
        while(list1!=null){
            temp.next = list1;
            temp = list1;
            list1 = list1.next;
        }
        while(list2!=null){
            temp.next = list2;
            temp = list2;
            list2 = list2.next;
        }
        return dummy.next;
    }
}
~~~

# Submission Review
## Approach
- **Technique**: Two-pointer iterative approach using a dummy head node to build a new sorted list.
- **Optimality**: Optimal. It processes each node exactly once.

## Complexity
- **Time Complexity**: $O(n + m)$, where $n$ and $m$ are the lengths of the two lists.
- **Space Complexity**: $O(1)$. The solution reuses existing nodes by rearranging pointers; only a constant amount of extra space is used for the dummy node and temporary pointers.

## Efficiency Feedback
- **Runtime**: The runtime is optimal.
- **Optimization**: The two trailing `while` loops can be replaced with simple `if` statements. Since the input lists are already sorted, once one list is exhausted, the remainder of the other list can be attached in a single operation:
  ```java
  temp.next = (list1 != null) ? list1 : list2;
  ```

## Code Quality
- **Readability**: Good. The logic is straightforward and follows standard linked-list traversal patterns.
- **Structure**: Moderate. The repetitive nature of the three `while` loops adds unnecessary verbosity.
- **Naming**: Good. `dummy` and `temp` are standard conventions for this problem.
- **Concrete Improvements**:
    1. Replace the final two `while` loops with a single conditional assignment to reduce code duplication.
    2. The line `temp = list2;` (and `temp = list1;`) is redundant because `temp.next = list2;` is followed by `temp = temp.next;` conceptually; however, `temp = list2` works correctly. Using `temp = temp.next` is more idiomatic.

---

# Question Revision
# Revision Report: Merge Two Sorted Lists

- **Pattern:** Two Pointers (Dummy Node Technique)
- **Brute Force:** Traverse both lists, collect all elements into an array, sort the array, and rebuild a new linked list.
- **Optimal Approach:** 
    - Use a **dummy node** to act as the starting anchor of the result list.
    - Use a `current` pointer to track the tail of the new list.
    - Compare the head nodes of both lists; attach the smaller node to `current.next` and advance that list's pointer.
    - Once one list is exhausted, attach the remainder of the non-empty list to the end.
    - **Time Complexity:** $O(n + m)$ where $n$ and $m$ are lengths of the lists.
    - **Space Complexity:** $O(1)$ (reusing existing nodes).
- **The 'Aha' Moment:** The input lists are already **sorted**, implying a linear merge where the next smallest element must be at the current head of either list.
- **Summary:** Use a dummy node and two pointers to iteratively stitch the smaller available node into a new list.

---