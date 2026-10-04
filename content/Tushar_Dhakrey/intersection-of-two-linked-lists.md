---
title: "Intersection of Two Linked Lists"
slug: intersection-of-two-linked-lists
date: "2026-10-04"
---

# My Solution
~~~java
/**
 * Definition for singly-linked list.
 * public class ListNode {
 *     int val;
 *     ListNode next;
 *     ListNode(int x) {
 *         val = x;
 *         next = null;
 *     }
 * }
 */
public class Solution {
    public ListNode getIntersectionNode(ListNode headA, ListNode headB) {
        ListNode p1 = headA;
        ListNode p2 = headB;
        while(p1!=p2){
            if(p1==null){
                p1 = headB;
            }
            else{
                p1 = p1.next;
            }
            if(p2==null){
                p2 = headA;
            }
            else{
                p2 = p2.next;
            }
        }
        return p1;
    }
}
~~~

# Submission Review
## Approach
- **Technique**: Two-pointer approach. By switching heads after reaching the end of a list, both pointers traverse a total distance of `length(A) + length(B)`, neutralizing the difference in starting lengths.
- **Optimality**: Optimal. It finds the intersection in a single pass (maximum two traversals per node) without requiring extra space for a hash set.

## Complexity
- **Time Complexity**: $O(N + M)$, where $N$ and $M$ are the lengths of the two linked lists.
- **Space Complexity**: $O(1)$, as only two pointer variables are used regardless of input size.

## Efficiency Feedback
- The runtime is optimal. 
- Memory usage is minimal. No further optimizations are possible for this specific logic.

## Code Quality
- **Readability**: Good. The logic is clean and follows the standard implementation of this algorithm.
- **Structure**: Good. The `while` loop condition efficiently handles both the intersection case and the "no intersection" case (where both pointers eventually become `null`).
- **Naming**: Moderate. `p1` and `p2` are generic; `ptrA` and `ptrB` would be more descriptive, though acceptable in a competitive programming context.
- **Improvements**: None required. The code is concise and correct.

---

# Question Revision
# Revision Report: Intersection of Two Linked Lists

- **Pattern:** Two Pointers (Synchronized Traversal)
- **Brute Force:** Use a Hash Set to store all nodes of List A, then traverse List B to find the first node that already exists in the set.
- **Optimal Approach:** 
    - Initialize two pointers, `pA` and `pB`, at the heads of the lists.
    - Traverse both lists. When a pointer reaches the end (`null`), redirect it to the head of the *opposite* list.
    - If they intersect, they will meet at the intersection node because both will have traveled exactly $len(A) + len(B)$ distance. If they don't intersect, they will both hit `null` simultaneously.
    - **Time Complexity:** $O(n + m)$
    - **Space Complexity:** $O(1)$
- **The 'Aha' Moment:** Switching heads eliminates the length difference between the two lists, effectively "aligning" the pointers to start the second lap at the same relative distance from the intersection.
- **Summary:** Neutralize the length difference by having pointers swap lists upon reaching the end.

---