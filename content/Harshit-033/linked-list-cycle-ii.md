---
title: "Linked List Cycle II"
slug: linked-list-cycle-ii
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
    ListNode *detectCycle(ListNode *head) {
    unordered_map<struct ListNode*,int> mp;
    int count=0;
    while(head!=NULL){
        if(mp.find(head)!=mp.end()){
            return head;

        }
        mp[head]=count;
        count++;
        head=head->next;
    }

    return NULL;
        
    }
};
~~~

# Submission Review
## Approach
*   **Technique:** Hash Map (Hashing) to track visited nodes.
*   **Optimality:** Suboptimal. Floyd’s Cycle-Finding Algorithm (Tortoise and Hare) provides the optimal solution by achieving constant space complexity.

## Complexity
*   **Time Complexity:** $O(N)$, where $N$ is the number of nodes in the list.
*   **Space Complexity:** $O(N)$, as the `unordered_map` stores each node pointer.

## Efficiency Feedback
*   **Bottleneck:** The use of `unordered_map` incurs significant space overhead. Additionally, hash map operations have an overhead compared to pointer arithmetic, though the asymptotic time complexity remains linear.
*   **Optimizations:** Implement Floyd’s Cycle-Finding Algorithm. It requires two pointers: one moving one step (`slow`) and one moving two steps (`fast`). When they meet, reset one pointer to the `head` and move both one step at a time; their meeting point will be the start of the cycle. This reduces space complexity to $O(1)$.

## Code Quality
*   **Readability:** Good. The logic is straightforward and easy to follow.
*   **Structure:** Good. The loop appropriately handles both cyclic and acyclic lists.
*   **Naming:** Moderate. `mp` and `count` are generic; while acceptable in a short snippet, more descriptive names like `visitedNodes` or `index` would be clearer.
*   **Concrete Improvements:** 
    *   The `count` variable is incremented but never used in the logic (since we only care if the node exists in the map). It can be removed to save a small amount of memory/processing.
    *   Use a `std::unordered_set<ListNode*>` instead of an `unordered_map`, as the value (the integer index) is never retrieved or utilized. This explicitly signals the intent of tracking set membership.

---
---


# Question Revision
### Revision Report: Linked List Cycle II

**Pattern:** Two Pointers (Floyd’s Cycle-Finding Algorithm)

**Brute Force:** 
Store every visited node reference in a `HashSet`. Iterate through the list; the first node already present in the set is the entry point of the cycle. 
*   **Time:** $O(n)$
*   **Space:** $O(n)$

**Optimal Approach:**
1. **Detect Cycle:** Use a `slow` pointer (1 step) and a `fast` pointer (2 steps). If they collide, a cycle exists.
2. **Find Entry:** Reset one pointer to the `head` and keep the other at the collision point. Move both at 1 step/node; the point where they meet is the start of the cycle.
*   **Time:** $O(n)$
*   **Space:** $O(1)$

**The 'Aha' Moment:**
When the fast pointer enters a cycle, the distance between it and the slow pointer increases by 1 each step until they meet, and the mathematical distance from the `head` to the cycle start is identical to the distance from the collision point to the cycle start.

**Summary:**
When asked to detect a cycle entry point with $O(1)$ space, remember that resetting one pointer to the head after a collision geometrically aligns the two pointers at the cycle's entrance.

---
