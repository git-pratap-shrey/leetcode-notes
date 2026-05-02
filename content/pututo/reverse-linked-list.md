---
title: "Reverse Linked List"
slug: reverse-linked-list
date: "2026-05-02"
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
    ListNode* reverseList(ListNode* head) {
        ListNode* temp=head;
        ListNode* ans=NULL;
        while(temp!=NULL){
            temp=temp->next;
            head->next=ans;
            ans=head;
            head=temp;
        }
        return ans;
    }
};
~~~

# Submission Review
## Approach
- **Technique**: Iterative pointer manipulation.
- **Optimality**: Optimal. It processes each node exactly once and uses constant extra space.

## Complexity
- **Time Complexity**: $O(n)$, where $n$ is the number of nodes in the linked list.
- **Space Complexity**: $O(1)$.

## Efficiency Feedback
- The implementation is highly efficient in both time and memory. No further optimizations are required.

## Code Quality
- **Readability**: Moderate. While the logic is sound, the variable naming is counter-intuitive.
- **Structure**: Good. The logic is concise and contained within a single loop.
- **Naming**: Moderate. 
    - `ans` is used as the `prev` pointer.
    - `head` is repurposed as the `current` pointer.
    - `temp` is used as the `next` pointer.
- **Concrete Improvements**: Use standard naming conventions for linked list reversal to improve clarity:
    - Rename `ans` $\rightarrow$ `prev`
    - Rename `head` (inside the loop) $\rightarrow$ `curr`
    - Rename `temp` $\rightarrow$ `next`

---

# Question Revision
### Reverse Linked List

**Pattern:** Two Pointers (Iterative Traversal)

**Brute Force:** 
Traverse the list and push all node values onto a stack; pop them back to overwrite the original list's values.
- Time: $O(n)$
- Space: $O(n)$

**Optimal Approach:** 
Use three pointers (`prev`, `curr`, `next`) to reverse the links in a single pass. In each iteration, store `curr.next`, flip `curr.next` to point to `prev`, then move `prev` and `curr` one step forward.
- Time: $O(n)$
- Space: $O(1)$

**The 'Aha' Moment:** 
Since linked lists are unidirectional, you must cache the `next` node before breaking the link to prevent losing the rest of the list.

**Summary:** Iteratively reassign each node's `next` pointer to its predecessor while maintaining a reference to the remaining chain.

---