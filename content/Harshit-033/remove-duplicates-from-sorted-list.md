---
title: "Remove Duplicates from Sorted List"
slug: remove-duplicates-from-sorted-list
date: "2026-10-09"
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
    ListNode* deleteDuplicates(ListNode* head) {
        struct ListNode* temp=head;
        struct ListNode* curr=head;

        while(curr!=NULL){

            while(temp!=NULL && curr->val==temp->val){
                temp=temp->next;

            }
            curr->next=temp;
            curr=temp;


        }

        return head;

        
        
    }
};
~~~

# Submission Review
## Approach
- **Technique**: Two-pointer sliding window / linear traversal.
- **Optimality**: Optimal. The problem requires visiting each node at least once to check for duplicates.

## Complexity
- **Time Complexity**: $O(n)$, where $n$ is the number of nodes in the list. Each node is visited exactly once by the `temp` pointer.
- **Space Complexity**: $O(1)$. Only two pointer variables are used regardless of input size.

## Efficiency Feedback
- **Runtime**: The logic is efficient; however, the current implementation does not explicitly `delete` the duplicate nodes, leading to **memory leaks**. In a production environment or a strict system, the nodes skipped by the `temp` pointer should be freed.

## Code Quality
- **Readability**: Moderate. The logic is clear, but the use of `struct ListNode*` is redundant in C++ (where `ListNode*` suffices).
- **Structure**: Good. The nested loop correctly handles contiguous duplicates.
- **Naming**: Moderate. `temp` is a generic name; `fast` or `explorer` would more accurately describe its role in skipping duplicates.

**Concrete Improvements:**
1. **Memory Management**: Implement `delete` for skipped nodes to prevent memory leaks.
2. **C++ Idioms**: Remove the `struct` keyword from variable declarations.
3. **Null Safety**: The logic is safe, but using `nullptr` consistently instead of `NULL` is preferred in modern C++.

---

# Question Revision
# Revision Report: Remove Duplicates from Sorted List

- **Pattern:** Two Pointers (Fast & Slow / Current & Next)
- **Brute Force:** Traverse the list and store all unique elements in a Hash Set, then rebuild a new linked list from the set.
- **Optimal Approach:** 
    - Use a single pointer `current` to traverse the list.
    - Compare `current.val` with `current.next.val`.
    - If they are equal, skip the next node by setting `current.next = current.next.next`.
    - If they are different, simply move the `current` pointer forward.
    - **Time Complexity:** $O(n)$ — single pass through the list.
    - **Space Complexity:** $O(1)$ — in-place modification.
- **The 'Aha' Moment:** The keyword **"Sorted"** implies that all duplicate values are guaranteed to be adjacent, allowing for a local comparison without needing extra storage.
- **Summary:** Compare the current node to its immediate neighbor and bypass the neighbor if the values match.

---