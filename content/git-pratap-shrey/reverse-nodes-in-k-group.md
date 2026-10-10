---
title: "Reverse Nodes in k-Group"
slug: reverse-nodes-in-k-group
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
ListNode* reverseList(ListNode* head) {
    ListNode* prev = nullptr;
    ListNode* curr = head;

    while(curr){
        ListNode* next = curr->next;
        curr->next = prev;
        prev = curr;
        curr = next;
    }

    return prev;
}

ListNode* findKthNode(ListNode* head, int k) {
    ListNode* prev = nullptr;
    ListNode* copy = head;

    while(head && k){
        k--;
        prev = head;
        head = head->next;
    }

    if(k != 0){
        return NULL;
    }

    return prev;
}

pair<ListNode*, ListNode*> reverseFirstK(ListNode* head, int k){
    ListNode* ptr1 = findKthNode(head, k);
    if (!ptr1){
        return {nullptr, head};
    }
    ListNode* ptr2 = ptr1->next;
    ptr1->next = NULL;

    ListNode* temp = reverseList(head);

    return {temp, ptr2};
}

class Solution {
public:
ListNode* reverseKGroup(ListNode* head, int k) {
    ListNode* ptr = head;
    ListNode* prev = nullptr;
    ListNode* newHead = nullptr;

    while(ptr){
        auto p = reverseFirstK(ptr, k);

        if (!p.first) break;

        if(!newHead)
            newHead = p.first;
        else
            prev->next = p.first;

        prev = ptr;
        ptr = p.second;
    }

    if(prev){
        prev->next = ptr;
    }

    return newHead;
}
};
~~~

# Submission Review
## Approach
- **Technique**: Iterative group-by-group reversal. The solution uses helper functions to locate the $k$-th node, isolate the group by null-terminating it, reverse it, and then stitch it back into the main list.
- **Optimality**: Optimal. It processes each node a constant number of times and uses minimal extra space.

## Complexity
- **Time Complexity**: $O(n)$, where $n$ is the number of nodes in the linked list. Each node is visited at most twice (once to find the $k$-th node and once during reversal).
- **Space Complexity**: $O(1)$. Only a few pointers are used regardless of the input size.

## Efficiency Feedback
- **Performance**: The runtime is efficient.
- **Optimization**: The `findKthNode` and `reverseFirstK` functions introduce slight overhead due to multiple passes over the same $k$ nodes. Combining the "check if $k$ nodes exist" and "reverse" logic into a single pass could marginally reduce the constant factor, but would not change the asymptotic complexity.

## Code Quality
- **Readability**: Good. The logic is decomposed into small, single-responsibility helper functions, making the `reverseKGroup` main loop easy to follow.
- **Structure**: Good. Separation of concerns between list traversal, reversal, and group management is clear.
- **Naming**: Good. Variable names like `ptr1`, `ptr2`, and `newHead` are intuitive in the context of linked list manipulation.
- **Concrete Improvements**:
    - **Header Guard/Namespace**: The helper functions are defined in the global namespace. In a production environment, they should be `private` static methods within the `Solution` class to avoid name collisions.
    - **Consistency**: `NULL` is used in `findKthNode`, while `nullptr` is used elsewhere. Consistency with `nullptr` (C++11 standard) is preferred.
    - **Edge Case**: The `if (prev)` check at the end is correct for handling the remaining nodes when the last group is smaller than $k$.

---

# Question Revision
# Revision Report: Reverse Nodes in k-Group

- **Pattern:** Linked List Manipulation (Iterative Reversal / Recursive Chunking)
- **Brute Force:** Extract all node values into an array, reverse the array in chunks of $k$, and write the values back into the original linked list nodes.
- **Optimal Approach:** 
    - **Logic:** Use a dummy head to simplify edge cases. Iterate through the list to check if a group of $k$ nodes exists. If it does, reverse that specific segment using the standard three-pointer swap method (`prev`, `curr`, `next`). Connect the tail of the reversed group to the next segment and update the previous group's tail to point to the new head of the current reversed segment.
    - **Time Complexity:** $O(n)$ — Each node is visited at most twice.
    - **Space Complexity:** $O(1)$ — Reversal is done in-place.
- **The 'Aha' Moment:** The requirement to reverse only if a full group of $k$ exists signals that I must "look ahead" to validate the group size before committing to the reversal.
- **Summary:** Perform a standard linked list reversal within a loop, but only after verifying that $k$ nodes remain.

---