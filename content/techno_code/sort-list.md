--- title: "Sort List" slug: sort-list date: "2026-07-07" ---  # My Solution ~~~class Solution {
public:

    ListNode* merge(ListNode* a,ListNode* b){

        ListNode dummy;
        ListNode* cur=&dummy;

        while(a&&b){

            if(a->val<b->val){
                cur->next=a;
                a=a->next;
            }
            else{
                cur->next=b;
                b=b->next;
            }

            cur=cur->next;
        }

        cur->next=a?a:b;

        return dummy.next;
    }

    ListNode* sortList(ListNode* head) {

        if(!head||!head->next)
            return head;

        ListNode* slow=head;
        ListNode* fast=head->next;

        while(fast&&fast->next){
            slow=slow->next;
            fast=fast->next->next;
        }

        ListNode* mid=slow->next;
        slow->next=nullptr;

        ListNode* left=sortList(head);
        ListNode* right=sortList(mid);

        return merge(left,right);
    }
}; - cpp~~~  # Submission Review ## Approach
- **Technique**: Divide and Conquer (Recursive Merge Sort).
- **Optimality**: Optimal. Merge Sort is the preferred algorithm for sorting linked lists as it achieves $O(n \log n)$ time complexity without requiring random access to elements.

## Complexity
- **Time Complexity**: $O(n \log n)$. The list is split in half $\log n$ times, and each level of recursion performs a linear merge of $O(n)$.
- **Space Complexity**: $O(\log n)$. While the merge process uses $O(1)$ auxiliary space, the recursive calls to `sortList` create a function call stack of depth $\log n$.

## Efficiency Feedback
- **Runtime**: Efficient. The use of a stack-allocated dummy node (`ListNode dummy`) avoids unnecessary heap allocations during the merge phase.
- **Memory**: The space complexity is dominated by the recursion stack. To achieve $O(1)$ space, an iterative bottom-up merge sort would be required, though it is significantly more complex to implement.

## Code Quality
- **Readability**: Good. The logic is clean and follows standard merge sort patterns.
- **Structure**: Good. The separation of the `merge` logic from the `sortList` decomposition makes the code maintainable.
- **Naming**: Moderate. Variables `a` and `b` in `merge` are generic; `l1` and `l2` or `left` and `right` would be more descriptive.
- **Concrete Improvements**:
    - Mark the `merge` helper function as `private` to encapsulate it within the class.
    - Consider making `merge` a `static` member function as it does not depend on the class instance state.  ---  # Question Revision ### Sort List

**Pattern:** Divide and Conquer (Merge Sort)

**Brute Force:** Copy all node values into an array, sort the array using a built-in sorting algorithm, and overwrite the linked list node values.  
*   **Complexity:** Time $O(n \log n)$, Space $O(n)$

**Optimal Approach:** Implement a recursive Merge Sort. Use the **Slow and Fast Pointer** technique to find the middle of the list, split the list into two halves, recursively sort each half, and merge the two sorted lists into one.
*   **Time Complexity:** $O(n \log n)$
*   **Space Complexity:** $O(\log n)$ (recursion stack)

**The 'Aha' Moment:** The requirement for $O(n \log n)$ time complexity combined with a linked list structure strongly suggests Merge Sort, as merging linked lists doesn't require the extra $O(n)$ auxiliary space needed for arrays.

**Summary:** Find the midpoint with slow/fast pointers, split recursively, and merge sorted lists to achieve optimal time complexity.  ---