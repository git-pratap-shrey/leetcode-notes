---
title: "Sort List"
slug: sort-list

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
    public ListNode sortList(ListNode head) {
       //ArrayList<Integer> ans=new ArrayList<>();
       //ListNode temp=head;
       //while(temp!=null){
       // ans.add(temp.val);
       // temp=temp.next;
       //}
       //temp=head;
       //Collections.sort(ans);
       //for(int i=0;i<ans.size();i++){
        //    temp.val=ans.get(i);
        //    temp=temp.next;
       //}
       //return head;'''
       if(head==null || head.next == null){
        return head;
       } 
       ListNode mid = getmid(head);
       ListNode left = sortList(head);
       ListNode right = sortList(mid);
       return merge(left,right);
    }
    public ListNode merge(ListNode l1, ListNode l2){
        ListNode dummy = new ListNode();
        ListNode tail = dummy;
        while(l1 != null && l2 != null){
            if(l1.val<l2.val){
                tail.next = l1;
                l1 = l1.next;
                tail = tail.next;
            }
            else{
                tail.next = l2;
                l2 = l2.next;
                tail = tail.next;
            }
        }
        tail.next = (l1!=null)?l1:l2;
        return dummy.next;
    }
    public ListNode getmid(ListNode head){
        ListNode midpre = null;
        while(head != null && head.next != null){
            midpre = (midpre==null)?head:midpre.next;
            head = head.next.next;
        }
        ListNode mid = midpre.next;
        midpre.next = null;
        return mid;
    }
}
~~~

# Submission Review
## Approach
*   **Technique:** Merge Sort (Divide and Conquer).
*   **Optimality:** Optimal for linked lists. It provides $O(n \log n)$ time complexity and $O(\log n)$ stack space (due to recursion), which is standard for this problem.

## Complexity
*   **Time Complexity:** $O(n \log n)$. Every merge operation takes linear time, and the list is halved at each recursion step.
*   **Space Complexity:** $O(\log n)$ due to the recursion stack.

## Efficiency Feedback
*   The logic is efficient.
*   **Memory:** The `getmid` function correctly severs the link (`midpre.next = null`), which is crucial for preventing cycles and ensuring the sub-lists are terminated correctly.
*   **Potential Bottleneck:** The current `getmid` logic performs pointer movement, which is optimal, but care must be taken with the fast/slow pointer implementation. Your implementation is correct, but be wary of integer overflow in other variations of this problem (not applicable here).

## Code Quality
*   **Readability:** Moderate. The presence of commented-out code (the original $O(n)$ space approach) clutters the solution.
*   **Structure:** Good. The separation of `merge` and `getmid` makes the logic clean.
*   **Naming:** Good. `dummy` and `tail` are standard, and method names are descriptive.
*   **Improvements:**
    *   **Cleanup:** Remove the commented-out `ArrayList` code block; it distracts from the final implementation.
    *   **Safety:** The `getmid` function relies on `midpre` not being null. While logically sound for lists with $\ge 2$ nodes (checked in `sortList`), adding a simple assertion or explicit check makes it more robust.
    *   **Idiomatic Java:** The `merge` method is well-written. You could potentially use a ternary operator to simplify the `tail.next` assignment, but the current approach is perfectly readable.

---
---


# Question Revision
### Revision Report: Sort List

**Pattern:** Merge Sort (Divide & Conquer)

**Brute Force:**
Extract all node values into an array, sort the array using a built-in library ($O(n \log n)$ time, $O(n)$ space), and reconstruct the linked list.

**Optimal Approach:**
Perform a **Top-Down Merge Sort** by finding the midpoint using the Fast & Slow Pointer technique, recursively splitting the list into halves, and merging them using a standard linked list merge operation.
*   **Time Complexity:** $O(n \log n)$
*   **Space Complexity:** $O(\log n)$ (due to recursive stack frames).

**The 'Aha' Moment:**
When a problem asks to sort a linked list in $O(n \log n)$ time and $O(1)$ or $O(\log n)$ space, it is a direct signal to use Merge Sort because it is the only sorting algorithm that can operate on linked lists without needing random access to elements.

**Summary:**
Merge Sort is the gold standard for linked lists because the "split and merge" logic leverages pointers to avoid the $O(n)$ space requirement of arrays.

---
