---
title: "Reverse Linked List"
slug: reverse-linked-list
date: "2026-07-03"

---

# My Solution
~~~
class
 Solution {
public:
    ListNode* reverseList(ListNode* head) {

    ListNode *p=NULL;
    ListNode *c=head;

    while(c){
    ListNode *n=c->next;
    c->next=p;
    p=c;
    c=n;
    }

    return p;
    }
};
~~~

# Submission Review

## Approach

- **Technique**: Iterative pointer manipulation.
- **Optimality**: Optimal. It performs a single pass over the list and uses constant extra space.

## Complexity

- **Time Complexity**: $O(n)$, where $n$ is the number of nodes in the linked list.
- **Space Complexity**: $O(1)$, as it only uses three auxiliary pointers.

## Efficiency Feedback
- The solution is highly efficient. There are no redundant operations or memory allocations.

## Code Quality

- **Readability**: Moderate. The logic is correct, but the lack of whitespace and single-letter variable names (`p`, `c`, `n`) makes it slightly less intuitive than using `prev`, `curr`, and `next`.
- **Structure**: Good. The loop logic is clean and standard for this problem.
- **Naming**: Poor. `p`, `c`, and `n` are too cryptic.
- **Concrete Improvements**:
    - Rename `p` $\rightarrow$ `prev`, `c` $\rightarrow$ `curr`, `n` $\rightarrow$ `next`.
    - Add consistent indentation inside the `while` loop.

---

# Question Revision

#

## Reverse Linked List

**Pattern:** Iterative Pointer Manipulation

**Brute Force:** 
Push all node values onto a stack, then iterate through the list again, popping values from the stack to overwrite node data.
- **Time:** $O(n)$
- **Space:** $O(n)$

**Optimal Approach:** 
Use three pointers (`prev`, `curr`, `nextTemp`) to reverse the link direction in a single pass. Store the next node before overwriting `curr.next` to point to `prev`.
- **Time:** $O(n)$
- **Space:** $O(1)$

**The 'Aha' Moment:** 
Since singly linked lists are unidirectional, you must maintain a reference to the previous node to "look backward" and redirect the pointer.

**Summary:** Iterate once, flipping each node's `next` pointer to its predecessor while caching the original next node to avoid losing the list.

---
