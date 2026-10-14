---
title: "Intersection of Two Linked Lists"
slug: intersection-of-two-linked-lists
date: "2026-10-11"
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
        if(headA == null || headB == null) return null;
        ListNode temp1 = headA;
        ListNode temp2 = headB;
        while(temp1!=temp2){
            if(temp1==null) temp1 = headB;
            if(temp2==null) temp2 = headA;
            if(temp1==temp2) return temp1;
            temp1 = temp1.next;
            temp2 = temp2.next;
        }
        return temp1;
    }
}
~~~

# Submission Review
## Approach
- **Technique:** Two-pointer approach. By switching heads when a pointer reaches the end, both pointers traverse a total distance of `length(A) + length(B)`, neutralizing the length difference.
- **Optimality:** Optimal. This is the most efficient way to find the intersection without using extra space or modifying the list structure.

## Complexity
- **Time Complexity:** $O(N + M)$, where $N$ and $M$ are the lengths of the two lists. Each node is visited at most twice.
- **Space Complexity:** $O(1)$. Only two pointer variables are used regardless of input size.

## Efficiency Feedback
- The runtime and memory usage are minimal. 
- **Minor Logic Redundancy:** The check `if(temp1==temp2) return temp1;` inside the loop is redundant because the `while(temp1!=temp2)` condition already handles the exit and the final `return temp1` provides the result.

## Code Quality
- **Readability:** Good. The logic is concise and standard for this problem.
- **Structure:** Moderate. The internal `if` checks for `null` and the immediate `return` inside the loop make the flow slightly disjointed.
- **Naming:** Good. `temp1` and `temp2` are acceptable, though `ptrA` and `ptrB` would be more descriptive.

**Concrete Improvements:**
1. Remove the redundant `if(temp1==temp2) return temp1;` inside the loop.
2. Clean up the pointer reassignment logic to make it more idiomatic:
   ```java
   while (temp1 != temp2) {
       temp1 = (temp1 == null) ? headB : temp1.next;
       temp2 = (temp2 == null) ? headA : temp2.next;
   }
   ```

---

# Question Revision
# Revision Report: Intersection of Two Linked Lists

- **Pattern**: Two Pointers (Synchronized Traversal)
- **Brute Force**: Use a Hash Set to store all node references of the first list, then traverse the second list to find the first node already present in the set. 
    - Time: $O(m + n)$, Space: $O(m)$
- **Optimal Approach**: 
    - Initialize two pointers, `ptrA` and `ptrB`, at the heads of both lists.
    - Traverse both lists. When a pointer reaches the end (`null`), redirect it to the head of the **opposite** list.
    - If they intersect, the pointers will meet at the intersection node during the second pass because they will have both traveled a total distance of $a + b + c$ (where $a, b$ are unique segments and $c$ is the shared segment).
    - If they don't intersect, both will hit `null` simultaneously.
    - **Complexity**: Time $O(m + n)$, Space $O(1)$
- **The 'Aha' Moment**: The problem requires finding a common starting point in two lists of different lengths; switching heads eliminates the length difference by equalizing the total distance traveled.
- **Summary**: Swap heads upon reaching the end to synchronize pointer distance and collide at the intersection.

---