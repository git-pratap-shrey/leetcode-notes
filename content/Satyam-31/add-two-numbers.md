---
title: "Add Two Numbers"
slug: add-two-numbers
date: "2026-09-20"
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
        ListNode* curr=head;
        ListNode* prev=NULL;
        ListNode* next;
        while(curr!=NULL){
            next=curr->next;
            curr->next=prev;
            prev=curr;
            curr=next;
        }
        return prev;
    }
};
~~~

# Submission Review
## Approach
- **Technique:** Iterative linked list reversal.
- **Optimality:** The logic for reversing a list is optimal ($O(n)$ time, $O(1)$ space). However, **the solution is incomplete**. The problem "Add Two Numbers" requires summing two lists; this code only implements a helper function to reverse a list and does not solve the actual problem.

## Complexity
- **Time Complexity:** $O(n)$, where $n$ is the number of nodes in the list.
- **Space Complexity:** $O(1)$, as it only uses a few pointers regardless of input size.

## Efficiency Feedback
- The `reverseList` function is efficient.
- **Critical Failure:** The `addTwoNumbers` method is entirely missing. The provided code cannot pass the problem as it does not perform any addition.

## Code Quality
- **Readability:** Good. The logic is standard and easy to follow.
- **Structure:** Poor. The class contains a utility method but lacks the required entry point method defined by the problem signature.
- **Naming:** Moderate. `curr`, `prev`, and `next` are standard, though `next` as a variable name can occasionally be confused with the member `ListNode::next`.
- **Concrete Improvements:**
    1. Implement the `addTwoNumbers` method.
    2. Remove the `reverseList` logic if the lists are already provided in the correct order (as per the standard LeetCode "Add Two Numbers" problem), as reversing is unnecessary.

---

# Question Revision
# Revision Report: Add Two Numbers

- **Pattern:** Linked List / Simulation
- **Brute Force:** Convert both linked lists into integers, sum them, and convert the resulting sum back into a new linked list. (Inefficient due to potential integer overflow for very long lists).
- **Optimal Approach:** 
    - Simulate manual addition from right to left (already provided by the list structure).
    - Use a `dummy` node to simplify head pointer management.
    - Iterate through both lists simultaneously, calculating `sum = val1 + val2 + carry`.
    - Create a new node with `sum % 10` and update `carry = sum / 10`.
    - **Time Complexity:** $O(\max(m, n))$ where $m, n$ are lengths of the two lists.
    - **Space Complexity:** $O(\max(m, n))$ to store the resulting sum list.
- **The 'Aha' Moment:** The lists are provided in reverse order, which perfectly aligns with how manual addition starts (from the ones place).
- **Summary:** Use a dummy head and a carry variable to simulate digit-by-digit addition across two linked lists.

---