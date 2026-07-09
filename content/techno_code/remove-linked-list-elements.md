--- title: "Remove Linked List Elements" slug: remove-linked-list-elements date: "2026-07-04" ---  # My Solution ~~~/**
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
    ListNode* removeElements(ListNode* head,int val) {

      ListNode dummy(0);
      dummy.next=head;

      ListNode *prev=&dummy;
      ListNode *cur=head;

      while(cur){

        if(cur->val==val){
          prev->next=cur->next;
        }
        else{
          prev=cur;
        }

        cur=cur->next;
      }

      return dummy.next;
    }
}; - cpp~~~  # Submission Review ## Approach
- **Technique**: Two-pointer traversal with a dummy head node.
- **Optimality**: Optimal. It processes the list in a single pass and handles edge cases (like removing the head) without special conditional blocks.

## Complexity
- **Time Complexity**: $O(N)$, where $N$ is the number of nodes in the linked list.
- **Space Complexity**: $O(1)$.

## Efficiency Feedback
- **Memory Leak**: The code bypasses nodes that match `val` (`prev->next = cur->next`) but never calls `delete` on the removed nodes. In a production C++ environment, this results in a memory leak.
- **Performance**: The runtime is minimal as it only involves pointer manipulation.

## Code Quality
- **Readability**: Good. The logic is straightforward and easy to follow.
- **Structure**: Good. The use of a stack-allocated `dummy` node simplifies the return statement and head-removal logic.
- **Naming**: Good. `prev`, `cur`, and `dummy` are standard and descriptive.
- **Improvements**:
    - Implement `delete` for removed nodes to prevent memory leaks.
    - Example:
      ```cpp
      if (cur->val == val) {
          ListNode* temp = cur;
          prev->next = cur->next;
          cur = cur->next;
          delete temp; 
      } else {
          prev = cur;
          cur = cur->next;
      }
      ```  ---  # Question Revision ### Remove Linked List Elements

**Pattern:** Dummy Node / Single Pointer

**Brute Force:** Convert the linked list into an array, filter out the target values, and rebuild a new linked list from the remaining elements.

**Optimal Approach:**
Create a `dummy` node that points to the `head`. Iterate through the list using a `current` pointer. If `current.next.val` matches the target value, skip the next node by setting `current.next = current.next.next`. Otherwise, move `current` forward.
- **Time Complexity:** $O(n)$
- **Space Complexity:** $O(1)$

**The 'Aha' Moment:** The need to potentially remove the head node indicates that a dummy node is required to provide a consistent reference point.

**Summary:** Use a dummy node to unify the deletion logic for both the head and subsequent nodes.  ---