---
title: "Linked List Cycle II"
slug: linked-list-cycle-ii
date: "2026-02-23"

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
    ListNode *detectCycle(ListNode *head) {
        unordered_map<ListNode*, int> mp;   // store node address
        ListNode* p = head;
        int x = 0;

        while(p != NULL) {
            if(mp.find(p) != mp.end()) {
                return p;   
            }

            mp[p] = x++;   
            p = p->next;
        }

        return NULL;   
    }
};
~~~

# Submission Review
## Approach
- **Technique:** Hash Map (Hashing).
- **Optimality:** Suboptimal. While it correctly identifies the cycle, it utilizes $O(N)$ extra space, whereas the problem can be solved in $O(1)$ space using Floyd's Cycle-Finding Algorithm (Tortoise and Hare).

## Complexity
- **Time Complexity:** $O(N)$, where $N$ is the number of nodes in the list. Each node is visited once, and hash map insertions/lookups are $O(1)$ on average.
- **Space Complexity:** $O(N)$ to store the addresses of the visited nodes in the `unordered_map`.

## Efficiency Feedback
- **Runtime:** The overhead of `std::unordered_map` (hashing, potential collisions, memory allocation) makes this slower than the pointer-based approach.
- **Memory:** The $O(N)$ space usage is the primary bottleneck. In competitive programming, especially for large datasets, this could lead to Memory Limit Exceeded (MLE) or unnecessary cache misses.

## Code Quality
- **Readability:** Good. The logic is straightforward and easy to follow.
- **Structure:** Good. Simple linear traversal.
- **Naming:** Moderate. `p` and `mp` are generic names; `currentNode` and `visitedNodes` would be more descriptive. Variable `x` is unused for the logic, making it redundant.
- **Concrete Improvements:**
    - Implement **Floyd’s Cycle-Finding Algorithm**:
        1. Use `slow` and `fast` pointers. If they meet, a cycle exists.
        2. Reset one pointer to `head` and move both at speed 1; the node where they meet again is the start of the cycle.
    - Remove the unused `int x` and the `unordered_map` entirely to achieve $O(1)$ space.

---
---


# Question Revision
### Revision Report: Linked List Cycle II

**Pattern:** Two Pointers (Floyd’s Cycle-Finding Algorithm)

**Brute Force:** 
Store each node's memory address in a Hash Set while traversing. The first node already present in the set is the start of the cycle.
*   **Time:** $O(n)$
*   **Space:** $O(n)$

**Optimal Approach:**
1.  **Phase 1:** Use a `slow` pointer (1 step) and `fast` pointer (2 steps). If they meet, a cycle exists.
2.  **Phase 2:** Reset `slow` to `head`. Move both `slow` and `fast` one step at a time. The node where they meet is the start of the cycle.
*   **Time:** $O(n)$
*   **Space:** $O(1)$

**The 'Aha' Moment:**
When the distance between pointers is a multiple of the cycle length, the algebraic relation between the head-to-entry distance and the meeting-point-to-entry distance forces the pointers to collide exactly at the cycle's start.

**Summary:** 
When you detect a cycle with two pointers, resetting the slow pointer to the head and moving both at the same speed guarantees they collide at the cycle's entrance.

---
