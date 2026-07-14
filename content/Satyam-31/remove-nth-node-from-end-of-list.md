---
title: "Remove Nth Node From End of List"
slug: remove-nth-node-from-end-of-list
date: "2026-06-16"
---

# My Solution
~~~cpp
/**
 * Definition for singly-linked list.
 * struct ListNode {
 *     int val;
 *     ListNode *next;
 *     ListNode() : val(0), next(nullptr) {}
 *     ListNode(int x) : val(x), next(nullptr) {}
 *     ListNode(int x, ListNode *next) : val(x), next(next) {}
 * };
 */
class Solution {
public:
    ListNode* removeNthFromEnd(ListNode* head, int n) {
        ListNode* p=head;
        int c=0;
        while(p){
            c++;
            p=p->next;

        }
        ListNode*p1=head;
        int pos=c-n;
        if (pos == 0) {
            return head->next;
        }
        int m=0;
        while(p1){
            m++;
            if(m==pos){
                p1->next=p1->next->next;
            }
            p1=p1->next;
        }
        return head;
    }
};
~~~

# Submission Review
## Approach
- **Technique**: Two-pass traversal. The first pass calculates the total length of the linked list, and the second pass iterates to the node immediately preceding the target node to perform the deletion.
- **Optimality**: Optimal in terms of time and space complexity, although it is slightly less efficient than a one-pass "fast and slow pointer" approach.

## Complexity
- **Time Complexity**: $O(N)$, where $N$ is the number of nodes in the list. The list is traversed twice.
- **Space Complexity**: $O(1)$, as only a few pointer variables are used regardless of input size.

## Efficiency Feedback
- **Runtime**: The two-pass approach is acceptable, but a one-pass approach using two pointers (separated by $n$ nodes) would reduce the constant factor of the runtime.
- **Memory**: The solution has a **memory leak**. The node being removed from the list is bypassed via `p1->next = p1->next->next` but is never explicitly deleted using `delete`, which is poor practice in C++.

## Code Quality
- **Readability**: Poor. There is a lack of consistent spacing (e.g., `ListNode*p1=head;` and `int m=0;` are cramped) and minimal vertical whitespace.
- **Structure**: Moderate. The logic for handling the head removal (`pos == 0`) is correctly separated from the general case.
- **Naming**: Poor. Variables `p`, `p1`, `c`, and `m` are non-descriptive. Better names would be `current`, `prev`, `length`, and `currentIndex`.

### Concrete Improvements
1. **Memory Management**: Store the node to be deleted in a temporary pointer and call `delete` on it.
2. **Naming**: Rename `c` to `length` and `pos` to `targetIndex`.
3. **Formatting**: Add spaces around operators and after type declarations for better legibility.
4. **One-Pass Optimization**: Use two pointers (`fast` and `slow`). Move `fast` $n$ steps ahead, then move both until `fast` reaches the end; `slow` will then be at the node preceding the one to be removed.

---

# Question Revision
### Remove Nth Node From End of List

**Pattern:** Two Pointers (Fast & Slow)

**Brute Force:** 
Two-pass approach: First traverse the entire list to calculate the total length $L$, then traverse again to the $(L - n)$-th node to remove the next one.

**Optimal Approach:** 
Use two pointers and a **dummy node** (to handle edge cases like removing the head). Move the `fast` pointer $n + 1$ steps ahead. Then, move both `fast` and `slow` pointers simultaneously until `fast` reaches `null`. The `slow` pointer will now be positioned exactly before the node to be deleted.
- **Time Complexity:** $O(n)$
- **Space Complexity:** $O(1)$

**The 'Aha' Moment:** 
The requirement to find a position relative to the *end* of a singly linked list suggests maintaining a constant gap of $n$ between two pointers.

**Summary:** 
Use a fast pointer to create a lead of $n$ nodes, then slide both pointers until the fast one hits the end to pinpoint the target.

---