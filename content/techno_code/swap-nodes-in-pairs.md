---
title: "Swap Nodes in Pairs"
slug: swap-nodes-in-pairs
date: "2026-06-26"

---

# My Solution
~~~/**
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
    ListNode* swapPairs(ListNode* h) {
        ListNode d(0);
        d.next=h;

        ListNode *p=&d;

        while(p->next&&p->next->next){
            ListNode *a=p->next;
            ListNode *b=a->next;

            a->next=b->next;
            b->next=a;
            p->next=b;

            p=a;
        }

        return d.next;
    }
};
~~~

# Submission Review

## Approach

- **Technique**: Iterative pointer manipulation using a **dummy node**.
- **Optimality**: Optimal. The solution processes the list in a single pass and swaps nodes in place.

## Complexity

- **Time Complexity**: $O(N)$, where $N$ is the number of nodes in the linked list. Each node is visited once.
- **Space Complexity**: $O(1)$, as it only uses a fixed number of pointers regardless of the input size.

## Efficiency Feedback
- The implementation is highly efficient. 
- Use of a stack-allocated dummy node (`ListNode d(0)`) avoids unnecessary dynamic memory allocation (`new`), reducing overhead.

## Code Quality

- **Readability**: Moderate. While the logic is clean, the variable names are overly cryptic.
- **Structure**: Good. The use of a dummy node correctly handles the edge case of swapping the head of the list.
- **Naming**: Poor. Single-letter variable names (`h`, `d`, `p`, `a`, `b`) make the code harder to follow.
- **Concrete Improvements**:
    - Rename `h` $\rightarrow$ `head`.
    - Rename `d` $\rightarrow$ `dummy`.
    - Rename `p` $\rightarrow$ `prev`.
    - Rename `a` $\rightarrow$ `first` and `b` $\rightarrow$ `second`.

---

# Question Revision

#

## Swap Nodes in Pairs

**Pattern:** Linked List Manipulation (Dummy Node / Iterative Pointer Reassignment)

**Brute Force:** Copy all node values into an array, swap adjacent elements in the array, and write the values back into the original linked list nodes.

**Optimal Approach:**
Use a `dummy` node pointing to the head to handle edge cases (like swapping the first two nodes). Maintain a `prev` pointer starting at the dummy. In each iteration, identify the two nodes to be swapped (`first` and `second`), rewire `prev.next` to `second`, `first.next` to `second.next`, and `second.next` to `first`. Move `prev` forward by two positions.
- **Time Complexity:** $O(n)$
- **Space Complexity:** $O(1)$

**The 'Aha' Moment:** The constraint to swap *nodes* rather than *values* requires a `dummy` node and a `prev` pointer to bridge the gap between the previously swapped pair and the current one.

**Summary:** Use a dummy node and a trailing pointer to iteratively rewire pairs of nodes without losing the list's continuity.

---
