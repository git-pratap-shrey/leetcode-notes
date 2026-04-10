---
title: "Intersection of Two Linked Lists"
slug: intersection-of-two-linked-lists
date: "2026-04-10"

---
---

# My Solution
~~~cpp
/**
 * Definition for singly-linked list.
 * struct ListNode {
 *     int val;
 *     ListNode *next;
 *     ListNode(int x) : val(x), next(NULL) {}
 * };
 */
class Solution {
public:
    ListNode *getIntersectionNode(ListNode *headA, ListNode *headB) {

        unordered_map<struct ListNode*,int> mp;

        while(headA!=NULL || headB!=NULL){
            if(headA!=NULL){
                if(mp.find(headA)!=mp.end()){
                    return headA;

                }
                mp[headA]=1;
                headA=headA->next;
            }

            if(headB!=NULL){
                if(mp.find(headB)!=mp.end()){
                    return headB;
                }
                mp[headB]=1;
                headB=headB->next;
            }
        }

        return NULL;
        
    }
};
~~~

# Submission Review
## Approach
*   **Technique:** Hash Map (Hashing pointers).
*   **Optimal:** No. While correct, it uses auxiliary space $O(N+M)$ when an $O(1)$ space solution exists.

## Complexity
*   **Time Complexity:** $O(N + M)$, where $N$ and $M$ are the lengths of the two lists.
*   **Space Complexity:** $O(N + M)$ to store pointers in the hash map.
*   **Bottleneck:** The use of `unordered_map` forces linear auxiliary space and constant-factor overhead from hash collisions and allocations.

## Efficiency Feedback
*   **Overhead:** The map approach is unnecessary. The optimal "two-pointer" approach (resetting a pointer to the head of the other list upon reaching the end) achieves $O(1)$ space and $O(N+M)$ time.
*   **Logic:** The current loop structure is slightly clever by interleaving both lists, but it is less intuitive than traversing one list completely, storing its nodes, and traversing the second.

## Code Quality
*   **Readability:** Moderate. The interleaving logic inside the `while` loop makes the control flow slightly harder to follow than separate passes.
*   **Structure:** Moderate. Returning from inside the loop is acceptable, but the logic handles `headA` and `headB` inconsistently (if one list is much longer, it continues checking the map for the remaining nodes of the longer list, which is correct but inefficient).
*   **Naming:** Good. Standard `headA`, `headB`, and `mp` are clear in the context of this problem.
*   **Concrete Improvements:**
    *   Switch to the two-pointer approach:
        ```cpp
        ListNode *a = headA, *b = headB;
        while (a != b) {
            a = (a == NULL) ? headB : a->next;
            b = (b == NULL) ? headA : b->next;
        }
        return a;
        ```
    *   If using a hash structure, a `std::unordered_set` is more semantically appropriate than an `unordered_map` since you only care about presence, not the associated integer value.

---
---


# Question Revision
### Revision Report: Intersection of Two Linked Lists

**Pattern:** Two Pointers

**Brute Force:** 
For each node in List A, traverse the entirety of List B to check for a memory address match.
*   **Time:** $O(n \times m)$
*   **Space:** $O(1)$

**Optimal Approach:**
Initialize two pointers, `pA` and `pB`, at the heads of both lists. When a pointer reaches the end, redirect it to the head of the *other* list. If an intersection exists, they will collide at the intersection node after at most $n+m$ steps. If no intersection exists, they will both reach `null` simultaneously.
*   **Time:** $O(n + m)$
*   **Space:** $O(1)$

**The 'Aha' Moment:**
When two paths have different lengths but the same suffix, redirecting each pointer to the opposite head forces them to traverse an identical total distance ($A+B = B+A$), ensuring they synchronize at the intersection point.

**Summary:**
When two linked structures have different lengths but share a common tail, traversing both lists in swapped order equalizes the distance to force a collision at the intersection point.

---
