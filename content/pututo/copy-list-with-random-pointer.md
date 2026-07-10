---
title: "Copy List with Random Pointer"
slug: copy-list-with-random-pointer
date: "2026-07-03"

---

# My Solution
~~~/*
// Definition for a Node.
class Node {
public:
    int val;
    Node* next;
    Node* random;
    
    Node(int _val) {
        val = _val;
        next = NULL;
        random = NULL;
    }
};
*/

class Solution {
public:
    Node* copyRandomList(Node* head) {
        if(!head){
            return nullptr;
        }
        Node* curr = head;
        while(curr){
            Node* copy = new Node(curr->val);
            copy->next = curr->next;
            curr->next = copy;
            curr = copy->next;
        }
        curr = head;
        while(curr){
            if (curr->random){
                curr->next->random = curr->random->next;
            }
            curr = curr->next->next;
        }
        Node* dummy = new Node(0);
        Node* copyCurr = dummy;
        curr = head;
        while(curr){
            Node* copy = curr->next;
            curr->next = copy->next;
            copyCurr->next = copy;
            copyCurr = copy;
            curr = curr->next;
        }
        return dummy->next;
    }
};
~~~

# Submission Review

## Approach

- **Technique**: Interweaving (Three-pass algorithm). 
    1. Create copy nodes and insert them immediately after original nodes.
    2. Assign `random` pointers to copy nodes using the interweaved structure.
    3. Separate the interweaved list into original and copied lists.
- **Optimality**: Optimal. It achieves the deep copy without requiring an auxiliary hash map for mapping original nodes to copies.

## Complexity

- **Time Complexity**: $O(N)$, where $N$ is the number of nodes. The list is traversed three times.
- **Space Complexity**: $O(1)$ auxiliary space. While $O(N)$ space is used for the new list, no additional data structures proportional to the input size are used.

## Efficiency Feedback

- **Runtime**: High efficiency due to linear scans and avoidance of hash map overhead.
- **Memory**: Minimal overhead. The only minor inefficiency is the allocation of a `dummy` node on the heap (`new Node(0)`) which is not explicitly deleted, though negligible in competitive programming contexts.

## Code Quality

- **Readability**: Good. The logic is partitioned into three clear phases.
- **Structure**: Good. The flow is sequential and easy to follow.
- **Naming**: Good. Variables like `curr`, `copy`, and `copyCurr` clearly indicate their roles.
- **Improvements**: 
    - To avoid a minor memory leak, the `dummy` node could be allocated on the stack: `Node dummy(0);` and return `dummy.next`.

---

# Question Revision

#

## Copy List with Random Pointer

**Pattern:** Interweaving / Node Manipulation

**Brute Force:** Use a Hash Map to store the mapping between original nodes and their clones (`map[old_node] = new_node`). Iterate the list twice: first to create all nodes, second to assign `next` and `random` pointers using the map.

**Optimal Approach:**
1. **Interweave:** Create a copy of each node and insert it immediately after the original node (e.g., `A → A' → B → B'`).
2. **Assign Randoms:** For each original node `curr`, set `curr.next.random = curr.random.next` (the clone's random is the clone of the original's random).
3. **Separate:** Detach the interwoven list to restore the original and extract the cloned list.

*   **Time Complexity:** $O(n)$
*   **Space Complexity:** $O(1)$ (excluding the space required for the cloned list)

**The 'Aha' Moment:** By placing the clone directly next to the original, the original node acts as a pointer to its own clone, eliminating the need for an external map.

**Summary:** Interweave clones with original nodes to use the existing list structure as a temporary mapping for random pointers.

---
