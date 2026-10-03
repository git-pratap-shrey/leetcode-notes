---
title: "Copy List with Random Pointer"
slug: copy-list-with-random-pointer
date: "2026-10-02"
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
        if(!head){
            return NULL;
        }
        ListNode* ptr2 = head->next;        
        ListNode* ptr1 = head;

        while(ptr2){
            head->next = ptr2->next;
            ptr2->next = ptr1;

            ptr1 = ptr2;

            ptr2 = head->next;
        }

        return ptr1;
    }
};
~~~

# Submission Review
## Approach
- **Technique**: Iterative linked list reversal.
- **Correctness**: **Incorrect**. The provided code implements a logic for reversing a standard singly-linked list, but it does not address the problem "Copy List with Random Pointer." It fails to create a deep copy of the list and completely ignores the `random` pointer requirement.

## Complexity
- **Time Complexity**: $O(N)$, where $N$ is the number of nodes in the list.
- **Space Complexity**: $O(1)$, as it performs the operation in-place.
- **Bottleneck**: The solution is fundamentally flawed as it solves the wrong problem.

## Efficiency Feedback
- The logic provided is for an in-place reversal, which is efficient for that specific task, but irrelevant to the task of cloning a list with random pointers.

## Code Quality
- **Readability**: Moderate. The logic is easy to follow, but the variable naming is generic.
- **Structure**: Poor. The class contains a method `reverseList` while the problem requires a cloning function (typically named `copyRandomList`).
- **Naming**: Poor. `ptr1` and `ptr2` are non-descriptive. Standard naming like `prev`, `curr`, and `next` would be preferred.
- **Concrete Improvements**: 
    1. Implement a mapping (using a `std::unordered_map<ListNode*, ListNode*>`) to track original nodes and their corresponding copies.
    2. Ensure the `random` pointers are assigned during or after the creation of the copy nodes.
    3. Replace the `reverseList` logic with the actual cloning logic.

---

# Question Revision
# Revision Report: Copy List with Random Pointer

- **Pattern**: Hash Map / Interweaving Nodes
- **Brute Force**: Use a Hash Map to store the mapping from `{original_node: copied_node}`. Iterate once to create copies and a second time to link the `next` and `random` pointers using the map.
- **Optimal Approach**: 
    - **Logic**: Interweave the copied nodes directly into the original list (e.g., `A -> A' -> B -> B'`). 
    - **Step 1**: Create copies and insert them immediately after the original node.
    - **Step 2**: Set the `random` pointers for the copies: `curr.next.random = curr.random.next` (if `curr.random` exists).
    - **Step 3**: Separate the interwoven list into the original and the copy by restoring the `next` pointers.
    - **Complexity**: 
        - Time: $O(n)$
        - Space: $O(1)$ (excluding the space required for the new list)
- **The 'Aha' Moment**: When you need to map an original node to its copy without extra space, try embedding the copy directly into the original structure to use the `next` pointer as a natural map.
- **Summary**: To avoid a hash map, weave the copies into the original list to easily locate random pointer targets.

---