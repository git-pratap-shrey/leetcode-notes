--- title: "Merge Two Sorted Lists" slug: merge-two-sorted-lists date: "2026-06-27" ---  # My Solution ~~~/**
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
    ListNode* mergeTwoLists(ListNode* list1, ListNode* list2) {
        ListNode* ans=new ListNode();
        ListNode* temp=ans;
        ListNode* x=list1;
        ListNode* y=list2;
        while(x!=NULL && y!=NULL){
            if(x->val<=y->val){
                ans->next=x;
                x=x->next;
                ans=ans->next;
            }
            else{
                ans->next=y;
                y=y->next;
                ans=ans->next;
            }
        }
        if(x==NULL && y!=NULL){
            ans->next=y;
        }
        if(x!=NULL && y==NULL){
            ans->next=x;
        }
        return temp->next;
    }
}; - cpp~~~  # Submission Review ## Approach
- **Technique**: Iterative two-pointer approach using a dummy head node.
- **Optimality**: Optimal. It processes each node exactly once.

## Complexity
- **Time Complexity**: $O(n + m)$, where $n$ and $m$ are the lengths of the two lists.
- **Space Complexity**: $O(1)$, as it rearranges existing nodes in-place (excluding the single dummy node).

## Efficiency Feedback
- **Memory Leak**: The dummy node `ans` is allocated on the heap via `new` but is never `delete`d, causing a memory leak. Using a stack-allocated dummy node (e.g., `ListNode dummy; ListNode* ans = &dummy;`) would resolve this.
- **Redundant Logic**: The final two `if` statements check for `NULL` explicitly. This can be simplified to `ans->next = x ? x : y;`.

## Code Quality
- **Readability**: Moderate. The logic is straightforward, but the naming is vague.
- **Structure**: Good. The flow follows a standard merge pattern.
- **Naming**: Poor. `ans`, `temp`, `x`, and `y` are non-descriptive. Better names would be `current`, `dummyHead`, `p1`, and `p2`.
- **Concrete Improvements**:
    - Use a stack-allocated dummy node to prevent memory leaks.
    - Replace `NULL` with `nullptr` (C++11 standard).
    - Simplify the trailing node attachment.  ---  # Question Revision ### Merge Two Sorted Lists

**Pattern:** Two Pointers / Dummy Node

**Brute Force:** Collect all elements from both lists into an array, sort the array, and construct a new linked list from the result.

**Optimal Approach:** 
Initialize a `dummy` node to act as the starting point of the merged list. Use two pointers to traverse both lists simultaneously; at each step, compare the current nodes and attach the smaller one to the merged list, advancing that pointer. Once one list is exhausted, append the remainder of the other list.
- **Time Complexity:** $O(n + m)$
- **Space Complexity:** $O(1)$

**The 'Aha' Moment:** The "sorted" property guarantees that the smallest remaining element is always at the head of one of the two lists.

**Summary:** Use a dummy node and two pointers to greedily weave the two lists together by always picking the smaller current head.  ---