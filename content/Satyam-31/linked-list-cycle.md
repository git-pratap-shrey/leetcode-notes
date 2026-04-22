---
title: "Linked List Cycle"
slug: linked-list-cycle
date: "2026-04-22"
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
    bool hasCycle(ListNode *head) {
        ListNode *s=head;
        ListNode *f=head;
        while(f != NULL && f->next != NULL){
            s=s->next;
            f=f->next->next;
            if(s==f) return true;
        }
        return false;
    }
};
~~~

# Submission Review
## Approach
- **Technique:** Floyd's Cycle-Finding Algorithm (Tortoise and Hare).
- **Optimality:** Optimal. It detects cycles without needing extra memory for visited nodes.

## Complexity
- **Time Complexity:** $O(N)$, where $N$ is the number of nodes in the linked list.
- **Space Complexity:** $O(1)$, as only two pointers are used regardless of the list size.

## Efficiency Feedback
- The implementation is highly efficient.
- Memory usage is minimal.
- The `while` loop condition correctly handles both empty lists and lists with a single node, preventing null pointer dereferences.

## Code Quality
- **Readability:** Moderate. The logic is standard, but variable names are overly cryptic.
- **Structure:** Good. The function is concise and follows a logical flow.
- **Naming:** Poor. `s` and `f` should be renamed to `slow` and `fast` for clarity.
- **Improvements:** 
    - Rename `s` $\rightarrow$ `slow` and `f` $\rightarrow$ `fast`.
    - Use `nullptr` instead of `NULL` for modern C++ standards.

---

# Question Revision
### Linked List Cycle

**Pattern:** Two Pointers (Fast & Slow)

**Brute Force:** Use a Hash Set to store visited node references; if a node is encountered that already exists in the set, a cycle is detected.

**Optimal Approach:** 
*   **Logic:** Implement Floyd’s Cycle-Finding Algorithm. Initialize two pointers, `slow` and `fast`, at the head. Move `slow` by one step and `fast` by two steps. If the pointers meet, a cycle exists; if `fast` reaches `null`, the list is linear.
*   **Time Complexity:** $O(n)$
*   **Space Complexity:** $O(1)$

**The 'Aha' Moment:** The requirement to detect a loop in a linked structure without extra space suggests using relative speed to "lap" the target.

**Summary:** A fast pointer will eventually lap a slow pointer if and only if a cycle exists.

---