---
title: "Swap Nodes in Pairs"
slug: swap-nodes-in-pairs
date: "2026-05-28"
---

# My Solution
~~~c
/**
 * Definition for singly-linked list.
 * struct ListNode {
 *     int val;
 *     struct ListNode *next;
 * };
 */
struct ListNode* swapPairs(struct ListNode* head) {
    
    int c=0;
    if(head==NULL) return NULL;
    if(head->next==NULL) return head;
    struct ListNode* result=head->next;
    struct ListNode* tail=head->next;
    struct ListNode* temp;
    while(head!=NULL && head->next!=NULL){

        head->next=tail->next;
        tail->next=head;
        
        if(c==1){
            temp->next=tail;
        }
        if(head->next==NULL || head->next->next==NULL) break;
        tail=head->next->next;
        temp=head;
        head=head->next;
        c=1;



    }
    return result;
}
~~~

# Submission Review
## Approach
- **Technique**: Iterative pointer manipulation.
- **Optimality**: Optimal. It traverses the list once and swaps nodes in place without using additional data structures.

## Complexity
- **Time Complexity**: $O(N)$, where $N$ is the number of nodes in the linked list.
- **Space Complexity**: $O(1)$, as it only uses a few auxiliary pointers regardless of input size.

## Efficiency Feedback
- The runtime and memory usage are optimal. 
- The use of an integer `c` as a boolean flag to handle the first pair's connection is slightly inefficient but does not impact the overall complexity.

## Code Quality
- **Readability**: Moderate. The logic for updating `tail`, `temp`, and `head` is disjointed and requires careful tracing to verify correctness.
- **Structure**: Moderate. The loop contains multiple `if` breaks and conditional checks that could be simplified using a "dummy head" node to eliminate the special case for the first pair (`c == 1`).
- **Naming**: Poor. 
    - `c` is used as a flag; a name like `isFirstPair` would be clearer.
    - `tail` and `temp` are generic; `secondNode` or `prevPairEnd` would be more descriptive.
- **Concrete Improvements**:
    1. **Dummy Node**: Use a `struct ListNode dummy` to point to the head. This removes the need for the `c` flag and the `result` pointer initialization, as you can always perform `prev->next = current_pair_second`.
    2. **Loop Logic**: The `if(head->next==NULL || head->next->next==NULL) break;` inside the loop is redundant if the `while` condition and pointer updates are structured cleanly.
    3. **Pointer Updates**: Group the pointer updates logically to avoid confusing the current node with the next pair's nodes.

---

# Question Revision
### Swap Nodes in Pairs

**Pattern:** Linked List / Pointer Manipulation

**Brute Force:** 
Extract all node values into an array, swap adjacent elements, and write the values back into the original nodes.
- Time: $O(n)$
- Space: $O(n)$

**Optimal Approach:** 
Use a **dummy node** to simplify head swaps and a `prev` pointer to track the node before the pair being swapped. For each pair `(first, second)`, rewire pointers: `prev.next` $\to$ `second`, `first.next` $\to$ `second.next`, and `second.next` $\to$ `first`. Move `prev` two steps forward.
- Time: $O(n)$
- Space: $O(1)$

**The 'Aha' Moment:** 
The requirement to swap *nodes* rather than *values* means you must maintain a reference to the node preceding the pair to reconnect the list after the swap.

**Summary:** 
Use a dummy node and iteratively rewire three pointers to flip adjacent pairs while maintaining list continuity.

---