--- title: "Remove Duplicates from Sorted List" slug: remove-duplicates-from-sorted-list date: "2026-07-02" ---  # My Solution ~~~/**
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
         ListNode* cur=head;

        while(cur&&cur->next){

          if(cur->val==cur->next->val)
              cur->next=cur->next->next;
          else
              cur=cur->next;

        }

        return head;
    }
}; - cpp~~~  # Submission Review ## Approach
- **Technique**: Single-pass traversal using a pointer to track the current node.
- **Optimality**: Optimal. Since the list is sorted, duplicates are guaranteed to be adjacent, allowing the problem to be solved in a single linear scan.

## Complexity
- **Time Complexity**: $O(n)$, where $n$ is the number of nodes in the linked list. Each node is visited at most once.
- **Space Complexity**: $O(1)$, as it only uses a single pointer regardless of input size.

## Efficiency Feedback
- **Runtime/Memory**: Very efficient due to the in-place modification of the list.
- **Observation**: In a production environment, this code causes a **memory leak**. The nodes removed via `cur->next = cur->next->next` are not explicitly deleted using `delete`, leaving them orphaned in memory. For competitive programming, this is typically acceptable, but for software engineering, it is a bug.

## Code Quality
- **Readability**: Good. The logic is straightforward and easy to follow.
- **Structure**: Good. The while-loop condition correctly handles both empty lists and lists with a single element.
- **Naming**: Good. `cur` is a standard abbreviation for "current".
- **Improvements**:
    - Add `delete` to free memory of the removed node:
      ```cpp
      ListNode* temp = cur->next;
      cur->next = cur->next->next;
      delete temp;
      ```
    - Ensure consistent indentation (the provided snippet has slight alignment issues).  ---  # Question Revision ### Remove Duplicates from Sorted List

**Pattern:** Two Pointers (Slow/Fast or Current/Next)

**Brute Force:** 
Use a Hash Set to store visited values while traversing the list; if a value exists in the set, remove the current node.
- Time: $O(n)$
- Space: $O(n)$

**Optimal Approach:** 
Traverse the list with a single pointer. Compare the current node's value with the next node's value. If they are identical, bypass the next node by setting `current.next = current.next.next`. If they differ, move the pointer forward.
- Time: $O(n)$
- Space: $O(1)$

**The 'Aha' Moment:** 
The keyword "Sorted" guarantees that all duplicate elements are contiguous, eliminating the need for extra storage.

**Summary:** 
Iterate through the sorted list and skip adjacent nodes with identical values.  ---